import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"


function EdItem(props) {
    return (
        <Row className="ed-row">
            <Col sm={12} lg={4}>
                <img src={props.image} alt={props.image} className="ed-img"/>
            </Col>
            <Col sm={12} lg={8} className="ed-text">
                <h3>{props.title}</h3>
                <p> {props.text} </p>
            </Col>
        </Row>
    );
}

export default EdItem;