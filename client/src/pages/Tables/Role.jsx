import toast, { Toaster } from "react-hot-toast"
import AdminNavbar from "../../components/navbar/AdminNavbar"
import Sidebar from "../../components/sidebar/Sidebar"
import { useEffect, useState } from "react"
import roleServices from "../../services/role"

const Role = () => {
  const [role, setRole] = useState([])

  useEffect(() => {
    fetchRole();
  }, [])

  const fetchRole = async () => {
    try{
      const data = await roleServices.get()
      setRole(data.data)
    } catch(error) {
      toast.error("Error fetching role: ", error)
    }
  }

  const handleDelete = async (id) => {
    try{
      await roleServices.deleted(id)
      fetchRole()
    } catch(error) {
      toast.error("Error deleted role: ", error)
    }
  }

  return (
    <div className="container">
      <Toaster position="top-right" />
      <AdminNavbar />
      
      <div className="flex container">
        <Sidebar />

        <div className="flex-1 overflow-y-auto">
          <div className="text-3xl font-bold text-white flex w-full" style={{ fontFamily: "'Lucida Handwriting', cursive" }}>Roles</div>

          <div className="w-full mt-6 max-w-screen-lg mx-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-400">
              <thead className="text-xs uppercase bg-gray-700 text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">Name</th>
                  <th scope="col" className="px-6 py-3">Action</th>
                </tr>
              </thead>

              <tbody>
                {role.map((data) => (
                  <tr key={data._id} className="border-b bg-gray-800 border-gray-700 hover:bg-gray-600">
                    <th className="px-6 py-4 font-medium whitespace-nowrap text-white">{data.name}</th>
                    <td className="px-6 py-4 flex gap-4 items-center">
                      <a href="#" className="font-medium text-red-500 hover:underline" onClick={() => handleDelete(data._id)}>Delete</a>
                      <a href="#" className="font-medium text-blue-500 hover:underline">Edit</a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Role