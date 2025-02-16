import Link from "next/link";

export default async function ComponentPage() {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
      next: { revalidate: 120 },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch posts: ${res.statusText}`);
    }

    const posts = await res.json();

    return (
      <div>
        <h2>Posts</h2>
        {posts.map((post) => (
          <div key={post.id}>
            {/* Link to the dynamic post page */}
            <Link href={`/components/${post.id}`}>
              <h3 style={{ cursor: "pointer", color: "blue" }}>{post.title}</h3>
            </Link>
            <p>{post.body}</p>
          </div>
        ))}
        <a href="/components">
          <button>Go back to Components</button>
        </a>
      </div>
    );
  } catch (error) {
    console.error("Error fetching posts:", error);
    return <div>Error fetching posts: {error.message}</div>;
  }
}
