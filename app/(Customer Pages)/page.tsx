import Cards from "./components/Cards";
import { CartProvider } from "./components/cartContext";
import Hero from "./components/Hero";
import Items from "./components/Items";
import Shein from "./components/Shein";

export default function Home() {
  return (
    <main>
      <div className="mb-24">
        <Hero />"
        <Shein />
        <Cards />
        <Items category="Tops" />
        <Items category="Dresses" />
        <Items category="Shoes" />
        <Items category="Accessories" />
      </div>
    </main>
  );
}
