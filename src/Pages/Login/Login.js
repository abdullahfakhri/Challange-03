// import { Button } from "bootstrap";
import React from "react";
import "../Login/Login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";
// import useNavigate from 'react-router-dom'

export const Login = () => {

  
  // function klikButton(){
  //   const click = () => {
  //     return useNavigate ("/Dashboard");
  //   }
  // }
  
  return (
    <div className="container-login">
      <div className="field-login">
        <div className="gambar-1"></div>
        <div className="login">
          <div>
            <div>
              <div className="box-1"></div>
            </div>
            <div>
              <h1 className="h1-login">Welcome, Admin BCR</h1>
            </div>
            <div className="form">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Contoh: johndee@gmail.com" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="6+ karakter" />
              </Form.Group>
              <div className="d-grid gap-2">
                <Button className="button-1" variant="primary" size="lg">
                  Sign In
                </Button>
              </div>
            </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
