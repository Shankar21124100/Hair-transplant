import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from 'emailjs-com'; // Import emailjs from 'emailjs-com' package
import './Style1.css';

const Inteds = () => {
    const navigate = useNavigate();
    const [selectedOption, setSelectedOption] = useState(null); // Track selected option

    const handleOptionChange = (option) => {
        setSelectedOption(option);
    };

    const handleNavigate = () => {
        sendEmail(); // Send email when continuing to the next route
        navigate('/medician'); // Navigate to "/medician" route when button is clicked
    };

    const sendEmail = () => {
        if (selectedOption) {
            // Define email parameters and send using EmailJS
            const templateParams = {
                selectedOption: selectedOption.value,
                imageUrl: selectedOption.imageUrl
            };

            emailjs.send('service_zlxb2lj', 'template_peoz9uo', templateParams, 'gLIkjWTl8lHultBUQ')
                .then((result) => {
                    console.log('Email sent successfully!', result.text);
                })
                .catch((error) => {
                    console.error('Email sending failed:', error.text);
                });
        }
    };

    const options = [{
            id: 1,
            value: 'As soon as possible',
            imageUrl: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQIw_443W4VofNW6veqY9q1t2KfA9X2VwCtBxFOsKpMv0V7dNGO',
        },
        {
            id: 2,
            value: 'Within 3 months',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDz445OCPmn053tMwiJiGy5ir7HfolFt3RnygRBhqWxnIDlKk3',
        },
        {
            id: 3,
            value: 'In 1 Year',
            imageUrl: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRDFpbNCeTwDtqQt3Z-IFTjQkM5FdFOQ9jdOz3fSwvncj2WIW2f',
        },
        {
            id: 4,
            value: 'Within 3 months',
            imageUrl: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT5osQO02LxvUfqWHTwl7u6zacTMs8lHPs_ESCXSbzmmyJ0p7Sv',
        },
    ];

    return ( <
        >
        <
        h1 className = "text_box" >
        <
        span className = "text-wrapper" >
        <
        span className = "letters" > When do you intend to have a hair transplant ? < /span> < /
            span > <
            /h1>

        <
        div className = "container" >
        <
        div className = "shadowed-box" >
        <
        div className = "options-container" > {
            options.map((option) => ( <
                div key = { option.id }
                className = "option-container" >
                <
                label className = "radio-label"
                onClick = {
                    () => handleOptionChange(option)
                } >
                <
                input type = "radio"
                name = "options"
                value = { option.value }
                checked = { selectedOption && selectedOption.id === option.id }
                className = "radio-input" /
                >
                <
                img src = { option.imageUrl }
                alt = { `Option ${option.id}` }
                className = "hair-color-image" / >
                <
                p > { option.value } < /p> < /
                label > <
                /div>
            ))
        } <
        /div>

        {
            selectedOption && ( <
                div className = "selected-image-container" >
                <
                h2 > Selected Hair Transplant Date < /h2> <
                img src = { selectedOption.imageUrl }
                alt = { `Selected ${selectedOption.value}` }
                className = "selected-hair-color-image" / >
                <
                /div>
            )
        }

        <
        button onClick = { handleNavigate }
        className = "next-button" >
        Continue <
        /button> < /
        div > <
        /div> < /
        >
    );
};

export default Inteds;