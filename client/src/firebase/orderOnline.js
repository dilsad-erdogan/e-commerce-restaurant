import { addDoc, collection, deleteDoc, doc, getDocs, query, where } from "firebase/firestore";
import { firestore } from "./firebase";
import toast from "react-hot-toast";

export const setOrder = async (userId, productsId, address, totalPrice, deliveryStatus) => {
    try{
        const orderDoc = {
            createdBy: userId,
            productsId: productsId,
            address: address,
            totalPrice: totalPrice,
            deliveryStatus: deliveryStatus,
            createdAt: Date.now()
        };

        await addDoc(collection(firestore, "onlineOrder"), orderDoc);
        toast.success("Order created successfully!");
    } catch(error) {
        toast.error(error.message);
    }
};

export const fetchOrders = async () => {
    try {
        const onlineOrderCollection = collection(firestore, "onlineOrder");
        const querySnapshot = await getDocs(onlineOrderCollection);
        const products = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        return products;
    } catch (error) {
        toast.error(error.message);
    }
};

export const fetchProductsByUserId = async (userId) => {
    try {
        const orderCollection = collection(firestore, "onlineOrder");
        const q = query(orderCollection, where("createdBy", "==", userId));
        const querySnapshot = await getDocs(q);

        const orders = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));

        return orders;
    } catch (error) {
        toast.error(error.message);
    }
};

export const deleteOrders = async (orderId) => {
    try {
        const orderDocRef = doc(firestore, "products", orderId);
        await deleteDoc(orderDocRef);
        toast.success("Order deleted successfully!");
    } catch (error) {
        toast.error(error.message);
    }
};