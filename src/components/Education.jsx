import React from "react";
import EdItem from "./EdItem";

import imgCerna from "./images/cerna.png";
import imgOvidius from "./images/ovidius.png";
import imgAse from "./images/ase.png";


function Education() {
    return (
        <div>
            <EdItem 
                title="Highschol"
                text='Theoretical Highschool "Panait Cerna" Brăila 2014-2018'
                image={imgCerna}
            />
            <EdItem 
                title="Bachelor's Degree"
                text='Computer Science Bachelor Degree - Ovidius University from Constanța 2018-2021'
                image={imgOvidius}
            />
            <EdItem 
                title="Current: Master's Degree"
                text='Databases - Support for Business 2021-2023'
                image={imgAse}
            />
        </div>
    );
}


export default Education;