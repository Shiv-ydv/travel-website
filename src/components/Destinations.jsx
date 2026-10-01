import { useEffect, useState } from "react";
import {
    ArrowUpRight,
    MapPin,
    Clock3,
    Route,
} from "lucide-react";

import "./Destinations.css";
import api from "../services/api";

const Destinations = () => {

    /* =========================================================
       DESTINATIONS
    ========================================================= */

    const [destinations, setDestinations] = useState([]);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");

    /* Selected large image */
    const [selectedDestination, setSelectedDestination] =
        useState(null);


    /* =========================================================
       FETCH DESTINATIONS
    ========================================================= */

    useEffect(() => {

        const fetchDestinations = async () => {

            try {

                setLoading(true);
                setError("");

                const response =
                    await api.get("/destinations/");


                const data =
                    Array.isArray(response.data)
                        ? response.data
                        : response.data?.results || [];


                /* Only active destinations */

                const activeDestinations =
                    data.filter(
                        (destination) =>
                            destination.status === true
                    );


                setDestinations(activeDestinations);


                /* First destination as featured */

                if (activeDestinations.length > 0) {

                    setSelectedDestination(
                        activeDestinations[0]
                    );

                }

            } catch (err) {

                console.error(
                    "Destination API Error:",
                    err
                );

                setError(
                    "Unable to load destinations."
                );

            } finally {

                setLoading(false);

            }

        };


        fetchDestinations();

    }, []);


    /* =========================================================
       IMAGE URL
    ========================================================= */

    const getImageUrl = (destination) => {

        const image =
            destination?.image_url ||
            destination?.image;


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


    /* =========================================================
       SELECT DESTINATION
    ========================================================= */

    const handleDestinationClick = (destination) => {

        setSelectedDestination(destination);

        /* Smoothly move back to large image */

        document
            .querySelector(".destination-featured")
            ?.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });

    };


    /* =========================================================
       LOADING
    ========================================================= */

    if (loading) {

        return (

            <section className="destinations-section">

                <div className="destinations-container">

                    <div className="destinations-loading">

                        <div className="destination-loader"></div>

                        <p>
                            Loading destinations...
                        </p>

                    </div>

                </div>

            </section>

        );

    }


    /* =========================================================
       ERROR
    ========================================================= */

    if (error) {

        return (

            <section className="destinations-section">

                <div className="destinations-container">

                    <div className="destinations-error">

                        <MapPin size={30} />

                        <h3>
                            Unable to load destinations
                        </h3>

                        <p>
                            {error}
                        </p>

                    </div>

                </div>

            </section>

        );

    }


    /* =========================================================
       EMPTY
    ========================================================= */

    if (destinations.length === 0) {

        return (

            <section
                className="destinations-section"
                id="destinations"
            >

                <div className="destinations-container">

                    <div className="destinations-empty">

                        <MapPin size={30} />

                        <h3>
                            No destinations available
                        </h3>

                        <p>
                            Destinations will appear here
                            once they are added from the
                            admin panel.
                        </p>

                    </div>

                </div>

            </section>

        );

    }


    /* =========================================================
       MAIN
    ========================================================= */

    return (

        <section
            className="destinations-section"
            id="destinations"
        >

            <div className="destinations-container">


                {/* =================================================
                   HEADER
                ================================================= */}

                <div className="destinations-header">

                    <div className="destinations-heading">

                        <span className="destinations-eyebrow">

                            <i></i>

                            DESTINATIONS

                        </span>


                        <h2>

                            Places worth
                            <br />

                            <em>the journey.</em>

                        </h2>

                    </div>


                    <div className="destinations-description">

                        <span className="destination-heading-line"></span>

                        <p>
                            Discover beautiful places,
                            memorable roads and experiences
                            waiting to be explored.
                        </p>

                    </div>

                </div>



                {/* =================================================
                   LARGE FEATURED DESTINATION
                ================================================= */}

                {selectedDestination && (

                    <div
                        className="destination-featured"
                        key={selectedDestination.id}
                    >

                        <img
                            src={getImageUrl(
                                selectedDestination
                            )}
                            alt={
                                selectedDestination.name
                            }
                        />


                        {/* IMAGE OVERLAY */}

                        <div className="destination-featured-overlay"></div>


                    

                        {/* ARROW */}

                        <div className="destination-featured-arrow">

                            <ArrowUpRight size={23} />

                        </div>


                        {/* CONTENT */}

                        <div className="destination-featured-content">

                            <div className="destination-location">

                                <MapPin size={15} />

                                <span>

                                    {
                                        selectedDestination.city
                                    }

                                    {
                                        selectedDestination.city &&
                                        selectedDestination.state
                                            ? ", "
                                            : ""
                                    }

                                    {
                                        selectedDestination.state
                                    }

                                </span>

                            </div>


                            <h3>

                                {
                                    selectedDestination.name
                                }

                            </h3>


                            <div className="destination-meta">

                                {
                                    selectedDestination.distance && (

                                        <span>

                                            <Route size={13} />

                                            {
                                                selectedDestination.distance
                                            }

                                        </span>

                                    )
                                }


                                {
                                    selectedDestination.time && (

                                        <span>

                                            <Clock3 size={13} />

                                            {
                                                selectedDestination.time
                                            }

                                        </span>

                                    )
                                }

                            </div>

                        </div>

                    </div>

                )}



                {/* =================================================
                   SMALL DESTINATION GALLERY
                ================================================= */}

                <div className="destination-gallery">

                    {destinations.map(
                        (destination) => {

                            const isActive =
                                selectedDestination?.id ===
                                destination.id;


                            return (

                                <button
                                    type="button"
                                    key={destination.id}
                                    className={
                                        isActive
                                            ? "destination-gallery-card active"
                                            : "destination-gallery-card"
                                    }
                                    onClick={() =>
                                        handleDestinationClick(
                                            destination
                                        )
                                    }
                                >

                                    <div className="destination-gallery-image">

                                        <img
                                            src={getImageUrl(
                                                destination
                                            )}
                                            alt={
                                                destination.name
                                            }
                                            loading="lazy"
                                        />


                                        <div className="destination-gallery-overlay"></div>

{/* 
                                        <span className="destination-gallery-number">

                                            {
                                                destination.number
                                            }

                                        </span> */}


                                        <span className="destination-gallery-arrow">

                                            <ArrowUpRight
                                                size={16}
                                            />

                                        </span>

                                    </div>


                                    <div className="destination-gallery-content">

                                        <h4>

                                            {
                                                destination.name
                                            }

                                        </h4>


                                        <p>

                                            <MapPin
                                                size={12}
                                            />

                                            {
                                                destination.city
                                            }

                                            {
                                                destination.city &&
                                                destination.state
                                                    ? ", "
                                                    : ""
                                            }

                                            {
                                                destination.state
                                            }

                                        </p>

                                    </div>

                                </button>

                            );

                        }
                    )}

                </div>

            </div>

        </section>

    );

};

export default Destinations;