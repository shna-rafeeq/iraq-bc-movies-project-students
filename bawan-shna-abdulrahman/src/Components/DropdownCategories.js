import React from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "react-bootstrap";
import RenderCategories from "./RenderCategories";

export default function DropdownCategories(props) {
  return (
    <>
      <Dropdown style={{ marginRight: "5px" }}>
        <Dropdown.Toggle variant="warning" id="dropdown-basic">
          {props.categorie.name || "Categories"}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <RenderCategories setCategorie={props.setCategorie} />
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}
