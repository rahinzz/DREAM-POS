import React from 'react';
import { Link } from 'react-router-dom';

const IconFontawesome = () => {
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
								<h3 className="page-title">Fontawesome Icon</h3>
								<ul className="breadcrumb">
									<li className="breadcrumb-item"><Link to="/home">Dashboard</Link></li>
									<li className="breadcrumb-item active">Fontawesome</li>
								</ul>
							</div>
						</div>
					</div>	
					{/* /Page Header					 */}
					
					<div className="row">
					
						{/* Chart */}
						<div className="col-md-12">	
							<div className="card">
								<div className="card-header">
									<div className="card-title">Fontawesome Icon</div>
								</div>
								<div className="card-body">
									<div className="icons-items">
										<ul className="icons-list">
											<li><i className="fa fa-address-book" data-bs-toggle="tooltip" title="fa fa-address-book"></i></li>
											<li><i className="fa fa-address-card" data-bs-toggle="tooltip" title="fa fa-address-card"></i></li>
											<li><i className="fa fa-align-center" data-bs-toggle="tooltip" title="fa fa-align-center"></i></li>
											<li><i className="fa fa-align-justify" data-bs-toggle="tooltip" title="fa fa-align-justify"></i></li>
											<li><i className="fa fa-align-left" data-bs-toggle="tooltip" title="fa fa-align-left"></i></li>
											<li><i className="fa fa-align-right" data-bs-toggle="tooltip" title="fa fa-align-right"></i></li>
											<li><i className="fa fa-ambulance" data-bs-toggle="tooltip" title="fa fa-ambulance"></i></li>
											<li><i className="fa fa-american-sign-language-interpreting" data-bs-toggle="tooltip" title="fa fa-american-sign-language-interpreting"></i></li>
											<li><i className="fa fa-anchor" data-bs-toggle="tooltip" title="fa fa-anchor"></i></li>
											<li><i className="fa fa-angle-double-down" data-bs-toggle="tooltip" title="fa fa-angle-double-down"></i></li>
											<li><i className="fa fa-angle-double-left" data-bs-toggle="tooltip" title="fa fa-angle-double-left"></i></li>
											<li><i className="fa fa-angle-double-right" data-bs-toggle="tooltip" title="fa fa-angle-double-right"></i></li>
											<li><i className="fa fa-angle-double-up" data-bs-toggle="tooltip" title="fa fa-angle-double-up"></i></li>
											<li><i className="fa fa-angle-down" data-bs-toggle="tooltip" title="fa fa-angle-down"></i></li>
											<li><i className="fa fa-angle-left" data-bs-toggle="tooltip" title="fa fa-angle-left"></i></li>
											<li><i className="fa fa-angle-right" data-bs-toggle="tooltip" title="fa fa-angle-right"></i></li>
											<li><i className="fa fa-angle-up" data-bs-toggle="tooltip" title="fa fa-angle-up"></i></li>
											<li><i className="fab fa-apple" data-bs-toggle="tooltip" title="fab fa-apple"></i></li>
											<li><i className="fa fa-archive" data-bs-toggle="tooltip" title="fa fa-archive"></i></li>
											<li><i className="fas fa-chart-area" data-bs-toggle="tooltip" title="fas fa-chart-area"></i></li>
											<li><i className="fa fa-arrow-circle-down" data-bs-toggle="tooltip" title="fa fa-arrow-circle-down"></i></li>
											<li><i className="fa fa-arrow-circle-left" data-bs-toggle="tooltip" title="fa fa-arrow-circle-left"></i></li>
											<li><i className="fa fa-arrow-circle-right" data-bs-toggle="tooltip" title="fa fa-arrow-circle-right"></i></li>
											<li><i className="fa fa-arrow-circle-up" data-bs-toggle="tooltip" title="fa fa-arrow-circle-up"></i></li>
											<li><i className="fa fa-arrow-down" data-bs-toggle="tooltip" title="fa fa-arrow-down"></i></li>
											<li><i className="fa fa-arrow-left" data-bs-toggle="tooltip" title="fa fa-arrow-left"></i></li>
											<li><i className="fa fa-arrow-right" data-bs-toggle="tooltip" title="fa fa-arrow-right"></i></li>
											<li><i className="fa fa-arrow-up" data-bs-toggle="tooltip" title="fa fa-arrow-up"></i></li>
											<li><i className="fa fa-arrows-alt" data-bs-toggle="tooltip" title="fa fa-arrows-alt"></i></li>
											<li><i className="fa fa-assistive-listening-systems" data-bs-toggle="tooltip" title="fa fa-assistive-listening-systems"></i></li>
											<li><i className="fa fa-asterisk" data-bs-toggle="tooltip" title="fa fa-asterisk"></i></li>
											<li><i className="fa fa-at" data-bs-toggle="tooltip" title="fa fa-at"></i></li>
											<li><i className="fa fa-audio-description" data-bs-toggle="tooltip" title="fa fa-audio-description"></i></li>
											<li><i className="fa fa-backward" data-bs-toggle="tooltip" title="fa fa-backward"></i></li>
											<li><i className="fa fa-balance-scale" data-bs-toggle="tooltip" title="fa fa-balance-scale"></i></li>
											<li><i className="fa fa-ban" data-bs-toggle="tooltip" title="fa fa-ban"></i></li>
											<li><i className="fa fa-barcode" data-bs-toggle="tooltip" title="fa fa-barcode"></i></li>
											<li><i className="fa fa-bars" data-bs-toggle="tooltip" title="fa fa-bars"></i></li>
											<li><i className="fa fa-bath" data-bs-toggle="tooltip" title="fa fa-bath"></i></li>
											<li><i className="fa fa-battery-empty" data-bs-toggle="tooltip" title="fa fa-battery-empty"></i></li>
											<li><i className="fa fa-battery-full" data-bs-toggle="tooltip" title="fa fa-battery-full"></i></li>
											<li><i className="fa fa-battery-half" data-bs-toggle="tooltip" title="fa fa-battery-half"></i></li>
											<li><i className="fa fa-battery-quarter" data-bs-toggle="tooltip" title="fa fa-battery-quarter"></i></li>
											<li><i className="fa fa-battery-three-quarters" data-bs-toggle="tooltip" title="fa fa-battery-three-quarters"></i></li>
											<li><i className="fa fa-bed" data-bs-toggle="tooltip" title="fa fa-bed"></i></li>
											<li><i className="fa fa-beer" data-bs-toggle="tooltip" title="fa fa-beer"></i></li>
											<li><i className="fa fa-bell" data-bs-toggle="tooltip" title="fa fa-bell"></i></li>
											<li><i className="fa fa-bell-slash" data-bs-toggle="tooltip" title="fa fa-bell-slash"></i></li>
											<li><i className="fa fa-bicycle" data-bs-toggle="tooltip" title="fa fa-bicycle"></i></li>
											<li><i className="fa fa-binoculars" data-bs-toggle="tooltip" title="fa fa-binoculars"></i></li>
											<li><i className="fa fa-birthday-cake" data-bs-toggle="tooltip" title="fa fa-birthday-cake"></i></li>
											<li><i className="fa fa-blind" data-bs-toggle="tooltip" title="fa fa-blind"></i></li>
											<li><i className="fa fa-bold" data-bs-toggle="tooltip" title="fa fa-bold"></i></li>
											<li><i className="fa fa-bolt" data-bs-toggle="tooltip" title="fa fa-bolt"></i></li>
											<li><i className="fa fa-bomb" data-bs-toggle="tooltip" title="fa fa-bomb"></i></li>
											<li><i className="fa fa-book" data-bs-toggle="tooltip" title="fa fa-book"></i></li>
											<li><i className="fa fa-bookmark" data-bs-toggle="tooltip" title="fa fa-bookmark"></i></li>
											<li><i className="fa fa-braille" data-bs-toggle="tooltip" title="fa fa-braille"></i></li>
											<li><i className="fa fa-briefcase" data-bs-toggle="tooltip" title="fa fa-briefcase"></i></li>	
											<li><i className="fa fa-bug" data-bs-toggle="tooltip" title="fa fa-bug"></i></li>
											<li><i className="fa fa-building" data-bs-toggle="tooltip" title="fa fa-building"></i></li>
											<li><i className="fa fa-bullhorn" data-bs-toggle="tooltip" title="fa fa-bullhorn"></i></li>
											<li><i className="fa fa-bullseye" data-bs-toggle="tooltip" title="fa fa-bullseye"></i></li>
											<li><i className="fa fa-bus" data-bs-toggle="tooltip" title="fa fa-bus"></i></li>
											<li><i className="fa fa-calculator" data-bs-toggle="tooltip" title="fa fa-calculator"></i></li>
											<li><i className="fa fa-calendar" data-bs-toggle="tooltip" title="fa fa-calendar"></i></li>
											<li><i className="fa fa-camera" data-bs-toggle="tooltip" title="fa fa-camera"></i></li>
											<li><i className="fa fa-camera-retro" data-bs-toggle="tooltip" title="fa fa-camera-retro"></i></li>
											<li><i className="fa fa-car" data-bs-toggle="tooltip" title="fa fa-car"></i></li>
											<li><i className="fa fa-caret-down" data-bs-toggle="tooltip" title="fa fa-caret-down"></i></li>
											<li><i className="fa fa-caret-left" data-bs-toggle="tooltip" title="fa fa-caret-left"></i></li>
											<li><i className="fa fa-caret-right" data-bs-toggle="tooltip" title="fa fa-caret-right"></i></li>
											<li><i className="fa fa-cart-arrow-down" data-bs-toggle="tooltip" title="fa fa-cart-arrow-down"></i></li>
											<li><i className="fa fa-cart-plus" data-bs-toggle="tooltip" title="fa fa-cart-plus"></i></li>
											<li><i className="fa fa-certificate" data-bs-toggle="tooltip" title="fa fa-certificate"></i></li>
											<li><i className="fa fa-check" data-bs-toggle="tooltip" title="fa fa-check"></i></li>
											<li><i className="fa fa-check-circle" data-bs-toggle="tooltip" title="fa fa-check-circle"></i></li>
											<li><i className="fa fa-chevron-circle-left" data-bs-toggle="tooltip" title="fa fa-chevron-circle-left"></i></li>
											<li><i className="fa fa-chevron-circle-right" data-bs-toggle="tooltip" title="fa fa-chevron-circle-right"></i></li>
											<li><i className="fa fa-chevron-circle-up" data-bs-toggle="tooltip" title="fa fa-chevron-circle-up"></i></li>
											<li><i className="fa fa-chevron-down" data-bs-toggle="tooltip" title="fa fa-chevron-down"></i></li>
											<li><i className="fa fa-chevron-left" data-bs-toggle="tooltip" title="fa fa-chevron-left"></i></li>
											<li><i className="fa fa-chevron-right" data-bs-toggle="tooltip" title="fa fa-chevron-right"></i></li>
											<li><i className="fa fa-chevron-up" data-bs-toggle="tooltip" title="fa fa-chevron-up"></i></li>
											<li><i className="fa fa-child" data-bs-toggle="tooltip" title="fa fa-child"></i></li>
											<li><i className="fa fa-circle" data-bs-toggle="tooltip" title="fa fa-circle"></i></li>
											<li><i className="fa fa-clipboard" data-bs-toggle="tooltip" title="fa fa-clipboard"></i></li>
											<li><i className="fa fa-clone" data-bs-toggle="tooltip" title="fa fa-clone"></i></li>
											<li><i className="fa fa-cloud" data-bs-toggle="tooltip" title="fa fa-cloud"></i></li>
											<li><i className="fa fa-code" data-bs-toggle="tooltip" title="fa fa-code"></i></li>
											<li><i className="fa fa-coffee" data-bs-toggle="tooltip" title="fa fa-coffee"></i></li>
											<li><i className="fa fa-cog" data-bs-toggle="tooltip" title="fa fa-cog"></i></li>
											<li><i className="fa fa-cogs" data-bs-toggle="tooltip" title="fa fa-cogs"></i></li>
											<li><i className="fa fa-columns" data-bs-toggle="tooltip" title="fa fa-columns"></i></li>
											<li><i className="fa fa-comment" data-bs-toggle="tooltip" title="fa fa-comment"></i></li>
											<li><i className="fa fa-compress" data-bs-toggle="tooltip" title="fa fa-compress"></i></li>
											<li><i className="fa fa-copyright" data-bs-toggle="tooltip" title="fa fa-copyright"></i></li>
											<li><i className="fa fa-credit-card" data-bs-toggle="tooltip" title="fa fa-credit-card"></i></li>
											<li><i className="fa fa-desktop" data-bs-toggle="tooltip" title="fa fa-desktop"></i></li>
											<li><i className="fa fa-edit" data-bs-toggle="tooltip" title="fa fa-edit"></i></li>
											<li><i className="fa fa-eject" data-bs-toggle="tooltip" title="fa fa-eject"></i></li>
											<li><i className="fa fa-ellipsis-h" data-bs-toggle="tooltip" title="fa fa-ellipsis-h"></i></li>
											<li><i className="fa fa-ellipsis-v" data-bs-toggle="tooltip" title="fa fa-ellipsis-v"></i></li>
											<li><i className="fa fa-envelope" data-bs-toggle="tooltip" title="fa fa-envelope"></i></li>
											<li><i className="fa fa-envelope-open" data-bs-toggle="tooltip" title="fa fa-envelope-open"></i></li>
											<li><i className="fa fa-envelope-square" data-bs-toggle="tooltip" title="fa fa-envelope-square"></i></li>
											<li><i className="fa fa-eraser" data-bs-toggle="tooltip" title="fa fa-eraser"></i></li>
											<li><i className="fa fa-exclamation" data-bs-toggle="tooltip" title="fa fa-exclamation"></i></li>
											<li><i className="fa fa-exclamation-circle" data-bs-toggle="tooltip" title="fa fa-exclamation-circle"></i></li>
											<li><i className="fa fa-exclamation-triangle" data-bs-toggle="tooltip" title="fa fa-exclamation-triangle"></i></li>
											<li><i className="fa fa-expand" data-bs-toggle="tooltip" title="fa fa-expand"></i></li>
											<li><i className="fa fa-eye" data-bs-toggle="tooltip" title="fa fa-eye"></i></li>
											<li><i className="fa fa-eye-slash" data-bs-toggle="tooltip" title="fa fa-eye-slash"></i></li>
											<li><i className="fa fa-fast-backward" data-bs-toggle="tooltip" title="fa fa-fast-backward"></i></li>
											<li><i className="fa fa-fast-forward" data-bs-toggle="tooltip" title="fa fa-fast-forward"></i></li>
											<li><i className="fa fa-fax" data-bs-toggle="tooltip" title="fa fa-fax"></i></li>
											<li><i className="fa fa-female" data-bs-toggle="tooltip" title="fa fa-female"></i></li>
											<li><i className="fa fa-fighter-jet" data-bs-toggle="tooltip" title="fa fa-fighter-jet"></i></li>
											<li><i className="fa fa-file" data-bs-toggle="tooltip" title="fa fa-file"></i></li>
											<li><i className="fa fa-fire" data-bs-toggle="tooltip" title="fa fa-fire"></i></li>
											<li><i className="fa fa-fire-extinguisher" data-bs-toggle="tooltip" title="fa fa-fire-extinguisher"></i></li>
											<li><i className="fa fa-flag" data-bs-toggle="tooltip" title="fa fa-flag"></i></li>
											<li><i className="fa fa-flag-checkered" data-bs-toggle="tooltip" title="fa fa-flag-checkered"></i></li>
											<li><i className="fa fa-road" data-bs-toggle="tooltip" title="fa fa-road"></i></li>
											<li><i className="fa fa-rocket" data-bs-toggle="tooltip" title="fa fa-rocket"></i></li>
											<li><i className="fa fa-save" data-bs-toggle="tooltip" title="fa fa-save"></i></li>
											<li><i className="fa fa-search" data-bs-toggle="tooltip" title="fa fa-search"></i></li>
											<li><i className="fa fa-search-minus" data-bs-toggle="tooltip" title="fa fa-search-minus"></i></li>
											<li><i className="fa fa-search-plus" data-bs-toggle="tooltip" title="fa fa-search-plus"></i></li>
											<li><i className="fa fa-server" data-bs-toggle="tooltip" title="fa fa-server"></i></li>
											<li><i className="fa fa-share" data-bs-toggle="tooltip" title="fa fa-share"></i></li>
											<li><i className="fa fa-share-alt" data-bs-toggle="tooltip" title="fa fa-share-alt"></i></li>
											<li><i className="fa fa-share-alt-square" data-bs-toggle="tooltip" title="fa fa-share-alt-square"></i></li>
											<li><i className="fa fa-share-square" data-bs-toggle="tooltip" title="fa fa-share-square"></i></li>
											<li><i className="fa fa-ship" data-bs-toggle="tooltip" title="fa fa-ship"></i></li>
											<li><i className="fa fa-shopping-bag" data-bs-toggle="tooltip" title="fa fa-shopping-bag"></i></li>
											<li><i className="fa fa-shopping-basket" data-bs-toggle="tooltip" title="fa fa-shopping-basket"></i></li>
											<li><i className="fa fa-shopping-cart" data-bs-toggle="tooltip" title="fa fa-shopping-cart"></i></li>
											<li><i className="fa fa-shower" data-bs-toggle="tooltip" title="fa fa-shower"></i></li>
											<li><i className="fa fa-sign-language" data-bs-toggle="tooltip" title="fa fa-sign-language"></i></li>
											<li><i className="fa fa-signal" data-bs-toggle="tooltip" title="fa fa-signal"></i></li>
											<li><i className="fa fa-sitemap" data-bs-toggle="tooltip" title="fa fa-sitemap"></i></li>
											<li><i className="fa fa-sort" data-bs-toggle="tooltip" title="fa fa-sort"></i></li>
											<li><i className="fa fa-sort-down" data-bs-toggle="tooltip" title="fa fa-sort-down"></i></li>
											<li><i className="fa fa-square" data-bs-toggle="tooltip" title="fa fa-square"></i></li>
											<li><i className="fa fa-star" data-bs-toggle="tooltip" title="fa fa-star"></i></li>
											<li><i className="fa fa-star-half" data-bs-toggle="tooltip" title="fa fa-star-half"></i></li>
											<li><i className="fa fa-step-backward" data-bs-toggle="tooltip" title="fa fa-step-backward"></i></li>
											<li><i className="fa fa-step-forward" data-bs-toggle="tooltip" title="fa fa-step-forward"></i></li>
											<li><i className="fa fa-stethoscope" data-bs-toggle="tooltip" title="fa fa-stethoscope"></i></li>
											<li><i className="fa fa-sticky-note" data-bs-toggle="tooltip" title="fa fa-sticky-note"></i></li>
											<li><i className="fa fa-stop" data-bs-toggle="tooltip" title="fa fa-stop"></i></li>
											<li><i className="fa fa-stop-circle" data-bs-toggle="tooltip" title="fa fa-stop-circle"></i></li>
											<li><i className="fa fa-street-view" data-bs-toggle="tooltip" title="fa fa-street-view"></i></li>
											<li><i className="fa fa-subscript" data-bs-toggle="tooltip" title="fa fa-subscript"></i></li>
											<li><i className="fa fa-suitcase" data-bs-toggle="tooltip" title="fa fa-suitcase"></i></li>
											<li><i className="fa fa-superscript" data-bs-toggle="tooltip" title="fa fa-superscript"></i></li>
											<li><i className="fa fa-table" data-bs-toggle="tooltip" title="fa fa-table"></i></li>
											<li><i className="fa fa-tag" data-bs-toggle="tooltip" title="fa fa-tag"></i></li>
											<li><i className="fa fa-tags" data-bs-toggle="tooltip" title="fa fa-tags"></i></li>
											<li><i className="fa fa-tasks" data-bs-toggle="tooltip" title="fa fa-tasks"></i></li>
											<li><i className="fa fa-taxi" data-bs-toggle="tooltip" title="fa fa-taxi"></i></li>
											<li><i className="fa fa-terminal" data-bs-toggle="tooltip" title="fa fa-terminal"></i></li>
											<li><i className="fa fa-text-height" data-bs-toggle="tooltip" title="fa fa-text-height"></i></li>
											<li><i className="fa fa-text-width" data-bs-toggle="tooltip" title="fa fa-text-width"></i></li>
											<li><i className="fa fa-th" data-bs-toggle="tooltip" title="fa fa-th"></i></li>
											<li><i className="fa fa-th-large" data-bs-toggle="tooltip" title="fa fa-th-large"></i></li>
											<li><i className="fa fa-th-list" data-bs-toggle="tooltip" title="fa fa-th-list"></i></li>
											<li><i className="fa fa-thermometer" data-bs-toggle="tooltip" title="fa fa-thermometer"></i></li>
											<li><i className="fa fa-thermometer-empty" data-bs-toggle="tooltip" title="fa fa-thermometer-empty"></i></li>
											<li><i className="fa fa-thermometer-full" data-bs-toggle="tooltip" title="fa fa-thermometer-full"></i></li>
											<li><i className="fa fa-thermometer-half" data-bs-toggle="tooltip" title="fa fa-thermometer-half"></i></li>
											<li><i className="fa fa-thermometer-quarter" data-bs-toggle="tooltip" title="fa fa-thermometer-quarter"></i></li>
											<li><i className="fa fa-thermometer-three-quarters" data-bs-toggle="tooltip" title="fa fa-thermometer-three-quarters"></i></li>
											<li><i className="fa fa-thumbs-down" data-bs-toggle="tooltip" title="fa fa-thumbs-down"></i></li>
											<li><i className="fa fa-thumbs-up" data-bs-toggle="tooltip" title="fa fa-thumbs-up"></i></li>
											<li><i className="fa fa-times" data-bs-toggle="tooltip" title="fa fa-times"></i></li>
											<li><i className="fa fa-times-circle" data-bs-toggle="tooltip" title="fa fa-times-circle"></i></li>
											<li><i className="fa fa-tint" data-bs-toggle="tooltip" title="fa fa-tint"></i></li>
											<li><i className="fa fa-toggle-off" data-bs-toggle="tooltip" title="fa fa-toggle-off"></i></li>
											<li><i className="fa fa-toggle-on" data-bs-toggle="tooltip" title="fa fa-toggle-on"></i></li>
											<li><i className="fa fa-trademark" data-bs-toggle="tooltip" title="fa fa-trademark"></i></li>
											<li><i className="fa fa-train" data-bs-toggle="tooltip" title="fa fa-train"></i></li>
											<li><i className="fa fa-transgender" data-bs-toggle="tooltip" title="fa fa-transgender"></i></li>
											<li><i className="fa fa-transgender-alt" data-bs-toggle="tooltip" title="fa fa-transgender-alt"></i></li>
											<li><i className="fa fa-trash" data-bs-toggle="tooltip" title="fa fa-trash"></i></li>
											<li><i className="fa fa-tree" data-bs-toggle="tooltip" title="fa fa-tree"></i></li>
											<li><i className="fa fa-trophy" data-bs-toggle="tooltip" title="fa fa-trophy"></i></li>
											<li><i className="fa fa-tty" data-bs-toggle="tooltip" title="fa fa-tty"></i></li>
											<li><i className="fa fa-tv" data-bs-toggle="tooltip" title="fa fa-tv"></i></li>
											<li><i className="fa fa-umbrella" data-bs-toggle="tooltip" title="fa fa-umbrella"></i></li>
											<li><i className="fa fa-underline" data-bs-toggle="tooltip" title="fa fa-underline"></i></li>
											<li><i className="fa fa-undo" data-bs-toggle="tooltip" title="fa fa-undo"></i></li>
											<li><i className="fa fa-universal-access" data-bs-toggle="tooltip" title="fa fa-universal-access"></i></li>
											<li><i className="fa fa-university" data-bs-toggle="tooltip" title="fa fa-university"></i></li>
											<li><i className="fa fa-unlink" data-bs-toggle="tooltip" title="fa fa-unlink"></i></li>
											<li><i className="fa fa-unlock" data-bs-toggle="tooltip" title="fa fa-unlock"></i></li>
											<li><i className="fa fa-unlock-alt" data-bs-toggle="tooltip" title="fa fa-unlock-alt"></i></li>
											<li><i className="fa fa-upload" data-bs-toggle="tooltip" title="fa fa-upload"></i></li>
											<li><i className="fa fa-user-circle" data-bs-toggle="tooltip" title="fa fa-user-circle"></i></li>
											<li><i className="fa fa-user-md" data-bs-toggle="tooltip" title="fa fa-user-md"></i></li>
											<li><i className="fa fa-user-plus" data-bs-toggle="tooltip" title="fa fa-user-plus"></i></li>
											<li><i className="fa fa-user-secret" data-bs-toggle="tooltip" title="fa fa-user-secret"></i></li>
											<li><i className="fa fa-user-times" data-bs-toggle="tooltip" title="fa fa-user-times"></i></li>
											<li><i className="fa fa-users" data-bs-toggle="tooltip" title="fa fa-users"></i></li>
											<li><i className="fa fa-venus" data-bs-toggle="tooltip" title="fa fa-venus"></i></li>
											<li><i className="fa fa-venus-double" data-bs-toggle="tooltip" title="fa fa-venus-double"></i></li>
											<li><i className="fa fa-venus-mars" data-bs-toggle="tooltip" title="fa fa-venus-mars"></i></li>
											<li><i className="fa fa-volume-down" data-bs-toggle="tooltip" title="fa fa-volume-down"></i></li>
											<li><i className="fa fa-volume-off" data-bs-toggle="tooltip" title="fa fa-volume-off"></i></li>
											<li><i className="fa fa-volume-up" data-bs-toggle="tooltip" title="fa fa-volume-up"></i></li>
											<li><i className="fa fa-wheelchair" data-bs-toggle="tooltip" title="fa fa-wheelchair"></i></li>
											<li><i className="fa fa-wifi" data-bs-toggle="tooltip" title="fa fa-wifi"></i></li>
											<li><i className="fa fa-window-close" data-bs-toggle="tooltip" title="fa fa-window-close"></i></li>
											<li><i className="fa fa-window-maximize" data-bs-toggle="tooltip" title="fa fa-window-maximize"></i></li>
											<li><i className="fa fa-window-minimize" data-bs-toggle="tooltip" title="fa fa-window-minimize"></i></li>
											<li><i className="fa fa-window-restore" data-bs-toggle="tooltip" title="fa fa-window-restore"></i></li>
											<li><i className="fa fa-wrench" data-bs-toggle="tooltip" title="fa fa-wrench"></i></li>
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

export default IconFontawesome