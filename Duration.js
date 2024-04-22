import React, { useState, useRef } from 'react';
import './Style1.css';
import './Select.css';
import { useNavigate } from 'react-router-dom';
import emailjs from 'emailjs-com'; // Import emailjs from 'emailjs-com' package

const Duration = () => {
    const navigate = useNavigate();
    const form = useRef(null); // Create a ref for the form element

    const [selectedDuration, setSelectedDuration] = useState(1); // Initial duration (in years)
    const [progress, setProgress] = useState(0); // Initial progress (in years)

    const goToNext = () => {
        sendEmail(); // Trigger sending email when continuing to the next route
        navigate("/yesa"); // Navigate to "/yesa" route when button is clicked
    };

    const handleProgressBarMove = (e) => {
        const containerWidth = e.currentTarget.clientWidth;
        const offsetX = e.nativeEvent.offsetX;
        const selected = Math.ceil((offsetX / containerWidth) * 10); // Calculate selected year

        setSelectedDuration(selected);
        setProgress(selected); // Update progress with the selected year
    };

    const sendEmail = () => {
        // Define email parameters and send using EmailJS
        const templateParams = {
            selectedDuration: `${selectedDuration} ${selectedDuration !== 1 ? 'Years' : 'Year'}`
        };

        emailjs.sendForm('service_zlxb2lj', 'template_peoz9uo', form.current, 'gLIkjWTl8lHultBUQ', templateParams)
            .then((result) => {
                console.log('Email sent successfully!', result.text);
            })
            .catch((error) => {
                console.error('Email sending failed:', error.text);
            });
    };

    return ( <
        >
        <
        h1 className = "text_box" >
        <
        span className = "text-wrapper" >
        <
        span className = "letters" > How long have you been experiencing hair loss ? < /span> < /
        span > <
        /h1>

        <
        div className = 'radio-image-selector' >
        <
        div className = "duration-selector" >
        <
        h2 className = 'dus' > Duration : < /h2> <
        div className = "duration-card" >
        <
        div className = "selected-duration" >
        <
        p > { selectedDuration } { selectedDuration !== 1 ? 'Years' : 'Year' } < /p> < /
        div > <
        /div> <
        div className = "progress-container"
        onMouseMove = { handleProgressBarMove } >
        <
        div className = "progress-bar"
        style = {
            { width: `${(progress / 10) * 100}%` }
        } > { progress }
        Year { progress !== 1 && 's' } <
        /div> < /
        div > <
        div className = "progress-labels" >
        <
        span className = "less-than-label mg-x-2" > Less than 1 year < /span> <
        span className = "more-than-label" > More than 10 years < /span> < /
        div > <
        /div> <
        form ref = { form }
        onSubmit = {
            (e) => e.preventDefault()
        } > { /* Form for email sending */ } <
        button onClick = { goToNext } > Continue < /button> < /
        form > <
        /div> < /
        >
    );
};

export default Duration;