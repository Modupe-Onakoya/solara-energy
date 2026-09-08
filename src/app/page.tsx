import BillCalculator from "@/component/BillCalculator";
import Consultation from "@/component/Consultation";
import Hero from "@/component/Hero";
import HomePaySmallSmall from "@/component/HomePaySmallSmall";
import HomeProducts from "@/component/HomeProduct";
import Installers from "@/component/Installer";
import Pay from "@/component/Pay";
import PaySmallSmall from "@/component/PaySmallSmall";
import Practise from "@/component/Practise";
import Product from "@/component/Product";
import Solutions from "@/component/Solutions";
import SystemRecommendation from "@/component/SystemRecommendation";
import Testimonials from "@/component/Testimonials";
import Tools from "@/component/tools";
import WhyUs from "@/component/WhyUs";


export default function Home() {
  return (
    <div >

      <Hero />
      <HomeProducts />
      {/* <Product /> */}
      {/* <Practise /> */}
      <Solutions />
      <Tools />
      {/* <Pay /> */}
      <HomePaySmallSmall />
      {/* <PaySmallSmall /> */}
      <WhyUs />
      <Testimonials />
      <Installers />
      <Consultation />
    </div>
  );
}
