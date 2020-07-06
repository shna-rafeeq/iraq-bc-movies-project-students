import React, { useState, useEffect } from "react";
import { constructUrl } from "./Api";
import { Link } from "react-router-dom";
import "./moviePage.css";
import {
  Card,
  Badge,
  Carousel,
  Row,
  Col,
  Image,
  Button,
} from "react-bootstrap";
import ReactPlayer from "react-player";

export default function MoviePage(props) {
  const nullPhoto =
    "https://image.tmdb.org/t/p/w500/wwemzKWzjKYJFfCeiB57q3r4Bcm.png";

  let SEARCH_URL;
  // let { id } = useParams();
  // let MOVIE_ID = id;
  let MOVIE_ID = props.match.params.id;
  const [movieItem, setMovieItem] = useState({});
  const [trailers, setTrailers] = useState([]);
  const [actors, setActors] = useState([]);

  // fetch each movie
  useEffect(() => {
    SEARCH_URL = constructUrl(`movie/${MOVIE_ID}`);
    fetch(SEARCH_URL)
      .then((res) => res.json())
      .then((data) => {
        setMovieItem(data);
      })
      .catch((e) => {
        props.history.push("/");
      });
  }, [MOVIE_ID]);
  //fetch trailers
  useEffect(() => {
    SEARCH_URL = constructUrl(`movie/${MOVIE_ID}/videos`);
    fetch(SEARCH_URL)
      .then((res) => res.json())
      .then((data) => {
        const tmp = [];
        data.results.map((trailer) => {
          tmp.push(`https://www.youtube.com/watch?v=${trailer.key}`);
        });
        setTrailers(tmp);
      });
  }, [MOVIE_ID]);

  //fetch actors
  useEffect(() => {
    SEARCH_URL = constructUrl(`movie/${MOVIE_ID}/credits`);
    fetch(SEARCH_URL)
      .then((res) => res.json())
      .then((data) => {
        setActors(data.cast);
      });
  }, [MOVIE_ID]);

  return (
    <>
      <Row>
        <Col
          lg={12}
          style={{
            backgroundImage: `url(${
              movieItem.backdrop_path !== null
                ? `https://image.tmdb.org/t/p/original${movieItem.backdrop_path}`
                : nullPhoto
            })`,
            height: "100vh",
            top: 0,
            width: "100%",
            backgroundSize: "cover",
            position: "absolute",
            right: 0,
            left: 0,
            zIndex: 1,
          }}
        ></Col>
        <div className="grdaient"></div>
        <Col lg={12} sm={12} className="badgeCol">
          {movieItem.genres
            ? movieItem.genres.map((genre) => {
                return (
                  <Badge className="Badge" variant="warning">
                    {genre.name}
                  </Badge>
                );
              })
            : null}
        </Col>
        <Col className="ActorsCol" lg={3} md={3} sm={12}>
          <p className="ActorsP">Actors:</p>
          <ol className="ActorsList">
            {actors.map((v) => {
              return (
                <Link className="actors-link" to={`/person/${v.id}`}>
                  <li>{v.name}</li>
                </Link>
              );
            })}
          </ol>
        </Col>

        <Col lg={{ span: 8 }} sm={12} className="CarouselCol">
          <Carousel className="Carousel" style={{ zIndex: 3 }}>
            {trailers.map((v, i) => {
              return (
                <Carousel.Item>
                  <ReactPlayer width="100%" key={`haha-${i}`} url={v} />
                </Carousel.Item>
              );
            })}
          </Carousel>
        </Col>
      </Row>
    </>
  );
}
