import {
    ArrowUpRight,
    Phone,
    MapPin,
} from "lucide-react";

import "./BookingCTA.css";

const BookingCTA = () => {
    return (
        <section className="booking-section" id="booking">

            {/* Background */}
            <div className="booking-background">
                <img
                    src="https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=2200&q=90"
                    alt="Luxury car on a road"
                />
            </div>

            <div className="booking-overlay"></div>


            <div className="booking-container">

                {/* Main Content */}
                <div className="booking-content">

                    <span className="booking-label">
                        READY WHEN YOU ARE
                    </span>

                    <h2>
                        Your next journey
                        <br />
                        starts <em>here.</em>
                    </h2>

                    <p>
                        Whether you're heading to the airport, exploring a
                        new city or planning a long-distance journey,
                        we'll make getting there effortless.
                    </p>

                    <div className="booking-buttons">

                        <a
                            href="#book"
                            className="booking-primary"
                        >
                            Book Your Car
                            <ArrowUpRight size={18} />
                        </a>

                        <a
                            href="tel:+911234567890"
                            className="booking-secondary"
                        >
                            <Phone size={16} />
                            Call Us
                        </a>

                    </div>

                </div>


                {/* Booking Info Card */}
                <div className="booking-card">

                    <div className="booking-card-header">
                        <span>QUICK BOOKING</span>

                        <MapPin size={17} />
                    </div>


                    <div className="booking-field">

                        <label>
                            PICKUP LOCATION
                        </label>

                        <strong>
                            Enter pickup location
                        </strong>

                    </div>


                    <div className="booking-field">

                        <label>
                            DROP LOCATION
                        </label>

                        <strong>
                            Enter destination
                        </strong>

                    </div>


                    <div className="booking-row">

                        <div className="booking-field">
                            <label>
                                DATE
                            </label>

                            <strong>
                                Select date
                            </strong>
                        </div>

                        <div className="booking-field">
                            <label>
                                TIME
                            </label>

                            <strong>
                                Select time
                            </strong>
                        </div>

                    </div>


                    <button className="booking-search">
                        Check Availability
                        <ArrowUpRight size={17} />
                    </button>

                </div>

            </div>

        </section>
    );
};

export default BookingCTA;