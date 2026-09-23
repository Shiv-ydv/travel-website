import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import "./Navbar.css";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <header
            className={`travel-navbar ${
                scrolled ? "navbar-scrolled" : ""
            }`}
        >
            <div className="navbar-container">

                {/* Logo */}
                <Link
                    to="/"
                    className="travel-logo"
                    onClick={closeMenu}
                >
                    <span className="logo-symbol">DT</span>

                    <span className="logo-name">
                        DHANO TRAVELS
                        <small>TRAVEL CO.</small>
                    </span>
                </Link>


                {/* Navigation */}
                <nav
                    className={`navigation ${
                        menuOpen ? "navigation-open" : ""
                    }`}
                >

                    <Link
                        to="/"
                        onClick={closeMenu}
                    >
                        Home
                    </Link>

                    <Link
                        to="/fleet"
                        onClick={closeMenu}
                    >
                        Our Fleet
                    </Link>

                    <Link
                        to="/services"
                        onClick={closeMenu}
                    >
                        Services
                    </Link>

                    <Link
                        to="/destinations"
                        onClick={closeMenu}
                    >
                        Destinations
                    </Link>

                    <Link
                        to="/about"
                        onClick={closeMenu}
                    >
                        About
                    </Link>

                    <Link
                        to="/contact"
                        onClick={closeMenu}
                    >
                        Contact
                    </Link>


                    {/* Mobile CTA */}
                    <Link
                        to="/booking"
                        className="mobile-cta"
                        onClick={closeMenu}
                    >
                        Book a Car
                        <ArrowUpRight size={17} />
                    </Link>

                </nav>


                {/* Desktop CTA */}
                <Link
                    to="/booking"
                    className="navbar-cta"
                >
                    <span>Book a Car</span>
                    <ArrowUpRight size={17} />
                </Link>


                {/* Mobile Menu */}
                <button
                    type="button"
                    className="menu-button"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle navigation"
                    aria-expanded={menuOpen}
                >
                    {menuOpen ? (
                        <X size={24} />
                    ) : (
                        <Menu size={24} />
                    )}
                </button>

            </div>
        </header>
    );
};

export default Navbar;