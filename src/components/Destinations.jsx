import { ArrowUpRight } from "lucide-react";
import jonhaFall from "../assets/destination/jonhafall.jpg";
import bodhGaya from "../assets/destination/bodhgaya.webp";
import puriTemple from "../assets/destination/puritemple.jpg";
import victoriaMemorial from "../assets/destination/Victoria.webp";
import tajMahal from "../assets/destination/tajmahal.jpg";
import "./Destinations.css";

const destinations = [
  {
    name: "Jonha Falls",
    state: "Ranchi, Jharkhand",
    image: jonhaFall,
    large: true,
  },
  {
    name: "Bodh Gaya",
    state: "Bihar, India",
    image: bodhGaya,
  },
  {
    name: "Jagannath Puri Temple",
    state: "Odisha, India",
    image: puriTemple,
  },
  {
    name: "Victoria Memorial",
    state: "West Bengal, India",
    image: victoriaMemorial,
  },
  {
    name: "Taj Mahal",
    state: "Agra, Uttar Pradesh",
    image: tajMahal,
  },
];

const Destinations = () => {
  return (
    <section className="destinations-section" id="destinations">
      <div className="destinations-container">
        {/* Section Heading */}
        <div className="destinations-heading">
          <div>
            <span className="section-label">DESTINATIONS</span>

            <h2>
              Places that make
              <br />
              you <em>feel alive.</em>
            </h2>
          </div>

          <div className="heading-side">
            <p>
              From hidden escapes to iconic landscapes, discover places worth
              travelling across the world for.
            </p>

            <a href="#all-destinations">
              Explore all destinations
              <ArrowUpRight size={17} />
            </a>
          </div>
        </div>

        {/* Destination Grid */}
        <div className="destination-grid">
          {/* Large Card */}
          <a href="#santorini" className="destination-card destination-large">
            <img src={destinations[0].image} alt={destinations[0].name} />

            <div className="destination-overlay"></div>

            <div className="destination-content">

              <h3>{destinations[0].name}</h3>
              <p>{destinations[0].state}</p>
              <div className="destination-arrow">
                <ArrowUpRight size={20} />
              </div>
            </div>
          </a>

          {/* Right Cards */}
          <div className="destination-side">
            {destinations.slice(1).map((destination, index) => (
              <a
                href={`#${destination.name.toLowerCase().replaceAll(" ", "-")}`}
                className="destination-card"
                key={destination.name}
              >
                <img src={destination.image} alt={destination.name} />

                <div className="destination-overlay"></div>

                <div className="destination-content">

                  <h3>{destination.name}</h3>

                  <p>{destination.state}</p>

                  <div className="destination-arrow">
                    <ArrowUpRight size={18} />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Destinations;
