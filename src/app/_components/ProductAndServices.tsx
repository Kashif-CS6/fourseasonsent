import Image from "next/image";
import React from "react";
import { products } from "../../../public/data/data";
const ProductsAndServices = () => {
  return (
    <div className="bg-white text-center my-10  px-4 xl:px-0">
      <h1 className="text-[40px] md:text-[45px]  font-[700] mb-4">
        Products & Services
      </h1>
      <p className="text-[#403F3F] xl:w-[1007px] text-[20px] font-[400] mx-auto">
        Start your journey with fresh ideas. Explore vibrant options, make bold
        choices, and craft experiences that matter. <br />
        From clean designs to smart solutions—everything begins with a single
        click.
      </p>

      <div className="mt-10 flex items-center justify-center flex-wrap gap-6 mx-auto">
        {/* Vegetables */}
        {products.map((item, index) => (
          <div
            key={item.id}
            className="border border-green-200 rounded-2xl h-[538px] w-[400px] shadow-sm hover:shadow-md transition duration-300 flex flex-col justify-center gap-3"
          >
            <Image
              src={item.image} // Change this to your own vegetable image URL
              alt={item.heading}
              width={395}
              height={230}
              className="mx-auto mb-4 w-[350px]  h-[230px]"
            />
            <h2 className="text-2xl font-bold">{item.heading}</h2>
            <p className="text-gray-600 mt-2">{item.tagline}</p>
            <button className="mt-4 w-fit mx-auto bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded">
              Contact or inquiry form
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsAndServices;
