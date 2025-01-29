import { CardProjects } from "./CardProjects";

export function SectionProjects() {
  return (
    <section className="flex flex-col items-center justify-center w-full my-16 px-10">
      <h3 className="text-2xl font-bold py-5">Projetos</h3>
      <div className="w-full grid grid-cols-3 gap-y-10 place-items-center">
        <CardProjects />
        <CardProjects />
        <CardProjects />
        <CardProjects />
        <CardProjects />
        <CardProjects />
      </div>
    </section>
  );
}
