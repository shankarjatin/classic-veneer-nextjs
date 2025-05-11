import CarouselDemo from "@/Components/ui/CarouselCustom";
import HeroSection from "@/Components/ui/HeroSection";
import PlacesScroll from "@/Components/ui/PageScroll";
import ServicesSection from "@/Components/ui/ServiceSection";
import WhyChooseUs from "@/Components/ui/WhyChooseUs";
import Image from "next/image";
import "./globals.css";
export default function Home() {
  return (
    <>
      {/* Add your page-specific content here */}
     <HeroSection />
     <PlacesScroll/>
     <ServicesSection/>
     <CarouselDemo/>
     <WhyChooseUs/>
    </>
  );
}