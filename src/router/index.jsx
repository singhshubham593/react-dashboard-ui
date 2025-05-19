import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import AppSidebar from "../components/Sidebar";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen">
        <AppSidebar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}