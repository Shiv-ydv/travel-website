import {
    ArrowUpRight,
    Plane,
    Route,
    MapPinned,
    BriefcaseBusiness,
    Heart,
    Repeat2,
    ShieldCheck,
    Clock3,
    UserCheck,
    Headphones,
} from "lucide-react";

import "./Services.css";

const services = [
    {
        number: "01",
        icon: Plane,
        title: "Airport Transfers",
        description:
            "Comfortable and reliable airport pickup and drop services with professional drivers and timely arrivals.",
        points: [
            "Airport Pickup & Drop",
            "Flight Tracking",
            "Meet & Greet",
        ],
        image:
            "https://images.unsplash.com/photo-1515569067071-ec3b51335dd0?auto=format&fit=crop&w=1400&q=90",
    },
    {
        number: "02",
        icon: Route,
        title: "Outstation Trips",
        description:
            "Travel comfortably between cities with well-maintained cars and experienced drivers for long-distance journeys.",
        points: [
            "One-Way Trips",
            "Round Trips",
            "Multiple Days",
        ],
        image:
            "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1400&q=90",
    },
    {
        number: "03",
        icon: MapPinned,
        title: "Local Car Rental",
        description:
            "Explore your city at your own pace with flexible car rental services for meetings, shopping and daily travel.",
        points: [
            "Hourly Rental",
            "Full Day Rental",
            "Local Sightseeing",
        ],
        image:
            "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1400&q=90",
    },
    {
        number: "04",
        icon: BriefcaseBusiness,
        title: "Corporate Travel",
        description:
            "Professional transportation solutions for companies, executives, meetings, events and business travel.",
        points: [
            "Executive Cars",
            "Business Transfers",
            "Corporate Accounts",
        ],
        image:
            "https://images.unsplash.com/photo-1551830820-330a71b99659?auto=format&fit=crop&w=1400&q=90",
    },
    {
        number: "05",
        icon: Heart,
        title: "Wedding & Events",
        description:
            "Make special occasions easier with elegant transportation for weddings, celebrations and private events.",
        points: [
            "Wedding Cars",
            "Guest Transfers",
            "Event Transportation",
        ],
        image:
            "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1400&q=90",
    },
    {
        number: "06",
        icon: Repeat2,
        title: "One-Way & Round Trips",
        description:
            "Choose a flexible journey option based on your destination, schedule and travel requirements.",
        points: [
            "Flexible Routes",
            "Custom Pickup",
            "Return Journeys",
        ],
        image:
            "https://images.unsplash.com/photo-1465447142348-e9952c393450?auto=format&fit=crop&w=1400&q=90",
    },
];

const advantages = [
    {
        icon: ShieldCheck,
        title: "Safe & Reliable",
        text: "Travel with well-maintained vehicles and professional drivers.",
    },
    {
        icon: Clock3,
        title: "Always On Time",
        text: "We focus on punctual pickups and smooth journey planning.",
    },
    {
        icon: UserCheck,
        title: "Professional Drivers",
        text: "Experienced drivers who understand your comfort and travel needs.",
    },
    {
        icon: Headphones,
        title: "24/7 Support",
        text: "Get assistance whenever you need help with your journey.",
    },
];

