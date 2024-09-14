import Image from "next/image";
import NavBar from "./Nav"; // Assuming NavBar.js is in the same directory
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-seventy relative">
      {/* Full-Screen Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/three.png"
          alt="Shopping girl"
          fill
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
          quality={100}
        />
      </div>

      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col h-full">
        <NavBar />
        {/* Hero Section */}
        <section className="flex flex-col items-start md:items-start justify-center h-full text-center md:text-left lg:px-24 px-6 mt-20 lg:mt-5">
          <div className="max-w-lg text-white ml-7 md:ml-14 ">
            <h1 className="text-[45px] leading-relaxed lg:text-7xl font-extrabold text-accentthirty lg:leading-snug text-center md:text-left  poppins-font mb-4">
              Elevate your Style with Brukti’s Shopping
            </h1>
            <p className="text-xl mt-6 text-thirty leading-relaxed lg:text-left text-center">
              Endless shopping opportunities
            </p>
            <div className="mt-8 lg:text-left text-center">
              <Link href="/shop">
                <button className=" bg-gradient-to-br from-thirty to-accentthirty text-lg text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all w-48 transform hover:scale-105 relative">
                  <span className="absolute inset-0 bg-gradient-to-br from-thirty to-accentthirty rounded-full blur-md opacity-50 -z-10"></span>
                  Shop Now
                </button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
