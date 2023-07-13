import About from "@/components/About";
import Acheivments from "@/components/Acheivments";
import Equipments from "@/components/Equipments";
import EquipmentsTypes from "@/components/EquipmentsTypes";
import Footer from "@/components/Footer";
import MainSlideShow from "@/components/MainSlideShow";
import Spacer from "@/components/Spacer";

export default function Home() {

  return (
    <div className="flex flex-col items-center justify-center">
      <MainSlideShow />
      <Spacer />
      <About />
      <Spacer />
      <Acheivments />
      <Spacer />
      <Equipments />
      <Spacer />
      <EquipmentsTypes />
      <Footer />
    </div>
  );

}
