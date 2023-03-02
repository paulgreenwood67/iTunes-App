import React from "react";
import renderer from "react-test-renderer";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

// import AppLayout from "../src/components/AppLayout";
// test("renders correctly", () => {
//   const tree = renderer.create(<AppLayout>AppLayout</AppLayout>).toJSON();
//   expect(tree).toMatchSnapshot();
// });

import Media from "../src/components/Media";

test("renders correctly", () => {
  const tree = renderer
    .create(
      <Media>
        <Card>
          <Card.Body>
            <Card.Title></Card.Title>
            <Card.Text></Card.Text>
            <Card.Text></Card.Text>
            <Button></Button>
          </Card.Body>
        </Card>
      </Media>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
