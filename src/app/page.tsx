'use client'
import Link from "next/link";
import Header from "./components/header";
import Footer from "./components/footer";

import { useState, useEffect } from "react";
import Products from "./components/products";
import Image from "next/image";
import { Suspense } from "react";

export default function Home() {
  
  return (
    <main>
      <Header />
    
      {/* Hero Content */}
      <div className="flex justify-center items-center ">
        <Image
          className="relative w-full h-auto max-w-[1321px] md:max-h-[850px] object-cover z-0"
          src="/shoes 5.PNG"
          alt="Hero Image"
          width={500} height={300}
        />
       
        <p className="absolute font-light text-sm tracking-[1.7px] -mt-56 text-white ">
          WELCOME TO HAPPY FEET
        </p>
        <h1 className="px-4 absolute font-bold md:text-6xl text-center text-white  md:p-5 text-2xl ">
          Best And <br /> Most Stylish Shoes For <br /> Everyday Wear
        </h1>
       
      
      </div>

      

       {/* Featured*/}
      <Suspense>
      
      </Suspense>

      {/* Top Categories */}
      <h2 className="text-[32px] font-semibold mt-10 md:mt-52 text-center">
        Top Categories
      </h2>
      <div className="flex justify-center items-center  md:gap-x-5 mt-10 ">
        {/* Card 1 */}
        <div className="card group  relative">
          <div className="img relative ">
            <Image width={200} height={200}
              className="md:w-[424px] md:h-[424px] w-[400px] h-[170px] px-3 "
              src="/shoes 1.PNG"
              alt=""
            />
          </div>
        </div>
        {/* Card 2 */}
        <div className="card group  relative">
          <div className="img relative ">
            <Image width={200} height={200}
              className="md:w-[424px] md:h-[424px] w-[400px] h-[170px] px-3 "
              src="/shoes 2.PNG"
              alt=""
            />
          </div>
        </div>
        {/* Card 3*/}
        <div className="card group  relative">
          <div className="img relative ">
            <Image width={200} height={200}
              className="md:w-[424px] md:h-[424px] w-[400px] h-[170px] px-3"
              src="/shoes 3.PNG"
              alt=""
            />
          </div>
        </div>
      </div>



      {/* Our Products */}
      <Suspense>
      <Products />
      </Suspense>
     
      

      <Footer />
    </main>
  );
}
