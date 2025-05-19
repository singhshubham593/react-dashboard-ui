import React, { useState } from "react";

const DataTable = ({ data, search }) => {
  const [sortBy, setSortBy] = useState("name");
  const [asc, setAsc] = useState(true);

  const handleSort = (field) => {
    if (sortBy === field) setAsc(!asc);
    else {
      setSortBy(field);
      setAsc(true);
    }
  };

  const filteredData = data
    .filter((item) =>
      `${item.name} ${item.email} ${item.role}`.toLowerCase().includes(search)
    )
    .sort((a, b) => {
      const valA = a[sortBy].toLowerCase();
      const valB = b[sortBy].toLowerCase();
      if (valA < valB) return asc ? -1 : 1;
      if (valA > valB) return asc ? 1 : -1;
      return 0;
    });

  return (
    <div className="overflow-auto">
      <table className="min-w-full bg-white border rounded">
        <thead>
          <tr className="bg-gray-100">
            {['name', 'email', 'role'].map((col) => (
              <th
                key={col}
                className="p-2 text-left cursor-pointer hover:underline"
                onClick={() => handleSort(col)}
              >
                {col.charAt(0).toUpperCase() + col.slice(1)}
                {sortBy === col ? (asc ? ' ↑' : ' ↓') : ''}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => (
            <tr key={item.id} className="border-t hover:bg-gray-50">
              <td className="p-2">{item.name}</td>
              <td className="p-2">{item.email}</td>
              <td className="p-2">{item.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;