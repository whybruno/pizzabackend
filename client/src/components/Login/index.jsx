import NavBar from "../NavBar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/esm/Container";
import { useState } from "react";
import axios from "axios";
import "../../index.css";
import "./index.css";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [users, setUsers] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

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
      .post("/api/users/login", users)
      //adding logged user ID into local storage to show the correct page
      .then((response) => {
        localStorage.setItem("userID", response.data.data[0].id);
        navigate("/");
      })
      .catch((err) => toast.error(err.response.data.message));
  };
  return (
    <>
      <div className="bgimagecontainer position-absolute">
        <NavBar></NavBar>
        <ToastContainer></ToastContainer>
        <Container className="bg-color-4 rounded w-xxl-25 w-sm-100 md-w-25 sm-h-100 p-5 shadow loginContainer">
          <h1 className="text-center pb-3 mb-3">Login</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Email"
                name="email"
                onChange={handleInputChange}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="formPassword" className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Enter Password"
                onChange={handleInputChange}
              ></Form.Control>
            </Form.Group>
            <Button type="submit" className="mb-3 w-100 bg-color-2">
              Login
            </Button>
          </Form>
          <p className="mt-3 pt-3 border-top">
            New to Slize and Sizzle?{" "}
            <Link to="/register" className="color-2">
              Sign Up
            </Link>
          </p>
        </Container>
      </div>
    </>
  );
};

export default Login;
