import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from 'emailjs-com'; // Import emailjs from 'emailjs-com' package
import './Style1.css'; // Import CSS file for styling
import './Style3.css';

const Women = ({ handleIncrementProgress }) => {
    const [selectedOption, setSelectedOption] = useState(null);
    const navigate = useNavigate();

    const options = [{
            id: 1,
            value: 'Women',
            imageUrl: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRT_HdEj27tImhczevWZK-mDNZ8i81i6nctp4eaAlP0VvW86Ruq',
        },
        {
            id: 2,
            value: 'Men',
            imageUrl: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS9irq0gotrmX-W9AxBxYjtuF324vdRoCgf9zzSXKPKlE8qjDxR',
        },
    ];

    const handleOptionChange = (option) => {
        setSelectedOption(option);
        handleIncrementProgress(); // Increment progress on option change

        // Send email using EmailJS
        emailjs.send('service_zlxb2lj', 'template_peoz9uo', {
                gender: option.value // Pass selected option value to EmailJS template
            }, 'gLIkjWTl8lHultBUQ')
            .then((result) => {
                console.log('Email sent successfully!', result.text);
            })
            .catch((error) => {
                console.error('Email sending failed:', error.text);
            });

        navigate('/inputs'); // Navigate to "/inputs" route after selecting an option
    };

    return ( <
        >
        <
        h1 className = "text_box" >
        <
        span className = "text-wrapper" >
        <
        span className = "letters" > Please choose your gender. < /span> < /
        span > <
        /h1>

        <
        div className = "radio-image-selector3" >
        <
        h2 > Select an Option: < /h2> <
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

export default Women;