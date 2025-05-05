// Import Packages
import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const dailySalesData = [
  {
    day: "Mon",
    sales: 1000,
  },
  {
    day: "Tue",
    sales: 1200,
  },
  {
    day: "Wed",
    sales: 900,
  },
  {
    day: "Thu",
    sales: 1100,
  },
  {
    day: "Fri",
    sales: 1300,
  },
  {
    day: "Sat",
    sales: 1600,
  },
  {
    day: "Sun",
    sales: 1400,
  },
];
function DailySalesTrend() {
  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}>
      <h2 className="text-xl font-medium mb-4 text-gray-100">
        Daily Sales Trend
      </h2>

      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <BarChart data={dailySalesData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey={"day"} stroke="#9CA3AF" />
            <YAxis stroke="#9CA3AF" />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31, 41, 55, 0.8)",
                borderColor: "4B5563",
              }}
              itemStyle={{ color: "#E5E7EB" }}
            />
            <Legend />
            <Bar dataKey="sales" fill="#10B981" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}

export default DailySalesTrend;
