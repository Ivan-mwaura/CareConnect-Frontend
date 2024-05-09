import React from "react";
import '../../Admin/design/css/main.min.css'
import '../../Admin/design/fonts/style.css'
import '../../Admin/design/css/bootstrap.min.css'
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAdminRouteDisplay } from "../ReduxStore/store";



const ChwList = () => {
  const dispatch = useDispatch();


  const handleRoute = (option) => {
    dispatch(setAdminRouteDisplay(option));
  }

    return(
        <div style={{backgroundColor:'blue'}}>
            
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
                <Link
                  className="dropdown-item"
                  onClick={() => handleRoute('chwlist')}
                >
                  CHW List
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  onClick={() => handleRoute('hospitallocations')}
                >
                  Hospital Locations
                </Link>
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

    <div className="main-container">
      <div className="page-header">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            Doctors
          </li>
          <li className="breadcrumb-item active">
            Doctors List
          </li>
        </ol>
        <div className="site-award">
          <img
            alt="Hospital Dashboards"
            src="img/award.svg"
          />
          {' '}Best Hospital					
        </div>
      </div>
      <div className="content-wrapper">
        <div className="row gutters">
          <div className="col-xl-3 col-lg-4 col-sm-6 col-12">
            <div className="card">
              <div className="card-header">
                <div className="card-title">
                  Neurosurgery
                </div>
              </div>
              <div className="card-body">
                <div className="doctors-list">
                  <a href="#">
                    Dr. John Willams
                  </a>
                  <a href="#">
                    Dr. K Sam Kumar
                  </a>
                  <a href="#">
                    Dr. N Preethish Kumar
                  </a>
                  <a href="#">
                    Dr. G Chandrashekar
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6 col-12">
            <div className="card">
              <div className="card-header">
                <div className="card-title">
                  Dermatology
                </div>
              </div>
              <div className="card-body">
                <div className="doctors-list">
                  <a href="#">
                    Dr. William G. Bowen
                  </a>
                  <a href="#">
                    Dr. Keith Brandt
                  </a>
                  <a href="#">
                    Dr. Robert Brophy
                  </a>
                  <a href="#">
                    Dr. Craig Buchman
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6 col-12">
            <div className="card">
              <div className="card-header">
                <div className="card-title">
                  Cardiology
                </div>
              </div>
              <div className="card-body">
                <div className="doctors-list">
                  <a href="#">
                    Dr. Tom Bartholet
                  </a>
                  <a href="#">
                    Dr. Michael Berk
                  </a>
                  <a href="#">
                    Dr. Dale Colorado
                  </a>
                  <a href="#">
                    Dr. Jennifer Dunn
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6 col-12">
            <div className="card">
              <div className="card-header">
                <div className="card-title">
                  Ophthalmology
                </div>
              </div>
              <div className="card-body">
                <div className="doctors-list">
                  <a href="#">
                    Dr. Lorena Buffa
                  </a>
                  <a href="#">
                    Dr. Kenneth Carson
                  </a>
                  <a href="#">
                    Dr. Murali Chinala
                  </a>
                  <a href="#">
                    Dr. Douglas M. Char
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6 col-12">
            <div className="card">
              <div className="card-header">
                <div className="card-title">
                  Orthopedics
                </div>
              </div>
              <div className="card-body">
                <div className="doctors-list">
                  <a href="#">
                    Dr. Jennifer Arter
                  </a>
                  <a href="#">
                    Dr. Foluso Ademuyiwa
                  </a>
                  <a href="#">
                    Dr. Milan Anadkat
                  </a>
                  <a href="#">
                    Dr. Ana Marie Arbelaez
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6 col-12">
            <div className="card">
              <div className="card-header">
                <div className="card-title">
                  Dentistry
                </div>
              </div>
              <div className="card-body">
                <div className="doctors-list">
                  <a href="#">
                    Dr. Courtney Chrisler
                  </a>
                  <a href="#">
                    Dr. Douglas Coplen
                  </a>
                  <a href="#">
                    Dr. Ferdinand Coste
                  </a>
                  <a href="#">
                    Dr. Sharon Cresci
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6 col-12">
            <div className="card">
              <div className="card-header">
                <div className="card-title">
                  Rheumatology
                </div>
              </div>
              <div className="card-body">
                <div className="doctors-list">
                  <a href="#">
                    Dr. Sylvia Awadalla
                  </a>
                  <a href="#">
                    Dr. Leonard B. Bacharier
                  </a>
                  <a href="#">
                    Dr. Jonathan Baker
                  </a>
                  <a href="#">
                    Dr. Philip Barger
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6 col-12">
            <div className="card">
              <div className="card-header">
                <div className="card-title">
                  Psychiatry
                </div>
              </div>
              <div className="card-body">
                <div className="doctors-list">
                  <a href="#">
                    Dr. Lenise Cummings
                  </a>
                  <a href="#">
                    Dr. Charl De Wet
                  </a>
                  <a href="#">
                    Dr. Vladimir Despotovic
                  </a>
                  <a href="#">
                    Dr. Patrick Dillon
                  </a>
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

    )

}
export default ChwList;