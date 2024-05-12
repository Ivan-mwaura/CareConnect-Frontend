import { MDBContainer } from "mdb-react-ui-kit";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarToggler, MDBIcon, MDBNavbarNav, MDBNavbarItem, MDBNavbarLink, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBCollapse, MDBBadge, MDBInput } from "mdb-react-ui-kit";
import React from "react";
import { useState } from "react";
import './Navbar.scss'

const Navbar = () => {

    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
      setSidebarOpen(!isSidebarOpen);
    };

    return(
<>          {/*Navbar*/}

      <MDBNavbar expand='lg' light bgColor='white' className='navbar-container' style={{height:'70px'}}>
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
                <MDBIcon fas icon="search mx-2"  />
              </MDBNavbarItem>
            </MDBCollapse>


          </MDBNavbarNav>
          <MDBNavbarNav className="d-flex flex-row justify-content-end w-auto">

            <MDBNavbarItem className='me-3 me-lg-0 d-flex align-items-center' >
              <MDBDropdown>

                <MDBDropdownToggle tag="a" href="#!"  >
                  <MDBIcon fas icon="bell"  />
                  <MDBBadge color='danger' notification pill>
                    1
                  </MDBBadge>
                </MDBDropdownToggle>

                <MDBDropdownMenu>
                  <MDBDropdownItem>Some news
                    
                  </MDBDropdownItem>
                  <MDBDropdownItem>Another news
                    
                  </MDBDropdownItem>
                  <MDBDropdownItem>Something else here
                    
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>


            <MDBNavbarItem >
              <MDBNavbarLink href='#' >
                <MDBIcon fas icon='fill-drip' />
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem >
              <MDBNavbarLink href='#' >
                <MDBIcon fab icon='github' />
              </MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem className='me-3 me-lg-0 d-flex align-items-center'>
              <MDBDropdown>

                <MDBDropdownToggle tag="a" href="#!" className="hidden-arrow nav-link">
                  <img src="https://mdbootstrap.com/img/Photos/Avatars/img (31).jpg" className="rounded-circle" height="22" alt="" loading="lazy" />
                </MDBDropdownToggle>

                <MDBDropdownMenu>
                  <MDBDropdownItem>My profile
                    
                  </MDBDropdownItem>
                  <MDBDropdownItem>Settings
                    
                  </MDBDropdownItem>
                  <MDBDropdownItem>Logout
                    
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>
          </MDBNavbarNav>

        </MDBContainer>
      </MDBNavbar>

</>
    )

}
export default Navbar