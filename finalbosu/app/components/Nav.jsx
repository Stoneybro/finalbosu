"use client";
import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

export const Nav = () => {
  const textItems = [
    'against.all.odds',
    'Metora',
    'Respawn.express',
    'Rebirth',
    'Welcome.back',
    'Death',
    'Abstract',
    'Final boss',
    'Web3',
  ];

  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 2000,
    cssEase: "linear",
    arrows: false,
    slidesToScroll: 1, // Ensure smooth scroll
    slidesToShow: 7, // Default for large screens
    responsive: [
      {
        breakpoint: 1024, // Laptop size and below
        settings: {
          slidesToShow: 7,
        },
      },
      {
        breakpoint: 768, // Tablet size
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 480, // Mobile size
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <div className="w-full text-[#e61949] bg-[#06053897] px-2  lg:px-8 bg-bluenoise-layer bg-repeat bg-center bg-[length:10vw_10vw] lg:bg-[length:100px_100px] flex flex-col justify-center items-center gap-2 lg:gap-4 pt-2 lg:pt-4">
      <div className="w-full flex justify-center ">
        <div className="font-anton text-[clamp(7.5rem,60vw,10.5rem)] xsm:text-[7rem] lg:text-[11rem]   leading-none xsm:flex "> <div className="">FINAL</div>
        <div className="hidden xsm:block">-</div>
        <div className="">BOSU</div></div>
      </div>
      <div className="flex justify-between px-2 lg:px-0 w-full xsm:w-[95%] lg:w-[80%]">
        <div className="flex w-full items-center justify-between text-sm">
          <div>
            <div className="leading-none font-poppins hidden lg:block">      <a href="https://finalbosu.com/" target="_blank" rel="noopener noreferrer">
        OFFICIAL WEBSITE
      </a> </div>
          </div>
          <div className="w-[100%] lg:w-[70%] bg-[#e61949] text-[#06053897] ">
            <Slider {...settings}>
              {textItems.map((text, index) => (
                <div key={index} className="font-anton text-center">
                  {text}
                </div>
              ))}
            </Slider>
          </div>
          <div>
          <div className="leading-none font-poppins hidden lg:block">      <a href="https://opensea.io/collection/finalbosu" target="_blank" rel="noopener noreferrer">
        COLLECTION
      </a> </div>
          </div>
        </div>
      </div>
    </div>
  );
};
