import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
        {/* <div id="global-loader" >
			<div className="whirly-loader"> </div>
		</div> */}

      {/* Main Wrapper */}
      <div className="main-wrapper">
        {/* Header */}
        <div className="header">
          {/* Logo */}
          <div className="header-left active">
            <Link href="/home" className="logo logo-normal">
              <img src="assets/img/logo.png" alt="" />
            </Link>
            <Link to="/home" className="logo logo-white">
              <img src="assets/img/logo-white.png" alt="" />
            </Link>
            <Link to="/home" className="logo-small">
              <img src="assets/img/logo-small.png" alt="" />
            </Link>
            <Link id="toggle_btn" to="javascript:void(0);"></Link>
          </div>
          {/* Logo */}

          <Link id="mobile_btn" className="mobile_btn" to="#sidebar">
            <span className="bar-icon">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </Link>

          {/* Header Menu */}
          <ul className="nav user-menu">
            {/* Search */}
            <li className="nav-item">
              <div className="top-nav-search">
                <Link to="javascript:void(0);" className="responsive-search">
                  <i className="fa fa-search"></i>
                </Link>
                <form action="#">
                  <div className="searchinputs">
                    <input type="text" placeholder="Search Here ..." />
                    <div className="search-addon">
                      <span>
                        <img src="assets/img/icons/closes.svg" alt="img" />
                      </span>
                    </div>
                  </div>
                  <Link className="btn" id="searchdiv">
                    <img src="assets/img/icons/search.svg" alt="img" />
                  </Link>
                </form>
              </div>
            </li>
            {/* Search */}

            {/* Flag */}
            <li className="nav-item dropdown has-arrow flag-nav">
              <Link
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                to="javascript:void(0);"
                role="button"
              >
                <img src="assets/img/flags/us1.png" alt="" height="20" />
              </Link>
              <div className="dropdown-menu dropdown-menu-right">
                <Link to="javascript:void(0);" className="dropdown-item">
                  <img src="assets/img/flags/us.png" alt="" height="16" />{" "}
                  English
                </Link>
                <Link to="javascript:void(0);" className="dropdown-item">
                  <img src="assets/img/flags/fr.png" alt="" height="16" />{" "}
                  French
                </Link>
                <Link to="javascript:void(0);" className="dropdown-item">
                  <img src="assets/img/flags/es.png" alt="" height="16" />{" "}
                  Spanish
                </Link>
                <Link to="javascript:void(0);" className="dropdown-item">
                  <img src="assets/img/flags/de.png" alt="" height="16" />{" "}
                  German
                </Link>
              </div>
            </li>
            {/* Flag */}

            {/* Notifications */}
            <li className="nav-item dropdown">
              <Link
                to="javascript:void(0);"
                className="dropdown-toggle nav-link"
                data-bs-toggle="dropdown"
              >
                <img src="assets/img/icons/notification-bing.svg" alt="img" />{" "}
                <span className="badge rounded-pill">4</span>
              </Link>
              <div className="dropdown-menu notifications">
                <div className="topnav-dropdown-header">
                  <span className="notification-title">Notifications</span>
                  <Link to="javascript:void(0)" className="clear-noti">
                    {" "}
                    Clear All{" "}
                  </Link>
                </div>
                <div className="noti-content">
                  <ul className="notification-list">
                    <li className="notification-message">
                      <Link to="/activities">
                        <div className="media d-flex">
                          <span className="avatar flex-shrink-0">
                            <img
                              alt=""
                              src="assets/img/profiles/avatar-02.jpg"
                            />
                          </span>
                          <div className="media-body flex-grow-1">
                            <p className="noti-details">
                              <span className="noti-title">John Doe</span> added
                              new task{" "}
                              <span className="noti-title">
                                Patient appointment booking
                              </span>
                            </p>
                            <p className="noti-time">
                              <span className="notification-time">
                                4 mins ago
                              </span>
                            </p>
                          </div>
                        </div>
                      </Link>
                    </li>
                    <li className="notification-message">
                      <Link to="/activities">
                        <div className="media d-flex">
                          <span className="avatar flex-shrink-0">
                            <img
                              alt=""
                              src="assets/img/profiles/avatar-03.jpg"
                            />
                          </span>
                          <div className="media-body flex-grow-1">
                            <p className="noti-details">
                              <span className="noti-title">
                                Tarah Shropshire
                              </span>{" "}
                              changed the task name{" "}
                              <span className="noti-title">
                                Appointment booking with payment gateway
                              </span>
                            </p>
                            <p className="noti-time">
                              <span className="notification-time">
                                6 mins ago
                              </span>
                            </p>
                          </div>
                        </div>
                      </Link>
                    </li>
                    <li className="notification-message">
                      <Link to="/activities">
                        <div className="media d-flex">
                          <span className="avatar flex-shrink-0">
                            <img
                              alt=""
                              src="assets/img/profiles/avatar-06.jpg"
                            />
                          </span>
                          <div className="media-body flex-grow-1">
                            <p className="noti-details">
                              <span className="noti-title">Misty Tison</span>{" "}
                              added{" "}
                              <span className="noti-title">
                                Domenic Houston
                              </span>{" "}
                              and{" "}
                              <span className="noti-title">Claire Mapes</span>{" "}
                              to project{" "}
                              <span className="noti-title">
                                Doctor available module
                              </span>
                            </p>
                            <p className="noti-time">
                              <span className="notification-time">
                                8 mins ago
                              </span>
                            </p>
                          </div>
                        </div>
                      </Link>
                    </li>
                    <li className="notification-message">
                      <Link to="/activities">
                        <div className="media d-flex">
                          <span className="avatar flex-shrink-0">
                            <img
                              alt=""
                              src="assets/img/profiles/avatar-17.jpg"
                            />
                          </span>
                          <div className="media-body flex-grow-1">
                            <p className="noti-details">
                              <span className="noti-title">Rolland Webber</span>{" "}
                              completed task{" "}
                              <span className="noti-title">
                                Patient and Doctor video conferencing
                              </span>
                            </p>
                            <p className="noti-time">
                              <span className="notification-time">
                                12 mins ago
                              </span>
                            </p>
                          </div>
                        </div>
                      </Link>
                    </li>
                    <li className="notification-message">
                      <Link to="/activities">
                        <div className="media d-flex">
                          <span className="avatar flex-shrink-0">
                            <img
                              alt=""
                              src="assets/img/profiles/avatar-13.jpg"
                            />
                          </span>
                          <div className="media-body flex-grow-1">
                            <p className="noti-details">
                              <span className="noti-title">
                                Bernardo Galaviz
                              </span>{" "}
                              added new task{" "}
                              <span className="noti-title">
                                Private chat module
                              </span>
                            </p>
                            <p className="noti-time">
                              <span className="notification-time">
                                2 days ago
                              </span>
                            </p>
                          </div>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="topnav-dropdown-footer">
                  <Link to="/activities">View all Notifications</Link>
                </div>
              </div>
            </li>
            {/* Notifications */}

            <li className="nav-item dropdown has-arrow main-drop">
              <Link
                to="javascript:void(0);"
                className="dropdown-toggle nav-link userset"
                data-bs-toggle="dropdown"
              >
                <span className="user-img">
                  <img src="assets/img/profiles/avator1.jpg" alt="" />
                  <span className="status online"></span>
                </span>
              </Link>
              <div className="dropdown-menu menu-drop-user">
                <div className="profilename">
                  <div className="profileset">
                    <span className="user-img">
                      <img src="assets/img/profiles/avator1.jpg" alt="" />
                      <span className="status online"></span>
                    </span>
                    <div className="profilesets">
                      <h6>John Doe</h6>
                      <h5>Admin</h5>
                    </div>
                  </div>
                  <hr className="m-0" />
                  <Link className="dropdown-item" to="/profile">
                    {" "}
                    <i className="me-2" data-feather="user"></i> My Profile
                  </Link>
                  <Link className="dropdown-item" to="/generalsettings">
                    <i className="me-2" data-feather="settings"></i>Settings
                  </Link>
                  <hr className="m-0" />
				  <Link to ="/signin" className="dropdown-item logout pb-0">
				  <img
                      src="assets/img/icons/log-out.svg"
                      className="me-2"
                      alt="img"
                    />
                    Logout
				  </Link>
                </div>
              </div>
            </li>
          </ul>
          {/* Header Menu */}

          {/* Mobile Menu */}
          <div className="dropdown mobile-user-menu">
            <Link
              to="javascript:void(0);"
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="fa fa-ellipsis-v"></i>
            </Link>
            <div className="dropdown-menu dropdown-menu-right">
              <Link className="dropdown-item" to="/profile">
                My Profile
              </Link>
              <Link className="dropdown-item" to="/generalsettings">
                Settings
              </Link>
			  <Link to ="/signin" className="dropdown-item"></Link>
              <Link className="dropdown-item" to="/signin">
                Logout
              </Link>
            </div>
          </div>
          {/* Mobile Menu */}
        </div>
        {/* Header */}
        </div>
        {/* /Main Wrapper */}
    </>
  )
}

export default Header