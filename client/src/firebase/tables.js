import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from "firebase/firestore";
import { firestore } from "./firebase";
import toast from "react-hot-toast";

export const setTable = async (count, occupancyRate) => {
    try{
        const tableDoc = {
            count: count,
            occupancyRate: occupancyRate
        };

        await addDoc(collection(firestore, "tables"), tableDoc);
        toast.success("Table created successfully!");
    } catch(error) {
        toast.error(error.message);
    }
};

export const fetchTable = async () => {
    try {
        const tableCollection = collection(firestore, "tables");
        const querySnapshot = await getDocs(tableCollection);
        const tabşes = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        return tabşes;
    } catch (error) {
        toast.error(error.message);
    }
};

export const deleteTable = async (tableId) => {
    try {
        const tableDocRef = doc(firestore, "tables", tableId);
        await deleteDoc(tableDocRef);
        toast.success("Table deleted successfully!");
    } catch (error) {
        toast.error(error.message);
    }
};

export const updateTable = async (tableId, count, occupancyRate) => {
    try {
        const tableDoc = {
            count: count,
            occupancyRate: occupancyRate
        };

        const tableRef = doc(firestore, "tables", tableId);
        await updateDoc(tableRef, tableDoc);
        toast.success("Table updated successfully!");
    } catch (error) {
        toast.error("Failed to update tables: " + error.message);
    }
};