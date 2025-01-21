"use client";
import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

export const Nav = () => {
  const textItems = [
    'against all odds',
    'Metora',
    'Respawn express',
    'Rebirth',
    'Welcome back',
    'Death',
    'Abstract',
    'Final boss',
    'Web3',
  ];

  const settings = {
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 2000,
    cssEase: "linear",
    arrows:false
  };

  return (
    <div className="w-full text-[#e61949] bg-[#06053897]  px-8 bg-bluenoise-layer flex flex-col justify-center items-center gap-4 pt-4">
      <div className="w-full flex justify-center ">
        <div className="font-anton text-[11rem] leading-none">FINAL-BOSU</div>
      </div>
      <div className="flex justify-between w-[80%]">
        <div className="flex w-full items-center justify-between">
          <div>
            <div className="leading-none font-poppins">OFFICIAL WEBSITE</div>
          </div>
          <div className="w-[70%] bg-[#e61949] text-[#06053897]">
            <Slider {...settings}>
              {textItems.map((text, index) => (
                <div key={index} className="font-anton text-center">
                  {text}
                </div>
              ))}
            </Slider>
          </div>
          <div>
            <div className="font-poppins leading-none">COLLECTION</div>
          </div>
        </div>
      </div>
    </div>
  );
};
