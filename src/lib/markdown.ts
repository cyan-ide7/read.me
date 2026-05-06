import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import remarkGfm from 'remark-gfm';

const postsDirectory = path.join(process.cwd(), 'content/blogs');

export interface BlogPostData {
  slug: string;
  title: string;
  date: string;
  preview: string;
  contentHtml?: string;
}

export function getSortedPostsData(): BlogPostData[] {
  // Check if directory exists, if not return empty array
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  // Get file names under /content/blogs
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      // Remove ".md" from file name to get slug
      const slug = fileName.replace(/\.md$/, '');

      // Read markdown file as string
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents);

      // Combine the data with the id
      return {
        slug,
        ...(matterResult.data as { date: string; title: string; preview: string }),
      };
    });

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export async function getPostData(slug: string): Promise<BlogPostData> {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(remarkGfm)
    .use(html, { sanitize: false })
    .process(matterResult.content);

  // Prefix image src paths with basePath so they resolve under GitHub Pages (/read.me)
  const basePath = process.env.NODE_ENV === 'production' ? '/read.me' : '';
  const contentHtml = processedContent
    .toString()
    .replace(/(<img[^>]+src=")(\/)([^"]*")/g, `$1${basePath}/$3`);

  // Combine the data with the slug and contentHtml
  return {
    slug,
    contentHtml,
    ...(matterResult.data as { date: string; title: string; preview: string }),
  };
}
