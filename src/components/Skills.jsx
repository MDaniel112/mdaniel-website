import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


import imgCoding from "./images/coding.png";
import imgModeling from "./images/3d-modeling.png";
import imgML from "./images/machine-learning.png";
import imgWeb from "./images/web.png";

import SkillCard from "./Card";


function Skills() {
    return (
        <Row>
            <Col md={12} lg={6}>
                <SkillCard 
                    cName= "skill-card"
                    image= {imgWeb}
                    title= "Web Developement"
                    text= "HTML, CSS, Javascript, Flask, NodeJS, React"
                />
            </Col>
            <Col md={12} lg={6}>
                <SkillCard 
                    cName= "skill-card"
                    image= {imgCoding}
                    title= "Programming"
                    text= "Python, Java, C/C++"
                />
            </Col>
            <Col md={12} lg={6}>
                <SkillCard 
                    cName= "skill-card"
                    image= {imgML}
                    title= "Machine Learning"
                    text= "SKLearn, Tensorflow, Keras"
                />
            </Col>
            <Col md={12} lg={6}>
                <SkillCard 
                    cName= "skill-card"
                    image= {imgModeling}
                    title= "3D Modeling"
                    text= "Blender 3D Moddeling"
                />
            </Col>
        </Row>
    );
}

export default Skills;