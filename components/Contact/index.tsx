"use client";

import { useState, useRef } from "react";
import NewsLatterBox from "./NewsLatterBox";

type Status = "idle" | "loading" | "success" | "error";

const Contact = () => {
  const [status, setStatus] = useState<Status>("idle");
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  function resetWithDelay() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setStatus("idle");
    }, 4000);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // 🔥 limpia cualquier timeout previo
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    setStatus("loading");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name") as string,
      company: formData.get("company") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error();

      setStatus("success");
      form.reset();
      resetWithDelay();
    } catch {
      setStatus("error");
      resetWithDelay();
    }
  }

  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div className="shadow-three dark:bg-gray-dark mb-12 rounded-sm bg-white px-8 py-11">
              <h2 className="mb-3 text-2xl font-bold">
                Need Help? Open a Ticket
              </h2>

              <form onSubmit={handleSubmit}>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <input
                      name="name"
                      required
                      placeholder="Your name"
                      className="mb-4 w-full rounded-sm border px-6 py-3"
                    />
                    <input
                      name="company"
                      placeholder="Company"
                      className="mb-4 w-full rounded-sm border px-6 py-3"
                    />
                  </div>

                  <div className="w-full px-4 md:w-1/2">
                    <input
                      name="email"
                      required
                      type="email"
                      placeholder="Your email"
                      className="mb-4 w-full rounded-sm border px-6 py-3"
                    />
                  </div>

                  <div className="w-full px-4">
                    <textarea
                      name="message"
                      required
                      rows={5}
                      placeholder="Your message"
                      className="mb-4 w-full rounded-sm border px-6 py-3"
                    />
                  </div>

                  <div className="w-full px-4">
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="rounded-sm bg-primary px-9 py-4 text-white disabled:opacity-60"
                    >
                      {status === "loading" ? "Sending..." : "Submit Ticket"}
                    </button>
                  </div>

                  {status === "success" && (
                    <p className="mt-4 text-green-600">
                      Message sent successfully!
                    </p>
                  )}

                  {status === "error" && (
                    <p className="mt-4 text-red-600">
                      Something went wrong. Please try again.
                    </p>
                  )}
                </div>
              </form>
            </div>
          </div>

          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <NewsLatterBox />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
