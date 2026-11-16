import Link from "next/link";
import { getSortedPostsData } from "@/lib/markdown";
import { ArrowRight, BookOpen } from "lucide-react";

export default function BlogSection() {
  const posts = getSortedPostsData();

  if (posts.length === 0) {
    return null;
  }

  return (
    <section id="posts" className="py-24 relative bg-surface/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14">
          <span className="text-accent font-mono text-sm tracking-wider uppercase">Deep Dives</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-1 flex items-center">
            <span className="text-accent mr-3">07.</span> Writing & Research
          </h2>
          <div className="mt-4 h-px bg-surface-hover w-full max-w-md"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.slice(0, 3).map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group block h-full">
              <div className="bg-surface border border-surface-hover rounded-2xl p-6 sm:p-7 h-full flex flex-col hover:border-accent/40 hover:-translate-y-1 transition-all duration-300">
                <div className="flex justify-between items-center mb-4 text-muted">
                  <div className="w-10 h-10 rounded-xl bg-background border border-surface-hover flex items-center justify-center text-accent">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <time className="text-xs font-mono text-muted">{post.date}</time>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors leading-snug">
                  {post.title}
                </h3>

                <p className="text-muted text-sm leading-relaxed mb-6 flex-grow">
                  {post.preview}
                </p>

                <div className="text-accent text-sm font-semibold flex items-center mt-auto pt-4 border-t border-surface-hover/80">
                  <span>Read Technical Note</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1.5 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
