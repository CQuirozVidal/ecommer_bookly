import React from 'react'
import { HiOutlineChatBubbleLeftEllipsis } from 'react-icons/hi2'
import Slider from 'react-slick'

const testimonialData = [
  {
    id: 1,
    name: "Victor",
    text: `Lorem ipsum, dolor sit amet 
    consectetur adipisicing elit. Quam, itaque.`,
    img: "http://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Satya Nadella",
    text: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
    Repellendus beatae in alias? Dignissimos, atque corrupti! 
    Quam iusto reiciendis corrupti eum?`,
    img: "http://picsum.photos/102/102",
  },
  {id: 3,
    name: "Virat",
    text: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
    Repellendus beatae in?`,
    img: "http://picsum.photos/104/104",
  },
  {id: 5,
    name: "Sachin",
    text: `Lorem ipellendupsum, eatae indolor sit amet consectetur ing elit. 
    Res badipisic`,
    img: "http://picsum.photos/103/103",
  },
]

const Testimonials = () => {

  var settings = {
    dots: true,
    arros: false, 
    infinite: true,
    speed: 500, 
    // slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 2000,
    cssEase: "Linear",
    pauseOnHover: true,
    pauseOnFocus: true,
      responsive: [{
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1, 
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1, 
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 mb-10">
      <div className="container">
        {/* header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
            <p data-aos="fade-up" className="text-sm text-primary">
                What our costumers are saying
            </p>
            <h1 data-aos="fade-up" className="text-3xl font-bold">
                Testimonial
            </h1>
            <p data-aos="fade-up" className=" text-xs text-gray-400">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Accusantium, adipisci.
            </p>
        </div>

        {/* Testimonial cards */}
        <div>
        <Slider {...settings}>
          {
            testimonialData.map((data) => (
              <div>

              </div>
            ))
          }
        </Slider>
        </div>
      </div>
    </div>
  )
}

export default Testimonials