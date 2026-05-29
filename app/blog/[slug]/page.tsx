import { client } from '@/sanity/lib/client'
import { POST_QUERY } from '@/sanity/lib/queries'
import { PortableText } from '@portabletext/react'
import Link from 'next/link'
import { notFound } from 'next/navigation'

interface PageProps {
  params: Promise<{ slug: string }>
}

// Define the shape of our individual post data
interface BlogPost {
  _id: string
  title: string
  publishedAt?: string
  content: any // Portable Text uses an array of blocks
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params

  const post = await client.fetch<BlogPost | null>(POST_QUERY, { slug })
  console.log("SANITY DATA RECEIVING:", JSON.stringify(post))
  if (!post) {
    notFound()
  }

  return (
    <main className="max-w-2xl mx-auto p-8">
      <nav className="mb-8">
        <Link href="/blog" className="text-blue-500 hover:underline">
          ← Back to blog
        </Link>
      </nav>
      
      <header className="mb-6 border-b pb-4">
        <h1 className="text-4xl font-bold mb-2">
          {post.title}
        </h1>
        {post.publishedAt && (
          <p className="text-gray-500 text-sm">
            Published on {new Date(post.publishedAt).toLocaleDateString()}
          </p>
        )}
      </header>

      {/* This is where the magic happens. PortableText loops over the JSON blocks and spits out clean HTML */}
      <div className="prose max-w-none">
        {post.content ? ( <PortableText value={post.content} /> ) : (
          <p className="text-gray-400 italic">This post has no content yet.....</p>
        )}
      </div>
    </main>
  )
}