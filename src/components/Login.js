import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");

  const validateEmail = (inputEmail) => {
    // Regular expression for a simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(inputEmail);
  };

  const handleEmailChange = (inputEmail) => {
    setEmail(inputEmail);
    setEmailError(validateEmail(inputEmail) ? "" : "Please enter a valid email address");
  };

  const signIn = () => {
    if (validateEmail(email)) {
      let item = { email, password };
      console.warn(item);

      // Using sweetalert2 for login success popup

      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'Login successful!',
        confirmButtonText: 'Continue',
        onClose: () => navigate('/')
      });
    } else {
      console.log("Email is not valid. Please enter a valid email address.");
    }
  };

  return (
    <div className="container " style={{ marginTop: "80px", marginBottom: '30px' }}>
      <div className="card p-4" style={{ width: '400px', margin: 'auto' }}>
        <h2 className="text-center mb-4">Log In</h2>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail2" className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => handleEmailChange(e.target.value)}
            id="exampleInputEmail2"
          />
          {emailError && <small className="text-danger">{emailError}</small>}
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit" onClick={signIn} className="btn btn-primary mb-3" >Log In</button>

        <p className="text-center">New user? <button type="submit" className="btn btn-outline-primary ml-1" to='/signup' >Sign Up</button>
        </p>
      </div>
    </div>
  );
}

export default Login;
