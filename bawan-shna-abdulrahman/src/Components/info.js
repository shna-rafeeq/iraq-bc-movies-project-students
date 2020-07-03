import React, { useState, useEffect } from "react";
import { constructUrl } from "./Api";
import { Image } from "react-bootstrap";

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
  console.log(person);
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100vh",
          backgroundColor: "#ece4c9",
        }}
      >
        <div
          style={{
            marginLeft: "10px",
            fontFamily: "Arial",
            fontSize: "20px",
            overflowY: "hidden",
          }}
        >
          <Image
            style={{
              float: "right",
              height: "60%",
            }}
            src={`https://image.tmdb.org/t/p/original${person.profile_path}`}
          ></Image>
          <p>Name: {person.name}</p>
          <p> known_for_department: {person.known_for_department}</p>
          <p> Date of birth: {person.birthday}</p>
          <p> place of birth: {person.place_of_birth}</p>
          {/* <p>
            biography: `{person.biography} ?{person.biography} :"helo"`
          </p> */}
        </div>
      </div>
    </>
  );
}
