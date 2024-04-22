import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import emailjs from 'emailjs-com'; // Import emailjs from 'emailjs-com' package
import './result.css';

const Results = () => {
        const navigate = useNavigate();

        const [formData, setFormData] = useState({
            postContent2: "Another textarea...",
            email: "",
            phoneNumber: ""
        });
        const [emailError, setEmailError] = useState(""); // State to track email validation error

        const goToNext = () => {
            navigate("/"); // Navigate to "/" route when button is clicked
        };

        const handleSubmit = (e) => {
            e.preventDefault(); // Prevent default form submission behavior

            const formValues = {
                ...formData,
                email: e.target.email.value,
                phoneNumber: e.target.phoneNumber.value
            };

            console.log("Form Data:", formValues); // Log the form data to console

            // Send email using EmailJS
            emailjs.send('service_zlxb2lj', 'template_peoz9uo', formValues, 'gLIkjWTl8lHultBUQ')
                .then((result) => {
                    console.log('Email sent successfully!', result.text);
                    alert("Thanks for submitting!"); // Show a thank you message
                    goToNext(); // Navigate to the next route
                })
                .catch((error) => {
                    console.error('Email sending failed:', error.text);
                });
        };

        const handleEmailChange = (e) => {
            const emailValue = e.target.value;
            setFormData({...formData, email: emailValue });

            // Email validation using regex
            const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue);
            setEmailError(isValidEmail ? "" : "Please enter a valid email address");
        };

        return ( <
            >
            <
            h1 className = "result-text_box" >
            <
            span className = "result-letters" > Almost done.Whom should we deliver the results to ? < /span> < /
            h1 >

            <
            div className = "result-form-container" >
            <
            form onSubmit = { handleSubmit } >
            <
            div className = "result-textarea-container" >
            <
            label >
            Name and Surname :
            <
            textarea name = "postContent2"
            value = { formData.postContent2 }
            rows = { 4 }
            onChange = {
                (e) => setFormData({...formData, postContent2: e.target.value })
            }
            required /
            >
            <
            /label> < /
            div >

            <
            div className = "result-input-container" >
            <
            label >
            E - Mail Address:
            <
            input type = "email"
            name = "email"
            value = { formData.email }
            placeholder = "Enter Your email"
            onChange = { handleEmailChange }
            required /
            >
            {
                emailError && < p className = "error" > { emailError } < /p>} < /
                label >

                <
                label >
                Your Telephone Number:
                    <
                    input
                type = "tel"
                name = "phoneNumber"
                value = { formData.phoneNumber }
                placeholder = "Enter Your phone number"
                onChange = {
                    (e) => setFormData({...formData, phoneNumber: e.target.value })
                }
                required /
                >
                <
                /label> < /
                div >

                <
                div className = "result-btn-container" >
                <
                button type = "submit"
                className = "submit-btn" > Submit < /button> <
                button onClick = { goToNext }
                className = "continue-btn" > Continue < /button> < /
                div > <
                /form> < /
                div > <
                />
            );
        };

        export default Results;