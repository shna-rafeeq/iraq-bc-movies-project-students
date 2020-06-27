import React, { useState } from "react";

import { Modal, Button } from "react-bootstrap";

export default function RenderMovie(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div style={{ marginTop: "50px", marginBottom: "50px" }}>
      <p>{props.title}</p>
      <img
        src={props.src}
        alt="movie image"
        width="380"
        height="300"
        style={{ borderRadius: "3px" }}
      />

      <Button
        variant="warning"
        onClick={handleShow}
        style={{ marginTop: "10px" }}
      >
        The Overview
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>OverView</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{props.overview}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="warning" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
