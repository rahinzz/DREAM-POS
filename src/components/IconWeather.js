import React from 'react';
import { Link } from 'react-router-dom';

const IconWeather = () => {
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

            <div className="page-wrapper cardhead">
                <div className="content container-fluid">
				
					{/* Page Header */}
					<div className="page-header">
						<div className="row">
							<div className="col-sm-12">
								<h3 className="page-title">Weather Icon</h3>
								<ul className="breadcrumb">
									<li className="breadcrumb-item"><Link to="/home">Dashboard</Link></li>
									<li className="breadcrumb-item active">Weather Icon</li>
								</ul>
							</div>
						</div>
					</div>	
					{/* /Page Header */}
					
					<div className="row">
					
						{/* Chart */}
						<div className="col-md-12">	
							<div className="card">
								<div className="card-header">
									<div className="card-title">Weather Icon</div>
								</div>
								<div className="card-body">
									<div className="icons-items">
										<ul className="icons-list">
											<li><i className="wi wi-day-cloudy-high" data-bs-toggle="tooltip" title="wi wi-day-cloudy-high"></i></li>
											<li><i className="wi wi-moonrise" data-bs-toggle="tooltip" title="wi wi-moonrise"></i></li>
											<li><i className="wi wi-na" data-bs-toggle="tooltip" title="wi wi-na"></i></li>
											<li><i className="wi wi-volcano" data-bs-toggle="tooltip" title="wi wi-volcano"></i></li>
											<li><i className="wi wi-day-light-wind" data-bs-toggle="tooltip" title="wi wi-day-light-wind"></i></li>
											<li><i className="wi wi-moonset" data-bs-toggle="tooltip" title="wi wi-moonset"></i></li>
											<li><i className="wi wi-flood" data-bs-toggle="tooltip" title="wi wi-flood"></i></li>
											<li><i className="wi wi-train" data-bs-toggle="tooltip" title="wi wi-train"></i></li>
											<li><i className="wi wi-day-sleet" data-bs-toggle="tooltip" title="wi wi-day-sleet"></i></li>
											<li><i className="wi wi-night-sleet" data-bs-toggle="tooltip" title="wi wi-night-sleet"></i></li>
											<li><i className="wi wi-sandstorm" data-bs-toggle="tooltip" title="wi wi-sandstorm"></i></li>
											<li><i className="wi wi-small-craft-advisory" data-bs-toggle="tooltip" title="wi wi-small-craft-advisory"></i></li>
											<li><i className="wi wi-day-haze" data-bs-toggle="tooltip" title="wi wi-day-haze"></i></li>
											<li><i className="wi wi-night-alt-sleet" data-bs-toggle="tooltip" title="wi wi-night-alt-sleet"></i></li>
											<li><i className="wi wi-tsunami" data-bs-toggle="tooltip" title="wi wi-tsunami"></i></li>
											<li><i className="wi wi-gale-warning" data-bs-toggle="tooltip" title="wi wi-gale-warning"></i></li>
											<li><i className="wi wi-night-cloudy-high" data-bs-toggle="tooltip" title="wi wi-night-cloudy-high"></i></li>
											<li><i className="wi wi-raindrop" data-bs-toggle="tooltip" title="wi wi-raindrop"></i></li>
											<li><i className="wi wi-earthquake" data-bs-toggle="tooltip" title="wi wi-earthquake"></i></li>
											<li><i className="wi wi-storm-warning" data-bs-toggle="tooltip" title="wi wi-storm-warning"></i></li>
											<li><i className="wi wi-night-alt-partly-cloudy" data-bs-toggle="tooltip" title="wi wi-night-alt-partly-cloudy"></i></li>
											<li><i className="wi wi-barometer" data-bs-toggle="tooltip" title="wi wi-barometer"></i></li>
											<li><i className="wi wi-fire" data-bs-toggle="tooltip" title="wi wi-fire"></i></li>
											<li><i className="wi wi-hurricane-warning" data-bs-toggle="tooltip" title="wi wi-hurricane-warning"></i></li>
											<li><i className="wi wi-sleet" data-bs-toggle="tooltip" title="wi wi-sleet"></i></li>
											<li><i className="wi wi-humidity" data-bs-toggle="tooltip" title="wi wi-humidity"></i></li>
											<li><i className="wi wi-day-sunny" data-bs-toggle="tooltip" title="wi wi-day-sunny"></i></li>
											<li><i className="wi wi-day-cloudy" data-bs-toggle="tooltip" title="wi wi-day-cloudy"></i></li>
											<li><i className="wi wi-day-cloudy-gusts" data-bs-toggle="tooltip" title="wi wi-day-cloudy-gusts"></i></li>
											<li><i className="wi wi-day-cloudy-windy" data-bs-toggle="tooltip" title="wi wi-day-cloudy-windy"></i></li>
											<li><i className="wi wi-day-fog" data-bs-toggle="tooltip" title="wi wi-day-fog"></i></li>
											<li><i className="wi wi-day-hail" data-bs-toggle="tooltip" title="wi wi-day-hail"></i></li>
											<li><i className="wi wi-day-haze" data-bs-toggle="tooltip" title="wi wi-day-haze"></i></li>
											<li><i className="wi wi-day-lightning" data-bs-toggle="tooltip" title="wi wi-day-lightning"></i></li>
											<li><i className="wi wi-day-rain" data-bs-toggle="tooltip" title="wi wi-day-rain"></i></li>
											<li><i className="wi wi-day-rain-mix" data-bs-toggle="tooltip" title="wi wi-day-rain-mix"></i></li>
											<li><i className="wi wi-day-rain-wind" data-bs-toggle="tooltip" title="wi wi-day-rain-wind"></i></li>
											<li><i className="wi wi-day-showers" data-bs-toggle="tooltip" title="wi wi-day-showers"></i></li>
											<li><i className="wi wi-day-sleet" data-bs-toggle="tooltip" title="wi wi-day-sleet"></i></li>
											<li><i className="wi wi-day-sleet-storm" data-bs-toggle="tooltip" title="wi wi-day-sleet-storm"></i></li>
											<li><i className="wi wi-day-snow" data-bs-toggle="tooltip" title="wi wi-day-snow"></i></li>
											<li><i className="wi wi-day-snow-thunderstorm" data-bs-toggle="tooltip" title="wi wi-day-snow-thunderstorm"></i></li>
											<li><i className="wi wi-day-snow-wind" data-bs-toggle="tooltip" title="wi wi-day-snow-wind"></i></li>
											<li><i className="wi wi-day-sprinkle" data-bs-toggle="tooltip" title="wi wi-day-sprinkle"></i></li>
											<li><i className="wi wi-day-storm-showers" data-bs-toggle="tooltip" title="wi wi-day-storm-showers"></i></li>
											<li><i className="wi wi-day-sunny-overcast" data-bs-toggle="tooltip" title="wi wi-day-sunny-overcast"></i></li>
											<li><i className="wi wi-day-thunderstorm" data-bs-toggle="tooltip" title="wi wi-day-thunderstorm"></i></li>
											<li><i className="wi wi-day-windy" data-bs-toggle="tooltip" title="wi wi-day-windy"></i></li>
											<li><i className="wi wi-solar-eclipse" data-bs-toggle="tooltip" title="wi wi-solar-eclipse"></i></li>
											<li><i className="wi wi-hot" data-bs-toggle="tooltip" title="wi wi-hot"></i></li>
											<li><i className="wi wi-day-cloudy-high" data-bs-toggle="tooltip" title="wi wi-day-cloudy-high"></i></li>
											<li><i className="wi wi-day-light-wind" data-bs-toggle="tooltip" title="wi wi-day-light-wind"></i></li>
											<li><i className="wi wi-night-clear" data-bs-toggle="tooltip" title="wi wi-night-clear"></i></li>
											<li><i className="wi wi-night-alt-cloudy" data-bs-toggle="tooltip" title="wi wi-night-alt-cloudy"></i></li>
											<li><i className="wi wi-night-alt-cloudy-gusts" data-bs-toggle="tooltip" title="wi wi-night-alt-cloudy-gusts"></i></li>
											<li><i className="wi wi-night-alt-cloudy-windy" data-bs-toggle="tooltip" title="wi wi-night-alt-cloudy-windy"></i></li>
											<li><i className="wi wi-night-alt-hail" data-bs-toggle="tooltip" title="wi wi-night-alt-hail"></i></li>
											<li><i className="wi wi-night-alt-lightning" data-bs-toggle="tooltip" title="wi wi-night-alt-lightning"></i></li>
											<li><i className="wi wi-night-alt-rain" data-bs-toggle="tooltip" title="wi wi-night-alt-rain"></i></li>
											<li><i className="wi wi-night-alt-rain-mix" data-bs-toggle="tooltip" title="wi wi-night-alt-rain-mix"></i></li>
											<li><i className="wi wi-night-alt-rain-wind" data-bs-toggle="tooltip" title="wi wi-night-alt-rain-wind"></i></li>
											<li><i className="wi wi-night-alt-showers" data-bs-toggle="tooltip" title="wi wi-night-alt-showers"></i></li>
											<li><i className="wi wi-night-alt-sleet" data-bs-toggle="tooltip" title="wi wi-night-alt-sleet"></i></li>
											<li><i className="wi wi-night-alt-sleet-storm" data-bs-toggle="tooltip" title="wi wi-night-alt-sleet-storm"></i></li>
											<li><i className="wi wi-night-alt-snow" data-bs-toggle="tooltip" title="wi wi-night-alt-snow"></i></li>
											<li><i className="wi wi-night-alt-snow-thunderstorm" data-bs-toggle="tooltip" title="wi wi-night-alt-snow-thunderstorm"></i></li>
											<li><i className="wi wi-night-alt-snow-wind" data-bs-toggle="tooltip" title="wi wi-night-alt-snow-wind"></i></li>
											<li><i className="wi wi-night-alt-sprinkle" data-bs-toggle="tooltip" title="wi wi-night-alt-sprinkle"></i></li>
											<li><i className="wi wi-night-alt-storm-showers" data-bs-toggle="tooltip" title="wi wi-night-alt-storm-showers"></i></li>
											<li><i className="wi wi-night-alt-thunderstorm" data-bs-toggle="tooltip" title="wi wi-night-alt-thunderstorm"></i></li>
											<li><i className="wi wi-night-cloudy" data-bs-toggle="tooltip" title="wi wi-night-cloudy"></i></li>
											<li><i className="wi wi-night-cloudy-gusts" data-bs-toggle="tooltip" title="wi wi-night-cloudy-gusts"></i></li>
											<li><i className="wi wi-night-cloudy-windy" data-bs-toggle="tooltip" title="wi wi-night-cloudy-windy"></i></li>
											<li><i className="wi wi-night-fog" data-bs-toggle="tooltip" title="wi wi-night-fog"></i></li>
											<li><i className="wi wi-night-hail" data-bs-toggle="tooltip" title="wi wi-night-hail"></i></li>
											<li><i className="wi wi-night-lightning" data-bs-toggle="tooltip" title="wi wi-night-lightning"></i></li>
											<li><i className="wi wi-night-partly-cloudy" data-bs-toggle="tooltip" title="wi wi-night-partly-cloudy"></i></li>
											<li><i className="wi wi-night-rain" data-bs-toggle="tooltip" title="wi wi-night-rain"></i></li>
											<li><i className="wi wi-night-rain-mix" data-bs-toggle="tooltip" title="wi wi-night-rain-mix"></i></li>
											<li><i className="wi wi-night-rain-wind" data-bs-toggle="tooltip" title="wi wi-night-rain-wind"></i></li>
											<li><i className="wi wi-night-showers" data-bs-toggle="tooltip" title="wi wi-night-showers"></i></li>
											<li><i className="wi wi-night-sleet" data-bs-toggle="tooltip" title="wi wi-night-sleet"></i></li>
											<li><i className="wi wi-night-sleet-storm" data-bs-toggle="tooltip" title="wi wi-night-sleet-storm"></i></li>
											<li><i className="wi wi-night-snow" data-bs-toggle="tooltip" title="wi wi-night-snow"></i></li>
											<li><i className="wi wi-night-snow-thunderstorm" data-bs-toggle="tooltip" title="wi wi-night-snow-thunderstorm"></i></li>
											<li><i className="wi wi-night-snow-wind" data-bs-toggle="tooltip" title="wi wi-night-snow-wind"></i></li>
											<li><i className="wi wi-night-sprinkle" data-bs-toggle="tooltip" title="wi wi-night-sprinkle"></i></li>
											<li><i className="wi wi-night-storm-showers" data-bs-toggle="tooltip" title="wi wi-night-storm-showers"></i></li>
											<li><i className="wi wi-night-thunderstorm" data-bs-toggle="tooltip" title="wi wi-night-thunderstorm"></i></li>
											<li><i className="wi wi-lunar-eclipse" data-bs-toggle="tooltip" title="wi wi-lunar-eclipse"></i></li>
											<li><i className="wi wi-stars" data-bs-toggle="tooltip" title="wi wi-stars"></i></li>
											<li><i className="wi wi-storm-showers" data-bs-toggle="tooltip" title="wi wi-storm-showers"></i></li>
											<li><i className="wi wi-night-alt-cloudy-high" data-bs-toggle="tooltip" title="wi wi-night-alt-cloudy-high"></i></li>
											<li><i className="wi wi-night-cloudy-high" data-bs-toggle="tooltip" title="wi wi-night-cloudy-high"></i></li>
											<li><i className="wi wi-night-alt-partly-cloudy" data-bs-toggle="tooltip" title="wi wi-night-alt-partly-cloudy"></i></li>
											<li><i className="wi wi-cloud" data-bs-toggle="tooltip" title="wi wi-cloud"></i></li>
											<li><i className="wi wi-cloudy" data-bs-toggle="tooltip" title="wi wi-cloudy"></i></li>
											<li><i className="wi wi-cloudy-gusts" data-bs-toggle="tooltip" title="wi wi-cloudy-gusts"></i></li>
											<li><i className="wi wi-cloudy-windy" data-bs-toggle="tooltip" title="wi wi-cloudy-windy"></i></li>
											<li><i className="wi wi-fog" data-bs-toggle="tooltip" title="wi wi-fog"></i></li>
											<li><i className="wi wi-hail" data-bs-toggle="tooltip" title="wi wi-hail"></i></li>
											<li><i className="wi wi-rain" data-bs-toggle="tooltip" title="wi wi-rain"></i></li>
											<li><i className="wi wi-rain-mix" data-bs-toggle="tooltip" title="wi wi-rain-mix"></i></li>
											<li><i className="wi wi-rain-wind" data-bs-toggle="tooltip" title="wi wi-rain-wind"></i></li>
											<li><i className="wi wi-showers" data-bs-toggle="tooltip" title="wi wi-showers"></i></li>
											<li><i className="wi wi-sleet" data-bs-toggle="tooltip" title="wi wi-sleet"></i></li>
											<li><i className="wi wi-snow" data-bs-toggle="tooltip" title="wi wi-snow"></i></li>
											<li><i className="wi wi-sprinkle" data-bs-toggle="tooltip" title="wi wi-sprinkle"></i></li>
											<li><i className="wi wi-storm-showers" data-bs-toggle="tooltip" title="wi wi-storm-showers"></i></li>
											<li><i className="wi wi-thunderstorm" data-bs-toggle="tooltip" title="wi wi-thunderstorm"></i></li>
											<li><i className="wi wi-snow-wind" data-bs-toggle="tooltip" title="wi wi-snow-wind"></i></li>
											<li><i className="wi wi-snow" data-bs-toggle="tooltip" title="wi wi-snow"></i></li>
											<li><i className="wi wi-smog" data-bs-toggle="tooltip" title="wi wi-smog"></i></li>
											<li><i className="wi wi-smoke" data-bs-toggle="tooltip" title="wi wi-smoke"></i></li>
											<li><i className="wi wi-lightning" data-bs-toggle="tooltip" title="wi wi-lightning"></i></li>
											<li><i className="wi wi-raindrops" data-bs-toggle="tooltip" title="wi wi-raindrops"></i></li>
											<li><i className="wi wi-raindrop" data-bs-toggle="tooltip" title="wi wi-raindrop"></i></li>
											<li><i className="wi wi-snowflake-cold" data-bs-toggle="tooltip" title="wi wi-snowflake-cold"></i></li>
											<li><i className="wi wi-windy" data-bs-toggle="tooltip" title="wi wi-windy"></i></li>
											<li><i className="wi wi-strong-wind" data-bs-toggle="tooltip" title="wi wi-strong-wind"></i></li>
											<li><i className="wi wi-sandstorm" data-bs-toggle="tooltip" title="wi wi-sandstorm"></i></li>
											<li><i className="wi wi-earthquake" data-bs-toggle="tooltip" title="wi wi-earthquake"></i></li>
											<li><i className="wi wi-fire" data-bs-toggle="tooltip" title="wi wi-fire"></i></li>
											<li><i className="wi wi-flood" data-bs-toggle="tooltip" title="wi wi-flood"></i></li>
											<li><i className="wi wi-meteor" data-bs-toggle="tooltip" title="wi wi-meteor"></i></li>
											<li><i className="wi wi-tsunami" data-bs-toggle="tooltip" title="wi wi-tsunami"></i></li>
											<li><i className="wi wi-volcano" data-bs-toggle="tooltip" title="wi wi-volcano"></i></li>
											<li><i className="wi wi-hurricane" data-bs-toggle="tooltip" title="wi wi-hurricane"></i></li>
											<li><i className="wi wi-tornado" data-bs-toggle="tooltip" title="wi wi-tornado"></i></li>
											<li><i className="wi wi-small-craft-advisory" data-bs-toggle="tooltip" title="wi wi-small-craft-advisory"></i></li>
											<li><i className="wi wi-gale-warning" data-bs-toggle="tooltip" title="wi wi-gale-warning"></i></li>
											<li><i className="wi wi-storm-warning" data-bs-toggle="tooltip" title="wi wi-storm-warning"></i></li>
											<li><i className="wi wi-hurricane-warning" data-bs-toggle="tooltip" title="wi wi-hurricane-warning"></i></li>
											<li><i className="wi wi-wind-direction" data-bs-toggle="tooltip" title="wi wi-wind-direction"></i></li>
											<li><i className="wi wi-alien" data-bs-toggle="tooltip" title="wi wi-alien"></i></li>
											<li><i className="wi wi-celsius" data-bs-toggle="tooltip" title="wi wi-celsius"></i></li>
											<li><i className="wi wi-fahrenheit" data-bs-toggle="tooltip" title="wi wi-fahrenheit"></i></li>
											<li><i className="wi wi-degrees" data-bs-toggle="tooltip" title="wi wi-degrees"></i></li>
											<li><i className="wi wi-thermometer" data-bs-toggle="tooltip" title="wi wi-thermometer"></i></li>
											<li><i className="wi wi-thermometer-exterior" data-bs-toggle="tooltip" title="wi wi-thermometer-exterior"></i></li>
											<li><i className="wi wi-thermometer-internal" data-bs-toggle="tooltip" title="wi wi-thermometer-internal"></i></li>
											<li><i className="wi wi-cloud-down" data-bs-toggle="tooltip" title="wi wi-cloud-down"></i></li>
											<li><i className="wi wi-cloud-up" data-bs-toggle="tooltip" title="wi wi-cloud-up"></i></li>
											<li><i className="wi wi-cloud-refresh" data-bs-toggle="tooltip" title="wi wi-cloud-refresh"></i></li>
											<li><i className="wi wi-horizon" data-bs-toggle="tooltip" title="wi wi-horizon"></i></li>
											<li><i className="wi wi-horizon-alt" data-bs-toggle="tooltip" title="wi wi-horizon-alt"></i></li>
											<li><i className="wi wi-sunrise" data-bs-toggle="tooltip" title="wi wi-sunrise"></i></li>
											<li><i className="wi wi-sunset" data-bs-toggle="tooltip" title="wi wi-sunset"></i></li>
											<li><i className="wi wi-moonrise" data-bs-toggle="tooltip" title="wi wi-moonrise"></i></li>
											<li><i className="wi wi-moonset" data-bs-toggle="tooltip" title="wi wi-moonset"></i></li>
											<li><i className="wi wi-refresh" data-bs-toggle="tooltip" title="typcn typcn-rss-outline"></i></li>
											<li><i className="wi wi-refresh-alt" data-bs-toggle="tooltip" title="wi wi-refresh-alt"></i></li>
											<li><i className="wi wi-umbrella" data-bs-toggle="tooltip" title="wi wi-umbrella"></i></li>
											<li><i className="wi wi-barometer" data-bs-toggle="tooltip" title="wi wi-barometer"></i></li>
											<li><i className="wi wi-humidity" data-bs-toggle="tooltip" title="wi wi-humidity"></i></li>
											<li><i className="wi wi-na" data-bs-toggle="tooltip" title="wi wi-na"></i></li>
											<li><i className="wi wi-train" data-bs-toggle="tooltip" title="wi wi-train"></i></li>
										</ul>
									</div>
								</div>
							</div>
						</div>
						{/* /Chart */}
						
					</div>
				
				</div>				
            </div>
        </div>
        {/* /Main Wrapper */}
    </>
  )
}

export default IconWeather