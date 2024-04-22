import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from 'emailjs-com'; // Import emailjs from 'emailjs-com' package
import './Style1.css'; // Import CSS file for styling

const Yesa = ({ handleIncrementProgress }) => {
    const [selectedOption, setSelectedOption] = useState(null);
    const navigate = useNavigate();

    const options = [{
            id: 1,
            value: 'No',
            imageUrl: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQHQ9i4ai_u4OG1eQCqVusqG8f75boaSKHoxkqVwyy7rUJ__QXK',
        },
        {
            id: 2,
            value: 'Right',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaW-NOV5D1fbHRv0xH12eXFDTw0k0q6tD8Q-vcXBK_lo6abILt',
        },
    ];

    const handleOptionChange = (option) => {
        setSelectedOption(option);
        handleIncrementProgress(); // Increment progress on option change

        // Send email using EmailJS
        emailjs.send('service_zlxb2lj', 'template_peoz9uo', {
                operationExperience: option.value, // Pass selected option value to EmailJS template
            }, 'gLIkjWTl8lHultBUQ')
            .then((result) => {
                console.log('Email sent successfully!', result.text);
            })
            .catch((error) => {
                console.error('Email sending failed:', error.text);
            });

        navigate('/datesw'); // Navigate to "/datesw" route after selecting an option
    };

    return ( <
        >
        <
        h1 className = "text_box" >
        <
        span className = "text-wrapper" >
        <
        span className = "letters" > Hmm.Have you ever had a hair transplant operation before ? < /span> < /
        span > <
        /h1>

        <
        div className = "radio-image-selector" >
        <
        div className = "options-container" > {
            options.map((option) => ( <
                div key = { option.id }
                className = { `option-container ${selectedOption && selectedOption.id === option.id ? 'selected' : ''}` } >
                <
                div className = "image-container" >
                <
                img src = { option.imageUrl }
                alt = { `Option ${option.id}` }
                className = { `option-image ${selectedOption && selectedOption.id === option.id ? 'selected-image' : ''}` }
                onClick = {
                    () => handleOptionChange(option)
                }
                /> < /
                div > <
                label className = "radio-label" >
                <
                input type = "radio"
                name = "options"
                value = { option.value }
                checked = { selectedOption && selectedOption.id === option.id }
                onChange = {
                    () => handleOptionChange(option)
                }
                className = "radio-input" /
                >
                { option.value } <
                /label> < /
                div >
            ))
        } <
        /div> < /
        div > <
        />
    );
};

export default Yesa;