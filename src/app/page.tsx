import Hero from "@/component/Hero";
import Navbar from "@/component/Navbar";
import Practise from "@/component/Practise";
import Product from "@/component/Product";
import Solutions from "@/component/Solutions";


export default function Home() {
  return (
    <div >
      <Navbar />
      <Hero />
      <Product />
      {/* <Practise /> */}
      <Solutions />
    </div>
  );
}
