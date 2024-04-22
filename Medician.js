import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import './Medicia.css';

const Medician = () => {
    const [formData, setFormData] = useState({
        postContent1: "I really enjoyed biking yesterday!",
        postContent2: "Another textarea..."
    });

    const navigate = useNavigate();

    const goToNext = () => {
        navigate("/results"); // Navigate to "/results" route when button is clicked
    };

    const handleOptionClick = (value) => {
        console.log("Selected option:", value);
        // Implement logic to handle the selected option
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission behavior

        // Access form data from state
        const { postContent1, postContent2 } = formData;

        // Log the form data
        console.log("Form Data:", { postContent1, postContent2 });

        // Show a thank you message
        alert("Thanks for submitting!");

        // Navigate to the next route
        goToNext();
    };

    return ( <
        >
        <
        h1 className = "text_box" >
        <
        span className = "letters" > Are you taking any medications or do you have any disease ? < /span> < /
            h1 >

            <
            form onSubmit = { handleSubmit }
        className = "form-container" >
        <
        div className = "image-options-container" > { /* Left Image Option */ } <
        div className = "image-option"
        onClick = {
            () => handleOptionClick("Left")
        } >
        <
        img src = "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR1J8TotEuSGWmqaNMVLLSTBuCQbQ22271IJRiHCiZHojI8drRy"
        alt = "Left" / >
        <
        /div>

        { /* Textarea Container */ } <
        div className = "textarea-container" > { /* Textarea 1 */ } <
        label >
        Medications <
        textarea name = "postContent1"
        value = { formData.postContent1 }
        rows = { 4 }
        onChange = {
            (e) => setFormData({...formData, postContent1: e.target.value })
        }
        /> < /
        label >

        { /* Textarea 2 */ } <
        label >
        Do you have any disease ?
        <
        textarea name = "postContent2"
        value = { formData.postContent2 }
        rows = { 4 }
        onChange = {
            (e) => setFormData({...formData, postContent2: e.target.value })
        }
        /> < /
        label > <
        /div>

        { /* Right Image Option */ } <
        div className = "image-option"
        onClick = {
            () => handleOptionClick("Right")
        } >
        <
        img src = "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQp2Tl5Qx_A-FLfYRcsvRMSXevWIZ8lni_K4Z7MC4vnohbKRTE1"
        alt = "Right" / >
        <
        /div> < /
        div >

        { /* Submit Button */ } <
        div className = "btn-container" >
        <
        button type = "submit"
        className = "btn1" > Submit < /button> <
        button onClick = { goToNext }
        className = "btn2" > Continue < /button> < /
        div > <
        /form> < /
        >
    );
};

export default Medician;