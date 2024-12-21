import { useState } from "react";
import Hamburger from "/hamburger.png";

const User = ({ isModalOpen, setIsModalOpen }) => {
    const [name, setName] = useState("Dilşad Rukiye Erdoğan");
    const [email, setEmail] = useState("dilsadrukiyeerdogan@gmail.com");
    const [phone, setPhone] = useState("5071845246");
    const [isEditable, setIsEditable] = useState(false);

    if (!isModalOpen) return null;

    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
            <div className="bg-gray-700 text-white rounded-lg shadow-lg p-6 w-full max-w-lg">
                <button className="absolute top-4 right-4 text-gray-300 text-3xl" onClick={() => setIsModalOpen(false)}>&times;</button>

                <div className="flex flex-col items-center justify-center gap-10">
                    <div className="flex gap-6 justify-center items-center">
                        <img src={Hamburger} alt="profile" className="rounded-full max-w-24 max-h-24 border-2" />

                        <div className="flex-1">
                            <h1 className="text-2xl font-bold">{name}</h1>
                            <p className="text-sm">{email}</p>
                            <p className="text-sm">{phone}</p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 justify-center items-center">
                        <div className="flex justify-between items-center gap-2 w-full">
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="bg-gray-700 rounded-lg border p-2 w-full" disabled={!isEditable} />
                            <button className={`py-2 px-2 rounded ${isEditable ? "bg-yellow-500 hover:bg-yellow-600 text-white" : "bg-gray-500 text-gray-300 cursor-not-allowed"}`} disabled={!isEditable}>Change</button>
                        </div>

                        <div className="flex justify-between items-center gap-2 w-full">
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="bg-gray-700 rounded-lg border p-2 w-full" disabled={!isEditable} />
                            <button className={`py-2 px-2 rounded ${isEditable ? "bg-yellow-500 hover:bg-yellow-600 text-white" : "bg-gray-500 text-gray-300 cursor-not-allowed"}`} disabled={!isEditable}>Change</button>
                        </div>

                        <div className="flex justify-between items-center gap-2 w-full">
                            <input type="number" value={phone} onChange={(e) => setPhone(e.target.value)} className="bg-gray-700 rounded-lg border p-2 w-full" disabled={!isEditable} />
                            <button className={`py-2 px-2 rounded ${isEditable ? "bg-yellow-500 hover:bg-yellow-600 text-white" : "bg-gray-500 text-gray-300 cursor-not-allowed"}`} disabled={!isEditable}>Change</button>
                        </div>

                        <p className="text-sm cursor-pointer text-yellow-400 hover:underline" onClick={() => setIsEditable(!isEditable)}>Change Your Information</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default User;