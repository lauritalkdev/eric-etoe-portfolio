
"use client";

import { useEffect, useRef, useState } from "react";

type Message = {
  role: "user" | "model";
  text: string;
};

type UsageRecord = {
  startedAt: number;
  count: number;
};

const STORAGE_KEY = "eric_portfolio_chat_usage_v1";
const MAX_DAILY_QUESTIONS = 10;
const WINDOW_MS = 24 * 60 * 60 * 1000;
const MAX_MESSAGE_LENGTH = 500;

const WELCOME_MESSAGE =
  "Have an idea, a business challenge, or an opportunity " +
  "you're exploring?\n\n" +
  "Let's examine what's possible, identify practical " +
  "solutions, and explore how the right technology or " +
  "strategy could turn your vision into a valuable, " +
  "Looking for a reliable trader to manage your capital, " +
  "working product.\n\n" +
  "What would you like to explore?";

function readUsage(): UsageRecord {
  const now = Date.now();

  try {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (saved) {
      const parsed = JSON.parse(saved) as UsageRecord;

      if (
        Number.isFinite(parsed.startedAt) &&
        Number.isInteger(parsed.count) &&
        parsed.count >= 0 &&
        parsed.startedAt <= now &&
        now - parsed.startedAt < WINDOW_MS
      ) {
        return parsed;
      }
    }
  } catch {
    // Continue with a fresh browser counter.
  }

  return { startedAt: 0, count: 0 };
}

function saveUsage(usage: UsageRecord) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(usage));
  } catch {
    // Browser storage may be disabled.
  }
}

function formatRemainingTime(startedAt: number): string {
  if (!startedAt) return "";

  const remaining = Math.max(
    0,
    startedAt + WINDOW_MS - Date.now()
  );

  const hours = Math.floor(remaining / 3600000);
  const minutes = Math.ceil((remaining % 3600000) / 60000);

  if (hours > 0) {
    return `${hours}h ${minutes}m`;
  }

  return `${minutes}m`;
}

