import Link from 'next/link';

export default function BlogPage() {
  // 1. This is your "Dough" (The data)
  const posts = [
    { id: '1', title: 'Getting Started with the Sony A7III', date: 'March 2026' },
    { id: '2', title: 'DIY: Installing a Dashboard Mount in a RAV4', date: 'Feb 2026' },
    { id: '3', title: 'My First Week Learning Next.js', date: 'Jan 2026' },
  ];

  return (
    <main style={{ padding: '40px' }}>
      <h1>My Professional Blog</h1>
      <p>Sharing my journey in tech, video, and DIY.</p>

      <hr style={{ margin: '20px 0' }} />

      {/* 2. This is the "Cookie Cutter" (The .map function) */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {posts.map((post) => (
          <div key={post.id} style={{ border: '1px solid #eee', padding: '15px', borderRadius: '8px' }}>
            <h2 style={{ margin: '0 0 10px 0' }}>{post.title}</h2>
            <p style={{ color: '#666', fontSize: '14px' }}>{post.date}</p>
            <Link href={`/blog/${post.id}`} style={{ color: 'blue', textDecoration: 'underline' }}>
              Read More →
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}