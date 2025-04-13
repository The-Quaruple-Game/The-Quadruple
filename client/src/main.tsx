import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'

// Components
import Header from './components/header/Header.tsx'
import Footer from './components/footer/Footer.tsx'
// Pages
import Home from './pages/home/Home.tsx'
import Signin from './pages/signin/Signin.tsx'
import Signup from './pages/signup/Signup.tsx'
import Contact from './pages/contact/Contact.tsx'
import About from "./pages/about/About.tsx"
import NotFoundPage from './pages/404/NotFoundPage.tsx'

// Layout Component to wrap pages with Header and Footer
const Layout = () => (
  <>
    <Header />
    <Outlet /> {/* Renders the matched child route */}
    <Footer />
  </>
)

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "signin", element: <Signin/>},
      { path: "signup", element: <Signup/>},
      { path: "contact", element: <Contact/>},
      { path: "about", element: <About/>},
      { path: "*", element: <NotFoundPage /> },
    ],
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
