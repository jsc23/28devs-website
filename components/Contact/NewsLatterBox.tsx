"use client";

import { useState } from "react";
import { useTheme } from "next-themes";

const NewsLatterBox = () => {
  const { theme } = useTheme();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!email) return;

    setStatus("loading");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
      });

      if (!res.ok) throw new Error();

      setStatus("success");
      setName("");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="wow fadeInUp shadow-three dark:bg-gray-dark relative z-10 rounded-sm bg-white p-8 sm:p-11 lg:p-8 xl:p-11">
      <h3 className="mb-4 text-2xl font-bold leading-tight text-black dark:text-white">
        Stay ahead with Zendesk tips & updates
      </h3>

      <p className="mb-11 border-b border-body-color border-opacity-25 pb-11 text-base leading-relaxed text-body-color dark:border-white dark:border-opacity-25">
        Get practical tips, product updates, and best practices to help your support team work faster and smarter with Zendesk.
      </p>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mb-4 w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base outline-none focus:border-primary"
        />

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="mb-4 w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base outline-none focus:border-primary"
        />

        <button
          type="submit"
          disabled={status === "loading"}
          className="mb-5 flex w-full items-center justify-center rounded-sm bg-primary px-9 py-4 text-base font-medium text-white hover:bg-primary/90 disabled:opacity-60"
        >
          {status === "loading" ? "Subscribing..." : "Subscribe"}
        </button>

        {status === "success" && (
          <p className="text-center text-green-600">
            Thanks! You’re on the list 🚀
          </p>
        )}

        {status === "error" && (
          <p className="text-center text-red-600">
            Something went wrong. Try again.
          </p>
        )}
      </form>
    </div>
  );
};

export default NewsLatterBox;
