import Cards from "./_components/Cards";
import Hero from "./_components/Hero";
import Items from "./_components/Items";
import Shein from "./_components/Shein";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <main className="bg-gradient-to-br from-purple-50 to-purple-300 min-h-screen">
      <div>
        <Hero />
        <Shein />
        <Cards />
        <Items home={true} category="Top Picks" />
        <Items home={true} category="Accessories" />
        <Items home={true} category="Clothes" />
        <Items home={true} category="Shoes" />
      </div>
      <Footer />
    </main>
  );
}
