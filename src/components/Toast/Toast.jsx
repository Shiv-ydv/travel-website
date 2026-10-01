import { useEffect, useState } from "react";
import {
    CheckCircle2,
    AlertCircle,
    X,
} from "lucide-react";

import "./Toast.css";

const Toast = ({
    message,
    type = "success",
    duration = 3000,
    onClose,
}) => {
    const [closing, setClosing] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            handleClose();
        }, duration);

        return () => clearTimeout(timer);
    }, [duration]);

    const handleClose = () => {
        setClosing(true);

        setTimeout(() => {
            onClose();
        }, 250);
    };

    const isSuccess = type === "success";

    return (
        <div
            className={`dhno-toast-wrapper ${
                closing ? "dhno-toast-closing" : ""
            }`}
        >
            <div
                className={`dhno-toast ${
                    isSuccess
                        ? "dhno-toast-success"
                        : "dhno-toast-danger"
                }`}
            >
                {/* Icon */}
                <div className="dhno-toast-icon">
                    {isSuccess ? (
                        <CheckCircle2 size={21} />
                    ) : (
                        <AlertCircle size={21} />
                    )}
                </div>

                {/* Content */}
                <div className="dhno-toast-content">
                    <span className="dhno-toast-title">
                        {isSuccess ? "Success" : "Attention"}
                    </span>

                    <span className="dhno-toast-message">
                        {message}
                    </span>
                </div>

                {/* Close */}
                <button
                    type="button"
                    className="dhno-toast-close"
                    onClick={handleClose}
                    aria-label="Close notification"
                >
                    <X size={17} />
                </button>

                {/* Timer */}
                <div
                    className="dhno-toast-progress"
                    style={{
                        animationDuration: `${duration}ms`,
                    }}
                />
            </div>
        </div>
    );
};

export default Toast;