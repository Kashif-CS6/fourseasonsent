"use client";
import Image from "next/image";
import { useState } from "react";
import Navbar from "./_components/common/Navbar";
import FullTemplate from "./_components/Template/FullTemplate";
import HalfTemplate from "./_components/Template/HalfTemplate";
import Footer from "./_components/common/Footer";
import ContactForm from "./_components/common/ContactForm";
import Aboutus from "./_components/Aboutus";
import LeadershipTeam from "./_components/LeadershipTeam";
import ProductsAndServices from "./_components/ProductAndServices";
import WhyChooseUs from "./_components/WhyChoseUs";
import Hero from "./_components/Hero";
import Marquee from "react-fast-marquee";
import { clientdata } from "../../public/data/data";
import { FormspreeProvider } from "@formspree/react";

export default function Home() {
  const [open, setOpen] = useState(false);

  const handleModal = () => {
    setOpen((prev) => !prev);
  };
  return (
    <div className="w-full">
      <div className="bg-[#E1FEE2] sticky top-0">
        <HalfTemplate>
          <Navbar openModal={handleModal} open={open} />
        </HalfTemplate>
      </div>
      {/* hero section */}
      <div className="bg-[#d2f4da] md:rounded-bl-[200px]">
        <HalfTemplate>
          <Hero openModal={handleModal} />
        </HalfTemplate>
      </div>
      {/* Product and Services */}
      <div className="py-15" id="product">
        <HalfTemplate>
          <ProductsAndServices />
        </HalfTemplate>
      </div>
      {/* why chose us */}
      <div
        className="w-full h-full"
        // style={{
        //   backgroundImage: `url("/chose.svg")`,
        //   backgroundSize: "cover", // or "contain", depending on your desired behavior
        //   backgroundRepeat: "no-repeat",
        //   backgroundPosition: "center",
        // }}
      >
        <HalfTemplate>
          <WhyChooseUs />
        </HalfTemplate>
      </div>

      {/* our clients */}
      <div className="mb-20 px-4 xl:px-0">
        <div className="xl:w-[1007px]  flex justify-center flex-col text-center items-center mx-auto py-10">
          <h1 className="text-[40px] md:text-[45px] font-[700]">
            Trusted by Top Businesses for 25+ Years
          </h1>
          <p className="text-[20px] text-justify md:text-center font-[400] pt-2">
            For over 25 years, Four Seasons Enterprises has proudly supplied
            premium fresh produce, pulses, and essentials to leading hotels,
            diplomatic missions, and mess facilities across Pakistan — with a
            focus on reliability, discretion, and quality.
          </p>
        </div>
        <div className="w-full">
          <Marquee>
            <div className="flex items-center gap-5 z-0">
              {clientdata.map((item, index) => (
                <Image
                  src={item.image}
                  alt={item.alt}
                  key={index}
                  width={110}
                  height={110}
                  className="md:w-[210px] md:h-[120px] object-center"
                />
              ))}
            </div>
          </Marquee>
        </div>
      </div>

      {/* About us */}
      <div className="py-15" id="about">
        {/* @ts-ignore */}
        <FullTemplate color="#E1FEE2">
          <HalfTemplate>
            <Aboutus />
          </HalfTemplate>
        </FullTemplate>
      </div>
      <HalfTemplate>
        <LeadershipTeam />
      </HalfTemplate>

      {/* Contact Form */}

      <FullTemplate color="#EFFFF0" id="normal">
        <FormspreeProvider>
          <HalfTemplate>
            <ContactForm />
          </HalfTemplate>
        </FormspreeProvider>
      </FullTemplate>
      <div className="bg-[#F8FAFC]">
        <HalfTemplate>
          <Footer />
        </HalfTemplate>
      </div>
    </div>
  );
}
