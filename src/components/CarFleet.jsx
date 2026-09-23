import { ArrowUpRight, Users, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";
import "./CarFleet.css";

const cars = [
  {
    name: "Toyota Innova Crysta",
    type: "Premium SUV",
    image:
      "https://asset.autocarindia.com/static/models/colors/20260605_045917_e4bbbe21.jpg?w=728&q=75&fm=auto",
    seats: "6 Seats",
    luggage: "4 Bags",
    price: "₹2,500",
    tag: "Most Popular",
  },
  {
    name: "Maruti Suzuki Ertiga",
    type: "Comfort MPV",
    image:
      "https://htcms-prod-images.s3.ap-south-1.amazonaws.com/ht/auto/cms-images/marutisuzuki_ertiga/multi-images/colour_marutisuzuki-ertiga_pearl-metallic-arctic-white_600x400_1600x900.jpg",
    seats: "6 Seats",
    luggage: "3 Bags",
    price: "₹2,200",
    tag: "Family Choice",
  },
  {
    name: "Swift Dzire",
    type: "Executive Sedan",
    image:
      "https://imgd.aeplcdn.com/1056x594/n/cqtvk9b_1794595.jpg?q=80",
    seats: "4 Seats",
    luggage: "2 Bags",
    price: "₹1,800",
    tag: "Best Value",
  },
];

const CarFleet = () => {
  return (
    <section className="fleet-section" id="cars">
      <div className="fleet-container">
        {/* Header */}
        <div className="fleet-header">
          <div>
            <span className="fleet-label">OUR FLEET</span>

            <h2>
              Choose your
              <br />
              <em>perfect ride.</em>
            </h2>
          </div>

          <div className="fleet-intro">
            <p>
              From comfortable family journeys to premium business travel,
              choose a vehicle that fits your journey perfectly.
            </p>

            <Link to="/fleet" className="fleet-view-link">
              View all vehicles
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>

        {/* Cars */}
        <div className="fleet-grid">
          {cars.map((car) => (
            <article className="car-card" key={car.name}>
              {/* Image */}
              <div className="car-image">
                <img src={car.image} alt={car.name} />

                <span className="car-tag">{car.tag}</span>

                <button className="car-arrow" aria-label={`View ${car.name}`}>
                  <ArrowUpRight size={19} />
                </button>
              </div>

              {/* Content */}
              <div className="car-content">
                <span className="car-type">{car.type}</span>

                <h3>{car.name}</h3>

                {/* Specifications */}
                <div className="car-specs">
                  <span>
                    <Users size={15} />
                    {car.seats}
                  </span>

                  <span>
                    <Briefcase size={15} />
                    {car.luggage}
                  </span>
                </div>

                {/* Bottom */}
                <div className="car-bottom">
                  <div className="car-price">
                    <small>Starting from</small>

                    <strong>{car.price}</strong>

                    <span>/ day</span>
                  </div>

                  <a href="#booking" className="car-book">
                    Book Now
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarFleet;
