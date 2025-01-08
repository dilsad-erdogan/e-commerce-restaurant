import { useEffect, useState } from "react"
import tableServices from "../../../services/table"
import toast from "react-hot-toast"

const TableModal = ({ isModalOpen, setIsModalOpen, data }) => {
    const [name, setName] = useState("")
    const [number, setNumber] = useState("")

    useEffect(() => {
        if (data) {
            setName(data.name || "");
            setNumber(data.numberOfPeople || "");
        }
    }, [data]);

    const saveName = async () => {
        try{
            await tableServices.updateName(data._id, { name: name })
            setIsModalOpen(false)
            toast.success("Name was changed")
        } catch (error) {
            toast.error("Error: ", error)
        }
    }

    const saveNumber = async () => {
        try{
            await tableServices.updateNumber(data._id, { numberOfPeople: number })
            setIsModalOpen(false)
            toast.success("Number was changed")
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
                    <div className="text-2xl font-bold text-white text-start mb-2" style={{ fontFamily: "'Lucida Handwriting', cursive" }}>Categorie Edit</div>

                    {/* Name */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-[#405D72]">Name</label>
                        <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} className="bg-gray-700 border border-gray-600 text-white text-sm rounded-lg block w-full p-2.5" />
                        <button onClick={saveName} className="mt-2 px-4 py-2 bg-[#405D72] text-[#FFF8F3] rounded-lg">Save Name</button>
                    </div>
            
                    {/* Number */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-[#405D72]">Number</label>
                        <input type="text" name="number" value={number} onChange={(e) => setNumber(e.target.value)} className="bg-gray-700 border border-gray-600 text-white text-sm rounded-lg block w-full p-2.5" />
                        <button onClick={saveNumber} className="mt-2 px-4 py-2 bg-[#405D72] text-[#FFF8F3] rounded-lg">Save Number</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TableModal