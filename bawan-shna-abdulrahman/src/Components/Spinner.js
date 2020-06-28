// This is review branch
import React from "react";
import { Spinner } from "react-bootstrap";

export default function Spinners(props) {
  return (
    <>
      {props.isLoading && (
        <Spinner animation="border" variant="warning" size="sm" />
      )}
    </>
  );
}
