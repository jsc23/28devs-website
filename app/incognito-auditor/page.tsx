import Breadcrumb from "@/components/Common/Breadcrumb";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Incognito Auditor for Zendesk",
  description:
    "Audit, track, and monitor changes in Zendesk with Incognito Auditor.",
};

const IncognitoAuditorPage = () => {
  return (
    <>
      <section className="relative z-10 py-16 md:py-20 lg:py-28">
        <div className="container">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Text */}
            <div>
              <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
                Zendesk App
              </span>

              <h1 className="mb-6 text-4xl font-bold">
                Full visibility into Zendesk changes
              </h1>

              <p className="mb-8 text-lg text-body-color">
                Incognito Auditor helps support teams audit, track, and monitor
                configuration and data changes in Zendesk — so nothing goes
                unnoticed.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="rounded-sm bg-black px-8 py-4 text-white font-semibold"
                >
                  Request access
                </Link>

                <a
                  href="#features"
                  className="rounded-sm border border-black/20 px-8 py-4 font-semibold"
                >
                  Learn more
                </a>
              </div>
            </div>

            {/* Image */}
            <div>
              <Image
                src="/images/apps/incognito-auditor/hero.png"
                alt="Incognito Auditor Zendesk App"
                width={600}
                height={400}
                className="rounded-xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="bg-gray-light py-20 dark:bg-gray-dark">
        <div className="container max-w-3xl text-center">
          <h2 className="mb-6 text-3xl font-bold">
            Know what changes — and who made them
          </h2>
          <p className="text-lg text-body-color">
            Zendesk doesn’t provide full visibility into configuration and data
            changes. Incognito Auditor fills that gap by logging every critical
            action, giving your team accountability and peace of mind.
          </p>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="py-20">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Change tracking",
                text: "Track updates to tickets, users, triggers, and settings in real time.",
              },
              {
                title: "Full audit logs",
                text: "Keep a historical log of changes for compliance and troubleshooting.",
              },
              {
                title: "User accountability",
                text: "See exactly who made each change and when it happened.",
              },
              {
                title: "Native Zendesk app",
                text: "Built specifically for Zendesk with seamless integration.",
              },
              {
                title: "Easy setup",
                text: "Install and configure in minutes without technical setup.",
              },
              {
                title: "Built for teams",
                text: "Designed for support, ops, and admin teams.",
              },
            ].map((f, i) => (
              <div
                key={i}
                className="rounded-lg border border-body-color/10 p-6"
              >
                <h3 className="mb-3 text-xl font-semibold">{f.title}</h3>
                <p className="text-body-color">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-gray-light py-20 dark:bg-gray-dark">
        <div className="container max-w-4xl">
          <h2 className="mb-12 text-center text-3xl font-bold">
            How Incognito Auditor works
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <h4 className="mb-2 font-semibold">1. Install</h4>
              <p className="text-body-color">
                Install the app from the Zendesk Marketplace.
              </p>
            </div>
            <div>
              <h4 className="mb-2 font-semibold">2. Monitor</h4>
              <p className="text-body-color">
                Automatically track changes across your Zendesk instance.
              </p>
            </div>
            <div>
              <h4 className="mb-2 font-semibold">3. Review</h4>
              <p className="text-body-color">
                Review logs and take action when needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <div className="container max-w-2xl">
          <h2 className="mb-6 text-3xl font-bold">
            Ready to gain full visibility?
          </h2>
          <p className="mb-8 text-lg text-body-color">
            Start auditing your Zendesk environment with Incognito Auditor.
          </p>

          <Link
            href="/contact"
            className="inline-block rounded-sm bg-black px-10 py-4 text-white font-semibold"
          >
            Contact us
          </Link>
        </div>
      </section>
    </>
  );
};

export default IncognitoAuditorPage;
