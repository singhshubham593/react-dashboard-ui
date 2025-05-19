import React, { useState, useEffect } from "react";
import DataTable from "../components/DataTable";

const dummyData = [
  { id: 1, name: "Alice", email: "alice@example.com", role: "Admin" },
  { id: 2, name: "Bob", email: "bob@example.com", role: "User" },
  { id: 3, name: "Charlie", email: "charlie@example.com", role: "Manager" },
  { id: 4, name: "Diana", email: "diana@example.com", role: "User" },
];

const Dashboard = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setData(dummyData);
      setLoading(false);
    }, 1000); // simulate loading delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 ">User Table</h1>
      <input
        type="text"
        placeholder="Search by name/email/role"
        className="border p-2 mb-4 w-full md:w-1/3 rounded"
        value={search}
        onChange={(e) => setSearch(e.target.value.toLowerCase())}
      />
      {loading ? (
        <div className="space-y-4">
          {[...Array(4)].map((_, idx) => (
            <div
              key={idx}
              className="h-12 bg-gray-300 animate-pulse rounded"
            ></div>
          ))}
        </div>
      ) : (
        <DataTable data={data} search={search} />
      )}
    </div>
  );
};

export default Dashboard;