import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Destinations from "../components/Destinations"
import CarFleet from "../components/CarFleet"
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs"
import HowItWorks from "../components/HowItWorks"
import Testimonials from "../components/Testimonials"
import BookingCTA from "../components/BookingCTA"
import Footer from "../components/Footer"
const Home = () => {
    return (
        <>
            <Navbar />

            <main>
                <Hero />
                <Destinations />
                <CarFleet />
                <Services />
                <WhyChooseUs />
                <HowItWorks />
                <Testimonials />
                <BookingCTA />
                <Footer />
            </main>

            <Footer />
        </>
    );
};

export default Home;