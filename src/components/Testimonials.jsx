import {
    Star,
    ArrowLeft,
    ArrowRight,
    Quote,
} from "lucide-react";

import "./Testimonials.css";

const testimonials = [
    {
        quote:
            "The entire experience was incredibly smooth. The car was spotless, the driver arrived exactly on time, and the journey was comfortable from start to finish.",
        name: "Ananya Sharma",
        location: "New Delhi",
        trip: "Delhi → Jaipur",
        initials: "AS",
    },
    {
        quote:
            "We booked a car for our family trip and everything was handled perfectly. Professional service, comfortable vehicle and absolutely no unnecessary hassle.",
        name: "Rahul Mehta",
        location: "Mumbai",
        trip: "Mumbai → Lonavala",
        initials: "RM",
    },
    {
        quote:
            "From airport pickup to the final drop, the service was excellent. The driver was polite and the vehicle was extremely comfortable.",
        name: "Priya Kapoor",
        location: "Bengaluru",
        trip: "Airport Transfer",
        initials: "PK",
    },
];

const Testimonials = () => {
    return (
        <section className="testimonials-section">

            <div className="testimonials-container">

                {/* Header */}
                <div className="testimonials-header">

                    <div>
                        <span className="testimonials-label">
                            TRAVELLER STORIES
                        </span>

                        <h2>
                            Don't just take
                            <br />
                            <em>our word for it.</em>
                        </h2>
                    </div>

                    <div className="testimonials-rating">

                        <div className="rating-stars">
                            <Star size={14} fill="currentColor" />
                            <Star size={14} fill="currentColor" />
                            <Star size={14} fill="currentColor" />
                            <Star size={14} fill="currentColor" />
                            <Star size={14} fill="currentColor" />
                        </div>

                        <strong>4.9 / 5</strong>

                        <span>
                            Based on traveller experiences
                        </span>

                    </div>

                </div>


                {/* Featured Review */}
                <div className="featured-review">

                    <div className="quote-icon">
                        <Quote size={25} />
                    </div>

                    <blockquote>
                        "{testimonials[0].quote}"
                    </blockquote>


                    <div className="review-bottom">

                        <div className="review-person">

                            <div className="person-avatar">
                                {testimonials[0].initials}
                            </div>

                            <div>
                                <strong>
                                    {testimonials[0].name}
                                </strong>

                                <span>
                                    {testimonials[0].location}
                                    &nbsp; • &nbsp;
                                    {testimonials[0].trip}
                                </span>
                            </div>

                        </div>


                        <div className="review-navigation">

                            <button aria-label="Previous review">
                                <ArrowLeft size={17} />
                            </button>

                            <button aria-label="Next review">
                                <ArrowRight size={17} />
                            </button>

                        </div>

                    </div>

                </div>


                {/* Smaller Reviews */}
                <div className="review-grid">

                    {testimonials.slice(1).map((review) => (

                        <div
                            className="small-review"
                            key={review.name}
                        >

                            <div className="small-review-top">

                                <div className="small-stars">

                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <Star
                                            key={star}
                                            size={12}
                                            fill="currentColor"
                                        />
                                    ))}

                                </div>

                                <span>
                                    VERIFIED TRAVELLER
                                </span>

                            </div>


                            <p>
                                "{review.quote}"
                            </p>


                            <div className="small-person">

                                <div className="small-avatar">
                                    {review.initials}
                                </div>

                                <div>
                                    <strong>
                                        {review.name}
                                    </strong>

                                    <span>
                                        {review.location}
                                    </span>
                                </div>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
};

export default Testimonials;