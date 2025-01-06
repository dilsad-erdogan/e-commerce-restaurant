import { Toaster } from "react-hot-toast"
import AdminNavbar from "../components/navbar/AdminNavbar"
import Sidebar from "../components/sidebar/Sidebar"

const AdminMain = () => {
  return (
    <div className="container">
      <Toaster position="top-right" />
      <AdminNavbar />
      
      <div className="flex container">
        <Sidebar />

        <div>Admin Panel</div>
      </div>
    </div>
  )
}

export default AdminMain