// import { Button } from "bootstrap";
import React, { useState } from "react";
import "../Login/Login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";
import GoogleButton from "react-google-button";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../Firebase";
import { useNavigate } from "react-router-dom";



export const Login = () => {

  
  // function klikButton(){
  //   const click = () => {
  //     return useNavigate ("/Dashboard");
  //   }
  // }
  let navigate = useNavigate();
  function handleClick() {
    navigate('/login')
  }

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
    

  const authDefault = auth
  const provider = new GoogleAuthProvider();


  const handleGoogle = ()=>{
    signInWithPopup(authDefault, provider).then((data)=>{
      console.log(data)


    }).catch((err)=>{
      console.log(err, "ini bukan err")
    })
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
              <h1 className="h1-login">Create new Account</h1>
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
                  Sign Up
                </Button>
              </div>
              <div className="googleButton">
                <GoogleButton onClick={handleGoogle} type="dark" />
              </div>
              <div className="link">
                <a href=".">Already have an account? Login</a>
              </div>
            </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
