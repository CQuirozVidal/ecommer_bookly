import React from 'react'
import Img1 from "../../assets/shirt/shirt.png";
import Img2 from "../../assets/shirt/shirt2.png";
import Img3 from "../../assets/shirt/shirt3.png";
import { FaStar } from "react-icons/fa";

const ProductsData = [
    {
        id: 1,
        img: Img1,
        title: "Casual Wear",
        description: 
        `Lorem ipsum dolor, sit amet consectetur 
        adipisicing elit. Dolorem, quisquam!`,
    },
    {
        id: 2,
        img: Img2,
        title: "Printed shirt",
        description: 
        `Lorem oloremipsum uisquamdolor, sit amet consectetur 
        adipisicing elit. D, q!`,
    },
    {
        id: 3,
        img: Img3,
        title: "Women shirt",
        description: 
        `Lorem elit. Dolorem,ipsum dolor, sit pisiciamet consectetur 
        ading  quisquam!`,
    },
];

const TopProducts = () => {
  return (
    <div>
        <div className="container">
            {/* Header section */}
            <div className="text-left mb-10">
                <p data-aos="fade-up" className="text-sm text-primary">
                    Top Rated Product for you
                </p>
                <h1 data-aos="fade-up" className="text-3xl font-bold"> Best Products</h1>
                <p data-aos="fade-up" className=" text-xs text-gray-400">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Accusantium, adipisci.
                </p>
            </div>
            {/* Body section */}
            <div
            className=""
            >
                {
                    ProductsData.map((data) => (
                       <div>
                        {/* Image section */}
                        <div>
                            <img src={data.img} alt="" 
                            />
                        </div>
                        {/* Details section */}

                       </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default TopProducts