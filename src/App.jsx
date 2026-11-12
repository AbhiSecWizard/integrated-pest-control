import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import AboutPage from "./components/AboutPage"

const App = () => {
  return (
   <>
   <Navbar/>
   <Home/>
   <Routes>
    <Route path="/about" element={<AboutPage />} />
   </Routes>
   </>
  )
}

export default App
