import { useState } from "react";

const Address = ({ setAddress, isModalOpen, setIsModalOpen }) => {
    const [addres, setAddres] = useState("");

    const saveAddress = () => {
        setAddress(addres);
        setIsModalOpen(false);
    };

    if(!isModalOpen) return null;

    return (
      <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-gray-700 text-white rounded-lg shadow-lg p-6 w-full max-w-md">
              <button className="absolute top-4 right-4 text-gray-300 text-3xl" onClick={() => setIsModalOpen(false)}>&times;</button>
              
              <div>
                <input type="text" placeholder="Enter new address" className="bg-gray-700 border p-2 w-full mb-4" value={addres} onChange={(e) => {setAddres(e.target.value)}} />

                <div className="flex justify-end">
                    <button className="bg-gray-500 text-white py-2 px-4 rounded mr-2" onClick={() => setIsModalOpen(false)}>Cancel</button>
                    <button className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded" onClick={saveAddress}>Save Address</button>
                </div>
            </div>
          </div>
      </div>
    )
}

export default Address