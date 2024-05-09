import React from "react";
import '../../Admin/design/css/main.min.css'
import '../../Admin/design/fonts/style.css'
import '../../Admin/design/css/bootstrap.min.css'
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAdminRouteDisplay } from "../ReduxStore/store";

const WomenList = () => {

  const dispatch = useDispatch();


  const handleRoute = (option) => {
    dispatch(setAdminRouteDisplay(option));
  }

    return (
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
        <li className="breadcrumb-item">
          Doctors
        </li>
        <li className="breadcrumb-item active">
          Patients
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
        <div className="col-sm-12">
          <div className="table-container">
            <div className="table-responsive">
              <table
                className="table"
                id="basicExample"
              >
                <thead>
                  <tr>
                    <th>
                      Name
                    </th>
                    <th>
                      ID
                    </th>
                    <th>
                      Age
                    </th>
                    <th>
                      Address
                    </th>
                    <th>
                      Phone
                    </th>
                    <th>
                      Email
                    </th>
                    <th>
                      Last Visit
                    </th>
                    <th>
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      Hussy Nixon
                    </td>
                    <td>
                      #00045
                    </td>
                    <td>
                      35
                    </td>
                    <td>
                      Fraser Suite City Tower 16450 - Edinburgh
                    </td>
                    <td>
                      558 767 5543
                    </td>
                    <td>
                      hussy@bml.com
                    </td>
                    <td>
                      2019/03/29
                    </td>
                    <td>
                      <div className="btn-group btn-group-sm">
                        <button
                          className="btn btn-info"
                          type="button"
                        >
                          <i className="icon-edit1" />
                        </button>
                        <button
                          className="btn btn-danger"
                          type="button"
                        >
                          <i className="icon-cancel" />
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Meslin
                    </td>
                    <td>
                      #00011
                    </td>
                    <td>
                      22
                    </td>
                    <td>
                      Wilsom Lake City Tower 12890 - California
                    </td>
                    <td>
                      665 798 8321
                    </td>
                    <td>
                      meslin@bml.com
                    </td>
                    <td>
                      2023/07/10
                    </td>
                    <td>
                      <div className="btn-group btn-group-sm">
                        <button
                          className="btn btn-info"
                          type="button"
                        >
                          <i className="icon-edit1" />
                        </button>
                        <button
                          className="btn btn-danger"
                          type="button"
                        >
                          <i className="icon-cancel" />
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Willaiamson
                    </td>
                    <td>
                      #00089
                    </td>
                    <td>
                      26
                    </td>
                    <td>
                      Huston Manali Bay 13449 - Gulamsn
                    </td>
                    <td>
                      342 889 8891
                    </td>
                    <td>
                      willam@bml.com
                    </td>
                    <td>
                      2023/06/17
                    </td>
                    <td>
                      <div className="btn-group btn-group-sm">
                        <button
                          className="btn btn-info"
                          type="button"
                        >
                          <i className="icon-edit1" />
                        </button>
                        <button
                          className="btn btn-danger"
                          type="button"
                        >
                          <i className="icon-cancel" />
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Lusianil
                    </td>
                    <td>
                      #00063
                    </td>
                    <td>
                      40
                    </td>
                    <td>
                      JunileNiewliajs 12459 - Kunlicae
                    </td>
                    <td>
                      558 767 5543
                    </td>
                    <td>
                      lusianil@bml.com
                    </td>
                    <td>
                      2023/04/22
                    </td>
                    <td>
                      <div className="btn-group btn-group-sm">
                        <button
                          className="btn btn-info"
                          type="button"
                        >
                          <i className="icon-edit1" />
                        </button>
                        <button
                          className="btn btn-danger"
                          type="button"
                        >
                          <i className="icon-cancel" />
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Bolwin
                    </td>
                    <td>
                      #00078
                    </td>
                    <td>
                      52
                    </td>
                    <td>
                      Adesmionr Lunica Mark - Elisonniar
                    </td>
                    <td>
                      452 667 8981
                    </td>
                    <td>
                      bolwin@bml.com
                    </td>
                    <td>
                      2023/04/15
                    </td>
                    <td>
                      <div className="btn-group btn-group-sm">
                        <button
                          className="btn btn-info"
                          type="button"
                        >
                          <i className="icon-edit1" />
                        </button>
                        <button
                          className="btn btn-danger"
                          type="button"
                        >
                          <i className="icon-cancel" />
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Jennifer
                    </td>
                    <td>
                      #00049
                    </td>
                    <td>
                      63
                    </td>
                    <td>
                      Global Village 18440 - Lake City
                    </td>
                    <td>
                      558 767 8873
                    </td>
                    <td>
                      jennifer@bml.com
                    </td>
                    <td>
                      2023/03/30
                    </td>
                    <td>
                      <div className="btn-group btn-group-sm">
                        <button
                          className="btn btn-info"
                          type="button"
                        >
                          <i className="icon-edit1" />
                        </button>
                        <button
                          className="btn btn-danger"
                          type="button"
                        >
                          <i className="icon-cancel" />
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Linda
                    </td>
                    <td>
                      #00032
                    </td>
                    <td>
                      18
                    </td>
                    <td>
                      Youncicer Luncinka Huoberg - Dustonlr
                    </td>
                    <td>
                      763 776 5540
                    </td>
                    <td>
                      linda@bml.com
                    </td>
                    <td>
                      2023/02/18
                    </td>
                    <td>
                      <div className="btn-group btn-group-sm">
                        <button
                          className="btn btn-info"
                          type="button"
                        >
                          <i className="icon-edit1" />
                        </button>
                        <button
                          className="btn btn-danger"
                          type="button"
                        >
                          <i className="icon-cancel" />
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Kulnan
                    </td>
                    <td>
                      #00080
                    </td>
                    <td>
                      20
                    </td>
                    <td>
                      Insulamer Johnsurboag - Kunerianl
                    </td>
                    <td>
                      558 767 5543
                    </td>
                    <td>
                      kulnan@bml.com
                    </td>
                    <td>
                      2023/04/18
                    </td>
                    <td>
                      <div className="btn-group btn-group-sm">
                        <button
                          className="btn btn-info"
                          type="button"
                        >
                          <i className="icon-edit1" />
                        </button>
                        <button
                          className="btn btn-danger"
                          type="button"
                        >
                          <i className="icon-cancel" />
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Nixon
                    </td>
                    <td>
                      #00069
                    </td>
                    <td>
                      30
                    </td>
                    <td>
                      23-90 Municalier Masocew - Ubvero
                    </td>
                    <td>
                      558 767 5543
                    </td>
                    <td>
                      nixon@bml.com
                    </td>
                    <td>
                      2023/02/21
                    </td>
                    <td>
                      <div className="btn-group btn-group-sm">
                        <button
                          className="btn btn-info"
                          type="button"
                        >
                          <i className="icon-edit1" />
                        </button>
                        <button
                          className="btn btn-danger"
                          type="button"
                        >
                          <i className="icon-cancel" />
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Mauli
                    </td>
                    <td>
                      #00015
                    </td>
                    <td>
                      42
                    </td>
                    <td>
                      887-90 Unicerveo Gloverins - Jusinions
                    </td>
                    <td>
                      667 998 9910
                    </td>
                    <td>
                      mauli@bml.com
                    </td>
                    <td>
                      2023/03/15
                    </td>
                    <td>
                      <div className="btn-group btn-group-sm">
                        <button
                          className="btn btn-info"
                          type="button"
                        >
                          <i className="icon-edit1" />
                        </button>
                        <button
                          className="btn btn-danger"
                          type="button"
                        >
                          <i className="icon-cancel" />
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Julia
                    </td>
                    <td>
                      #00031
                    </td>
                    <td>
                      46
                    </td>
                    <td>
                      Husoman Vusolar Gunoor - Wersouty
                    </td>
                    <td>
                      558 767 5543
                    </td>
                    <td>
                      julia@bml.com
                    </td>
                    <td>
                      2023/05/19
                    </td>
                    <td>
                      <div className="btn-group btn-group-sm">
                        <button
                          className="btn btn-info"
                          type="button"
                        >
                          <i className="icon-edit1" />
                        </button>
                        <button
                          className="btn btn-danger"
                          type="button"
                        >
                          <i className="icon-cancel" />
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Benner
                    </td>
                    <td>
                      #00065
                    </td>
                    <td>
                      63
                    </td>
                    <td>
                      City Tower 16449 - Beuuend
                    </td>
                    <td>
                      558 767 5543
                    </td>
                    <td>
                      benner@bml.com
                    </td>
                    <td>
                      2023/11/25
                    </td>
                    <td>
                      <div className="btn-group btn-group-sm">
                        <button
                          className="btn btn-info"
                          type="button"
                        >
                          <i className="icon-edit1" />
                        </button>
                        <button
                          className="btn btn-danger"
                          type="button"
                        >
                          <i className="icon-cancel" />
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Cedric
                    </td>
                    <td>
                      #00093
                    </td>
                    <td>
                      76
                    </td>
                    <td>
                      Cloneks Second Line 13450 - Edinburgh
                    </td>
                    <td>
                      558 767 6371
                    </td>
                    <td>
                      cedric@bml.com
                    </td>
                    <td>
                      2023/11/25
                    </td>
                    <td>
                      <div className="btn-group btn-group-sm">
                        <button
                          className="btn btn-info"
                          type="button"
                        >
                          <i className="icon-edit1" />
                        </button>
                        <button
                          className="btn btn-danger"
                          type="button"
                        >
                          <i className="icon-cancel" />
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Ashton
                    </td>
                    <td>
                      #00097
                    </td>
                    <td>
                      53
                    </td>
                    <td>
                      Francisco City 17630 - San Francisco
                    </td>
                    <td>
                      558 767 8970
                    </td>
                    <td>
                      ashton@bml.com
                    </td>
                    <td>
                      2023/11/28
                    </td>
                    <td>
                      <div className="btn-group btn-group-sm">
                        <button
                          className="btn btn-info"
                          type="button"
                        >
                          <i className="icon-edit1" />
                        </button>
                        <button
                          className="btn btn-danger"
                          type="button"
                        >
                          <i className="icon-cancel" />
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Garrett Winters
                    </td>
                    <td>
                      #00099
                    </td>
                    <td>
                      49
                    </td>
                    <td>
                      Francisco Suite City Tower 13450 - Tokyo
                    </td>
                    <td>
                      542 767 4348
                    </td>
                    <td>
                      gerrett@bml.com
                    </td>
                    <td>
                      2023/11/26
                    </td>
                    <td>
                      <div className="btn-group btn-group-sm">
                        <button
                          className="btn btn-info"
                          type="button"
                        >
                          <i className="icon-edit1" />
                        </button>
                        <button
                          className="btn btn-danger"
                          type="button"
                        >
                          <i className="icon-cancel" />
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
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
export default WomenList;