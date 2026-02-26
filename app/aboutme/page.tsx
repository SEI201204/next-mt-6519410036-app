import Mycard from "../../components/MyCard";
import SlideMenu from "../../components/SideMenu";

export default function aboutme() {
  return (

    <main className="h-screen bg-[#1a1a1a] flex items-center justify-center p-10 font-['Libre_Franklin']">
      

      <div className="w-full max-w-[1400px] flex items-center justify-between gap-4">

        <div className="flex-shrink-0">
          <Mycard />
        </div>

    
        <div className="flex-grow px-16 text-white">
          
          <div className="space-y-6">
            <h3 className="text-[40px] font-light tracking-widest ">
              About <span className="text-orange-500 font-medium ">Me</span>
            </h3>
            
            <h1 className="text-[48px] font-bold">
              I find fullfillment in blending 
              visual design with the power of 
              coding to create meaningful 
              experiences.
            </h1>

            <p className="text-gray-400 text-[24px] leading-relaxed max-w-xl pt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus sequi earum tempora dolor ut nemo dicta? Dolorum ab nemo quidem voluptates, totam repellendus tenetur dolorem? Fugiat veritatis vitae impedit! Dignissimos voluptate nostrum, inventore sed officia adipisci debitis quod ipsum tempore similique unde sit eos assumenda saepe, mollitia doloremque distinctio dicta.
            </p>
          </div>


        </div>

        <div className="flex-shrink-0">
          <SlideMenu />
        </div>
        
      </div>
    </main>
  );
}