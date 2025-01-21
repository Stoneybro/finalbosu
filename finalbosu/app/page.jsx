import { Nav } from "./components/Nav";
import GlitchEffect from "./components/GlitchEffect";


export default function Home() {
  return (
    <div className="flex flex-col ">
      <Nav />
      <main className="bg-[#06053897] flex text-[#e61949]   flex-col">
        <section className=" bg-bluenoise-layer relative flex  justify-center items-center">
          <div className="h-[100vh] flex items-start justify-center w-full pt-8">
          <div className="w-[80%] h-[90%] relative ">
            <GlitchEffect imageSrc="/finalbosu2.jpg" />
            
           </div>
          </div>
          <div className="[writing-mode:vertical-lr] text-upright absolute h-[70%] right-4 justify-between top-4 flex items-center before:content-[''] before:top-0 before:right-[-0.5rem] before:w-[2px] before:h-full before:absolute before:bg-[#e61949]"><div className="text-2xl font-bold">警告</div><div className=" text-[8px] flex flex-col-reverse font-poppins "><div className="">THIS IS NOT THE OFFICIAL WEBSITE FOR FINALBOSU</div>
          <div className="">THIS IS A COMMUNITY MEMBER'S SUBMISSION FOR AN EVENT</div> </div></div>
        </section>

      </main>
    </div>
  );
}



