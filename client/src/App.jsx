import { BrowserRouter, Routes, Route } from "react-router-dom"
import Main from "./pages/Main"
import Menu from "./pages/Menu"
import Reservation from "./pages/Reservation"
import Basket from "./pages/Basket"
import Order from "./pages/Order"
import Search from "./pages/Search"
import AdminMain from "./pages/AdminMain"
import Categorie from "./pages/Tables/Categorie"
import Product from "./pages/Tables/Product"
import Role from "./pages/Tables/Role"
import User from "./pages/Tables/User"
import Table from "./pages/Tables/Table"
import TableManagement from "./pages/TableManagement"

function App() {
  return (
    <div className="w-full h-full min-h-screen bg-gradient-to-tr from-black to-gray-800 flex justify-center">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/search" element={<Search />} />
          <Route path="/order" element={<Order />} />

          <Route path="/admin" element={<AdminMain />} />
          <Route path="/categorie" element={<Categorie />} />
          <Route path="/product" element={<Product />} />
          <Route path="/role" element={<Role />} />
          <Route path="/user" element={<User />} />
          <Route path="/table" element={<Table />} />
          <Route path="/table-management" element={<TableManagement />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App