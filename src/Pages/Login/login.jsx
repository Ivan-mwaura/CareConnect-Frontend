import React, { useState, useEffect } from "react";
import "./login.scss";
import { MDBBtn, MDBContainer, MDBRow, MDBCol, MDBInput } from 'mdb-react-ui-kit';
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [token, setToken] = useState('');
  const [adminToken, setAdminToken] = useState('');
  const [chwToken, setChwToken] = useState('');
  const [userState, setUserState] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (value.includes('@careconnect.admin.com')) {
      setUserState('admin');
    } else if (value.includes('@careconnect.chw.com')) {
      setUserState('chw');
    } else {
      setUserState('user');
    }
  }

  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.clear();

    if (userState === 'admin') {
      axios.post("http://localhost:5000/api/v1/admin", formData, {
        headers: { 'Content-Type': 'application/json' }
      }).then((res) => {
        toast.success(res.data.msg);
        setAdminToken(res.data.adminToken);
        localStorage.setItem('token', res.data.adminToken);
      });
    } else if (userState === 'chw') {
      axios.post("http://localhost:5000/api/v1/chw", formData, {
        headers: { 'Content-Type': 'application/json' }
      }).then((res) => {
        toast.success(res.data.msg);
        setChwToken(res.data.chwToken);
        localStorage.setItem('chwToken', res.data.chwToken);
      }).catch((err) => {
        console.log(err);
        toast.error(err.response.data.msg);
      });
    } else if (userState === 'user') {
      axios.post("http://localhost:5000/api/v1/login", formData, {
        headers: { 'Content-Type': 'application/json' }
      }).then((res) => {
        toast.success(res.data.msg);
        setToken(res.data.token);
      }).catch((err) => {
        console.log(err);
        toast.error(err.response.data.msg);
      });
    }
  }

  useEffect(() => {
    if (token) {
      navigate('/homepage');
    }
  }, [token, navigate]);

  useEffect(() => {
    if (adminToken) {
      navigate('/adminpage');
    }
  }, [adminToken, navigate]);

  useEffect(() => {
    if (chwToken) {
      navigate('/homepage');
    }
  }, [chwToken, navigate]);

  return (
    <MDBContainer className="my-5 gradient-form">
      <MDBRow>
        <MDBCol col='6' className="mb-5">
          <div className="d-flex flex-column ms-5">
            <div className="text-center">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                style={{ width: '185px' }} alt="logo" />
              <h4 className="mt-1 mb-5 pb-1">We are The Care Connect Team</h4>
            </div>
            <p>Please login to your account</p>
            <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email'
              name='email' value={formData.email} onChange={handleChange} />
            <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password'
              name="password" value={formData.password} onChange={handleChange} />
            <div className="text-center pt-1 mb-5 pb-1">
              <MDBBtn className="mb-4 w-100 gradient-custom-2" onClick={handleLogin}>Login</MDBBtn>
              <a className="text-muted" href="#!">Forgot password?</a>
            </div>
            <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
              <p className="mb-0">Don't have an account?</p>
              <MDBBtn outline className='mx-2' color='danger'>Sign Up</MDBBtn>
            </div>
          </div>
        </MDBCol>
        <MDBCol col='6' className="mb-5">
          <div className="d-flex flex-column  justify-content-center gradient-custom-2 h-100 mb-4">
            <div className="text-white px-3 py-4 p-md-5 mx-md-4">
              <h4 className="mb-4">We are more than just a companion</h4>
              <p className="small mb-0">Welcome to Care Connect, where predictive analytics transforms maternal healthcare. In a fast-paced world, 
              maintaining consistent attendance at clinical appointments is vital for expecting mothers' well-being. 
              Care Connect predicts attendance lapses, enabling proactive intervention and personalized support.
              Join us in redefining maternal healthcare, ensuring every mother receives the attention she deserves.</p>
            </div>
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Login;
