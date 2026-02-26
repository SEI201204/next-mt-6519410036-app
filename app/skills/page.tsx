import Mycard from "../../components/MyCard";
import SlideMenu from "../../components/SideMenu";
import Image from "next/image";
import ReactLogo from "../../assets/images/React_(web_framework)-Logo 2.png";
import FigmaLogo from "../../assets/images/gg_figma.png";
import HTML_CSSLogo from "../../assets/images/nonicons_css-16.png";
import NextLogo from "../../assets/images/nextjs-original.png";
import JavaScripLogo from "../../assets/images/uil_java-script.png";
import GitHubLogo from "../../assets/images/github-original.png";

export default function Skills() {
  const skillList = [
    { name: "React", src: ReactLogo, percent: "60%", color: "border-orange-500" },
    { name: "Figma", src: FigmaLogo, percent: "85%", color: "border-gray-600" },
    { name: "HTML/CSS", src: HTML_CSSLogo, percent: "80%", color: "border-gray-600" },
    { name: "Next.js", src: NextLogo, percent: "80%", color: "border-gray-600" },
    { name: "Java Script", src: JavaScripLogo, percent: "60%", color: "border-gray-600" },
    { name: "GitHub", src: GitHubLogo, percent: "90%", color: "border-gray-600" },
  ];

  return (
    <main className="h-screen bg-[#1a1a1a] flex items-center justify-center p-10 font-['Libre_Franklin']">
      <div className="w-full max-w-[1400px] flex items-center justify-between gap-4">
        
   
        <div className="flex-shrink-0">
          <Mycard />
        </div>

     
        <div className="flex-grow px-16 text-white">
          <div className="space-y-12">
            <h3 className="text-[36px] font-light ">
              My <span className="text-orange-500 font-medium">Skills</span>
            </h3>
     
            <div className="grid grid-cols-4 gap-y-12 gap-x-8">
              {skillList.map((skill, index) => (
                <div key={index} className="flex flex-col items-center gap-4">

                  <div className={`flex flex-col items-center justify-center border-2 ${skill.color} rounded-[80px] w-[140px] h-[200px] p-4 space-y-4 overflow-hidden`}>
                    <div className="relative w-16 h-16 flex items-center justify-center">
                       <Image src={skill.src} alt={skill.name} className="object-contain max-w-full max-h-full" />
                    </div>
                    <h1 className="text-xl text-orange-500 font-normal">{skill.percent}</h1>
                  </div>

        
                  <p className="text-lg text-gray-300 font-light">{skill.name}</p>
                  
                </div>
              ))}
            </div>
          </div>
        </div>


        <div className="flex-shrink-0">
          <SlideMenu />
        </div>
        
      </div>
    </main>
  );
}