import {
    ArrowUpRight,
    ShieldCheck,
    Users,
    CarFront,
    HeartHandshake,
    Check,
} from "lucide-react";

import "./About.css";

const values = [
    {
        icon: ShieldCheck,
        number: "01",
        title: "Safety First",
        text: "Every journey begins with safety, from reliable vehicles to responsible professional drivers.",
    },
    {
        icon: Users,
        number: "02",
        title: "People First",
        text: "We focus on making every passenger feel comfortable, respected and well taken care of.",
    },
    {
        icon: CarFront,
        number: "03",
        title: "Quality Rides",
        text: "Our vehicles are selected and maintained with comfort and dependable travel in mind.",
    },
    {
        icon: HeartHandshake,
        number: "04",
        title: "Trusted Service",
        text: "Clear communication, dependable service and attention to detail throughout your journey.",
    },
];

const About = () => {
    return (
        <main className="about-page">

            {/* =====================================
                HERO
            ===================================== */}
            <section className="about-hero">

                <div className="about-hero-bg"></div>
                <div className="about-hero-overlay"></div>

                <div className="about-hero-content">

                    <span className="about-eyebrow">
                        ABOUT WANDER
                    </span>

                    <h1>
                        We don't just
                        <br />
                        <em>drive you.</em>
                        <br />
                        We move you forward.
                    </h1>

                    <p>
                        Premium car travel designed around comfort,
                        reliability and a better way to experience
                        every journey.
                    </p>

                </div>

                <div className="about-hero-bottom">

                    <span>Comfort</span>
                    <span>Reliability</span>
                    <span>Professional Service</span>

                </div>

            </section>


            {/* =====================================
                INTRO
            ===================================== */}
            <section className="about-intro">

                <div className="about-container">

                    <div className="about-intro-label">
                        <span>01</span>
                        <span>WHO WE ARE</span>
                    </div>

                    <div className="about-intro-content">

                        <h2>
                            Travel should feel
                            <br />
                            <em>effortless.</em>
                        </h2>

                      <p>
    Dhano Travels is a trusted travel agency in Ranchi, Jharkhand, 
    offering comfortable, reliable and hassle-free travel services 
    for individuals, families and businesses.
</p>

<p>
    From airport transfers and local sightseeing to outstation trips, 
    car rentals, tour packages and corporate travel, Dhno Travels 
    provides well-maintained vehicles, professional drivers and 
    personalized travel solutions to make every journey smooth and 
    memorable.
</p>


                    </div>

                </div>

            </section>


            {/* =====================================
                IMAGE + STORY
            ===================================== */}
            <section className="about-story">

                <div className="about-container">

                    <div className="about-story-grid">

                        <div className="about-story-image">

                            <img
                                src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1400&q=90"
                                alt="Wander Travel car service"
                            />

                            <div className="about-story-badge">
                                <strong>10+</strong>
                                <span>
                                    Years of
                                    <br />
                                    Experience
                                </span>
                            </div>

                        </div>


                        <div className="about-story-content">

                            <span className="about-section-label">
                                OUR STORY
                            </span>

                            <h2>
                                Built around
                                <br />
                                <em>the journey.</em>
                            </h2>

                            <p>
                                We believe getting there should be just
                                as enjoyable as being there.
                            </p>

                            <p>
                                That's why we've built our service around
                                the things that matter most: dependable
                                cars, professional drivers, clear
                                communication and genuine attention to
                                every passenger.
                            </p>

                            <p>
                                Whether you're travelling for work,
                                heading home to see family or discovering
                                somewhere new, we're here to make the
                                journey simpler.
                            </p>


                            <a
                                href="/fleet"
                                className="about-story-link"
                            >
                                Explore Our Fleet
                                <ArrowUpRight size={17} />
                            </a>

                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================
                STATS
            ===================================== */}
            <section className="about-stats">

                <div className="about-container">

                    <div className="about-stats-grid">

                        <div className="about-stat">
                            <strong>10+</strong>
                            <span>Years of Experience</span>
                        </div>

                        <div className="about-stat">
                            <strong>50+</strong>
                            <span>Vehicles Available</span>
                        </div>

                        <div className="about-stat">
                            <strong>25K+</strong>
                            <span>Journeys Completed</span>
                        </div>

                        <div className="about-stat">
                            <strong>24/7</strong>
                            <span>Customer Support</span>
                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================
                VALUES
            ===================================== */}
            <section className="about-values">

                <div className="about-container">

                    <div className="about-values-heading">

                        <div>
                            <span>
                                WHAT WE STAND FOR
                            </span>

                            <h2>
                                Simple principles.
                                <br />
                                <em>Better journeys.</em>
                            </h2>
                        </div>

                        <p>
                            Every part of our service is designed
                            around creating a dependable and comfortable
                            travel experience.
                        </p>

                    </div>


                    <div className="about-values-grid">

                        {values.map((value) => {

                            const Icon = value.icon;

                            return (
                                <div
                                    className="about-value-card"
                                    key={value.number}
                                >

                                    <div className="about-value-top">

                                        <span>
                                            {value.number}
                                        </span>

                                        <Icon size={27} />

                                    </div>

                                    <h3>
                                        {value.title}
                                    </h3>

                                    <p>
                                        {value.text}
                                    </p>

                                </div>
                            );

                        })}

                    </div>

                </div>

            </section>


            {/* =====================================
                WHY WANDER
            ===================================== */}
            <section className="about-standard">

                <div className="about-container">

                    <div className="about-standard-grid">

                        <div className="about-standard-heading">

                            <span>
                                THE WANDER STANDARD
                            </span>

                            <h2>
                                Every detail
                                <br />
                                <em>matters.</em>
                            </h2>

                        </div>


                        <div className="about-standard-list">

                            <div>
                                <Check size={18} />
                                <span>Clean and comfortable vehicles</span>
                            </div>

                            <div>
                                <Check size={18} />
                                <span>Professional and courteous drivers</span>
                            </div>

                            <div>
                                <Check size={18} />
                                <span>Transparent and straightforward pricing</span>
                            </div>

                            <div>
                                <Check size={18} />
                                <span>Flexible travel options</span>
                            </div>

                            <div>
                                <Check size={18} />
                                <span>Reliable pickup and drop service</span>
                            </div>

                            <div>
                                <Check size={18} />
                                <span>Dedicated customer support</span>
                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================
                CTA
            ===================================== */}
            <section className="about-cta">

                <div className="about-cta-bg"></div>
                <div className="about-cta-overlay"></div>

                <div className="about-cta-content">

                    <span>
                        READY FOR THE ROAD?
                    </span>

                    <h2>
                        Your journey
                        <br />
                        starts with us.
                    </h2>

                    <p>
                        Choose your car and let us take care
                        of everything else.
                    </p>

                    <a href="/booking">
                        Book Your Car
                        <ArrowUpRight size={18} />
                    </a>

                </div>

            </section>

        </main>
    );
};

export default About;