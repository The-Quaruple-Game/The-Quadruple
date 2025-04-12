import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

// Pages
import Home from "../pages/home/Home"
import Signup from "../pages/signup/Signup";
import Signin from "../pages/signin/Signin";

// Components
import Header from "../components/header/Header"
import Footer from "../components/footer/Footer";

// Layout component that includes navigation and renders children
function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <Outlet /> {/* This is where child routes will render */}
      </main>
      <Footer />
    </div>
  );
}

// Create router with routes configuration
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true, // This makes it the default route
        element: <Home />,
       },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "signin",
        element: <Signin />,
      },
    ],
  },
]);

// Main App component
function Routing() {
  return <RouterProvider router={router} />;
}

export default Routing;
