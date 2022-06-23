import React from "react";
import AccordionItem from "react-bootstrap/AccordionItem"
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default function SpaceCard(props) {
  console.log(props.color)
  return (
    <AccordionItem
      style={{
        backgroundColor: props.backgroundColor,
        color: props.color,
      }}
    >
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      {props.showLink && (
        <Link to={`/spaces/${props.id}`}>
          <Button>Visit space</Button>
        </Link>
      )}
    </AccordionItem>
  );
}