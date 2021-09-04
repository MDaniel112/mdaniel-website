import React from "react";
import Card from "react-bootstrap/Card"
import imgDaniel from "./images/img_daniel.png";


function About(){
    return(
        <Card className="card-background">
            <Card.Img className="card-img-profile" variant="top" src={imgDaniel} />
            <Card.Title ><h1>Hello</h1></Card.Title>
            <Card.Text>My name is Mocanu Daniel - Teodor and this is my personal website. 
            This page serves as a landing page for my projects and displays a few things about me. 
            I am 22 years old and I have just finished a Computer Science bachelor degree at Ovidus 
            University from Constanța. Now I got accepted into the Masters for Databases - 
            Support for Business.</Card.Text>
        </Card>
    );
}

export default About;