import { getPostData, getAllPostIds } from "@/content/blogs";
import { notFound } from "next/navigation";
import Link from "next/link";

export async function generateStaticParams() {
  const posts = getAllPostIds();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

// 日付をフォーマット
const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export default async function BlogPost({ params }: PageProps) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  if (!slug) {
    notFound();
  }

  try {
    const post = await getPostData(slug);

    return (
      <div className="max-w-3xl mx-auto">
        {/* Back Link */}
        <div className="animate-fade-in mb-8 pt-4">
          <Link
            href="/blogs"
            className="
              inline-flex items-center gap-2
              text-sm text-[hsl(var(--muted-foreground))]
              hover:text-[hsl(var(--foreground))]
              transition-colors
              group
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="stroke-current transition-transform group-hover:-translate-x-1"
            >
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            記事一覧に戻る
          </Link>
        </div>

        {/* Article Header */}
        <header className="animate-fade-in-up mb-10">
          <time className="text-sm font-mono text-[hsl(var(--muted-foreground))] block mb-3">
            {formatDate(post.date)}
          </time>
          <h1 className="text-3xl md:text-4xl font-bold text-[hsl(var(--foreground))] leading-tight">
            {post.title}
          </h1>
        </header>

        {/* Article Content */}
        <article className="animate-fade-in-up animation-delay-100">
          <div
            className="
              prose prose-lg max-w-none
              prose-headings:text-[hsl(var(--foreground))]
              prose-headings:font-semibold
              prose-p:text-[hsl(var(--foreground))]
              prose-p:leading-relaxed
              prose-a:text-[hsl(var(--primary))]
              prose-a:no-underline
              prose-a:hover:underline
              prose-strong:text-[hsl(var(--foreground))]
              prose-code:text-[hsl(var(--foreground))]
              prose-code:bg-[hsl(var(--muted))]
              prose-code:px-1.5
              prose-code:py-0.5
              prose-code:rounded
              prose-code:text-sm
              prose-code:before:content-none
              prose-code:after:content-none
              prose-pre:bg-[hsl(var(--muted))]
              prose-pre:border
              prose-pre:border-[hsl(var(--border))]
              prose-pre:rounded-xl
              prose-blockquote:border-l-[hsl(var(--primary))]
              prose-blockquote:bg-[hsl(var(--muted)/0.5)]
              prose-blockquote:rounded-r-xl
              prose-blockquote:py-1
              prose-blockquote:not-italic
              prose-li:text-[hsl(var(--foreground))]
              prose-hr:border-[hsl(var(--border))]
              dark:prose-invert
            "
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />
        </article>

        {/* Footer */}
        <footer className="animate-fade-in-up animation-delay-200 mt-16 pt-8 border-t border-[hsl(var(--border))]">
          <Link
            href="/blogs"
            className="
              inline-flex items-center gap-2
              px-4 py-2 rounded-lg
              border border-[hsl(var(--border))]
              bg-[hsl(var(--muted)/0.3)]
              text-sm text-[hsl(var(--muted-foreground))]
              hover:bg-[hsl(var(--muted))]
              hover:text-[hsl(var(--foreground))]
              transition-all
              group
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="stroke-current transition-transform group-hover:-translate-x-1"
            >
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            記事一覧に戻る
          </Link>
        </footer>
      </div>
    );
  } catch {
    notFound();
  }
}
