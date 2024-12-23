import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from "firebase/firestore";
import { firestore } from "./firebase";
import toast from "react-hot-toast";

export const setCategories = async (name, description, selectedImage) => {
    try{
        const formData = new FormData();
        formData.append("image", selectedImage.file);

        const response = await fetch("https://api.imgbb.com/1/upload?key=3433368c4b8f4d7437f0e6c766d6659f", {
            method: "POST",
            body: formData,
        });
        const data = await response.json();

        if (data.success) {
            const categorieDoc = {
              name: name,
              description: description,
              imgUrl: data.data.url,
              createdAt: Date.now()
            };
      
            await addDoc(collection(firestore, "categories"), categorieDoc);
            toast.success("Post created successfully!");
        } else {
            toast.error("Image upload failed!");
        }
    } catch (error) {
        toast.error(error.message);
    }
};

export const fetchcategories = async () => {
    try {
        const categoriesCollection = collection(firestore, "categories");
        const querySnapshot = await getDocs(categoriesCollection);
        const categories = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        return categories;
    } catch (error) {
        toast.error(error.message);
    }
};

export const updateCategories = async (catId, name, description, image) => {
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
                profilePicUrl: data.data.url
            };

            const userRef = doc(firestore, "categories", catId);
            await updateDoc(userRef, userDoc);
            toast.success("Categories updated successfully!");
        } else {
            toast.error("Image upload failed!");
        }
    } catch (error) {
        toast.error("Failed to update categories: " + error.message);
    }
};

export const deleteCategories = async (catId) => {
    try {
        const categoriesDocRef = doc(firestore, "categories", catId);
        await deleteDoc(categoriesDocRef);
        toast.success("Categories deleted successfully!");
    } catch (error) {
        toast.error(error.message);
    }
};