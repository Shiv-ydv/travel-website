import { useState } from "react";
import { useLocation } from "react-router-dom";

import {
    ArrowRight,
    CalendarDays,
    Clock3,
    MapPin,
    Users,
    CarFront,
    Phone,
    Mail,
    User,
} from "lucide-react";

import api from "../services/api";
import "./Booking.css";


const Booking = () => {

    const location = useLocation();

    /*
    |--------------------------------------------------------------------------
    | SELECTED VEHICLE
    |--------------------------------------------------------------------------
    | CarFleet.jsx se:
    |
    | <Link
    |     to="/booking"
    |     state={{ vehicle: car }}
    | >
    |
    */

    const selectedVehicle =
        location.state?.vehicle || null;


    /*
    |--------------------------------------------------------------------------
    | FORM STATE
    |--------------------------------------------------------------------------
    */

    const [form, setForm] = useState({
        pickup: "",
        destination: "",
        date: "",
        time: "",
        passengers: "1",
        name: "",
        phone: "",
        email: "",
    });


    const [loading, setLoading] = useState(false);


    /*
    |--------------------------------------------------------------------------
    | HANDLE INPUT CHANGE
    |--------------------------------------------------------------------------
    */

    const handleChange = (e) => {

        const { name, value } = e.target;

        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));

    };


    /*
    |--------------------------------------------------------------------------
    | IMAGE URL
    |--------------------------------------------------------------------------
    */

    const getVehicleImage = () => {

        if (!selectedVehicle) {
            return "";
        }

        const image =
            selectedVehicle.image_url ||
            selectedVehicle.image;

        if (!image) {
            return "";
        }

        if (
            image.startsWith("http://") ||
            image.startsWith("https://")
        ) {
            return image;
        }

        return `http://127.0.0.1:8000${image}`;
    };


    /*
    |--------------------------------------------------------------------------
    | CREATE BOOKING API
    |--------------------------------------------------------------------------
    */

    const createBooking = async (bookingData) => {

        const response = await api.post(
            "/bookings/",
            bookingData
        );

        return response.data;
    };


    /*
    |--------------------------------------------------------------------------
    | SUBMIT BOOKING
    |--------------------------------------------------------------------------
    */

    const handleSubmit = async (e) => {

        e.preventDefault();


        /*
        |--------------------------------------------------------------------------
        | BASIC VALIDATION
        |--------------------------------------------------------------------------
        */

        if (!form.pickup.trim()) {

            alert("Please enter pickup location.");

            return;
        }


        if (!form.destination.trim()) {

            alert("Please enter destination.");

            return;
        }


        if (!form.date) {

            alert("Please select travel date.");

            return;
        }


        if (!form.time) {

            alert("Please select pickup time.");

            return;
        }


        if (!form.name.trim()) {

            alert("Please enter your name.");

            return;
        }


        if (!form.phone.trim()) {

            alert("Please enter your phone number.");

            return;
        }


        /*
        |--------------------------------------------------------------------------
        | BOOKING DATA
        |--------------------------------------------------------------------------
        |
        | IMPORTANT:
        |
        | We send vehicle ID, NOT vehicle name from frontend.
        |
        | Backend will get the vehicle from database and save:
        |
        | vehicle_id
        | vehicle_name
        |
        */

        const bookingData = {

            pickup:
                form.pickup.trim(),

            destination:
                form.destination.trim(),

            date:
                form.date,

            time:
                form.time,

            passengers:
                Number(form.passengers),

            name:
                form.name.trim(),

            phone:
                form.phone.trim(),

            email:
                form.email.trim() || null,

            vehicle:
                selectedVehicle?.id || null,
        };


        console.log(
            "Booking data sending:",
            bookingData
        );


        try {

            setLoading(true);


            /*
            |--------------------------------------------------------------------------
            | POST TO DJANGO
            |--------------------------------------------------------------------------
            */

            const response =
                await createBooking(
                    bookingData
                );


            console.log(
                "Booking saved successfully:",
                response
            );


            /*
            |--------------------------------------------------------------------------
            | SUCCESS
            |--------------------------------------------------------------------------
            */

            alert(
                "Booking request submitted successfully!"
            );


            /*
            |--------------------------------------------------------------------------
            | CLEAR FORM
            |--------------------------------------------------------------------------
            */

            setForm({
                pickup: "",
                destination: "",
                date: "",
                time: "",
                passengers: "1",
                name: "",
                phone: "",
                email: "",
            });


        } catch (error) {

            console.error(
                "Booking error:",
                error
            );


            console.error(
                "Backend response:",
                error.response?.data
            );


            /*
            |--------------------------------------------------------------------------
            | BACKEND ERROR
            |--------------------------------------------------------------------------
            */

            const backendErrors =
                error.response?.data;


            if (
                backendErrors &&
                typeof backendErrors === "object"
            ) {

                const firstError =
                    Object.values(
                        backendErrors
                    )[0];


                if (Array.isArray(firstError)) {

                    alert(
                        firstError[0]
                    );

                } else if (
                    typeof firstError === "string"
                ) {

                    alert(
                        firstError
                    );

                } else {

                    alert(
                        "Please check your booking details."
                    );
                }

            } else {

                alert(
                    "Unable to submit booking. Please try again."
                );
            }


        } finally {

            setLoading(false);

        }

    };


    /*
    |--------------------------------------------------------------------------
    | RENDER
    |--------------------------------------------------------------------------
    */

    return (

        <div className="booking-page">


            {/* ============================================================
                HERO VIDEO
            ============================================================ */}

            <section className="booking-hero">

                <div className="booking-video">

                    <iframe
                        src="https://www.youtube.com/embed/nuuPieIRVEs?autoplay=1&mute=1&loop=1&playlist=nuuPieIRVEs&controls=0&rel=0"
                        title="Ranchi Travel"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                    />

                </div>


                <div className="booking-video-overlay"></div>


                <div className="booking-hero-content">

                    <h1>
                        Your journey
                        <br />
                        starts here.
                    </h1>


                    <p>
                        Tell us where you're going.
                        We'll take care of the rest.
                    </p>

                </div>

            </section>



            {/* ============================================================
                BOOKING SECTION
            ============================================================ */}

            <section className="booking-section">

                <div className="booking-card">


                    {/* ====================================================
                        CARD HEADER
                    ==================================================== */}

                    <div className="booking-card-header">

                        <div>

                            <span>
                                PLAN YOUR TRIP
                            </span>

                            <h2>
                                Book your ride
                            </h2>

                        </div>


                        {/* SELECTED VEHICLE NAME */}

                        {selectedVehicle && (

                            <div className="selected-vehicle">

                                <CarFront size={20} />

                                <div>

                                    <small>
                                        SELECTED VEHICLE
                                    </small>

                                    <strong>
                                        {selectedVehicle.name}
                                    </strong>

                                </div>

                            </div>

                        )}

                    </div>



                    {/* ====================================================
                        BOOKING FORM
                    ==================================================== */}

                    <form
                        onSubmit={handleSubmit}
                        className="booking-form"
                    >


                        {/* ==================================================
                            PICKUP / DESTINATION
                        ================================================== */}

                        <div className="booking-grid">


                            {/* PICKUP */}

                            <div className="booking-field">

                                <label>
                                    Pickup Location
                                </label>

                                <div className="field-input">

                                    <MapPin size={18} />

                                    <input
                                        type="text"
                                        name="pickup"
                                        placeholder="Enter pickup location"
                                        value={form.pickup}
                                        onChange={handleChange}
                                        required
                                    />

                                </div>

                            </div>



                            {/* DESTINATION */}

                            <div className="booking-field">

                                <label>
                                    Drop Location
                                </label>

                                <div className="field-input">

                                    <MapPin size={18} />

                                    <input
                                        type="text"
                                        name="destination"
                                        placeholder="Where are you going?"
                                        value={form.destination}
                                        onChange={handleChange}
                                        required
                                    />

                                </div>

                            </div>

                        </div>



                        {/* ==================================================
                            DATE / TIME / PASSENGERS
                        ================================================== */}

                        <div className="booking-grid three">


                            {/* DATE */}

                            <div className="booking-field">

                                <label>
                                    Travel Date
                                </label>

                                <div className="field-input">

                                    <CalendarDays size={18} />

                                    <input
                                        type="date"
                                        name="date"
                                        value={form.date}
                                        onChange={handleChange}
                                        min={
                                            new Date()
                                                .toISOString()
                                                .split("T")[0]
                                        }
                                        required
                                    />

                                </div>

                            </div>



                            {/* TIME */}

                            <div className="booking-field">

                                <label>
                                    Pickup Time
                                </label>

                                <div className="field-input">

                                    <Clock3 size={18} />

                                    <input
                                        type="time"
                                        name="time"
                                        value={form.time}
                                        onChange={handleChange}
                                        required
                                    />

                                </div>

                            </div>



                            {/* PASSENGERS */}

                            <div className="booking-field">

                                <label>
                                    Passengers
                                </label>

                                <div className="field-input">

                                    <Users size={18} />

                                    <input
                                        type="number"
                                        name="passengers"
                                        min="1"
                                        value={form.passengers}
                                        onChange={handleChange}
                                        required
                                    />

                                </div>

                            </div>

                        </div>



                        {/* ==================================================
                            CUSTOMER DETAILS DIVIDER
                        ================================================== */}

                        <div className="booking-divider">

                            <span>
                                YOUR DETAILS
                            </span>

                        </div>



                        {/* ==================================================
                            CUSTOMER DETAILS
                        ================================================== */}

                        <div className="booking-grid three">


                            {/* NAME */}

                            <div className="booking-field">

                                <label>
                                    Full Name
                                </label>

                                <div className="field-input">

                                    <User size={18} />

                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Your name"
                                        value={form.name}
                                        onChange={handleChange}
                                        required
                                    />

                                </div>

                            </div>



                            {/* PHONE */}

                            <div className="booking-field">

                                <label>
                                    Phone Number
                                </label>

                                <div className="field-input">

                                    <Phone size={18} />

                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="+91 XXXXX XXXXX"
                                        value={form.phone}
                                        onChange={handleChange}
                                        required
                                    />

                                </div>

                            </div>



                            {/* EMAIL */}

                            <div className="booking-field">

                                <label>
                                    Email
                                </label>

                                <div className="field-input">

                                    <Mail size={18} />

                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="you@email.com"
                                        value={form.email}
                                        onChange={handleChange}
                                    />

                                </div>

                            </div>

                        </div>



                        {/* ==================================================
                            SELECTED VEHICLE SUMMARY
                        ================================================== */}

                        {selectedVehicle && (

                            <div className="vehicle-summary">


                                {/* IMAGE */}

                                <div className="vehicle-summary-image">

                                    {getVehicleImage() ? (

                                        <img
                                            src={getVehicleImage()}
                                            alt={
                                                selectedVehicle.name
                                            }
                                        />

                                    ) : (

                                        <div>
                                            No Image
                                        </div>

                                    )}

                                </div>



                                {/* VEHICLE DETAILS */}

                                <div className="vehicle-summary-content">

                                    <small>
                                        YOUR VEHICLE
                                    </small>

                                    <h3>
                                        {selectedVehicle.name}
                                    </h3>

                                    <p>
                                        {selectedVehicle.type}
                                    </p>

                                </div>



                                {/* PRICE */}

                                <div className="vehicle-summary-price">

                                    <small>
                                        STARTING FROM
                                    </small>

                                    <strong>
                                        ₹
                                        {selectedVehicle.price}
                                    </strong>

                                    <span>
                                        / KM
                                    </span>

                                </div>

                            </div>

                        )}



                        {/* ==================================================
                            SUBMIT BUTTON
                        ================================================== */}

                        <button
                            type="submit"
                            className="booking-submit"
                            disabled={loading}
                        >

                            {loading
                                ? "Submitting..."
                                : "Request Booking"
                            }

                            {!loading && (
                                <ArrowRight size={19} />
                            )}

                        </button>



                        {/* ==================================================
                            NOTE
                        ================================================== */}

                        <p className="booking-note">

                            No payment required now.
                            Our team will contact you
                            to confirm your booking.

                        </p>


                    </form>

                </div>

            </section>

        </div>
    );
};


export default Booking;