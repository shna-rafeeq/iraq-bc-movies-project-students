import React, { useState } from "react";

import { Modal, Button, Card, CardTitle, CardText } from "react-bootstrap";

export default function RenderMovie(props) {
  const [show, setShow] = useState(false);
  let toogle = () => setShow((prev) => !prev);

  return (
    <div style={{ marginTop: "50px" }}>
      <Card style={{ width: "300px", margin: "10px" }}>
        <Card.Img variant="top" src={props.src} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>

          <Button
            variant="warning"
            onClick={toogle}
            style={{ marginTop: "10px" }}
          >
            Overview
          </Button>

          <Modal show={show} onHide={toogle}>
            <Modal.Header closeButton>
              <Modal.Title>OverView</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>{props.overview}</p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="warning" onClick={toogle}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </Card.Body>
      </Card>
    </div>
  );
}
