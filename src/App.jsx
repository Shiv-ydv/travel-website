import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Fleet from "./pages/Fleet";
import Services from "./pages/Services";
import Destinations from "./pages/Destinations";
import About from "./pages/About";
import Contact from "./pages/Contact"
import FloatingContact from "./components/FloatingContact";
import Booking from "./pages/Booking";

function App() {
    return (
        <BrowserRouter>

            <Navbar />

            <Routes>

                <Route path="/" element={<Home />} />

                <Route
                    path="/fleet"
                    element={<Fleet />}
                />


                <Route path="/services" element={<Services />} />
                <Route path="/destinations" element={<Destinations />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/booking" element={<Booking />} />
                

            </Routes>

            <Footer />
  <FloatingContact />
        </BrowserRouter>
    );
}

export default App;