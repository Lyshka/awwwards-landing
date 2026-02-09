import gsap from "gsap";
import About from "./components/About";
import Hero from "./components/Hero";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Hero />

      <About />
    </main>
  );
};
export default App;
