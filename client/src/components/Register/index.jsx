import "./index.css";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import NavBar from "../NavBar";

import { useState } from "react";
import axios from "axios";
import "../../index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Image from "react-bootstrap/Image";
import registerImg from "../../assets/registerImg.png";
import logo from "../../assets/OP-1.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [users, setUsers] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUsers({
      ...users,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api/users", users)
      .then((response) => console.log(response, users))
      .catch((err) => toast.error(err.response.data.message));
  };
  return (
    <>
      <div className="bgimagecontainer position-absolute">
        <NavBar></NavBar>
        <ToastContainer />
        <Container className="w-xl-75 w-sm-100 h-sm-100 bg-secondary rounded bg-color-4 shadow d-lg-flex justify-content-between-lg px-0 vh-lg-75 register-container">
          <Form className="p-4 rounded registerForm" onSubmit={handleSubmit}>
            <Image src={logo} className="logo"></Image>
            <Form.Group controlId="formEmail" className="mb-3">
              <h1 className="mb-5">Create an Account</h1>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter Email"
                onChange={handleInputChange}
              ></Form.Control>
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formPassword" className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                onChange={handleInputChange}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="formConfirmPassword" className="mb-3">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                name="confirm-password"
                onChange={handleInputChange}
              ></Form.Control>
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              className="w-100 mb-5 bg-color-2 registerBtn"
            >
              Create Account
              <FontAwesomeIcon icon={faArrowRight} className="float-end mt-1" />
            </Button>
            <Row>
              <Col className="col-8">
                <p>Already have an account?</p>
              </Col>
              <Col className="col-4">
                <Link to="/login" className="float-end">
                  Log in
                </Link>
              </Col>
            </Row>
            <Row>
              <Col className="col-8">
                <p>Forgot Password?</p>
              </Col>
              <Col className="col-4">
                <Link className="float-end">Get Help</Link>
              </Col>
            </Row>
          </Form>
          <Image src={registerImg} className="registerImg rounded"></Image>
        </Container>
      </div>
    </>
  );
};

export default Register;
