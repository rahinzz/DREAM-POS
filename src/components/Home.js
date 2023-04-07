import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
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

        {/* Sidebar */}
        <div className="sidebar" id="sidebar">
          <div className="sidebar-inner slimscroll">
            <div id="sidebar-menu" className="sidebar-menu">
              <ul>
                <li>
                  <Link to="/home">
                    <img src="assets/img/icons/dashboard.svg" alt="img" />
                    <span> Dashboard</span>{" "}
                  </Link>
                </li>
                <li className="submenu">
                  <Link to="javascript:void(0);">
                    <img src="assets/img/icons/product.svg" alt="img" />
                    <span> Product</span> <span className="menu-arrow"></span>
                  </Link>
                  <ul>
                    <li>
                      <Link to="/productlist">Product List</Link>
                    </li>
                    <li>
                      <Link to="/addproduct">Add Product</Link>
                    </li>
                    <li>
                      <Link to="/categorylist">Category List</Link>
                    </li>
                    <li>
                      <Link to="/addcategory">Add Category</Link>
                    </li>
                    <li>
                      <Link to="/subcategorylist">Sub Category List</Link>
                    </li>
                    <li>
                      <Link to="/subaddcategory">Add Sub Category</Link>
                    </li>
                    <li>
                      <Link to="/brandlist">Brand List</Link>
                    </li>
                    <li>
                      <Link to="/addbrand">Add Brand</Link>
                    </li>
                    <li>
                      <Link to="/importproduct">Import Products</Link>
                    </li>
                    <li>
                      <Link to="/barcode">Print Barcode</Link>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <Link to="javascript:void(0);">
                    <img src="assets/img/icons/sales1.svg" alt="img" />
                    <span> Sales</span> <span className="menu-arrow"></span>
                  </Link>
                  <ul>
                    <li>
                      <Link to="/saleslist">Sales List</Link>
                    </li>
                    <li>
                      <Link to="/pos">POS</Link>
                    </li>
                    <li>
                      <Link to="/pos">New Sales</Link>
                    </li>
                    <li>
                      <Link to="/salesreturnlists">Sales Return List</Link>
                    </li>
                    <li>
                      <Link to="/createsalesreturns">New Sales Return</Link>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <Link to="javascript:void(0);">
                    <img src="assets/img/icons/purchase1.svg" alt="img" />
                    <span> Purchase</span> <span className="menu-arrow"></span>
                  </Link>
                  <ul>
                    <li>
                      <Link to="/purchaselist">Purchase List</Link>
                    </li>
                    <li>
                      <Link to="/addpurchase">Add Purchase</Link>
                    </li>
                    <li>
                      <Link to="/importpurchase">Import Purchase</Link>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <Link to="javascript:void(0);">
                    <img src="assets/img/icons/expense1.svg" alt="img" />
                    <span> Expense</span> <span className="menu-arrow"></span>
                  </Link>
                  <ul>
                    <li>
                      <Link to="/expenselist">Expense List</Link>
                    </li>
                    <li>
                      <Link to="/createexpense">Add Expense</Link>
                    </li>
                    <li>
                      <Link to="/expensecategory">Expense Category</Link>
                    </li>
                  </ul>
                </li>

                <li className="submenu">
                  <Link to="javascript:void(0);">
                    <img src="assets/img/icons/quotation1.svg" alt="img" />
                    <span> Quotation</span> <span className="menu-arrow"></span>
                  </Link>
                  <ul>
                    <li>
                      <Link to="/quotationlist">Quotation List</Link>
                    </li>
                    <li>
                      <Link to="/addquotation">Add Quotation</Link>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <Link to="javascript:void(0);">
                    <img src="assets/img/icons/transfer1.svg" alt="img" />
                    <span> Transfer</span> <span className="menu-arrow"></span>
                  </Link>
                  <ul>
                    <li>
                      <Link to="/transferlist">Transfer List</Link>
                    </li>
                    <li>
                      <Link to="/addtransfer">Add Transfer </Link>
                    </li>
                    <li>
                      <Link to="/importtransfer">Import Transfer </Link>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <Link to="javascript:void(0);">
                    <img src="assets/img/icons/return1.svg" alt="img" />
                    <span> Return</span> <span className="menu-arrow"></span>
                  </Link>
                  <ul>
                    <li>
                      <Link to="/salesreturnlist">Sales Return List</Link>
                    </li>
                    <li>
                      <Link to="/createsalesreturn">Add Sales Return </Link>
                    </li>
                    <li>
                      <Link to="/purchasereturnlist">Purchase Return List</Link>
                    </li>
                    <li>
                      <Link to="/createpurchasereturn">
                        Add Purchase Return{" "}
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <Link to="javascript:void(0);">
                    <img src="assets/img/icons/users1.svg" alt="img" />
                    <span> People</span> <span className="menu-arrow"></span>
                  </Link>
                  <ul>
                    <li>
                      <Link to="/customerlist">Customer List</Link>
                    </li>
                    <li>
                      <Link to="/addcustomer">Add Customer </Link>
                    </li>
                    <li>
                      <Link to="/supplierlist">Supplier List</Link>
                    </li>
                    <li>
                      <Link to="/addsupplier">Add Supplier </Link>
                    </li>
                    <li>
                      <Link to="/userlist">User List</Link>
                    </li>
                    <li>
                      <Link to="/adduser">Add User</Link>
                    </li>
                    <li>
                      <Link to="/storelist">Store List</Link>
                    </li>
                    <li>
                      <Link to="/addstore">Add Store</Link>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <Link to="javascript:void(0);">
                    <img src="assets/img/icons/places.svg" alt="img" />
                    <span> Places</span> <span className="menu-arrow"></span>
                  </Link>
                  <ul>
                    <li>
                      <Link to="/newcountry">New Country</Link>
                    </li>
                    <li>
                      <Link to="/countrieslist">Countries list</Link>
                    </li>
                    <li>
                      <Link to="/newstate">New State </Link>
                    </li>
                    <li>
                      <Link to="/statelist">State list</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/components">
                    <i data-feather="layers"></i>
                    <span> Components</span>{" "}
                  </Link>
                </li>
                <li>
                  <Link to="/blankpage">
                    <i data-feather="file"></i>
                    <span> Blank Page</span>{" "}
                  </Link>
                </li>
                <li className="submenu">
                  <Link to="javascript:void(0);">
                    <i data-feather="alert-octagon"></i>{" "}
                    <span> Error Pages </span>{" "}
                    <span className="menu-arrow"></span>
                  </Link>
                  <ul>
                    <li>
                      <Link to="/error-404">404 Error </Link>
                    </li>
                    <li>
                      <Link to="/error-500">500 Error </Link>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <Link to="javascript:void(0);">
                    <i data-feather="box"></i> <span>Elements </span>{" "}
                    <span className="menu-arrow"></span>
                  </Link>
                  <ul>
                    <li>
                      <Link to="/sweetalerts">Sweet Alerts</Link>
                    </li>
                    <li>
                      <Link to="/tooltip">Tooltip</Link>
                    </li>
                    <li>
                      <Link to="/popover">Popover</Link>
                    </li>
                    <li>
                      <Link to="/ribbon">Ribbon</Link>
                    </li>
                    <li>
                      <Link to="/clipboard">Clipboard</Link>
                    </li>
                    <li>
                      <Link to="drag-drop">Drag & Drop</Link>
                    </li>
                    <li>
                      <Link to="rangeslider.html">Range Slider</Link>
                    </li>
                    <li>
                      <Link to="/rating">Rating</Link>
                    </li>
                    <li>
                      <Link to="/toastr">Toastr</Link>
                    </li>
                    <li>
                      <Link to="/text-editor">Text Editor</Link>
                    </li>
                    <li>
                      <Link to="/counter">Counter</Link>
                    </li>
                    <li>
                      <Link to="/scrollbar">Scrollbar</Link>
                    </li>
                    <li>
                      <Link to="/spinner">Spinner</Link>
                    </li>
                    <li>
                      <Link to="/notification">Notification</Link>
                    </li>
                    <li>
                      <Link to="/lightbox">Lightbox</Link>
                    </li>
                    <li>
                      <Link to="/stickynote">Sticky Note</Link>
                    </li>
                    <li>
                      <Link to="/timeline">Timeline</Link>
                    </li>
                    <li>
                      <Link to="/form-wizard">Form Wizard</Link>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <Link to="javascript:void(0);">
                    <i data-feather="bar-chart-2"></i> <span> Charts </span>{" "}
                    <span className="menu-arrow"></span>
                  </Link>
                  <ul>
                    <li>
                      <Link to="/chart-apex">Apex Charts</Link>
                    </li>
                    <li>
                      <Link to="/chart-js">Chart Js</Link>
                    </li>
                    <li>
                      <Link to="/chart-morris">Morris Charts</Link>
                    </li>
                    <li>
                      <Link to="/chart-flot">Flot Charts</Link>
                    </li>
                    <li>
                      <Link to="/chart-peity">Peity Charts</Link>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <Link to="javascript:void(0);">
                    <i data-feather="award"></i>
                    <span> Icons </span> <span className="menu-arrow"></span>
                  </Link>
                  <ul>
                    <li>
                      <Link to="/icon-fontawesome">Fontawesome Icons</Link>
                    </li>
                    <li>
                      <Link to="/icon-feather">Feather Icons</Link>
                    </li>
                    <li>
                      <Link to="/icon-ionic">Ionic Icons</Link>
                    </li>
                    <li>
                      <Link to="/icon-material">Material Icons</Link>
                    </li>
                    <li>
                      <Link to="/icon-pe7">Pe7 Icons</Link>
                    </li>
                    <li>
                      <Link to="/icon-simpleline">Simpleline Icons</Link>
                    </li>
                    <li>
                      <Link to="/icon-themify">Themify Icons</Link>
                    </li>
                    <li>
                      <Link to="/icon-weather">Weather Icons</Link>
                    </li>
                    <li>
                      <Link to="/icon-typicon">Typicon Icons</Link>
                    </li>
                    <li>
                      <Link to="/icon-flag">Flag Icons</Link>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <Link to="javascript:void(0);">
                    <i data-feather="columns"></i> <span> Forms </span>{" "}
                    <span className="menu-arrow"></span>
                  </Link>
                  <ul>
                    <li>
                      <Link to="/form-basicinputs">Basic Inputs </Link>
                    </li>
                    <li>
                      <Link to="/form-inputgroups">Input Groups </Link>
                    </li>
                    <li>
                      <Link to="/form-horizontal">Horizontal Form </Link>
                    </li>
                    <li>
                      <Link to="/form-vertical"> Vertical Form </Link>
                    </li>
                    <li>
                      <Link to="/form-mask">Form Mask </Link>
                    </li>
                    <li>
                      <Link to="/form-validation">Form Validation </Link>
                    </li>
                    <li>
                      <Link to="/form-select2">Form Select2 </Link>
                    </li>
                    <li>
                      <Link to="/form-fileupload">File Upload </Link>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <Link to="javascript:void(0);">
                    <i data-feather="layout"></i> <span> Table </span>{" "}
                    <span className="menu-arrow"></span>
                  </Link>
                  <ul>
                    <li>
                      <Link to="/tables-basic">Basic Tables </Link>
                    </li>
                    <li>
                      <Link to="/datatables">Data Table </Link>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <Link to="javascript:void(0);">
                    <img src="assets/img/icons/product.svg" alt="img" />
                    <span> Application</span>{" "}
                    <span className="menu-arrow"></span>
                  </Link>
                  <ul>
                    <li>
                      <Link to="/chat">Chat</Link>
                    </li>
                    <li>
                      <Link to="/calendar">Calendar</Link>
                    </li>
                    <li>
                      <Link to="/email">Email</Link>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <Link to="javascript:void(0);">
                    <img src="assets/img/icons/time.svg" alt="img" />
                    <span> Report</span> <span className="menu-arrow"></span>
                  </Link>
                  <ul>
                    <li>
                      <Link to="/purchaseorderreport">
                        Purchase order report
                      </Link>
                    </li>
                    <li>
                      <Link to="/inventoryreport">Inventory Report</Link>
                    </li>
                    <li>
                      <Link to="/salesreport">Sales Report</Link>
                    </li>
                    <li>
                      <Link to="/invoicereport">Invoice Report</Link>
                    </li>
                    <li>
                      <Link to="/purchasereport">Purchase Report</Link>
                    </li>
                    <li>
                      <Link to="/supplierreport">Supplier Report</Link>
                    </li>
                    <li>
                      <Link to="/customerreport">Customer Report</Link>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <Link to="javascript:void(0);">
                    <img src="assets/img/icons/users1.svg" alt="img" />
                    <span> Users</span> <span className="menu-arrow"></span>
                  </Link>
                  <ul>
                    <li>
                      <Link to="/newuser">New User </Link>
                    </li>
                    <li>
                      <Link to="/userlists">Users List</Link>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <Link to="javascript:void(0);">
                    <img src="assets/img/icons/settings.svg" alt="img" />
                    <span> Settings</span> <span className="menu-arrow"></span>
                  </Link>
                  <ul>
                    <li>
                      <Link to="/generalsettings" className="active">
                        General Settings
                      </Link>
                    </li>
                    <li>
                      <Link to="/emailsettings">Email Settings</Link>
                    </li>

                    <li>
                      <Link to="/paymentsettings">Payment Settings</Link>
                    </li>
                    <li>v   
                      <Link to="/currencysettings">Currency Settings</Link>
                    </li>
                    <li>
                      <Link to="/grouppermissions">Group Permissions</Link>
                    </li>
                    <li>
                      <Link to="/taxrates">Tax Rates</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Sidebar */}

        <div className="page-wrapper">
          <div className="content">
            <div className="row">
              <div className="col-lg-3 col-sm-6 col-12">
                <div className="dash-widget">
                  <div className="dash-widgetimg">
                    <span>
                      <img src="assets/img/icons/dash1.svg" alt="img" />
                    </span>
                  </div>
                  <div className="dash-widgetcontent">
                    <h5>
                      $
                      <span className="counters" data-count="307144.00">
                        $307,144.00
                      </span>
                    </h5>
                    <h6>Total Purchase Due</h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-12">
                <div className="dash-widget dash1">
                  <div className="dash-widgetimg">
                    <span>
                      <img src="assets/img/icons/dash2.svg" alt="img" />
                    </span>
                  </div>
                  <div className="dash-widgetcontent">
                    <h5>
                      $
                      <span className="counters" data-count="4385.00">
                        $4,385.00
                      </span>
                    </h5>
                    <h6>Total Sales Due</h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-12">
                <div className="dash-widget dash2">
                  <div className="dash-widgetimg">
                    <span>
                      <img src="assets/img/icons/dash3.svg" alt="img" />
                    </span>
                  </div>
                  <div className="dash-widgetcontent">
                    <h5>
                      $
                      <span className="counters" data-count="385656.50">
                        385,656.50
                      </span>
                    </h5>
                    <h6>Total Sale Amount</h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-12">
                <div className="dash-widget dash3">
                  <div className="dash-widgetimg">
                    <span>
                      <img src="assets/img/icons/dash4.svg" alt="img" />
                    </span>
                  </div>
                  <div className="dash-widgetcontent">
                    <h5>
                      $
                      <span className="counters" data-count="40000.00">
                        400.00
                      </span>
                    </h5>
                    <h6>Total Sale Amount</h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-12 d-flex">
                <div className="dash-count">
                  <div className="dash-counts">
                    <h4>100</h4>
                    <h5>Customers</h5>
                  </div>
                  <div className="dash-imgs">
                    <i data-feather="user"></i>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-12 d-flex">
                <div className="dash-count das1">
                  <div className="dash-counts">
                    <h4>100</h4>
                    <h5>Suppliers</h5>
                  </div>
                  <div className="dash-imgs">
                    <i data-feather="user-check"></i>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-12 d-flex">
                <div className="dash-count das2">
                  <div className="dash-counts">
                    <h4>100</h4>
                    <h5>Purchase Invoice</h5>
                  </div>
                  <div className="dash-imgs">
                    <i data-feather="file-text"></i>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-12 d-flex">
                <div className="dash-count das3">
                  <div className="dash-counts">
                    <h4>105</h4>
                    <h5>Sales Invoice</h5>
                  </div>
                  <div className="dash-imgs">
                    <i data-feather="file"></i>
                  </div>
                </div>
              </div>
            </div>
            {/* Button trigger modal */}

            <div className="row">
              <div className="col-lg-7 col-sm-12 col-12 d-flex">
                <div className="card flex-fill">
                  <div className="card-header pb-0 d-flex justify-content-between align-items-center">
                    <h5 className="card-title mb-0">Purchase & Sales</h5>
                    <div className="graph-sets">
                      <ul>
                        <li>
                          <span>Sales</span>
                        </li>
                        <li>
                          <span>Purchase</span>
                        </li>
                      </ul>
                      <div className="dropdown">
                        <button
                          className="btn btn-white btn-sm dropdown-toggle"
                          type="button"
                          id="dropdownMenuButton"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          2022{" "}
                          <img
                            src="assets/img/icons/dropdown.svg"
                            alt="img"
                            className="ms-2"
                          />
                        </button>
                        <ul
                          className="dropdown-menu"
                          aria-labelledby="dropdownMenuButton"
                        >
                          <li>
                            <Link to="javascript:void(0);" className="dropdown-item">
                              2022
                            </Link>
                          </li>
                          <li>
                            <Link to="javascript:void(0);" className="dropdown-item">
                              2021
                            </Link>
                          </li>
                          <li>
                            <Link to="javascript:void(0);" className="dropdown-item">
                              2020
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <div id="sales_charts"></div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-sm-12 col-12 d-flex">
                <div className="card flex-fill">
                  <div className="card-header pb-0 d-flex justify-content-between align-items-center">
                    <h4 className="card-title mb-0">Recently Added Products</h4>
                    <div className="dropdown">
                      <Link
                        to="javascript:void(0);"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        className="dropset"
                      >
                        <i className="fa fa-ellipsis-v"></i>
                      </Link>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuButton"
                      >
                        <li>
                          <Link to="/productlist" className="dropdown-item">
                            Product List
                          </Link>
                        </li>
                        <li>
                          <Link to="/addproduct" className="dropdown-item">
                            Product Add
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive dataview">
                      <table className="table datatable ">
                        <thead>
                          <tr>
                            <th>Sno</th>
                            <th>Products</th>
                            <th>Price</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td className="productimgname">
                              <Link to="/productlist" className="product-img">
                                <img
                                  src="assets/img/product/product22.jpg"
                                  alt="product"
                                />
                              </Link>
                              <Link to="/productlist">Apple Earpods</Link>
                            </td>
                            <td>$891.2</td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td className="productimgname">
                              <Link to="/productlist" className="product-img">
                                <img
                                  src="assets/img/product/product23.jpg"
                                  alt="product"
                                />
                              </Link>
                              <Link to="/productlist">iPhone 11</Link>
                            </td>
                            <td>$668.51</td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td className="productimgname">
                              <Link to="/productlist" className="product-img">
                                <img
                                  src="assets/img/product/product24.jpg"
                                  alt="product"
                                />
                              </Link>
                              <Link to="/productlist">samsung</Link>
                            </td>
                            <td>$522.29</td>
                          </tr>
                          <tr>
                            <td>4</td>
                            <td className="productimgname">
                              <Link to="/productlist" className="product-img">
                                <img
                                  src="assets/img/product/product6.jpg"
                                  alt="product"
                                />
                              </Link>
                              <Link to="/productlist">Macbook Pro</Link>
                            </td>
                            <td>$291.01</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card mb-0">
              <div className="card-body">
                <h4 className="card-title">Expired Products</h4>
                <div className="table-responsive dataview">
                  <table className="table datatable ">
                    <thead>
                      <tr>
                        <th>SNo</th>
                        <th>Product Code</th>
                        <th>Product Name</th>
                        <th>Brand Name</th>
                        <th>Category Name</th>
                        <th>Expiry Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>
                          <Link to="javascript:void(0);">IT0001</Link>
                        </td>
                        <td className="productimgname">
                          <Link className="product-img" to="/productlist">
                            <img
                              src="assets/img/product/product2.jpg"
                              alt="product"
                            />
                          </Link>
                          <Link to="/productlist">Orange</Link>
                        </td>
                        <td>N/D</td>
                        <td>Fruits</td>
                        <td>12-12-2022</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>
                          <Link to="javascript:void(0);">IT0002</Link>
                        </td>
                        <td className="productimgname">
                          <Link className="product-img" to="/productlist">
                            <img
                              src="assets/img/product/product3.jpg"
                              alt="product"
                            />
                          </Link>
                          <Link to="/productlist">Pineapple</Link>
                        </td>
                        <td>N/D</td>
                        <td>Fruits</td>
                        <td>25-11-2022</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>
                          <Link to="javascript:void(0);">IT0003</Link>
                        </td>
                        <td className="productimgname">
                          <Link className="product-img" to="/productlist">
                            <img
                              src="assets/img/product/product4.jpg"
                              alt="product"
                            />
                          </Link>
                          <Link to="/productlist">Stawberry</Link>
                        </td>
                        <td>N/D</td>
                        <td>Fruits</td>
                        <td>19-11-2022</td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>
                          <Link to="javascript:void(0);">IT0004</Link>
                        </td>
                        <td className="productimgname">
                          <Link className="product-img" to="/productlist">
                            <img
                              src="assets/img/product/product5.jpg"
                              alt="product"
                            />
                          </Link>
                          <Link to="/productlist">Avocat</Link>
                        </td>
                        <td>N/D</td>
                        <td>Fruits</td>
                        <td>20-11-2022</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
