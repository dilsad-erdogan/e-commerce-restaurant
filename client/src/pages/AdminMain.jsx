import { Toaster } from "react-hot-toast"
import AdminNavbar from "../components/navbar/AdminNavbar"
import Sidebar from "../components/sidebar/Sidebar"
import { useEffect, useState } from "react"
import categorieServices from "../services/categorie"
import productServices from "../services/product"
import tableServices from "../services/table"
import onlineOrderServices from "../services/onlineOrder"
import orderServices from "../services/order"
import { BiCategoryAlt } from "react-icons/bi"

const AdminMain = () => {
  const [catLength, setCatLength] = useState('')
  const [proLength, setProLength] = useState('')
  const [tableLength, setTableLength] = useState('')
  const [activeOnline, setActiveOnline] = useState('')
  const [activeTable, setActiveTable] = useState('')
  const [totalOnline, setTotalOnline] = useState('')
  const [totalTable, setTotalTable] = useState('')

  useEffect(() => {
    const fetchOnline = async () => {
      try{
        const data = await onlineOrderServices.get()
        const dataActive = await onlineOrderServices.getActive()
        setActiveOnline(dataActive.data.length)
        setTotalOnline(data.data.length)
      } catch(error) {
        console.error("Error fetching cat: ", error)
      }
    }

    const fetchOrder = async () => {
      try{
        const data = await orderServices.get()
        const dataActive = await onlineOrderServices.getActive()
        setActiveTable(dataActive.data.length)
        setTotalTable(data.data.length)
      } catch(error) {
        console.error("Error fetching cat: ", error)
      }
    }

    const fetchCat = async () => {
      try{
        const data = await categorieServices.get()
        setCatLength(data.data.length)
      } catch(error) {
        console.error("Error fetching cat: ", error)
      }
    }

    const fetchPro = async () => {
      try{
        const data = await productServices.get()
        setProLength(data.data.length)
      } catch(error) {
        console.error("Error fetching cat: ", error)
      }
    }

    const fetchTable = async () => {
      try{
        const data = await tableServices.get()
        setTableLength(data.data.length)
      } catch(error) {
        console.error("Error fetching cat: ", error)
      }
    }

    fetchOnline()
    fetchOrder()
    fetchCat()
    fetchPro()
    fetchTable()
  }, [])

  return (
    <div className="container">
      <Toaster position="top-right" />
      <AdminNavbar />
      
      <div className="flex container">
        <Sidebar />

        <div className="p-5 m-5">
          <div className="text-white grid grid-cols-1 lg:grid-cols-3 gap-5">
            <div className="p-5 m-1 flex justify-between items-center bg-yellow-500 rounded-xl min-w-[200px] w-[300px] h-[100px]">
              <BiCategoryAlt className="text-4xl font-bold" />
              <div>
                <h2 className="text-xl font-bold">Categorie Length</h2>
                <p className="text-sm">{catLength}</p>
              </div>
            </div>

            <div className="p-5 m-1 flex justify-between items-center bg-yellow-500 rounded-xl min-w-[200px] w-[300px] h-[100px]">
              <BiCategoryAlt className="text-4xl font-bold" />
              <div>
                <h2 className="text-xl font-bold">Product Length</h2>
                <p className="text-sm">{proLength}</p>
              </div>
            </div>

            <div className="p-5 m-1 flex justify-between items-center bg-yellow-500 rounded-xl min-w-[200px] w-[300px] h-[100px]">
              <BiCategoryAlt className="text-4xl font-bold" />
              <div>
                <h2 className="text-xl font-bold">Table Length</h2>
                <p className="text-sm">{tableLength}</p>
              </div>
            </div>

            <div className="p-5 m-1 flex justify-between items-center bg-yellow-500 rounded-xl min-w-[200px] w-[300px] h-[100px]">
              <BiCategoryAlt className="text-4xl font-bold" />
              <div>
                <h2 className="text-xl font-bold">Active Online Order</h2>
                <p className="text-sm">{activeOnline}</p>
              </div>
            </div>

            <div className="p-5 m-1 flex justify-between items-center bg-yellow-500 rounded-xl min-w-[200px] w-[300px] h-[100px]">
              <BiCategoryAlt className="text-4xl font-bold" />
              <div>
                <h2 className="text-xl font-bold">Active Order</h2>
                <p className="text-sm">{activeTable}</p>
              </div>
            </div>

            <div className="p-5 m-1 flex justify-between items-center bg-yellow-500 rounded-xl min-w-[200px] w-[300px] h-[100px]">
              <BiCategoryAlt className="text-4xl font-bold" />
              <div>
                <h2 className="text-xl font-bold">Total Online Order</h2>
                <p className="text-sm">{totalOnline}</p>
              </div>
            </div>

            <div className="p-5 m-1 flex justify-between items-center bg-yellow-500 rounded-xl min-w-[200px] w-[300px] h-[100px]">
              <BiCategoryAlt className="text-4xl font-bold" />
              <div>
                <h2 className="text-xl font-bold">Total Order</h2>
                <p className="text-sm">{totalTable}</p>
              </div>
            </div>

            <div className="p-5 m-1 flex justify-between items-center bg-yellow-500 rounded-xl min-w-[200px] w-[300px] h-[100px]">
              <BiCategoryAlt className="text-4xl font-bold" />
              <div>
                <h2 className="text-xl font-bold">Total Price (Month)</h2>
                <p className="text-sm">25.542</p>
              </div>
            </div>

            <div className="p-5 m-1 flex justify-between items-center bg-yellow-500 rounded-xl min-w-[200px] w-[300px] h-[100px]">
              <BiCategoryAlt className="text-4xl font-bold" />
              <div>
                <h2 className="text-xl font-bold">Total Price (Day)</h2>
                <p className="text-sm">5.938</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminMain