import { BsBasket3Fill } from "react-icons/bs";

const Card = ({ data }) => {
    return (
      <div className="bg-gray-300 rounded-2xl shadow-lg overflow-hidden w-64">
        {/* Ürün Görseli */}
        <div className="flex justify-center my-4">
          <img src={data.img} alt={data.name} className="w-24 h-24 object-cover" />
        </div>
  
        {/* Ürün İçeriği */}
        <div className="bg-gray-900 rounded-s-2xl text-white p-4 rounded-b-2xl">
          <h2 className="text-lg font-semibold mb-2">{data.name}</h2>
          <p className="text-sm mb-4 break-words">{data.desc}</p>
  
          {/* Fiyat ve Sepet */}
          <div className="flex justify-between items-center">
            <span className="text-lg font-bold">{data.price},00₺</span>
            <button className="bg-yellow-500 p-2 rounded-full hover:bg-yellow-600 text-white transition duration-200">
                <BsBasket3Fill />
            </button>
          </div>
        </div>
      </div>
    );
};
  
export default Card;  