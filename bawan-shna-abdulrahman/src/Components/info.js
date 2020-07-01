import React, { useState, useEffect } from "react";
import { constructUrl } from "./Api";

export default function Info(props) {
  const [person, setPerson] = useState({});
  let PERSON_ID = props.match.params.id;
  let SEARCH_URL;
  console.log(props.match.params.id);

  useEffect(() => {
    SEARCH_URL = constructUrl(`person/${PERSON_ID}`);
    fetch(SEARCH_URL)
      .then((res) => res.json())
      .then((data) => {
        setPerson(data);
      });
  }, [PERSON_ID]);

  return (
    <>
      <p> {person.birthday}</p>
    </>
  );
}
