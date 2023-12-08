import './App.css'
import Hero from "./Hero/Hero.jsx";
import Navbar from "./Navbar/Navbar.jsx";
import MapRevealed from "./MapRevealed/MapRevealed.jsx";
import Carousel from "./Carousel/Carousel.jsx";
import Footer from "./Footer/Footer.jsx";
import Organizer from "./Organizer/Organizer.jsx";
import Events from "./Events/Events.jsx";
import Services from "./Services/Services.jsx";

function App() {
    return (
        <>
            <Navbar/>
            <Hero/>
            <Events/>
            <Services/>
            <Organizer/>
            <Footer/>
        </>
    );
}

export default App;
