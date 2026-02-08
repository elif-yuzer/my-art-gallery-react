import React from "react";
import { Outlet } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";
import { Col, Nav, Row, Stack } from "react-bootstrap";

const About = () => {
  const stil= ({isActive})=>({
   color: isActive ? "#0dcaf0" : "white",
    fontWeight: isActive ? "bold" : "normal"
  })

  
  return (
    <div className="text-danger about" >
      <Row>
        <Col sm={12}  md={6} lg={3}>
          <Stack
            direction="horizontal"
            gap={4}
            
            
            
          >
            <Nav.Link  as={NavLink} to="history" style={stil} >
              History
            </Nav.Link>
            <Nav.Link as={NavLink} to="our-services" style={stil} >
              Our Services
            </Nav.Link>
            <Nav.Link as={NavLink} to="location" style={stil}>
              Location
            </Nav.Link>
          </Stack>
        </Col>
        <Col>
          <Outlet/>
        </Col>
      </Row>
      
    </div>
  );
};

export default About;
