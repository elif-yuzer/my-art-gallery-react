import React, { useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Gallery = ({ artists = [], artworks = [] }) => {
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.background =
      "linear-gradient(135deg, #d9d9d9 0%, #ffedd8 100%)";
    document.body.style.minHeight = "100vh";
    return () => {
      document.body.style.background = "";
    };
  }, []);

  return (
    <Container className="py-5 mx-auto gallery-container">
      <Row>
        {artworks.map((item, index) => {
          const artist = artists.find((a) => a.id === item.artistId);
          return (
            <Col
              key={item.id}
              lg={index % 3 === 0 ? 8 : 4}
              md={6}
              sm={12}
              className="mb-4 mx-auto"
            >
              <Card
                onClick={() =>
                  artist &&
                  navigate(`/artists/${artist.id}`, { state: { artist } })
                }
                className="h-100 shadow-sm border-0 mx-auto card"
              >
                <Card.Img
                  className="card-img"
                  style={{
                    objectFit: "contain",
                    cursor: "pointer",
                    height: "500px",
                    width: "500px",
                  }}
                  variant="top"
                  src={item.image}
                />
                <Card.Body
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  <Card.Title className="text-muted card-title">
                    {artist ? artist.name : "Unknown artist"}
                  </Card.Title>
                  <Card.Text className="fw-bold mt-auto card-text">
                    {item.title}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Gallery;