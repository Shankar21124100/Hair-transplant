import { useState } from "react";
import "./Style.css"; // Import CSS file for styling
import { useEffect } from "react";

// eslint-disable-next-line react/prop-types
const ProgressBars = ({ value = 0 }) => {
    const [parrent, setParents] = useState(value);
    useEffect(() => {
        setParents(Math.min(100, Math.max(value, 0)));
    }, [value]);

    return ( <
        div className = "progress" >
        <
        span > { parrent.toFixed() } % < /span> <
        div style = {
            { width: `${parrent}%` }
        }
        /> < /
        div >
    );
};

export default ProgressBars;