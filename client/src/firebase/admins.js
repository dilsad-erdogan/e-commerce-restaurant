import { addDoc, collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { firestore } from "./firebase";
import toast from "react-hot-toast";

export const setAdmin = async (userId) => {
    try{
        const adminDoc = {
            userId: userId,
            createdAt: Date.now()
        };

        await addDoc(collection(firestore, "admins"), adminDoc);
        toast.success("Admin created successfully!");
    } catch(error) {
        toast.error(error.message);
    }
};

export const fetchAdmin = async () => {
    try{
        const adminsCollection = collection(firestore, "admins");
        const querySnapshot = await getDocs(adminsCollection);
        const admins = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        return admins;
    } catch(error) {
        toast.error(error.message);
    }
};

export const deleteAdmin = async (adminId) => {
    try {
        const adminDocRef = doc(firestore, "admins", adminId);
        await deleteDoc(adminDocRef);
        toast.success("Admin deleted successfully!");
    } catch (error) {
        toast.error(error.message);
    }
};