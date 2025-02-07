import toast, { Toaster } from "react-hot-toast"
import AdminNavbar from "../../components/navbar/AdminNavbar"
import Sidebar from "../../components/sidebar/Sidebar"
import { useEffect, useState } from "react"
import productServices from "../../services/product"
import categorieServices from "../../services/categorie"
import ProductModal from "../../components/modals/Edits/Product"

const Product = () => {
  const [product, setProduct] = useState([])
  const [categories, setCategories] = useState({})
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [data, setData] = useState({})

  useEffect(() => {
    fetchProduct();
    fetchCategories();
  }, [])

  const fetchProduct = async () => {
    try{
      const data = await productServices.get()
      setProduct(data.data)
    } catch(error) {
      toast.error("Error fetching product: ", error)
    }
  }

  const fetchCategories = async () => {
    try {
      const allCategories = await categorieServices.get();
      const categoryMap = {};
      allCategories.data.forEach((cat) => {
        categoryMap[cat._id] = cat.name;
      });
      setCategories(categoryMap);
    } catch (error) {
      toast.error("Error fetching categories: ", error);
    }
  }

  const handleDelete = async (id) => {
    try{
      await productServices.deleted(id)
      fetchProduct()
    } catch(error) {
      toast.error("Error deleted product: ", error)
    }
  }

  const handleEdit = (data) => {
    setData(data)
    setIsModalOpen(true)
  }

  const handleModalClose = () => {
    setIsModalOpen(false)
    fetchProduct()
  }

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
                  <th scope="col" className="px-6 py-3">Categorie Name</th>
                  <th scope="col" className="px-6 py-3">Name</th>
                  <th scope="col" className="px-6 py-3">Description</th>
                  <th scope="col" className="px-6 py-3">Price</th>
                  <th scope="col" className="px-6 py-3">Image</th>
                  <th scope="col" className="px-6 py-3">Action</th>
                </tr>
              </thead>

              <tbody>
                {product.map((data) => (
                  <tr key={data._id} className="border-b bg-gray-800 border-gray-700 hover:bg-gray-600">
                    <th className="px-6 py-4 font-medium whitespace-nowrap text-white">{categories[data.cat_id] || "Unknown"}</th>
                    <th className="px-6 py-4 font-medium whitespace-nowrap text-white">{data.name}</th>
                    <td className="px-6 py-4">{data.description}</td>
                    <td className="px-6 py-4">{data.price}</td>
                    <td className="p-2">
                      <img src={data.image} alt={data.name} className="w-16 h-16 rounded-full" />
                    </td>
                    <td className="px-6 py-4 flex gap-4 items-center">
                      <a href="#" className="font-medium text-red-500 hover:underline" onClick={() => handleDelete(data._id)}>Delete</a>
                      <a href="#" className="font-medium text-blue-500 hover:underline" onClick={() => handleEdit(data)}>Edit</a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <ProductModal isModalOpen={isModalOpen} setIsModalOpen={handleModalClose} data={data} />
    </div>
  )
}

export default Product