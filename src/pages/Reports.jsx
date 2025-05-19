import React from "react";
import { useState } from "react";

const feeData = [
  { id: 1, student: "John Doe", amount: 5000, status: "Paid" },
  { id: 2, student: "Jane Smith", amount: 4500, status: "Pending" },
  { id: 3, student: "Sam Wilson", amount: 5200, status: "Paid" },
]
const Reports = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="flex h-screen bg-gray-100">
        <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-4">Fee Payment Report</h1>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search student..."
          className="border rounded p-2 mb-4 w-full"
          onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
        />

        {/* Fee Report Table */}
        <div className="overflow-x-auto bg-white shadow-md rounded-lg p-4">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-2 text-left">Student</th>
                <th className="p-2 text-left">Amount ($)</th>
                <th className="p-2 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {feeData
                .filter((record) =>
                  record.student.toLowerCase().includes(searchTerm)
                )
                .map((record) => (
                  <tr key={record.id} className="border-b">
                    <td className="p-2">{record.student}</td>
                    <td className="p-2">${record.amount}</td>
                    <td className={`p-2 font-bold ${record.status === "Paid" ? "text-green-600" : "text-yellow-600"}`}>
                      {record.status}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default Reports;