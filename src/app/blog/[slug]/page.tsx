import { getPostData, getSortedPostsData } from "@/lib/markdown";
import Navbar from "@/components/Navbar";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

// Generate static params for static export
export async function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  
  try {
    const postData = await getPostData(params.slug);
    
    return (
      <main className="min-h-screen bg-background">
        <Navbar />
        <article className="pt-32 pb-24 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            href="/#blog" 
            className="inline-flex items-center text-muted hover:text-accent transition-colors mb-8 text-sm font-mono"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to posts
          </Link>
          
          <header className="mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              {postData.title}
            </h1>
            <time className="text-muted font-mono">{postData.date}</time>
          </header>
          
          {/* Prose styling for markdown content */}
          <div 
            className="prose prose-invert prose-accent max-w-none"
            dangerouslySetInnerHTML={{ __html: postData.contentHtml || "" }}
          />
        </article>
      </main>
    );
  } catch (error) {
    notFound();
  }
}
