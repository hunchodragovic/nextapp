import Link from "next/link";

const ComponentsPage = () => {
  return (
    <div>
      <h1>Components Page</h1>
      <p>This is the components page.</p>
      <Link href="/">
        <button>Take me to the main page</button>
      </Link>
    </div>
  );
};

export default ComponentsPage;
