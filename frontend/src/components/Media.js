import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";



//this component will hold the information about the media to be displayed
export default function Media(props) {
  return (
    <Card
      className="display-card"
      style={{ width: "15rem", marginBottom: "5px" }}
      key={props.trackId}
    >
      <Card.Body>
        <Card.Title>{props.artistName}</Card.Title>
        <Card.Text>{props.trackName}</Card.Text>
        <Card.Text>Genre: {props.primaryGenreName}</Card.Text>
        <Button className="favorites-btn"
          variant="primary"
          onClick={props.addfav}
          data-songid={props.index}
          
        >
        Favourite
        </Button>
      </Card.Body>
    </Card>
  );
}
