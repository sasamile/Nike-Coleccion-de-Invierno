import "./App.css";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import PopularSneakers from "./components/PopularSneakers";
import Quality from "./components/Quality";
import Reviews from "./components/Reviews";
import Services from "./components/Services";
import SpecialOffer from "./components/SpecialOffer";
import Subscribe from "./components/Subscribe";
 

function App() {
  return (
    <>
      <main className="relative">
        <Navbar />
        <Hero />
        <PopularSneakers/>
        <Quality />
        <Services/>
        <SpecialOffer/>
        <Reviews/>
        <Subscribe/>
        <Footer/>
      </main>
    </>
  );
}

export default App;
