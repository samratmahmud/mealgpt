import Header from "./home/Header";
import HowWorks from "./home/HowWorks";
import Signup from "./home/Signup";
import Source from "./home/Source";
import Footer from "./home/Footer";
import Navbar from "@/components/global/Navbar";

export default function Home() {
  return (
    <main>
      <div className="overflow-hidden">
        <Navbar />
        <Header />
      </div>
      <HowWorks />
      <Signup />
      <Source />
      <Footer />
    </main>
  );
}
