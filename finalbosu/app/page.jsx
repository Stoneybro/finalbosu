import { Nav } from "./components/Nav";
import GlitchEffect from "./components/GlitchEffect";
import GlitchEffectMobile from "./components/GlitchEffectMobile";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col ">
      <Nav />
      <main className="bg-[#06053897] flex text-[#e61949]   flex-col">
        <section className=" bg-bluenoise-layer bg-repeat bg-center bg-[length:10vw_10vw] relative flex  justify-center items-center">
          <div className="h-[100vh] flex items-start justify-center w-full pt-8">
          <div className="lg:w-[80%] w-[90%] lg:h-[90%] h-[90%] relative ">
            <GlitchEffect imageSrc="/finalbosu2.jpg" />
            <Image src={'/finalbosu2.jpg'} fill alt="rebirth scene" className="lg:hidden object-cover grayscale object-right-bottom" />
           </div>
          </div>
          <div className="hidden [writing-mode:vertical-lr] text-upright absolute h-[70%] lg:right-4 right-2 justify-between top-4 lg:flex items-center before:content-[''] before:top-0 before:right-[-0.1rem] lg:before:w-[2px] before:w-[1px] before:h-full before:absolute before:bg-[#e61949]"><div className="lg:text-2xl text-xl font-bold">警告</div><div className=" lg:text-[8px] text-[6px] flex flex-col-reverse font-poppins "><div className="">THIS IS NOT THE OFFICIAL WEBSITE FOR FINALBOSU</div>
          <div className="">THIS IS A COMMUNITY MEMBER'S SUBMISSION FOR AN EVENT</div> </div></div>
        </section>

      </main>
    </div>
  );
}



