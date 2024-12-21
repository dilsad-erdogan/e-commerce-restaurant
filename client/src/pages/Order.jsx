import Navbar from "../components/navbar/Navbar"
import { useState } from "react"
import { FaAngleDown, FaAngleUp } from "react-icons/fa"
import { PiEmptyBold } from "react-icons/pi"
import { useSelector } from "react-redux"
import { Toaster } from "react-hot-toast"
import toast from "react-hot-toast"

const Order = () => {
  const [billingToggle, setBillingToggle] = useState(true);
  const [shippingToggle, setShippingToggle] = useState(true);
  const [paymentToggle, setPaymentToggle] = useState(true);
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [shippingInfo, setShippingInfo] = useState({
    address: '',
    city: '',
    zip: ''
  });
  const cart = useSelector(state => state.cart);

  const handleOrder = () => {
    toast.success('Your order has been received!')
  };

  return (
    <div className="container">
      <Toaster position="top-right" />

      <Navbar />

      <div className="container text-white text-end mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24">
        {cart.products.length > 0 ?
          // If cart is full
          <div className="mt-10">
            <h3 className="text-2xl font-semibold mb-4" style={{ fontFamily: "'Lucida Handwriting', cursive" }}>CHECKOUT</h3>

            <div className="flex flex-col md:flex-row justify-between space-x-10 mt-8">
              <div className="md:w-2/3">
                <div className="border p-2 mb-6 space-y-4">
                  <div className="flex items-center justify-between" onClick={() => setBillingToggle(!billingToggle)}>
                    <h3 className="text-lg font-semibold mb-2">Billing Information</h3>
                    {billingToggle ? <FaAngleDown /> : <FaAngleUp />}
                  </div>

                  <div className={`space-y-4 ${billingToggle ? "" : "hidden"}`}>
                    <div>
                      <label className="block">Name</label>
                      <input type="text" name="name" placeholder="Enter Name" className="w-full px-3 py-2 border bg-gray-800" />
                    </div>
                  </div>

                  <div className={`space-y-4 ${billingToggle ? "" : "hidden"}`}>
                    <div>
                      <label className="block">Email</label>
                      <input type="email" name="email" placeholder="Enter Email" className="w-full px-3 py-2 border bg-gray-800" />
                    </div>
                  </div>

                  <div className={`space-y-4 ${billingToggle ? "" : "hidden"}`}>
                    <div>
                      <label className="block">Phone</label>
                      <input type="text" name="phone" placeholder="Enter Phone #" className="w-full px-3 py-2 border bg-gray-800" />
                    </div>
                  </div>
                </div>

                <div className="border p-2 mb-6 space-y-4">
                  <div className="flex items-center justify-between" onClick={() => setShippingToggle(!shippingToggle)}>
                    <h3 className="text-lg font-semibold mb-2">Shipping Information</h3>
                    {shippingToggle ? <FaAngleDown /> : <FaAngleUp />}
                  </div>

                  <div className={`space-y-4 ${shippingToggle ? "" : "hidden"}`}>
                    <div>
                      <label className="block">Address</label>
                      <input type="text" name="address" placeholder="Enter Address" className="w-full px-3 py-2 border bg-gray-800" onChange={(e) => setShippingInfo({...shippingInfo, address: e.target.value})} />
                    </div>
                  </div>

                  <div className={`space-y-4 ${shippingToggle ? "" : "hidden"}`}>
                    <div>
                      <label className="block">City</label>
                      <input type="text" name="city" placeholder="Enter City Name" className="w-full px-3 py-2 border bg-gray-800" onChange={(e) => setShippingInfo({...shippingInfo, city: e.target.value})} />
                    </div>
                  </div>

                  <div className={`space-y-4 ${shippingToggle ? "" : "hidden"}`}>
                    <div>
                      <label className="block">Zip Code</label>
                      <input type="text" name="zip" placeholder="Enter Zip Code" className="w-full px-3 py-2 border bg-gray-800" onChange={(e) => setShippingInfo({...shippingInfo, zip: e.target.value})} />
                    </div>
                  </div>
                </div>

                <div className="border p-2 mb-6 space-y-4">
                  <div className="flex items-center justify-between" onClick={() => setPaymentToggle(!paymentToggle)}>
                    <h3 className="text-lg font-semibold mb-2">Payment Method</h3>
                    {paymentToggle ? <FaAngleDown /> : <FaAngleUp />}
                  </div>

                  <div className={`space-y-4 ${paymentToggle ? "" : "hidden"}`}>
                    <div className="flex items-center mb-2">
                      <input type="radio" name="payment" checked={paymentMethod === "cod"} onChange={() => setPaymentMethod("cod")} />
                      <label className="block ml-2">Cash on Delivery</label>
                    </div>
                  </div>

                  <div className={`space-y-4 ${paymentToggle ? "" : "hidden"}`}>
                    <div className="flex items-center mb-2">
                      <input type="radio" name="payment" checked={paymentMethod === "dc"} onChange={() => setPaymentMethod("dc")} />
                      <label className="block ml-2">Debit Card</label>
                    </div>

                    {paymentMethod === "dc" && (
                      <div className="bg-gray-800 p-4 rounded-lg mb-4">
                        <h3 className="text-xl font-semibold mb-4">Debit Card Information</h3>

                        <div className="mb-4">
                          <label className="block font-semibold mb-2">Card Number</label>
                          <input type="text" placeholder="Enter Card Number" className="border p-2 w-full rounded bg-gray-900" required />
                        </div>

                        <div className="mb-4">
                          <label className="block font-semibold mb-2">Card Holder Name</label>
                          <input type="text" placeholder="Enter Card Holder Name" className="border p-2 w-full rounded bg-gray-900" required />
                        </div>

                        <div className="mb-4 flex justify-between">
                          <div className="w-1/2 mr-2">
                            <label className="block font-semibold mb-2">Expire Date</label>
                            <input type="text" placeholder="MM/YY" className="border p-2 w-full rounded bg-gray-900" required />
                          </div>

                          <div className="w-1/2 ml-2">
                            <label className="block font-semibold mb-2">CVV</label>
                            <input type="text" placeholder="CVV" className="border p-2 w-full rounded bg-gray-900" required />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="md:w-1/3 bg-gray-800 p-6 rounded-lg shadow-md border">
                <h3 className="text-lg font-semibold mb-4">Order Summary</h3>

                <div className="space-y-4">
                  {cart.products.map(product => (
                    <div key={product.id} className="flex justify-between">
                      <div className="flex items-center">
                        <img src={product.image} alt={product.name} className="w-16 object-contain rounded" />

                        <div className="ml-4">
                          <h4 className="text-md font-semibold">{product.name}</h4>
                          <p className="text-gray-600">&{product.price} x {product.quantity}</p>
                        </div>
                      </div>

                      <div className="text-gray-800">
                        ${product.price * product.quantity}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 border-t pt-4">
                  <div className="flex justify-between">
                    <span>Total Price:</span>
                    <span className="font-semibold">${cart.totalPrice.toFixed(2)}</span>
                    </div>
                  </div>

                  <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2 mt-6" onClick={handleOrder}>Place Order</button>
                </div>
            </div>
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

export default Order