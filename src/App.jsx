import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import AboutPage from "./components/AboutPage"
import WhatsAppButton from "./components/WhatsAppButton"

const App = () => {
  return (
   <>
   <Navbar/>
   <Home/>
   <Routes>
    <Route path="/about" element={<AboutPage />} />
   </Routes>
   <WhatsAppButton />
   </>
  )
}

export default App
