import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

//this component will hold the information about the favorites to be displayed
export default function Favorites(props, favorites) {
  return (
    <div>
      <div className="favourite-items-wrapper">
        <Card
          className="display-card"
          style={{ width: "15rem", marginBottom: "5px" }}
          key={favorites.trackId}
        >
          <Card.Body>
            <Card.Title>Artist: {props.artist}</Card.Title>
            <Card.Text>Title: {props.track}</Card.Text>
            <Card.Text>Genre: {props.genre}</Card.Text>
            <Button
              className="favorites-btn"
              variant="primary"
              onClick={props.removeFav}
              data-songid={props.index}
            >
              Remove
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
