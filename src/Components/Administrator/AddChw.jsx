import React from "react";
import '../../Admin/design/css/main.min.css'
import '../../Admin/design/fonts/style.css'
import '../../Admin/design/css/bootstrap.min.css'
import { Link } from "react-router-dom";
import updateImage from '../../Admin/design/img/user6.png'
import { useDispatch } from "react-redux";
import { setAdminRouteDisplay } from "../ReduxStore/store";


const AddChw = () => {

  const dispatch = useDispatch()

  
  



  const handleRoute = (route) => {

    dispatch(setAdminRouteDisplay(route))
  }

    return(
        <>
        <div className="add-woman-container" style={{backgroundColor:'blue'}}>

           <header className="header">
    <div className="container-fluid">
      <div className="row gutters">
        <div className="col-sm-4 col-4">
          <a
            className="logo"
            href="index.html"
          >
            CareConnect
            <span />
          </a>
        </div>
        <div className="col-sm-8 col-8">
          <ul className="header-actions">
            <li className="dropdown d-none d-sm-block">
              <a
                className="contact"
                href="#"
              >
                <i className="icon-phone" />
                {' '}0792466341								
              </a>
            </li>
            <li className="dropdown d-none d-sm-block">
              <a
                aria-haspopup="true"
                data-toggle="dropdown"
                href="#"
                id="notifications"
              >
                <i className="icon-bell" />
                <span className="count-label" />
              </a>
              <div
                aria-labelledby="notifications"
                className="dropdown-menu lrg"
              >
                <div className="dropdown-menu-header">
                  <h5>
                    Notifications
                  </h5>
                  <p className="m-0 sub-title">
                    You have 5 unread notifications
                  </p>
                </div>
                <ul className="header-notifications">
                  <li>
                    <a
                      className="clearfix"
                      href="#"
                    >
                      <div className="avatar">
                        <img
                          alt="Medical Admin Dashboards"
                          src="img/user24.png"
                        />
                        <span className="notify-iocn icon-drafts text-danger" />
                      </div>
                      <div className="details">
                        <h6>
                          Dr. Clive
                        </h6>
                        <p>
                          Appointed as a new President 2021-2024
                        </p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      className="clearfix"
                      href="#"
                    >
                      <div className="avatar">
                        <img
                          alt="Medical Admin Dashboards"
                          src="img/user21.png"
                        />
                        <span className="notify-iocn icon-layers text-info" />
                      </div>
                      <div className="details">
                        <h6>
                          Dr. G. Levsmia
                        </h6>
                        <p>
                          Will be on leave on October 2nd week.
                        </p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      className="clearfix"
                      href="#"
                    >
                      <div className="avatar">
                        <img
                          alt="Medical Admin Dashboards"
                          src="img/user19.png"
                        />
                        <span className="notify-iocn icon-person_add text-success" />
                      </div>
                      <div className="details">
                        <h6>
                          Dr. George S
                        </h6>
                        <p>
                          Sent new applointments list
                        </p>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="dropdown">
              <a
                aria-haspopup="true"
                className="user-settings"
                data-toggle="dropdown"
                href="#"
                id="userSettings"
              >
                <span className="user-name">
                  Evans Gachanja
                </span>
                <span className="avatar">
                  EG
                  <span className="status busy" />
                </span>
              </a>
              <div
                aria-labelledby="userSettings"
                className="dropdown-menu dropdown-menu-right"
              >
                <div className="header-profile-actions">
                  <div className="header-user-profile">
                    <div className="header-user">
                      <img
                        alt="Medical Dashboards"
                        src="img/user11.png"
                      />
                    </div>
                    <h5>
                      Evans Gachanja
                    </h5>
                    <p>
                      Admin
                    </p>
                  </div>
                  <a href="hospital-add-doctor.html">
                    <i className="icon-user1" />
                    {' '}My Profile
                  </a>
                  <a href="account-settings.html">
                    <i className="icon-settings1" />
                    {' '}Account Settings
                  </a>
                  <a href="hospital-reviews.html">
                    <i className="icon-activity" />
                    {' '}Activity Logs
                  </a>
                  <a href="login.html">
                    <i className="icon-log-out1" />
                    {' '}Sign Out
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>

  <nav className="navbar navbar-expand-lg custom-navbar">
      <button
        aria-controls="royalHospitalsNavbar"
        aria-expanded="false"
        aria-label="Toggle navigation"
        className="navbar-toggler"
        data-target="#royalHospitalsNavbar"
        data-toggle="collapse"
        type="button"
      >
        <span className="navbar-toggler-icon">
          <i />
          <i />
          <i />
        </span>
      </button>
      <div
        className="collapse navbar-collapse"
        id="royalHospitalsNavbar"
      >
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              className="nav-link active-page"
              onClick={() => handleRoute('adminpage')}
            >
              <i className="icon-devices_other nav-icon" />
              				Dashboard							
            </Link>
          </li>
          <li className="nav-item dropdown">
            <a
              aria-expanded="false"
              aria-haspopup="true"
              className="nav-link dropdown-toggle"
              data-toggle="dropdown"
              href="#"
              id="doctoRs"
              role="button"
            >
              <i className="icon-users nav-icon" />
              								Task Manager						
            </a>
            <ul
              aria-labelledby="doctoRs"
              className="dropdown-menu"
            >
              <li>
                <a
                  className="dropdown-item"
                  href="hospital-doctors-list.html"
                >
                  CHW List
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="hospital-locations.html"
                >
                  Hospital Locations
                </a>
              </li>

              <li>
              <Link
                  className="dropdown-item"
                  onClick={() => handleRoute('womenlist')}
                >
                  Women List
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  onClick={() => handleRoute('addchw')}
                >
                  Add/ Register CHW
                </Link>
              </li>

            </ul>
          </li>
        </ul>
      </div>
    </nav>


  <div className="container-fluid">

    <div className="main-container">
      <div className="page-header">
           <p style={{color: 'white'}}> Add CHW Details</p>  
      </div>
      <div className="content-wrapper">
        <div className="row gutters">
          <div className="col-lg-3 col-sm-12">
            <div className="card">
              <div className="card-body">
                <div className="doctor-profile">
                  <div className="doctor-thumb">
                    <img
                      alt="Smart Admin"
                      src={updateImage}
                    />
                  </div>
                  <div className="input-group mb-3">
                    <div className="custom-file">
                      <input
                        aria-describedby="changeProfile"
                        className="custom-file-input"
                        id="changeProfile"
                        type="file"
                      />
                      <label
                        className="custom-file-label"
                        htmlFor="changeProfile"
                      >
                        Update Image
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-9 col-sm-12">
            <div className="card">
              <div className="card-header">
                <div className="card-title">
                  CHW Details
                </div>
              </div>
              <div className="card-body">
                <div className="row gutters">
                  <div className="col-sm-4 col-12">
                    <div className="form-group">
                      <label htmlFor="fullName">
                        Full Name
                      </label>
                      <input
                        className="form-control"
                        id="fullName"
                        placeholder="Srinu"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="col-sm-4 col-12">
                    <div className="form-group">
                      <label htmlFor="patID">
                        Create ID
                      </label>
                      <input
                        className="form-control"
                        id="patID"
                        placeholder="ID"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="col-sm-4 col-12">
                    <div className="form-group">
                      <label htmlFor="agE">
                        Age
                      </label>
                      <input
                        className="form-control"
                        id="agE"
                        placeholder="Age"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="col-sm-4 col-12">
                    <div className="form-group">
                      <label htmlFor="phoNe">
                        Phone
                      </label>
                      <input
                        className="form-control"
                        id="phoNe"
                        placeholder="Phone"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="col-sm-4 col-12">
                    <div className="form-group">
                      <label htmlFor="inputEmail">
                        Email
                      </label>
                      <input
                        className="form-control"
                        id="inputEmail"
                        placeholder="medical@bm.com"
                        type="email"
                      />
                    </div>
                  </div>
                  <div
                    className="col-sm-6"
                    col-12 =""
                  >
                    <div className="form-group">
                      <label htmlFor="addreSs">
                        Current Address
                      </label>
                      <textarea
                        className="form-control"
                        id="addreSs"
                        placeholder="Current Address"
                        rows="3"
                      />
                    </div>
                  </div>
                  
                  <div className="col-sm-12">
                    <div className="text-right">
                      <button className="btn btn-primary">
                        Create Profile
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer className="main-footer">
      © Bootstrap Gallery 2023
    </footer>
  </div>
</div>
        
        </>
    )

}
export default AddChw