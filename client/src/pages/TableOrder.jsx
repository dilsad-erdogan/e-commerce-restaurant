import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import orderServices from "../services/order";
import productServices from "../services/product";
import tableServices from "../services/table";
import toast, { Toaster } from "react-hot-toast";
import AdminNavbar from "../components/navbar/AdminNavbar";
import Sidebar from "../components/sidebar/Sidebar";
import { MdDeleteForever } from "react-icons/md";

const TableOrder = () => {
  const navigate = useNavigate();
  const { tableId } = useParams();
  const [orders, setOrders] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [products, setProducts] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);
  const [newOrder, setNewOrder] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchOrders();
    fetchAllProducts();
  }, []);

  const fetchOrders = async () => {
    try {
      const data = await orderServices.getActiveOrdersByTableId(tableId);
      setOrders(data.data);
      setTotalPrice(data.data[0]?.totalPrice || 0);
      fetchProducts(data.data[0]?.products || []);
    } catch (error) {
      toast.error("Error fetching orders:", error);
    }
  };

  const fetchProducts = async (orderProducts) => {
    try {
      const productDetails = {};
      for (const item of orderProducts) {
        const productData = await productServices.byId(item.product);
        productDetails[item.product] = productData.data;
      }
      setProducts(productDetails);
    } catch (error) {
      toast.error("Error fetching product details:", error);
    }
  };

  const fetchAllProducts = async () => {
    try {
      const data = await productServices.get();
      setAllProducts(data.data);
    } catch (error) {
      toast.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  const updateProducts = async (id, action, productId, quantity) => {
    try{
      const data = {
        action: action,
        productId: productId,
        quantity: quantity
      };

      await orderServices.updateProducts(id, data);
      fetchOrders();
      toast.success('Product was updated!');
    } catch (error) {
      toast.error('Error updated: ', error);
    }
  };

  const addOrder = async (id, action, productId) => {
    try{
      const data = {
        action: action,
        newProduct: {
          product: productId,
          quantity: 1
        }
      };

      await orderServices.updateProducts(id, data);
      fetchOrders();
      toast.success('Product was added!');
    } catch (error) {
      toast.error('Error updated: ', error);
    }
  };

  const deleteProduct = async (id, action, productId) => {
    try{
      const data = {
        action: action,
        productId: productId
      };

      await orderServices.updateProducts(id, data);
      fetchOrders();
      toast.success('Product was deleted!');
    } catch (error) {
      toast.error('Error updated: ', error);
    }
  };

  const finishOrder = async (id) => {
    try{
      const data = {
        paymentStatus: true
      };

      const occupancyRate = {
        occupancyRate: true
      };

      await orderServices.updateStatus(id, data);
      await tableServices.updateRate(tableId, occupancyRate);
      toast.success('Order was finished!');
      navigate('/table-management');
    } catch (error) {
      toast.error('Error updated: ', error);
    }
  };

  return (
    <div className="container">
      <Toaster position="top-right" />
      <AdminNavbar />

      <div className="flex container">
        <Sidebar />

        <div className="p-5 m-5">
          <h1 className="text-3xl font-bold text-white ml-2" style={{ fontFamily: "'Lucida Handwriting', cursive" }}>Table Orders</h1>

          {loading ? (
            <div className="text-white text-center mt-10">
              <p>Loading...</p>
            </div>
          ) : (
            <>
              <div className="mt-5 border rounded-2xl p-5">
                <h2 className="text-xl font-bold text-white">Orders</h2>

                <div className="flex mt-5 gap-5 text-white">
                  {orders[0]?.products.map((item) => (
                    <div key={item._id} className="flex flex-col justify-between border rounded-2xl p-5">
                      <div className="flex justify-between items-center">
                        <h2 className="text-xl">{products[item.product]?.name || "Loading..."}</h2>
                        <MdDeleteForever className="text-xl hover:text-2xl" onClick={() => deleteProduct(orders[0]._id, 'delete', item.product)} />
                      </div>

                      <img src={products[item.product]?.image} alt={products[item.product]?.name || "Loading..."} className="mt-1 rounded-md" />

                      <div className="flex justify-between text-sm mt-1">
                        Quantity: 
                        <div className="bg-gray-700 flex items-center justify-center border rounded-lg">
                          <button className="text-sm font-bold px-1.5 border-r" onClick={() => updateProducts(orders[0]._id, 'update', item.product, --item.quantity)}>-</button>
                          <p className="text-sm px-2">{item.quantity}</p>
                          <button className="text-sm px-1 border-l" onClick={() => updateProducts(orders[0]._id, 'update', item.product, ++item.quantity)}>+</button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <p className="text-lg text-end font-bold text-white mt-3">Total: ${totalPrice}</p>
              </div>

              <div className="mt-5 border rounded-2xl p-5">
                <h2 className="text-xl font-bold text-white">Add New Order</h2>

                <select value={newOrder} onChange={(e) => setNewOrder(e.target.value)} className="bg-gray-700 mt-5 text-white rounded-lg p-2 w-full">
                  <option value="" disabled>
                    {allProducts? "Select a product" : "Loading..."}
                  </option>

                  {allProducts.map((product) => (
                    <option key={product._id} value={product._id}>
                      {product.name} - ${product.price}
                    </option>
                  ))}
                </select>

                <button onClick={() => addOrder(orders[0]._id, 'add', newOrder)} className="mt-3 bg-green-500 text-white px-4 py-2 rounded-lg">Add Order</button>
              </div>

              <button onClick={() => finishOrder(orders[0]._id)} className="mt-5 bg-red-500 text-white px-4 py-2 rounded-lg">Finish Order</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default TableOrder;