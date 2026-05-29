import Link from 'next/link'
import { client } from '@/sanity/lib/client'
import { POSTS_QUERY } from '@/sanity/lib/queries'

// We define what our clean TypeScript data structure looks like
interface PostListItem {
  _id: string
  title: string
  slug: string
}

export default async function BlogListingPage() {
  // Fetch real data from Sanity using our query
  const posts = await client.fetch<PostListItem[]>(POSTS_QUERY)

  return (
    <main className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      
      <div className="space-y-6">
        {posts.length === 0 ? (
          <p className="text-gray-500">No posts found. Go publish one in the Studio!</p>
        ) : (
          posts.map((post) => (
            <article key={post._id} className="border-b pb-6">
              <h2 className="text-2xl font-semibold hover:underline">
                <Link href={`/blog/${post.slug}`}>
                  {post.title}
                </Link>
              </h2>
            </article>
          ))
        )}
      </div>
    </main>
  )
}