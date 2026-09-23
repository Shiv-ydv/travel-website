import {
    ShieldCheck,
    UserCheck,
    BadgeIndianRupee,
    Headphones,
    ArrowUpRight,
} from "lucide-react";

import "./WhyChooseUs.css";

const benefits = [
    {
        icon: ShieldCheck,
        title: "Safe & Reliable",
        text: "Every journey is planned with your comfort and safety in mind.",
    },
    {
        icon: UserCheck,
        title: "Professional Drivers",
        text: "Experienced, courteous and professional drivers for every trip.",
    },
    {
        icon: BadgeIndianRupee,
        title: "Transparent Pricing",
        text: "Clear pricing with no unnecessary surprises or hidden charges.",
    },
    {
        icon: Headphones,
        title: "24/7 Support",
        text: "Our support team is available whenever you need assistance.",
    },
];

const WhyChooseUs = () => {
    return (
        <section className="why-section" id="about">

            <div className="why-container">

                {/* Image */}
                <div className="why-image">

                    <img
                        src="https://images.unsplash.com/photo-1504215680853-026ed2a45def?auto=format&fit=crop&w=1400&q=90"
                        alt="Premium car on a scenic road"
                    />

                    <div className="why-image-overlay"></div>

                    <div className="why-image-caption">
                        <span>TRAVEL WITH CONFIDENCE</span>
                        <strong>
                            Every road leads
                            <br />
                            somewhere memorable.
                        </strong>
                    </div>

                </div>


                {/* Content */}
                <div className="why-content">

                    <span className="why-label">
                        WHY CHOOSE US
                    </span>

                    <h2>
                        More than a ride.
                        <br />
                        <em>A better journey.</em>
                    </h2>

                    <p className="why-intro">
                        We believe travelling should feel effortless.
                        That's why we combine comfortable vehicles,
                        experienced drivers and dependable service to
                        make every journey better.
                    </p>


                    {/* Benefits */}
                    <div className="benefits-list">

                        {benefits.map((benefit, index) => {

                            const Icon = benefit.icon;

                            return (
                                <div
                                    className="benefit-item"
                                    key={benefit.title}
                                >

                                    <div className="benefit-number">
                                        0{index + 1}
                                    </div>

                                    <div className="benefit-icon">
                                        <Icon
                                            size={20}
                                            strokeWidth={1.5}
                                        />
                                    </div>

                                    <div className="benefit-text">
                                        <h3>
                                            {benefit.title}
                                        </h3>

                                        <p>
                                            {benefit.text}
                                        </p>
                                    </div>

                                </div>
                            );
                        })}

                    </div>


                    <a
                        href="#booking"
                        className="why-button"
                    >
                        Start Your Journey
                        <ArrowUpRight size={17} />
                    </a>

                </div>

            </div>

        </section>
    );
};

export default WhyChooseUs;