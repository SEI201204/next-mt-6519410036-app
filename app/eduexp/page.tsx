import MyCard from "../../components/MyCard";
import SideMenu from "../../components/SideMenu";

export default function eduexp() {
  return (
   
    <main className="h-screen bg-[#1a1a1a] flex items-center justify-center p-10 font-['Libre_Franklin']">
      
     
      <div className="w-full max-w-[1400px] flex items-center justify-between gap-4">
        
  
        <div className="flex-shrink-0">
          <MyCard />
        </div>

        <div className="flex-grow px-16 text-white">
          
          <div className="space-y-6">
            <h3 className="text-[48px] font-bold tracking-widest ">
              Education & <span className="text-orange-500 font-medium ">Experience</span>
            </h3>
            
            <h1 className="text-[24px]">
              <span className="text-orange-500">2022 - Present</span><br />
              <span className="font-bold">UI/UX Designer</span><br />
              <span className="text-gray-500">Freelance</span><br />
              <span className="font-bold">Fullstack Web Developer</span><br /><br />
              
              <span className="text-orange-500">2022 - 2025</span><br />
              <span className="font-bold">Bachelor Degree in Technology Computer Engineer</span><br />
              <span className="text-gray-500">Southeast Asia University</span><br /><br />
              
              <span className="text-orange-500">2016 - 2021</span><br />
              <span className="font-bold">High school</span><br />
              <span className="text-gray-500">Satriwatabsornsawan School</span>
            </h1>
          </div>
        </div>


        <div className="flex-shrink-0">
          <SideMenu />
        </div>
        
      </div>
    </main>
  );
}