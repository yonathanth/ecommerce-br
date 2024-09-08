import Link from "next/link";
const Unauthorized = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="p-8 bg-white shadow-md rounded-md text-center">
        <h1 className="text-2xl font-bold text-red-600">Unauthorized Access</h1>
        <p className="mt-4">You do not have permission to access this page.</p>
        <Link
          href="/"
          className="text-purple-500 hover:underline mt-4 inline-block"
        >
          Go back to home
        </Link>
      </div>
    </div>
  );
};

export default Unauthorized;
