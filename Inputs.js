import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from 'emailjs-com';
import './RadioImageSelector.css';
import './ProgressBar.css';

const Inputs = ({ handleIncrementProgress }) => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [name, setName] = useState('');
    const navigate = useNavigate();

    const serviceId = 'service_tphf7js';
    const templateId = 'template_0iiexgc'; // Update with your EmailJS template ID
    const publicKey = '9D17TiqeBymorBbRz';

    const options = [{
            id: 1,
            value: 'Light',
            imageUrl: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQGg9T3S8m638TUXqaXUJHS4tz3R9_zYBpz3JW87ISwRdvQy-73',
        },
        {
            id: 2,
            value: 'Right',
            imageUrl: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQGg9T3S8m638TUXqaXUJHS4tz3R9_zYBpz3JW87ISwRdvQy-73',
        },
        {
            id: 3,
            value: 'Center',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8f4qJyATQmrazxIP9zJSXX3WT145DWk219ZutSoniespMUl1u',
        },
        {
            id: 4,
            value: 'Left',
            imageUrl: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS_SGWxYiSm639K4Qz9dC4RRLaZgJ5ycsyeaYfwOl9JgZIyOL1X',
        },
        {
            id: 5,
            value: 'Top',
            imageUrl: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSaw9F_NHOxo1W0TAwaT2MiaReXzWvdnImRaZr8dPGoKLgxRc8W',
        },



        // Add other options here...
    ];

    const handleOptionChange = (option) => {
        setSelectedOption(option);
        handleIncrementProgress();
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!selectedOption) {
            alert('Please select an image option.');
            return;
        }

        const templateParams = {
            from_name: name,
            to_name: 'Web Wizard',
            message: `Selected option: ${selectedOption.value}`,
        };

        emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
                console.log('Email sent successfully!', response);
                setName('');
                setSelectedOption(null);
                navigate('/hears'); // Navigate to "/hears" route
            })
            .catch((error) => {
                console.error('Error sending email:', error);
            });
    };

    const goToNext = () => {
        navigate('/'); // Navigate to "/" route when button is clicked
    };

    return ( <
            >
            <
            h1 className = "text_box" >
            <
            span className = "text-wrapper" >
            <
            span className = "letters" > How do you define your hair loss ? < /span> < /
                span > <
                /h1> <
            form onSubmit = { handleSubmit }
            className = "emailForm" >
            <
            div className = "radio-image-selector" >
            <
            h2 > Select an Option: < /h2> <
            div className = "options-container" > {
                options.map((option) => ( <
                    div key = { option.id }
                    className = "option-container" >
                    <
                    div className = "image-container" >
                    <
                    img src = { option.imageUrl }
                    alt = { `Option ${option.id}` }
                    className = "option-image" /
                    >
                    <
                    /div> <
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
            /div> <
            div className = "selected-option" >
            <
            h3 > Selected Image: < /h3> {
            selectedOption && ( <
                img src = { selectedOption.imageUrl }
                alt = { `Selected ${selectedOption.value}` }
                className = "selected-image" /
                >
            )
        } <
        /div> <
    button type = "submit"
    className = "navigate-button" >
        Submit <
        /button> <
    button type = "button"
    onClick = { goToNext }
    className = "navigate-button" >
        Go to Next Page <
        /button> < /
        div > <
        /form> < /
        >
);
};

export default Inputs;



// {
//     id: 1,
//     value: 'Light',
//     imageUrl: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQGg9T3S8m638TUXqaXUJHS4tz3R9_zYBpz3JW87ISwRdvQy-73',
// },
// {
//     id: 2,
//     value: 'Right',
//     imageUrl: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQGg9T3S8m638TUXqaXUJHS4tz3R9_zYBpz3JW87ISwRdvQy-73',
// },
// {
//     id: 3,
//     value: 'Center',
//     imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8f4qJyATQmrazxIP9zJSXX3WT145DWk219ZutSoniespMUl1u',
// },
// {
//     id: 4,
//     value: 'Left',
//     imageUrl: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS_SGWxYiSm639K4Qz9dC4RRLaZgJ5ycsyeaYfwOl9JgZIyOL1X',
// },
// {
//     id: 5,
//     value: 'Top',
//     imageUrl: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSaw9F_NHOxo1W0TAwaT2MiaReXzWvdnImRaZr8dPGoKLgxRc8W',
// },