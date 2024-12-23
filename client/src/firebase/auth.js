import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth, firestore } from "./firebase";
import toast from 'react-hot-toast';
import { collection, doc, getDoc, getDocs, setDoc, updateDoc } from "firebase/firestore";
import store from "../redux/store";
import { login as loginHandle, logout as logoutHandle } from "../redux/userSlice";
import { Timestamp } from "firebase/firestore";

export const login = async (email, password) => {
    try{
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      return user;
    } catch (error) {
      toast.error(error.message);
    }
};

export const loginWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const { user } = await signInWithPopup(auth, provider);
  
      if (user) {
        const userDocRef = doc(firestore, "users", user.uid);
        const userDocSnap = await getDoc(userDocRef);
  
        if (!userDocSnap.exists()) {
            const newUserDoc = {
                uid: user.uid,
                email: user.email,
                name: user.displayName || "Anonymous",
                profilePicUrl: user.photoURL || "",
                phone: "",
                createdAt: Timestamp.now(),
            };
  
            try {
                await setDoc(doc(firestore, "users", user.uid), newUserDoc);
                console.log("User successfully added to Firestore!");
            } catch (error) {
                console.error("Error adding user to Firestore:", error);
            }
            
        } else {
            console.log("Kullanıcı zaten mevcut:", userDocSnap.data());
        }
      }
  
      return user;
    } catch (error) {
      toast.error(error.message);
    }
};

onAuthStateChanged(auth, (user) => {
    if (user) {
      store.dispatch(loginHandle(user));
    } else {
      store.dispatch(logoutHandle());
    }
});

export const logout = async () => {
    await signOut(auth);
    return true;
};

export const register = async (name, email, password) => {
    try {
        const { user } = await createUserWithEmailAndPassword(auth, email, password);
        if (user) {
            toast.success('You have successfully registered!');

            // Kullanıcı bilgilerini Firestore'daki "users" koleksiyonuna ekleme
            const userDoc = {
                uid: user.uid,
                email: email,
                name: name,
                profilePicUrl: "",
                phone: "",
                createdAt: Timestamp.now(),
            };

            try {
                await setDoc(doc(firestore, "users", user.uid), userDoc);
                console.log("User successfully added to Firestore!");
            } catch (error) {
                console.error("Error adding user to Firestore:", error);
            }            
        }
        return user;
    } catch (error) {
        toast.error(error.message);
    }
};

export const fetchUserById = async (userId) => {
    try {
        const userDoc = doc(firestore, "users", userId);
        const userSnapshot = await getDoc(userDoc);
    
        if (userSnapshot.exists()) {
            return { id: userSnapshot.id, ...userSnapshot.data() };
        } else {
            throw new Error("User not found");
        }
    } catch (error) {
        toast.error(error.message);
    }
};

export const fetchAllUsers = async () => {
    try {
        const usersCollection = collection(firestore, "users");
        const querySnapshot = await getDocs(usersCollection);

        const users = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));

        return users;
    } catch (error) {
        toast.error(error.message);
    }
};

export const updateUser = async (userId, name, image) => {
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
                profilePicUrl: data.data.url
            };

            const userRef = doc(firestore, "users", userId);
            await updateDoc(userRef, userDoc);
            toast.success("Profile updated successfully!");
        } else {
            toast.error("Image upload failed!");
        }
    } catch (error) {
        toast.error("Failed to update profile: " + error.message);
    }
};