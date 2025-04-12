import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

// Pages
import Home from "../pages/home/Home"
import Signup from "../pages/signup/Signup";
import Signin from "../pages/signin/Signin";
<<<<<<< HEAD
=======
import Contact from "../pages/contact/Contact";
>>>>>>> 85245aeb05c52bf229904b483c9dfaee59dd498a

// Components
import Header from "../components/header/Header"
import Footer from "../components/footer/Footer";
<<<<<<< HEAD
=======
import Dashboard from "../pages/dashboard/Dashboard";
>>>>>>> 85245aeb05c52bf229904b483c9dfaee59dd498a

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
<<<<<<< HEAD
=======
      {
        path: "contact",
        element: <Contact/>
      },
      {
        path: "dashboard",
        element: <Dashboard/>
      }
>>>>>>> 85245aeb05c52bf229904b483c9dfaee59dd498a
    ],
  },
]);

// Main App component
function Routing() {
  return <RouterProvider router={router} />;
}

export default Routing;
