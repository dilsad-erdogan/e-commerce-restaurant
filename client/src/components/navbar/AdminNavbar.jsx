import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaUser, FaSearch } from "react-icons/fa";
import { BsBasket3Fill } from "react-icons/bs";
import User from "../modals/User";
import Profile from "../modals/Profile";
import Login from "../modals/Login";
import Register from "../modals/Register";

const AdminNavbar = () => {
    const location = useLocation();
    const isActive = (path) => location.pathname === path;
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalType, setModalType] = useState("login");

    useEffect(() => {
        const user = localStorage.getItem('user');

        if(!user) {
            setModalType("login");
        } else {
            setModalType("profile");
        };
    }, []);

    return (
        <nav className="text-white items-center mt-5">
            <div className="container mx-auto flex justify-between items-center p-4">
                {/* Logo */}
                <div className="text-2xl font-bold" style={{ fontFamily: "'Lucida Handwriting', cursive" }}>DlsD Restaurant</div>

                {/* Hamburger Icon for Mobile */}
                <button className="md:hidden text-2xl" onClick={() => setIsMenuOpen(!isMenuOpen)}>☰</button>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-5 items-center justify-center uppercase">
                    <Link className={`font-semibold ${isActive("/user") ? "text-white" : "text-gray-400"} hover:text-white duration-200`}><FaUser onClick={() => setIsModalOpen(true)} /></Link>
                    <Link to="/basket" className={`font-semibold ${isActive("/basket") ? "text-white" : "text-gray-400"} hover:text-white duration-200`}><BsBasket3Fill /></Link>
                    <div className="relative flex-1 mx-4">
                        <input type="text" placeholder="Search Book" className="w-full rounded-2xl text-black border py-2 px-4" />
                        <FaSearch className="absolute top-3 right-3 text-yellow-500" />
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden p-4">
                    <div className="relative flex-1">
                        <input type="text" placeholder="Search Book" className="w-full rounded-2xl text-black border py-2 px-4" />
                        <FaSearch className="absolute top-3 right-3 text-yellow-500" />
                    </div>
                    <div className="flex gap-3">
                        <Link to="/" onClick={() => setIsMenuOpen(false)} className={`block py-2 font-semibold ${isActive("/") ? "text-white" : "text-gray-400"} hover:text-white`}><FaUser onClick={() => setIsModalOpen(true)} /></Link>
                        <Link to="/basket" onClick={() => setIsMenuOpen(false)} className={`block py-2 font-semibold ${isActive("/basket") ? "text-white" : "text-gray-400"} hover:text-white`}><BsBasket3Fill /></Link>
                    </div>
                </div>
            )}

            <User isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
                {isModalType==="login" ? <Login setModalType={setModalType} /> : (isModalType==="register" ? <Register setModalType={setModalType} /> : <Profile setModalType={setModalType} />)}
            </User>
        </nav>
    );
};

export default AdminNavbar;