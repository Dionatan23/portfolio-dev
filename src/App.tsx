import { Footer } from "./components/Footer";
import { SectionContato } from "./components/SectionContatot";
import { SectionHero } from "./components/SectionHero";
import { SectionProjects } from "./components/SectionProjects";

export function App() {
  return (
    <>
      <SectionHero />
      <SectionProjects />
      <SectionContato />
      <Footer />  
    </>
  )
}
