import toast, { Toaster } from "react-hot-toast"
import AdminNavbar from "../components/navbar/AdminNavbar"
import Sidebar from "../components/sidebar/Sidebar"
import { MdTableRestaurant } from "react-icons/md";
import { useEffect, useState } from "react";
import tableServices from "../services/table";
import { useNavigate } from "react-router-dom";

const TableManagement = () => {
  const [table, setTable] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    fetchTable()
  }, [])

  const handleTableClick = (tableId) => {
    navigate(`/tables/${tableId}`);
  };

  const fetchTable = async () => {
    try{
      const data = await tableServices.get()
      setTable(data.data)
    } catch(error) {
      toast.error("Error fetching product: ", error)
    }
  }

  return (
    <div className="container">
      <Toaster position="top-right" />
      <AdminNavbar />
      
      <div className="flex container">
        <Sidebar />

        <div className="p-5 m-5">
          <div className="text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {table.map((data) => (
              <div key={data._id} onClick={() => handleTableClick(data._id)} className={`${'p-5 m-1 flex justify-between items-center rounded-xl min-w-[200px] w-[250px] h-[100px]'} ${data.occupancyRate ? 'bg-green-500' : 'bg-red-500'}`}>
                <MdTableRestaurant className="text-4xl font-bold" />
                <div>
                  <h2 className="text-xl font-bold">{data.name}</h2>
                  <p className="text-sm">{data.occupancyRate ? 'table is empty' : 'table is full'}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TableManagement