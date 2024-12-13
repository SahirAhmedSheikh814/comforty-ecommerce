import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import OurProducts from "@/components/OurProducts";
import Products from "@/components/ProductCard";
import TopCate from "@/components/TopCate";



export default function Home() {
  return (
    <div className="">
      <Hero />
      <Products />
      <TopCate />
      <Grid />
      <OurProducts />
    </div>
  );
}
