import React from 'react'
import Img1 from "../../assets/bookthings/bookmark.png";
import Img2 from "../../assets/bookthings/pageholder.png";
import Img3 from "../../assets/bookthings/booksleeve.png";
import { FaStar } from "react-icons/fa";

const ProductsData = [
    {
        id: 1,
        img: Img1,
        title: "Bookmarks",
        description: 
        `Lorem ipsum dolor, sit amet consectetur 
        adipisicing elit. Dolorem, quisquam!`,
    },
    {
        id: 2,
        img: Img2,
        title: "Page Holder",
        description: 
        `Lorem oloremipsum uisquamdolor, sit amet consectetur 
        adipisicing elit. D, q!`,
    },
    {
        id: 3,
        img: Img3,
        title: "Book sleeve",
        description: 
        `Lorem elit. Dolorem,ipsum dolor, sit pisiciamet consectetur 
        ading  quisquam!`,
    },
];

const TopProducts = ({ handleOrderPopup }) => {
  return (
    <div>
        <div className="container">
            {/* Header section */}
            <div className="text-left mb-24">
                <p data-aos="fade-up" className="text-sm text-primary">
                    Best products to pair with your book
                </p>
                <h1 data-aos="fade-up" className="text-3xl font-bold">Reading Essentials</h1>
                <p data-aos="fade-up" className=" text-xs text-gray-400">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Accusantium, adipisci.
                </p>
            </div>
            {/* Body section */}
            <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
            gap-20 md:gap-5 place-items-center"
            >
                {
                    ProductsData.map((data) => (
                       <div
                            data-aos="zoom in"
                            className="rounded-2xl 
                            bg-white dark:bg-gray-800 hover:bg-black/80 
                            dark:hover:bg-primary hover:text-white relative 
                            shadow-xl duration-300 group max-w-[300px]"
                       >
                        {/* Image section */}
                        <div
                        className="h-[100px]"
                        >
                            <img src={data.img} alt=""
                            className="max-w-[140px] block mx-auto transform 
                            -translate-y-20 group-hover:scale-105 duration-300 
                            drop-shadow-md"
                            />
                        </div>
                        {/* Details section */}
                        <div className="p-4 text-center">
                            {/* Star rating */}
                            <div className="w-full flex items-center justify-center gap-1">
                                <FaStar className="text-yellow-500" />
                                <FaStar className="text-yellow-500" />
                                <FaStar className="text-yellow-500" />
                                <FaStar className="text-yellow-500" />
                            </div>
                            <h1 className="text-xl font-bold">{data.title}</h1>
                            <p className="text-gray-500 group-hover:text-white 
                            duration-300 text-sm line-clamp-2">{data.description}
                            </p>
                            <button
                                className="bg-primary hover:scale-105 duration-300 
                                text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white
                                group-hover:text-primary" onClick={handleOrderPopup}
                                >Order Now
                            </button>
                        </div>
                       </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default TopProducts