import { Header } from "./Header";
import planeta from "../assets/planeta.svg";
import banner from "../assets/banner-planetas.svg";

export function SectionHero() {
  return (
    <section className="relative flex flex-col items-center h-screen">
      <Header />
      <img src={planeta} alt="Imagem" className="absolute top-10 left-0 w-3xs" />
      <div className="m-auto w-[720px] h-[344px]">
        <p className="text-6xl font-bold">
          Creative UI Designer Sourasith Phomhome Based in Montreal
        </p>
        <div className="flex gap-4 mt-16 mx-40">
            <button className="w-36 h-12 bg-[#797979] rounded-md z-50 ">Hire me</button>
            <button className="w-36 h-12 rounded-md bg-gradient-to-r from-[#C961DE] to-[#2954A3] shadow-lg]">Download CV</button>
        </div>
      </div>
      <img src={banner} alt="Imagem" className="absolute -bottom-30 right-0 w-[710px]" />
    </section>
  );
}
