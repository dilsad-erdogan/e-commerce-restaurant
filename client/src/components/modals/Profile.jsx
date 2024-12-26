import { useEffect, useState } from "react";
import Hamburger from "/hamburger.png";
import { useNavigate } from "react-router-dom";

const Profile = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [isEditable, setIsEditable] = useState(false);

    useEffect(() => {
        //const userId = JSON.parse(localStorage.getItem('user')).uid;

        const findUser = async () => {
            // const user = await fetchUserById(userId);
            // console.log(user)
            // setName(user.name)
            // setEmail(user.email)
            // setPhone(user.phone);
        };

        findUser();
    }, []);

    const handleLogout = async () => {
        //await logout();
        navigate('/');
    };

    return (
        <div className="flex flex-col items-center justify-center gap-10">
            <div className="flex gap-6 justify-center items-center">
                <img src={Hamburger} alt="profile" className="rounded-full max-w-24 max-h-24 border-2" />

                <div className="flex-1">
                    <h1 className="text-2xl font-bold">{name}</h1>
                    <p className="text-sm">{email}</p>
                    <p className="text-sm">{phone}</p>
                </div>
            </div>

            <div className="flex flex-col gap-4 justify-center w-full items-center">
                <div className="flex justify-between items-center gap-2 w-full">
                    <input type="text" placeholder="Enter your name..." value={name} onChange={(e) => setName(e.target.value)} className="bg-gray-700 rounded-lg border p-2 w-full" disabled={!isEditable} />
                    <button className={`py-2 px-2 rounded ${isEditable ? "bg-yellow-500 hover:bg-yellow-600 text-white" : "bg-gray-500 text-gray-300 cursor-not-allowed"}`} disabled={!isEditable}>Change</button>
                </div>

                <div className="flex justify-between items-center gap-2 w-full">
                    <input type="email" placeholder="Enter your email..." value={email} onChange={(e) => setEmail(e.target.value)} className="bg-gray-700 rounded-lg border p-2 w-full" disabled={!isEditable} />
                    <button className={`py-2 px-2 rounded ${isEditable ? "bg-yellow-500 hover:bg-yellow-600 text-white" : "bg-gray-500 text-gray-300 cursor-not-allowed"}`} disabled={!isEditable}>Change</button>
                </div>

                <div className="flex justify-between items-center gap-2 w-full">
                    <input type="number" placeholder="Enter your phone..." value={phone} onChange={(e) => setPhone(e.target.value)} className="bg-gray-700 rounded-lg border p-2 w-full" disabled={!isEditable} />
                    <button className={`py-2 px-2 rounded ${isEditable ? "bg-yellow-500 hover:bg-yellow-600 text-white" : "bg-gray-500 text-gray-300 cursor-not-allowed"}`} disabled={!isEditable}>Change</button>
                </div>

                <p className="text-sm cursor-pointer text-yellow-400 hover:underline" onClick={() => setIsEditable(!isEditable)}>Change Your Information</p>
            </div>

            <button className="py-2 px-2 rounded bg-yellow-500 hover:bg-yellow-600 text-white" onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Profile