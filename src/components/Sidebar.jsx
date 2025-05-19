import React from "react";
import { Link } from "react-router-dom";
import { LogOut, Settings, FileText, LayoutDashboard } from "lucide-react";
const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-800 shadow-lg p-4 hidden md:block">
      <h2 className="text-xl text-white font-bold mb-4">Dashboard</h2>
      <ul className="space-y-2">
        <li>
          <Link to="/" className="block p-2 gap-2 bg-white flex item-centre font-bold rounded hover:bg-gray-200">
          <LayoutDashboard size={18} />  Home
          </Link>
        </li>
        <li>
          <Link to="/reports" className="block p-2 gap-2 bg-white flex item-centre font-bold rounded hover:bg-gray-200">
          <FileText size={18} />  Reports
          </Link>
        </li>
        <li>
          <Link to="/settings" className="block p-2 bg-white flex item-centre gap-2 font-bold rounded hover:bg-gray-200">
            <Settings size={18} /> Settings
          </Link>
        </li>
      </ul>
    </aside>
  );
};
export default Sidebar;