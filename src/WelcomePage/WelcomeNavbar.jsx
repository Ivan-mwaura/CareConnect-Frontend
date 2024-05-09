import { MDBBtn, MDBContainer } from "mdb-react-ui-kit";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarToggler, MDBIcon, MDBNavbarNav, MDBNavbarItem, MDBNavbarLink, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBCollapse, MDBBadge, MDBInput } from "mdb-react-ui-kit";
import React from "react";
import { useState } from "react";
import './WelcomeNavbar.scss'
import {useNavigate} from 'react-router-dom';

const WelcomeNavbar = () => {

    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const navigate = useNavigate(); 

    const toggleSidebar = () => {
      setSidebarOpen(!isSidebarOpen);
    };

    const handleSignUp = () => {
      navigate('/signup');

    }
    const handleLogin = () => {
      navigate('/login');
    }

    return(
<>          {/*Navbar*/}

      <MDBNavbar expand='lg' light bgColor='light' classname='navbar-container' >
        <MDBContainer fluid>
          <MDBNavbarNav className="flex-row align-items-center ">
            <MDBNavbarToggler
              type='button'
              aria-label='Toggle navigation'
              onClick={toggleSidebar}
            >
              <MDBIcon icon='bars' fas />
            </MDBNavbarToggler>
            <MDBNavbarBrand href='#'> CARE CONNECT
              <img
                src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp'
                height='40'
                alt=''
                loading='lazy'
              />
            </MDBNavbarBrand>

            <MDBCollapse navbar>
              <MDBNavbarItem className="d-flex align-items-center">
                <MDBInput label='Search (ctrl + "/" to focus)' id='form1' type='text' />
                <MDBIcon fas icon="search mx-2" />
              </MDBNavbarItem>
            </MDBCollapse>


          </MDBNavbarNav>

          <MDBNavbarNav right className="flex-row " style={{justifyContent:'flex-end'}}>
            <MDBNavbarItem style={{display:'flex', gap:'20px'}}>
              <MDBBtn onClick={handleSignUp}>
                SignUp
              </MDBBtn>
              <MDBBtn onClick={handleLogin}>
                LogIn
              </MDBBtn>
            </MDBNavbarItem>
          </MDBNavbarNav>

          
        </MDBContainer>
      </MDBNavbar>

</>
    )

}
export default WelcomeNavbar