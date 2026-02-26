import { useForm } from "react-hook-form";
import Mycard from "../../components/MyCard";
import SlideMenu from "../../components/SideMenu";

export default function ContactMe() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    alert("Form submitted successfully!");
  };

  return (
    <main className="h-screen bg-[#1a1a1a] flex items-center justify-center p-10 font-['Libre_Franklin']">
      <div className="w-full max-w-[1400px] flex flex-col md:flex-row items-center justify-between gap-8">
        
        <div className="flex-shrink-0">
          <Mycard />
        </div>

        <div className="flex-grow px-6 md:px-16 text-white">
          <div className="space-y-6">
            <h3 className="text-[36px] md:text-[48px] font-bold">
              Contact <span className="text-orange-500 font-medium">Me</span>
            </h3>
            <h1 className="text-[20px] md:text-[24px]">
              Let's get in touch!
            </h1>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 mt-6">
            {/* Email + Phone */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-full">
                <input
                  type="email"
                  placeholder="Email"
                  {...register("email", { required: "Email is required" })}
                  className="w-full p-4 border-b border-gray-600 focus:outline-none focus:border-orange-500 transition-colors text-orange-500"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>
              <div className="w-full">
                <input
                  type="tel"
                  placeholder="Phone"
                  {...register("phone", {
                    required: "Phone is required",
                    pattern: { value: /^[0-9]+$/, message: "Only numbers allowed" },
                  })}
                  className="w-full p-4 border-b border-gray-600 focus:outline-none focus:border-orange-500 transition-colors text-orange-500"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                )}
              </div>
            </div>

            {/* Name + Address */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-full">
                <input
                  type="text"
                  placeholder="Name"
                  {...register("name", { required: "Name is required" })}
                  className="w-full p-4 border-b border-gray-600 focus:outline-none focus:border-orange-500 transition-colors text-orange-500"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                )}
              </div>
              <div className="w-full">
                <input
                  type="text"
                  placeholder="Address"
                  {...register("address")}
                  className="w-full p-4 border-b border-gray-600 focus:outline-none focus:border-orange-500 transition-colors text-orange-500"
                />
              </div>
            </div>

            {/* Content */}
            <textarea
              rows={4}
              placeholder="Content"
              {...register("content", { required: "Content is required" })}
              className="w-full bg-transparent py-3 border-b border-gray-600 focus:outline-none focus:border-orange-500 transition-colors resize-none text-orange-500"
            />
            {errors.content && (
              <p className="text-red-500 text-sm mt-1">{errors.content.message}</p>
            )}

            {/* Checkbox */}
            <div className="flex items-center">
              <input type="checkbox" id="subscribe" {...register("subscribe")} className="mr-2" />
              <label htmlFor="subscribe" className="text-gray-400">
                I would like to receive the newsletter.
              </label>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full max-w-md px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>

        <div className="flex-shrink-0">
          <SlideMenu />
        </div>
      </div>
    </main>
  );
}