import { useState } from "react";

import {
    ArrowUpRight,
    MapPin,
    Clock3,
    Route,
    CarFront,
} from "lucide-react";

import "./Destinations.css";

/* =========================================================
   DESTINATION IMAGES
========================================================= */

// Ranchi Areas
import jonhaFall from "../assets/destination/jonhafall.jpg";
import dassam from "../assets/destination/dassam.png";
import hundru from "../assets/destination/dassam.png";
import patratu from "../assets/destination/patratu.png";
import netarhat from "../assets/destination/netrahat.png";


// Kolkata & West Bengal
import digha from "../assets/destination/digha.png";
import victoria from "../assets/destination/victoria.png";
import mandarmani from "../assets/destination/mandarmani.png";


// Odisha 
import puriBeach from "../assets/destination/puriBeach.png";
import puriTemple from "../assets/destination/puriTemple.png";
import puriVillage from "../assets/destination/puriVillage.png";
/* =========================================================
   DESTINATIONS DATA
========================================================= */

const destinations = [
    {
        number: "01",
        name: "Jonha Falls",
        city: "Ranchi",
        state: "Jharkhand",
        distance: "40 KM",
        time: "1.5 hrs",
        image: jonhaFall,
    },

    {
        number: "02",
        name: "Dassam Falls",
        city: "Ranchi",
        state: "Jharkhand",
        distance: "40 KM",
        time: "1.5 hrs",
        image: dassam,
    },

    {
        number: "03",
        name: "Hundru Falls",
        city: "Ranchi",
        state: "Jharkhand",
        distance: "45 KM",
        time: "1.5 hrs",
        image: hundru,
    },

    {
        number: "04",
        name: "Patratu Valley",
        city: "Ranchi",
        state: "Jharkhand",
        distance: "40 KM",
        time: "1.5 hrs",
        image: patratu,
    },

    {
        number: "05",
        name: "Netarhat",
        city: "Latehar",
        state: "Jharkhand",
        distance: "155 KM",
        time: "4.5 hrs",
        image: netarhat,
    },

    {
        number: "06",
        name: "Digha Beach",
        city: "Kolkata",
        state: "West Bengal",
        distance: "400+ KM",
        time: "8 hrs",
        image: digha,
    },

    {
        number: "07",
        name: "Victoria Memorial",
        city: "Kolkata",
        state: "West Bengal",
        distance: "600+ KM",
        time: "14 hrs",
        image: victoria,
    },

    {
        number: "08",
        name: "Mandarmani Beach",
        city: "Kolkata",
        state: "West Bengal",
        distance: "350+ KM",
        time: "7 hrs",
        image: mandarmani,
    },


    {
        number: "09",
        name: "Puri Beach",
        city: "Puri",
        state: "Odisha",
        distance: "430+ KM",
        time: "9 hrs",
        image: puriBeach
    },

    {
        number: "10",
        name: "Puri Temple",
        city: "Puri",
        state: "Odisha",
        distance: "430+ KM",
        time: "9 hrs",
        image: puriTemple
    },
    
    {
        number: "11",
        name: "Raghurajpur Artist Village",
        city: "Puri",
        state: "Odisha",
        distance: "430+ KM",
        time: "9 hrs",
        image: puriVillage
    },
   

];


/* =========================================================
   JOURNEY TYPES
========================================================= */

const routeTypes = [
    {
        icon: Route,
        title: "One-Way Trips",
        text:
            "Travel comfortably to your destination without booking a return journey.",
    },

    {
        icon: CarFront,
        title: "Round Trips",
        text:
            "Perfect for family travel, sightseeing and multi-day journeys.",
    },

    {
        icon: MapPin,
        title: "Custom Routes",
        text:
            "Create a journey around your own pickup points and destinations.",
    },
];


/* =========================================================
   DESTINATIONS COMPONENT
========================================================= */

