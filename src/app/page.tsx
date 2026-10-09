import BillCalculator from "@/component/BillCalculator";
import Consultation from "@/component/Consultation";
import Footer from "@/component/Footer";
import Hero from "@/component/Hero";
import HomePaySmall from "@/component/HomePaySmall";
import HomePaySmallSmall from "@/component/HomePaySmallSmall";
import HomeProducts from "@/component/HomeProduct";
import Installers from "@/component/Installer";
import Navbar from "@/component/Navbar";
import Pay from "@/component/Pay";
import PaySmallSmall from "@/component/PaySmallSmall";
import Practise from "@/component/Practise";
import Product from "@/component/Product";
import Solution from "@/component/Solution";
import Solutions from "@/component/Solutions";
import SystemRecommendation from "@/component/SystemRecommendation";
import Testimonials from "@/component/Testimonials";
import Tools from "@/component/tools";
import PaymentButtonWrapper from "@/component/ui/PaymentButtonWrapper";
// import PaymentButton from "@/component/ui/PaymentButton";
import WhyUs from "@/component/WhyUs";


export default function Home() {
  return (
    <div >
      <Navbar />
      <Hero />
      <HomeProducts />
      {/* <PaymentButton /> */}
      <PaymentButtonWrapper />
      <Solution />
      {/* <Solutions /> */}
      <Tools />
      {/* <Pay /> */}
      <HomePaySmall />
      {/* <HomePaySmallSmall /> */}
      {/* <PaySmallSmall /> */}
      <WhyUs />
      <Testimonials />
      <Installers />
      <Consultation />
      <Footer />
    </div>
  );
}
