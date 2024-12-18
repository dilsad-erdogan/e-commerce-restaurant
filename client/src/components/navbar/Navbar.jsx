import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
    const location = useLocation();
    const isActive = (path) => location.pathname === path;
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="text-white">
            <div className="container mx-auto flex justify-between items-center p-4">
                {/* Logo */}
                <div className="text-2xl font-bold" style={{ fontFamily: "'Lucida Handwriting', cursive" }}>DlsD Restaurant</div>

                {/* Hamburger Icon for Mobile */}
                <button className="md:hidden text-2xl" onClick={() => setIsMenuOpen(!isMenuOpen)}>☰</button>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-5 uppercase">
                    <Link to="/" className={`font-semibold ${isActive("/") ? "text-white" : "text-gray-400"} hover:text-white duration-200`}>anasayfa</Link>
                    <Link to="/menu" className={`font-semibold ${isActive("/menu") ? "text-white" : "text-gray-400"} hover:text-white duration-200`}>menu</Link>
                    <Link to="/reservation" className={`font-semibold ${isActive("/reservation") ? "text-white" : "text-gray-400"} hover:text-white duration-200`}>reservation</Link>
                    <Link to="/basket" className={`font-semibold ${isActive("/basket") ? "text-white" : "text-gray-400"} hover:text-white duration-200`}>basket</Link>
                    <Link to="/search" className={`font-semibold ${isActive("/search") ? "text-white" : "text-gray-400"} hover:text-white duration-200`}>search</Link>
                    <Link to="/order" className="px-6 py-2 text-sm font-semibold text-white bg-yellow-500 hover:bg-yellow-600 rounded-xl duration-200">order</Link>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden p-4">
                    <Link to="/" onClick={() => setIsMenuOpen(false)} className={`block py-2 font-semibold ${isActive("/") ? "text-white" : "text-gray-400"} hover:text-white`}>anasayfa</Link>
                    <Link to="/menu" onClick={() => setIsMenuOpen(false)} className={`block py-2 font-semibold ${isActive("/menu") ? "text-white" : "text-gray-400"} hover:text-white`}>menu</Link>
                    <Link to="/reservation" onClick={() => setIsMenuOpen(false)} className={`block py-2 font-semibold ${isActive("/reservation") ? "text-white" : "text-gray-400"} hover:text-white`}>reservation</Link>
                    <Link to="/basket" onClick={() => setIsMenuOpen(false)} className={`block py-2 font-semibold ${isActive("/basket") ? "text-white" : "text-gray-400"} hover:text-white`}>basket</Link>
                    <Link to="/search" onClick={() => setIsMenuOpen(false)} className={`block py-2 font-semibold ${isActive("/search") ? "text-white" : "text-gray-400"} hover:text-white`}>search</Link>
                    <Link to="/order" onClick={() => setIsMenuOpen(false)} className="block px-6 py-2 mt-4 text-center text-sm font-semibold text-white bg-yellow-500 hover:bg-yellow-600 rounded-xl">order</Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;