import React from "react";
import { Carousel, Container, Row, Col, Button } from "react-bootstrap";
import artImg from "../img/josh-liu-Tjio9DgtIls-unsplash.jpg";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate=useNavigate()


  const blueBtnStyle = {
    backgroundColor: "#1a1ab5",
    border: "none",
    borderRadius: "50px",
    padding: "12px 30px",
    fontSize: "1.1rem",
    fontWeight: "500",
  };

  const pinkBtnStyle = {
    backgroundColor: "#e6368d",
    border: "none",
    borderRadius: "50px",
    padding: "12px 30px",
    fontSize: "1.1rem",
    fontWeight: "500",
  };

  return (
    <Carousel controls={false} indicators={false}>
      <Carousel.Item style={{ height: "100vh", position: "relative" }}>
        <img
          className="d-block w-100 h-50"
          src={artImg}
          alt="Art"
          style={{ objectFit: "cover" }}
        />

        <div
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            right: "0",
            bottom: "0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            background: "rgba(0,0,0,0.3)",
            padding: "0 10%",
          }}
        >
          <Container>
            <div className="mt-5">
              <h1
                style={{
                  fontSize: "3rem",
                  fontWeight: "800",
                  marginBottom: "0",
                }}
              >
                exhibitions.
              </h1>
              <h2
                style={{
                  fontSize: "2.5rem",
                  fontWeight: "400",
                  opacity: "0.9",
                }}
              >
                Unlimited by reality. Accessible for everyone.
              </h2>
            </div>

            <Row className="text-start mt-5 pt-5">
            
              <Col md={6} className="pe-md-5 mb-5 mb-md-0">
                <h3 className="fw-bold mb-3">Artists & Art Galleries.</h3>
                <p className="fs-5 mb-4" style={{ maxWidth: "450px" }}>
                  Exhibit your art in beautiful 3D art galleries. Share freely,
                  get instant visitors and sell your art directly.
                </p>
                <Button onClick={()=>navigate("contact")}  style={blueBtnStyle} className="mb-3">
                  Open your own art exhibition »
                </Button >
                <p className="small opacity-75 mt-2">
                  Sign up for free, no credit card required.
                </p>
              </Col>

             
              <Col md={6} className="ps-md-5">
                <h3 className="fw-bold mb-3">Art Lovers & Art Collectors.</h3>
                <p className="fs-5 mb-4" style={{ maxWidth: "450px" }}>
                  Visit 3D art exhibitions from the comfort of your browser.
                  Acquire art directly from the artist.
                </p>
                <Button  onClick={()=>navigate("gallery")} style={pinkBtnStyle}>Discover art exhibitions »</Button>
              </Col>
            </Row>
          </Container>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default Home;
