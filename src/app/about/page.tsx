import Header from "../components/header";
import Footer from "../components/footer";
import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <main>
      <Header />
      <div className="flex flex-col md:flex-row justify-center md:gap-x-8 mt-20 px-4 md:px-0">
        <div>
         
          <div className="">
            <h1 className=" text-[#ffb132] text-4xl md:text-7xl font-bold"
            data-id="about-heading">
              About Us -Happy Feet
            </h1>
            <p className="text-[#ffb132] w-[400px] md:w-[600px] text-lg mt-3 md:mt-10">
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quos vero, mollitia, omnis enim necessitatibus vel dolor sint quasi consectetur architecto tempora natus aliquid dolore placeat itaque esse molestias aspernatur!
            </p>
            <Link href="/products">
            <button className="text-white hover:shadow-2xl bg-[#ffb132] p-4 px-8 rounded-md mt-3 md:mt-5">
              View Collection
            </button>
            </Link>
          </div>
        </div>
        <div>
          <Image
            className="w-full md:w-[619px] h-auto md:h-[619px] rounded-lg mt-5 md:mt-0"
            src="/shoes 10.PNG"
            alt="chair"
            width={200} height={200}
          />
        </div>
      </div>

     

      <h3 className="text-[32px] font-semibold ml-4 md:ml-[180px] mt-44">
        Our Popular Products
      </h3>
      <div className="flex flex-col md:flex-row justify-center gap-y-10 md:gap-x-10 mt-10 mb-10 px-4 md:px-0">
        <Image width={200} height={200}
          className="w-full md:w-[305px] h-auto md:h-[305px]"
          src="/shoes 4.PNG"
          alt=""
        />
        <Image width={200} height={200}
          className="w-full md:w-[305px] h-auto md:h-[305px]"
          src="/shoes 9.PNG"
          alt=""
        />
        <Image width={200} height={200}
          className="w-full md:w-[305px] h-auto md:h-[305px]"
          src="/shoes 11.PNG"
          alt=""
        />
      </div>
      <Footer />
    </main>
  );
}
