import React from "react";
import notfound from "../img/notFound.jpeg";
import { Container, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <Container className="ms-auto">
      <Card.Img
        variant="center"
        src={notfound}
        alt="notFound"
        style={{ width: "250px", height: "250px" }}
      ></Card.Img>
      <Button onClick={() => navigate("/")} className="m-4 btn btn-danger">
        Ana Sayfaya Dön
      </Button>
    </Container>
  );
};

export default NotFound;
