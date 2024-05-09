import {React, useContext, useRef} from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import '../../Admin/design/css/main.min.css'
import '../../Admin/design/fonts/style.css'
import '../../Admin/design/css/bootstrap.min.css'

import PatientsGraph from "../Charts/PatientsGraph";
import TreatmentsOperations from "../Charts/TreatmentOperations";
import PatientsByAge from "../Charts/patientsByAge";
import revenueImg from '../../Admin/design/img/hospital/revenue.svg'
import doctorImg from '../../Admin/design/img/hospital/doctor.svg'
import operationImg from '../../Admin/design/img/hospital/operation.svg'
import patientImg from '../../Admin/design/img/hospital/patient.svg'
import staffImg from '../../Admin/design/img/hospital/staff.svg'
import { useDispatch } from "react-redux";
import { setAdminRouteDisplay } from "../ReduxStore/store";


const admistratorMainpage = () => {

  const dispatch = useDispatch();


  const handleRoute = (option) => {
    dispatch(setAdminRouteDisplay(option));
  }



    return(
        <div style={{backgroundColor: 'blue'}}>

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
  <div className="container-fluid">
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
    <div className="main-container">
      <div className="page-header">
        <ol className="breadcrumb">
          <li className="breadcrumb-item active">
            Hospital Dashboard
          </li>
        </ol>
        <div className="site-award">
          <img
            alt="Hospital Dashboards"
            src="img/award.svg"
          />
          {' '}Care Connect					
        </div>
      </div>
      <div className="content-wrapper">
        <div className="row gutters">
          <div className="col-lg-2 col-sm-4 col-12">
            <div className="hospital-tiles">
              <img
                alt="Quality Dashboards"
                src={operationImg}
              />
              <p>
                Total Requests/Notifications
              </p>
              <h2>
                49
              </h2>
            </div>
          </div>
          <div className="col-lg-2 col-sm-4 col-12">
            <div className="hospital-tiles">
              <img
                alt="Best Dashboards"
                src={patientImg}
              />
              <p>
                Total registered women
              </p>
              <h2>
                60
              </h2>
            </div>
          </div>
          <div className="col-lg-2 col-sm-4 col-12">
            <div className="hospital-tiles">
              <img
                alt="Best Dashboards"
                src={operationImg}
              />
              <p>
                Total Doctors
              </p>
              <h2>
                21
              </h2>
            </div>
          </div>
          <div className="col-lg-2 col-sm-4 col-12">
            <div className="hospital-tiles">
              <img
                alt="Top Dashboards"
                src={doctorImg}
              />
              <p>
                Total CHW's
              </p>
              <h2>
                75
              </h2>
            </div>
          </div>
          <div className="col-lg-2 col-sm-4 col-12">
            <div className="hospital-tiles">
              <img
                alt="Top Dashboards"
                src={staffImg}
              />
              <p>
                Staff
              </p>
              <h2>
                253
              </h2>
            </div>
          </div>
          <div className="col-lg-2 col-sm-4 col-12">
            <div className="hospital-tiles">
              <img
                alt="Top Dashboards"
                src={revenueImg}
              />
              <p>
                Total Appointments
              </p>
              <h2>
                90
              </h2>
            </div>
          </div>
        </div>
        <div className="row gutters">
          <div className="col-lg-6 col-sm-12 col-12">
            <div className="card">
              <div className="card-header">
                <div className="card-title">
                  Patients
                </div>
              </div>
              <div className="card-body">
                <div >
                        <PatientsGraph />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12 col-12">
            <div className="card">
              <div className="card-header">
                <div className="card-title">
                  <TreatmentsOperations/>
                </div>
              </div>
              <div className="card-body">
                <div className="hospital-line-area-graph">

                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row gutters">
          <div className="col-sm-12 col-12">
            <div className="card">
              <div className="card-header">
                <div className="card-title">
                  <PatientsByAge/> 
                </div>
              </div>
              <div className="card-body">
                <div id="hospital-patients-by-age" />
              </div>
            </div>
          </div>
        </div>
        <div className="row gutters">
          <div className="col-lg-4 col-sm-12 col-12">
            <div className="card">
              <div className="card-header">
                <div className="card-title">
                  Top Doctors
                </div>
              </div>
              <div className="card-body">
                <div className="top-doctors-container">
                  <div className="top-doctor">
                    <img
                      alt="Best Admin Dashboard"
                      className="avatar"
                      src="img/user2.png"
                    />
                    <div className="doctor-details">
                      <h6>
                        Dr. Clive Williams
                      </h6>
                      <div className="doctor-score">
                        <div className="progress">
                          <div
                            aria-valuemax="100"
                            aria-valuemin="0"
                            aria-valuenow="87"
                            className="progress-bar bg-blue"
                            role="progressbar"
                            style={{
                              width: '87%'
                            }}
                          />
                        </div>
                        <div className="points">
                          <div className="left">
                            Rank #1
                          </div>
                          <div className="right">
                            9,800 Ratings
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="top-doctor">
                    <img
                      alt="Best Admin Dashboard"
                      className="avatar"
                      src="img/user3.png"
                    />
                    <div className="doctor-details">
                      <h6>
                        Dr. Levsmia
                      </h6>
                      <div className="doctor-score">
                        <div className="progress">
                          <div
                            aria-valuemax="100"
                            aria-valuemin="0"
                            aria-valuenow="65"
                            className="progress-bar bg-blue"
                            role="progressbar"
                            style={{
                              width: '65%'
                            }}
                          />
                        </div>
                        <div className="points">
                          <div className="left">
                            Rank #2
                          </div>
                          <div className="right">
                            7,500 Ratings
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="top-doctor">
                    <img
                      alt="Best Admin Dashboard"
                      className="avatar"
                      src="img/user14.png"
                    />
                    <div className="doctor-details">
                      <h6>
                        Dr. Emma George
                      </h6>
                      <div className="doctor-score">
                        <div className="progress">
                          <div
                            aria-valuemax="100"
                            aria-valuemin="0"
                            aria-valuenow="42"
                            className="progress-bar bg-pink"
                            role="progressbar"
                            style={{
                              width: '42%'
                            }}
                          />
                        </div>
                        <div className="points">
                          <div className="left">
                            Rank #3
                          </div>
                          <div className="right">
                            4,200 Ratings
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12 col-12">
            <div className="card">
              <div className="card-header">
                <div className="card-title">
                  Messages
                </div>
              </div>
              <div className="card-body">
                <ul className="custom-messages">
                  <li className="clearfix">
                    <div className="customer">
                      TB
                    </div>
                    <div className="delivery-details">
                      <span className="badge">
                        Appointment
                      </span>
                      <h5>
                        Tom Bartholet
                      </h5>
                      <p>
                        Your appointment with Dr. Kelly is confirmed at 04:30 PM and your reference ID is													
                        <b>
                          TK556753
                        </b>
                        .												
                      </p>
                    </div>
                  </li>
                  <li className="clearfix">
                    <div className="customer secondary">
                      DC
                    </div>
                    <div className="delivery-details">
                      <span className="badge">
                        Cancelled
                      </span>
                      <h5>
                        Dale Colorado
                      </h5>
                      <p>
                        We are pleased to inform that the following ticket no.
                        <b>
                          TK217887
                        </b>
                        {' '}have been cancelled.												
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12 col-12">
            <div className="card">
              <div className="card-header">
                <div className="card-title">
                  Overall Ratings
                </div>
              </div>
              <div className="card-body">
                <div className="hospital-ratings">
                  <div className="total-ratings">
                    <h2>
                      4.5
                    </h2>
                    <div className="rating-stars">
                      <div id="rate1" />
                    </div>
                  </div>
                  <div className="ratings-list-container">
                    <div className="ratings-list">
                      <div className="rating-level">
                        5.0
                      </div>
                      <div className="rating-stars">
                        <div className="rateA" />
                      </div>
                      <div className="total">
                        													8,500{' '}
                        <span className="percentage">
                          65%
                        </span>
                      </div>
                    </div>
                    <div className="ratings-list">
                      <div className="rating-level">
                        4.0
                      </div>
                      <div className="rating-stars">
                        <div className="rateB" />
                      </div>
                      <div className="total">
                        													3,500{' '}
                        <span className="percentage">
                          20%
                        </span>
                      </div>
                    </div>
                    <div className="ratings-list">
                      <div className="rating-level">
                        3.0
                      </div>
                      <div className="rating-stars">
                        <div className="rateC" />
                      </div>
                      <div className="total">
                        													1,400{' '}
                        <span className="percentage">
                          15%
                        </span>
                      </div>
                    </div>
                    <div className="ratings-list">
                      <div className="rating-level">
                        2.0
                      </div>
                      <div className="rating-stars">
                        <div className="rateD" />
                      </div>
                      <div className="total">
                        													300{' '}
                        <span className="percentage">
                          05%
                        </span>
                      </div>
                    </div>
                    <div className="ratings-list">
                      <div className="rating-level">
                        1.0
                      </div>
                      <div className="rating-stars">
                        <div className="rateE" />
                      </div>
                      <div className="total">
                        													75{' '}
                        <span className="percentage">
                          03%
                        </span>
                      </div>
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
    )

}
export default admistratorMainpage;