import Link from "next/link";
import { getSortedPostsData } from "@/lib/markdown";
import { ArrowRight, BookOpen } from "lucide-react";

export default function BlogSection() {
  const posts = getSortedPostsData();

  if (posts.length === 0) {
    return null; // Don't show section if no posts
  }

  return (
    <section id="blog" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 flex items-center">
            <span className="text-accent mr-3">04.</span> Latest Writings
            <div className="ml-6 h-px bg-surface-hover flex-grow max-w-xs"></div>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.slice(0, 3).map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group block h-full">
              <div className="bg-surface border border-surface-hover rounded-xl p-6 h-full flex flex-col hover:border-accent/50 transition-colors">
                <div className="flex justify-between items-center mb-4 text-muted">
                  <BookOpen className="w-6 h-6 text-accent" />
                  <time className="text-sm font-mono">{post.date}</time>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed mb-6 flex-grow">
                  {post.preview}
                </p>
                <div className="text-accent text-sm font-medium flex items-center mt-auto">
                  Read Article
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
