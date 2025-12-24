import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Leadership from './components/Leadership';
import Contact from './components/Contact';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0d1117] text-[#f0f6fc]">
      <Header />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Leadership />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
