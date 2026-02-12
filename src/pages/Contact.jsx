import React, { useEffect, useState } from "react";
import { Container, Form, InputGroup, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();

  const [info, setInfo] = useState({
    name: "",
    lastName: "",
    company: "",
    message: "",
    isAgreed: false,
  });

  const handleChange = (e) => {
    const { name } = e.target;
    const val =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setInfo({ ...info, [name]: val });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // API yok: şimdilik sadece yönlendir
    // İleride Formspree / email servisi eklenebilir
    alert("Thanks! Your message was received.");
    navigate("/");
  };

  useEffect(() => {
    document.body.style.backgroundColor = "#f0e6ef";
    document.body.style.overflowX = "hidden";

    return () => {
      document.body.style.backgroundColor = "";
      document.body.style.overflowX = "auto";
    };
  }, []);

  const style = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "0",
    padding: "0",
    width: "100%",
    minHeight: "100vh",
  };

  return (
    <Container className="mt-5 m-auto" style={style}>
      <h2 className="text-center mb-4 fw-bold text-dark">Contact us</h2>

      <div
        style={{ maxWidth: "400px", width: "100%" }}
        className="p-4 shadow rounded text-dark bg-white"
      >
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Control
              onChange={handleChange}
              type="text"
              placeholder="First Name"
              required
              name="name"
              value={info.name}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Last Name"
              name="lastName"
              required
              onChange={handleChange}
              value={info.lastName}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Company"
              name="company"
              onChange={handleChange}
              value={info.company}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Your message"
              name="message"
              required
              onChange={handleChange}
              value={info.message}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Check
              type="checkbox"
              id="label"
              name="isAgreed"
              required
              checked={info.isAgreed}
              onChange={handleChange}
              label={
                <span>
                  I accept the <Link to="/about">Terms</Link>
                </span>
              }
            />
          </Form.Group>

          <Button
            variant="info"
            type="submit"
            className="w-100 fw-bold text-white py-2 mb-3"
          >
            Send message
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default Contact;