export default function PortfolioChatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [usage, setUsage] = useState<UsageRecord>({
    startedAt: 0,
    count: 0,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const sendingRef = useRef(false);

  useEffect(() => {
    setUsage(readUsage());
  }, []);

  useEffect(() => {
    if (open) {
      setUsage(readUsage());
      inputRef.current?.focus();
    }
  }, [open]);

  useEffect(() => {
    if (open) {
      bottomRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }
  }, [messages, loading, open]);

  const remaining = Math.max(
    0,
    MAX_DAILY_QUESTIONS - usage.count
  );

  async function sendMessage() {
    const question = input.trim();

    if (
      !question ||
      question.length > MAX_MESSAGE_LENGTH ||
      sendingRef.current
    ) {
      return;
    }

    const currentUsage = readUsage();

    if (currentUsage.count >= MAX_DAILY_QUESTIONS) {
      setUsage(currentUsage);
      setError(
        "You've reached your 10-question allowance. " +
        "You can continue after your 24-hour window resets."
      );
      return;
    }

    sendingRef.current = true;
    setLoading(true);
    setError("");
    setInput("");

    const previousMessages = [...messages];

    setMessages([
      ...previousMessages,
      { role: "user", text: question },
    ]);

    // This is a browser-side allowance, not server-side
    // rate limiting. Count each submitted question.
    const updatedUsage: UsageRecord = {
      startedAt:
        currentUsage.startedAt || Date.now(),
      count: currentUsage.count + 1,
    };

    saveUsage(updatedUsage);
    setUsage(updatedUsage);

    try {
      const history = previousMessages
        .slice(-8)
        .map((message) => ({
          role: message.role,
          parts: [
            {
              text: message.text.slice(0, 1000),
            },
          ],
        }));

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: question,
          history,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || "Unable to get a response."
        );
      }

      if (
        typeof data.reply !== "string" ||
        !data.reply.trim()
      ) {
        throw new Error(
          "The assistant returned an empty response."
        );
      }

      setMessages((current) => [
        ...current,
        {
          role: "model",
          text: data.reply,
        },
      ]);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
      sendingRef.current = false;
    }
  }

  return (
    <div className="fixed bottom-5 right-4 z-[100] sm:bottom-6 sm:right-6">
      {!open && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open project exploration assistant"
          className="flex items-center gap-3 rounded-full border border-cyan-400/40 bg-cyan-500 px-5 py-3.5 font-semibold text-slate-950 shadow-2xl shadow-cyan-950/40 transition hover:bg-cyan-400"
        >
          <span aria-hidden="true" className="text-xl">
            ✦
          </span>
          <span>Explore Your Idea</span>
        </button>
      )}

      {open && (
        <section
          role="dialog"
          aria-label="Project exploration assistant"
          className="flex h-[min(680px,calc(100dvh-32px))] w-[calc(100vw-32px)] flex-col overflow-hidden rounded-2xl border border-slate-700 bg-slate-900 text-white shadow-2xl sm:h-[min(650px,calc(100dvh-48px))] sm:w-[390px]"
        >
          <header className="flex shrink-0 items-center justify-between border-b border-slate-700 bg-slate-800 px-4 py-4">
            <div>
              <h2 className="text-base font-bold text-white">
                Project Exploration AI
              </h2>
              <p className="text-xs text-cyan-300">
                Explore ideas. Discover solutions.
              </p>
            </div>

            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close chatbot"
              className="rounded-lg px-3 py-1 text-xl text-slate-300 hover:bg-slate-700 hover:text-white"
            >
              ×
            </button>
          </header>

          <div
            className="flex-1 space-y-4 overflow-y-auto px-4 py-5"
            aria-live="polite"
            aria-relevant="additions"
          >
            <div className="max-w-[92%] rounded-2xl rounded-tl-sm bg-slate-800 px-4 py-3 text-sm leading-relaxed text-slate-200">
              {WELCOME_MESSAGE}
            </div>

            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.role === "user"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[92%] whitespace-pre-wrap break-words rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                    message.role === "user"
                      ? "rounded-tr-sm bg-cyan-500 text-slate-950"
                      : "rounded-tl-sm bg-slate-800 text-slate-100"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}

            {loading && (
              <div className="w-fit rounded-2xl bg-slate-800 px-4 py-3 text-sm text-slate-300">
                Thinking...
              </div>
            )}

            {error && (
              <p role="alert" className="text-sm text-amber-300">
                {error}
              </p>
            )}

            <div ref={bottomRef} />
          </div>

          <div className="shrink-0 border-t border-slate-700 bg-slate-800 p-3">
            <div className="mb-2 flex items-center justify-between gap-2 text-xs text-slate-400">
              <span>
                {remaining} of {MAX_DAILY_QUESTIONS} questions left
              </span>

              {usage.count > 0 && (
                <span>
                  Reset in {formatRemainingTime(usage.startedAt)}
                </span>
              )}
            </div>

            {remaining === 0 ? (
              <div className="rounded-xl border border-slate-600 bg-slate-900 p-3 text-sm text-slate-300">
                Your daily allowance is complete.
                Come back after your 24-hour reset.
                <a
                  href="/#contact"
                  className="mt-2 block font-semibold text-cyan-400 hover:underline"
                >
                  Discuss a project directly
                </a>
              </div>
            ) : (
              <div className="flex items-end gap-2">
                <textarea
                  ref={inputRef}
                  rows={2}
                  value={input}
                  onChange={(event) =>
                    setInput(
                      event.target.value.slice(
                        0,
                        MAX_MESSAGE_LENGTH
                      )
                    )
                  }
                  onKeyDown={(event) => {
                    if (
                      event.key === "Enter" &&
                      !event.shiftKey &&
                      !event.nativeEvent.isComposing
                    ) {
                      event.preventDefault();
                      void sendMessage();
                    }
                  }}
                  placeholder="Describe your idea..."
                  aria-label="Your project question"
                  disabled={loading}
                  className="max-h-28 min-h-12 flex-1 resize-none rounded-xl border border-slate-600 bg-slate-900 px-3 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-400 disabled:opacity-60"
                />

                <button
                  type="button"
                  onClick={() => void sendMessage()}
                  disabled={!input.trim() || loading}
                  className="min-h-12 rounded-xl bg-cyan-500 px-4 text-sm font-bold text-slate-950 transition hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Send
                </button>
              </div>
            )}

            <div className="mt-2 flex items-center justify-between gap-2">
              <span className="text-[11px] text-slate-500">
                {input.length}/{MAX_MESSAGE_LENGTH} characters
              </span>
              <span className="text-[11px] text-slate-500">
                Powered by AI · Responses may contain errors
              </span>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
