import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProgressBars from "./ProgressBars";
import "./Style.css";

const Routes = () => {
    const [value, setValue] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        const interval = setInterval(() => {
            // Increment value (or reset to 0 at 100%)
            setValue((val) => (val < 100 ? val + 1 : 0));
        }, 50); // Update progress every 50 milliseconds

        // Clean up the interval on component unmount
        return () => clearInterval(interval);
    }, []); // Run effect only once on component mount

    useEffect(() => {
        if (value === 100) {
            // Automatically navigate to "/women" route after reaching 100%
            navigate("/women");
        }
    }, [value, navigate]); // Trigger effect when value or navigate changes

    return ( <
        div className = "app" >
        <
        div className = "content" >
        <
        span className = "title" > Hair Transplantation Planning Consultation < /span> <
        ProgressBars value = { value }
        /> < /
        div > <
        /div>
    );
};

export default Routes;