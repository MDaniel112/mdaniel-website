import React, { useState } from "react";

import About from "./About";
import Skills from "./Skills";
import Education from "./Education";
import Projects from "./Projects";
import Contact from "./Contact";

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Button from "react-bootstrap/Button"
import ButtonGroup from "react-bootstrap/ButtonGroup";


function Content(){
    const [pageContent, setPageContent] = useState(<About />);


    return(
        <div className="main-content bg-light">
            <Row className="d-flex justify-content-center mb-3 list-group">
                <ButtonGroup>
                    <Button variant="light" size="lg" onClick={() => setPageContent(<About />)}>About</Button>
                    <Button variant="light" size="lg" onClick={() => setPageContent(<Skills />)}>Skills</Button>
                    <Button variant="light" size="lg" onClick={() => setPageContent(<Education />)}>Education</Button>
                    <Button variant="light" size="lg" onClick={() => setPageContent(<Projects />)}>Projects</Button>
                    <Button variant="light" size="lg" onClick={() => setPageContent(<Contact />)}>Contact</Button>
                </ButtonGroup>
            </Row>

            <Row id="pageContent" className="content-row">
                {pageContent}
                
                
            </Row>
        </div>
    );
}

export default Content;