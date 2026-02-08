import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";


const History = () => {
  return (
    <Card className="history-section text-dark 
      " style={{height:"100vh"}}>
      <Container>

        <Row className="justify-content-center">
          <Col lg={8}>

            <div className="history-card">

              <h2 className="history-title">
                Our History
              </h2>

              <p className="history-text">
                Founded in 1920, our gallery was established with a vision to preserve
                and celebrate the legacy of Impressionist art, especially the works of Claude Monet.
                Over the decades, the gallery has grown into a cultural institution dedicated to
                showcasing timeless masterpieces.
              </p>

              <p className="history-text">
                Our mission is to provide visitors with an immersive artistic experience,
                connecting them with the beauty, emotion, and innovation of the Impressionist movement.
                Through exhibitions, educational programs, and restoration efforts, we continue to
                honor Monet’s vision and inspire future generations.
              </p>

              <p className="history-text">
                Today, the gallery stands as a bridge between history and modern appreciation,
                welcoming thousands of art lovers from around the world each year.
              </p>

              <div className="history-highlight">
                “Art is not what you see, but what you make others see.”  
                <span> — Edgar Degas</span>
              </div>

            </div>

          </Col>
        </Row>

      </Container>
    </Card>
  );
};

export default History;
