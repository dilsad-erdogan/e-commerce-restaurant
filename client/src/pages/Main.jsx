import Hero from '../components/hero/Hero'
import Navbar from '../components/navbar/Navbar'
import Featured from '../components/product/Featured'
import { Toaster } from "react-hot-toast";

const Main = () => {
  return (
    <div className="container">
      <Toaster position="top-right" />

      <Navbar />
      <Hero />
    </div>
  )
}

export default Main