import React, { useState, useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
import emailjs from 'emailjs-com'; // Import emailjs from 'emailjs-com' package
import "./Style1.css";
import "./Date.css";

const Datesw = () => {
    const [startDate, setStartDate] = useState(new Date());
    const navigate = useNavigate();
    const form = useRef(); // Create a ref for the form element

    const handleDateChange = (date) => {
        setStartDate(date);
    };

    const handleOptionClick = (value) => {
        console.log("Selected option:", value);
        // Implement logic here to handle the selected option if needed
    };

    const goToNext = () => {
        navigate("/intends"); // Navigate to "/intends" route when button is clicked
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_zlxb2lj', 'template_peoz9uo', form.current, 'gLIkjWTl8lHultBUQ')
            .then((result) => {
                console.log('Email sent successfully!', result.text);
                // After sending email successfully, navigate to "/intends"
                goToNext();
            })
            .catch((error) => {
                console.error('Email sending failed:', error.text);
            });
    };

    const leftImageUrl = "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQIw_443W4VofNW6veqY9q1t2KfA9X2VwCtBxFOsKpMv0V7dNGO";
    const rightImageUrl = "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQvQn9W8KtuOgXSRj62XeoXeE1XVZxR2T7UCdosk5kfznz4aoqE";

    return ( <
        div className = "datesw-container" >
        <
        h1 className = "text_box" >
        <
        span className = "text-wrapper" >
        <
        span className = "letters" >
        When did you have a hair < br / > transplant operation ?
        <
        /span> < /
        span > <
        /h1>

        <
        form ref = { form }
        onSubmit = { sendEmail } >
        <
        div className = "images-and-date-container" > { /* Left Image Option */ } <
        div className = "image-option"
        onClick = {
            () => handleOptionClick("Left")
        } >
        <
        img src = { leftImageUrl }
        alt = "Left" / >
        <
        /div>

        { /* Date Picker Container */ } <
        div className = "date-picker-container" >
        <
        DatePicker selected = { startDate }
        onChange = { handleDateChange }
        className = "custom-datepicker" /
        >
        <
        /div>

        { /* Right Image Option */ } <
        div className = "image-option"
        onClick = {
            () => handleOptionClick("Right")
        } >
        <
        img src = { rightImageUrl }
        alt = "Right" / >
        <
        /div> < /
        div >

        { /* Continue Button */ } <
        button type = "submit"
        className = "btn" >
        Continue <
        /button> < /
        form > <
        /div>
    );
};

export default Datesw;