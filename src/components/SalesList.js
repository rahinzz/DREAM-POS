import React from 'react';
import { Link } from 'react-router-dom';

const SalesList = () => {
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
							<h4>Sales List</h4>
							<h6>Manage your sales</h6>
						</div>
						<div className="page-btn">
							<Link to="/add-sales" className="btn btn-added"><img src="assets/img/icons/plus.svg" alt="img" className="me-1" />Add Sales</Link>
						</div>
					</div>
					

					{/* product list  */}
					<div className="card">
						<div className="card-body">
							<div className="table-top">
								<div className="search-set">
									<div className="search-path">
										<Link className="btn btn-filter" id="filter_search">
											<img src="assets/img/icons/filter.svg" alt="img" />
											<span><img src="assets/img/icons/closes.svg" alt="img" /></span>
										</Link>
									</div>
									<div className="search-input">
										<Link className="btn btn-searchset"><img src="assets/img/icons/search-white.svg" alt="img" /></Link>
									</div>
								</div>
								<div className="wordset">
									<ul>
										<li>
											<Link data-bs-toggle="tooltip" data-bs-placement="top" title="pdf"><img src="assets/img/icons/pdf.svg" alt="img" /></Link>
										</li>
										<li>
											<Link data-bs-toggle="tooltip" data-bs-placement="top" title="excel"><img src="assets/img/icons/excel.svg" alt="img" /></Link>
										</li>
										<li>
											<Link data-bs-toggle="tooltip" data-bs-placement="top" title="print"><img src="assets/img/icons/printer.svg" alt="img" /></Link>
										</li>
									</ul>
								</div>
							</div>
							{/* Filter  */}
							<div className="card" id="filter_inputs">
								<div className="card-body pb-0">
									<div className="row">
										<div className="col-lg-3 col-sm-6 col-12">
											<div className="form-group">
												<input type="text" placeholder="Enter Name" />
											</div>
										</div>
										<div className="col-lg-3 col-sm-6 col-12">
											<div className="form-group">
												<input type="text" placeholder="Enter Reference No" />
											</div>
										</div>
										<div className="col-lg-3 col-sm-6 col-12">
											<div className="form-group">
												<select className="select">
													<option>Completed</option>
													<option>Paid</option>
												</select>
											</div>
										</div>
										<div className="col-lg-3 col-sm-6 col-12">
											<div className="form-group">
												<Link className="btn btn-filters ms-auto"><img src="assets/img/icons/search-whites.svg" alt="img" /></Link>
											</div>
										</div>
									</div>
								</div>
							</div>
							{/* Filter */}
							<div className="table-responsive">
								<table className="table  datanew">
									<thead>
										<tr>
											<th>
												<label className="checkboxs">
													<input type="checkbox" id="select-all" />
													<span className="checkmarks"></span>
												</label>
											</th>
											<th>Date</th>
											<th>Customer Name</th>
											<th>Reference</th>
											<th>Status</th>
											<th>Payment</th>
											<th>Total</th>
											<th>Paid</th>
											<th>Due</th>
											<th>Biller</th>
											<th className="text-center">Action</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>
												<label className="checkboxs">
													<input type="checkbox" />
													<span className="checkmarks"></span>
												</label>
											</td>
											<td>walk-in-customer</td>
											<td>19 Nov 2022</td>
											<td>SL0101</td>
											<td><span className="badges bg-lightgreen">Completed</span></td>
											<td><span className="badges bg-lightgreen">Paid</span></td>
											<td>0.00</td>
											<td>0.00</td>
											<td className="text-red">100.00</td>
											<td>Admin</td>
											<td className="text-center">
												<Link className="action-set" to="javascript:void(0);" data-bs-toggle="dropdown" aria-expanded="true">
													<i className="fa fa-ellipsis-v" aria-hidden="true"></i>
												</Link>
												<ul className="dropdown-menu"  >
													<li>
														<Link to="/sales-details" className="dropdown-item"><img src="assets/img/icons/eye1.svg" className="me-2" alt="img" />Sale Detail</Link>
													</li>
													<li>
														<Link to="edit-sales" className="dropdown-item"><img src="assets/img/icons/edit.svg" className="me-2" alt="img" />Edit Sale</Link>
													</li>
													<li>
														<Link to="javascript:void(0);" className="dropdown-item" data-bs-toggle="modal" data-bs-target="#showpayment"><img src="assets/img/icons/dollar-square.svg" className="me-2" alt="img" />Show Payments</Link>
													</li>
													<li>
														<Link to="javascript:void(0);" className="dropdown-item" data-bs-toggle="modal" data-bs-target="#createpayment"><img src="assets/img/icons/plus-circle.svg" className="me-2" alt="img" />Create Payment</Link>
													</li>
													<li>
														<Link to="javascript:void(0);" className="dropdown-item"><img src="assets/img/icons/download.svg" className="me-2" alt="img" />Download pdf</Link>
													</li>	
													<li>
														<Link to="javascript:void(0);" className="dropdown-item confirm-text"><img src="assets/img/icons/delete1.svg" className="me-2" alt="img" />Delete Sale</Link>
													</li>								
												</ul>
											</td>
										</tr>
										<tr>
											<td>
												<label className="checkboxs">
													<input type="checkbox" />
													<span className="checkmarks"></span>
												</label>
											</td>
											<td>walk-in-customer</td>
											<td>19 Nov 2022</td>
											<td>SL0102</td>
											<td><span className="badges bg-lightgreen">Completed</span></td>
											<td><span className="badges bg-lightgreen">Paid</span></td>
											<td>0.00</td>
											<td>0.00</td>
											<td className="text-red">100.00</td>
											<td>Admin</td>
											<td className="text-center">
												<Link className="action-set" to="javascript:void(0);" data-bs-toggle="dropdown" aria-expanded="true">
													<i className="fa fa-ellipsis-v" aria-hidden="true"></i>
												</Link>
												<ul className="dropdown-menu"  >
													<li>
														<Link to="/sales-details" className="dropdown-item"><img src="assets/img/icons/eye1.svg" className="me-2" alt="img" />Sale Detail</Link>
													</li>
													<li>
														<Link to="/edit-sales" className="dropdown-item"><img src="assets/img/icons/edit.svg" className="me-2" alt="img" />Edit Sale</Link>
													</li>
													<li>
														<Link to="javascript:void(0);" className="dropdown-item" data-bs-toggle="modal" data-bs-target="#showpayment"><img src="assets/img/icons/dollar-square.svg" className="me-2" alt="img" />Show Payments</Link>
													</li>
													<li>
														<Link to="javascript:void(0);" className="dropdown-item" data-bs-toggle="modal" data-bs-target="#createpayment"><img src="assets/img/icons/plus-circle.svg" className="me-2" alt="img" />Create Payment</Link>
													</li>
													<li>
														<Link to="javascript:void(0);" className="dropdown-item"><img src="assets/img/icons/download.svg" className="me-2" alt="img" />Download pdf</Link>
													</li>	
													<li>
														<Link to="javascript:void(0);" className="dropdown-item confirm-text"><img src="assets/img/icons/delete1.svg" className="me-2" alt="img" />Delete Sale</Link>
													</li>								
												</ul>
											</td>
										</tr>
										<tr>
											<td>
												<label className="checkboxs">
													<input type="checkbox" />
													<span className="checkmarks"></span>
												</label>
											</td>
											<td>walk-in-customer</td>
											<td>19 Nov 2022</td>
											<td>SL0103</td>
											<td><span className="badges bg-lightgreen">Completed</span></td>
											<td><span className="badges bg-lightgreen">Paid</span></td>
											<td>0.00</td>
											<td className="text-green">100.00</td>
											<td>0.00</td>
											<td>Admin</td>
											<td className="text-center">
												<Link className="action-set" to="javascript:void(0);"  data-bs-toggle="dropdown" aria-expanded="true">
													<i className="fa fa-ellipsis-v" aria-hidden="true"></i>
												</Link>
												<ul className="dropdown-menu"  >
													<li>
														<Link to="/sales-details" className="dropdown-item"><img src="assets/img/icons/eye1.svg" className="me-2" alt="img" />Sale Detail</Link>
													</li>
													<li>
														<Link to="/edit-sales" className="dropdown-item"><img src="assets/img/icons/edit.svg" className="me-2" alt="img" />Edit Sale</Link>
													</li>
													<li>
														<Link to="javascript:void(0);" className="dropdown-item" data-bs-toggle="modal" data-bs-target="#showpayment"><img src="assets/img/icons/dollar-square.svg" className="me-2" alt="img" />Show Payments</Link>
													</li>
													<li>
														<Link to="javascript:void(0);" className="dropdown-item" data-bs-toggle="modal" data-bs-target="#createpayment"><img src="assets/img/icons/plus-circle.svg" className="me-2" alt="img" />Create Payment</Link>
													</li>
													<li>
														<Link to="javascript:void(0);" className="dropdown-item"><img src="assets/img/icons/download.svg" className="me-2" alt="img" />Download pdf</Link>
													</li>	
													<li>
														<Link to="javascript:void(0);" className="dropdown-item confirm-text"><img src="assets/img/icons/delete1.svg" className="me-2" alt="img" />Delete Sale</Link>
													</li>								
												</ul>
											</td>
										</tr>
										<tr>
											<td>
												<label className="checkboxs">
													<input type="checkbox" />
													<span className="checkmarks"></span>
												</label>
											</td>
											<td>Fred C. Rasmussen</td>
											<td>19 Nov 2022</td>
											<td>SL0104</td>
											<td><span className="badges bg-lightred">Pending</span></td>
											<td><span className="badges bg-lightred">Due</span></td>
											<td>0.00</td>
											<td className="text-green">100.00</td>
											<td>0.00</td>
											<td>Admin</td>
											<td className="text-center">
												<Link className="action-set" to="javascript:void(0);" data-bs-toggle="dropdown" aria-expanded="true">
													<i className="fa fa-ellipsis-v" aria-hidden="true"></i>
												</Link>
												<ul className="dropdown-menu"  >
													<li>
														<Link to="/sales-details" className="dropdown-item"><img src="assets/img/icons/eye1.svg" className="me-2" alt="img" />Sale Detail</Link>
													</li>
													<li>
														<Link to="/edit-sales" className="dropdown-item"><img src="assets/img/icons/edit.svg" className="me-2" alt="img" />Edit Sale</Link>
													</li>
													<li>
														<Link to="javascript:void(0);" className="dropdown-item" data-bs-toggle="modal" data-bs-target="#showpayment"><img src="assets/img/icons/dollar-square.svg" className="me-2" alt="img" />Show Payments</Link>
													</li>
													<li>
														<Link to="javascript:void(0);" className="dropdown-item" data-bs-toggle="modal" data-bs-target="#createpayment"><img src="assets/img/icons/plus-circle.svg" className="me-2" alt="img" />Create Payment</Link>
													</li>
													<li>
														<Link to="javascript:void(0);" className="dropdown-item"><img src="assets/img/icons/download.svg" className="me-2" alt="img" />Download pdf</Link>
													</li>	
													<li>
														<Link to="javascript:void(0);" className="dropdown-item confirm-text"><img src="assets/img/icons/delete1.svg" className="me-2" alt="img" />Delete Sale</Link>
													</li>								
												</ul>
											</td>
										</tr>
										<tr>
											<td>
												<label className="checkboxs">
													<input type="checkbox" />
													<span className="checkmarks"></span>
												</label>
											</td>
											<td>Thomas M. Martin</td>
											<td>19 Nov 2022</td>
											<td>SL0105</td>
											<td><span className="badges bg-lightred">Pending</span></td>
											<td><span className="badges bg-lightred">Due</span></td><td>0.00</td>
											<td>0.00</td>
											<td className="text-green">100.00</td>
											<td>Admin</td>
											<td className="text-center">
												<Link className="action-set" to="javascript:void(0);" data-bs-toggle="dropdown" aria-expanded="true">
													<i className="fa fa-ellipsis-v" aria-hidden="true"></i>
												</Link>
												<ul className="dropdown-menu"  >
													<li>
														<Link to="/sales-details" className="dropdown-item"><img src="assets/img/icons/eye1.svg" className="me-2" alt="img" />Sale Detail</Link>
													</li>
													<li>
														<Link to="/edit-sales" className="dropdown-item"><img src="assets/img/icons/edit.svg" className="me-2" alt="img" />Edit Sale</Link>
													</li>
													<li>
														<Link to="javascript:void(0);" className="dropdown-item" data-bs-toggle="modal" data-bs-target="#showpayment"><img src="assets/img/icons/dollar-square.svg" className="me-2" alt="img" />Show Payments</Link>
													</li>
													<li>
														<Link to="javascript:void(0);" className="dropdown-item" data-bs-toggle="modal" data-bs-target="#createpayment"><img src="assets/img/icons/plus-circle.svg" className="me-2" alt="img" />Create Payment</Link>
													</li>
													<li>
														<Link to="javascript:void(0);" className="dropdown-item"><img src="assets/img/icons/download.svg" className="me-2" alt="img" />Download pdf</Link>
													</li>	
													<li>
														<Link to="javascript:void(0);" className="dropdown-item confirm-text"><img src="assets/img/icons/delete1.svg" className="me-2" alt="img" />Delete Sale</Link>
													</li>								
												</ul>
											</td>
										</tr>
										<tr>
											<td>
												<label className="checkboxs">
													<input type="checkbox" />
													<span className="checkmarks"></span>
												</label>
											</td>
											<td>Thomas M. Martin</td>
											<td>19 Nov 2022</td>
											<td>SL0106</td>
											<td><span className="badges bg-lightgreen">Completed</span></td>
											<td><span className="badges bg-lightgreen">Paid</span></td>
											<td>0.00</td>
											<td>0.00</td>
											<td className="text-red">100.00</td>
											<td>Admin</td>
											<td className="text-center">
												<Link className="action-set" to="javascript:void(0);" data-bs-toggle="dropdown" aria-expanded="true">
													<i className="fa fa-ellipsis-v" aria-hidden="true"></i>
												</Link>
												<ul className="dropdown-menu"  >
													<li>
														<Link to="/sales-details" className="dropdown-item"><img src="assets/img/icons/eye1.svg" className="me-2" alt="img" />Sale Detail</Link>
													</li>
													<li>
														<Link to="/edit-sales" className="dropdown-item"><img src="assets/img/icons/edit.svg" className="me-2" alt="img" />Edit Sale</Link>
													</li>
													<li>
														<Link to="javascript:void(0);" className="dropdown-item" data-bs-toggle="modal" data-bs-target="#showpayment"><img src="assets/img/icons/dollar-square.svg" className="me-2" alt="img" />Show Payments</Link>
													</li>
													<li>
														<Link to="javascript:void(0);" className="dropdown-item" data-bs-toggle="modal" data-bs-target="#createpayment"><img src="assets/img/icons/plus-circle.svg" className="me-2" alt="img" />Create Payment</Link>
													</li>
													<li>
														<Link to="javascript:void(0);" className="dropdown-item"><img src="assets/img/icons/download.svg" className="me-2" alt="img" />Download pdf</Link>
													</li>	
													<li>
														<Link to="javascript:void(0);" className="dropdown-item confirm-text"><img src="assets/img/icons/delete1.svg" className="me-2" alt="img" />Delete Sale</Link>
													</li>								
												</ul>
											</td>
										</tr>
										<tr>
											<td>
												<label className="checkboxs">
													<input type="checkbox" />
													<span className="checkmarks"></span>
												</label>
											</td>
											<td>walk-in-customer</td>
											<td>19 Nov 2022</td>
											<td>SL0107</td>
											<td><span className="badges bg-lightgreen">Completed</span></td>
											<td><span className="badges bg-lightgreen">Paid</span></td>
											<td>0.00</td>
											<td>0.00</td>
											<td className="text-red">100.00</td>
											<td>Admin</td>
											<td className="text-center">
												<Link className="action-set" to="javascript:void(0);" data-bs-toggle="dropdown" aria-expanded="true">
													<i className="fa fa-ellipsis-v" aria-hidden="true"></i>
												</Link>
												<ul className="dropdown-menu"  >
													<li>
														<Link to="/sales-details" className="dropdown-item"><img src="assets/img/icons/eye1.svg" className="me-2" alt="img" />Sale Detail</Link>
													</li>
													<li>
														<Link to="/edit-sales" className="dropdown-item"><img src="assets/img/icons/edit.svg" className="me-2" alt="img" />Edit Sale</Link>
													</li>
													<li>
														<Link to="javascript:void(0);" className="dropdown-item" data-bs-toggle="modal" data-bs-target="#showpayment"><img src="assets/img/icons/dollar-square.svg" className="me-2" alt="img" />Show Payments</Link>
													</li>
													<li>
														<Link to="javascript:void(0);" className="dropdown-item" data-bs-toggle="modal" data-bs-target="#createpayment"><img src="assets/img/icons/plus-circle.svg" className="me-2" alt="img" />Create Payment</Link>
													</li>
													<li>
														<Link to="javascript:void(0);" className="dropdown-item"><img src="assets/img/icons/download.svg" className="me-2" alt="img" />Download pdf</Link>
													</li>	
													<li>
														<Link to="javascript:void(0);" className="dropdown-item confirm-text"><img src="assets/img/icons/delete1.svg" className="me-2" alt="img" />Delete Sale</Link>
													</li>								
												</ul>
											</td>
										</tr>
										<tr>
											<td>
												<label className="checkboxs">
													<input type="checkbox" />
													<span className="checkmarks"></span>
												</label>
											</td>
											<td>walk-in-customer</td>
											<td>19 Nov 2022</td>
											<td>SL0108</td>
											<td><span className="badges bg-lightred">Pending</span></td>
											<td><span className="badges bg-lightred">Due</span></td>
											<td>0.00</td>
											<td className="text-green">100.00</td>
											<td>0.00</td>
											<td>Admin</td>
											<td className="text-center">
												<Link className="action-set" to="javascript:void(0);" data-bs-toggle="dropdown" aria-expanded="true">
													<i className="fa fa-ellipsis-v" aria-hidden="true"></i>
												</Link>
												<ul className="dropdown-menu"  >
													<li>
														<Link to="/sales-details" className="dropdown-item"><img src="assets/img/icons/eye1.svg" className="me-2" alt="img" />Sale Detail</Link>
													</li>
													<li>
														<Link to="/edit-sales" className="dropdown-item"><img src="assets/img/icons/edit.svg" className="me-2" alt="img" />Edit Sale</Link>
													</li>
													<li>
														<Link to="javascript:void(0);" className="dropdown-item" data-bs-toggle="modal" data-bs-target="#showpayment"><img src="assets/img/icons/dollar-square.svg" className="me-2" alt="img" />Show Payments</Link>
													</li>
													<li>
														<Link to="javascript:void(0);" className="dropdown-item" data-bs-toggle="modal" data-bs-target="#createpayment"><img src="assets/img/icons/plus-circle.svg" className="me-2" alt="img" />Create Payment</Link>
													</li>
													<li>
														<Link to="javascript:void(0);" className="dropdown-item"><img src="assets/img/icons/download.svg" className="me-2" alt="img" />Download pdf</Link>
													</li>	
													<li>
														<Link to="javascript:void(0);" className="dropdown-item confirm-text"><img src="assets/img/icons/delete1.svg" className="me-2" alt="img" />Delete Sale</Link>
													</li>								
												</ul>
											</td>
										</tr>
										<tr>
											<td>
												<label className="checkboxs">
													<input type="checkbox" />
													<span className="checkmarks"></span>
												</label>
											</td>
											<td>walk-in-customer</td>
											<td>19 Nov 2022</td>
											<td>SL0109</td>
											<td><span className="badges bg-lightred">Pending</span></td>
											<td><span className="badges bg-lightred">Due</span></td>
											<td>0.00</td>
											<td className="text-green">100.00</td>
											<td>0.00</td>
											<td>Admin</td>
											<td className="text-center">
												<Link className="action-set" to="javascript:void(0);" data-bs-toggle="dropdown" aria-expanded="true">
													<i className="fa fa-ellipsis-v" aria-hidden="true"></i>
												</Link>
												<ul className="dropdown-menu"  >
													<li>
														<Link to="/sales-details" className="dropdown-item"><img src="assets/img/icons/eye1.svg" className="me-2" alt="img" />Sale Detail</Link>
													</li>
													<li>
														<Link to="/edit-sales" className="dropdown-item"><img src="assets/img/icons/edit.svg" className="me-2" alt="img" />Edit Sale</Link>
													</li>
													<li>
														<Link to="javascript:void(0);" className="dropdown-item" data-bs-toggle="modal" data-bs-target="#showpayment"><img src="assets/img/icons/dollar-square.svg" className="me-2" alt="img" />Show Payments</Link>
													</li>
													<li>
														<Link to="javascript:void(0);" className="dropdown-item" data-bs-toggle="modal" data-bs-target="#createpayment"><img src="assets/img/icons/plus-circle.svg" className="me-2" alt="img" />Create Payment</Link>
													</li>
													<li>
														<Link to="javascript:void(0);" className="dropdown-item"><img src="assets/img/icons/download.svg" className="me-2" alt="img" />Download pdf</Link>
													</li>	
													<li>
														<Link to="javascript:void(0);" className="dropdown-item confirm-text"><img src="assets/img/icons/delete1.svg" className="me-2" alt="img" />Delete Sale</Link>
													</li>								
												</ul>
											</td>
										</tr>
										<tr>
											<td>
												<label className="checkboxs">
													<input type="checkbox" />
													<span className="checkmarks"></span>
												</label>
											</td>
											<td>walk-in-customer</td>
											<td>19 Nov 2022</td>
											<td>SL0110</td>
											<td><span className="badges bg-lightred">Pending</span></td>
											<td><span className="badges bg-lightred">Due</span></td>
											<td>0.00</td>
											<td className="text-green">100.00</td>
											<td>0.00</td>
											<td>Admin</td>
											<td className="text-center">
												<Link className="action-set" to="javascript:void(0);" data-bs-toggle="dropdown" aria-expanded="true">
													<i className="fa fa-ellipsis-v" aria-hidden="true"></i>
												</Link>
												<ul className="dropdown-menu"  >
													<li>
														<Link to="/sales-details" className="dropdown-item"><img src="assets/img/icons/eye1.svg" className="me-2" alt="img" />Sale Detail</Link>
													</li>
													<li>
														<Link to="/edit-sales" className="dropdown-item"><img src="assets/img/icons/edit.svg" className="me-2" alt="img" />Edit Sale</Link>
													</li>
													<li>
														<Link to="javascript:void(0);" className="dropdown-item" data-bs-toggle="modal" data-bs-target="#showpayment"><img src="assets/img/icons/dollar-square.svg" className="me-2" alt="img" />Show Payments</Link>
													</li>
													<li>
														<Link to="javascript:void(0);" className="dropdown-item" data-bs-toggle="modal" data-bs-target="#createpayment"><img src="assets/img/icons/plus-circle.svg" className="me-2" alt="img" />Create Payment</Link>
													</li>
													<li>
														<Link to="javascript:void(0);" className="dropdown-item"><img src="assets/img/icons/download.svg" className="me-2" alt="img" />Download pdf</Link>
													</li>	
													<li>
														<Link to="javascript:void(0);" className="dropdown-item confirm-text"><img src="assets/img/icons/delete1.svg" className="me-2" alt="img" />Delete Sale</Link>
													</li>								
												</ul>
											</td>
										</tr>
										<tr>
											<td>
												<label className="checkboxs">
													<input type="checkbox" />
													<span className="checkmarks"></span>
												</label>
											</td>
											<td>walk-in-customer</td>
											<td>19 Nov 2022</td>
											<td>SL0111</td>
											<td><span className="badges bg-lightred">Pending</span></td>
											<td><span className="badges bg-lightred">Due</span></td>
											<td>0.00</td>
											<td>0.00</td>
											<td>0.00</td>
											<td>Admin</td>
											<td className="text-center">
												<Link className="action-set" to="javascript:void(0);" data-bs-toggle="dropdown" aria-expanded="true">
													<i className="fa fa-ellipsis-v" aria-hidden="true"></i>
												</Link>
												<ul className="dropdown-menu"  >
													<li>
														<Link to="/sales-details" className="dropdown-item"><img src="assets/img/icons/eye1.svg" className="me-2" alt="img" />Sale Detail</Link>
													</li>
													<li>
														<Link to="/edit-sales" className="dropdown-item"><img src="assets/img/icons/edit.svg" className="me-2" alt="img" />Edit Sale</Link>
													</li>
													<li>
														<Link to="javascript:void(0);" className="dropdown-item" data-bs-toggle="modal" data-bs-target="#showpayment"><img src="assets/img/icons/dollar-square.svg" className="me-2" alt="img" />Show Payments</Link>
													</li>
													<li>
														<Link to="javascript:void(0);" className="dropdown-item" data-bs-toggle="modal" data-bs-target="#createpayment"><img src="assets/img/icons/plus-circle.svg" className="me-2" alt="img" />Create Payment</Link>
													</li>
													<li>
														<Link to="javascript:void(0);" className="dropdown-item"><img src="assets/img/icons/download.svg" className="me-2" alt="img" />Download pdf</Link>
													</li>	
													<li>
														<Link to="javascript:void(0);" className="dropdown-item confirm-text"><img src="assets/img/icons/delete1.svg" className="me-2" alt="img" />Delete Sale</Link>
													</li>								
												</ul>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
					{/* product list  */}
				</div>
			</div>
        </div>
		{/* Main Wrapper  */}

		{/* show payment Modal */}
		<div className="modal fade" id="showpayment" tabindex="-1" aria-labelledby="showpayment" aria-hidden="true">
			<div className="modal-dialog modal-lg modal-dialog-centered">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">Show Payments</h5>
						<button type="button" className="close" data-bs-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
					</div>
					<div className="modal-body">
						<div className="table-responsive">
							<table className="table">
								<thead>
									<tr>
										<th>Date</th>
										<th>Reference</th>
										<th>Amount	</th>
										<th>Paid By	</th>
										<th>Paid By	</th>
									</tr>
								</thead>
								<tbody>
									<tr className="bor-b1">
										<td>2022-03-07	</td>
										<td>INV/SL0101</td>
										<td>$ 0.00	</td>
										<td>Cash</td>
										<td>
											<Link className="me-2" to="javascript:void(0);">
												<img src="assets/img/icons/printer.svg" alt="img" />
											</Link>
											<Link className="me-2" to="javascript:void(0);" data-bs-target="#editpayment" data-bs-toggle="modal" data-bs-dismiss="modal" >
												<img src="assets/img/icons/edit.svg" alt="img" />
											</Link>
											<Link className="me-2 confirm-text" to="javascript:void(0);">
												<img src="assets/img/icons/delete.svg" alt="img" />
											</Link>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
		{/* show payment Modal */}

		{/* show payment Modal  */}
		<div className="modal fade" id="createpayment" tabindex="-1" aria-labelledby="createpayment" aria-hidden="true">
			<div className="modal-dialog modal-lg modal-dialog-centered">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">Create Payment</h5>
						<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
					</div>
					<div className="modal-body">
						<div className="row">
							<div className="col-lg-6 col-sm-12 col-12">
								<div className="form-group">
									<label>Customer</label>
									<div className="input-groupicon">
										<input type="text" value="2022-03-07" className="datetimepicker" />
										<div className="addonset">
											<img src="assets/img/icons/calendars.svg" alt="img" />
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-6 col-sm-12 col-12">
								<div className="form-group">
									<label>Reference</label>
									<input type="text" value="INV/SL0101" />
								</div>
							</div>
							<div className="col-lg-6 col-sm-12 col-12">
								<div className="form-group">
									<label>Received Amount</label>
									<input type="text" value="0.00" />
								</div>
							</div>
							<div className="col-lg-6 col-sm-12 col-12">
								<div className="form-group">
									<label>Paying Amount</label>
									<input type="text" value="0.00" />
								</div>
							</div>
							<div className="col-lg-6 col-sm-12 col-12">
								<div className="form-group">
									<label>Payment type</label>
									<select className="select">
										<option>Cash</option>
										<option>Online</option>
										<option>Inprogress</option>
									</select>
								</div>
							</div>
							<div className="col-lg-12">
								<div className="form-group mb-0">
									<label>Note</label>
									<textarea className="form-control"></textarea>
								</div>
							</div>
						</div>
					</div>
					<div className="modal-footer">
						<button type="button" className="btn btn-submit">Submit</button>
						<button type="button" className="btn btn-cancel" data-bs-dismiss="modal">Close</button>
					</div>
				</div>
			</div>
		</div>
		{/* show payment Modal */}

		{/* edit payment Modal  */}
		<div className="modal fade" id="editpayment" tabindex="-1" aria-labelledby="editpayment" aria-hidden="true">
			<div className="modal-dialog modal-lg modal-dialog-centered">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">Edit Payment</h5>
						<button type="button" className="close" data-bs-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
					</div>
					<div className="modal-body">
						<div className="row">
							<div className="col-lg-6 col-sm-12 col-12">
								<div className="form-group">
									<label>Customer</label>
									<div className="input-groupicon">
										<input type="text" value="2022-03-07" className="datetimepicker" />
										<div className="addonset">
											<img src="assets/img/icons/datepicker.svg" alt="img" />
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-6 col-sm-12 col-12">
								<div className="form-group">
									<label>Reference</label>
									<input type="text" value="INV/SL0101" />
								</div>
							</div>
							<div className="col-lg-6 col-sm-12 col-12">
								<div className="form-group">
									<label>Received Amount</label>
									<input type="text" value="0.00" />
								</div>
							</div>
							<div className="col-lg-6 col-sm-12 col-12">
								<div className="form-group">
									<label>Paying Amount</label>
									<input type="text" value="0.00" />
								</div>
							</div>
							<div className="col-lg-6 col-sm-12 col-12">
								<div className="form-group">
									<label>Payment type</label>
									<select className="select">
										<option>Cash</option>
										<option>Online</option>
										<option>Inprogress</option>
									</select>
								</div>
							</div>
							<div className="col-lg-12">
								<div className="form-group mb-0">
									<label>Note</label>
									<textarea className="form-control"></textarea>
								</div>
							</div>
						</div>
					</div>
					<div className="modal-footer">
						<button type="button" className="btn btn-submit">Submit</button>
						<button type="button" className="btn btn-cancel" data-bs-dismiss="modal">Close</button>
					</div>
				</div>
			</div>
		</div>
		{/* edit payment Modal  */}
    </>
  )
}

export default SalesList