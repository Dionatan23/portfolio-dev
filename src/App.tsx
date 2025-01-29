import { Footer } from "./components/Footer";
import { SectionContato } from "./components/SectionContatot";
import { SectionHero } from "./components/SectionHero";
import { SectionProjects } from "./components/SectionProjects";
import { SectionText } from "./components/SectionText";

export function App() {
  return (
    <>
      <SectionHero />
      <SectionProjects />
      <SectionText />
      <SectionContato />
      <Footer />  
    </>
  )
}