const Services = () => {
    return (
        <main className="services-page">

            {/* =================================
                HERO
            ================================= */}
            <section className="services-hero">

                <div className="services-hero-bg"></div>

                <div className="services-hero-overlay"></div>

                <div className="services-hero-content">

                    <span className="services-eyebrow">
                        OUR SERVICES
                    </span>

                    <h1>
                        More than a ride.
                        <br />
                        <em>A complete journey.</em>
                    </h1>

                    <p>
                        From airport transfers to long-distance
                        journeys, we provide comfortable and reliable
                        car services designed around your travel needs.
                    </p>

                </div>

                <div className="services-hero-bottom">

                    <span>Airport Transfers</span>
                    <span>Outstation</span>
                    <span>Corporate</span>
                    <span>Local Travel</span>

                </div>

            </section>


            {/* =================================
                INTRO
            ================================= */}
            <section className="services-intro">

                <div className="services-container">

                    <div className="services-intro-label">
                        <span>01</span>
                        <span>WHAT WE OFFER</span>
                    </div>

                    <div className="services-intro-content">

                        <h2>
                            Wherever you're going,
                            <br />
                            <em>we'll get you there.</em>
                        </h2>

                        <p>
                            Whether it's an airport pickup, a weekend
                            getaway, a business meeting or a family
                            journey, our services are built to make
                            every trip simple, comfortable and dependable.
                        </p>

                    </div>

                </div>

            </section>


            {/* =================================
                SERVICES GRID
            ================================= */}
            <section className="services-list">

                <div className="services-container">

                    <div className="services-grid">

                        {services.map((service) => {

                            const Icon = service.icon;

                            return (
                                <article
                                    className="service-card"
                                    key={service.number}
                                >

                                    <div className="service-image">

                                        <img
                                            src={service.image}
                                            alt={service.title}
                                        />

                                        <span className="service-number">
                                            {service.number}
                                        </span>

                                        <div className="service-icon">
                                            <Icon size={21} />
                                        </div>

                                    </div>


                                    <div className="service-content">

                                        <span className="service-label">
                                            {service.number} / SERVICE
                                        </span>

                                        <h3>
                                            {service.title}
                                        </h3>

                                        <p>
                                            {service.description}
                                        </p>


                                        <div className="service-points">

                                            {service.points.map(
                                                (point, index) => (
                                                    <span key={index}>
                                                        {point}
                                                    </span>
                                                )
                                            )}

                                        </div>


                                        <a
                                            href="#booking"
                                            className="service-link"
                                        >
                                            Explore Service
                                            <ArrowUpRight size={17} />
                                        </a>

                                    </div>

                                </article>
                            );
                        })}

                    </div>

                </div>

            </section>


            {/* =================================
                WHY US
            ================================= */}
            <section className="services-why">

                <div className="services-container">

                    <div className="services-why-heading">

                        <span>
                            THE WANDER STANDARD
                        </span>

                        <h2>
                            Service that makes
                            <br />
                            <em>every journey better.</em>
                        </h2>

                    </div>


                    <div className="services-advantages">

                        {advantages.map((item, index) => {

                            const Icon = item.icon;

                            return (
                                <div
                                    className="service-advantage"
                                    key={index}
                                >

                                    <Icon size={29} />

                                    <h3>
                                        {item.title}
                                    </h3>

                                    <p>
                                        {item.text}
                                    </p>

                                </div>
                            );
                        })}

                    </div>

                </div>

            </section>


            {/* =================================
                PROCESS
            ================================= */}
            <section className="service-process">

                <div className="services-container">

                    <div className="process-heading">

                        <span>
                            HOW IT WORKS
                        </span>

                        <h2>
                            Booking your journey
                            <br />
                            <em>is simple.</em>
                        </h2>

                    </div>


                    <div className="process-grid">

                        <div className="process-item">

                            <span>01</span>

                            <h3>
                                Tell Us Your Plan
                            </h3>

                            <p>
                                Share your pickup, destination,
                                date and travel requirements.
                            </p>

                        </div>


                        <div className="process-item">

                            <span>02</span>

                            <h3>
                                Choose Your Car
                            </h3>

                            <p>
                                Select a vehicle that matches
                                your group and comfort needs.
                            </p>

                        </div>


                        <div className="process-item">

                            <span>03</span>

                            <h3>
                                Enjoy Your Journey
                            </h3>

                            <p>
                                Sit back and enjoy a smooth,
                                comfortable and reliable ride.
                            </p>

                        </div>

                    </div>

                </div>

            </section>


            {/* =================================
                CTA
            ================================= */}
            <section className="services-cta">

                <div className="services-cta-bg"></div>

                <div className="services-cta-overlay"></div>

                <div className="services-cta-content">

                    <span>
                        PLAN YOUR NEXT JOURNEY
                    </span>

                    <h2>
                        Tell us where
                        <br />
                        you want to go.
                    </h2>

                    <p>
                        We'll take care of the car,
                        the driver and the journey.
                    </p>

                    <a href="#booking">
                        Book a Car
                        <ArrowUpRight size={18} />
                    </a>

                </div>

            </section>

        </main>
    );
};

export default Services;