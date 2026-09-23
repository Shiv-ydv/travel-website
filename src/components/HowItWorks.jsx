import {
    MapPin,
    CarFront,
    Navigation,
    ArrowRight,
} from "lucide-react";

import "./HowItWorks.css";

const steps = [
    {
        number: "01",
        icon: MapPin,
        title: "Choose Your Journey",
        description:
            "Tell us where you are, where you want to go and when you need a car.",
    },
    {
        number: "02",
        icon: CarFront,
        title: "Choose Your Car",
        description:
            "Select from our range of comfortable and well-maintained vehicles.",
    },
    {
        number: "03",
        icon: Navigation,
        title: "Enjoy The Ride",
        description:
            "Your professional driver arrives on time. Sit back and enjoy your journey.",
    },
];

const HowItWorks = () => {
    return (
        <section className="how-section">

            <div className="how-container">

                {/* Header */}
                <div className="how-header">

                    <span className="how-label">
                        HOW IT WORKS
                    </span>

                    <h2>
                        Your journey,
                        <br />
                        <em>made simple.</em>
                    </h2>

                    <p>
                        Booking a comfortable ride shouldn't be complicated.
                        We've made the entire process simple, transparent
                        and stress-free.
                    </p>

                </div>


                {/* Steps */}
                <div className="steps-wrapper">

                    {steps.map((step, index) => {

                        const Icon = step.icon;

                        return (
                            <div
                                className="step"
                                key={step.number}
                            >

                                {/* Number */}
                                <div className="step-top">

                                    <span className="step-number">
                                        {step.number}
                                    </span>

                                    <div className="step-icon">
                                        <Icon
                                            size={23}
                                            strokeWidth={1.5}
                                        />
                                    </div>

                                </div>


                                {/* Content */}
                                <div className="step-content">

                                    <h3>
                                        {step.title}
                                    </h3>

                                    <p>
                                        {step.description}
                                    </p>

                                </div>


                                {/* Connector */}
                                {index !== steps.length - 1 && (
                                    <div className="step-connector">
                                        <ArrowRight size={18} />
                                    </div>
                                )}

                            </div>
                        );

                    })}

                </div>


                {/* Bottom CTA */}
                <div className="how-bottom">

                    <span>
                        READY TO HIT THE ROAD?
                    </span>

                    <a href="#booking">
                        Book Your Ride
                        <ArrowRight size={17} />
                    </a>

                </div>

            </div>

        </section>
    );
};

export default HowItWorks;