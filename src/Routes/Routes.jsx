import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Authentication/Login";
import Register from "../Pages/Authentication/Register";
import Dashboard from "../Layout/Dashboard";
import ProtectedRoute from "./ProtectedRoute";
import About from "../Pages/AboutUs/AboutUs";

// NEW: admin About page for the dashboard
import AboutCMS from "../Pages/Dashboard/AboutCMS";

// (optional) a simple dashboard home
const DashboardHome = () => <h1 className="text-2xl font-bold">Dashboard Home</h1>;

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },

      // public about page (your site’s front page section)
      { path: "/about", element: <About /> },
    ],
  },

  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
    children: [
      // /dashboard
      { index: true, element: <DashboardHome /> },

      // /dashboard/cms/about  ← this renders inside the Sidebar layout
      { path: "cms/about", element: <AboutCMS /> },
    ],
  },
]);
