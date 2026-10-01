import {
    ArrowUpRight,
    Phone,
    MapPin,
    CalendarDays,
    Clock3,
    CarFront,
    Users,
    User,
    Mail,
    MessageSquare,
} from "lucide-react";

import "./BookingCTA.css";

const BookingCTA = () => {
    return (
        <section className="travel-booking-section" id="booking">

            {/* =========================================
                BACKGROUND
            ========================================= */}

            <div className="travel-booking-background">

                <img
                    src="https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=2200&q=90"
                    alt="Luxury car on a scenic road"
                />

            </div>

            <div className="travel-booking-overlay"></div>


            {/* =========================================
                CONTAINER
            ========================================= */}

            <div className="travel-booking-container">


                {/* =========================================
                    LEFT CONTENT
                ========================================= */}

                <div className="travel-booking-content">

                    <span className="travel-booking-label">
                        READY WHEN YOU ARE
                    </span>

                    <h2>
                        Your next journey
                        <br />
                        starts <em>here.</em>
                    </h2>

                    <p>
                        Tell us where you're going and we'll take care
                        of the journey. Comfortable vehicles, trusted
                        drivers and travel made effortless.
                    </p>


                    <div className="travel-booking-buttons">

                        <a
                            href="#booking-form"
                            className="travel-booking-primary"
                        >
                            Book Your Journey
                            <ArrowUpRight size={18} />
                        </a>


                        <a
                            href="tel:+911234567890"
                            className="travel-booking-secondary"
                        >
                            <Phone size={16} />
                            Call Us
                        </a>

                    </div>


                    {/* TRUST INFO */}

                    <div className="travel-booking-trust">

                        <div>
                            <strong>24/7</strong>
                            <span>Travel Support</span>
                        </div>

                        <div>
                            <strong>100%</strong>
                            <span>Comfortable Rides</span>
                        </div>

                        <div>
                            <strong>Trusted</strong>
                            <span>Professional Drivers</span>
                        </div>

                    </div>

                </div>


                {/* =========================================
                    BOOKING FORM
                ========================================= */}

                <div
                    className="travel-booking-card"
                    id="booking-form"
                >

                    {/* HEADER */}

                    <div className="travel-booking-card-header">

                        <div>

                            <span>
                                QUICK BOOKING
                            </span>

                            <h3>
                                Plan your journey
                            </h3>

                        </div>


                        <div className="travel-booking-header-icon">
                            <MapPin size={18} />
                        </div>

                    </div>


                    {/* =====================================
                        TRIP TYPE
                    ===================================== */}

                    <div className="travel-booking-trip-type">

                        <label className="travel-booking-radio">

                            <input
                                type="radio"
                                name="tripType"
                                value="one-way"
                                defaultChecked
                            />

                            <span>
                                One Way
                            </span>

                        </label>


                        <label className="travel-booking-radio">

                            <input
                                type="radio"
                                name="tripType"
                                value="round-trip"
                            />

                            <span>
                                Round Trip
                            </span>

                        </label>

                    </div>


                    {/* =====================================
                        PICKUP / DROP
                    ===================================== */}

                    <div className="travel-booking-grid">

                        <div className="travel-booking-field">

                            <label>
                                <MapPin size={13} />
                                PICKUP LOCATION
                            </label>

                            <input
                                type="text"
                                name="pickupLocation"
                                placeholder="Enter pickup location"
                            />

                        </div>


                        <div className="travel-booking-field">

                            <label>
                                <MapPin size={13} />
                                DROP LOCATION
                            </label>

                            <input
                                type="text"
                                name="dropLocation"
                                placeholder="Enter destination"
                            />

                        </div>

                    </div>


                    {/* =====================================
                        DATE / TIME / CAR
                    ===================================== */}

                    <div className="travel-booking-grid three">

                        <div className="travel-booking-field">

                            <label>
                                <CalendarDays size={13} />
                                DATE
                            </label>

                            <input
                                type="date"
                                name="travelDate"
                            />

                        </div>


                        <div className="travel-booking-field">

                            <label>
                                <Clock3 size={13} />
                                TIME
                            </label>

                            <input
                                type="time"
                                name="pickupTime"
                            />

                        </div>


                        <div className="travel-booking-field">

                            <label>
                                <CarFront size={13} />
                                CAR TYPE
                            </label>

                            <select
                                name="carType"
                                defaultValue=""
                            >

                                <option
                                    value=""
                                    disabled
                                >
                                    Select car
                                </option>

                                <option value="sedan">
                                    Sedan
                                </option>

                                <option value="suv">
                                    SUV
                                </option>

                                <option value="innova">
                                    Toyota Innova
                                </option>

                                <option value="tempo-traveller">
                                    Tempo Traveller
                                </option>

                                <option value="luxury">
                                    Luxury Car
                                </option>

                            </select>

                        </div>

                    </div>


                    {/* =====================================
                        PASSENGERS / VEHICLE
                    ===================================== */}

                    <div className="travel-booking-grid">

                        <div className="travel-booking-field">

                            <label>
                                <Users size={13} />
                                PASSENGERS
                            </label>

                            <select
                                name="passengers"
                                defaultValue=""
                            >

                                <option
                                    value=""
                                    disabled
                                >
                                    Number of passengers
                                </option>

                                <option value="1">
                                    1 Passenger
                                </option>

                                <option value="2">
                                    2 Passengers
                                </option>

                                <option value="3">
                                    3 Passengers
                                </option>

                                <option value="4">
                                    4 Passengers
                                </option>

                                <option value="5">
                                    5 Passengers
                                </option>

                                <option value="6">
                                    6 Passengers
                                </option>

                                <option value="7">
                                    7 Passengers
                                </option>

                                <option value="8">
                                    8 Passengers
                                </option>

                                <option value="9">
                                    9 Passengers
                                </option>

                                <option value="10+">
                                    10+ Passengers
                                </option>

                            </select>

                        </div>


                        <div className="travel-booking-field">

                            <label>
                                <CarFront size={13} />
                                VEHICLE PREFERENCE
                            </label>

                            <select
                                name="vehiclePreference"
                                defaultValue=""
                            >

                                <option
                                    value=""
                                    disabled
                                >
                                    Select preference
                                </option>

                                <option value="ac">
                                    AC Vehicle
                                </option>

                                <option value="non-ac">
                                    Non-AC Vehicle
                                </option>

                                <option value="any">
                                    Any Available
                                </option>

                            </select>

                        </div>

                    </div>


                    {/* =====================================
                        CUSTOMER DETAILS
                    ===================================== */}

                    <div className="travel-booking-section-title">
                        <span>
                            YOUR DETAILS
                        </span>
                    </div>


                    <div className="travel-booking-grid">

                        <div className="travel-booking-field">

                            <label>
                                <User size={13} />
                                FULL NAME
                            </label>

                            <input
                                type="text"
                                name="fullName"
                                placeholder="Enter your name"
                            />

                        </div>


                        <div className="travel-booking-field">

                            <label>
                                <Phone size={13} />
                                PHONE NUMBER
                            </label>

                            <input
                                type="tel"
                                name="phone"
                                placeholder="+91 Enter phone number"
                            />

                        </div>

                    </div>


                    <div className="travel-booking-grid">

                        <div className="travel-booking-field">

                            <label>
                                <Mail size={13} />
                                EMAIL ADDRESS
                            </label>

                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                            />

                        </div>


                        <div className="travel-booking-field">

                            <label>
                                <MessageSquare size={13} />
                                SPECIAL REQUEST
                            </label>

                            <input
                                type="text"
                                name="specialRequest"
                                placeholder="Any special requirement?"
                            />

                        </div>

                    </div>


                    {/* =====================================
                        SUBMIT
                    ===================================== */}

                    <button
                        type="button"
                        className="travel-booking-submit"
                    >

                        Check Availability

                        <ArrowUpRight size={18} />

                    </button>


                    <p className="travel-booking-note">
                        By submitting this form, our travel team
                        will contact you to confirm availability.
                    </p>

                </div>

            </div>

        </section>
    );
};

export default BookingCTA;