import { useState } from "react";
import {motion} from "framer-motion";
import {Area, AreaChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend } from "recharts";
const revenueData = [
  {month: "Jan", revenue: 4000, target: 3800},
  {month: "Feb", revenue: 3000, target: 3200},
  {month: "Mar", revenue: 5000, target: 4500},
  {month: "Apr", revenue: 4500, target: 4200},
  {month: "May", revenue: 6000, target: 5500},
  {month: "Jun", revenue: 5500, target: 5800},
  {month: "Jul", revenue: 7000, target: 6500},
]
function RevenueChart() {
  const [selectedTimeRange, setSelectedTimeRange] = useState("This Month");
  return (
     <motion.div
          className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-100">Sales Overview</h2>
    
            <select
              className="bg-gray-700 text-white rounded-md px-3 py-1 focus:outline-none focus: ring-2 rfocus:ring-blue-500 cursor-pointer"
              value={selectedTimeRange}
              onChange={(e) => setSelectedTimeRange(e.target.value)}>
              <option className="text-xs">This Week</option>
              <option className="text-xs">This Month</option>
              <option className="text-xs">This Quarter</option>
              <option className="text-xs">This Year</option>
            </select>
          </div>
          <div className="w-full h-80">
            <ResponsiveContainer>
              <AreaChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#555" />
                <XAxis dataKey="month" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "rgba(31, 41, 55, 0.8)",
                    borderColor: "#4B5563",
                  }}
                  itemStyle={{ color: "#E5E7EB" }}
                />
                <Legend />
                <Area
                  type="monotone"
                  dataKey="revenue"
                  stroke="#8B5CF6"
                  fillOpacity={0.3}
                  fill="#8B5CF6"
                />
                <Area
                  type="monotone"
                  dataKey="target"
                  stroke="#10B981"
                  fillOpacity={0.3}
                  fill="#10B981"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
  )
}

export default RevenueChart
