import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";


const Location = () => {
  return (
    <div className="location-page " style={{minHeight:"100vh"}}>
      <Container className="py-5">

        <Card className="text-center mb-5 text-dark fs-3">
          <h1 className="location-title">Our Location</h1>
          <p className="location-subtitle">
            Visit our gallery and experience the beauty of Impressionist art.
          </p>
        </Card>

        <Row className="g-4  ms-auto">

         
          <Col md={6} >
            <Card className="location-card h-100 mx-auto">
              <Card.Body>
                <h4 className="mb-3">Gallery Address</h4>

                <p>
                  📍 Monet Art Gallery <br />
                  24 Rue de l'Art <br />
                  Paris, France
                </p>

                <p>
                  📞 +33 1 23 45 67 89
                </p>

                <p>
                  ✉ info@monetgallery.com
                </p>

                <h5 className="mt-4">Opening Hours</h5>

                <p>
                  Monday – Friday: 10:00 – 18:00 <br />
                  Saturday: 11:00 – 17:00 <br />
                  Sunday: Closed
                </p>

              </Card.Body>
            </Card>
          </Col>

          {/* Map */}
          <Col md={6}>
            <Card className="location-card h-100">
              <iframe
                title="gallery-location"
                src="https://maps.google.com/maps?q=paris&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  borderRadius: "12px",
                  minHeight: "300px"
                }}
                loading="lazy"
              ></iframe>
            </Card>
          </Col>

        </Row>

      </Container>
    </div>
  );
};

export default Location;
