import { getPostData, getAllPostIds } from '@/libs/posts';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const posts = getAllPostIds();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  if (!slug) {
    notFound();
  }

  try {
    const post = await getPostData(slug);
    
    return (
      <article className="container mx-auto px-4 py-8 max-w-3xl">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <div className="text-gray-600 mb-8">{post.date}</div>
        <div 
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }} 
        />
      </article>
    );
  } catch (error) {
    notFound();
  }
} 