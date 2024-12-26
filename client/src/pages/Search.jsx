import { useState } from 'react';
import Navbar from '../components/navbar/Navbar'
import toast, { Toaster } from 'react-hot-toast';

const Search = () => {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [cat, setCat] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
        const file = e.target.files[0];
        const previewUrl = URL.createObjectURL(file);
        setSelectedImage({ previewUrl, file });
    }
  };

  const handlePost = async () => {
    if (!selectedImage) {
        toast.error("Please select an image");
        return;
    }

    //await setProducts(name, desc, price, cat, selectedImage);
  };

  return (
    <div className="container">
      <Toaster position="top-right" />
        <Navbar />

        <input type="text" placeholder='name' value={name} onChange={(e) => setName(e.target.value)} />
        <input type="text" placeholder='description' value={desc} onChange={(e) => setDesc(e.target.value)} />
        <input type="text" placeholder='price' value={price} onChange={(e) => setPrice(e.target.value)} />
        <input type="text" placeholder='categorie' value={cat} onChange={(e) => setCat(e.target.value)} />
        <input type="file" onChange={handleImageChange} />

        <button onClick={handlePost}>Post</button>
    </div>
  )
}

export default Search