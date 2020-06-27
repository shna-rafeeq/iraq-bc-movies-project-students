import React, { useState, useEffect } from "react";
import { constructUrl } from "./Api";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "react-bootstrap";

export default function RenderCategories(props) {
  const SEARCH_URL_Categories = constructUrl("genre/movie/list", "");

  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch(SEARCH_URL_Categories)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.genres !== undefined) setCategories(data.genres);
      })
      .catch((err) => console.log(err));
  }, [SEARCH_URL_Categories]);

  return (
    <>
      {categories.length > 0 &&
        categories.map((category) => {
          return (
            <Dropdown.Item
              href="#"
              key={category.id}
              onSelect={() => props.setCategorie(category)}
            >
              {category.name}
            </Dropdown.Item>
          );
        })}
    </>
  );
}
