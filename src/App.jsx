import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Services } from "./components/sections/Services";
import { Portfolio } from "./components/sections/Portfolio";
import { Experience } from "./components/sections/Experience";
import { Contact } from "./components/sections/Contact";
import { ScrollToTop } from "./components/ui/ScrollToTop";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
