import { BrowserRouter, Routes, Route } from "react-router-dom"
import Main from "./pages/Main"
import Menu from "./pages/Menu"
import Reservation from "./pages/Reservation"
import Basket from "./pages/Basket"
import Order from "./pages/Order"
import Search from "./pages/Search"
import Checkout from "./pages/Checkout"
import { useState } from "react"

function App() {
  const [order, setOrder] = useState(null);

  return (
    <div className="w-full h-full min-h-screen bg-gradient-to-tr from-black to-gray-800 flex justify-center">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/checkout" element={<Checkout setOrder={setOrder} />} />
          <Route path="/search" element={<Search />} />
          <Route path="/order" element={<Order order={order} />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App