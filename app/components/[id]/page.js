import { Suspense } from "react";
import PostDetails from "../PostDetails";

export default function DynamicComponentPage({ params }) {
  const postId = params.id; // Use params.id correctly

  return (
    <div>
      <h1>Post details:</h1>
      {/* Suspense will show "Loading post..." while PostDetails is fetching */}
      <Suspense fallback={<p>Loading post...</p>}>
        <PostDetails postId={postId} />
      </Suspense>
    </div>
  );
}
