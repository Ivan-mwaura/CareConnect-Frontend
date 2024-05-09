import React, { useEffect, useState } from 'react';
import './Sidebar.css'
import { MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';
import {

  MDBIcon,
  MDBRipple,

} from 'mdb-react-ui-kit';
import { AppContext } from '../../Context/RoutesContext';
import { useContext } from 'react';


const Sidebar = () => {

  const {setDashboardRoute} = useContext(AppContext);

  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isChw, setIsChw] = useState(false);

  useEffect(() => {
    
    const chwLoggedIn = localStorage.getItem('chwToken');

    if(chwLoggedIn){
      setIsChw(!isChw);
    }
    else{
      setIsChw(false);
    }
  }, [])

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleRoute = (route) => {

    if(route === "homepage"){
      setDashboardRoute("homepage");
    }
   else if(route === 'dataCollection'){
      setDashboardRoute("dataCollection");    
   }
   else if(route === 'registerWoman'){
    setDashboardRoute('registerWoman')

   }else if(route === 'newsandevents'){
    setDashboardRoute('newsandevents')
   }else(
    setDashboardRoute('homepage')
   )

  }


  return (
    <>
      <link
       href="https://use.fontawesome.com/releases/v5.15.1/css/all.css"
        rel="stylesheet"
    	/>
     <div className={`bg-white sidebar ${isSidebarOpen ? 'show' : ''}`}>
        <div className="position-sticky">
          <MDBListGroup className="mx-3 mt-4" style={{paddingBo:'30px'}}>

            <MDBRipple rippleTag='span'  className='sidebar-options'>
              <MDBListGroupItem tag='a' href='#' action className='border-0 border-bottom rounded rounded' id = "navbar-list-group" onClick={() => handleRoute("homepage")}>
                <MDBIcon fas icon="tachometer-alt me-3" />
                Main Dashboard
              </MDBListGroupItem>
            </MDBRipple>

            <MDBRipple rippleTag='span' className='sidebar-options'> 
              <MDBListGroupItem tag='a' href='#' action className='border-0 border-bottom rounded'   id = "navbar-list-group" onClick={() => handleRoute("dataCollection")} >
                <MDBIcon fas icon="chart-area me-3" />
                Data Collection
              </MDBListGroupItem>
            </MDBRipple> 

            <MDBRipple rippleTag='span' className='sidebar-options'>
              <MDBListGroupItem tag='a' href='#' action className='border-0 border-bottom rounded' id = "navbar-list-group" onClick={() => handleRoute("feedback")}>
                <MDBIcon fas icon="lock me-3" />
                Feedback
              </MDBListGroupItem>
            </MDBRipple>

           {isChw &&  <MDBRipple rippleTag='span' className='sidebar-options'>
              <MDBListGroupItem tag='a' href='#' action className='border-0 border-bottom rounded' id = "navbar-list-group" onClick={() => handleRoute('registerWoman')}>
                <MDBIcon fas icon="chart-line me-3" />
                Add woman
              </MDBListGroupItem>
            </MDBRipple> }

            <MDBRipple rippleTag='span' className='sidebar-options'>
              <MDBListGroupItem tag='a' href='#' action className='border-0 border-bottom rounded' id = "navbar-list-group" onClick={() => handleRoute('newsandevents')}>
                <MDBIcon fas icon="chart-pie me-3" />
                News and Events
              </MDBListGroupItem>
            </MDBRipple>

            <MDBRipple rippleTag='span' className='sidebar-options'>
              <MDBListGroupItem tag='a' href='#' action className='border-0 border-bottom rounded' id = "navbar-list-group">
                <MDBIcon fas icon="globe me-3" />
                Community Forums or Support Groups
              </MDBListGroupItem>
            </MDBRipple>

            <MDBRipple rippleTag='span' className='sidebar-options'>
              <MDBListGroupItem tag='a' href='#' action className='border-0 border-bottom rounded' id = "navbar-list-group">
                <MDBIcon fas icon="users me-3" />
                Reminders
              </MDBListGroupItem>
            </MDBRipple>

            {/*<MDBRipple rippleTag='span'>
              <MDBListGroupItem tag='a' href='#' action className='border-0 border-bottom rounded'id = "navbar-list-group">
                <MDBIcon far icon="chart-bar me-3" />
                Orders
              </MDBListGroupItem>
  </MDBRipple>*/}

            
            <MDBRipple rippleTag='span'>
              <MDBListGroupItem tag='a' href='#' action className='border-0 border-bottom rounded' id = "navbar-list-group">
                <MDBIcon fas icon="building me-3" />
                Support
              </MDBListGroupItem>
            </MDBRipple>

            
            <MDBRipple rippleTag='span'>
              <MDBListGroupItem tag='a' href='#' action className='border-0 border-bottom rounded' id = "navbar-list-group">
                <MDBIcon fas icon="building me-3" />
                USer Profile
              </MDBListGroupItem>
            </MDBRipple>

          </MDBListGroup>
        </div>
      </div>

    
    </>
  );
}

export default Sidebar;