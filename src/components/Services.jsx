import {
    Plane,
    Map,
    CarFront,
    BriefcaseBusiness,
    ArrowUpRight,
} from "lucide-react";

import "./Services.css";

const services = [
    {
        number: "01",
        title: "Airport Transfers",
        description:
            "Reliable airport pickup and drop services with comfortable vehicles and professional drivers.",
        icon: Plane,
    },
    {
        number: "02",
        title: "Outstation Trips",
        description:
            "Travel beyond the city with spacious cars, experienced drivers and flexible trip options.",
        icon: Map,
    },
    {
        number: "03",
        title: "Local Car Rental",
        description:
            "Explore your city comfortably with hourly, daily and full-day car rental options.",
        icon: CarFront,
    },
    {
        number: "04",
        title: "Corporate Travel",
        description:
            "Professional transportation solutions for meetings, events, business trips and corporate guests.",
        icon: BriefcaseBusiness,
    },
];

const Services = () => {
    return (
        <section className="services-section" id="services">

            <div className="services-container">

                {/* Heading */}
                <div className="services-heading">

                    <div className="services-title">

                        <span className="services-label">
                            OUR SERVICES
                        </span>

                        <h2>
                            Wherever you're going,
                            <br />
                            <em>we'll get you there.</em>
                        </h2>

                    </div>

                    <p>
                        From quick airport transfers to long-distance
                        journeys, we make every ride comfortable, reliable
                        and effortless.
                    </p>

                </div>


                {/* Services */}
                <div className="services-list">

                    {services.map((service) => {

                        const Icon = service.icon;

                        return (
                            <a
                                href="#booking"
                                className="service-item"
                                key={service.number}
                            >

                                <span className="service-number">
                                    {service.number}
                                </span>


                                <div className="service-icon">
                                    <Icon size={25} strokeWidth={1.5} />
                                </div>


                                <div className="service-content">

                                    <h3>
                                        {service.title}
                                    </h3>

                                    <p>
                                        {service.description}
                                    </p>

                                </div>


                                <div className="service-arrow">
                                    <ArrowUpRight size={21} />
                                </div>

                            </a>
                        );

                    })}

                </div>

            </div>

        </section>
    );
};

export default Services;