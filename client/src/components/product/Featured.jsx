import { useEffect, useState } from "react";
import Card from "./Card";
import { useDispatch } from "react-redux";
import { setProducts } from "../../redux/productSlice";
import categorieServices from "../../services/categorie";
import productServices from "../../services/product";

const Featured = () => {
    const dispatch = useDispatch();
    const [selected, setSelected] = useState('All');
    const [categories, setCategories] = useState([]);
    const [product, setProduct] = useState([]);
    // Filtrelenmiş ürünler
    const filteredProducts = selected === 'All' ? product : product.filter(data => data.cat_id === selected);

    useEffect(() => {
        dispatch(setProducts(product));
    }, []);

    useEffect(() => {
        const fetchCat = async () => {
            try {
                const datas = await categorieServices.get();
                setCategories(datas.data || []);
            } catch (error) {
                console.error("Error fetching categories:", error);
            }
        }

        const fetchPro = async () => {
            try{
                const datas = await productServices.get();
                setProduct(datas.data || []);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        }

        fetchCat()
        fetchPro();
    }, []);

    return (
        <div className="container mt-10">
            {/* Name */}
            <div className="text-3xl font-bold text-white flex w-full justify-center" style={{ fontFamily: "'Lucida Handwriting', cursive" }}>Featured Products</div>

            {/* Options */}
            <div className="flex justify-center w-full gap-6 mt-5">
                <div className={`px-6 py-2 text-sm font-semibold text-white ${selected === "All" ? "bg-yellow-600" : "hover:bg-yellow-500"} rounded-xl duration-200`} onClick={() => { setSelected("All") }}>All</div>
                {categories.length > 0 ? (
                    categories.map((categorie) => (
                        <div key={categorie._id}>
                            <div className={`px-6 py-2 text-sm font-semibold text-white ${selected === categorie.name ? "bg-yellow-600" : "hover:bg-yellow-500"} rounded-xl duration-200`} onClick={() => { setSelected(categorie._id) }}>{categorie.name}</div>
                        </div>
                    ))
                ) : (<p>Loading...</p>)}
            </div>

            {/* Products */}
            <div className="container flex justify-center mt-5">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 cursor-pointer justify-center items-center">
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map((product) => (
                            <div key={`${product._id}`}>
                                <Card data={product} />
                            </div>
                        ))
                    ) : (
                        <p className="text-white text-2xl">No products found for the selected category.</p>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Featured;