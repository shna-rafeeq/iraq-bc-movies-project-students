import React from "react";
import { Spinner } from "react-bootstrap";

export default function Spinners(props) {
  return (
    <>
      {!props.isSpinnerHidden && (
        <Spinner
          animation="border"
          variant="info"
          size="sm"
          style={{ marginLeft: "8px" }}
        />
      )}
    </>
  );
}
