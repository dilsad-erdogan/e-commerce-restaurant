import { Toaster } from "react-hot-toast"
import AdminNavbar from "../components/navbar/AdminNavbar"

const AdminMain = () => {
  return (
    <div className="container">
      <Toaster position="top-right" />
      <AdminNavbar />
      
      <div>Admin Panel</div>
    </div>
  )
}

export default AdminMain