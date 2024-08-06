import Link from "next/link";

const Custom403 = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-900">
      <h1 className="text-5xl font-bold text-red-600">403</h1>
      <p className="text-xl mt-4">
        Forbidden: You do not have permission to access this page.
      </p>
      <Link href="/pages/about" className="mt-6 text-blue-500 hover:underline">
        Go back to About
      </Link>
    </div>
  );
};

export default Custom403;
