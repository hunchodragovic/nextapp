export default async function DynamicComponentPage({ params }) {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const post = await res.json();

  return (
    <div>
      <h1>{post.title}</h1>
      <h2>Title: {post.title}</h2>
      <a href="/components">
        <button>Go back to Components</button>
      </a>
    </div>
  );
}
