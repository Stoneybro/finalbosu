"use client"
import { Nav } from "./components/Nav";
import GlitchEffect from "./components/GlitchEffect";
import Image from "next/image";
import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider = dynamic(() => import("react-slick"), { ssr: false });
export default function Home() {
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
    <div className="flex flex-col">
      <Nav />
      <main className="bg-[#06053897] flex text-[#e61949] bg-bluenoise-layer bg-repeat bg-center bg-[length:10vw_10vw] lg:bg-[length:100px_100px] flex-col gap-16">
        {/* Section 1: Main Showcase */}
        <section className="relative flex justify-center items-center">
          <div className="h-[100vh] flex items-start justify-center w-full pt-8">
            <div className="lg:w-[80%] w-[90%] lg:h-[90%] h-[90%] relative">
              <GlitchEffect imageSrc="/finalbosu2.jpg" />
              <Image
                src={"/finalbosu2mobile.jpg"}
                fill
                alt="rebirth scene"
                className="lg:hidden object-cover grayscale object-right-bottom"
              />
            </div>
          </div>
          <div className="hidden [writing-mode:vertical-lr] text-upright absolute h-[70%] lg:right-4 right-2 justify-between top-4 lg:flex items-center before:content-[''] before:top-0 before:right-[-0.1rem] lg:before:w-[2px] before:w-[1px] before:h-full before:absolute before:bg-[#e61949]">
            <div className="lg:text-2xl text-xl font-bold">警告</div>
            <div className="lg:text-[8px] text-[6px] flex flex-col-reverse font-poppins">
              <div>THIS IS NOT THE OFFICIAL WEBSITE FOR FINALBOSU</div>
              <div>THIS IS A COMMUNITY MEMBER'S SUBMISSION FOR AN EVENT</div>
            </div>
          </div>
        </section>

        {/* Section 2: The Future */}
        <section className="w-[80%] border-grey-100 lg:border-none self-center h-[80vh] xsm:h-[100vh] flex items-center">
          <div className="flex flex-wrap items-center gap-4 lg:gap-0">
            <div className="flex flex-col justify-center items-center lg:flex-row w-full lg:justify-between">
              <div className="text-white flex flex-col justify-center items-center font-poppins pb-6 lg:pb-4">
                <div className="text-3xl">未来</div>
                <div className="text-3xl">(MI RAI)</div>
                <div>THE FUTURE</div>
              </div>
              <div className="font-poppins text-[clamp(1rem,12vw,11rem)] text-white leading-none">
                CRAFTING
              </div>
            </div>
            <div className="flex lg:justify-between w-full items-center justify-center">
              <div className="font-poppins text-[clamp(1rem,12vw,11rem)] text-white leading-none">
                THE FUTURE
              </div>
              <div className="w-5vw lg:w-[15vw] hidden lg:block">
                <video src="/finalbosuvid1.mp4" autoPlay loop muted playsInline />
              </div>
            </div>
            <div className="flex flex-col justify-center items-center lg:flex-row w-full lg:justify-between">
              <div className="font-poppins text-[clamp(1rem,12vw,11rem)] text-white leading-none">
                OF ANIME
              </div>
              <div className="w-5vw max-w-[400px] lg:w-[15vw] lg:hidden mt-6">
                <video src="/finalbosuvid1.mp4" autoPlay loop muted playsInline />
              </div>
              <div className="text-white lg:w-[17vw] font-poppins pt-6 lg:pt-0 lg:text-left text-center">
                Final Bosu is a Web3-based anime IP that promotes decentralized ownership and fan-creator collaboration.
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Ownership */}
        <section className="w-[80%] pb-8 self-center lg:h-[100vh] flex flex-col lg:flex-row lg:justify-between font-poppins">
          <div className="relative w-[30vw] hidden lg:block h-full self-center">
            <Image src={"/finalbosu1.jpg"} fill className="object-cover grayscale" />
          </div>
          <div className="flex flex-col justify-center self-center items-start py-6">
            <div className="text-white flex flex-col justify-center items-center font-poppins pb-6 lg:pb-4">
              <div className="text-4xl">所有</div>
              <div className="text-4xl">(SHOYŪ)</div>
              <div>OWNERSHIP</div>
            </div>
            <div className="text-white text-[3rem] hidden max-w-[20vw] leading-tight">
              FANS AND CREATORS BECOME OWNERS
            </div>
          </div>
          <div className="flex flex-col justify-between items-start pb-6 gap-6 lg:gap-0">
            <div className="relative w-full self-center max-w-[25rem] lg:max-w-none h-[38vh] lg:h-[20rem]">
              <Image src={"/finalbosu555.jpg"} fill className="object-cover grayscale" />
            </div>
            <div className="text-white lg:max-w-[20vw] leading-tight font-poppins text-center lg:text-left">
              Ownership in Final Bosu allows supporters to mint a unique 1/1 character in the anime universe, immortalizing themselves through the Bosu Legacy Collection on the Ethereum blockchain.
            </div>
          </div>
        </section>

        {/* Section 4: Additional Ownership Details */}
        <section className="w-[80%] self-center lg:h-[100vh]  flex flex-col lg:flex-row lg:justify-between font-poppins">
        <div className="flex flex-col justify-between items-start py-6 gap-6 lg:gap-0">
          <div className="text-white flex flex-col justify-center self-center items-center font-poppins pb-6 lg:pb-4">
              <div className="text-4xl">夢</div>
              <div className="text-4xl">(YUME)</div>
              <div>DREAM</div>
            </div>
            <div className="relative w-[80vw] lg:w-[20vw] self-center max-w-[25rem] lg:max-w-none h-[38vh] lg:h-[20rem]">
              <Image src={"/finalbosuabstract.jpeg"} fill className="object-cover grayscale" />
            </div>

          </div>
          <div className="flex flex-col justify-center self-center items-start py-6">
            <div className="text-white text-[clamp(1rem,5vh,2rem)] lg:text-[3rem] pb-6 font-poppins self-center">DARE TO DREAM</div>
            <div className="text-white lg:max-w-[25vw] leading-tight f text-center lg:text-left font-poppins">
            Launching on Abstract blockchain simplifies access for fans, reduces costs, and enhances scalability, making it ideal for Final Bosu’s decentralized, community-driven anime IP.            </div>
          </div>
          <div className="relative w-[25vw] hidden lg:block h-full self-center">
            <Image src={"/finalbosulegacy.jpeg"} fill className="object-cover grayscale" />
          </div>
        </section>

             {/* Section 5: community */}
             <section className="w-[80%] self-center lg:h-[100vh] flex flex-col lg:flex-row lg:justify-between font-poppins">
        <div className="flex flex-col justify-between items-start py-6 gap-6 lg:gap-0">
          <div className="text-white flex flex-col justify-center self-center items-center font-poppins pb-6 lg:pb-4">
              <div className="text-4xl">共同体</div>
              <div className="text-4xl">(KYŌDŌTAI)</div>
              <div>COMMUNITY</div>
            </div>
            <div className="relative w-[80vw] lg:w-[20vw] self-center max-w-[25rem] lg:max-w-none h-[38vh] lg:h-[20rem]">
              <Image src={"/finalbosu9.jpg"} fill className="object-cover grayscale" />
            </div>

          </div>
          <div className="relative w-[25vw] hidden lg:block h-full self-center">
            <Image src={"/finalbosu12.jpg"} fill className="object-cover grayscale " />
          </div>
          <div className="flex flex-col justify-center self-center items-start py-6">

            <div className="text-white lg:max-w-[25vw] leading-tight f text-center lg:text-left font-poppins">
            As a passionate supporter of Web3 innovation and storytelling, I'm dedicated to showcasing Final Bosu's vision to a wider audience. My belief in this project drives me to contribute creatively and meaningfully to its community. Being part of the whitelist would allow me to continue championing this groundbreaking anime IP.           </div>
          </div>
    
        </section>
        <div className="w-[100%] bg-[#e61949] self-center text-[#06053897] ">
            <Slider {...settings}>
              {textItems.map((text, index) => (
                <div key={index} className="font-anton text-center">
                  {text}
                </div>
              ))}
            </Slider>
          </div>
      </main>
    </div>
  );
}
