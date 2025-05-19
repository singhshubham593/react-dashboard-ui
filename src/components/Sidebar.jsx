import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white shadow-lg p-4 hidden md:block">
      <h2 className="text-xl font-bold mb-4">Dashboard</h2>
      <ul className="space-y-2">
        <li>
          <Link to="/" className="block p-2 rounded hover:bg-gray-200">
            Home
          </Link>
        </li>
        <li>
          <Link to="/reports" className="block p-2 rounded hover:bg-gray-200">
            Reports
          </Link>
        </li>
      </ul>
    </aside>
  );
};
export default Sidebar;