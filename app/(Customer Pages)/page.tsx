import Cards from "./_components/Cards";
import { CartProvider } from "./_components/cartContext";
import Hero from "./_components/Hero";
import Items from "./_components/Items";
import Shein from "./_components/Shein";
import Footer from "./Footer";
import NavBar from "./NavBar";

export default function Home() {
  return (
    <main>
      <NavBar />

      <div className="mb-24">
        <Hero />"
        <Shein />
        <Cards />
        <Items category="Tops" />
        <Items category="Dresses" />
        <Items category="Shoes" />
        <Items category="Accessories" />
      </div>
      <Footer />
    </main>
  );
}
