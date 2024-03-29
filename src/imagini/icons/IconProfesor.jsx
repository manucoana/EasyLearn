import React from "react";
import IconReutilizabil from "./IconReutilizabil";

const IconProfesor = () => {

    const profesorIconSVG = "M31.467,56.225A3.293,3.293,0,0,0,30.4,56.4a19,19,0,0,1-6.194,1.1,19.021,19.021,0,0,1-6.2-1.1,3.284,3.284,0,0,0-1.067-.174C7.555,56.225-.05,64.288,0,74.214a7.447,7.447,0,0,0,7.262,7.568H41.149a7.447,7.447,0,0,0,7.262-7.568C48.461,64.288,40.856,56.225,31.467,56.225Zm-7.262-5.111c8.021,0,14.523-6.865,14.523-15.334s-6.5-15.334-14.523-15.334S9.682,27.311,9.682,35.78,16.184,51.114,24.205,51.114ZM89.56,0H31.467c-4,0-7.262,3.554-7.262,7.921v7.413a18.39,18.39,0,0,1,9.682,2.843V10.223H87.139v46H77.457V46H58.093V56.225H46.559a20.554,20.554,0,0,1,6,10.223h37c4,0,7.262-3.554,7.262-7.921V7.921C96.822,3.554,93.564,0,89.56,0Z"
    
    return (
        <div>
            <IconReutilizabil
                svgCode={profesorIconSVG}
                width={100}
                height={81}
                fillColor="#0d114d"
            />
        </div>
    );
};

export default IconProfesor;
