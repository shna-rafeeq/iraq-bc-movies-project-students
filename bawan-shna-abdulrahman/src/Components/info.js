import React, { useState, useEffect } from "react";
import { constructUrl } from "./Api";
import { Image } from "react-bootstrap";

export default function Info(props) {
  const nullPhoto =
    "https://bitsofco.de/content/images/2018/12/Screenshot-2018-12-16-at-21.06.29.png";

  const [person, setPerson] = useState({});
  let PERSON_ID = props.match.params.id;
  let SEARCH_URL;

  useEffect(() => {
    SEARCH_URL = constructUrl(`person/${PERSON_ID}`);
    fetch(SEARCH_URL)
      .then((res) => res.json())
      .then((data) => {
        setPerson(data);
      });
  }, [PERSON_ID]);
  let Photo = `https://image.tmdb.org/t/p/original${person.profile_path}`;
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100vh",
          backgroundColor: "#ece4c10",
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginLeft: "10px",
            fontFamily: "Arial",
            fontSize: "20px",
            overflowY: "hidden",
          }}
        >
          <Image
            style={{
              maxHeight: "500px",
              marginTop: "50px",
              marginBottom: "5px",
              borderRadius: "30px",
            }}
            src={
              Photo !== "https://image.tmdb.org/t/p/originalnull"
                ? Photo
                : nullPhoto
            }
          ></Image>
          <p>Name: {person.name}</p>
          <p> known_for_department: {person.known_for_department}</p>
          <p> Date of birth: {person.birthday}</p>
          <p> place of birth: {person.place_of_birth}</p>
        </div>
      </div>
    </>
  );
}
