import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="pt-20 px-4 md:px-0">
      <hr className="pt-10" />
      <div className="flex flex-col md:flex-row justify-center gap-x-24 md:mx-20">
        {/* Main */}
        <div className="flex-1 flex flex-col items-center md:items-start gap-y-4 mb-10 md:mb-0">
          <div className="flex gap-x-2 items-center">
            <Image src="/logo.PNG" alt="logo" width={50} height={50}/>
            <p className="text-[26px] font-medium">Happy Feet</p>
          </div>

          <p className="text-[16px] font-normal text-center md:text-left">
            Vivamus tristique odio sit amet velit semper,
            <br className="hidden sm:block" /> eu posuere turpis interdum.
            <br className="hidden sm:block" /> Cras egestas purus
          </p>
         
        </div>

        {/* Category */}
        <div className="flex-1 flex flex-col items-center md:items-start gap-y-4 mb-10 md:mb-0">
          <h4 className="text-[14px] font-normal text-[#9A9CAA]">Category</h4>
          {["Casual Sneakers", "Casual shoes", "Running Shoes", "Training shoes", "Lifestyle shoes", "Fashion shoes", "Casual loafers", "Sports shoes"].map(
            (category) => (
              <p
                key={category}
                className="text-[#272343] text-[16px] font-normal hover:text-[#ffb132] hover:underline hover:underline-offset-4 hover:font-medium"
              >
                {category}
              </p>
            )
          )}
        </div>

        {/* Support */}
        <div className="flex-1 flex flex-col items-center md:items-start gap-y-4 mb-10 md:mb-0">
          <h4 className="text-[14px] font-normal text-[#9A9CAA]">Support</h4>
          {["Help & Support", "Terms & Conditions", "Privacy Policy", "Help"].map(
            (support) => (
              <p
                key={support}
                className="text-[#272343] text-[16px] font-normal hover:text-[#ffb132] hover:underline hover:underline-offset-4 hover:font-medium"
              >
                {support}
              </p>
            )
          )}
          <Link href="/contact">
            <p className="text-[#272343] text-[16px] font-normal hover:text-[#ffb132] hover:underline hover:underline-offset-4 hover:font-medium">
              Contact Us
            </p>
          </Link>
          <Link href="/faqs">
            <p className="text-[#272343] text-[16px] font-normal hover:text-[#ffb132] hover:underline hover:underline-offset-4 hover:font-medium">
              FAQs
            </p>
          </Link>
        </div>

        {/* Newsletter */}
        <div className="flex-1 flex flex-col items-center md:items-start">
          <h2 className="text-[14px] font-normal text-[#9A9CAA] mb-4">
            Newsletter
          </h2>
          <form className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-2">
            <input
              type="email"
              placeholder="Your email"
              className="pl-2 w-full md:w-[285px] h-[46px] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffb132]"
            />
            <button
              type="submit"
              className="w-full md:w-[127px] h-[46px] bg-[#ffb132] text-white font-medium rounded-md hover:bg-[#ffb132] transition"
            >
              Subscribe
            </button>
          </form>
          <p className="text-[#272343] text-[15px] font-light text-center md:text-left mt-4 md:mt-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br className="hidden sm:block" />
            Nullam tincidunt erat enim.
          </p>
        </div>
      </div>
      <hr className="mt-20" />

      <div className="flex flex-col md:flex-row justify-around h-[75px] items-center mt-4">
        <div className="text-[#9A9CAA] text-[14px] mb-4 md:mb-0 text-center md:text-left">
          @ 2021 - Blogy - Designed & Developed by{" "}
          <span className="text-[#272343]">Zakirsoft</span>
        </div>

       </div>
    </footer>
  );
}
