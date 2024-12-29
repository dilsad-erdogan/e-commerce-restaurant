import Navbar from "../components/navbar/Navbar"
import Featured from "../components/product/Featured"
import { Toaster } from "react-hot-toast";

const Menu = () => {
  return (
    <div className="container">
      <Toaster position="top-right" />

      <Navbar />
      <Featured />
    </div>
  )
}

export default Menu