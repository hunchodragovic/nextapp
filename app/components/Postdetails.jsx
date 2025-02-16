"use client"; // Make this a client component

import { useEffect, useState } from "react";

export default function PostDetails({ postId }) {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPost() {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 3000)); // Simulate 3s delay

      try {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${postId}`
        );

        if (!res.ok) {
          throw new Error(`Failed to fetch post: ${res.statusText}`);
        }

        const data = await res.json();
        setPost(data);
      } catch (error) {
        console.error("Error fetching post:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchPost();
  }, [postId]);

  if (loading) {
    return <p>Loading post...</p>;
  }

  if (!post) {
    return <p>Error fetching post.</p>;
  }

  return (
    <div>
      <h2>Title: {post.title}</h2>
      <p>{post.body}</p>
      <a href="/components">
        <button>Go back to Components</button>
      </a>
    </div>
  );
}
