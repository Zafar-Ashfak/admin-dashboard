import { useState } from "react";
import { motion } from "framer-motion";
import { Eye, Search } from "lucide-react";

const ordersData = [
  {
    id: "ORD001",
    customer: "Zafar Aftab",
    total: 235.4,
    status: "Delivered",
    date: "2025-05-01",
  },
  {
    id: "ORD002",
    customer: "Jane Foster",
    total: 412.0,
    status: "Processing",
    date: "2025-05-02",
  },
  {
    id: "ORD003",
    customer: "Shradha Khapra",
    total: 162.5,
    status: "Shipped",
    date: "2025-05-03",
  },
  {
    id: "ORD004",
    customer: "Hitesh Chaudhary",
    total: 750.2,
    status: "Pending",
    date: "2025-05-04",
  },
  {
    id: "ORD005",
    customer: "Alice Brown",
    total: 95.8,
    status: "Delivered",
    date: "2025-05-05",
  },
  {
    id: "ORD006",
    customer: "Eva Martinez",
    total: 310.75,
    status: "Processing",
    date: "2025-05-06",
  },
  {
    id: "ORD007",
    customer: "John Doe",
    total: 528.9,
    status: "Shipped",
    date: "2025-05-07",
  },
  {
    id: "ORD008",
    customer: "Emma Watson",
    total: 189.6,
    status: "Delivered",
    date: "2025-05-08",
  },
];

function OrdersTable() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredOrders, setFilteredOrders] = useState(ordersData);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = ordersData.filter(
      (order) =>
        order.id.toLowerCase().includes(term) ||
        order.customer.toLowerCase().includes(term)
    );
    setFilteredOrders(filtered);
  };
  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 lg:col-span-2"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}>
      <div className="flex flex-col gap-3 sm:flex-row sm:justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-100">Order List</h2>
        <div className="relative">
          <input
            type="text"
            className="bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search Orders"
            value={searchTerm}
            onChange={handleSearch}
          />
          <Search className="absolute left-3 top-2.5 text-gray-400 cursor-pointer" size={18} />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-700">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Order ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Customer
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Total
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="divide divide-gray-700">
            {filteredOrders.map((order) => (
              <motion.tr
                key={order.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">
                  {order.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">
                  {order.customer}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">
                  ${order.total.toFixed(2)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  <span
                    className={`inline-flex px-2 py-0.5 rounded-full text-xs font-semibold leading-5 ${
                      order.status === "Delivered"
                        ? "bg-green-100 text-green-800"
                        : order.status === "Processing"
                        ? "bg-yellow-100 text-yellow-800"
                        : order.status === "Shipped"
                        ? "bg-blue-100 text-blue-800"
                        : "bg-red-100 text-red-800"
                    }`}>
                    {order.status}
                  </span>
                </td>

                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">
                  {order.date}
                </td>

                <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-300">
                  <button className="text-indigo-400  hover:text-indigo-300 mr-2 cursor-pointer">
                    <Eye size={18}/>
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}

export default OrdersTable;
