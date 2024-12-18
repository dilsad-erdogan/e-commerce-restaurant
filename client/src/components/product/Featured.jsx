import { useState } from "react";
import Hamburger from "/hamburger.png"
import Pasta from "/pasta.png"
import Salad from "/salad.png"
import Card from "./Card";

const Products = [
    {
        id: 1,
        title: "Hambuger",
        datas: [
            {
                id: 1,
                name: "Köfte Burger",
                desc: "yeyeyyeyeyeyeyeyeyeyyeeyeyeyyeyeyeyeyeyeyeyyee",
                img: Hamburger,
                price: 10
            },
            {
                id: 2,
                name: "Tavuk Burger",
                desc: "yeyeyyeyeyeyeyeyeyeyyeeyeyeyyeyeyeyeyeyeyeyyee",
                img: Hamburger,
                price: 10
            },
            {
                id: 3,
                name: "Vejeteryan Burger",
                desc: "yeyeyyeyeyeyeyeyeyeyyeeyeyeyyeyeyeyeyeyeyeyyee",
                img: Hamburger,
                price: 10
            },
            {
                id: 4,
                name: "Vegan Burger",
                desc: "yeyeyyeyeyeyeyeyeyeyyeeyeyeyyeyeyeyeyeyeyeyyee",
                img: Hamburger,
                price: 10
            },
        ]
    },
    {
        id: 2,
        title: "Pasta",
        datas: [
            {
                id: 1,
                name: "Köfte Pasta",
                desc: "yeyeyyeyeyeyeyeyeyeyyeeyeyeyyeyeyeyeyeyeyeyyee",
                img: Pasta,
                price: 10
            },
            {
                id: 2,
                name: "Tavuk Pasta",
                desc: "yeyeyyeyeyeyeyeyeyeyyeeyeyeyyeyeyeyeyeyeyeyyee",
                img: Pasta,
                price: 10
            },
            {
                id: 3,
                name: "Vejeteryan Pasta",
                desc: "yeyeyyeyeyeyeyeyeyeyyeeyeyeyyeyeyeyeyeyeyeyyee",
                img: Pasta,
                price: 10
            },
            {
                id: 4,
                name: "Vegan Pasta",
                desc: "yeyeyyeyeyeyeyeyeyeyyeeyeyeyyeyeyeyeyeyeyeyyee",
                img: Pasta,
                price: 10
            },
        ]
    },
    {
        id: 3,
        title: "Salad",
        datas: [
            {
                id: 1,
                name: "Köfte Salad",
                desc: "yeyeyyeyeyeyeyeyeyeyyeeyeyeyyeyeyeyeyeyeyeyyee",
                img: Salad,
                price: 10
            },
            {
                id: 2,
                name: "Tavuk Salad",
                desc: "yeyeyyeyeyeyeyeyeyeyyeeyeyeyyeyeyeyeyeyeyeyyee",
                img: Salad,
                price: 10
            },
            {
                id: 3,
                name: "Vejeteryan Salad",
                desc: "yeyeyyeyeyeyeyeyeyeyyeeyeyeyyeyeyeyeyeyeyeyyee",
                img: Salad,
                price: 10
            },
            {
                id: 4,
                name: "Vegan Salad",
                desc: "yeyeyyeyeyeyeyeyeyeyyeeyeyeyyeyeyeyeyeyeyeyyee",
                img: Salad,
                price: 10
            },
        ]
    }
];

const Featured = () => {
    const [selected, setSelected] = useState('All');
    // Filtrelenmiş ürünler
    const filteredProducts = selected === 'All' ? Products : Products.filter(product => product.title === selected);

    return (
        <div className="container mt-10">
            {/* Name */}
            <div className="text-3xl font-bold text-white flex w-full justify-center" style={{ fontFamily: "'Lucida Handwriting', cursive" }}>Featured Products</div>

            {/* Options */}
            <div className="flex justify-center w-full gap-6 mt-5">
                <div className={`px-6 py-2 text-sm font-semibold text-white ${selected === "All" ? "bg-yellow-600" : "hover:bg-yellow-500"} rounded-xl duration-200`} onClick={() => { setSelected("All") }}>All</div>
                {Products.map((product) => (
                    <div key={product.id}>
                        <div className={`px-6 py-2 text-sm font-semibold text-white ${selected === product.title ? "bg-yellow-600" : "hover:bg-yellow-500"} rounded-xl duration-200`} onClick={() => { setSelected(product.title) }}>{product.title}</div>
                    </div>
                ))}
            </div>

            {/* Products */}
            <div className="container flex justify-center mt-5">
                <div className="w-1/2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 cursor-pointer justify-center items-center">
                    {filteredProducts.map((product) => (
                        product.datas.map(data => (
                            <div key={`${product.id}.${data.id}`}>
                                <Card data={data} />
                            </div>
                        ))
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Featured;