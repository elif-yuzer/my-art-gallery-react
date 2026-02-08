import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Form, InputGroup, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";


const Contact = () => {
  const navigate=useNavigate()
  const url = "http://localhost:5178/contacts";
   const [list ,setList]=useState([])

   const getVeri =async()=>{
 try {
   const res=await axios.get(url)
   setList(res.data)
  console.log(res.data);
  
 } catch (error) {
  console.log(error);
  
 }
} 

  const [info, setInfo] = useState({
    name: "",
    lastName: "",
    password: "",
    company: "",
    isAgreed: false,
  });

  const handleChange = (e) => {
    const { name } = e.target;

    const val =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setInfo({ ...info, [name]: val });
    console.log(val);
  };
  const veriGonder = async () => {
    await axios.post(url, info);
  };
  const handleSubmit = async(e) => {
    e.preventDefault();
    setInfo(info);
    console.log(info);
    await veriGonder()
    navigate("/")
  };
  useEffect(() => {
    document.body.style.backgroundColor = "#f0e6ef";
    document.body.style.overflowX = "hidden";
   

     getVeri()
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
    <Container className=" mt-5 m-auto" style={style}>
      <h2 className="text-center mb-4 fw-bold text-dark">
        Create your free account
      </h2>

      <div
        style={{ maxWidth: "400px", width: "100%" }}
        className="p-4 shadow rounded text-dark bg-white"
      >
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <InputGroup>
              <Form.Control
                onChange={handleChange}
                type="text"
                placeholder="First Name"
                required
                name="name"
                value={info.name}
              />
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-3">
            <InputGroup>
              <Form.Control
                type="text"
                placeholder="Last Name"
                name="lastName"
                required
                onChange={handleChange}
                value={info.lastName}
              />
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-3">
            <InputGroup>
              <Form.Control
                type="password"
                placeholder="••••••••"
                name="password"
                required
                autoComplete="auto"
                onChange={handleChange}
                value={info.password}
              />
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-3">
            <InputGroup>
              <Form.Control
                type="text"
                placeholder="Company"
                name="company"
                required
                onChange={handleChange}
                value={info.company}
              />
            </InputGroup>
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
                  I accept the <Link to="/service">Terms of Service</Link> and
                  <Link to="/policy">Privacy Policy</Link>
                </span>
              }
              feedback="You must agree before submitting."
              feedbackType="invalid"
            />
          </Form.Group>
          <Button
            variant="info"
            type="submit"
            className="w-100 fw-bold text-white py-2 mb-3"
          >
            Sign up
          </Button>
          <Form.Text className="mb-3 text-center d-block">
            <Link to="/signin">Already have an account?Sign in </Link>
          </Form.Text>
        </Form>
      </div>
    </Container>
  );
};

export default Contact;
