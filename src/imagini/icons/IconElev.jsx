import React from "react";
import IconReutilizabil from "./IconReutilizabil";

const IconElev = () => {

    const elevIconSVG = "M18.623,55.406V75.4L47.25,94.5,75.877,75.4V55.406L47.25,74.508ZM47.25,4.5l-45,30,45,30L84.074,39.961V74.508H92.25V34.5Z"
    
    return (
        <div>
            <IconReutilizabil
                svgCode={elevIconSVG}
                width={100}
                height={100}
                fillColor="#0d114d"
            />
        </div>
    );
};

export default IconElev;
