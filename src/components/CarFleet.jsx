import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Users,
  Briefcase,
} from "lucide-react";
import { Link } from "react-router-dom";

import api from "../services/api";

import "./CarFleet.css";


const CarFleet = () => {

  const [cars, setCars] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");


  // ==========================================
  // FETCH VEHICLES FROM DJANGO API
  // ==========================================

  const fetchVehicles = async () => {

    try {

      setLoading(true);

      setError("");

      const response = await api.get("/vehicles/");

      // console.log("Vehicles API Response:", response.data);

      // Handle normal DRF array response
      if (Array.isArray(response.data)) {

        setCars(response.data);

      }

      // Handle pagination response if later enabled
      else if (Array.isArray(response.data.results)) {

        setCars(response.data.results);

      }

      else {

        setCars([]);

      }

    } catch (err) {

      console.error(
        "Vehicle API Error:",
        err
      );

      setError(
        "Unable to load vehicles. Please try again later."
      );

    } finally {

      setLoading(false);

    }
  };


  // ==========================================
  // LOAD VEHICLES
  // ==========================================

  useEffect(() => {

    fetchVehicles();

  }, []);


  // ==========================================
  // IMAGE URL
  // ==========================================

  const getImageUrl = (image) => {

    if (!image) {
      return "/images/default-car.jpg";
    }

    // If Django already returns full URL
    if (
      image.startsWith("http://") ||
      image.startsWith("https://")
    ) {
      return image;
    }

    // If Django returns /media/vehicles/...
    return `http://127.0.0.1:8000${image}`;
  };


  // ==========================================
  // VEHICLE TYPE FORMATTER
  // ==========================================

  const formatVehicleType = (type) => {

    if (!type) {
      return "Vehicle";
    }

    return type
      .replace(/[-_]/g, " ")
      .replace(/\b\w/g, (char) =>
        char.toUpperCase()
      );
  };


  // ==========================================
  // LOADING
  // ==========================================

  if (loading) {

    return (
      <section
        className="fleet-section"
        id="cars"
      >

        <div className="fleet-container">

          <div className="fleet-header">

            <div>

              <span className="fleet-label">
                OUR FLEET
              </span>

              <h2>
                Choose your
                <br />
                <em>perfect ride.</em>
              </h2>

            </div>

          </div>


          <div className="fleet-loading">

            <p>
              Loading vehicles...
            </p>

          </div>

        </div>

      </section>
    );
  }


  // ==========================================
  // ERROR
  // ==========================================

  if (error) {

    return (
      <section
        className="fleet-section"
        id="cars"
      >

        <div className="fleet-container">

          <div className="fleet-header">

            <div>

              <span className="fleet-label">
                OUR FLEET
              </span>

              <h2>
                Choose your
                <br />
                <em>perfect ride.</em>
              </h2>

            </div>

          </div>


          <div className="fleet-error">

            <p>
              {error}
            </p>

            <button
              onClick={fetchVehicles}
              className="fleet-retry"
            >
              Try Again
            </button>

          </div>

        </div>

      </section>
    );
  }


  // ==========================================
  // MAIN UI
  // ==========================================

  return (

    <section
      className="fleet-section"
      id="cars"
    >

      <div className="fleet-container">


        {/* ====================================
            HEADER
        ==================================== */}

        <div className="fleet-header">

          <div>

            <span className="fleet-label">
              OUR FLEET
            </span>

            <h2>
              Choose your
              <br />
              <em>perfect ride.</em>
            </h2>

          </div>


          <div className="fleet-intro">

            <p>
              From comfortable family journeys
              to premium business travel, choose
              a vehicle that fits your journey
              perfectly.
            </p>


            <Link
              to="/fleet"
              className="fleet-view-link"
            >

              View all vehicles

              <ArrowUpRight
                size={17}
              />

            </Link>

          </div>

        </div>


        {/* ====================================
            VEHICLES
        ==================================== */}

        {cars.length === 0 ? (

          <div className="fleet-empty">

            <p>
              No vehicles are currently available.
            </p>

          </div>

        ) : (

          <div className="fleet-grid">

            {cars.map((car) => (

              <article
                className="car-card"
                key={car.id}
              >


                {/* ====================================
                    IMAGE
                ==================================== */}

                <div className="car-image">

                  <img
                    src={getImageUrl(
                      car.image_url || car.image
                    )}
                    alt={car.name}
                    loading="lazy"
                  />


                  {/* TAG */}

                  {car.tag && (

                    <span className="car-tag">

                      {car.tag}

                    </span>

                  )}


                  {/* ARROW */}

                  <button
                    className="car-arrow"
                    aria-label={
                      `View ${car.name}`
                    }
                  >

                    <ArrowUpRight
                      size={19}
                    />

                  </button>

                </div>


                {/* ====================================
                    CONTENT
                ==================================== */}

                <div className="car-content">


                  {/* TYPE */}

                  <span className="car-type">

                    {formatVehicleType(
                      car.type
                    )}

                  </span>


                  {/* NAME */}

                  <h3>
                    {car.name}
                  </h3>


                  {/* =================================
                      SPECIFICATIONS
                  ================================= */}

                  <div className="car-specs">


                    {/* SEATS */}

                    <span>

                      <Users
                        size={15}
                      />

                      {car.seats
                        ? `${car.seats} Seats`
                        : "N/A"
                      }

                    </span>


                    {/* LUGGAGE */}

                    <span>

                      <Briefcase
                        size={15}
                      />

                      {car.luggage
                        ? `${car.luggage} Bags`
                        : "N/A"
                      }

                    </span>


                  </div>


                  {/* =================================
                      BOTTOM
                  ================================= */}

                  <div className="car-bottom">


                    {/* PRICE */}

                    <div className="car-price">

                      <small>
                        Starting from
                      </small>


                      <strong>
                        ₹{car.price}
                      </strong>


                      <span>
                        / KM
                      </span>

                    </div>


                    {/* BOOK */}

                    <Link
                      to="/booking"
                      state={{
                        vehicle: car,
                      }}
                      className="car-book"
                    >

                      Book Now

                      <ArrowUpRight
                        size={16}
                      />

                    </Link>

                  </div>

                </div>

              </article>

            ))}

          </div>

        )}

      </div>

    </section>
  );
};


export default CarFleet;