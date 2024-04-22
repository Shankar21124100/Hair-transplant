import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from 'emailjs-com'; // Import emailjs from 'emailjs-com' package
import './Style1.css';
import './Hear.css';

const Hears = ({ handleIncrementProgress }) => {
    const [selectedOption, setSelectedOption] = useState(null); // Track selected option
    const navigate = useNavigate();

    const options = [{
            id: 1,
            value: 'Red',
            imageUrl: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTiy30EhrE6CQbfNuQfpFAw-HSFwSi-YPkoRufZYpMGx_mHWKl5',
        },
        {
            id: 2,
            value: 'Brown',
            imageUrl: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTheXc7q-IeI0BeD5_UMx3oj1bHPiMSKBI7ZbYeJvG10Tz2zRch',
        },
        {
            id: 3,
            value: 'Burgundy',
            imageUrl: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTUIKywx2tKaC2-L0c72dpRxHPwN_fJvrRsUX7TKaQdvToOQiDi',
        },
        {
            id: 4,
            value: 'Highlighted',
            imageUrl: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSZ1Db9N4lvX-HxuHZxLmTu5aucHihaUgXJ-tilEBf_lT69XrRm',
        },
        {
            id: 5,
            value: 'Blonde',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgV5VsmAlHV7cr6KUAv44tbRPuxOpKHXfAJz5CaItLvC69nqG1',
        },
    ];

    const handleOptionChange = (option) => {
        setSelectedOption(option);
        handleIncrementProgress(); // Increment progress on option change
    };

    const handleNavigate = () => {
        if (selectedOption) {
            // Send email using EmailJS
            emailjs.send('service_zlxb2lj', 'template_peoz9uo', {
                    hairColor: selectedOption.value, // Pass selected hair color to EmailJS template
                }, 'gLIkjWTl8lHultBUQ')
                .then((result) => {
                    console.log('Email sent successfully!', result.text);
                })
                .catch((error) => {
                    console.error('Email sending failed:', error.text);
                });

            navigate('/duration'); // Navigate to "/duration" route after sending email
        } else {
            alert('Please select a hair color.'); // Alert user if no option is selected
        }
    };

    return ( <
        >
        <
        h1 className = "text_box" >
        <
        span className = "text-wrapper" >
        <
        span className = "letters" > What is your hair color ? < /span> < /
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
                img src = { option.imageUrl }
                alt = { `Option ${option.id}` }
                className = "hair-color-image" /
                >
                <
                label className = "radio-label" >
                <
                input type = "radio"
                name = "hairColor"
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
        /div>

        <
        div className = "selected-image-container" > {
            selectedOption && ( <
                >
                <
                h2 > Selected Hair Color < /h2> <
                img src = { selectedOption.imageUrl }
                alt = { `Selected ${selectedOption.value}` }
                className = "selected-hair-color-image" /
                >
                <
                />
            )
        } <
        /div>

        <
        button onClick = { handleNavigate }
        className = "next-button" >
        Next <
        /button> < /
        div > <
        /div> < /
        >
    );
};

export default Hears;