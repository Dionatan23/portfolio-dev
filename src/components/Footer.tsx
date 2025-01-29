import planetaFooter from "../assets/planeta-roxo.svg";

export function Footer() {
  return (
    <footer className="w-full h-48 bg-[#1C1C65]">
      <img
        src={planetaFooter}
        alt="imagem"
        className="absolute -bottom-330 -left-5 z-30"
      />
      <div className="flex flex-col items-center justify-end w-full h-32 px-10">
        <p className="text-sm font-normal">
          Todos os direitos reservados ©2025 <span className="font-bold">Groover Studio</span>
        </p>
        <hr className="w-full h-[1px] bg-[#FFFFFF]" />
      </div>
    </footer>
  );
}
