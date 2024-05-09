import React, {useState} from "react";
import "./SignUp.scss";
//import logo from "../images/logo.png";
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBInput
  }
  from 'mdb-react-ui-kit';



const SignUp = () => {


  const[formData, setFormData] = useState({
    email: "",
    password: ""
   })
  
    const handleChange = (e) => {
      e.preventDefault();

      const {name, value} = e.target;
      
      setFormData({
        ...formData,
        [name]:value
      })
  
      console.log(formData);  
  
     }

     const handleClick = (e) => {

     }

    return (
        <MDBContainer className="my-5 gradient-form">

        <MDBRow>
  
          <MDBCol col='6' className="mb-5">
            <div className="d-flex flex-column ms-5">
  
              <div className="text-center">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                  style={{width: '185px'}} alt="logo" />
                <h4 className="mt-1 mb-5 pb-1">We are The Care Connect Team</h4>
              </div>
  
              <p>Please Sign up to create your account</p>
  
  
              <MDBInput wrapperClass='mb-4' 
              label='Email address' 
              id='form1' 
              type='email'
              name="email"
              value={formData.email}
              onChange={handleChange}
              />
              <MDBInput wrapperClass='mb-4' 
              label='Password' 
              id='form2' 
              type='password'
              name="password"
              value={formData.password}
              onChange={handleChange}
              />
  
  
              <div className="text-center pt-1 mb-5 pb-1" onClick={handleClick}>
                <MDBBtn className="mb-4 w-100 gradient-custom-2" >Sign Up</MDBBtn>

              </div>
  
              <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
                <p className="mb-0">Already have an account?</p>
                <MDBBtn outline className='mx-2' color='danger'>
                  Login
                </MDBBtn>
              </div>
  
            </div>
  
          </MDBCol>
  
          <MDBCol col='6' className="mb-5">
            <div className="d-flex flex-column  justify-content-center gradient-custom-2 h-100 mb-4">
  
              <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                <h4 class="mb-4">We are more than just a companion</h4>
                <p class="small mb-0">Welcome to Care Connect, where predictive analytics transforms maternal healthcare. In a fast-paced world, 
                maintaining consistent attendance at clinical appointments is vital for expecting mothers' well-being. 
                Care Connect predicts attendance lapses, enabling proactive intervention and personalized support.
                 Join us in redefining maternal healthcare, ensuring every mother receives the attention she deserves.
                </p>
              </div>
  
            </div>
  
          </MDBCol>
  
        </MDBRow>
  
      </MDBContainer>
    )
    };

export default SignUp;