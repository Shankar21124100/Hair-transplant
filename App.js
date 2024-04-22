import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Routs from './Components/Routs';
import Inputs from './Inputs';
import Hears from './Pages/Hears';
import Duration from './Pages/Duration';
import Yesa from './Pages/Yesa';
import Datesw from './Pages/Datesw';
import Intends from './Pages/Intends';
import Medician from './Pages/Medician';
import Results from './Pages/Results';
import Women from './Pages/Women';

function App() {
    const [progress, setProgress] = useState(0);

    const handleIncrementProgress = () => {
        if (progress < 100) {
            setProgress(prevProgress => prevProgress + 10);
        }
    };

    return ( <
            div className = "App" >
            <
            BrowserRouter >
            <
            Routes >
            <
            Route path = "/"
            element = { < Routs / > }
            /> <
            Route path = "/inputs"
            element = { < Inputs progress = { progress }
                handleIncrementProgress = { handleIncrementProgress }
                />} / >
                <
                Route path = "/hears"
                element = { < Hears progress = { progress }
                    handleIncrementProgress = { handleIncrementProgress }
                    />} / >
                    <
                    Route path = "/duration"
                    element = { < Duration progress = { progress }
                        handleIncrementProgress = { handleIncrementProgress }
                        />} / >
                        <
                        Route path = "/yesa"
                        element = { < Yesa progress = { progress }
                            handleIncrementProgress = { handleIncrementProgress }
                            />} / >
                            <
                            Route path = "/datesw"
                            element = { < Datesw progress = { progress }
                                handleIncrementProgress = { handleIncrementProgress }
                                />} / >
                                <
                                Route path = "/intends"
                                element = { < Intends progress = { progress }
                                    handleIncrementProgress = { handleIncrementProgress }
                                    />} / >
                                    <
                                    Route path = "/medician"
                                    element = { < Medician progress = { progress }
                                        handleIncrementProgress = { handleIncrementProgress }
                                        />} / >
                                        <
                                        Route path = "/results"
                                        element = { < Results progress = { progress }
                                            handleIncrementProgress = { handleIncrementProgress }
                                            />} / >
                                            <
                                            Route path = "/women"
                                            element = { < Women progress = { progress }
                                                handleIncrementProgress = { handleIncrementProgress }
                                                />} / >
                                                <
                                                /Routes> < /
                                                BrowserRouter > <
                                                /div>
                                            );
                                        }

                                        export default App;