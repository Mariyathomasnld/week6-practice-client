import React from "react";

import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

export default function Spacecard(props) {
  return (
   
    <Card className = "mb-4" 
      style={{
        backgroundColor: props.backgroundColor,
        color: props.color,
        padding :"40px",
        textAlign:"center"
      }}
    >
      <h1>{props.title}</h1>
      <p> {props.description}</p>

      {props.showLink && (
        <Link to={`/spaces/${props.id}`}>
          <Button style ={{backgroundColor:"#ffffff", border:"0px",color:"#000000"}}>Visit space</Button>
        </Link>
      )}
    </Card>
   
  );
}
