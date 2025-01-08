import { useEffect, useState } from "react"
import productServices from "../../../services/product"
import toast from "react-hot-toast"

const ProductModal = ({ isModalOpen, setIsModalOpen, data }) => {
    const [name, setName] = useState("")
    const [desc, setDesc] = useState("")
    const [price, setPrice] = useState("")
    const [image, setImage] = useState("")

    useEffect(() => {
        if (data) {
            setName(data.name || "");
            setDesc(data.description || "");
            setPrice(data.price || "");
            setImage(data.image || "");
        }
    }, [data])

    const saveName = async () => {
        try{
            await productServices.updateName(data._id, { name: name })
            setIsModalOpen(false)
            toast.success("Name was changed")
        } catch (error) {
            toast.error("Error: ", error)
        }
    }

    const saveDescription = async () => {
        try{
            await productServices.updateDescription(data._id, { description: desc })
            setIsModalOpen(false)
            toast.success("Description was changed")
        } catch (error) {
            toast.error("Error: ", error)
        }
    }

    const savePrice = async () => {
        try{
            await productServices.updatePrice(data._id, { price: price })
            setIsModalOpen(false)
            toast.success("Price was changed")
        } catch (error) {
            toast.error("Error: ", error)
        }
    }

    const savePhoto = async () => {
        try{
            await productServices.updateImage(data._id, { image: image })
            setIsModalOpen(false)
            toast.success("Image was changed")
        } catch (error) {
            toast.error("Error: ", error)
        }
    }

    if (!isModalOpen) return null;

    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
            <div className="bg-gray-700 text-white rounded-lg shadow-lg p-6 w-full max-w-md">
                <button className="absolute top-4 right-4 text-gray-300 text-3xl" onClick={() => setIsModalOpen(false)}>&times;</button>
                
                <div className="p-3">
                    {/* Text */}
                    <div className="text-2xl font-bold text-white text-start mb-2" style={{ fontFamily: "'Lucida Handwriting', cursive" }}>Product Edit</div>

                    {/* Name */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-[#405D72]">Name</label>
                        <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} className="bg-gray-700 border border-gray-600 text-white text-sm rounded-lg block w-full p-2.5" />
                        <button onClick={saveName} className="mt-2 px-4 py-2 bg-[#405D72] text-[#FFF8F3] rounded-lg">Save Name</button>
                    </div>
            
                    {/* Description */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-[#405D72]">Description</label>
                        <input type="text" name="description" value={desc} onChange={(e) => setDesc(e.target.value)} className="bg-gray-700 border border-gray-600 text-white text-sm rounded-lg block w-full p-2.5" />
                        <button onClick={saveDescription} className="mt-2 px-4 py-2 bg-[#405D72] text-[#FFF8F3] rounded-lg">Save Description</button>
                    </div>

                    {/* Price */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-[#405D72]">Price</label>
                        <input type="text" name="price" value={price} onChange={(e) => setPrice(e.target.value)} className="bg-gray-700 border border-gray-600 text-white text-sm rounded-lg block w-full p-2.5" />
                        <button onClick={savePrice} className="mt-2 px-4 py-2 bg-[#405D72] text-[#FFF8F3] rounded-lg">Save Price</button>
                    </div>
    
                    {/* Photo */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-[#405D72]">Photo</label>
                        <input type="text" name="photo" value={image} onChange={(e) => setImage(e.target.value)} className="bg-gray-700 border border-gray-600 text-white text-sm rounded-lg block w-full p-2.5" />
                        <button onClick={savePhoto} className="mt-2 px-4 py-2 bg-[#405D72] text-[#FFF8F3] rounded-lg">Save Photo</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductModal