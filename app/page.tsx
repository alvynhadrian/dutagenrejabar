import Footer from "@/components/Footer/page";
import About from "../components/About/page";
import Galery from "../components/Galery/page";

export default function Home() {
  return (
    <>
      <div className="relative min-h-screen bg-gradient-to-b from-blue-50 via-pink-50 to-white overflow-hidden">
        {/* BLUR */}
        {/* <div className="absolute top-[-100px] right-[-100px] w-[600px] h-[600px] bg-pink-50 rounded-full blur-[140px] opacity-40"></div>
        <div className="absolute bottom-[-200px] left-[-100px] w-[600px] h-[600px] bg-blue-50 rounded-full blur-[140px] opacity-30"></div> */}
        <About />
        <Galery />
        <Footer />
      </div>
    </>
  );
}
