import React, { useState } from 'react'
import "../Login/Login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';



export const Login2 = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onChangeUsername = (e) =>{
      const value = e.target.value
      setUsername(value)
    }

    const onChangePassword = (e) =>{
      const value = e.target.value
      setPassword(value)
    }

    let navigate = useNavigate();
    function handleClick() {
    navigate('/Dashboard')
  }

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
              <h1 className="h1-login">Welcome Admin BCR</h1>
            </div>
            <div className="form">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Contoh: johndee@gmail.com" value={username} onChange={onChangeUsername}/>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="6+ karakter" value={password} onChange={onChangePassword}/>
              </Form.Group>
              <div className="d-grid gap-2">
                <Button className="button-1" variant="primary" size="lg" onClick={handleClick}>
                  Login
                </Button>
              </div>
              {/* <div className="link">
                <a href=".">Already have an account</a>
              </div> */}
            </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
