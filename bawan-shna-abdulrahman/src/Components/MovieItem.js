// import React, { useState } from "react";
// import { Row, Col } from "react-bootstrap";
// import { Modal, Button } from "react-bootstrap";

// export default function MovieItem(props) {
//   const movies = props.movies;
//   const [show, setShow] = useState(false);
//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   const baseUrl = "https://image.tmdb.org/t/p/w500/";

//   return (
//     <Row gutter={40} style={{ marginLeft: "150px" }}>
//       {props.movies.map((movie) => {
//         return (
//           <div style={{ marginTop: "50px", marginBottom: "50px" }}>
//             <Col>
//               <p style={{ marginLeft: "150px" }}>{movie.title}</p>
//               <img
//                 src={baseUrl + movie.backdrop_path}
//                 width="380"
//                 height="300"
//                 style={{ borderRadius: "3px" }}
//               />
//             </Col>

//             <Button
//               style={{ marginLeft: "30px !important" }}
//               variant="warning"
//               onClick={handleShow}
//               style={{ marginTop: "10px" }}
//             >
//               The Overview
//             </Button>

//             <Modal show={show} onHide={handleClose}>
//               <Modal.Header closeButton>
//                 <Modal.Title>OverView</Modal.Title>
//               </Modal.Header>
//               <Modal.Body>
//                 <p>{movie.overview}</p>
//               </Modal.Body>
//               <Modal.Footer>
//                 <Button variant="warning" onClick={handleClose}>
//                   Close
//                 </Button>
//               </Modal.Footer>
//             </Modal>
//           </div>
//         );
//       })}
//     </Row>
//   );
// }
