import Cards from "./components/Cards";
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
        <Items category="Tops" />
        <Items category="Tops" />
        <Items category="Tops" />
      </div>
    </main>
  );
}
