import MyCard from "../../components/MyCard";
import SideMenu from "../../components/SideMenu";

export default function contactme() {
  return (
   
    <main className="h-screen bg-[#1a1a1a] flex items-center justify-center p-10 font-['Libre_Franklin']">
      
    
      <div className="w-full max-w-[1400px] flex items-center justify-between gap-4">
        
 
        <div className="flex-shrink-0">
          <MyCard />
        </div>

        <div className="flex-grow px-16 text-white">
          
          <div className="space-y-6">
            <h3 className="text-[48px] font-bold ">
              Contact <span className="text-orange-500 font-medium ">Me</span>
            </h3>
            
            <h1 className="text-[24px] ">
              Let&apos;s get in touch!<br />
            </h1>
          </div >
          <div className="mt-8 max-w-xl mx-auto space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label className="text-orange-500 mb-2">Email</label>
                <input
                  type="text"
                  className="bg-transparent border-b border-gray-600 focus:border-orange-500 text-white py-2 outline-none"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-orange-500 mb-2">Phone</label>
                <input
                  type="text"
                  className="bg-transparent border-b border-gray-600 focus:border-orange-500 text-white py-2 outline-none"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-orange-500 mb-2">Name</label>
                <input
                  type="text"
                  className="bg-transparent border-b border-gray-600 focus:border-orange-500 text-white py-2 outline-none"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-orange-500 mb-2">Address</label>
                <input
                  type="text"
                  className="bg-transparent border-b border-gray-600 focus:border-orange-500 text-white py-2 outline-none"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-orange-500 mb-2">Content</label>
                <textarea
                  rows={4}
                  className="bg-transparent border-b border-gray-600 focus:border-orange-500 text-white py-2 resize-none outline-none"
                ></textarea>
              </div>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="subscribe"
                className="mr-2 border rounded-2xl"
              />
              <label htmlFor="subscribe" className="text-gray-400">
                I would like to receive the newsletter.
              </label>
            </div>

            <button className="mt-4 px-8 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition w-fit">
              Submit
            </button>
          </div>
          
        </div>


        <div className="flex-shrink-0">
          <SideMenu />
        </div>
        </div>
        </main>
        
  );
}