import Image from "next/image";
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

export default function Home() {
  return (
    <div>
      {/* hero section */}
      <div className="bg-[#d2f4da] md:rounded-bl-[200px]">
        <HalfTemplate>
          <Hero />
        </HalfTemplate>
      </div>
      {/* Product and Services */}
      <HalfTemplate>
        <ProductsAndServices />
      </HalfTemplate>
      {/* why chose us */}
      <div
        className="w-full h-full bg-[#d2f4da]"
        style={{
          backgroundImage: `url("/chose.svg")`,
          backgroundSize: "cover", // or "contain", depending on your desired behavior
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <HalfTemplate>
          <WhyChooseUs />
        </HalfTemplate>
      </div>

      {/* our clients */}
      <div className="mb-20 px-4 xl:px-0">
        <div className="xl:w-[1007px]  flex justify-center flex-col text-center items-center mx-auto py-10">
          <h1 className="text-[40px] md:text-[45px] font-[700]">Our Clients</h1>
          <p className="text-[20px] font-[400] pt-2">
            Start your journey with fresh ideas. Explore vibrant options, make
            bold choices, and craft experiences that matter. From clean designs
            to smart solutions—everything begins with a single click.
          </p>
        </div>
        <div className="w-full">
          <Image
            src={"/clients.svg"}
            width={1351}
            height={50}
            className="w-full flex-1 h-[100px]"
            alt="clients"
          />
        </div>
      </div>

      {/* About us */}
      <FullTemplate color="#E1FEE2" id="about">
        <HalfTemplate>
          <Aboutus />
        </HalfTemplate>
      </FullTemplate>
      <HalfTemplate>
        <LeadershipTeam />
      </HalfTemplate>

      {/* Contact Form */}
      <div className="flex flex-col gap-4 py-10 px-4 xl:px-0 font-sans">
        <h1 className="text-[36px] md:text-[45px] font-[600] text-center leading-[44px] tracking-[-2%]">
          Get In touch
        </h1>
        <p
          id="contact"
          className="text-center text-[20px] font-[400] text-[#667085]"
        >
          We’d love to hear from you. Please fill out this form.
        </p>
      </div>
      <FullTemplate color="#EFFFF0" id="normal">
        <HalfTemplate>
          <ContactForm />
        </HalfTemplate>
      </FullTemplate>
    </div>
  );
}
