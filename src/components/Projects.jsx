import React from "react";
import Project from "./Project";
import Row from "react-bootstrap/Row";


function Projects(){
    return (
        <div>
            <Row>
                <Project 
                    cName="project-card"
                    title="Tindog"
                    text="A bootstrap 5 landing page."
                    pLink="https://mdaniel112.github.io/TinDog/"
                />
                <Project 
                    cName="project-card"
                    title="BMI Calculator"
                    text="A javascript bmi calculator."
                    pLink="https://mdaniel112.github.io/bmi_calculator/"
                />
                <Project 
                    cName="project-card"
                    title="Dicee"
                    text="A javascript dice game."
                    pLink="https://mdaniel112.github.io/Dicee/"
                />
                <Project 
                    cName="project-card"
                    title="Drumkit"
                    text="A drum javascript game."
                    pLink="https://mdaniel112.github.io/DrumKit/"
                />
                <Project 
                    cName="project-card"
                    title="Newsletter"
                    text="A Node JS newsletter application."
                    pLink="https://safe-savannah-73619.herokuapp.com/"
                />
                <Project 
                    cName="project-card"
                    title="To Do List"
                    text="A Node JS and MongoDB to do list type application."
                    pLink="https://obscure-meadow-42883.herokuapp.com/"
                />
                <Project 
                    cName="project-card"
                    title="Diary"
                    text="A Node JS and MongoDB diary type application."
                    pLink="https://intense-retreat-83709.herokuapp.com/"
                />
            </Row>
            <Row>
                <h2><a href="https://www.cgtrader.com/mdaniel112">Some of my 3D Modeling Projects</a></h2>
            </Row>
        </div>
    );
}


export default Projects;