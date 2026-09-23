import {
    ArrowUpRight,
    Users,
    Briefcase,
    Snowflake,
    ShieldCheck,
    Check,
} from "lucide-react";

import "./Fleet.css";

const cars = [
    {
        id: 1,
        name: "Toyota Innova Crysta",
        category: "Premium SUV",
        image:
            "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1400&q=90",
        seats: "6 Seats",
        luggage: "4 Bags",
        tag: "Most Popular",
        features: ["AC", "Comfortable", "Professional Driver"],
    },

    {
        id: 2,
        name: "Maruti Suzuki Ertiga",
        category: "Comfort MPV",
        image:
            "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1400&q=90",
        seats: "6 Seats",
        luggage: "3 Bags",
        tag: "Family Choice",
        features: ["AC", "Spacious", "Professional Driver"],
    },
    {
        id: 3,
        name: "Swift Dzire",
        category: "Executive Sedan",
        image:
            "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1400&q=90",
        seats: "4 Seats",
        luggage: "2 Bags",
        tag: "Best Value",
        features: ["AC", "Comfortable", "Professional Driver"],
    },
    {
        id: 4,
        name: "Toyota Fortuner",
        category: "Luxury SUV",
        image:
            "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1400&q=90",
        seats: "7 Seats",
        luggage: "5 Bags",
        tag: "Premium",
        features: ["AC", "Luxury Interior", "Professional Driver"],
    },
    {
        id: 5,
        name: "Honda City",
        category: "Premium Sedan",
        image:
            "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1400&q=90",
        seats: "4 Seats",
        luggage: "2 Bags",
        tag: "Executive",
        features: ["AC", "Premium Interior", "Professional Driver"],
    },
    {
        id: 6,
        name: "Kia Carens",
        category: "Premium MPV",
        image:
            "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1400&q=90",
        seats: "6 Seats",
        luggage: "4 Bags",
        tag: "Group Travel",
        features: ["AC", "Spacious", "Professional Driver"],
    },
];

const Fleet = () => {
    return (
        <main className="fleet-page">

            {/* HERO */}
            <section className="fleet-hero">
                <div className="fleet-hero-bg"></div>
                <div className="fleet-hero-overlay"></div>

                <div className="fleet-hero-content">
                    <span className="fleet-eyebrow">
                        OUR FLEET
                    </span>

                    <h1>
                        Choose the right car
                        <br />
                        <em>for your journey.</em>
                    </h1>

                    <p>
                        From comfortable city rides to premium SUVs,
                        choose a vehicle that fits your journey,
                        comfort and travel needs.
                    </p>
                </div>

                <div className="fleet-hero-bottom">
                    <span>Comfort</span>
                    <span>Safety</span>
                    <span>Reliable Travel</span>
                </div>
            </section>


            {/* INTRO */}
            <section className="fleet-intro">
                <div className="fleet-container">

                    <div className="fleet-intro-label">
                        <span>01</span>
                        <span>FIND YOUR RIDE</span>
                    </div>

                    <div className="fleet-intro-content">
                        <h2>
                            A car for every
                            <br />
                            <em>kind of journey.</em>
                        </h2>

                        <p>
                            Whether you're travelling across the city,
                            heading outstation with family, or looking
                            for a premium ride, our fleet is designed
                            around your comfort.
                        </p>
                    </div>

                </div>
            </section>


            {/* FILTER */}
            <section className="fleet-list-section">

                <div className="fleet-container">

                    <div className="fleet-toolbar">

                        <div className="fleet-tabs">
                            <button className="active">
                                All Cars
                            </button>

                            <button>
                                Sedan
                            </button>

                            <button>
                                SUV
                            </button>

                            <button>
                                MPV
                            </button>

                            <button>
                                Luxury
                            </button>
                        </div>

                        <div className="fleet-result">
                            06 Vehicles
                        </div>

                    </div>


                    {/* CAR GRID */}
                    <div className="fleet-grid">

                        {cars.map((car) => (

                            <article
                                className="fleet-card"
                                key={car.id}
                            >

                                <div className="fleet-card-image">

                                    <img
                                        src={car.image}
                                        alt={car.name}
                                    />

                                    <span className="fleet-card-tag">
                                        {car.tag}
                                    </span>

                                    <button className="fleet-card-arrow">
                                        <ArrowUpRight size={20} />
                                    </button>

                                </div>


                                <div className="fleet-card-body">

                                    <span className="fleet-card-category">
                                        {car.category}
                                    </span>

                                    <h3>
                                        {car.name}
                                    </h3>


                                    <div className="fleet-card-specs">

                                        <div>
                                            <Users size={17} />
                                            <span>{car.seats}</span>
                                        </div>

                                        <div>
                                            <Briefcase size={17} />
                                            <span>{car.luggage}</span>
                                        </div>

                                        <div>
                                            <Snowflake size={17} />
                                            <span>AC</span>
                                        </div>

                                    </div>


                                    <div className="fleet-card-features">

                                        {car.features.map(
                                            (feature, index) => (

                                                <span key={index}>
                                                    <Check size={13} />
                                                    {feature}
                                                </span>

                                            )
                                        )}

                                    </div>


                                    <div className="fleet-card-bottom">

                                        <a
                                            href="#booking"
                                            className="fleet-book"
                                        >
                                            Book Now
                                            <ArrowUpRight size={16} />
                                        </a>

                                    </div>

                                </div>

                            </article>

                        ))}

                    </div>

                </div>

            </section>


            {/* FEATURES */}
            <section className="fleet-features-section">

                <div className="fleet-container">

                    <div className="fleet-section-heading">

                        <span>
                            WHY OUR FLEET
                        </span>

                        <h2>
                            Travel with
                            <br />
                            <em>complete confidence.</em>
                        </h2>

                    </div>


                    <div className="fleet-features-grid">

                        <div className="fleet-feature">
                            <ShieldCheck size={30} />

                            <h3>
                                Safety First
                            </h3>

                            <p>
                                Well-maintained vehicles and
                                experienced drivers for a safe journey.
                            </p>
                        </div>


                        <div className="fleet-feature">
                            <Snowflake size={30} />

                            <h3>
                                Comfortable Rides
                            </h3>

                            <p>
                                Clean, air-conditioned vehicles
                                designed for comfortable travel.
                            </p>
                        </div>


                        <div className="fleet-feature">
                            <Users size={30} />

                            <h3>
                                Professional Drivers
                            </h3>

                            <p>
                                Trained and courteous drivers
                                focused on your travel experience.
                            </p>
                        </div>


                        <div className="fleet-feature">
                            <Briefcase size={30} />

                            <h3>
                                Every Journey
                            </h3>

                            <p>
                                Cars for airport transfers,
                                business travel and outstation trips.
                            </p>
                        </div>

                    </div>

                </div>

            </section>


            {/* CTA */}
            <section className="fleet-cta">

                <div className="fleet-cta-overlay"></div>

                <div className="fleet-cta-content">

                    <span>
                        READY WHEN YOU ARE
                    </span>

                    <h2>
                        Your perfect ride
                        <br />
                        is waiting.
                    </h2>

                    <p>
                        Choose your car and let us take care
                        of the journey.
                    </p>

                    <a href="#booking">
                        Book Your Car
                        <ArrowUpRight size={18} />
                    </a>

                </div>

            </section>

        </main>
    );
};

export default Fleet;