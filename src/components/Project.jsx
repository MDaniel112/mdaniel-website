import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";


function Project(props) {
    return(
        <Col md={12} lg={3}>
            <Card className={props.cName}>
                {/* <Card.Img variant="top" src={props.image} /> */}
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                        {props.text}
                    </Card.Text>
                    <Card.Link href={props.pLink}>Go to project</Card.Link>
                </Card.Body>
            </Card>
        </Col>
    );
}


export default Project;