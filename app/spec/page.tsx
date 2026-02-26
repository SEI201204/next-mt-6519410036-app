import Mycard from "../../components/MyCard";
import SlideMenu from "../../components/SideMenu";
import Image from "next/image";
import LogoDev from "../../assets/images/mdi_code.png"
import LogoDesign from "../../assets/images/Vector3.png"
import LogoGraphic from "../../assets/images/iconoir_design-nib.png"

export default function spec() {
  return (
 
    <main className="h-screen bg-[#1a1a1a] flex items-center justify-center p-10 font-['Libre_Franklin']">
      
   
      <div className="w-full max-w-[1400px] flex items-center justify-between gap-4">
        

        <div className="flex-shrink-0">
          <Mycard />
        </div>

        <div className="flex-grow px-16 text-white">
          
          <div className="space-y-6">
            <h3 className="text-[48px] font-bold tracking-widest ">
              My <span className="text-orange-500 font-medium ">Specializations</span>
            </h3>
            

            <h1 className="relative text-[20px] font-extrabold border border-orange-500 rounded-2xl p-6">
              Front end-developer <span className="absolute right-6 top-6"><Image src={LogoDev} alt="Developer Logo" width={30} height={30} className="inline-block " /></span><br />
              <span className="text-gray-500">Front-end is where i weave code and creativiti to shape captivating and user-centric digital experiences.</span>
            </h1>

             <h1 className="relative text-[20px] font-extrabold border border-orange-500 rounded-2xl p-6">
              UI/UX Designer <span className="absolute right-6 top-6"><Image src={LogoDesign} alt="Designer Logo" width={30} height={30} className="inline-block " /></span><br />
              <span className="text-gray-500">UI/UX design is my palette for blending art and user psychology into seamless and delightful interactions.</span>
            </h1>   
            
            <h1 className="relative text-[20px] font-extrabold border border-orange-500 rounded-2xl p-6">
              Graphic desingner <span className="absolute right-6 top-6"><Image src={LogoGraphic} alt="Graphic Logo" width={30} height={30} className="inline-block " /></span><br />
              <span className="text-gray-500">As a graphic designer,I transform ideas into visually striking and impactful designs.</span>
            </h1>

          </div>

        </div>

     
        <div className="flex-shrink-0">
          <SlideMenu />
        </div>
        
      </div>
    </main>
  );
}