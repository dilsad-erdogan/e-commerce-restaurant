import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from "firebase/firestore";
import { firestore } from "./firebase";
import toast from "react-hot-toast";

export const setOrder = async (productsId, tableId, totalPrice, deliveryStatus) => {
    try{
        const orderDoc = {
            productsId: productsId,
            tableId: tableId,
            totalPrice: totalPrice,
            deliveryStatus: deliveryStatus,
            createdAt: Date.now()
        };

        await addDoc(collection(firestore, "orders"), orderDoc);
        toast.success("Order created successfully!");
    } catch(error) {
        toast.error(error.message);
    }
};

export const fetchOrders = async () => {
    try {
        const orderCollection = collection(firestore, "orders");
        const querySnapshot = await getDocs(orderCollection);
        const products = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        return products;
    } catch (error) {
        toast.error(error.message);
    }
};

export const deleteOrders = async (orderId) => {
    try {
        const orderDocRef = doc(firestore, "orders", orderId);
        await deleteDoc(orderDocRef);
        toast.success("Order deleted successfully!");
    } catch (error) {
        toast.error(error.message);
    }
};

export const updateOrder = async (orderId, productsId, tableId, totalPrice, deliveryStatus) => {
    try {
        const orderDoc = {
            productsId: productsId,
            tableId: tableId,
            totalPrice: totalPrice,
            deliveryStatus: deliveryStatus
        };

        const orderRef = doc(firestore, "orders", orderId);
        await updateDoc(orderRef, orderDoc);
        toast.success("Order updated successfully!");
    } catch (error) {
        toast.error("Failed to update order: " + error.message);
    }
};