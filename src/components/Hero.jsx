import { ArrowUpRight, Search, MapPin, CalendarDays, Users } from "lucide-react";

import "./Hero.css";

const Hero = () => {
    return (
        <section className="hero-section">

            {/* Background */}
           <div className="hero-background">
<iframe
    src="https://www.youtube.com/embed/uK3-1GdfkIU?autoplay=1&mute=1&loop=1&playlist=uK3-1GdfkIU&controls=0&rel=0&modestbranding=1&playsinline=1"
    title="Travel background video"
    allow="autoplay; fullscreen"
    allowFullScreen
></iframe>
</div>

            {/* Overlay */}
            <div className="hero-overlay"></div>

            {/* Hero Content */}
            <div className="hero-container">

                <div className="hero-content">

                    <h1>
                        Go somewhere
                        <br />
                        <em>beautiful.</em>
                    </h1>

                    <p>
                        Discover extraordinary destinations, unforgettable
                        experiences and journeys designed around the way you
                        want to travel.
                    </p>

                    <div className="hero-buttons">

                        <a href="#destinations" className="hero-primary-btn">
                            Explore Destinations
                            <ArrowUpRight size={18} />
                        </a>

                        <a href="#packages" className="hero-secondary-btn">
                            View Experiences
                        </a>

                    </div>

                </div>

            </div>


            {/* Bottom Search */}
            {/* <div className="hero-search-wrapper">

                <div className="hero-search">

                  
                    <div className="search-item">

                        <div className="search-icon">
                            <MapPin size={18} />
                        </div>

                        <div>
                            <span>DESTINATION</span>
                            <strong>Where do you want to go?</strong>
                        </div>

                    </div>


                 
                    <div className="search-item">

                        <div className="search-icon">
                            <CalendarDays size={18} />
                        </div>

                        <div>
                            <span>TRAVEL DATE</span>
                            <strong>Choose your dates</strong>
                        </div>

                    </div>


                  
                    <div className="search-item">

                        <div className="search-icon">
                            <Users size={18} />
                        </div>

                        <div>
                            <span>TRAVELERS</span>
                            <strong>2 Travelers</strong>
                        </div>

                    </div>


                 
                    <button className="search-button">
                        <Search size={19} />
                        <span>Search</span>
                    </button>

                </div>

            </div> */}


        </section>
    );
};

export default Hero;