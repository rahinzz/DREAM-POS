import React from "react";
import { Link } from "react-router-dom";

const Components = () => {
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
            <Link to="/home" className="logo logo-normal">
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
                    <li>
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
						<div className="page-header">
							<div className="page-title">
								<h4>Components</h4>
							</div>
						</div>
						<div className="comp-sec-wrapper">
					
							{/* Avatar  */}
							<section className="comp-section">
								<div className="section-header">
									<h3 className="section-title">Avatar</h3>
									<div className="line"></div>
								</div>
								<div className="row">
									<div className="col-md-12">
										<div className="card bg-white">
											<div className="card-header">
												<h5 className="card-title">Sizing</h5>
											</div>
											<div className="card-body">
												<div className="avatar avatar-xxl">
													<img className="avatar-img rounded-circle" alt="User Image" src="assets/img/profiles/avatar-02.jpg" />
												</div>
												<div className="avatar avatar-xl">
													<img className="avatar-img rounded-circle" alt="User Image" src="assets/img/profiles/avatar-02.jpg" />
												</div>
												<div className="avatar avatar-lg">
													<img className="avatar-img rounded-circle" alt="User Image" src="assets/img/profiles/avatar-02.jpg" />
												</div>
												<div className="avatar">
													<img className="avatar-img rounded-circle" alt="User Image" src="assets/img/profiles/avatar-02.jpg" />
												</div>
												<div className="avatar avatar-xs">
													<img className="avatar-img rounded-circle" alt="User Image" src="assets/img/profiles/avatar-02.jpg" />
												</div>
											</div>
										</div>
									</div>
									<div className="col-md-12">
										<div className="card bg-white">
											<div className="card-header">
												<h5 className="card-title">Avatar With Status</h5>
											</div>
											<div className="card-body">
												<div className="avatar avatar-online">
													<img className="avatar-img rounded-circle" alt="User Image" src="assets/img/profiles/avatar-02.jpg" />
												</div>
												<div className="avatar avatar-offline">
													<img className="avatar-img rounded-circle" alt="User Image" src="assets/img/profiles/avatar-02.jpg" />
												</div>
												<div className="avatar avatar-away">
													<img className="avatar-img rounded-circle" alt="User Image" src="assets/img/profiles/avatar-02.jpg" />
												</div>
											</div>
										</div>
									</div>
									<div className="col-md-12">
										<div className="card bg-white">
											<div className="card-header">
												<h5 className="card-title">Shape</h5>
											</div>
											<div className="card-body">
												<div className="avatar">
													<img className="avatar-img rounded" alt="User Image" src="assets/img/profiles/avatar-02.jpg" />
												</div>
												<div className="avatar">
													<img className="avatar-img rounded-circle" alt="User Image" src="assets/img/profiles/avatar-02.jpg" />
												</div>
											</div>
										</div>
									</div>
									<div className="col-md-12">
										<div className="card bg-white">
											<div className="card-header">
												<h5 className="card-title">Group</h5>
											</div>
											<div className="card-body">
												<div className="avatar-group">
													<div className="avatar">
														<img className="avatar-img rounded-circle border border-white" alt="User Image" src="assets/img/profiles/avatar-02.jpg" />
													</div>
													<div className="avatar">
														<img className="avatar-img rounded-circle border border-white" alt="User Image" src="assets/img/profiles/avatar-03.jpg" />
													</div>
													<div className="avatar">
														<img className="avatar-img rounded-circle border border-white" alt="User Image" src="assets/img/profiles/avatar-04.jpg" />
													</div>
													<div className="avatar">
														<span className="avatar-title rounded-circle border border-white">CF</span>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</section>
							{/* Avatar  */}
							
							{/* Alerts  */}
							<section className="comp-section">
								<div className="section-header">
									<h3 className="section-title">Alerts</h3>
									<div className="line"></div>
								</div>
								<div className="card bg-white">
									<div className="card-body">
										<div className="alert alert-primary alert-dismissible fade show" role="alert">
											<strong>Holy guacamole!</strong> You should check in on some of those fields below.
											<button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
										</div>
										<div className="alert alert-secondary alert-dismissible fade show" role="alert">
											<strong>Holy guacamole!</strong> You should check in on some of those fields below.
											<button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
										</div>
										<div className="alert alert-success alert-dismissible fade show" role="alert">
											<strong>Holy guacamole!</strong> You should check in on some of those fields below.
											<button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
										</div>
										<div className="alert alert-danger alert-dismissible fade show" role="alert">
											<strong>Holy guacamole!</strong> You should check in on some of those fields below.
											<button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
										</div>
										<div className="alert alert-warning alert-dismissible fade show" role="alert">
											<strong>Holy guacamole!</strong> You should check in on some of those fields below.
											<button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
										</div>
										<div className="alert alert-info alert-dismissible fade show" role="alert">
											<strong>Holy guacamole!</strong> You should check in on some of those fields below.
											<button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
										</div>
										<div className="alert alert-light alert-dismissible fade show" role="alert">
											<strong>Holy guacamole!</strong> You should check in on some of those fields below.
											<button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
										</div>
										<div className="alert alert-dark alert-dismissible fade show" role="alert">
											<strong>Holy guacamole!</strong> You should check in on some of those fields below.
											<button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
										</div>
									</div>
								</div>
							</section>
							{/* Alerts  */}
							
							{/* Breadcrumbs  */}
							<section className="comp-section">
								<div className="section-header">
									<h3 className="section-title">Breadcrumbs</h3>
									<div className="line"></div>
								</div>
								<div className="card bg-white">
									<div className="card-body">
										<nav aria-label="breadcrumb">
											<ol className="breadcrumb">
												<li className="breadcrumb-item active" aria-current="page">Home</li>
											</ol>
										</nav>
										<nav aria-label="breadcrumb">
											<ol className="breadcrumb">
												<li className="breadcrumb-item"><Link to="javascript:void(0);">Home</Link></li>
												<li className="breadcrumb-item active" aria-current="page">Products</li>
											</ol>
										</nav>
										<nav aria-label="breadcrumb">
											<ol className="breadcrumb mb-0">
												<li className="breadcrumb-item"><Link to="javascript:void(0);">Home</Link></li>
												<li className="breadcrumb-item"><Link to="javascript:void(0);">Products</Link></li>
												<li className="breadcrumb-item active" aria-current="page">Accessories</li>
											</ol>
										</nav>
									</div>
								</div>
							</section>
							{/* Breadcrumbs  */}
							
							{/* Buttons  */}
							<section className="comp-section comp-buttons">
								<div className="section-header">
									<h3 className="section-title">Buttons</h3>
									<div className="line"></div>
								</div>
								<div className="card bg-white">
									<div className="card-body">
										<h5 className="card-title">Default Button</h5>
										<button type="button" className="btn btn-primary">Primary</button>
										<button type="button" className="btn btn-secondary">Secondary</button>
										<button type="button" className="btn btn-success">Success</button>
										<button type="button" className="btn btn-danger">Danger</button>
										<button type="button" className="btn btn-warning">Warning</button>
										<button type="button" className="btn btn-info">Info</button>
										<button type="button" className="btn btn-light">Light</button>
										<button type="button" className="btn btn-dark">Dark</button>
										<button type="button" className="btn btn-link">Link</button>
										<hr />
										<h5 className="card-title">Button Sizes</h5>
										<p>
											<button type="button" className="btn btn-primary btn-lg">Primary</button>
											<button type="button" className="btn btn-secondary btn-lg">Secondary</button>
											<button type="button" className="btn btn-success btn-lg">Success</button>
											<button type="button" className="btn btn-danger btn-lg">Danger</button>
											<button type="button" className="btn btn-warning btn-lg">Warning</button>
											<button type="button" className="btn btn-info btn-lg">Info</button>
											<button type="button" className="btn btn-light btn-lg">Light</button>
											<button type="button" className="btn btn-dark btn-lg">Dark</button>
										</p>
										<p>
											<button type="button" className="btn btn-primary">Primary</button>
											<button type="button" className="btn btn-secondary">Secondary</button>
											<button type="button" className="btn btn-success">Success</button>
											<button type="button" className="btn btn-danger">Danger</button>
											<button type="button" className="btn btn-warning">Warning</button>
											<button type="button" className="btn btn-info">Info</button>
											<button type="button" className="btn btn-light">Light</button>
											<button type="button" className="btn btn-dark">Dark</button>
										</p>
										<p>
											<button type="button" className="btn btn-primary btn-sm">Primary</button>
											<button type="button" className="btn btn-secondary btn-sm">Secondary</button>
											<button type="button" className="btn btn-success btn-sm">Success</button>
											<button type="button" className="btn btn-danger btn-sm">Danger</button>
											<button type="button" className="btn btn-warning btn-sm">Warning</button>
											<button type="button" className="btn btn-info btn-sm">Info</button>
											<button type="button" className="btn btn-light btn-sm">Light</button>
											<button type="button" className="btn btn-dark btn-sm">Dark</button>
										</p>
										<hr />
										<h5 className="card-title">Button Groups</h5>
										<div className="btn-toolbar">
											<div className="btn-group btn-group-lg">
												<button type="button" className="btn btn-primary">Left</button>
												<button type="button" className="btn btn-primary">Middle</button>
												<button type="button" className="btn btn-primary">Right</button>
											</div>
										</div>
										<br />
										<div className="btn-toolbar">
											<div className="btn-group">
												<button type="button" className="btn btn-primary">Left</button>
												<button type="button" className="btn btn-primary">Middle</button>
												<button type="button" className="btn btn-primary">Right</button>
											</div>
										</div>
										<br />
										<div className="btn-toolbar">
											<div className="btn-group btn-group-sm">
												<button type="button" className="btn btn-primary">Left</button>
												<button type="button" className="btn btn-primary">Middle</button>
												<button type="button" className="btn btn-primary">Right</button>
											</div>
										</div>
									</div>
								</div>
								
								{/* Rounded Button  */}
								<div className="card bg-white">
									<div className="card-header">
										<h5 className="card-title">Rounded Button</h5>
										<p className="card-text">use <code>.btn-rounded</code> in class <code>.btn</code> class to get Rounded button</p>
									</div>
									<div className="card-body">
										<button type="button" className="btn btn-rounded btn-primary">Primary</button>
										<button type="button" className="btn btn-rounded btn-secondary">Secondary</button>
										<button type="button" className="btn btn-rounded btn-success">Success</button>
										<button type="button" className="btn btn-rounded btn-danger">Danger</button>
										<button type="button" className="btn btn-rounded btn-warning">Warning</button>
										<button type="button" className="btn btn-rounded btn-info">Info</button>
										<button type="button" className="btn btn-rounded btn-light">Light</button>
										<button type="button" className="btn btn-rounded btn-dark">Dark</button>
										<hr />
										<p>use <code>.btn-rounded</code> in class <code>.btn-outline-*</code> class to get Rounded Outline button</p>
										<button type="button" className="btn btn-rounded btn-outline-primary">Primary</button>
										<button type="button" className="btn btn-rounded btn-outline-secondary">Secondary</button>
										<button type="button" className="btn btn-rounded btn-outline-success">Success</button>
										<button type="button" className="btn btn-rounded btn-outline-danger">Danger</button>
										<button type="button" className="btn btn-rounded btn-outline-warning">Warning</button>
										<button type="button" className="btn btn-rounded btn-outline-info">Info</button>
										<button type="button" className="btn btn-rounded btn-outline-light">Light</button>
										<button type="button" className="btn btn-rounded btn-outline-dark">Dark</button>
									</div>
								</div>
								{/* Rounded Button  */}
								
								{/* Outline Buttons  */}
								<div className="card bg-white">
									<div className="card-header">
										<h5 className="card-title">Outline Buttons</h5>
										<p className="card-text">Use <code>.btn-outline-*</code> class for outline buttons.</p>
									</div>
									<div className="card-body">
										<div className="row row-sm align-items-center">
											<div className="col-12 col-xl mb-3 mb-xl-0">Normal</div>
											<div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
												<button type="button" className="btn btn-block btn-outline-primary">Primary</button>
											</div>
											<div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
												<button type="button" className="btn btn-block btn-outline-secondary">Secondary</button>
											</div>
											<div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
												<button type="button" className="btn btn-block btn-outline-success">Success</button>
											</div>
											<div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
												<button type="button" className="btn btn-block btn-outline-warning">Warning</button>
											</div>
											<div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
												<button type="button" className="btn btn-block btn-outline-danger">Danger</button>
											</div>
											<div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
												<button type="button" className="btn btn-block btn-outline-info">Info</button>
											</div>
											<div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
												<button type="button" className="btn btn-block btn-outline-light">Light</button>
											</div>
											<div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
												<button type="button" className="btn btn-block btn-outline-dark">Dark</button>
											</div>
										</div>
										<div className="row row-sm align-items-center mt-3">
											<div className="col-12 col-xl mb-3 mb-xl-0">Active</div>
											<div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
												<button type="button" className="btn btn-block btn-outline-primary active">Primary</button>
											</div>
											<div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
												<button type="button" className="btn btn-block btn-outline-secondary active">Secondary</button>
											</div>
											<div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
												<button type="button" className="btn btn-block btn-outline-success active">Success</button>
											</div>
											<div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
												<button type="button" className="btn btn-block btn-outline-warning active">Warning</button>
											</div>
											<div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
												<button type="button" className="btn btn-block btn-outline-danger active">Danger</button>
											</div>
											<div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
												<button type="button" className="btn btn-block btn-outline-info active">Info</button>
											</div>
											<div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
												<button type="button" className="btn btn-block btn-outline-light active">Light</button>
											</div>
											<div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
												<button type="button" className="btn btn-block btn-outline-dark active">Dark</button>
											</div>
										</div>
										<div className="row row-sm align-items-center mt-3">
											<div className="col-12 col-xl mb-3 mb-xl-0">Disabled</div>
											<div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
												<button disabled="" type="button" className="btn btn-block btn-outline-primary">Primary</button>
											</div>
											<div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
												<button disabled="" type="button" className="btn btn-block btn-outline-secondary">Secondary</button>
											</div>
											<div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
												<button disabled="" type="button" className="btn btn-block btn-outline-success">Success</button>
											</div>
											<div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
												<button disabled="" type="button" className="btn btn-block btn-outline-warning">Warning</button>
											</div>
											<div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
												<button disabled="" type="button" className="btn btn-block btn-outline-danger">Danger</button>
											</div>
											<div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
												<button disabled="" type="button" className="btn btn-block btn-outline-info">Info</button>
											</div>
											<div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
												<button disabled="" type="button" className="btn btn-block btn-outline-light">Light</button>
											</div>
											<div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
												<button disabled="" type="button" className="btn btn-block btn-outline-dark">Dark</button>
											</div>
										</div>
									</div>
								</div>
								{/* Outline Buttons  */}
	
								{/* Progress Button  */}
								<div className="card mb-4">
									<div className="card-header">
										<h5 className="card-title">Progress Button</h5>
									</div>
									<div className="card-body bg-white">
										<button type="button" className="btn btn-primary"><span className="spinner-border spinner-border-sm me-2" role="status"></span>Primary</button>
										<button type="button" className="btn btn-secondary"><span className="spinner-border spinner-border-sm me-2" role="status"></span>Secondary</button>
										<button type="button" className="btn btn-success"><span className="spinner-border spinner-border-sm me-2" role="status"></span>Success</button>
										<button type="button" className="btn btn-danger"><span className="spinner-border spinner-border-sm me-2" role="status"></span>Danger</button>
										<button type="button" className="btn btn-warning"><span className="spinner-border spinner-border-sm me-2" role="status"></span>Warning</button>
										<button type="button" className="btn btn-info"><span className="spinner-border spinner-border-sm me-2" role="status"></span>Info</button>
										<button type="button" className="btn btn-dark"><span className="spinner-border spinner-border-sm me-2" role="status"></span>Dark</button>
									</div>
								</div>
								{/* /Progress Button  */}
							</section>
							{/* Buttons  */}
							
							{/* Cards  */}
							<section className="comp-section comp-cards">
								<div className="section-header">
									<h3 className="section-title">Cards</h3>
									<div className="line"></div>
								</div>
							
								<div className="row">
									<div className="col-12 col-md-6 col-lg-4 d-flex">
										<div className="card flex-fill bg-white">
											<img alt="Card Image" src="assets/img/img-01.jpg" className="card-img-top" />
											<div className="card-header">
												<h5 className="card-title mb-0">Card with image and links</h5>
											</div>
											<div className="card-body">
												<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
												<Link className="card-link" to="javascript:void(0);">Card link</Link>
												<Link className="card-link" to="javascript:void(0);">Another link</Link>
											</div>
										</div>
									</div>
	
									<div className="col-12 col-md-6 col-lg-4 d-flex">
										<div className="card flex-fill bg-white">
											<img alt="Card Image" src="assets/img/img-01.jpg" className="card-img-top" />
											<div className="card-header">
												<h5 className="card-title mb-0">Card with image and button</h5>
											</div>
											<div className="card-body">
												<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
												<Link className="btn btn-primary" to="javascript:void(0);">Go somewhere</Link>
											</div>
										</div>
									</div>
	
									<div className="col-12 col-md-6 col-lg-4 d-flex">
										<div className="card flex-fill bg-white">
											<img alt="Card Image" src="assets/img/img-01.jpg" className="card-img-top" />
											<div className="card-header">
												<h5 className="card-title mb-0">Card with image and list</h5>
											</div>
											<ul className="list-group list-group-flush">
												<li className="list-group-item">Cras justo odio</li>
												<li className="list-group-item">Dapibus ac facilisis in</li>
												<li className="list-group-item">Vestibulum at eros</li>
											</ul>
										</div>
									</div>
								</div>
								<div className="row">
									<div className="col-12 col-md-6 col-lg-4 d-flex">
										<div className="card flex-fill bg-white">
											<div className="card-header">
												<h5 className="card-title mb-0">Card with links</h5>
											</div>
											<div className="card-body">
												<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
												<Link className="card-link" to="javascript:void(0);">Card link</Link>
												<Link className="card-link" to="javascript:void(0);">Another link</Link>
											</div>
										</div>
									</div>
	
									<div className="col-12 col-md-6 col-lg-4 d-flex">
										<div className="card flex-fill bg-white">
											<div className="card-header">
												<h5 className="card-title mb-0">Card with button</h5>
											</div>
											<div className="card-body">
												<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
												<Link className="btn btn-primary" to="javascript:void(0);">Go somewhere</Link>
											</div>
										</div>
									</div>
	
									<div className="col-12 col-md-6 col-lg-4 d-flex">
										<div className="card flex-fill bg-white">
											<div className="card-header">
												<h5 className="card-title mb-0">Card with list</h5>
											</div>
											<ul className="list-group list-group-flush">
												<li className="list-group-item">Cras justo odio</li>
												<li className="list-group-item">Dapibus ac facilisis in</li>
												<li className="list-group-item">Vestibulum at eros</li>
											</ul>
										</div>
									</div>
								</div>
								
								<div className="row">
									<div className="col-12 col-md-6 col-lg-4 d-flex">
										<div className="card flex-fill bg-white">
											<div className="card-header">
												This is my header
											</div>
											<div className="card-body">
												<h5 className="card-title">Special title treatment</h5>
												<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
											</div>
											<div className="card-footer text-muted">
												This is my footer
											</div>
										</div>
									</div>
	
									<div className="col-12 col-md-6 col-lg-4 d-flex">
										<div className="card flex-fill bg-white">
											<div className="card-header">
												<ul role="tablist" className="nav nav-tabs card-header-tabs float-right">
													<li className="nav-item">
														<Link to="#tab-1" data-bs-toggle="tab" className="nav-link active">Active</Link>
													</li>
													<li className="nav-item">
														<Link to="#tab-2" data-bs-toggle="tab" className="nav-link">Link</Link>
													</li>
													<li className="nav-item">
														<Link to="#tab-3" data-bs-toggle="tab" className="nav-link disabled">Disabled</Link>
													</li>
												</ul>
											</div>
											<div className="card-body">
												<div className="tab-content pt-0">
													<div role="tabpanel" id="tab-1" className="tab-pane fade show active">
														<h5 className="card-title">Card with tabs</h5>
														<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
														<Link className="btn btn-primary" to="javascript:void(0);">Go somewhere</Link>
													</div>
													<div role="tabpanel" id="tab-2" className="tab-pane fade text-center">
														<h5 className="card-title">Card with tabs</h5>
														<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
														<Link className="btn btn-primary" to="javascript:void(0);">Go somewhere</Link>
													</div>
													<div role="tabpanel" id="tab-3" className="tab-pane fade">
														<h5 className="card-title">Card with tabs</h5>
														<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
														<Link className="btn btn-primary" to="javascript:void(0);">Go somewhere</Link>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="col-12 col-md-6 col-lg-4 d-flex">
										<div className="card flex-fill bg-white">
											<div className="card-header">
												<ul role="tablist" className="nav nav-pills card-header-pills float-right">
													<li className="nav-item">
														<Link to="#tab-4" data-bs-toggle="tab" className="nav-link active">Active</Link>
													</li>
													<li className="nav-item">
														<Link to="#tab-5" data-bs-toggle="tab" className="nav-link">Link</Link>
													</li>
													<li className="nav-item">
														<Link to="#tab-6" data-bs-toggle="tab" className="nav-link disabled">Disabled</Link>
													</li>
												</ul>
											</div>
											<div className="card-body">
												<div className="tab-content pt-0">
													<div role="tabpanel" id="tab-4" className="tab-pane fade show active">
														<h5 className="card-title">Card with pills</h5>
														<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
														<Link className="btn btn-primary" to="javascript:void(0);">Go somewhere</Link>
													</div>
													<div role="tabpanel" id="tab-5" className="tab-pane fade text-center">
														<h5 className="card-title">Card with pills</h5>
														<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
														<Link className="btn btn-primary" to="javascript:void(0);">Go somewhere</Link>
													</div>
													<div role="tabpanel" id="tab-6" className="tab-pane fade">
														<h5 className="card-title">Card with pills</h5>
														<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
														<Link className="btn btn-primary" to="javascript:void(0);">Go somewhere</Link>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</section>
							{/* /Cards  */}
							
							{/* Dropdowns  */}
							<section className="comp-section comp-dropdowns">
								<div className="section-header">
									<h3 className="section-title">Dropdowns</h3>
									<div className="line"></div>
								</div>
								<div className="card bg-white">
									<div className="card-body">
										<h5 className="card-title">Dropdowns within Text</h5>
										<div className="dropdown">
											<Link className="dropdown-toggle" to="javascript:void(0);" role="button" data-bs-toggle="dropdown" aria-expanded="false"> Dropdown </Link>
											<div className="dropdown-menu">
												<Link className="dropdown-item" to="javascript:void(0);">Action</Link>
												<Link className="dropdown-item" to="javascript:void(0);">Another action</Link>
											</div>
										</div>
										<hr />
										<h5 className="card-title">Dropdowns within Buttons</h5>
										<div className="btn-group">
											<button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Action</button>
											<div className="dropdown-menu">
												<Link className="dropdown-item" to="javascript:void(0);">Action</Link>
												<Link className="dropdown-item" to="javascript:void(0);">Another action</Link>
												<div className="dropdown-divider"></div>
												<Link className="dropdown-item" to="javascript:void(0);">Separated link</Link>
											</div>
										</div>
										<div className="btn-group">
											<button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Action</button>
											<div className="dropdown-menu">
												<Link className="dropdown-item" to="javascript:void(0);">Action</Link>
												<Link className="dropdown-item" to="javascript:void(0);">Another action</Link>
												<div className="dropdown-divider"></div>
												<Link className="dropdown-item" to="javascript:void(0);">Separated link</Link>
											</div>
										</div>
										<div className="btn-group">
											<button type="button" className="btn btn-info dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Action</button>
											<div className="dropdown-menu">
												<Link className="dropdown-item" to="javascript:void(0);">Action</Link>
												<Link className="dropdown-item" to="javascript:void(0);">Another action</Link>
												<div className="dropdown-divider"></div>
												<Link className="dropdown-item" to="javascript:void(0);">Separated link</Link>
											</div>
										</div>
										<div className="btn-group">
											<button type="button" className="btn btn-success dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Action</button>
											<div className="dropdown-menu">
												<Link className="dropdown-item" to="javascript:void(0);">Action</Link>
												<Link className="dropdown-item" to="javascript:void(0);">Another action</Link>
												<div className="dropdown-divider"></div>
												<Link className="dropdown-item" to="javascript:void(0);">Separated link</Link>
											</div>
										</div>
										<div className="btn-group">
											<button type="button" className="btn btn-warning dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Action</button>
											<div className="dropdown-menu">
												<Link className="dropdown-item" to="javascript:void(0);">Action</Link>
												<Link className="dropdown-item" to="javascript:void(0);">Another action</Link>
												<div className="dropdown-divider"></div>
												<Link className="dropdown-item" to="javascript:void(0);">Separated link</Link>
											</div>
										</div>
										<div className="btn-group">
											<button type="button" className="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Action</button>
											<div className="dropdown-menu">
												<Link className="dropdown-item" to="javascript:void(0);">Action</Link>
												<Link className="dropdown-item" to="javascript:void(0);">Another action</Link>
												<div className="dropdown-divider"></div>
												<Link className="dropdown-item" to="javascript:void(0);">Separated link</Link>
											</div>
										</div>
										<hr />
										<h5 className="card-title">Split button dropdowns</h5>
										<div className="btn-group">
											<button type="button" className="btn btn-primary">Action</button>
											<button type="button" className="btn btn-primary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
												<span className="sr-only">Toggle Dropdown</span>
											</button>
											<div className="dropdown-menu">
												<Link className="dropdown-item" to="javascript:void(0);">Action</Link>
												<Link className="dropdown-item" to="javascript:void(0);">Another action</Link>
												<div className="dropdown-divider"></div>
												<Link className="dropdown-item" to="javascript:void(0);">Separated link</Link>
											</div>
										</div>
										<div className="btn-group">
											<button type="button" className="btn btn-secondary">Action</button>
											<button type="button" className="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
												<span className="sr-only">Toggle Dropdown</span>
											</button>
											<div className="dropdown-menu">
												<Link className="dropdown-item" to="javascript:void(0);">Action</Link>
												<Link className="dropdown-item" to="javascript:void(0);">Another action</Link>
												<div className="dropdown-divider"></div>
												<Link className="dropdown-item" to="javascript:void(0);">Separated link</Link>
											</div>
										</div>
										<div className="btn-group">
											<button type="button" className="btn btn-info">Action</button>
											<button type="button" className="btn btn-info dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
												<span className="sr-only">Toggle Dropdown</span>
											</button>
											<div className="dropdown-menu">
												<Link className="dropdown-item" to="javascript:void(0);">Action</Link>
												<Link className="dropdown-item" to="javascript:void(0);">Another action</Link>
												<div className="dropdown-divider"></div>
												<Link className="dropdown-item" to="javascript:void(0);">Separated link</Link>
											</div>
										</div>
										<div className="btn-group">
											<button type="button" className="btn btn-success">Action</button>
											<button type="button" className="btn btn-success dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
												<span className="sr-only">Toggle Dropdown</span>
											</button>
											<div className="dropdown-menu">
												<Link className="dropdown-item" to="javascript:void(0);">Action</Link>
												<Link className="dropdown-item" to="javascript:void(0);">Another action</Link>
												<div className="dropdown-divider"></div>
												<Link className="dropdown-item" to="javascript:void(0);">Separated link</Link>
											</div>
										</div>
										<div className="btn-group">
											<button type="button" className="btn btn-warning">Action</button>
											<button type="button" className="btn btn-warning dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
												<span className="sr-only">Toggle Dropdown</span>
											</button>
											<div className="dropdown-menu">
												<Link className="dropdown-item" to="javascript:void(0);">Action</Link>
												<Link className="dropdown-item" to="javascript:void(0);">Another action</Link>
												<div className="dropdown-divider"></div>
												<Link className="dropdown-item" to="javascript:void(0);">Separated link</Link>
											</div>
										</div>
										<div className="btn-group">
											<button type="button" className="btn btn-danger">Action</button>
											<button type="button" className="btn btn-danger dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
												<span className="sr-only">Toggle Dropdown</span>
											</button>
											<div className="dropdown-menu">
												<Link className="dropdown-item" to="javascript:void(0);">Action</Link>
												<Link className="dropdown-item" to="javascript:void(0);">Another action</Link>
												<div className="dropdown-divider"></div>
												<Link className="dropdown-item" to="javascript:void(0);">Separated link</Link>
											</div>
										</div>
									</div>
								</div>
							</section>
							{/* /Dropdowns  */}
	
							{/* Pagination  */}
							<section className="comp-section">
								<div className="section-header">
									<h3 className="section-title">Pagination</h3>
									<div className="line"></div>
								</div>
									<div className="card bg-white">
									<div className="card-body">
										<div>
											<ul className="pagination mb-4">
												<li className="page-item disabled">
													<Link className="page-link" to="javascript:void(0);" tabindex="-1">Previous</Link>
												</li>
												<li className="page-item"><Link className="page-link" to="javascript:void(0);">1</Link></li>
												<li className="page-item active">
													<Link className="page-link" to="javascript:void(0);">2 <span className="sr-only">(current)</span></Link>
												</li>
												<li className="page-item"><Link className="page-link" to="javascript:void(0);">3</Link></li>
												<li className="page-item">
													<Link className="page-link" to="javascript:void(0);">Next</Link>
												</li>
											</ul>
										</div>
										<div>
											<ul className="pagination mb-4">
												<li className="page-item">
													<Link className="page-link" to="javascript:void(0);" aria-label="Previous">
														<span aria-hidden="true">«</span>
														<span className="sr-only">Previous</span>
													</Link>
												</li>
												<li className="page-item"><Link className="page-link" to="javascript:void(0);">1</Link></li>
												<li className="page-item"><Link className="page-link" to="javascript:void(0);">2</Link></li>
												<li className="page-item"><Link className="page-link" to="javascript:void(0);">3</Link></li>
												<li className="page-item">
													<Link className="page-link" to="javascript:void(0);" aria-label="Next">
														<span aria-hidden="true">»</span>
													<span className="sr-only">Next</span>
													</Link>
												</li>
											</ul>
										</div>
										<div>
											<ul className="pagination pagination-lg mb-4">
												<li className="page-item disabled">
													<Link className="page-link" to="javascript:void(0);" tabindex="-1">Previous</Link>
												</li>
												<li className="page-item"><Link className="page-link" to="javascript:void(0);">1</Link></li>
												<li className="page-item active">
													<Link className="page-link" to="javascript:void(0);">2 <span className="sr-only">(current)</span></Link>
												</li>
												<li className="page-item"><Link className="page-link" to="javascript:void(0);">3</Link></li>
												<li className="page-item">
													<Link className="page-link" to="javascript:void(0);">Next</Link>
												</li>
											</ul>
										</div>
										
										<div>
											<ul className="pagination pagination-sm mb-0">
												<li className="page-item disabled">
													<Link className="page-link" to="javascript:void(0);" tabindex="-1">Previous</Link>
												</li>
												<li className="page-item"><Link className="page-link" to="javascript:void(0);">1</Link></li>
												<li className="page-item active">
													<Link className="page-link" to="javascript:void(0);">2 <span className="sr-only">(current)</span></Link>
												</li>
												<li className="page-item"><Link className="page-link" to="javascript:void(0);">3</Link></li>
												<li className="page-item">
													<Link className="page-link" to="javascript:void(0);">Next</Link>
												</li>
											</ul>
										</div>
									</div>
									</div>
							</section>
							{/* /Pagination */}
							
							{/* Progress  */}
							<section className="comp-section">
								<div className="section-header">
									<h3 className="section-title">Progress</h3>
									<div className="line"></div>
								</div>
								<div className="progress-example card bg-white">
									<div className="card-header">
										<h5 className="card-title">Large Progress Bars</h5>
									</div>
									<div className="card-body pb-0">
										<div className="row">
											<div className="col-md-6">
												<div>
													<div className="progress progress-lg">
														<div className="progress-bar" role="progressbar" style={{width: "10%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
													</div>
													<div className="progress progress-lg">
														<div className="progress-bar bg-success" role="progressbar" style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
													</div>
													<div className="progress progress-lg">
														<div className="progress-bar bg-info" role="progressbar" style={{width: "50%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
													</div>
													<div className="progress progress-lg">
														<div className="progress-bar bg-warning" role="progressbar" style={{width: "75%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
													</div>
													<div className="progress progress-lg">
														<div className="progress-bar bg-danger" role="progressbar" style={{width: "100%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
													</div>
												</div>
											</div>
											<div className="col-md-6">
												<div className="progress progress-lg">
													<div className="progress-bar progress-bar-striped" role="progressbar" style={{width: "10%"}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
												</div>
												<div className="progress progress-lg">
													<div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
												</div>
												<div className="progress progress-lg">
													<div className="progress-bar progress-bar-striped bg-info" role="progressbar" style={{width: "50%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
												</div>
												<div className="progress progress-lg">
													<div className="progress-bar progress-bar-striped bg-warning" role="progressbar" style={{width: "75%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
												</div>
												<div className="progress progress-lg">
													<div className="progress-bar progress-bar-striped bg-danger" role="progressbar" style={{width: "100%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
												</div>
											</div>
										</div>
									</div>
								</div>
								
								<div className="progress-example card bg-white">
									<div className="card-header">
										<h5 className="card-title">Default Progress Bars</h5>
									</div>
									<div className="card-body pb-0">
										<div className="row">
											<div className="col-md-6">
												<div className="progress">
													<div className="progress-bar" role="progressbar" style={{width: "10%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
												</div>
												<div className="progress">
													<div className="progress-bar bg-success" role="progressbar" style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
												</div>
												<div className="progress">
													<div className="progress-bar bg-info" role="progressbar" style={{width: "50%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
												</div>
												<div className="progress">
													<div className="progress-bar bg-warning" role="progressbar" style={{width: "75%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
												</div>
												<div className="progress">
													<div className="progress-bar bg-danger" role="progressbar" style={{width: "100%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
												</div>
											</div>
											<div className="col-md-6">
												<div className="progress">
													<div className="progress-bar progress-bar-striped" role="progressbar" style={{width: "10%"}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
												</div>
												<div className="progress">
													<div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
												</div>
												<div className="progress">
													<div className="progress-bar progress-bar-striped bg-info" role="progressbar" style={{width: "50%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
												</div>
												<div className="progress">
													<div className="progress-bar progress-bar-striped bg-warning" role="progressbar" style={{width: "75%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
												</div>
												<div className="progress">
													<div className="progress-bar progress-bar-striped bg-danger" role="progressbar" style={{width: "100%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
												</div>
											</div>
										</div>
									</div>
								</div>
								
								<div className="progress-example card bg-white">
									<div className="card-header">
										<h5 className="card-title">Medium Progress Bars</h5>
									</div>
									<div className="card-body pb-0">
										<div className="row">
											<div className="col-md-6">
												<div>
													<div className="progress progress-md">
														<div className="progress-bar" role="progressbar" style={{width: "10%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
													</div>
													<div className="progress progress-md">
														<div className="progress-bar bg-success" role="progressbar" style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
													</div>
													<div className="progress progress-md">
														<div className="progress-bar bg-info" role="progressbar" style={{width: "50%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
													</div>
													<div className="progress progress-md">
														<div className="progress-bar bg-warning" role="progressbar" style={{width: "75%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
													</div>
													<div className="progress progress-md">
														<div className="progress-bar bg-danger" role="progressbar" style={{width: "100%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
													</div>
												</div>
											</div>
											<div className="col-md-6">
												<div className="progress progress-md">
													<div className="progress-bar progress-bar-striped" role="progressbar" style={{width: "10%"}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
												</div>
												<div className="progress progress-md">
													<div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
												</div>
												<div className="progress progress-md">
													<div className="progress-bar progress-bar-striped bg-info" role="progressbar" style={{width: "50%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
												</div>
												<div className="progress progress-md">
													<div className="progress-bar progress-bar-striped bg-warning" role="progressbar" style={{width: "75%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
												</div>
												<div className="progress progress-md">
													<div className="progress-bar progress-bar-striped bg-danger" role="progressbar" style={{width: "100%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
												</div>
											</div>
										</div>
									</div>
								</div>
								
								<div className="progress-example card bg-white">
									<div className="card-header">
										<h5 className="card-title">Small Progress Bars</h5>
									</div>
									<div className="card-body pb-0">
										<div className="row">
											<div className="col-md-6">
												<div>
													<div className="progress progress-sm">
														<div className="progress-bar" role="progressbar" style={{width: "10%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
													</div>
													<div className="progress progress-sm">
														<div className="progress-bar bg-success" role="progressbar" style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
													</div>
													<div className="progress progress-sm">
														<div className="progress-bar bg-info" role="progressbar" style={{width: "50%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
													</div>
													<div className="progress progress-sm">
														<div className="progress-bar bg-warning" role="progressbar" style={{width: "75%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
													</div>
													<div className="progress progress-sm">
														<div className="progress-bar bg-danger" role="progressbar" style={{width: "100%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
													</div>
												</div>
											</div>
											<div className="col-md-6">
												<div className="progress progress-sm">
													<div className="progress-bar progress-bar-striped" role="progressbar" style={{width: "10%"}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
												</div>
												<div className="progress progress-sm">
													<div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
												</div>
												<div className="progress progress-sm">
													<div className="progress-bar progress-bar-striped bg-info" role="progressbar" style={{width: "50%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
												</div>
												<div className="progress progress-sm">
													<div className="progress-bar progress-bar-striped bg-warning" role="progressbar" style={{width: "75%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
												</div>
												<div className="progress progress-sm">
													<div className="progress-bar progress-bar-striped bg-danger" role="progressbar" style={{width: "100%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
												</div>
											</div>
										</div>
									</div>
								</div>
								
								<div className="progress-example card bg-white">
									<div className="card-header">
										<h5 className="card-title">Extra Small Progress Bars</h5>
									</div>
									<div className="card-body pb-0">
										<div className="row">
											<div className="col-md-6">
												<div>
													<div className="progress progress-xs">
														<div className="progress-bar w-75" role="progressbar" style={{width: "10%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
													</div>
													<div className="progress progress-xs">
														<div className="progress-bar bg-success" role="progressbar" style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
													</div>
													<div className="progress progress-xs">
														<div className="progress-bar bg-info" role="progressbar" style={{width: "50%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
													</div>
													<div className="progress progress-xs">
														<div className="progress-bar bg-warning" role="progressbar" style={{width: "75%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
													</div>
													<div className="progress progress-xs">
														<div className="progress-bar bg-danger" role="progressbar" style={{width: "100%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
													</div>
												</div>
											</div>
											<div className="col-md-6">
												<div className="progress progress-xs">
													<div className="progress-bar progress-bar-striped" role="progressbar" style={{width: "10%"}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
												</div>
												<div className="progress progress-xs">
													<div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
												</div>
												<div className="progress progress-xs">
													<div className="progress-bar progress-bar-striped bg-info" role="progressbar" style={{width: "50%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
												</div>
												<div className="progress progress-xs">
													<div className="progress-bar progress-bar-striped bg-warning" role="progressbar" style={{width: "75%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
												</div>
												<div className="progress progress-xs">
													<div className="progress-bar progress-bar-striped bg-danger" role="progressbar" style={{width: "100%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</section>
							{/* /Progress  */}
							
							{/* Tabs  */}
							<section className="comp-section">
								<div className="section-header">
									<h3 className="section-title">Tabs</h3>
									<div className="line"></div>
								</div>
								<div className="row">
									<div className="col-md-6">
										<div className="card bg-white">
											<div className="card-header">
												<h5 className="card-title">Basic tabs</h5>
											</div>
											<div className="card-body">
												<ul className="nav nav-tabs">
													<li className="nav-item"><Link className="nav-link active" to="#basictab1" data-bs-toggle="tab">Home</Link></li>
													<li className="nav-item"><Link className="nav-link" to="#basictab2" data-bs-toggle="tab">Profile</Link></li>
													<li className="nav-item"><Link className="nav-link" to="#basictab3" data-bs-toggle="tab">Messages</Link></li>
												</ul>
												<div className="tab-content">
													<div className="tab-pane show active" id="basictab1">
														Tab content 1
													</div>
													<div className="tab-pane" id="basictab2">
														Tab content 2
													</div>
													<div className="tab-pane" id="basictab3">
														Tab content 3
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="col-md-6">
										<div className="card bg-white">
											<div className="card-header">
												<h5 className="card-title">Basic justified tabs</h5>
											</div>
											<div className="card-body">
												<ul className="nav nav-tabs nav-justified">
													<li className="nav-item"><Link className="nav-link active" to="#basic-justified-tab1" data-bs-toggle="tab">Home</Link></li>
													<li className="nav-item"><Link className="nav-link" to="#basic-justified-tab2" data-bs-toggle="tab">Profile</Link></li>
													<li className="nav-item dropdown">
														<Link to="javascript:void(0);" className="dropdown-toggle nav-link" data-bs-toggle="dropdown">Dropdown</Link>
														<div className="dropdown-menu dropdown-menu-right">
															<Link className="dropdown-item" to="#basic-justified-tab3" data-bs-toggle="tab">Dropdown 1</Link>
															<Link className="dropdown-item" to="#basic-justified-tab4" data-bs-toggle="tab">Dropdown 2</Link>
														</div>
													</li>
												</ul>
												<div className="tab-content">
													<div className="tab-pane show active" id="basic-justified-tab1">
														Tab content 1
													</div>
													<div className="tab-pane" id="basic-justified-tab2">
														Tab content 2
													</div>
													<div className="tab-pane" id="basic-justified-tab3">
														Tab content 3
													</div>
													<div className="tab-pane" id="basic-justified-tab4">
														Tab content 4
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								
								<div className="row">
									<div className="col-md-6">
										<div className="card bg-white">
											<div className="card-header">
												<h5 className="card-title">Solid tabs</h5>
											</div>
											<div className="card-body">
												<ul className="nav nav-tabs nav-tabs-solid">
													<li className="nav-item"><Link className="nav-link active" to="#solid-tab1" data-bs-toggle="tab">Home</Link></li>
													<li className="nav-item"><Link className="nav-link" to="#solid-tab2" data-bs-toggle="tab">Profile</Link></li>
													<li className="nav-item"><Link className="nav-link" to="#solid-tab3" data-bs-toggle="tab">Messages</Link></li>
												</ul>
												<div className="tab-content">
													<div className="tab-pane show active" id="solid-tab1">
														Tab content 1
													</div>
													<div className="tab-pane" id="solid-tab2">
														Tab content 2
													</div>
													<div className="tab-pane" id="solid-tab3">
														Tab content 3
													</div>
												</div>
											</div>
										</div>
									</div>
	
									<div className="col-md-6">
										<div className="card bg-white">
											<div className="card-header">
												<h5 className="card-title">Solid justified</h5>
											</div>
											<div className="card-body">
												<ul className="nav nav-tabs nav-tabs-solid nav-justified">
													<li className="nav-item"><Link className="nav-link active" to="#solid-justified-tab1" data-bs-toggle="tab">Home</Link></li>
													<li className="nav-item"><Link className="nav-link" to="#solid-justified-tab2" data-bs-toggle="tab">Profile</Link></li>
													<li className="nav-item"><Link className="nav-link" to="#solid-justified-tab3" data-bs-toggle="tab">Messages</Link></li>
												</ul>
												<div className="tab-content">
													<div className="tab-pane show active" id="solid-justified-tab1">
														Tab content 1
													</div>
													<div className="tab-pane" id="solid-justified-tab2">
														Tab content 2
													</div>
													<div className="tab-pane" id="solid-justified-tab3">
														Tab content 3
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="row">
									<div className="col-md-6">
										<div className="card bg-white">
											<div className="card-header">
												<h5 className="card-title">Solid Rounded</h5>
											</div>
											<div className="card-body">
												<ul className="nav nav-tabs nav-tabs-solid nav-tabs-rounded">
													<li className="nav-item"><Link className="nav-link active" to="#solid-rounded-tab1" data-bs-toggle="tab">Home</Link></li>
													<li className="nav-item"><Link className="nav-link" to="#solid-rounded-tab2" data-bs-toggle="tab">Profile</Link></li>
													<li className="nav-item"><Link className="nav-link" to="#solid-rounded-tab3" data-bs-toggle="tab">Messages</Link></li>
												</ul>
												<div className="tab-content">
													<div className="tab-pane show active" id="solid-rounded-tab1">
														Tab content 1
													</div>
													<div className="tab-pane" id="solid-rounded-tab2">
														Tab content 2
													</div>
													<div className="tab-pane" id="solid-rounded-tab3">
														Tab content 3
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="col-md-6">
										<div className="card bg-white">
											<div className="card-header">
												<h5 className="card-title">Rounded justified</h5>
											</div>
											<div className="card-body">
												<ul className="nav nav-tabs nav-tabs-solid nav-tabs-rounded nav-justified">
													<li className="nav-item"><Link className="nav-link active" to="#solid-rounded-justified-tab1" data-bs-toggle="tab">Home</Link></li>
													<li className="nav-item"><Link className="nav-link" to="#solid-rounded-justified-tab2" data-bs-toggle="tab">Profile</Link></li>
													<li className="nav-item"><Link className="nav-link" to="#solid-rounded-justified-tab3" data-bs-toggle="tab">Messages</Link></li>
												</ul>
												<div className="tab-content">
													<div className="tab-pane show active" id="solid-rounded-justified-tab1">
														Tab content 1
													</div>
													<div className="tab-pane" id="solid-rounded-justified-tab2">
														Tab content 2
													</div>
													<div className="tab-pane" id="solid-rounded-justified-tab3">
														Tab content 3
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</section>
							{/* /Tabs  */}
	
							{/* Typography  */}
							<section className="comp-section">
								<div className="section-header">
									<h3 className="section-title">Typography</h3>
									<div className="line"></div>
								</div>
	
								<div className="row">
									<div className="col-md-12">
										<div className="card bg-white">
											<div className="card-header">
												<h5 className="card-title">Headings</h5>
											</div>
											<div className="card-body">
												<h1>h1. Bootstrap heading</h1>
												<h2>h2. Bootstrap heading</h2>
												<h3>h3. Bootstrap heading</h3>
												<h4>h4. Bootstrap heading</h4>
												<h5>h5. Bootstrap heading</h5>
												<h6>h6. Bootstrap heading</h6>
											</div>
										</div>
										<div className="card bg-white">
											<div className="card-header">
												<h5 className="card-title">Blockquotes</h5>
											</div>
											<div className="card-body">
												<blockquote>
													<p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
												</blockquote>
												<blockquote className="blockquote mb-0">
													<p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
												</blockquote>
											</div>
										</div>
									</div>
								</div>
								<div className="row">
									<div className="col-md-4 d-flex">
										<div className="card flex-fill bg-white">
											<div className="card-header">
												<h5 className="card-title">Text element</h5>
											</div>
											<div className="card-body">
												<p>You can use the mark tag to <mark>highlight</mark> text.</p>
												<p><del>This line of text is meant to be treated as deleted text.</del></p>
												<p><s>This line of text is meant to be treated as no longer accurate.</s></p>
												<p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>
												<p><u>This line of text will render as underlined</u></p>
												<p><small>This line of text is meant to be treated as fine print.</small></p>
												<p><strong>This line rendered as bold text.</strong></p>
												<p><em>This line rendered as italicized text.</em></p>
												<p className="text-monospace mb-0">This is in monospace</p>
											</div>
										</div>
									</div>
									<div className="col-md-4 d-flex">
										<div className="card flex-fill bg-white">
											<div className="card-header">
												<h5 className="card-title">Coloured Link</h5>
											</div>
											<div className="card-body">
												<p className="text-primary">.text-primary</p>
												<p className="text-secondary">.text-secondary</p>
												<p className="text-success">.text-success</p>
												<p className="text-danger">.text-danger</p>
												<p className="text-warning">.text-warning</p>
												<p className="text-info">.text-info</p>
												<p className="text-light bg-dark">.text-light</p>
												<p className="text-dark">.text-dark</p>
												<p className="text-muted">.text-muted</p>
												<p className="text-white bg-dark mb-0">.text-white</p>
											</div>
										</div>
									</div>
									<div className="col-md-4 d-flex">
										<div className="card flex-fill bg-white">
											<div className="card-header">
												<h5 className="card-title">Coloured text</h5>
											</div>
											<div className="card-body">
												<p><Link to="javascript:void(0);" className="text-primary">Primary link</Link></p>
												<p><Link to="javascript:void(0);" className="text-secondary">Secondary link</Link></p>
												<p><Link to="javascript:void(0);" className="text-success">Success link</Link></p>
												<p><Link to="javascript:void(0);" className="text-danger">Danger link</Link></p>
												<p><Link to="javascript:void(0);" className="text-warning">Warning link</Link></p>
												<p><Link to="javascript:void(0);" className="text-info">Info link</Link></p>
												<p><Link to="javascript:void(0);" className="text-light bg-dark">Light link</Link></p>
												<p><Link to="javascript:void(0);" className="text-dark">Dark link</Link></p>
												<p><Link to="javascript:void(0);" className="text-muted">Muted link</Link></p>
												<p><Link to="javascript:void(0);" className="text-white bg-dark mb-0">White link</Link></p>
											</div>
										</div>
									</div>
								</div>
								<div className="row">
									<div className="col-md-4 d-flex">
										<div className="card flex-fill bg-white">
											<div className="card-header">
												<h5 className="card-title">Bullet Lists</h5>
											</div>
											<div className="card-body">
												<ul className="mb-0 bullets">
													<li>Lorem ipsum dolor sit amet</li>
													<li>Consectetur adipiscing elit</li>
													<li>Integer molestie lorem at massa</li>
													<li>Facilisis in pretium nisl aliquet</li>
													<li>Nulla volutpat aliquam velit
														<ul>
															<li>Phasellus iaculis neque</li>
															<li>Purus sodales ultricies</li>
															<li>Vestibulum laoreet porttitor sem</li>
															<li>Ac tristique libero volutpat at</li>
														</ul>
													</li>
													<li>Faucibus porta lacus fringilla vel</li>
													<li>Aenean sit amet erat nunc</li>
													<li>Eget porttitor lorem</li>
												</ul>
											</div>
										</div>
									</div>
									<div className="col-md-4 d-flex">
										<div className="card flex-fill bg-white">
											<div className="card-header">
												<h5 className="card-title">Bullet Lists</h5>
											</div>
											<div className="card-body">
												<ol className="mb-0">
													<li>Lorem ipsum dolor sit amet</li>
													<li>Consectetur adipiscing elit</li>
													<li>Integer molestie lorem at massa</li>
													<li>Facilisis in pretium nisl aliquet</li>
													<li>Nulla volutpat aliquam velit
														<ul>
															<li>Phasellus iaculis neque</li>
															<li>Purus sodales ultricies</li>
															<li>Vestibulum laoreet porttitor sem</li>
															<li>Ac tristique libero volutpat at</li>
														</ul>
													</li>
													<li>Faucibus porta lacus fringilla vel</li>
													<li>Aenean sit amet erat nunc</li>
													<li>Eget porttitor lorem</li>
												</ol>
											</div>
										</div>
									</div>
									<div className="col-md-4 d-flex">
										<div className="card flex-fill bg-white">
											<div className="card-header">
												<h5 className="card-title">Unstyled Lists</h5>
											</div>
											<div className="card-body">
												<ul className="list-unstyled mb-0">
													<li>Lorem ipsum dolor sit amet</li>
													<li>Consectetur adipiscing elit</li>
													<li>Integer molestie lorem at massa</li>
													<li>Facilisis in pretium nisl aliquet</li>
													<li>Nulla volutpat aliquam velit
														<ul>
															<li>Phasellus iaculis neque</li>
															<li>Purus sodales ultricies</li>
															<li>Vestibulum laoreet porttitor sem</li>
															<li>Ac tristique libero volutpat at</li>
														</ul>
													</li>
													<li>Faucibus porta lacus fringilla vel</li>
													<li>Aenean sit amet erat nunc</li>
													<li>Eget porttitor lorem</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</section>
							{/* /Typography  */}
						</div>
					</div>
				</div>
				
			</div>
			{/* /Main Wrapper  */}
    </>
  );
};

export default Components;
