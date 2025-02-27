import React from 'react';
import Img1 from "../../assets/books/100Soledad.jpeg"
import Img2 from "../../assets/books/1984.jpeg"
import Img3 from "../../assets/books/DonQuixote.jpeg"
import Img4 from "../../assets/books/PridePrejudice.jpeg"
import Img5 from "../../assets/books/KillMocking.jpeg"

import { FaStar } from "react-icons/fa6";


const ProductsData = [
    {
        id: 1,
        img: Img1,
        title: "One Hundred Years of Solitude",
        rating: 5.0,
        color: "Gabriel García Márquez",
        aosDelay: "0",
    },
    {
        id: 2,
        img: Img2,
        title: "1984",
        rating: 4.5,
        color: "George Orwell",
        aosDelay: "200",
    },
    {
        id: 3,
        img: Img3,
        title: "Don Quixote",
        rating: 4.7,
        color: "Miguel de Cervantes",
        aosDelay: "400",
    },
    {
        id: 4,
        img: Img4,
        title: "Pride and Prejudice",
        rating: 4.4,
        color: "Jane Austen",
        aosDelay: "600",
    },
    {
        id: 5,
        img: Img5,
        title: "To Kill a Mockingbird",
        rating: 4.5,
        color: "Harper Lee",
        aosDelay: "800",
    },
];

const Products = () => {
  return (
    <div className="mt-14 mb-12">
        <div className="container">
            {/* Header section */}
            <div className="text-center mb-10 max-w-[600px] mx-auto">
                <p data-aos="fade-up" className="text-sm text-primary">
                    Top Selling Books
                </p>
                <h1 data-aos="fade-up" className="text-3xl font-bold">
                    Books
                </h1>
                <p data-aos="fade-up" className=" text-xs text-gray-400">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur dignissimos dicta repudiandae, 
                    necessitatibus nemo totam? 
                    Reiciendis asperiores placeat fugit necessitatibus dicta explicabo praesentium et illum.
                </p>
            </div>
            {/* Body section */}
            <div>
                <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 
                place-items-center gap-5">
                    {/* Card section */}
                    {ProductsData.map((data) => (
                        <div 
                            data-aos="fade-up"
                            data-aos-delay={data.aosDelay}
                            key={data.id} 
                            className="space-y-3"
                        >
                            <img 
                            src={data.img} 
                            alt="" 
                            className="h-[220px] w-[150px] object-cover rounded-md"
                            />
                            <div>
                                <h3 className="font-semibold">{data.title}</h3>
                                <p className="text-sm text-gray-600">{data.color}</p>
                                <div className="flex items-center gap-1">
                                    <FaStar className="text-yellow-400"/>
                                    <span>{data.rating}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {/* View all button */}
                <div className="flex justify-center">
                    <button 
                    className="text-center mt-10 cursor-pointer 
                    bg-primary text-white py-1 px-5 rounded-md">
                        View All 
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Products