import { getSortedPostsData } from "@/lib/markdown";
import Link from "next/link";

export default function BlogsPage() {
  const posts = getSortedPostsData();

  // 日付をフォーマット
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("ja-JP", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <section className="animate-fade-in-up text-center mb-12 pt-8">
        <h1 className="text-3xl font-bold text-[hsl(var(--foreground))] mb-3">
          Blog
        </h1>
        <p className="text-[hsl(var(--muted-foreground))]">
          技術記事や活動記録
        </p>
      </section>

      {/* Posts List */}
      <div className="animate-fade-in-up animation-delay-100 flex flex-col md:flex-row gap-6">
        <div className="md:min-w-[140px]">
          <h2 className="text-xl font-semibold text-[hsl(var(--foreground))]">Posts</h2>
        </div>
        <div className="flex-1">
          <ul className="space-y-2">
            {posts.map((post) => (
              <li key={post.id}>
                <Link
                  href={`/blogs/${post.slug}`}
                  className="
                    group flex flex-col sm:flex-row
                    px-5 py-3 rounded-2xl
                    border border-[hsl(var(--border))]
                    bg-[hsl(var(--card))]
                    hover:bg-[hsl(var(--muted)/0.5)]
                    transition-all
                  "
                >
                  {/* Date */}
                  <time className="text-xs font-mono text-[hsl(var(--muted-foreground))] min-w-[100px] py-1">
                    {formatDate(post.date)}
                  </time>

                  {/* Title and Arrow */}
                  <div className="flex-1 flex items-center justify-between gap-2">
                    <span className="text-[hsl(var(--foreground))] group-hover:text-[hsl(var(--primary))] transition-colors">
                      {post.title}
                    </span>

                    {/* Arrow */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="stroke-[hsl(var(--muted-foreground))] group-hover:stroke-[hsl(var(--primary))] flex-shrink-0"
                    >
                      <line
                        x1="5"
                        y1="12"
                        x2="19"
                        y2="12"
                        className="translate-x-1 scale-x-0 transition-transform duration-300 ease-out group-hover:translate-x-0 group-hover:scale-x-100"
                      />
                      <polyline
                        points="12 5 19 12 12 19"
                        className="transition-transform duration-300 ease-out group-hover:translate-x-1"
                      />
                    </svg>
                  </div>
                </Link>
              </li>
            ))}
          </ul>

          {posts.length === 0 && (
            <div className="text-center py-12 text-[hsl(var(--muted-foreground))]">
              まだ記事がありません
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
