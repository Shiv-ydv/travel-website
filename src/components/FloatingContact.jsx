import { Phone, MessageCircle } from "lucide-react";
import "./FloatingContact.css";

const FloatingContact = () => {
    return (
        <div className="floating-contact">

            {/* WhatsApp */}
            <a
                href="https://wa.me/917870787208"
                className="floating-btn whatsapp-btn"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
            >
                <span className="floating-tooltip">
                    WhatsApp
                </span>

                <MessageCircle size={23} />
            </a>


            {/* Call */}
            <a
                href="tel:+919955116638"
                className="floating-btn call-btn"
                aria-label="Call us"
            >
                <span className="floating-tooltip">
                    Call Us
                </span>

                <Phone size={22} />
            </a>

        </div>
    );
};

export default FloatingContact;