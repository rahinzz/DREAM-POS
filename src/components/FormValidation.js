import React from 'react';
import { Link } from 'react-router-dom';

const FormValidation = () => {
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
								<h3 className="page-title">Form Validation</h3>
								<ul className="breadcrumb">
									<li className="breadcrumb-item"><Link to="/home">Dashboard</Link></li>
									<li className="breadcrumb-item active">Form Validation</li>
								</ul>
							</div>
						</div>
					</div>
					{/* /Page Header */}
					
					{/* Row */}
					<div className="row">
						<div className="col-sm-12">
						
							{/* Custom Boostrap Validation */}
							<div className="card">
								<div className="card-header">
									<h5 className="card-title">Custom Bootstrap Form Validation</h5>
									<p className="card-text">For custom Bootstrap form validation messages, you’ll need to add the <code>novalidate</code> boolean attribute to your form. For server side validation <Link to="https://getbootstrap.com/docs/4.1/components/forms/#server-side" target="_blank">read full documentation</Link>.</p>
								</div>
								<div className="card-body">
									<div className="row">
										<div className="col-sm">
											<form className="needs-validation" novalidate>
												<div className="form-row row">
													<div className="col-md-4 mb-3">
														<label htmlFor="validationCustom01">First name</label>
														<input type="text" className="form-control" id="validationCustom01" placeholder="First name" value="Mark" required />
														<div className="valid-feedback">
															Looks good!
														</div>
													</div>
													<div className="col-md-4 mb-3">
														<label htmlFor="validationCustom02">Last name</label>
														<input type="text" className="form-control" id="validationCustom02" placeholder="Last name" value="Otto" required />
														<div className="valid-feedback">
															Looks good!
														</div>
													</div>
													<div className="col-md-4 mb-3">
														<label htmlFor="validationCustomUsername">Username</label>
														<div className="input-group">
															<span className="input-group-text" id="inputGroupPrepend">@</span>
															<input type="text" className="form-control" id="validationCustomUsername" placeholder="Username" aria-describedby="inputGroupPrepend" required />
															<div className="invalid-feedback">
																Please choose a username.
															</div>
														</div>
													</div>
												</div>
												<div className="form-row row">
													<div className="col-md-6 mb-3">
														<label htmlFor="validationCustom03">City</label>
														<input type="text" className="form-control" id="validationCustom03" placeholder="City" required />
														<div className="invalid-feedback">
															Please provide a valid city.
														</div>
													</div>
													<div className="col-md-3 mb-3">
														<label htmlFor="validationCustom04">State</label>
														<input type="text" className="form-control" id="validationCustom04" placeholder="State" required />
														<div className="invalid-feedback">
															Please provide a valid state.
														</div>
													</div>
													<div className="col-md-3 mb-3">
														<label htmlFor="validationCustom05">Zip</label>
														<input type="text" className="form-control" id="validationCustom05" placeholder="Zip" required />
														<div className="invalid-feedback">
															Please provide a valid zip.
														</div>
													</div>
												</div>
												<div className="form-group">
													<div className="form-check">
														<input className="form-check-input" type="checkbox" value="" id="invalidCheck" required />
														<label className="form-check-label" htmlFor="invalidCheck">
															Agree to terms and conditions
														</label>
														<div className="invalid-feedback">
															You must agree before submitting.
														</div>
													</div>
												</div>
												<button className="btn btn-primary" type="submit">Submit form</button>
											</form>
										</div>
									</div>
								</div>
							</div>
							{/* /Custom Boostrap Validation */}
							
							{/* Default Browser Validation */}
							<div className="card">
								<div className="card-header">
									<h5 className="card-title">Browser defaults</h5>
									<p className="card-text">Not interested in custom validation feedback messages or writing JavaScript to change form behaviors? All good, you can use the browser defaults. Try submitting the form below.</p>
								</div>
								<div className="card-body">
									<div className="row">
										<div className="col-sm">
											<form>
												<div className="form-row row">
													<div className="col-md-4 mb-3">
														<label htmlFor="validationDefault01">First name</label>
														<input type="text" className="form-control" id="validationDefault01" placeholder="First name" value="Mark" required />
													</div>
													<div className="col-md-4 mb-3">
														<label htmlFor="validationDefault02">Last name</label>
														<input type="text" className="form-control" id="validationDefault02" placeholder="Last name" value="Otto" required />
													</div>
													<div className="col-md-4 mb-3">
														<label htmlFor="validationDefaultUsername">Username</label>
														<div className="input-group">
															<span className="input-group-text" id="inputGroupPrepend2">@</span>
															<input type="text" className="form-control" id="validationDefaultUsername" placeholder="Username" aria-describedby="inputGroupPrepend2" required />
														</div>
													</div>
												</div>
												<div className="form-row row">
													<div className="col-md-6 mb-3">
														<label htmlFor="validationDefault03">City</label>
														<input type="text" className="form-control" id="validationDefault03" placeholder="City" required />
													</div>
													<div className="col-md-3 mb-3">
														<label htmlFor="validationDefault04">State</label>
														<input type="text" className="form-control" id="validationDefault04" placeholder="State" required />
													</div>
													<div className="col-md-3 mb-3">
														<label htmlFor="validationDefault05">Zip</label>
														<input type="text" className="form-control" id="validationDefault05" placeholder="Zip" required />
													</div>
												</div>
												<div className="form-group">
													<div className="form-check">
														<input className="form-check-input" type="checkbox" value="" id="invalidCheck2" required />
														<label className="form-check-label" htmlFor="invalidCheck2">
															Agree to terms and conditions
														</label>
													</div>
												</div>
												<button className="btn btn-primary" type="submit">Submit form</button>
											</form>
										</div>
									</div>
								</div>
							</div>
							{/* /Default Browser Validation */}

							{/* Server Side Validation */}
							<div className="card">
								<div className="card-header">
									<h5 className="card-title">Server side</h5>
									<p className="card-text">We recommend using client side validation, but in case you require server side, you can indicate invalid and valid form fields with <code>.is-invalid</code> and <code>.is-valid</code>. Note that <code>.invalid-feedback</code> is also supported with these classes.</p>
								</div>
								<div className="card-body">
									<form>
										<div className="form-row row">
											<div className="col-md-4 mb-3">
												<label htmlFor="validationServer01">First name</label>
												<input type="text" className="form-control is-valid" id="validationServer01" placeholder="First name" value="Mark" required />
												<div className="valid-feedback">
													Looks good!
												</div>
											</div>
											<div className="col-md-4 mb-3">
												<label htmlFor="validationServer02">Last name</label>
												<input type="text" className="form-control is-valid" id="validationServer02" placeholder="Last name" value="Otto" required />
												<div className="valid-feedback">
													Looks good!
												</div>
											</div>
											<div className="col-md-4 mb-3">
												<label htmlFor="validationServerUsername">Username</label>
												<div className="input-group input-grp">
													<span className="input-group-text" id="inputGroupPrepend3">@</span>
													<input type="text" className="form-control is-invalid" id="validationServerUsername" placeholder="Username" aria-describedby="inputGroupPrepend3" required />
													<div className="invalid-feedback">
														Please choose a username.
													</div>
												</div>
											</div>
										</div>
										<div className="form-row row">
											<div className="col-md-6 mb-3">
												<label htmlFor="validationServer03">City</label>
												<input type="text" className="form-control is-invalid" id="validationServer03" placeholder="City" required />
												<div className="invalid-feedback">
													Please provide a valid city.
												</div>
											</div>
											<div className="col-md-3 mb-3">
												<label htmlFor="validationServer04">State</label>
												<input type="text" className="form-control is-invalid" id="validationServer04" placeholder="State" required />
												<div className="invalid-feedback">
													Please provide a valid state.
												</div>
											</div>
											<div className="col-md-3 mb-3">
												<label htmlFor="validationServer05">Zip</label>
												<input type="text" className="form-control is-invalid" id="validationServer05" placeholder="Zip" required />
												<div className="invalid-feedback">
													Please provide a valid zip.
												</div>
											</div>
										</div>
										<div className="form-group">
											<div className="form-check">
												<input className="form-check-input is-invalid" type="checkbox" value="" id="invalidCheck3" required />
												<label className="form-check-label" htmlFor="invalidCheck3">
													Agree to terms and conditions
												</label>
												<div className="invalid-feedback">
													You must agree before submitting.
												</div>
											</div>
										</div>
										<button className="btn btn-primary" type="submit">Submit form</button>
									</form>
								</div>
							</div>
							{/* /Server Side Validation */}
							
							{/* Supported Elements */}
							<div className="card">
								<div className="card-header">
									<h5 className="card-title">Supported elements</h5>
									<p className="card-text">Form validation styles are also available for bootstrap custom form controls.</p>
								</div>
								<div className="card-body">
									<div className="row">
										<div className="col-sm">
											<form className="was-validated">
												<div className="mb-3">
												  	<label htmlFor="validationTextarea" className="form-label">Textarea</label>
												  	<textarea className="form-control is-invalid" id="validationTextarea" placeholder="Required example textarea" required></textarea>
												  	<div className="invalid-feedback">
													Please enter a message in the textarea.
												  </div>
												</div>
											  
												<div className="form-check mb-3">
												  	<input type="checkbox" className="form-check-input" id="validationFormCheck1" required />
												  	<label className="form-check-label" htmlFor="validationFormCheck1">Check this checkbox</label>
												  	<div className="invalid-feedback">Example invalid feedback text</div>
												</div>
											  
												<div className="form-check">
												  	<input type="radio" className="form-check-input" id="validationFormCheck2" name="radio-stacked" required />
												  	<label className="form-check-label" htmlFor="validationFormCheck2">Toggle this radio</label>
												</div>
												<div className="form-check mb-3">
												  	<input type="radio" className="form-check-input" id="validationFormCheck3" name="radio-stacked" required />
												  	<label className="form-check-label" htmlFor="validationFormCheck3">Or toggle this other radio</label>
												  	<div className="invalid-feedback">More example invalid feedback text</div>
												</div>
											  
												<div className="mb-3">
													<select className="form-select" required aria-label="select example">
														<option value="">Open this select menu</option>
														<option value="1">One</option>
														<option value="2">Two</option>
														<option value="3">Three</option>
													</select>
													<div className="invalid-feedback">Example invalid select feedback</div>
												</div>
											  
												<div className="mb-3">
												  	<input type="file" className="form-control" aria-label="file example" required />
												  	<div className="invalid-feedback">Example invalid form file feedback</div>
												</div>
											</form>
										</div>
									</div>
								</div>
							</div>
							{/* /Supported Elements */}
							
							{/* Validation Tooltips */}
							<div className="card">
								<div className="card-header">
									<h5 className="card-title">Tooltips</h5>
									<p className="card-text">You can swap the {<code>.valid|invalid-feedback</code>} classes for {<code>.valid|invalid-tooltip</code>} classes to display validation feedback in a styled tooltip.</p>
								</div>
								<div className="card-body">
									<form className="needs-validation" novalidate>
										<div className="form-row row">
											<div className="col-md-4 mb-3">
												<label htmlFor="validationTooltip01">First name</label>
												<input type="text" className="form-control" id="validationTooltip01" placeholder="First name" value="Mark" required />
												<div className="valid-tooltip">
													Looks good!
												</div>
											</div>
											<div className="col-md-4 mb-3">
												<label htmlFor="validationTooltip02">Last name</label>
												<input type="text" className="form-control" id="validationTooltip02" placeholder="Last name" value="Otto" required />
												<div className="valid-tooltip">
													Looks good!
												</div>
											</div>
											<div className="col-md-4 mb-3">
												<label htmlFor="validationTooltipUsername">Username</label>
												<input type="text" className="form-control" id="validationTooltipUsername" placeholder="Username" required />
												<div className="invalid-tooltip">
													Please choose a unique and valid username.
												</div>
											</div>
										</div>
										<div className="form-row row">
											<div className="col-md-6 mb-3">
												<label htmlFor="validationTooltip03">City</label>
												<input type="text" className="form-control" id="validationTooltip03" placeholder="City" required />
												<div className="invalid-tooltip">
													Please provide a valid city.
												</div>
											</div>
											<div className="col-md-3 mb-3">
												<label htmlFor="validationTooltip04">State</label>
												<input type="text" className="form-control" id="validationTooltip04" placeholder="State" required />
												<div className="invalid-tooltip">
													Please provide a valid state.
												</div>
											</div>
											<div className="col-md-3 mb-3">
												<label htmlFor="validationTooltip05">Zip</label>
												<input type="text" className="form-control" id="validationTooltip05" placeholder="Zip" required />
												<div className="invalid-tooltip">
													Please provide a valid zip.
												</div>
											</div>
										</div>
										<button className="btn btn-primary" type="submit">Submit form</button>
									</form>
								</div>
							</div>
							{/* /Validation Tooltips */}
							
						</div>
					</div>
					{/* /Row */}
				
				</div>			
            </div>
        </div>
        {/* /Main Wrapper */}
    </>
  )
}

export default FormValidation