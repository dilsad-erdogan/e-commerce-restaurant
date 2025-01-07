import { Toaster } from "react-hot-toast";
import AdminNavbar from "../../components/navbar/AdminNavbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { useEffect, useState } from "react";
import categorieServices from "../../services/categorie";

const Categorie = () => {
  const [cat, setCat] = useState([])

  useEffect(() => {
    const fetchCat = async () => {
      try{
        const data = await categorieServices.get()
        setCat(data.data)
      } catch(error) {
        console.error("Error fetching cat: ", error)
      }
    }

    fetchCat();
  }, [])

  return (
    <div className="container mx-auto px-4">
      <Toaster position="top-right" />
      <AdminNavbar />

      <div className="flex h-screen">
        <Sidebar />

        <div className="flex-1 overflow-y-auto">
          <div className="text-3xl font-bold text-white flex w-full" style={{ fontFamily: "'Lucida Handwriting', cursive" }}>Categories</div>

          <div className="w-full mt-6 max-w-screen-lg mx-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-400">
              <thead className="text-xs uppercase bg-gray-700 text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">Name</th>
                  <th scope="col" className="px-6 py-3">Description</th>
                  <th scope="col" className="px-6 py-3">Image</th>
                  <th scope="col" className="px-6 py-3">Action</th>
                </tr>
              </thead>

              <tbody>
                {cat.map((data) => (
                  <tr key={data._id} className="border-b bg-gray-800 border-gray-700 hover:bg-gray-600">
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
  );
};

export default Categorie;