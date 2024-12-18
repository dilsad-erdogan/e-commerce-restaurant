import Hero from '../components/hero/Hero'
import Navbar from '../components/navbar/Navbar'
import Featured from '../components/product/Featured'

const Main = () => {
  return (
    <div className="container">
        <Navbar />
        <Hero />
        <Featured />
    </div>
  )
}

export default Main