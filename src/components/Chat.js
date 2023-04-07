import React from 'react';
import { Link } from 'react-router-dom';

const Chat = () => {
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
                    <div className="col-lg-12">
					
						<div className="row chat-window">
						
							{/* Chat User List */}
							<div className="col-lg-5 col-xl-4 chat-cont-left">
								<div className="card mb-sm-3 mb-md-0 contacts_card flex-fill">
									<div className="card-header chat-search">
										<div className="input-group">
											<div className="input-group-prepend">
												<span className="search_btn"><i className="fas fa-search"></i></span>
											</div>
											<input type="text" placeholder="Search" className="form-control search-chat rounded-pill" />
										</div>
									</div>
									<div className="card-body contacts_body chat-users-list chat-scroll">
										<Link to="javascript:void(0);" className="media d-flex active">
											<div className="media-img-wrap flex-shrink-0">
												<div className="avatar avatar-away">
													<img src="assets/img/customer/customer1.jpg" alt="User Image" className="avatar-img rounded-circle" />
												</div>
											</div>
											<div className="media-body flex-grow-1">
												<div>
													<div className="user-name">Jeffrey Akridge</div>
													<div className="user-last-chat">Hey, How are you?</div>
												</div>
												<div>
													<div className="last-chat-time">2 min</div>
													<div className="badge badge-success badge-pill">15</div>
												</div>
											</div>
										</Link>
										<Link to="javascript:void(0);" className="media d-flex read-chat">
											<div className="media-img-wrap flex-shrink-0">
												<div className="avatar avatar-online">
													<img src="assets/img/customer/customer2.jpg" alt="User Image" className="avatar-img rounded-circle" />
												</div>
											</div>
											<div className="media-body flex-grow-1">
												<div>
													<div className="user-name">Nancy Olson</div>
													<div className="user-last-chat">I'll call you later </div>
												</div>
												<div>
													<div className="last-chat-time">8:01 PM</div>
												</div>
											</div>
										</Link>
										<Link to="javascript:void(0);" className="media d-flex">
											<div className="media-img-wrap flex-shrink-0">
												<div className="avatar avatar-away">
													<img src="assets/img/customer/customer3.jpg" alt="User Image" className="avatar-img rounded-circle" />
												</div>
											</div>
											<div className="media-body flex-grow-1">
												<div>
													<div className="user-name">Ramona Kingsley</div>
													<div className="user-last-chat">Give me a full explanation about our project</div>
												</div>
												<div>
													<div className="last-chat-time">7:30 PM</div>
													<div className="badge badge-success badge-pill">3</div>
												</div>
											</div>
										</Link>
										<Link to="javascript:void(0);" className="media read-chat d-flex">
											<div className="media-img-wrap flex-shrink-0">
												<div className="avatar avatar-online">
													<img src="assets/img/customer/customer4.jpg" alt="User Image" className="avatar-img rounded-circle" />
												</div>
											</div>
											<div className="media-body flex-grow-1">
												<div>
													<div className="user-name">Ricardo Lung</div>
													<div className="user-last-chat">That's very good UI design</div>
												</div>
												<div>
													<div className="last-chat-time">6:59 PM</div>
												</div>
											</div>
										</Link>
										<Link to="javascript:void(0);" className="media read-chat d-flex">
											<div className="media-img-wrap flex-shrink-0">
												<div className="avatar avatar-offline">
													<img src="assets/img/customer/customer5.jpg" alt="User Image" className="avatar-img rounded-circle" />
												</div>
											</div>
											<div className="media-body flex-grow-1">
												<div>
													<div className="user-name">Annette Silva</div>
													<div className="user-last-chat">Yesterday i completed the task</div>
												</div>
												<div>
													<div className="last-chat-time">11:21 AM</div>
												</div>
											</div>
										</Link>
										<Link to="javascript:void(0);" className="media read-chat d-flex">
											<div className="media-img-wrap flex-shrink-0">
												<div className="avatar avatar-online">
													<img src="assets/img/customer/customer6.jpg" alt="User Image" className="avatar-img rounded-circle" />
												</div>
											</div>
											<div className="media-body flex-grow-1">
												<div>
													<div className="user-name">Stephen Wilson</div>
													<div className="user-last-chat">What is the major functionality?</div>
												</div>
												<div>
													<div className="last-chat-time">10:05 AM</div>
												</div>
											</div>
										</Link>
										<Link to="javascript:void(0);" className="media read-chat d-flex">
											<div className="media-img-wrap flex-shrink-0">
												<div className="avatar avatar-away">
													<img src="assets/img/customer/customer7.jpg" alt="User Image" className="avatar-img rounded-circle" />
												</div>
											</div>
											<div className="media-body flex-grow-1">
												<div>
													<div className="user-name">Ryan Rodriguez</div>
													<div className="user-last-chat">This has allowed me to showcase not only my technical skills</div>
												</div>
												<div>
													<div className="last-chat-time">Yesterday</div>
												</div>
											</div>
										</Link>
										<Link to="javascript:void(0);" className="media read-chat d-flex">
											<div className="media-img-wrap flex-shrink-0">
												<div className="avatar avatar-offline">
													<img src="assets/img/customer/customer8.jpg" alt="User Image" className="avatar-img rounded-circle" />
												</div>
											</div>
											<div className="media-body flex-grow-1">
												<div>
													<div className="user-name">Lucile Devera</div>
													<div className="user-last-chat">Let's talk briefly in the evening. </div>
												</div>
												<div>
													<div className="last-chat-time">Sunday</div>
												</div>
											</div>
										</Link>
										<Link to="javascript:void(0);" className="media read-chat d-flex">
											<div className="media-img-wrap flex-shrink-0">
												<div className="avatar avatar-online">
													<img src="assets/img/customer/customer1.jpg" alt="User Image" className="avatar-img rounded-circle" />
												</div>
											</div>
											<div className="media-body flex-grow-1">
												<div>
													<div className="user-name">Roland Storey</div>
													<div className="user-last-chat">Do you have any collections? If so, what of?</div>
												</div>
												<div>
													<div className="last-chat-time">Saturday</div>
												</div>
											</div>
										</Link>
										<Link to="javascript:void(0);" className="media read-chat d-flex">
											<div className="media-img-wrap flex-shrink-0">
												<div className="avatar avatar-away">
													<img src="assets/img/customer/customer2.jpg" alt="User Image" className="avatar-img rounded-circle" />
												</div>
											</div>
											<div className="media-body flex-grow-1">
												<div>
													<div className="user-name">Lindsey Parmley</div>
													<div className="user-last-chat">Connect the two modules with in 1 day.</div>
												</div>
												<div>
													<div className="last-chat-time">Friday</div>
												</div>
											</div>
										</Link>
									</div>
								</div>
							</div>
							{/* Chat User List */}
							
							{/* Chat Content */}
							<div className="col-lg-7 col-xl-8 chat-cont-right">
							
								{/* Chat History */}
								<div className="card mb-0">

									<div className="card-header msg_head">
										<div className="d-flex bd-highlight">
											<Link id="back_user_list" to="javascript:void(0)" className="back-user-list">
												<i className="fas fa-chevron-left"></i>
											</Link>
											<div className="img_cont">
												<img className="rounded-circle user_img" src="assets/img/customer/profile2.jpg" alt="" />
											</div>
											<div className="user_info">
												<span><strong id="receiver_name">Jeffrey Akridge</strong></span>
												<p className="mb-0">Messages</p>
											</div>
										</div>
									</div>

									<div className="card-body msg_card_body chat-scroll">
										<ul className="list-unstyled">
											<li className="media sent d-flex">
												<div className="avatar flex-shrink-0">
													<img src="assets/img/customer/customer5.jpg" alt="User Image" className="avatar-img rounded-circle" />
												</div>
												<div className="media-body flex-grow-1">
													<div className="msg-box">
														<div>
															<p>Hello. What can I do for you?</p>
															<ul className="chat-msg-info">
																<li>
																	<div className="chat-time">
																		<span>8:30 AM</span>
																	</div>
																</li>
															</ul>
														</div>
													</div>
												</div>
											</li>
											<li className="media received d-flex">
												<div className="avatar flex-shrink-0">
													<img src="assets/img/customer/profile2.jpg" alt="User Image" className="avatar-img rounded-circle" />
												</div>
												<div className="media-body flex-grow-1">
													<div className="msg-box">
														<div>
															<p>I'm just looking around.</p>
															<p>Will you tell me something about yourself?</p>
															<ul className="chat-msg-info">
																<li>
																	<div className="chat-time">
																		<span>8:35 AM</span>
																	</div>
																</li>
															</ul>
														</div>
													</div>
													<div className="msg-box">
														<div>
															<p>Are you there? That time!</p>
															<ul className="chat-msg-info">
																<li>
																	<div className="chat-time">
																		<span>8:40 AM</span>
																	</div>
																</li>
															</ul>
														</div>
													</div>
													<div className="msg-box">
														<div>
															<div className="chat-msg-attachments">
																<div className="chat-attachment">
																	<img src="assets/img/product/product12.jpg" alt="Attachment" />
																	<Link to="" className="chat-attach-download">
																		<i className="fas fa-download"></i>
																	</Link>
																</div>
																<div className="chat-attachment">
																	<img src="assets/img/product/product13.jpg" alt="Attachment" />
																	<Link to="" className="chat-attach-download">
																		<i className="fas fa-download"></i>
																	</Link>
																</div>
															</div>
															<ul className="chat-msg-info">
																<li>
																	<div className="chat-time">
																		<span>8:41 AM</span>
																	</div>
																</li>
															</ul>
														</div>
													</div>
												</div>
											</li>
											<li className="media sent d-flex">
												<div className="avatar flex-shrink-0">
													<img src="assets/img/customer/customer5.jpg" alt="User Image" className="avatar-img rounded-circle" />
												</div>
												<div className="media-body flex-grow-1">
													<div className="msg-box">
														<div>
															<p>Where?</p>
															<ul className="chat-msg-info">
																<li>
																	<div className="chat-time">
																		<span>8:42 AM</span>
																	</div>
																</li>
															</ul>
														</div>
													</div>
													<div className="msg-box">
														<div>
															<p>OK, my name is Limingqiang. I like singing, playing basketballand so on.</p>
															<ul className="chat-msg-info">
																<li>
																	<div className="chat-time">
																		<span>8:42 AM</span>
																	</div>
																</li>
															</ul>
														</div>
													</div>
													<div className="msg-box">
														<div>
															<div className="chat-msg-attachments">
																<div className="chat-attachment">
																	<img src="assets/img/product/product15.jpg" alt="Attachment" />
																	<Link to="" className="chat-attach-download">
																		<i className="fas fa-download"></i>
																	</Link>
																</div>
															</div>
															<ul className="chat-msg-info">
																<li>
																	<div className="chat-time">
																		<span>8:50 AM</span>
																	</div>
																</li>
															</ul>
														</div>
													</div>
												</div>
											</li>
											<li className="media received d-flex">
												<div className="avatar flex-shrink-0">
													<img src="assets/img/customer/profile2.jpg" alt="User Image" className="avatar-img rounded-circle" />
												</div>
												<div className="media-body flex-grow-1">
													<div className="msg-box">
														<div>
															<p>You wait for notice.</p>
															<p>Consectetuorem ipsum dolor sit?</p>
															<p>Ok?</p>
															<ul className="chat-msg-info">
																<li>
																	<div className="chat-time">
																		<span>8:55 PM</span>
																	</div>
																</li>
															</ul>
														</div>
													</div>
												</div>
											</li>
											<li className="chat-date">Today</li>
											<li className="media received d-flex">
												<div className="avatar flex-shrink-0">
													<img src="assets/img/customer/profile2.jpg" alt="User Image" className="avatar-img rounded-circle" />
												</div>
												<div className="media-body flex-grow-1">
													<div className="msg-box">
														<div>
															<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
															<ul className="chat-msg-info">
																<li>
																	<div className="chat-time">
																		<span>10:17 AM</span>
																	</div>
																</li>
																<li><Link to="javascript:void(0);">Edit</Link></li>
															</ul>
														</div>
													</div>
												</div>
											</li>
											<li className="media sent d-flex">
												<div className="avatar flex-shrink-0">
													<img src="assets/img/customer/profile2.jpg" alt="User Image" className="avatar-img rounded-circle" />
												</div>
												<div className="media-body flex-grow-1">
													<div className="msg-box">
														<div>
															<p>Lorem ipsum dollar sit</p>
															<div className="chat-msg-actions dropdown">
																<Link to="javascript:void(0);" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
																	<i className="fe fe-elipsis-v"></i>
																</Link>
																<div className="dropdown-menu dropdown-menu-right">
																	<Link className="dropdown-item" to="javascript:void(0);">Delete</Link>
																</div>
															</div>
															<ul className="chat-msg-info">
																<li>
																	<div className="chat-time">
																		<span>10:19 AM</span>
																	</div>
																</li>
																<li><Link to="javascript:void(0);">Edit</Link></li>
															</ul>
														</div>
													</div>
												</div>
											</li>
											<li className="media received d-flex">
												<div className="avatar flex-shrink-0">
													<img src="assets/img/customer/profile2.jpg" alt="User Image" className="avatar-img rounded-circle" />
												</div>
												<div className="media-body flex-grow-1">
													<div className="msg-box">
														<div>
															<div className="msg-typing">
																<span></span>
																<span></span>
																<span></span>
															</div>
														</div>
													</div>
												</div>
											</li>
										</ul>
									
									</div>
									
									<div className="card-footer">
										<div className="input-group">
											<input className="form-control type_msg mh-auto empty_check" placeholder="Type your message..." />
											<button className="btn btn-primary btn_send"><i className="fa fa-paper-plane" aria-hidden="true"></i></button>
										</div>
									</div>
									
								</div>

							</div>
							{/* Chat Content */}
							
						</div>

					</div>
                </div>
            </div>
        </div>
        {/* /Main Wrapper */}
        <div className="searchpart">
            <div className="searchcontent">
                <div className="searchhead">
                    <h3>Search </h3>
                    <Link id="closesearch"><i className="fa fa-times-circle" aria-hidden="true"></i></Link>
                </div>
                <div className="searchcontents">
                    <div className="searchparts">
                        <input type="text" placeholder="search here" />
                        <Link className="btn btn-searchs" >Search</Link>
                    </div>
                    <div className="recentsearch">
                        <h2>Recent Search</h2>
                        <ul>
                            <li>
                                <h6><i className="fa fa-search me-2"></i> Settings</h6>
                            </li>
                            <li>
                                <h6><i className="fa fa-search me-2"></i> Report</h6>
                            </li>
                            <li>
                                <h6><i className="fa fa-search me-2"></i> Invoice</h6>
                            </li>
                            <li>
                                <h6><i className="fa fa-search me-2"></i> Sales</h6>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Chat