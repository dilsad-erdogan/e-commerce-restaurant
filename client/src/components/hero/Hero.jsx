import Slider from "react-slick";
import { useEffect, useState } from "react";
import categorieServices from "../../services/categorie";
import { useNavigate } from "react-router-dom";

const Hero = () => {
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCat = async () => {
            try {
                const datas = await categorieServices.get();
                setCategories(datas.data || []);
            } catch (error) {
                console.error("Error fetching categories:", error);
            }
        };

        fetchCat();
    }, []);

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 800,
        slidesToScroll: 1,
        autoplaySpeed: 4000,
        cssEase: "ease-in-out",
        pauseOnHover: false,
        pauseOnFocus: true,
    };

    return (
        <div className="container mt-10">
            <div className="overflow-hidden rounded-3xl min-h-[550px] sm:min-h-[650px] hero-bg-color flex justify-center items-center">
                <div className="container pb-8 sm:pb-0">
                    <Slider {...settings}>
                        {categories.length > 0 ? (
                            categories.map((data) => (
                                <div key={data._id}>
                                    <div className="grid grid-cols-1 sm:grid-cols-2">
                                        {/* Content section */}
                                        <div className="flex flex-col justify-center gap-4 pl-10 pt-12 p-5 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                                            <h1 className="text-3xl sm:text-6xl lg:text-7xl font-bold text-white text-end" style={{ fontFamily: "'Lucida Handwriting', cursive" }}>{data.name}</h1>
                                            <p className="text-sm sm:text-lg lg:text-xl font-bold text-white break-words max-w-xs sm:max-w-md lg:max-w-lg">{data.description}</p>
                                            <button className="inline-block px-6 py-2 max-w-[200px] font-semibold text-white bg-yellow-500 hover:bg-yellow-600 rounded-xl duration-200" onClick={() => {navigate('/menu')}}>See all products</button>
                                        </div>

                                        {/* Image section */}
                                        <div className="order-1 sm:order-2">
                                            <img src={data.image} alt="" className="w-[300px] h-[300px] sm:h-[500px] sm:w-[500px] sm:scale-105 lg:scale-110 object-contain mx-auto drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)] relative z-40" />
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>Loading...</p>
                        )}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Hero;