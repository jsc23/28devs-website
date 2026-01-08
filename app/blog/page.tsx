import blogData from "@/components/Blog/blogData";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Zendesk insights & resources",
  description:
    "Insights, product updates, and practical resources for Zendesk teams.",
};

const Blog = () => {
  const blogs = blogData();
  const featured = blogs[0];
  const topArticles = blogs.slice(1, 5);
  const rest = blogs.slice(5);

  return (
    <>
      {/* Header */}
      <section className="pt-24 md:pt-28 lg:pt-32 pb-12">
        <div className="container max-w-7xl">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <h1 className="text-4xl font-bold md:text-5xl">Blog</h1>

            {/* Search (visual only) */}
            <div className="relative w-full max-w-sm">
              <input
                type="text"
                placeholder="Search the blog"
                className="w-full rounded-md border border-body-color/20 px-4 py-2 text-sm outline-none focus:border-primary"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured + Top articles */}
      <section className="pb-20">
        <div className="container max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Featured */}
            {featured && (
              <div className="lg:col-span-2 rounded-xl border border-body-color/10 p-6">
                <span className="mb-4 inline-block bg-yellow-200 px-3 py-1 text-xs font-semibold uppercase">
                  Featured article
                </span>

                <div className="mb-6 overflow-hidden rounded-lg">
                  <Image
                    src={featured.image}
                    alt={featured.title}
                    width={900}
                    height={500}
                    className="w-full object-cover"
                  />
                </div>

                <h2 className="mb-3 text-2xl font-bold">
                  {featured.title}
                </h2>

                <p className="mb-4 text-body-color">
                  {featured.paragraph}
                </p>

                <Link
                  href="#0"
                  className="font-semibold text-primary hover:underline"
                >
                  Read article →
                </Link>
              </div>
            )}

            {/* Top articles */}
            <div>
              <h3 className="mb-6 border-b border-body-color/20 pb-2 text-xl font-semibold">
                Explore our top articles
              </h3>

              <ul className="space-y-6">
                {topArticles.map((post) => (
                  <li key={post.id} className="group">
                    <Link href="#0">
                      <div className="flex items-start gap-4">
                        <span className="mt-2 h-2 w-2 rounded-full bg-primary"></span>

                        <div className="flex-1">
                          <p className="mb-1 text-lg font-semibold group-hover:underline">
                            {post.title}
                          </p>
                          <p className="text-sm text-body-color">
                            {post.paragraph}
                          </p>
                        </div>

                        <span className="ml-2 whitespace-nowrap text-sm text-body-color">
                          {post.publishDate}
                        </span>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="pb-16">
        <div className="container max-w-7xl">
          <div className="flex flex-wrap gap-3">
            {[
              "Recent Posts",
              "Customer Support",
              "Zendesk Tips",
              "Product Updates",
              "Security",
              "Marketing",
              "News",
            ].map((cat) => (
              <button
                key={cat}
                className="rounded-md border border-body-color/20 px-4 py-2 text-sm transition hover:bg-primary hover:text-white"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Rest of posts */}
      <section className="pb-[120px]">
        <div className="container max-w-7xl">
          <div className="-mx-4 flex flex-wrap">
            {rest.map((blog) => (
              <div
                key={blog.id}
                className="mb-16 w-full px-4 md:w-1/2 xl:w-1/3"
              >
                <div className="h-full rounded-lg border border-body-color/10 overflow-hidden">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    width={400}
                    height={240}
                    className="w-full object-cover"
                  />

                  <div className="p-6">
                    <h4 className="mb-2 text-lg font-semibold">
                      {blog.title}
                    </h4>

                    <p className="mb-4 text-sm text-body-color">
                      {blog.paragraph}
                    </p>

                    <Link
                      href="#0"
                      className="text-sm font-semibold text-primary hover:underline"
                    >
                      Read more →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
