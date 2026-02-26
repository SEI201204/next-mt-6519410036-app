import MyCard from "../../components/MyCard";
import SideMenu from "../../components/SideMenu";

export default function ContactMe() {
  return (
    <main className="min-h-screen bg-[#1a1a1a] flex items-center justify-center p-10 font-['Libre_Franklin']">
      <div className="w-full max-w-[1400px] flex items-center justify-between gap-4">
        
        <div className="flex-shrink-0">
          <MyCard />
        </div>

        <div className="flex-grow px-16 text-white">
          <div className="space-y-6">
            <h3 className="text-[48px] font-bold">
              Contact <span className="text-orange-500 font-medium">Me</span>
            </h3>
            <h1 className="text-[24px]">
              Let’s get in touch!<br />
            </h1>
          </div>

          <div>
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="Email"
                className="w-full max-w-md p-4 border-b border-gray-600 focus:border-orange-500 transition-colors focus:ring-orange-500 text-orange-500"
              />
              <input
                type="text"
                placeholder="Phone"
                className="w-full max-w-md p-4 border-b border-gray-600 focus:border-orange-500 transition-colors text-orange-500"
              />
            </div>

            <div className="flex gap-4 mt-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full max-w-md p-4 border-b border-gray-600 focus:border-orange-500 transition-colors text-orange-500"
              />
              <input
                type="text"
                placeholder="Address"
                className="w-full max-w-md p-4 border-b border-gray-600 focus:border-orange-500 transition-colors text-orange-500"
              />
            </div>

            <div className="flex flex-col w-full pt-4">
              <textarea
                rows={4}
                className="bg-transparent py-3 border-b border-gray-600 focus:outline-none focus:border-orange-500 transition-colors resize-none text-orange-500"
                placeholder="Content"
              ></textarea>
            </div>

            <div className="flex items-center mt-4 p-4">
              <input
                type="checkbox"
                id="subscribe"
                className="mr-2 border rounded-2xl"
              />
              <label htmlFor="subscribe" className="text-gray-400">
                I would like to receive newsletter.
              </label>
            </div>

            <button className="mt-4 px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition duration-300 w-[500px]">
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