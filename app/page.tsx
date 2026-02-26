import Mycard from "../components/MyCard";
import SlideMenu from "../components/SideMenu";

export default function home() {
  return (
    // พื้นหลังหลัก (ไม่มีกล่องดำซ้อนแล้ว)
    <main className="h-screen bg-[#1a1a1a] flex items-center justify-center p-10 font-['Libre_Franklin']">
      
      {/* Wrapper คุมระยะห่างทั้งหมด */}
      <div className="w-full max-w-[1400px] flex items-center justify-between gap-4">
        
        {/* 1. ส่วน Card (ซ้ายสุด) - ตัวนี้มีกรอบในตัวอยู่แล้วจาก component */}
        <div className="flex-shrink-0">
          <Mycard />
        </div>

        {/* 2. ส่วนเนื้อหาตรงกลาง (Center Content) */}
        <div className="flex-grow px-16 text-white">
          
          <div className="space-y-6">
            <h3 className="text-[48px] font-light tracking-widest  ">
              Lets Work <span className="text-orange-500 font-medium ">Together !</span>
            </h3>
            
            <h1 className="text-[48px] font-bold">
              Hi From <span className="text-orange-500">Thitiporn</span> ,<br />
              Interactive Designer &<br />
              Fullstack Web Developer
            </h1>

            <p className="text-gray-400 text-xl leading-relaxed  pt-4 text-[24px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto maxime 
              tempora at neque a adipisci nulla voluptatem? Mollitia, officiis, architecto 
              earum voluptates obcaecati.
            </p>
          </div>

          {/* Stats Section */}
          <div className="flex gap-24 mt-16">
            <div className="flex flex-col gap-3">
              <h2 className="text-7xl text-orange-500 font-light tracking-tighter">3 +</h2>
              <p className="text-gray-500 uppercase text-xs tracking-[0.3em] leading-tight font-semibold">
                Years of<br/>Experience
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <h2 className="text-7xl text-orange-500 font-light tracking-tighter">10 +</h2>
              <p className="text-gray-500 uppercase text-xs tracking-[0.3em] leading-tight font-semibold">
                Projects<br/>Completed
              </p>
            </div>
          </div>
        </div>

        {/* 3. ส่วนเมนูด้านขวาสุด (SideMenu) */}
        <div className="flex-shrink-0">
          <SlideMenu />
        </div>
        
      </div>
    </main>
  );
}