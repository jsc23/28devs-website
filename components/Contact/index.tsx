"use client";

import { useState } from "react";
import NewsLatterBox from "./NewsLatterBox";

type Status = "idle" | "loading" | "success" | "error";

const Contact = () => {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

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

      // 🔁 Ocultar mensaje después de 4 segundos
      setTimeout(() => {
        setStatus("idle");
      }, 4000);
    } catch {
      setStatus("error");

      // 🔁 Ocultar mensaje de error después de 4 segundos
      setTimeout(() => {
        setStatus("idle");
      }, 4000);
    }
  }

  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div className="wow fadeInUp shadow-three dark:bg-gray-dark mb-12 rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white">
                Need Help? Open a Ticket
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
                Our support team will get back to you ASAP via email.
              </p>

              <form onSubmit={handleSubmit}>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label className="mb-3 block text-sm font-medium">
                        Your Name
                      </label>
                      <input
                        name="name"
                        required
                        type="text"
                        placeholder="Enter your name"
                        className="w-full rounded-sm border bg-[#f8f8f8] px-6 py-3"
                      />
                    </div>

                    <div className="mb-8">
                      <label className="mb-3 block text-sm font-medium">
                        Your Company Name
                      </label>
                      <input
                        name="company"
                        type="text"
                        placeholder="Enter your company"
                        className="w-full rounded-sm border bg-[#f8f8f8] px-6 py-3"
                      />
                    </div>
                  </div>

                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label className="mb-3 block text-sm font-medium">
                        Your Email
                      </label>
                      <input
                        name="email"
                        required
                        type="email"
                        placeholder="Enter your email"
                        className="w-full rounded-sm border bg-[#f8f8f8] px-6 py-3"
                      />
                    </div>
                  </div>

                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label className="mb-3 block text-sm font-medium">
                        Your Message
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        placeholder="Enter your message"
                        className="w-full resize-none rounded-sm border bg-[#f8f8f8] px-6 py-3"
                      />
                    </div>
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
                      ✅ Message sent successfully!
                    </p>
                  )}

                  {status === "error" && (
                    <p className="mt-4 text-red-600">
                      ❌ Something went wrong. Please try again.
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
