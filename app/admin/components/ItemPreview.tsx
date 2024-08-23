// components/ItemPreview.js

import Link from "next/link";
import { FaBox, FaShoppingCart, FaUsers } from "react-icons/fa";

interface ItemProps {
  title: string;
  href: string;
  count: number;
  metrics: object;
}

export default function ItemPreview({
  title,
  href,
  count,
  metrics,
}: ItemProps) {
  const icons = {
    Products: <FaBox size={24} />,
    Orders: <FaShoppingCart size={24} />,
    Users: <FaUsers size={24} />,
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between">
      <div className="flex items-center mb-4">
        <div className="bg-[#572772] text-white p-3 rounded-full mr-4">
          {icons[title]} {/* Dynamic Icon */}
        </div>
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      </div>
      <div className="text-gray-600 mb-4">
        <p>Total: {count}</p>
        {metrics.map((metric, index) => (
          <p key={index}>
            {metric.label}: {metric.value}
          </p>
        ))}
      </div>
      <Link href={href}>
        <button className="mt-auto bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-400 transition duration-300">
          Manage {title}
        </button>
      </Link>
    </div>
  );
}
