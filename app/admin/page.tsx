// app/admin/dashboard/page.js

import ItemPreview from "./components/ItemPreview";

export default function Dashboard() {
  const data = [
    {
      title: "Products",
      href: "/admin/products",
      count: 120,
      metrics: [
        { label: "Low Stock", value: 5 },
        { label: "Out of Stock", value: 3 },
      ],
    },
    {
      title: "Orders",
      href: "/admin/orders",
      count: 45,
      metrics: [
        { label: "Pending", value: 10 },
        { label: "Completed", value: 35 },
      ],
    },
    {
      title: "Users",
      href: "/admin/users",
      count: 350,
      metrics: [
        { label: "New Users", value: 25 },
        { label: "Active Users", value: 85 },
      ],
    },
  ];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Admin Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((item) => (
          <ItemPreview
            key={item.title}
            title={item.title}
            href={item.href}
            count={item.count}
            metrics={item.metrics}
          />
        ))}
      </div>
    </div>
  );
}
