import Mycard from "../../components/MyCard";
import SlideMenu from "../../components/SideMenu";
import Image  from "next/image"; 
import ProjectImage from "../../assets/images/image 1.png";

export default function projects() {
  return (
    <main className="h-screen bg-[#1a1a1a] flex items-center justify-center p-10 font-['Libre_Franklin']">
      <div className="w-full max-w-[1400px] flex items-center justify-between gap-4">
        

        <div className="flex-shrink-0">
          <Mycard />
        </div>

        <div className="flex-grow px-16 text-white">
          
          <div className="space-y-6">
            <h3 className="text-[48px] font-bold ">
             Featured <span className="text-orange-500 font-medium ">Projects</span>
            </h3>
            
            <h1 className="text-[24px] font-bold ">
              Manage Task App - fullstack web development<br />
              <span className="text-gray-500 text-[20px]">Here&apos;s my latest project built with Next.js and Laravel,using TailwindCSS on the front-end. Watch the video to see the responsive landing page in action!</span>
            </h1>
            <Image src={ProjectImage} alt="Project Image" className="w-full h-auto rounded-lg border border-gray-700" />
          </div>

        </div>

        <div className="flex-shrink-0">
          <SlideMenu />
        </div>
        
      </div>
    </main>
  );
}