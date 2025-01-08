import { useEffect, useState } from "react"
import roleServices from "../../../services/role"
import toast from "react-hot-toast"

const RoleModal = ({ isModalOpen, setIsModalOpen, data }) => {
    const [name, setName] = useState("")

    useEffect(() => {
        if (data) {
            setName(data.name || "");
        }
    }, [data]);

    const saveName = async () => {
        try{
            await roleServices.updateName(data._id, { name: name })
            setIsModalOpen(false)
            toast.success("Name was changed")
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
                    <div className="text-2xl font-bold text-white text-start mb-2" style={{ fontFamily: "'Lucida Handwriting', cursive" }}>Role Edit</div>

                    {/* Name */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-[#405D72]">Name</label>
                        <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} className="bg-gray-700 border border-gray-600 text-white text-sm rounded-lg block w-full p-2.5" />
                        <button onClick={saveName} className="mt-2 px-4 py-2 bg-[#405D72] text-[#FFF8F3] rounded-lg">Save Name</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RoleModal