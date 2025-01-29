import { Header } from "./Header";
import planeta from "../assets/planeta.svg";
import banner from "../assets/banner-planetas.svg";

export function SectionHero() {
  return (
    <section className="relative flex flex-col items-center h-screen">
      <Header />
      <img
        src={planeta}
        alt="Imagem"
        className="absolute top-10 left-0 w-3xs"
      />
      <div className="m-auto w-[720px] h-[344px]">
        <p className="text-6xl font-bold">
          Experiências visuais que cativam e impulsionam resultados!
        </p>
        <div className="flex gap-4 mt-16 mx-40">
          <button className="w-40 h-12 rounded-md z-30 bg-gradient-to-r from-[#C961DE] to-[#2954A3] shadow-lg]">
            Vamos Conversar
          </button>
        </div>
      </div>
      <img
        src={banner}
        alt="Imagem"
        className="absolute -bottom-30 right-0 w-[710px]"
      />
    </section>
  );
}
