import { GoogleAuthProvider, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import React, { useRef } from 'react';
import { Button, Form, Navbar } from 'react-bootstrap';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Login.css'
import { useState } from 'react';
import googlelogo from '../../../images/googlelogo.png'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [user, setUser] = useState({});
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const googleProvider = new GoogleAuthProvider
    ();

    const handleGoogleSignIn = () => {

      signInWithPopup(auth, googleProvider)
        .then(result => {
          const user = result.user;
          setUser(user);
          console.log(user);
        })
        .catch(error => {
          console.error('error', error)
        })
    }
  

    const navigateRegister = event=> {
        navigate('/register')

    }
    if(user){
      navigate(from, { replace: true });
    }
    const handleSubmit = event =>{
        event.preventDefault();
        const email= emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email,password);
  
    }
    const resetPassword = async () => {
      const email = emailRef.current.value;
      if (email) {
          await sendPasswordResetEmail(email);
          toast('Sent email');
      }
      else{
          toast('please enter your email address');
      }
  }
    return (
        <div className='container loginForm w-50 mx-auto'>
            <h2 className='text-primary text-center'>Please Login</h2>
            <Form onSubmit={handleSubmit}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
  <br/>
  <Button className='mt-3 bg-white text-black rounded-pill' onClick={handleGoogleSignIn}><img  height={20} src={googlelogo} alt="" /> Sign in</Button>
</Form>
<p>Forget Password? <button className='btn btn-link text-primary pe-auto text-decoration-none' onClick={resetPassword}>Reset Password</button> </p>
<ToastContainer />
<p>New to Perfect Couple? <Link to={'/register'} className='text-danger pe-auto text-decoration-none' onClick={navigateRegister}> Please Register</Link></p>
        </div>
    );
};

export default Login;