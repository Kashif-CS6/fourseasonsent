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
    <>
      <FullTemplate color="#E1FEE2">
        <HalfTemplate>
          <Navbar />
        </HalfTemplate>
      </FullTemplate>

      {/* hero section */}
      <div className="bg-[#d2f4da] md:rounded-bl-[200px]">
        <HalfTemplate>
          <Hero />
        </HalfTemplate>
      </div>
      <HalfTemplate>
        <ProductsAndServices />
      </HalfTemplate>
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

      <HalfTemplate>
        <LeadershipTeam />
      </HalfTemplate>

      <FullTemplate color="#E1FEE2">
        <HalfTemplate>
          <Aboutus />
        </HalfTemplate>
      </FullTemplate>
      {/* our clients */}
      <div className="mb-30 px-4 xl:px-0">
        <div className="xl:w-[1007px] font-serif flex justify-center flex-col text-center items-center mx-auto py-10">
          <h1 className="text-[40px] font-[700]">Our Clients</h1>
          <p className="text-[20px] font-[400]">
            Start your journey with fresh ideas. Explore vibrant options, make
            bold choices, and craft experiences that matter. From clean designs
            to smart solutions—everything begins with a single click.
          </p>
        </div>
        <Image
          src={"/clients.svg"}
          width={1351}
          height={50}
          className="w-full h-[40px]"
          alt="clients"
        />
      </div>

      {/* Contact Form */}

      <div className="flex flex-col gap-4 py-10 px-4 xl:px-0">
        <h1 className="text-[36px] font-[600] text-center leading-[44px] tracking-[-2%]">
          Get In touch
        </h1>
        <p className="text-center text-[20px] font-[400] text-[#667085]">
          We’d love to hear from you. Please fill out this form.
        </p>
      </div>
      <FullTemplate color="#EFFFF0">
        <HalfTemplate>
          <ContactForm />
        </HalfTemplate>
      </FullTemplate>
      <FullTemplate color="#F8FAFC">
        <HalfTemplate>
          <Footer />
        </HalfTemplate>
      </FullTemplate>
    </>
  );
}
