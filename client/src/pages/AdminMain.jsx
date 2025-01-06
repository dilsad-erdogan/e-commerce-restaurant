import { Toaster } from "react-hot-toast"
import AdminNavbar from "../components/navbar/AdminNavbar"
import Sidebar from "../components/sidebar/Sidebar"
import { useEffect, useState } from "react"
import categorieServices from "../services/categorie"
import productServices from "../services/product"
import tableServices from "../services/table"
import onlineOrderServices from "../services/onlineOrder"
import orderServices from "../services/order"

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

        <div className="text-white">
          Cat Length: {catLength} <br />
          Product Length: {proLength} <br />
          Table Length: {tableLength} <br />
          <br /><br />
          Active Order Online Length: {activeOnline} <br />
          Active Order Table Length: {activeTable} <br />
          <br /><br />
          Total Order Online Length: {totalOnline} <br />
          Total Order Table Length: {totalTable} <br />
          <br /><br />
          Total Price Month: 25.542 <br />
          Total Price Day: 5.938 <br />
        </div>
      </div>
    </div>
  )
}

export default AdminMain