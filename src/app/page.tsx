import BillCalculator from "@/component/BillCalculator";
import Hero from "@/component/Hero";
import Navbar from "@/component/Navbar";
import Practise from "@/component/Practise";
import Product from "@/component/Product";
import Solutions from "@/component/Solutions";
import SystemRecommendation from "@/component/SystemRecommendation";
import Testimonials from "@/component/Testimonials";
import WhyUs from "@/component/WhyUs";


export default function Home() {
  return (
    <div >
      <Navbar />
      <Hero />
      <Product />
      {/* <Practise /> */}
      <Solutions />
      <SystemRecommendation />
      <BillCalculator />
      <WhyUs />
      <Testimonials />

    </div>
  );
}
