import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Sidebar/Sidebar";

export default function Dashboard() {
  return (
    <div className="w-full min-h-screen flex bg-gray-50">
      <Sidebar />
      <main className="flex-1 h-screen overflow-auto p-4 md:p-6 lg:p-8">
        <Outlet />
      </main>
    </div>
  );
}
