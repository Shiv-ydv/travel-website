import { useState } from "react";

import {
    ArrowUpRight,
    Phone,
    MapPin,
    Mail,
    Clock3,
    MessageCircle,
} from "lucide-react";

import "./Contact.css";

// ============================================================
// API SERVICE
// Connects this page with Django REST API
// ============================================================

import api from "../services/api";


// ============================================================
// TOAST SYSTEM
// Uses the same global toast system used in Admin Dashboard
// ============================================================

import { useToast } from "../context/ToastContext";


// ============================================================
// CONTACT COMPONENT
// ============================================================

const Contact = () => {

    // ========================================================
    // GLOBAL TOAST
    // ========================================================

    const { showToast } = useToast();


    // ========================================================
    // CONTACT FORM STATE
    // ========================================================

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        service: "",
        pickup: "",
        destination: "",
        message: "",
    });


    // ========================================================
    // SUBMITTING STATE
    // Used to disable button while API request is running
    // ========================================================

    const [submitting, setSubmitting] = useState(false);


    // ========================================================
    // HANDLE INPUT CHANGE
    // Works for input, select and textarea
    // ========================================================

    const handleChange = (e) => {

        const {
            name,
            value,
        } = e.target;


        setFormData((previous) => ({
            ...previous,
            [name]: value,
        }));
    };


    // ========================================================
    // HANDLE FORM SUBMIT
    // Sends enquiry data to Django
    // ========================================================

    const handleSubmit = async (e) => {

        // Prevent browser page refresh
        e.preventDefault();


        // ----------------------------------------------------
        // BASIC FRONTEND VALIDATION
        // ----------------------------------------------------

        if (!formData.name.trim()) {

            showToast(
                "Please enter your name.",
                "danger"
            );

            return;
        }


        if (!formData.phone.trim()) {

            showToast(
                "Please enter your phone number.",
                "danger"
            );

            return;
        }


        if (!formData.service) {

            showToast(
                "Please select a service.",
                "danger"
            );

            return;
        }


        try {

            // ------------------------------------------------
            // START SUBMITTING
            // ------------------------------------------------

            setSubmitting(true);


            // ------------------------------------------------
            // SEND DATA TO DJANGO
            //
            // POST:
            // /api/enquiries/
            // ------------------------------------------------

            await api.post(
                "/enquiries/",
                formData
            );


            // ------------------------------------------------
            // SUCCESS TOAST
            // ------------------------------------------------

            showToast(
                "Your enquiry has been submitted successfully. Our team will contact you shortly.",
                "success"
            );


            // ------------------------------------------------
            // RESET FORM
            // ------------------------------------------------

            setFormData({
                name: "",
                phone: "",
                email: "",
                service: "",
                pickup: "",
                destination: "",
                message: "",
            });


        } catch (error) {

            // ------------------------------------------------
            // LOG ERROR
            // ------------------------------------------------

            console.error(
                "Enquiry submission failed:",
                error
            );


            // ------------------------------------------------
            // SHOW BACKEND ERROR IN CONSOLE
            // Useful during development
            // ------------------------------------------------

            if (error.response?.data) {

                console.error(
                    "Backend response:",
                    error.response.data
                );
            }


            // ------------------------------------------------
            // ERROR TOAST
            // ------------------------------------------------

            showToast(
                "Unable to submit your enquiry. Please try again.",
                "danger"
            );


        } finally {

            // ------------------------------------------------
            // STOP SUBMITTING
            // ------------------------------------------------

            setSubmitting(false);
        }
    };


    // ========================================================
    // PAGE UI
    // ========================================================

    return (

        <main className="travel-contact-page">


            {/* =====================================================
                HERO
            ===================================================== */}

            <section className="travel-contact-hero">


                {/* VIDEO BACKGROUND */}

                <div className="travel-contact-hero-video">

                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        poster="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2200&q=85"
                    >

                        <source
                            src="https://cdn.coverr.co/videos/coverr-a-car-driving-on-a-coastal-road-1577/1080p.mp4"
                            type="video/mp4"
                        />

                    </video>

                </div>


                {/* HERO OVERLAY */}

                <div className="travel-contact-hero-overlay"></div>


                {/* HERO CONTENT */}

                <div className="travel-contact-hero-content">

                    <div className="travel-contact-hero-line"></div>

                    <span className="travel-contact-eyebrow">
                        GET IN TOUCH
                    </span>


                    <h1>
                        Let's plan your
                        <br />
                        <em>next journey.</em>
                    </h1>


                    <p>
                        Have a question, need a car or planning
                        an outstation journey? Our travel team
                        is ready to help you make every mile
                        effortless.
                    </p>


                    <div className="travel-contact-hero-actions">

                        <a
                            href="#contact-form"
                            className="travel-contact-hero-button"
                        >

                            Start a Conversation

                            <ArrowUpRight
                                size={17}
                            />

                        </a>


                        <a
                            href="tel:+917870787208"
                            className="travel-contact-hero-call"
                        >

                            <Phone size={15} />

                            +91 78707 87208

                        </a>

                    </div>

                </div>


                {/* HERO BOTTOM */}

                <div className="travel-contact-hero-bottom">

                    <span>
                        RANCHI · JHARKHAND · INDIA
                    </span>

                    <span>
                        TRAVEL MADE PERSONAL
                    </span>

                </div>

            </section>


            {/* =====================================================
                CONTACT INTRO
            ===================================================== */}

            <section className="travel-contact-intro">

                <div className="travel-contact-container">

                    <div className="travel-contact-intro-heading">

                        <span className="travel-contact-section-label">
                            CONTACT US
                        </span>


                        <h2>
                            We're here to
                            <br />
                            <em>help you.</em>
                        </h2>

                    </div>


                    <div className="travel-contact-intro-copy">

                        <div className="travel-contact-copy-line"></div>

                        <p>
                            Whether you're planning an airport
                            transfer, an outstation journey, a
                            family holiday or corporate travel,
                            tell us what you need and we'll help
                            you arrange the details.
                        </p>

                    </div>

                </div>

            </section>


            {/* =====================================================
                CONTACT INFORMATION
            ===================================================== */}

            <section className="travel-contact-info">

                <div className="travel-contact-container">

                    <div className="travel-contact-info-grid">


                        {/* =================================================
                            ADDRESS
                        ================================================= */}

                        <div className="travel-contact-info-card">

                            <div className="travel-contact-info-top">

                                <span>
                                    01
                                </span>

                                <div className="travel-contact-info-icon">

                                    <MapPin size={20} />

                                </div>

                            </div>


                            <span className="travel-contact-info-label">
                                VISIT US
                            </span>


                            <h3>
                                Our Office
                            </h3>


                            <p>
                                HB Road, Ayodhyapuri, Kokar
                                <br />
                                Ranchi, Jharkhand,
                                <br />
                                India
                            </p>


                            <a
                                href="https://maps.app.goo.gl/7Z2gZdA1ByccLxsJA"
                                target="_blank"
                                rel="noreferrer"
                            >

                                Get Directions

                                <ArrowUpRight
                                    size={15}
                                />

                            </a>

                        </div>


                        {/* =================================================
                            PHONE
                        ================================================= */}

                        <div className="travel-contact-info-card">

                            <div className="travel-contact-info-top">

                                <span>
                                    02
                                </span>

                                <div className="travel-contact-info-icon">

                                    <Phone size={20} />

                                </div>

                            </div>


                            <span className="travel-contact-info-label">
                                CALL US
                            </span>


                            <h3>
                                +91 78707 87208
                            </h3>


                            <p>
                                Available for bookings,
                                <br />
                                enquiries and travel assistance.
                            </p>


                            <a href="tel:+917870787208">

                                Call Now

                                <ArrowUpRight
                                    size={15}
                                />

                            </a>

                        </div>


                        {/* =================================================
                            EMAIL
                        ================================================= */}

                        <div className="travel-contact-info-card">

                            <div className="travel-contact-info-top">

                                <span>
                                    03
                                </span>

                                <div className="travel-contact-info-icon">

                                    <Mail size={20} />

                                </div>

                            </div>


                            <span className="travel-contact-info-label">
                                EMAIL US
                            </span>


                            <h3 className="travel-contact-email">
                                dhanotravels@gmail.com
                            </h3>


                            <p>
                                Send us your travel requirements
                                <br />
                                and we'll get back to you.
                            </p>


                            <a href="mailto:dhanotravels@gmail.com">

                                Send Email

                                <ArrowUpRight
                                    size={15}
                                />

                            </a>

                        </div>


                        {/* =================================================
                            SUPPORT
                        ================================================= */}

                        <div className="travel-contact-info-card">

                            <div className="travel-contact-info-top">

                                <span>
                                    04
                                </span>

                                <div className="travel-contact-info-icon">

                                    <Clock3 size={20} />

                                </div>

                            </div>


                            <span className="travel-contact-info-label">
                                SUPPORT
                            </span>


                            <h3>
                                24 / 7
                            </h3>


                            <p>
                                Our support team is available
                                <br />
                                around the clock for assistance.
                            </p>


                            <a href="tel:+917870787208">

                                Get Support

                                <ArrowUpRight
                                    size={15}
                                />

                            </a>

                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================================
                FORM + MAP
            ===================================================== */}

            <section
                className="travel-contact-form-section"
                id="contact-form"
            >

                <div className="travel-contact-container">

                    <div className="travel-contact-form-grid">


                        {/* =================================================
                            FORM
                        ================================================= */}

                        <div className="travel-contact-form-wrapper">

                            <span className="travel-contact-form-label">
                                SEND AN ENQUIRY
                            </span>


                            <h2>
                                Tell us about
                                <br />
                                <em>your journey.</em>
                            </h2>


                            <p className="travel-contact-form-intro">
                                Share a few details about your trip
                                and our team will get in touch with
                                you shortly.
                            </p>


                            {/* =================================================
                                CONTACT FORM
                            ================================================= */}

                            <form
                                className="travel-contact-form"
                                onSubmit={handleSubmit}
                            >


                                {/* =================================================
                                    NAME + PHONE
                                ================================================= */}

                                <div className="travel-contact-form-row">


                                    {/* NAME */}

                                    <div className="travel-contact-form-group">

                                        <label>
                                            YOUR NAME
                                        </label>


                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Enter your name"
                                            value={
                                                formData.name
                                            }
                                            onChange={
                                                handleChange
                                            }
                                            required
                                        />

                                    </div>


                                    {/* PHONE */}

                                    <div className="travel-contact-form-group">

                                        <label>
                                            PHONE NUMBER
                                        </label>


                                        <input
                                            type="tel"
                                            name="phone"
                                            placeholder="+91 XXXXX XXXXX"
                                            value={
                                                formData.phone
                                            }
                                            onChange={
                                                handleChange
                                            }
                                            required
                                        />

                                    </div>

                                </div>


                                {/* =================================================
                                    EMAIL + SERVICE
                                ================================================= */}

                                <div className="travel-contact-form-row">


                                    {/* EMAIL */}

                                    <div className="travel-contact-form-group">

                                        <label>
                                            EMAIL ADDRESS
                                        </label>


                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="you@example.com"
                                            value={
                                                formData.email
                                            }
                                            onChange={
                                                handleChange
                                            }
                                        />

                                    </div>


                                    {/* SERVICE */}

                                    <div className="travel-contact-form-group">

                                        <label>
                                            SERVICE
                                        </label>


                                        <select
                                            name="service"
                                            value={
                                                formData.service
                                            }
                                            onChange={
                                                handleChange
                                            }
                                            required
                                        >

                                            <option
                                                value=""
                                                disabled
                                            >
                                                Select a service
                                            </option>


                                            <option value="Holiday Package">
                                                Holiday Package
                                            </option>


                                            <option value="Hotel Booking">
                                                Hotel Booking
                                            </option>


                                            <option value="Flight Booking">
                                                Flight Booking
                                            </option>


                                            <option value="Airport Transfer">
                                                Airport Transfer
                                            </option>


                                            <option value="Outstation Trip">
                                                Outstation Trip
                                            </option>


                                            <option value="Local Car Rental">
                                                Local Car Rental
                                            </option>


                                            <option value="Corporate Travel">
                                                Corporate Travel
                                            </option>

                                        </select>

                                    </div>

                                </div>


                                {/* =================================================
                                    PICKUP + DESTINATION
                                ================================================= */}

                                <div className="travel-contact-form-row">


                                    {/* PICKUP */}

                                    <div className="travel-contact-form-group">

                                        <label>
                                            PICKUP LOCATION
                                        </label>


                                        <input
                                            type="text"
                                            name="pickup"
                                            placeholder="Where will you start?"
                                            value={
                                                formData.pickup
                                            }
                                            onChange={
                                                handleChange
                                            }
                                        />

                                    </div>


                                    {/* DESTINATION */}

                                    <div className="travel-contact-form-group">

                                        <label>
                                            DESTINATION
                                        </label>


                                        <input
                                            type="text"
                                            name="destination"
                                            placeholder="Where are you going?"
                                            value={
                                                formData.destination
                                            }
                                            onChange={
                                                handleChange
                                            }
                                        />

                                    </div>

                                </div>


                                {/* =================================================
                                    MESSAGE
                                ================================================= */}

                                <div className="travel-contact-form-group">

                                    <label>
                                        MESSAGE
                                    </label>


                                    <textarea
                                        name="message"
                                        rows="5"
                                        placeholder="Tell us about your journey..."
                                        value={
                                            formData.message
                                        }
                                        onChange={
                                            handleChange
                                        }
                                    ></textarea>

                                </div>


                                {/* =================================================
                                    SUBMIT BUTTON
                                ================================================= */}

                                <button
                                    type="submit"
                                    className="travel-contact-submit"
                                    disabled={submitting}
                                >

                                    {submitting
                                        ? "Sending..."
                                        : "Send Enquiry"}


                                    {!submitting && (
                                        <ArrowUpRight
                                            size={18}
                                        />
                                    )}

                                </button>

                            </form>

                        </div>


                        {/* =================================================
                            MAP
                        ================================================= */}

                        <div className="travel-contact-map-wrapper">

                            <div className="travel-contact-map-header">

                                <div>

                                    <span>
                                        FIND US
                                    </span>

                                    <h3>
                                        Visit our office
                                    </h3>

                                </div>


                                <div className="travel-contact-map-icon">

                                    <MapPin size={20} />

                                </div>

                            </div>


                            <div className="travel-contact-map">

                                <iframe
                                    title="Dhano Travels Office Location"
                                    src="https://www.google.com/maps?q=HB+Road,+Kokar,+Ranchi,+Jharkhand,+India&output=embed"
                                    loading="lazy"
                                    allowFullScreen
                                ></iframe>

                            </div>


                            <div className="travel-contact-map-address">

                                <div className="travel-contact-address-icon">

                                    <MapPin size={17} />

                                </div>


                                <div>

                                    <strong>
                                        Dhano Travels Co.
                                    </strong>


                                    <span>
                                        HB Road, Ayodhyapuri,
                                        Kokar Ranchi,
                                        Jharkhand, India
                                    </span>

                                </div>

                            </div>


                            <a
                                href="https://www.google.com/maps?q=Main+Road,+Ranchi,+Jharkhand,+India"
                                target="_blank"
                                rel="noreferrer"
                                className="travel-contact-map-button"
                            >

                                Open in Google Maps

                                <ArrowUpRight
                                    size={16}
                                />

                            </a>

                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================================
                QUICK CONTACT
            ===================================================== */}

            <section className="travel-contact-quick">

                <div className="travel-contact-container">

                    <div className="travel-contact-quick-inner">

                        <div className="travel-contact-quick-icon">

                            <MessageCircle
                                size={25}
                            />

                        </div>


                        <div className="travel-contact-quick-content">

                            <span>
                                NEED AN IMMEDIATE RESPONSE?
                            </span>

                            <h2>
                                Talk to our travel team.
                            </h2>

                        </div>


                        <a
                            href="tel:+917870787208"
                            className="travel-contact-quick-button"
                        >

                            Call Us

                            <Phone size={16} />

                        </a>

                    </div>

                </div>

            </section>


            {/* =====================================================
                FINAL CTA
            ===================================================== */}

            <section className="travel-contact-final">

                <div className="travel-contact-final-bg"></div>

                <div className="travel-contact-final-overlay"></div>


                <div className="travel-contact-final-content">

                    <span>
                        READY TO TRAVEL?
                    </span>


                    <h2>
                        Your next journey
                        <br />
                        starts <em>here.</em>
                    </h2>


                    <a href="/booking">

                        Plan Your Journey

                        <ArrowUpRight
                            size={18}
                        />

                    </a>

                </div>

            </section>

        </main>
    );
};


export default Contact;