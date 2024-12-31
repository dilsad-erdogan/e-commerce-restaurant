import { useSelector } from 'react-redux'
import Navbar from '../components/navbar/Navbar'
import { Toaster } from 'react-hot-toast'
import { PiEmptyBold } from "react-icons/pi"
import Card from '../components/product/Card'

const Search = () => {
  const filterProducts = useSelector(state => state.product.filteredData);

  return (
    <div className="container">
      <Toaster position="top-right" />
      <Navbar />

      <div className="mx-auto py-12 px-4 md:px-16 lg:px-24">
        {filterProducts.length > 0 ? (
          <div>
            <h2 className="text-2xl font-bold mb-6 text-white" style={{ fontFamily: "'Lucida Handwriting', cursive" }}>Shop</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 cursor-pointer">
              {filterProducts.map(((product) => (
                <div key={product._id}>
                  <Card data={product} />
                </div>
              )))}
            </div>
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center text-center gap-3 mb-4">
            <PiEmptyBold className="h-96 w-96 text-red-500" />
            <h4 className="text-xl font-semibold text-red-500">No product found</h4>
          </div>
        )}
      </div>
    </div>
  )
}

export default Search