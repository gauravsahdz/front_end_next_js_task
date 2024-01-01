import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-4">
      <div className="w-96">
        <img src="/images/404-error.png" alt="404" className="w-full" />
      </div>
      <h1 className="text-4xl font-bold">Page Not Found</h1>
      <p className="text-gray-600">
        The page you are looking for might not exist or has been moved.
      </p>
      <button className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600">
        <Link href="/" legacyBehavior>
          Go Back to Homepage
        </Link>
      </button>
    </div>
  );
};

export default NotFound;
