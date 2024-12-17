import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
    const location = useLocation();
    const isActive = (path) => location.pathname === path;

    return (
        <div className="flex justify-between items-center">
            {/* Link section */}
            <div className="flex justify-center mt-10">
                <a href="#" className="text-white font-semibold tracking-widest text-3xl" style={{ fontFamily: "'Lucida Handwriting', cursive" }}>DlsD Restaurant</a>
            </div>

            {/* Menu Items */}
            <div className="flex justify-center items-center gap-5 text-lg mt-10 uppercase">
                <Link to="/" className={`inline-block px-4 font-semibold ${isActive("/") ? "text-white" : "text-gray-400"} hover:text-white duration-200`}>anasayfa</Link>
                <Link to="/menu" className={`inline-block px-4 font-semibold ${isActive("/menu") ? "text-white" : "text-gray-400"} hover:text-white duration-200`}>menu</Link>
                <Link to="/reservation" className={`inline-block px-4 font-semibold ${isActive("/reservation") ? "text-white" : "text-gray-400"} hover:text-white duration-200`}>reservation</Link>
                <Link to="/" className="inline-block px-4 font-semibold text-gray-400 hover:text-white duration-200">user</Link>
                <Link to="/basket" className={`inline-block px-4 font-semibold ${isActive("/basket") ? "text-white" : "text-gray-400"} hover:text-white duration-200`}>basket</Link>
                <Link to="/search" className={`inline-block px-4 font-semibold ${isActive("/search") ? "text-white" : "text-gray-400"} hover:text-white duration-200`}>search</Link>
                <Link to="/order" className="inline-block px-6 py-2 text-sm font-semibold text-white bg-yellow-500 hover:bg-yellow-600 rounded-xl duration-200">order</Link>
            </div>
        </div>
    );
};

export default Navbar;