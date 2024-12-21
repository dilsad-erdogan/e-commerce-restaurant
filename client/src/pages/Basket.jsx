import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/navbar/Navbar"
import { useNavigate } from "react-router-dom"
import { PiEmptyBold } from "react-icons/pi"
import { decreaseQuantity, increaseQuantity, removeFromCart } from "../redux/cartSlice";
import { FaTrashAlt } from "react-icons/fa";
import { useState } from "react";
import Address from "../components/modals/Address";

const Basket = () => {
  const cart = useSelector(state => state.cart);
  const [address, setAddress] = useState('main street, 0012');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="container">
      <Navbar />
      
      <div className="container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24">
      {cart.products.length > 0 ?
        // If cart is full
        <div className="mt-10">
          {/* Title */}
          <h3 className="text-2xl text-end font-semibold mb-4 text-white" style={{fontFamily: "'Lucida Handwriting', cursive" }}>SHOPPING CART</h3>

          {/* Cart blog */}
          <div className="flex flex-col md:flex-row justify-between space-x-10 mt-8">
            <div className="md:w-2/3">
              {/* Table header */}
              <div className="flex justify-between border-b text-white text-sm items-center mb-4 font-bold">
                <p>PRODUCTS</p>

                <div className="flex space-x-8">
                  <p>PRICE</p>
                  <p>QUANTITY</p>
                  <p>SUBTOTAL</p>
                  <p>REMOVE</p>
                </div>
              </div>

              {/* Table data */}
              <div>
                {cart.products.map((product) => (
                  <div key={product.id} className="flex text-white items-center justify-between p-3 border-b">
                    <div className="md:flex items-center space-x-4">
                      <img src={product.img} alt={product.name} className="w-16 h-16 object-contain rounded" />

                      <div className="flex-1 ml-4">
                        <h3 className="text-lg font-semibold">{product.name}</h3>
                      </div>
                    </div>

                    <div className="flex space-x-12 items-center">
                      <p>${product.price}</p>

                      <div className="flex items-center justify-center border">
                        <button className="text-xl font-bold px-1.5 border-r" onClick={() => dispatch(decreaseQuantity(product.id))}>-</button>
                        <p className="text-xl px-2">{product.quantity}</p>
                        <button className="text-xl px-1 border-l" onClick={() => dispatch(increaseQuantity(product.id))}>+</button>
                      </div>

                      <p>${(product.quantity * product.price).toFixed(2)}</p>

                      <button className="text-yellow-500 hover:text-yellow-600" onClick={() => dispatch(removeFromCart(product.id))}>
                        <FaTrashAlt />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:w-1/3 bg-gray-700 text-white p-6 rounded-lg shadow-md border">
              <h3 className="text-sm font-semibold mb-5">CART TOTAL</h3>

              <div className="flex justify-between mb-5 border-b pb-1">
                <span className="text-sm">Total Items:</span>
                <span>{cart.totalQuantity}</span>
              </div>

              <div className="mb-4 border-b pb-2">
                <p>Shipping:</p>
                <p className="ml-2">
                  Shipping to{" "}
                  <span className="text-xs font-bold">{address}</span>
                </p>
                <button className="text-blue-500 hover:underline mt-1 ml-2" onClick={() => setIsModalOpen(true)}>Change address</button>
              </div>

              <div className="flex justify-between mb-4">
                <span>Total Price:</span>
                <span>${cart.totalPrice.toFixed(2)}</span>
              </div>

              <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2" onClick={() => navigate('/order')}>Proced to checkout</button>
            </div>
          </div>

          <Address setAddress={setAddress} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
        </div>
        :
        // If cart is empty
        <div className="flex flex-col justify-center items-center text-center gap-3 mb-4">
          <PiEmptyBold className="h-96 w-96 text-yellow-500" />
          <h4 className="text-xl font-semibold text-yellow-500">Your cart is empty</h4>
          <p className="font-semibold text-gray-600">Add something to make me happy :)</p>
        </div>
      }
      </div>
    </div>
  )
}

export default Basket