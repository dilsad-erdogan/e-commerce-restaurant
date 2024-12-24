import { addDoc, collection, deleteDoc, doc, getDocs, query, updateDoc, where } from "firebase/firestore";
import { firestore } from "./firebase";
import toast from "react-hot-toast";

export const setCategories = async (name, description, price, categories_id, selectedImage) => {
    try{
        const formData = new FormData();
        formData.append("image", selectedImage.file);

        const response = await fetch("https://api.imgbb.com/1/upload?key=3433368c4b8f4d7437f0e6c766d6659f", {
            method: "POST",
            body: formData,
        });
        const data = await response.json();

        if (data.success) {
            const productDoc = {
                name: name,
                description: description,
                price: price,
                cat_id: categories_id,
                imgUrl: data.data.url,
                createdAt: Date.now()
            };
      
            await addDoc(collection(firestore, "products"), productDoc);
            toast.success("Product created successfully!");
        } else {
            toast.error("Image upload failed!");
        }
    } catch (error) {
        toast.error(error.message);
    }
};

export const fetchProducts = async () => {
    try {
        const productsCollection = collection(firestore, "products");
        const querySnapshot = await getDocs(productsCollection);
        const products = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        return products;
    } catch (error) {
        toast.error(error.message);
    }
};

export const fetchProductsByCategoryId = async (categoryId) => {
    try {
        const productsCollection = collection(firestore, "products");
        const q = query(productsCollection, where("cat_id", "==", categoryId));
        const querySnapshot = await getDocs(q);

        const products = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));

        return products;
    } catch (error) {
        toast.error(error.message);
    }
};

export const updateCategories = async (productId, name, description, price, image) => {
    try {
        const formData = new FormData();
        formData.append("image", image.file);

        const response = await fetch(
            "https://api.imgbb.com/1/upload?key=3433368c4b8f4d7437f0e6c766d6659f",
            {
                method: "POST",
                body: formData,
            }
        );

        const data = await response.json();

        if (data.success) {
            const userDoc = {
                name: name,
                description: description,
                price: price,
                profilePicUrl: data.data.url
            };

            const userRef = doc(firestore, "categories", productId);
            await updateDoc(userRef, userDoc);
            toast.success("Categories updated successfully!");
        } else {
            toast.error("Image upload failed!");
        }
    } catch (error) {
        toast.error("Failed to update categories: " + error.message);
    }
};

export const deleteCategories = async (productsId) => {
    try {
        const categoriesDocRef = doc(firestore, "products", productsId);
        await deleteDoc(categoriesDocRef);
        toast.success("Categories deleted successfully!");
    } catch (error) {
        toast.error(error.message);
    }
};