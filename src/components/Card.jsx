import React from "react";
import Card from "react-bootstrap/card";

function SkillCard(props) {
    return (
        <Card className={props.cName}>
            <Card.Img variant="top" src={props.image} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                {props.text}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default SkillCard;