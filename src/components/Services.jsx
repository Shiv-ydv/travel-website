import {
  Plane,
  MapPinned,
  CarFront,
  BriefcaseBusiness,
  ArrowUpRight,
  MessageCircle,
} from "lucide-react";

import "./Services.css";

const WHATSAPP_NUMBER = "917870787208";

const travelServices = [
  {
    number: "01",
    title: "Airport Transfers",
    shortTitle: "Airport Transfer",
    description:
      "Reliable airport pickup and drop services with comfortable cars and professional drivers.",
    icon: Plane,
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=85",
  },

  {
    number: "02",
    title: "Outstation Journeys",
    shortTitle: "Outstation",
    description:
      "Travel beyond the city with comfortable vehicles, experienced drivers and flexible plans.",
    icon: MapPinned,
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=85",
  },

  {
    number: "03",
    title: "Local Car Rentals",
    shortTitle: "Local Rental",
    description:
      "Convenient hourly, daily and full-day car rentals for exploring the city your way.",
    icon: CarFront,
    image:
      "https://images.unsplash.com/photo-1504215680853-026ed2a45def?auto=format&fit=crop&w=1200&q=85",
  },

  {
    number: "04",
    title: "Corporate Travel",
    shortTitle: "Corporate Travel",
    description:
      "Professional transportation for meetings, events, business trips and corporate guests.",
    icon: BriefcaseBusiness,
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85",
  },
];

const Services = () => {

  const openWhatsApp = (service) => {

    const message = `Hello, I want to know more about ${service.title}.`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank");
  };


  return (
    <section className="premium-services" id="services">

      <div className="premium-services-container">


        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="premium-services-header">

          <div className="premium-services-title">

            <span className="premium-services-label">
              OUR SERVICES
            </span>

            <h2>
              Everything you need
              <br />
              <em>for a better journey.</em>
            </h2>

          </div>


          <div className="premium-services-intro">

            <span className="premium-services-line"></span>

            <p>
              From airport transfers to long-distance journeys,
              travel comfortably with reliable cars and
              professional service.
            </p>

          </div>

        </div>



        {/* =====================================================
            SERVICES GRID
        ===================================================== */}

        <div className="premium-services-grid">

          {travelServices.map((service) => {

            const Icon = service.icon;

            return (

              <article
                className="premium-service-card"
                key={service.number}
              >


                {/* =================================================
                    IMAGE
                ================================================= */}

                <div className="premium-service-image">

                  <img
                    src={service.image}
                    alt={service.title}
                  />

                  <div className="premium-service-image-overlay"></div>


                  {/* NUMBER */}

                  {/* <span className="premium-service-number">
                    {service.number}
                  </span> */}


                  {/* ICON */}

                  <div className="premium-service-icon">

                    <Icon
                      size={19}
                      strokeWidth={1.7}
                    />

                  </div>

                </div>



                {/* =================================================
                    CONTENT
                ================================================= */}

                <div className="premium-service-content">


                  <span className="premium-service-small-title">
                    {service.shortTitle}
                  </span>


                  <h3>
                    {service.title}
                  </h3>


                  <p>
                    {service.description}
                  </p>


                  {/* =================================================
                      BOTTOM
                  ================================================= */}

                  <div className="premium-service-bottom">


                    {/* WHATSAPP */}

                    <button
                      type="button"
                      className="premium-whatsapp-btn"
                      onClick={() =>
                        openWhatsApp(service)
                      }
                    >

                      <MessageCircle size={17} />

                      <span>
                        Hello, Enquire Now
                      </span>

                    </button>


                    {/* ARROW */}

                    <div className="premium-service-arrow">

                      <ArrowUpRight
                        size={17}
                      />

                    </div>

                  </div>

                </div>

              </article>

            );

          })}

        </div>

      </div>

    </section>
  );
};

export default Services;