const Destinations = () => {

    /* Selected state */
    const [selectedState, setSelectedState] = useState("All");


    /* =====================================================
       GET UNIQUE STATES
    ===================================================== */

    const states = [
        "All",
        ...new Set(destinations.map((destination) => destination.state)),
    ];


    /* =====================================================
       FILTER DESTINATIONS
    ===================================================== */

    const filteredDestinations =
        selectedState === "All"
            ? destinations
            : destinations.filter(
                (destination) =>
                    destination.state === selectedState
            );


    return (
        <main className="destinations-page">


            {/* =================================================
                HERO
            ================================================= */}

           <section className="destinations-hero">

    {/* Background Video */}
    <div className="destinations-hero-bg">

        <video
            className="destinations-hero-video"
            autoPlay
            muted
            loop
            playsInline
            poster="/images/destinations-poster.jpg"
        >
            <source
                src="https://www.pexels.com/download/video/32548577/"
                type="video/mp4"
            />

            Your browser does not support the video tag.
        </video>

    </div>


    {/* Dark Overlay */}
    <div className="destinations-hero-overlay"></div>


    {/* Hero Content */}
    <div className="destinations-hero-content">

        <span className="destinations-eyebrow">
            DESTINATIONS
        </span>

        <h1>
            Go further.
            <br />
            <em>Discover more.</em>
        </h1>

        <p>
            From quick city transfers to long-distance
            journeys, explore destinations with a comfortable
            car and a professional driver.
        </p>

    </div>


    {/* Bottom Information */}
    <div className="destinations-hero-bottom">

        <span>Local Travel</span>

        <span>Outstation</span>

        <span>One Way</span>

        <span>Round Trip</span>

    </div>

</section>


            {/* =================================================
                INTRO
            ================================================= */}

            <section className="destinations-intro">

                <div className="destinations-container">

                    <div className="destinations-intro-label">

                        <span>01</span>

                        <span>WHERE WE GO</span>

                    </div>


                    <div className="destinations-intro-content">

                        <h2>
                            Your destination.
                            <br />
                            <em>Our journey.</em>
                        </h2>

                        <p>
                            Plan your next journey with a comfortable
                            vehicle and experienced driver. Choose from
                            popular destinations or tell us where you want
                            to go.
                        </p>

                    </div>

                </div>

            </section>


            {/* =================================================
                DESTINATION LIST
            ================================================= */}

            <section className="destination-list">

                <div className="destinations-container">


                    {/* =================================================
                        HEADING
                    ================================================= */}

                    <div className="destination-heading">

                        <div>

                            <span>
                                POPULAR DESTINATIONS
                            </span>

                            <h2>
                                Places worth
                                <br />
                                <em>the drive.</em>
                            </h2>

                        </div>


                        <p>
                            Popular routes from Ranchi and nearby
                            cities for comfortable outstation travel.
                        </p>

                    </div>


                    {/* =================================================
                        FILTER + DESTINATIONS
                    ================================================= */}

                    <div className="destination-layout">


                        {/* =============================================
                            LEFT FILTER SIDEBAR
                        ============================================== */}

                        <aside className="destination-filter">

                            <div className="filter-heading">

                                <span>
                                    EXPLORE BY
                                </span>

                                <h3>
                                    Location
                                </h3>

                            </div>


                            <div className="filter-list">

                                {states.map((state) => {

                                    const count =
                                        state === "All"
                                            ? destinations.length
                                            : destinations.filter(
                                                (destination) =>
                                                    destination.state === state
                                            ).length;


                                    return (
                                        <button
                                            type="button"
                                            key={state}
                                            className={
                                                selectedState === state
                                                    ? "filter-button active"
                                                    : "filter-button"
                                            }
                                            onClick={() =>
                                                setSelectedState(state)
                                            }
                                        >

                                            <span className="filter-button-left">

                                                <MapPin size={15} />

                                                <span>
                                                    {state}
                                                </span>

                                            </span>


                                            <span className="filter-count">
                                                {count}
                                            </span>

                                        </button>
                                    );

                                })}

                            </div>


                            {/* Current Selection */}

                            <div className="filter-selected">

                                <span>
                                    SELECTED LOCATION
                                </span>

                                <strong>
                                    {selectedState === "All"
                                        ? "All Destinations"
                                        : selectedState}
                                </strong>

                            </div>

                        </aside>


                        {/* =============================================
                            DESTINATION CARDS
                        ============================================== */}

                        <div className="destination-results">


                            {/* Results Header */}

                            <div className="destination-results-header">

                                <span>
                                    {filteredDestinations.length}{" "}
                                    {filteredDestinations.length === 1
                                        ? "Destination"
                                        : "Destinations"}
                                </span>


                                {selectedState !== "All" && (
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setSelectedState("All")
                                        }
                                    >
                                        View all
                                        <ArrowUpRight size={15} />
                                    </button>
                                )}

                            </div>


                            {/* Cards */}

                            <div className="destination-grid">

                                {filteredDestinations.map(
                                    (destination) => (

                                        <article
                                            className="destination-card"
                                            key={`${destination.state}-${destination.name}`}
                                        >

                                            {/* Image */}

                                            <div className="destination-image">

                                                <img
                                                    src={destination.image}
                                                    alt={destination.name}
                                                />


                                                <span className="destination-number">
                                                    {destination.number}
                                                </span>


                                                <button
                                                    type="button"
                                                    className="destination-arrow"
                                                    aria-label={`View ${destination.name}`}
                                                >
                                                    <ArrowUpRight
                                                        size={20}
                                                    />
                                                </button>

                                            </div>


                                            {/* Content */}

                                            <div className="destination-content">

                                                <span className="destination-state">

                                                    <MapPin size={13} />

                                                    {destination.city},{" "}
                                                    {destination.state}

                                                </span>


                                                <h3>
                                                    {destination.name}
                                                </h3>


                                            </div>

                                        </article>

                                    )
                                )}

                            </div>


                            {/* Empty State */}

                            {filteredDestinations.length === 0 && (

                                <div className="destination-empty">

                                    <MapPin size={35} />

                                    <h3>
                                        No destinations found
                                    </h3>

                                    <p>
                                        We don't currently have destinations
                                        listed for this state.
                                    </p>

                                    <button
                                        type="button"
                                        onClick={() =>
                                            setSelectedState("All")
                                        }
                                    >
                                        View all destinations
                                    </button>

                                </div>

                            )}

                        </div>

                    </div>

                </div>

            </section>


            {/* =================================================
                CUSTOM ROUTE
            ================================================= */}

            <section className="custom-route">

                <div className="destinations-container">

                    <div className="custom-route-inner">

                        <div>

                            <span>
                                HAVE A DIFFERENT DESTINATION?
                            </span>

                            <h2>
                                Tell us where
                                <br />
                                you want to go.
                            </h2>

                        </div>


                        <div className="custom-route-right">

                            <p>
                                Your destination doesn't have to be
                                on our list. Share your route and we'll
                                help arrange the right car for your journey.
                            </p>

                            <a href="#booking">
                                Plan Custom Journey
                                <ArrowUpRight size={18} />
                            </a>

                        </div>

                    </div>

                </div>

            </section>


            {/* =================================================
                JOURNEY TYPES
            ================================================= */}

            <section className="journey-types">

                <div className="destinations-container">

                    <div className="journey-heading">

                        <span>
                            TRAVEL YOUR WAY
                        </span>

                        <h2>
                            One destination.
                            <br />
                            <em>Different ways to get there.</em>
                        </h2>

                    </div>


                    <div className="journey-grid">

                        {routeTypes.map((item, index) => {

                            const Icon = item.icon;

                            return (
                                <div
                                    className="journey-card"
                                    key={item.title}
                                >

                                    <div className="journey-icon">

                                        <Icon
                                            size={25}
                                        />

                                    </div>


                                    <span>
                                        0{index + 1}
                                    </span>


                                    <h3>
                                        {item.title}
                                    </h3>


                                    <p>
                                        {item.text}
                                    </p>

                                </div>
                            );

                        })}

                    </div>

                </div>

            </section>


            {/* =================================================
                CTA
            ================================================= */}

            <section className="destinations-cta">

                <div className="destinations-cta-bg"></div>

                <div className="destinations-cta-overlay"></div>


                <div className="destinations-cta-content">

                    <span>
                        YOUR NEXT DESTINATION
                    </span>

                    <h2>
                        Wherever the road
                        <br />
                        takes you.
                    </h2>

                    <p>
                        Choose your destination and let us
                        take care of the journey.
                    </p>

                    <a href="#booking">

                        Book Your Car

                        <ArrowUpRight size={18} />

                    </a>

                </div>

            </section>

        </main>
    );
};


export default Destinations;