"use client";

import { useState } from "react";
import NewsLatterBox from "./NewsLatterBox";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
  setLoading(true);
  setSuccess(false);
  setError(false);

  const formData = new FormData(e.currentTarget);

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

    setSuccess(true);
    e.currentTarget.reset();
  } catch {
    setError(true);
  } finally {
    setLoading(false);
  }
}


  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div className="wow fadeInUp shadow-three dark:bg-gray-dark mb-12 rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Need Help? Open a Ticket
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
                Our support team will get back to you ASAP via email.
              </p>

              <form onSubmit={handleSubmit}>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label className="mb-3 block text-sm font-medium text-dark dark:text-white">
                        Your Name
                      </label>
                      <input
                        name="name"
                        required
                        type="text"
                        placeholder="Enter your name"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base outline-none focus:border-primary dark:bg-[#2C303B]"
                      />
                    </div>

                    <div className="mb-8">
                      <label className="mb-3 block text-sm font-medium text-dark dark:text-white">
                        Your Company Name
                      </label>
                      <input
                        name="company"
                        type="text"
                        placeholder="Enter your company"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base outline-none focus:border-primary dark:bg-[#2C303B]"
                      />
                    </div>
                  </div>

                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label className="mb-3 block text-sm font-medium text-dark dark:text-white">
                        Your Email
                      </label>
                      <input
                        name="email"
                        required
                        type="email"
                        placeholder="Enter your email"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base outline-none focus:border-primary dark:bg-[#2C303B]"
                      />
                    </div>
                  </div>

                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label className="mb-3 block text-sm font-medium text-dark dark:text-white">
                        Your Message
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        placeholder="Enter your message"
                        className="border-stroke w-full resize-none rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base outline-none focus:border-primary dark:bg-[#2C303B]"
                      />
                    </div>
                  </div>

                  <div className="w-full px-4">
                    <button
                      type="submit"
                      disabled={loading}
                      className="shadow-submit rounded-sm bg-primary px-9 py-4 text-base font-medium text-white hover:bg-primary/90 disabled:opacity-60"
                    >
                      {loading ? "Sending..." : "Submit Ticket"}
                    </button>
                  </div>

                  {success && (
                    <p className="mt-4 text-green-600">
                      ✅ Message sent successfully!
                    </p>
                  )}

                  {error && (
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
