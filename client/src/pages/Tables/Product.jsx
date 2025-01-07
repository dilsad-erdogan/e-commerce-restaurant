import { Toaster } from "react-hot-toast"
import AdminNavbar from "../../components/navbar/AdminNavbar"
import Sidebar from "../../components/sidebar/Sidebar"
import { useEffect, useState } from "react"
import productServices from "../../services/product"

const Product = () => {
  const [product, setProduct] = useState([])

  useEffect(() => {
    const fetchCat = async () => {
      try{
        const data = await productServices.get()
        setProduct(data.data)
      } catch(error) {
        console.error("Error fetching product: ", error)
      }
    }

    fetchCat();
  }, [])

  return (
    <div className="container">
      <Toaster position="top-right" />
      <AdminNavbar />
      
      <div className="flex container">
        <Sidebar />

        <div className="flex-1 overflow-y-auto">
          <div className="text-3xl font-bold text-white flex w-full" style={{ fontFamily: "'Lucida Handwriting', cursive" }}>Products</div>

          <div className="w-full mt-6 max-w-screen-lg mx-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-400">
              <thead className="text-xs uppercase bg-gray-700 text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">Categorie Id</th>
                  <th scope="col" className="px-6 py-3">Name</th>
                  <th scope="col" className="px-6 py-3">Description</th>
                  <th scope="col" className="px-6 py-3">Image</th>
                  <th scope="col" className="px-6 py-3">Action</th>
                </tr>
              </thead>

              <tbody>
                {product.map((data) => (
                  <tr key={data._id} className="border-b bg-gray-800 border-gray-700 hover:bg-gray-600">
                    <th className="px-6 py-4 font-medium whitespace-nowrap text-white">{data.cat_id}</th>
                    <th className="px-6 py-4 font-medium whitespace-nowrap text-white">{data.name}</th>
                    <td className="px-6 py-4">{data.description}</td>
                    <td className="p-2">
                      <img src={data.image} alt={data.name} className="w-16 h-16 rounded-full" />
                    </td>
                    <td className="px-6 py-4 flex gap-4 items-center">
                      <a href="#" className="font-medium text-red-500 hover:underline">Delete</a>
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

export default Product