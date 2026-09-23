import {
    ArrowUpRight,
    MapPin,
    Phone,
    Mail,
    Clock3,
    MessageCircle,
} from "lucide-react";

import "./Contact.css";

const Contact = () => {
    return (
        <main className="contact-page">

            {/* =================================
                HERO
            ================================= */}
            <section className="contact-hero">

                <div className="contact-hero-bg"></div>
                <div className="contact-hero-overlay"></div>

                <div className="contact-hero-content">

                    <span className="contact-eyebrow">
                        GET IN TOUCH
                    </span>

                    <h1>
                        Let's plan your
                        <br />
                        <em>next journey.</em>
                    </h1>

                    <p>
                        Have a question, need a car or planning an
                        outstation journey? Our team is ready to help.
                    </p>

                </div>

            </section>


            {/* =================================
                CONTACT INFORMATION
            ================================= */}
            <section className="contact-main">

                <div className="contact-container">

                    <div className="contact-heading">

                        <span>
                            CONTACT US
                        </span>

                        <h2>
                            We're here to
                            <br />
                            <em>help you.</em>
                        </h2>

                        <p>
                            Get in touch with us for bookings,
                            enquiries, airport transfers, outstation
                            trips or any other travel requirements.
                        </p>

                    </div>


                    <div className="contact-info-grid">

                        {/* Address */}
                        <div className="contact-info-card">

                            <div className="contact-info-icon">
                                <MapPin size={22} />
                            </div>

                            <span>
                                VISIT US
                            </span>

                            <h3>
                                Our Office
                            </h3>

                            <p>
                                Main Road,
                                <br />
                                Ranchi, Jharkhand,
                                <br />
                                India
                            </p>

                            <a
                                href="https://www.google.com/maps"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Get Directions
                                <ArrowUpRight size={15} />
                            </a>

                        </div>


                        {/* Phone */}
                        <div className="contact-info-card">

                            <div className="contact-info-icon">
                                <Phone size={22} />
                            </div>

                            <span>
                                CALL US
                            </span>

                            <h3>
                                +91 12345 67890
                            </h3>

                            <p>
                                Available for bookings,
                                enquiries and travel assistance.
                            </p>

                            <a href="tel:+911234567890">
                                Call Now
                                <ArrowUpRight size={15} />
                            </a>

                        </div>


                        {/* Email */}
                        <div className="contact-info-card">

                            <div className="contact-info-icon">
                                <Mail size={22} />
                            </div>

                            <span>
                                EMAIL US
                            </span>

                            <h3>
                                hello@wandertravel.com
                            </h3>

                            <p>
                                Send us your travel requirements
                                and we'll get back to you.
                            </p>

                            <a href="mailto:hello@wandertravel.com">
                                Send Email
                                <ArrowUpRight size={15} />
                            </a>

                        </div>


                        {/* Hours */}
                        <div className="contact-info-card">

                            <div className="contact-info-icon">
                                <Clock3 size={22} />
                            </div>

                            <span>
                                SUPPORT
                            </span>

                            <h3>
                                24 / 7
                            </h3>

                            <p>
                                Our support team is available
                                around the clock for assistance.
                            </p>

                            <a href="tel:+911234567890">
                                Get Support
                                <ArrowUpRight size={15} />
                            </a>

                        </div>

                    </div>

                </div>

            </section>


            {/* =================================
                FORM + MAP
            ================================= */}
            <section className="contact-form-section">

                <div className="contact-container">

                    <div className="contact-form-grid">

                        {/* FORM */}
                        <div className="contact-form-wrapper">

                            <span className="contact-form-label">
                                SEND AN ENQUIRY
                            </span>

                            <h2>
                                Tell us about
                                <br />
                                <em>your journey.</em>
                            </h2>

                            <p>
                                Fill in the details below and our team
                                will contact you shortly.
                            </p>


                            <form className="contact-form">

                                <div className="form-row">

                                    <div className="form-group">

                                        <label>
                                            Your Name
                                        </label>

                                        <input
                                            type="text"
                                            placeholder="Enter your name"
                                        />

                                    </div>


                                    <div className="form-group">

                                        <label>
                                            Phone Number
                                        </label>

                                        <input
                                            type="tel"
                                            placeholder="+91 XXXXX XXXXX"
                                        />

                                    </div>

                                </div>


                                <div className="form-row">

                                    <div className="form-group">

                                        <label>
                                            Email Address
                                        </label>

                                        <input
                                            type="email"
                                            placeholder="you@example.com"
                                        />

                                    </div>


                                    <div className="form-group">

                                        <label>
                                            Service
                                        </label>

                                        <select defaultValue="">
                                            <option value="" disabled>
                                                Select a service
                                            </option>

                                            <option>
                                                Airport Transfer
                                            </option>

                                            <option>
                                                Outstation Trip
                                            </option>

                                            <option>
                                                Local Car Rental
                                            </option>

                                            <option>
                                                Corporate Travel
                                            </option>

                                            <option>
                                                Wedding & Event
                                            </option>
                                        </select>

                                    </div>

                                </div>


                                <div className="form-row">

                                    <div className="form-group">

                                        <label>
                                            Pickup Location
                                        </label>

                                        <input
                                            type="text"
                                            placeholder="Enter pickup location"
                                        />

                                    </div>


                                    <div className="form-group">

                                        <label>
                                            Destination
                                        </label>

                                        <input
                                            type="text"
                                            placeholder="Where are you going?"
                                        />

                                    </div>

                                </div>


                                <div className="form-group">

                                    <label>
                                        Message
                                    </label>

                                    <textarea
                                        rows="5"
                                        placeholder="Tell us about your journey..."
                                    ></textarea>

                                </div>


                                <button
                                    type="submit"
                                    className="contact-submit"
                                >
                                    Send Enquiry
                                    <ArrowUpRight size={18} />
                                </button>

                            </form>

                        </div>


                        {/* MAP */}
                        <div className="contact-map-wrapper">

                            <div className="contact-map-header">

                                <div>

                                    <span>
                                        FIND US
                                    </span>

                                    <h3>
                                        Visit our office
                                    </h3>

                                </div>

                                <MapPin size={22} />

                            </div>


                            <div className="contact-map">

                                <iframe
                                    title="Wander Travel Office Location"
                                    src="https://www.google.com/maps?q=Main+Road,+Ranchi,+Jharkhand,+India&output=embed"
                                    loading="lazy"
                                    allowFullScreen
                                ></iframe>

                            </div>


                            <div className="contact-map-address">

                                <MapPin size={17} />

                                <div>
                                    <strong>
                                        Wander Travel Co.
                                    </strong>

                                    <span>
                                        Main Road, Ranchi,
                                        Jharkhand, India
                                    </span>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* =================================
                QUICK CONTACT
            ================================= */}
            <section className="contact-quick">

                <div className="contact-container">

                    <div className="contact-quick-inner">

                        <div className="contact-quick-icon">
                            <MessageCircle size={27} />
                        </div>

                        <div>

                            <span>
                                NEED AN IMMEDIATE RESPONSE?
                            </span>

                            <h2>
                                Talk to our travel team.
                            </h2>

                        </div>

                        <a href="tel:+917870787208">
                            Call Us
                            <Phone size={17} />
                        </a>

                    </div>

                </div>

            </section>


            {/* =================================
                CTA
            ================================= */}
            <section className="contact-cta">

                <div className="contact-cta-bg"></div>
                <div className="contact-cta-overlay"></div>

                <div className="contact-cta-content">

                    <span>
                        READY TO TRAVEL?
                    </span>

                    <h2>
                        Your next journey
                        <br />
                        starts here.
                    </h2>

                    <a href="/booking">
                        Book Your Car
                        <ArrowUpRight size={18} />
                    </a>

                </div>

            </section>

        </main>
    );
};

export default Contact;