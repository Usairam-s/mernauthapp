import {BrowserRouter, Route , Routes} from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Signup from "./pages/Signup"
import Signin from "./pages/Signin"
import Profile from "./pages/Profile"
import Header from "./components/Header"

export default function App() {
  return <BrowserRouter>
  {/* Header */}
  <Header/>
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/signup" element={<Signup/>} />
    <Route path="/signin" element={<Signin/>} />
    <Route path="/profile" element={<Profile/>} />
  </Routes>
  </BrowserRouter>
  
}