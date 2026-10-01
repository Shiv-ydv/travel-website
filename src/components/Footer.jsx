import {
    ArrowUpRight,
    Phone,
    Mail,
    MapPin,
} from "lucide-react";

import "./Footer.css";

const Footer = () => {
    return (
        <footer className="site-footer">

            {/* =================================
                TOP CTA
            ================================= */}
            <div className="footer-cta">

                <div className="footer-container footer-cta-inner">

                    <div>
                        <span>
                            HAVE A JOURNEY IN MIND?
                        </span>

                        <h2>
                            Let's get you
                            <em> moving.</em>
                        </h2>
                    </div>

                    <a href="#booking">
                        Book Your Car
                        <ArrowUpRight size={19} />
                    </a>

                </div>

            </div>


            {/* =================================
                MAIN FOOTER
            ================================= */}
            <div className="footer-main">

                <div className="footer-container footer-grid">

                    {/* BRAND */}
                    <div className="footer-brand">

                        <a href="/" className="footer-logo">

                            <span className="footer-logo-symbol">
                                W
                            </span>

                            <span>
                                WANDER
                                <small>
                                    TRAVEL CO.
                                </small>
                            </span>

                        </a>


                        <p>
                            Comfortable cars, professional drivers and
                            dependable journeys. Wherever you're going,
                            we're here to get you there.
                        </p>


                        {/* SOCIAL LINKS */}
                        <div className="footer-socials">

                            <a
                                href="#instagram"
                                aria-label="Instagram"
                            >
                                IG
                            </a>

                            <a
                                href="#facebook"
                                aria-label="Facebook"
                            >
                                FB
                            </a>

                            <a
                                href="#youtube"
                                aria-label="Youtube"
                            >
                                YT
                            </a>

                        </div>

                    </div>


                    {/* EXPLORE */}
                    <div className="footer-column">

                        <h3>
                            EXPLORE
                        </h3>

                        <a href="/">
                            Home
                        </a>

                        <a href="#cars">
                            Our Fleet
                        </a>

                        <a href="#services">
                            Services
                        </a>

                        <a href="#about">
                            About Us
                        </a>

                        <a href="#booking">
                            Book a Car
                        </a>

                    </div>


                    {/* SERVICES */}
                    <div className="footer-column">

                        <h3>
                            SERVICES
                        </h3>

                        <a href="#services">
                            Airport Transfer
                        </a>

                        <a href="#services">
                            Outstation Trips
                        </a>

                        <a href="#services">
                            Local Car Rental
                        </a>

                        <a href="#services">
                            Corporate Travel
                        </a>

                        <a href="#services">
                            Chauffeur Service
                        </a>

                    </div>


                    {/* CONTACT */}
                    <div className="footer-contact">

                        <h3>
                            GET IN TOUCH
                        </h3>


                        <a href="tel:+917870787208">

                            <Phone size={16} />

                            <span>
                                +91 78707 87208
                            </span>

                        </a>


                        <a href="mailto:dhanotravels@gmail.com">

                            <Mail size={16} />

                            <span>
                                dhanotravels@gmail.com
                            </span>

                        </a>


                        <div className="footer-address">

                            <MapPin size={16} />

                            <span>
                               HB Road, Ayodhyapuri, Kokar <br />
Ranchi, Jharkhand,
India
                            </span>

                        </div>

                    </div>

                </div>

            </div>


            {/* =================================
                BOTTOM
            ================================= */}
            <div className="footer-bottom">

                <div className="footer-container footer-bottom-inner">

                    <span>
                        © {new Date().getFullYear()} Dhano Travel Co.
                        All rights reserved.
                    </span>

                    <div>

                        <a href="#privacy">
                            Privacy Policy
                        </a>

                        <a href="#terms">
                            Terms & Conditions
                        </a>

                    </div>

                </div>

            </div>

        </footer>
    );
};

export default Footer;