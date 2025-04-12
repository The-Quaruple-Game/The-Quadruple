import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet /> {/* This will render the current route's page (e.g., Home, About, etc.) */}
      </main>
      <Footer />
    </>
  )
}

export default Layout
