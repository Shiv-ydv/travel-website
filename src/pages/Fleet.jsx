import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
    ArrowUpRight,
    Users,
    Briefcase,
    Snowflake,
    ShieldCheck,
    Check,
    RefreshCw,
} from "lucide-react";

import api from "../services/api";

import "./Fleet.css";


const Fleet = () => {

    // ============================================================
    // STATE
    // ============================================================

    const [cars, setCars] = useState([]);

    const [activeFilter, setActiveFilter] =
        useState("all");

    const [loading, setLoading] =
        useState(true);

    const [error, setError] =
        useState("");


    // ============================================================
    // GET VEHICLES FROM API
    // ============================================================

    const fetchVehicles = async () => {

        try {

            setLoading(true);

            setError("");

            const response =
                await api.get("/vehicles/");


            /*
            |--------------------------------------------------------------------------
            | DRF PAGINATION SUPPORT
            |--------------------------------------------------------------------------
            */

            const vehicleData =
                Array.isArray(response.data)
                    ? response.data
                    : response.data.results || [];


            /*
            |--------------------------------------------------------------------------
            | ONLY ACTIVE VEHICLES
            |--------------------------------------------------------------------------
            */

            const activeVehicles =
                vehicleData.filter(
                    (vehicle) =>
                        vehicle.status === true
                );


            setCars(activeVehicles);


        } catch (error) {

            console.error(
                "Vehicle API error:",
                error
            );

            setError(
                "Unable to load vehicles. Please try again."
            );

        } finally {

            setLoading(false);

        }

    };


    // ============================================================
    // LOAD VEHICLES
    // ============================================================

    useEffect(() => {

        fetchVehicles();

    }, []);


    // ============================================================
    // IMAGE URL
    // ============================================================

    const getImageUrl = (car) => {

        const image =
            car.image_url ||
            car.image;


        if (!image) {

            return "/images/default-car.jpg";

        }


        if (
            image.startsWith("http://") ||
            image.startsWith("https://")
        ) {

            return image;

        }


        return `http://127.0.0.1:8000${image}`;

    };


    // ============================================================
    // CATEGORY
    // ============================================================

    const getCategory = (car) => {

        if (car.category) {
            return car.category;
        }

        if (car.type) {

            return car.type
                .toString()
                .toUpperCase();

        }

        return "Vehicle";

    };


    // ============================================================
    // FILTER
    // ============================================================

    const filteredCars =
        activeFilter === "all"
            ? cars
            : cars.filter((car) => {

                const type =
                    (
                        car.type ||
                        car.category ||
                        ""
                    )
                        .toString()
                        .toLowerCase();

                const category =
                    (
                        car.category ||
                        ""
                    )
                        .toString()
                        .toLowerCase();


                /*
                |--------------------------------------------------------------------------
                | SUV
                |--------------------------------------------------------------------------
                */

                if (activeFilter === "suv") {

                    return (
                        type.includes("suv") ||
                        category.includes("suv")
                    );

                }


                /*
                |--------------------------------------------------------------------------
                | SEDAN
                |--------------------------------------------------------------------------
                */

                if (activeFilter === "sedan") {

                    return (
                        type.includes("sedan") ||
                        category.includes("sedan")
                    );

                }


                /*
                |--------------------------------------------------------------------------
                | MPV
                |--------------------------------------------------------------------------
                */

                if (activeFilter === "mpv") {

                    return (
                        type.includes("mpv") ||
                        category.includes("mpv")
                    );

                }


                /*
                |--------------------------------------------------------------------------
                | LUXURY
                |--------------------------------------------------------------------------
                */

                if (activeFilter === "luxury") {

                    return (
                        type.includes("luxury") ||
                        category.includes("luxury") ||
                        car.tag
                            ?.toString()
                            .toLowerCase()
                            .includes("premium")
                    );

                }


                return true;

            });


    // ============================================================
    // LOADING
    // ============================================================

    if (loading) {

        return (

            <main className="fleet-page">

                <section className="fleet-list-section">

                    <div
                        className="fleet-container"
                        style={{
                            minHeight: "400px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >

                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "10px",
                            }}
                        >

                            <RefreshCw
                                size={22}
                                className="fleet-loading-icon"
                            />

                            <span>
                                Loading vehicles...
                            </span>

                        </div>

                    </div>

                </section>

            </main>

        );

    }


    // ============================================================
    // ERROR
    // ============================================================

    if (error) {

        return (

            <main className="fleet-page">

                <section className="fleet-list-section">

                    <div
                        className="fleet-container"
                        style={{
                            minHeight: "400px",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "15px",
                        }}
                    >

                        <p>
                            {error}
                        </p>


                        <button
                            type="button"
                            onClick={fetchVehicles}
                            style={{
                                padding: "11px 20px",
                                border: "none",
                                cursor: "pointer",
                            }}
                        >
                            Try Again
                        </button>

                    </div>

                </section>

            </main>

        );

    }


    // ============================================================
    // PAGE
    // ============================================================

    return (

        <main className="fleet-page">


            {/* ========================================================
                HERO
            ======================================================== */}

            <section className="fleet-hero">

                <div className="fleet-hero-bg"></div>

                <div className="fleet-hero-overlay"></div>


                <div className="fleet-hero-content">

                    <span className="fleet-eyebrow">
                        OUR FLEET
                    </span>


                    <h1>
                        Choose the right car
                        <br />
                        <em>for your journey.</em>
                    </h1>


                    <p>
                        From comfortable city rides to
                        premium SUVs, choose a vehicle
                        that fits your journey, comfort
                        and travel needs.
                    </p>

                </div>


                <div className="fleet-hero-bottom">

                    <span>
                        Comfort
                    </span>

                    <span>
                        Safety
                    </span>

                    <span>
                        Reliable Travel
                    </span>

                </div>

            </section>



            {/* ========================================================
                INTRO
            ======================================================== */}

            <section className="fleet-intro">

                <div className="fleet-container">

                    <div className="fleet-intro-label">

                        <span>
                            01
                        </span>

                        <span>
                            FIND YOUR RIDE
                        </span>

                    </div>


                    <div className="fleet-intro-content">

                        <h2>
                            A car for every
                            <br />
                            <em>kind of journey.</em>
                        </h2>


                        <p>
                            Whether you're travelling
                            across the city, heading
                            outstation with family, or
                            looking for a premium ride,
                            our fleet is designed around
                            your comfort.
                        </p>

                    </div>

                </div>

            </section>



            {/* ========================================================
                FILTER
            ======================================================== */}

            <section className="fleet-list-section">

                <div className="fleet-container">


                    <div className="fleet-toolbar">


                        {/* FILTER BUTTONS */}

                        <div className="fleet-tabs">


                            <button
                                className={
                                    activeFilter === "all"
                                        ? "active"
                                        : ""
                                }
                                onClick={() =>
                                    setActiveFilter("all")
                                }
                            >
                                All Cars
                            </button>


                            <button
                                className={
                                    activeFilter === "sedan"
                                        ? "active"
                                        : ""
                                }
                                onClick={() =>
                                    setActiveFilter("sedan")
                                }
                            >
                                Sedan
                            </button>


                            <button
                                className={
                                    activeFilter === "suv"
                                        ? "active"
                                        : ""
                                }
                                onClick={() =>
                                    setActiveFilter("suv")
                                }
                            >
                                SUV
                            </button>


                            <button
                                className={
                                    activeFilter === "mpv"
                                        ? "active"
                                        : ""
                                }
                                onClick={() =>
                                    setActiveFilter("mpv")
                                }
                            >
                                MPV
                            </button>


                            <button
                                className={
                                    activeFilter === "luxury"
                                        ? "active"
                                        : ""
                                }
                                onClick={() =>
                                    setActiveFilter("luxury")
                                }
                            >
                                Luxury
                            </button>

                        </div>


                        {/* RESULT COUNT */}

                        <div className="fleet-result">

                            {filteredCars.length
                                .toString()
                                .padStart(2, "0")
                            }

                            {" "}

                            Vehicles

                        </div>

                    </div>



                    {/* ==================================================
                        CAR GRID
                    ================================================== */}

                    <div className="fleet-grid">


                        {filteredCars.length === 0 ? (

                            <div
                                style={{
                                    gridColumn:
                                        "1 / -1",
                                    textAlign:
                                        "center",
                                    padding:
                                        "70px 20px",
                                }}
                            >

                                <h3>
                                    No vehicles found
                                </h3>

                                <p>
                                    No vehicles are
                                    available in this
                                    category.
                                </p>

                            </div>

                        ) : (

                            filteredCars.map((car) => (

                                <article
                                    className="fleet-card"
                                    key={car.id}
                                >


                                    {/* ==================================
                                        IMAGE
                                    ================================== */}

                                    <div className="fleet-card-image">

                                        <img
                                            src={getImageUrl(
                                                car
                                            )}
                                            alt={
                                                car.name
                                            }
                                            onError={(
                                                e
                                            ) => {

                                                e.currentTarget.src =
                                                    "/images/default-car.jpg";

                                            }}
                                        />


                                        {/* TAG */}

                                        {car.tag && (

                                            <span className="fleet-card-tag">

                                                {
                                                    car.tag
                                                }

                                            </span>

                                        )}


                                        {/* ARROW */}

                                        <button
                                            type="button"
                                            className="fleet-card-arrow"
                                        >

                                            <ArrowUpRight
                                                size={20}
                                            />

                                        </button>

                                    </div>



                                    {/* ==================================
                                        BODY
                                    ================================== */}

                                    <div className="fleet-card-body">


                                        {/* CATEGORY */}

                                        <span className="fleet-card-category">

                                            {
                                                getCategory(
                                                    car
                                                )
                                            }

                                        </span>


                                        {/* NAME */}

                                        <h3>

                                            {
                                                car.name
                                            }

                                        </h3>



                                        {/* =================================
                                            SPECS
                                        ================================= */}

                                        <div className="fleet-card-specs">


                                            {/* SEATS */}

                                            <div>

                                                <Users
                                                    size={17}
                                                />

                                                <span>

                                                    {
                                                        car.seats
                                                    }

                                                    {" "}

                                                    Seats

                                                </span>

                                            </div>


                                            {/* LUGGAGE */}

                                            <div>

                                                <Briefcase
                                                    size={17}
                                                />

                                                <span>

                                                    {
                                                        car.luggage
                                                    }

                                                    {" "}

                                                    Bags

                                                </span>

                                            </div>


                                            {/* AC */}

                                            <div>

                                                <Snowflake
                                                    size={17}
                                                />

                                                <span>
                                                    AC
                                                </span>

                                            </div>

                                        </div>



                                        {/* =================================
                                            FEATURES
                                        ================================= */}

                                        <div className="fleet-card-features">


                                            {/* AC */}

                                            <span>

                                                <Check
                                                    size={13}
                                                />

                                                AC

                                            </span>


                                            {/* COMFORT */}

                                            <span>

                                                <Check
                                                    size={13}
                                                />

                                                Comfortable

                                            </span>


                                            {/* DRIVER */}

                                            <span>

                                                <Check
                                                    size={13}
                                                />

                                                Professional
                                                Driver

                                            </span>

                                        </div>



                                        {/* =================================
                                            BOTTOM
                                        ================================= */}

                                        <div className="fleet-card-bottom">


                                            {/* PRICE */}

                                            <div>

                                                {car.price && (

                                                    <>

                                                        <small>
                                                            Starting from
                                                        </small>

                                                        <strong>
                                                            ₹
                                                            {
                                                                car.price
                                                            }
                                                            KM
                                                        </strong>

                                                    </>

                                                )}

                                            </div>


                                            {/* BOOK BUTTON */}

                                            <Link
                                                to="/booking"
                                                state={{
                                                    vehicle:
                                                        car,
                                                }}
                                                className="fleet-book"
                                            >

                                                Book Now

                                                <ArrowUpRight
                                                    size={16}
                                                />

                                            </Link>

                                        </div>

                                    </div>

                                </article>

                            ))

                        )}

                    </div>

                </div>

            </section>



            {/* ========================================================
                FEATURES
            ======================================================== */}

            <section className="fleet-features-section">

                <div className="fleet-container">


                    <div className="fleet-section-heading">

                        <span>
                            WHY OUR FLEET
                        </span>


                        <h2>
                            Travel with
                            <br />
                            <em>complete confidence.</em>
                        </h2>

                    </div>



                    <div className="fleet-features-grid">


                        <div className="fleet-feature">

                            <ShieldCheck
                                size={30}
                            />

                            <h3>
                                Safety First
                            </h3>

                            <p>
                                Well-maintained
                                vehicles and
                                experienced drivers
                                for a safe journey.
                            </p>

                        </div>



                        <div className="fleet-feature">

                            <Snowflake
                                size={30}
                            />

                            <h3>
                                Comfortable Rides
                            </h3>

                            <p>
                                Clean,
                                air-conditioned
                                vehicles designed
                                for comfortable
                                travel.
                            </p>

                        </div>



                        <div className="fleet-feature">

                            <Users
                                size={30}
                            />

                            <h3>
                                Professional Drivers
                            </h3>

                            <p>
                                Trained and courteous
                                drivers focused on
                                your travel experience.
                            </p>

                        </div>



                        <div className="fleet-feature">

                            <Briefcase
                                size={30}
                            />

                            <h3>
                                Every Journey
                            </h3>

                            <p>
                                Cars for airport
                                transfers, business
                                travel and outstation
                                trips.
                            </p>

                        </div>

                    </div>

                </div>

            </section>



            {/* ========================================================
                CTA
            ======================================================== */}

            <section className="fleet-cta">

                <div className="fleet-cta-overlay"></div>


                <div className="fleet-cta-content">

                    <span>
                        READY WHEN YOU ARE
                    </span>


                    <h2>
                        Your perfect ride
                        <br />
                        is waiting.
                    </h2>


                    <p>
                        Choose your car and let us
                        take care of the journey.
                    </p>


                    <Link
                        to="/fleet"
                    >
                        Book Your Car
                        <ArrowUpRight
                            size={18}
                        />
                    </Link>

                </div>

            </section>

        </main>

    );

};


export default Fleet;