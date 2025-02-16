import Link from "next/link";

const Page = () => {
  return (
    <div>
      <h1>Posts Page</h1>
      <Link href="/">
        <button>Take me to the main page</button>
      </Link>
    </div>
  );
};

export default Page;
