import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

function Signup() {
  const [name, setName] = useState("");
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
      let item = { name, email, password };
      console.warn(item);

      // Using sweetalert2 for success popup
      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'Thank you for signing up.',
        confirmButtonText: 'Close',
        onClose: () => {
          window.location.reload();
        }
      });
    } else {
      console.log("Email is not valid. Please enter a valid email address.");
    }
  };

  // const closeModal = () => {
  //   // Reset the form after closing the modal
  //   setName("");
  //   setEmail("");
  //   setPassword("");
  // };

  return (
    <div className="container" style={{ marginTop: "80px", marginBottom: '30px' }}>
      <div className="card p-4" style={{ width: '400px', margin: 'auto' }}>
        <h2 className="text-center mb-4">Sign Up</h2>
        <div className="mb-3">
          <label htmlFor="exampleInput1" className="form-label">Name</label>
          <input type="text" className="form-control" id="exampleInput" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
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
        <button type="submit" onClick={signIn} className="btn btn-primary mb-3" >Submit</button>

        <p className="text-center">
          Already Registered? <Link className="btn btn-outline-primary ml-1" to='/login'>Log In</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;



// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';

// function Signup() {
//   const history = useNavigate();

//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [emailError, setEmailError] = useState("");
//   const [showSuccessModal, setShowSuccessModal] = useState(false);

//   const validateEmail = (inputEmail) => {
//     // Regular expression for a simple email validation
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(inputEmail);
//   };

//   const handleEmailChange = (inputEmail) => {
//     setEmail(inputEmail);
//     setEmailError(validateEmail(inputEmail) ? "" : "Please enter a valid email address");
//   };

//   const signIn = () => {
//     if (validateEmail(email)) {
//       let item = { name, email, password };
//       console.warn(item);

//       // Show the success modal
//       setShowSuccessModal(true);
//     } else {
//       console.log("Email is not valid. Please enter a valid email address.");
//     }
//   };

//   const handleSuccessModalClose = () => {
//     // Close the success modal and navigate to login
//     setShowSuccessModal(false);
//     history('/login');
//   };

//   return (
//     <div className="container" style={{ marginTop: "80px", marginBottom: '30px' }}>
//       <div className="card p-4" style={{ width: '400px', margin: 'auto' }}>
//         <h2 className="text-center mb-4">Sign Up</h2>
//         <div className="mb-3">
//           <label htmlFor="exampleInput1" className="form-label">Name</label>
//           <input type="text" className="form-control" id="exampleInput" value={name} onChange={(e) => setName(e.target.value)} />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="exampleInputEmail2" className="form-label">Email address</label>
//           <input
//             type="email"
//             className="form-control"
//             value={email}
//             onChange={(e) => handleEmailChange(e.target.value)}
//             id="exampleInputEmail2"
//           />
//           {emailError && <small className="text-danger">{emailError}</small>}
//         </div>
//         <div className="mb-3">
//           <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
//           <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={(e) => setPassword(e.target.value)} />
//         </div>
//         <button type="submit" onClick={signIn} className="btn btn-primary mb-3" >Submit</button>

//         <p className="text-center">
//           Already Registered? <Link className="btn btn-outline-primary ml-1" to='/login'>Log In</Link>
//         </p>
//       </div>

//       {showSuccessModal && (
//         <div className="modal fade show" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
//           <div className="modal-dialog" role="document">
//             <div className="modal-content">
//               <div className="modal-header">
//                 <h5 className="modal-title" id="exampleModalLabel">Success</h5>
//                 <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleSuccessModalClose}></button>
//               </div>
//               <div className="modal-body">
//                 <p>Signup successful!</p>
//               </div>
//               <div className="modal-footer">
//                 <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={handleSuccessModalClose}>Close</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Signup;

