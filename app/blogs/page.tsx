import { getSortedPostsData } from '@/libs/posts';
import Link from 'next/link';

export default function BlogsPage() {
  const posts = getSortedPostsData();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">記事一覧</h1>
      <div className="grid gap-6">
        {posts.map((post) => (
          <article key={post.id} className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <Link href={`/blogs/${post.slug}`}>
              <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
              <div className="text-gray-600 mb-2">{post.date}</div>
              <p className="text-gray-700">{post.excerpt}</p>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
} 