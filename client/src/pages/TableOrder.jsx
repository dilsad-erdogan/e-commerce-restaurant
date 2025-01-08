import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import orderServices from "../services/order";
import productServices from "../services/product";
import toast, { Toaster } from "react-hot-toast";

const TableOrder = () => {
  const { tableId } = useParams();
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);
  const [newOrder, setNewOrder] = useState("");

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const data = await orderServices.getActiveOrdersByTableId(tableId);
      setOrders(data.data);
      setTotalPrice(data.data[0]?.totalPrice || 0); // Toplam fiyatı doğrudan al
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

  const addOrder = async () => {
    if (!newOrder) {
      toast.error("Please enter an order.");
      return;
    }

    try {
      await orderServices.addOrder({ tableId, name: newOrder });
      setNewOrder("");
      fetchOrders();
    } catch (error) {
      toast.error("Error adding order:", error);
    }
  };

  const finishOrder = async () => {
    try {
      await orderServices.finishOrder(tableId);
      toast.success("Order finished!");
      navigate("/tables"); // Masalar sayfasına geri dön
    } catch (error) {
      toast.error("Error finishing order:", error);
    }
  };

  return (
    <div className="container">
      <Toaster position="top-right" />
      <h1 className="text-3xl font-bold text-white">Table Orders</h1>
      <div className="mt-5">
        <h2 className="text-xl font-bold text-white">Orders</h2>
        <ul className="list-disc ml-5 text-white">
          {orders[0]?.products.map((item) => (
            <li key={item._id}>
              {products[item.product]?.name || "Loading..."} - Quantity: {item.quantity}
            </li>
          ))}
        </ul>
        <p className="text-lg font-bold text-white mt-3">Total: ${totalPrice}</p>
      </div>

      <div className="mt-5">
        <h2 className="text-xl font-bold text-white">Add New Order</h2>
        <input
          type="text"
          value={newOrder}
          onChange={(e) => setNewOrder(e.target.value)}
          className="bg-gray-700 text-white rounded-lg p-2"
        />
        <button
          onClick={addOrder}
          className="ml-2 bg-green-500 text-white px-4 py-2 rounded-lg"
        >
          Add Order
        </button>
      </div>

      <button
        onClick={finishOrder}
        className="mt-5 bg-red-500 text-white px-4 py-2 rounded-lg"
      >
        Finish Order
      </button>
    </div>
  );
};

export default TableOrder;