import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";


const services = [
  {
    title: "Art Exhibitions",
    text: "We curate permanent and temporary exhibitions featuring Claude Monet and other Impressionist masters.",
    icon: "🎨"
  },
  {
    title: "Guided Tours",
    text: "Expert-led tours offering deep insights into Monet’s techniques, history, and artistic vision.",
    icon: "🧭"
  },
  {
    title: "Art Sales",
    text: "Acquire certified reproductions and exclusive artwork inspired by Monet and Impressionism.",
    icon: "🖼️"
  }
 
];

const OurServices = () => {
  return (
    <div className="services-page">
      <Container className="py-5">

        <Card className="text-center mb-5 text-dark ">
          <h1 className="services-title">Our Services</h1>
          <p className="services-subtitle">
            Discover the experiences and professional services we offer at our art gallery.
          </p>
        </Card>

        <Row>
          {services.map((service, index) => (
            <Col key={index} md={6} lg={4} className="mb-4">

              <Card className="service-card h-100 shadow-sm">

                <Card.Body className="text-center">

                  <div className="service-icon">
                    {service.icon}
                  </div>

                  <Card.Title className="service-title">
                    {service.title}
                  </Card.Title>

                  <Card.Text className="service-text">
                    {service.text}
                  </Card.Text>

                </Card.Body>

              </Card>

            </Col>
          ))}
        </Row>

      </Container>
    </div>
  );
};

export default OurServices;
