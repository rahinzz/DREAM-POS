import React from 'react';
import { Link } from 'react-router-dom';

const IconIonic = () => {
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
								<h3 className="page-title">Ionic Icon</h3>
								<ul className="breadcrumb">
									<li className="breadcrumb-item"><Link to="/home">Dashboard</Link></li>
									<li className="breadcrumb-item active">Ionic Icon</li>
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
									<div className="card-title">Ionic Icon</div>
								</div>
								<div className="card-body">
									<div className="icons-items">
										<ul className="icons-list">
											<li><i className="ion-ionic" data-bs-toggle="tooltip" title="ion-ionic"></i></li>
											<li><i className="ion-arrow-up-a" data-bs-toggle="tooltip" title="ion-arrow-up-a"></i></li>
											<li><i className="ion-arrow-right-a" data-bs-toggle="tooltip" title="ion-arrow-right-a"></i></li>
											<li><i className="ion-arrow-down-a" data-bs-toggle="tooltip" title="ion-arrow-down-a"></i></li>
											<li><i className="ion-arrow-left-a" data-bs-toggle="tooltip" title="ion-arrow-left-a"></i></li>
											<li><i className="ion-arrow-up-b" data-bs-toggle="tooltip" title="ion-arrow-up-b"></i></li>
											<li><i className="ion-arrow-right-b" data-bs-toggle="tooltip" title="ion-arrow-right-b"></i></li>
											<li><i className="ion-arrow-down-b" data-bs-toggle="tooltip" title="ion-arrow-down-b"></i></li>
											<li><i className="ion-arrow-left-b" data-bs-toggle="tooltip" title="ion-arrow-left-b"></i></li>
											<li><i className="ion-arrow-up-c" data-bs-toggle="tooltip" title="ion-arrow-up-c"></i></li>
											<li><i className="ion-arrow-right-c" data-bs-toggle="tooltip" title="ion-arrow-right-c"></i></li>
											<li><i className="ion-arrow-down-c" data-bs-toggle="tooltip" title="ion-arrow-down-c"></i></li>
											<li><i className="ion-arrow-left-c" data-bs-toggle="tooltip" title="ion-arrow-left-c"></i></li>
											<li><i className="ion-arrow-return-right" data-bs-toggle="tooltip" title="ion-arrow-return-right"></i></li>
											<li><i className="ion-arrow-return-left" data-bs-toggle="tooltip" title="ion-arrow-return-left"></i></li>
											<li><i className="ion-arrow-swap" data-bs-toggle="tooltip" title="ion-arrow-swap"></i></li>
											<li><i className="ion-arrow-shrink" data-bs-toggle="tooltip" title="ion-arrow-shrink"></i></li>
											<li><i className="ion-arrow-expand" data-bs-toggle="tooltip" title="ion-arrow-expand"></i></li>
											<li><i className="ion-arrow-move" data-bs-toggle="tooltip" title="ion-arrow-move"></i></li>
											<li><i className="ion-arrow-resize" data-bs-toggle="tooltip" title="ion-arrow-resize"></i></li>
											<li><i className="ion-chevron-up" data-bs-toggle="tooltip" title="ion-chevron-up"></i></li>
											<li><i className="ion-chevron-right" data-bs-toggle="tooltip" title="ion-chevron-right"></i></li>
											<li><i className="ion-chevron-down" data-bs-toggle="tooltip" title="ion-chevron-down"></i></li>
											<li><i className="ion-chevron-left" data-bs-toggle="tooltip" title="ion-chevron-left"></i></li>
											<li><i className="ion-navicon-round" data-bs-toggle="tooltip" title="ion-navicon-round"></i></li>
											<li><i className="ion-navicon" data-bs-toggle="tooltip" title="ion-navicon"></i></li>
											<li><i className="ion-drag" data-bs-toggle="tooltip" title="ion-drag"></i></li>
											<li><i className="ion-log-in" data-bs-toggle="tooltip" title="ion-log-in"></i></li>
											<li><i className="ion-log-out" data-bs-toggle="tooltip" title="ion-log-out"></i></li>
											<li><i className="ion-checkmark-round" data-bs-toggle="tooltip" title="ion-checkmark-round"></i></li>
											<li><i className="ion-checkmark" data-bs-toggle="tooltip" title="ion-checkmark"></i></li>
											<li><i className="ion-checkmark-circled" data-bs-toggle="tooltip" title="ion-checkmark-circled"></i></li>
											<li><i className="ion-close-round" data-bs-toggle="tooltip" title="ion-close-round"></i></li>
											<li><i className="ion-close" data-bs-toggle="tooltip" title="ion-close"></i></li>
											<li><i className="ion-close-circled" data-bs-toggle="tooltip" title="ion-close-circled"></i></li>
											<li><i className="ion-plus-round" data-bs-toggle="tooltip" title="ion-plus-round"></i></li>
											<li><i className="ion-plus" data-bs-toggle="tooltip" title="ion-plus"></i></li>
											<li><i className="ion-plus-circled" data-bs-toggle="tooltip" title="ion-plus-circled"></i></li>
											<li><i className="ion-minus-round" data-bs-toggle="tooltip" title="ion-minus-round"></i></li>
											<li><i className="ion-minus" data-bs-toggle="tooltip" title="ion-minus"></i></li>
											<li><i className="ion-minus-circled" data-bs-toggle="tooltip" title="ion-minus-circled"></i></li>
											<li><i className="ion-information" data-bs-toggle="tooltip" title="ion-information"></i></li>
											<li><i className="ion-information-circled" data-bs-toggle="tooltip" title="ion-information-circled"></i></li>
											<li><i className="ion-help" data-bs-toggle="tooltip" title="ion-help"></i></li>
											<li><i className="ion-help-circled" data-bs-toggle="tooltip" title="ion-help-circled"></i></li>
											<li><i className="ion-help-buoy" data-bs-toggle="tooltip" title="ion-help-buoy"></i></li>
											<li><i className="ion-asterisk" data-bs-toggle="tooltip" title="ion-asterisk"></i></li>
											<li><i className="ion-alert" data-bs-toggle="tooltip" title="ion-alert"></i></li>
											<li><i className="ion-alert-circled" data-bs-toggle="tooltip" title="ion-alert-circled"></i></li>
											<li><i className="ion-refresh" data-bs-toggle="tooltip" title="ion-refresh"></i></li>
											<li><i className="ion-loop" data-bs-toggle="tooltip" title="ion-loop"></i></li>
											<li><i className="ion-shuffle" data-bs-toggle="tooltip" title="ion-shuffle"></i></li>
											<li><i className="ion-home" data-bs-toggle="tooltip" title="ion-home"></i></li>
											<li><i className="ion-search" data-bs-toggle="tooltip" title="ion-search"></i></li>
											<li><i className="ion-flag" data-bs-toggle="tooltip" title="ion-flag"></i></li>
											<li><i className="ion-star" data-bs-toggle="tooltip" title="ion-star"></i></li>
											<li><i className="ion-heart" data-bs-toggle="tooltip" title="ion-heart"></i></li>
											<li><i className="ion-heart-broken" data-bs-toggle="tooltip" title="ion-heart-broken"></i></li>
											<li><i className="ion-gear-a" data-bs-toggle="tooltip" title="ion-gear-a"></i></li>
											<li><i className="ion-gear-b" data-bs-toggle="tooltip" title="ion-gear-b"></i></li>
											<li><i className="ion-toggle-filled" data-bs-toggle="tooltip" title="ion-toggle-filled"></i></li>
											<li><i className="ion-toggle" data-bs-toggle="tooltip" title="ion-toggle"></i></li>
											<li><i className="ion-settings" data-bs-toggle="tooltip" title="ion-settings"></i></li>
											<li><i className="ion-wrench" data-bs-toggle="tooltip" title="ion-wrench"></i></li>
											<li><i className="ion-folder" data-bs-toggle="tooltip" title="ion-folder"></i></li>
											<li><i className="ion-hammer" data-bs-toggle="tooltip" title="ion-hammer"></i></li>
											<li><i className="ion-edit" data-bs-toggle="tooltip" title="ion-edit"></i></li>
											<li><i className="ion-trash-a" data-bs-toggle="tooltip" title="ion-trash-a"></i></li>
											<li><i className="ion-trash-b" data-bs-toggle="tooltip" title="ion-trash-b"></i></li>
											<li><i className="ion-document" data-bs-toggle="tooltip" title="ion-document"></i></li>
											<li><i className="ion-document-text" data-bs-toggle="tooltip" title="ion-document-text"></i></li>
											<li><i className="ion-clipboard" data-bs-toggle="tooltip" title="ion-clipboard"></i></li>
											<li><i className="ion-scissors" data-bs-toggle="tooltip" title="ion-scissors"></i></li>
											<li><i className="ion-funnel" data-bs-toggle="tooltip" title="ion-funnel"></i></li>
											<li><i className="ion-bookmark" data-bs-toggle="tooltip" title="ion-bookmark"></i></li>
											<li><i className="ion-email" data-bs-toggle="tooltip" title="ion-email"></i></li>
											<li><i className="ion-folder" data-bs-toggle="tooltip" title="ion-folder"></i></li>
											<li><i className="ion-filing" data-bs-toggle="tooltip" title="ion-filing"></i></li>
											<li><i className="ion-archive" data-bs-toggle="tooltip" title="ion-archive"></i></li>
											<li><i className="ion-reply" data-bs-toggle="tooltip" title="ion-reply"></i></li>
											<li><i className="ion-reply-all" data-bs-toggle="tooltip" title="ion-reply-all"></i></li>
											<li><i className="ion-forward" data-bs-toggle="tooltip" title="ion-forward"></i></li>
											<li><i className="ion-share" data-bs-toggle="tooltip" title="ion-share"></i></li>
											<li><i className="ion-paper-airplane" data-bs-toggle="tooltip" title="ion-paper-airplane"></i></li>
											<li><i className="ion-link" data-bs-toggle="tooltip" title="ion-link"></i></li>
											<li><i className="ion-paperclip" data-bs-toggle="tooltip" title="ion-paperclip"></i></li>
											<li><i className="ion-compose" data-bs-toggle="tooltip" title="ion-compose"></i></li>
											<li><i className="ion-briefcase" data-bs-toggle="tooltip" title="ion-briefcase"></i></li>
											<li><i className="ion-medkit" data-bs-toggle="tooltip" title="ion-medkit"></i></li>
											<li><i className="ion-at" data-bs-toggle="tooltip" title="ion-at"></i></li>
											<li><i className="ion-pound" data-bs-toggle="tooltip" title="ion-pound"></i></li>
											<li><i className="ion-quote" data-bs-toggle="tooltip" title="ion-quote"></i></li>
											<li><i className="ion-cloud" data-bs-toggle="tooltip" title="ion-cloud"></i></li>
											<li><i className="ion-upload" data-bs-toggle="tooltip" title="ion-upload"></i></li>
											<li><i className="ion-more" data-bs-toggle="tooltip" title="ion-more"></i></li>
											<li><i className="ion-grid" data-bs-toggle="tooltip" title="ion-grid"></i></li>
											<li><i className="ion-calendar" data-bs-toggle="tooltip" title="ion-calendar"></i></li>
											<li><i className="ion-clock" data-bs-toggle="tooltip" title="ion-clock"></i></li>
											<li><i className="ion-compass" data-bs-toggle="tooltip" title="ion-compass"></i></li>
											<li><i className="ion-pinpoint" data-bs-toggle="tooltip" title="ion-pinpoint"></i></li>
											<li><i className="ion-pin" data-bs-toggle="tooltip" title="ion-pin"></i></li>
											<li><i className="ion-navigate" data-bs-toggle="tooltip" title="ion-navigate"></i></li>
											<li><i className="ion-location" data-bs-toggle="tooltip" title="ion-location"></i></li>
											<li><i className="ion-map" data-bs-toggle="tooltip" title="ion-map"></i></li>
											<li><i className="ion-model-s" data-bs-toggle="tooltip" title="ion-model-s"></i></li>
											<li><i className="ion-locked" data-bs-toggle="tooltip" title="ion-locked"></i></li>
											<li><i className="ion-unlocked" data-bs-toggle="tooltip" title="ion-unlocked"></i></li>
											<li><i className="ion-key" data-bs-toggle="tooltip" title="ion-key"></i></li>
											<li><i className="ion-arrow-graph-up-right" data-bs-toggle="tooltip" title="ion-arrow-graph-up-right"></i></li>
											<li><i className="ion-arrow-graph-down-right" data-bs-toggle="tooltip" title="ion-arrow-graph-down-right"></i></li>
											<li><i className="ion-arrow-graph-down-left" data-bs-toggle="tooltip" title="ion-arrow-graph-down-left"></i></li>
											<li><i className="ion-stats-bars" data-bs-toggle="tooltip" title="ion-stats-bars"></i></li>
											<li><i className="ion-connection-bars" data-bs-toggle="tooltip" title="ion-connection-bars"></i></li>
											<li><i className="ion-pie-graph" data-bs-toggle="tooltip" title="ion-pie-graph"></i></li>
											<li><i className="ion-chatbubble" data-bs-toggle="tooltip" title="ion-chatbubble"></i></li>
											<li><i className="ion-chatbubble-working" data-bs-toggle="tooltip" title="ion-chatbubble-working"></i></li>
											<li><i className="ion-chatbubbles" data-bs-toggle="tooltip" title="ion-chatbubbles"></i></li>
											<li><i className="ion-chatbox" data-bs-toggle="tooltip" title="ion-chatbox"></i></li>
											<li><i className="ion-chatbox-working" data-bs-toggle="tooltip" title="ion-chatbox-working"></i></li>
											<li><i className="ion-chatboxes" data-bs-toggle="tooltip" title="ion-chatboxes"></i></li>
											<li><i className="ion-person" data-bs-toggle="tooltip" title="ion-person"></i></li>
											<li><i className="ion-person-add" data-bs-toggle="tooltip" title="ion-person-add"></i></li>
											<li><i className="ion-person-stalker" data-bs-toggle="tooltip" title="ion-person-stalker"></i></li>
											<li><i className="ion-woman" data-bs-toggle="tooltip" title="ion-woman"></i></li>
											<li><i className="ion-man" data-bs-toggle="tooltip" title="ion-man"></i></li>
											<li><i className="ion-female" data-bs-toggle="tooltip" title="ion-female"></i></li>
											<li><i className="ion-male" data-bs-toggle="tooltip" title="ion-male"></i></li>
											<li><i className="ion-fork" data-bs-toggle="tooltip" title="ion-fork"></i></li>
											<li><i className="ion-knife" data-bs-toggle="tooltip" title="ion-knife"></i></li>
											<li><i className="ion-spoon" data-bs-toggle="tooltip" title="ion-spoon"></i></li>
											<li><i className="ion-beer" data-bs-toggle="tooltip" title="ion-beer"></i></li>
											<li><i className="ion-wineglass" data-bs-toggle="tooltip" title="ion-wineglass"></i></li>
											<li><i className="ion-coffee" data-bs-toggle="tooltip" title="ion-coffee"></i></li>
											<li><i className="ion-icecream" data-bs-toggle="tooltip" title="ion-icecream"></i></li>
											<li><i className="ion-pizza" data-bs-toggle="tooltip" title="ion-pizza"></i></li>
											<li><i className="ion-power" data-bs-toggle="tooltip" title="ion-power"></i></li>
											<li><i className="ion-mouse" data-bs-toggle="tooltip" title="ion-mouse"></i></li>
											<li><i className="ion-battery-full" data-bs-toggle="tooltip" title="ion-battery-full"></i></li>
											<li><i className="ion-battery-half" data-bs-toggle="tooltip" title="ion-battery-half"></i></li>
											<li><i className="ion-battery-low" data-bs-toggle="tooltip" title="ion-battery-low"></i></li>
											<li><i className="ion-battery-empty" data-bs-toggle="tooltip" title="ion-battery-empty"></i></li>
											<li><i className="ion-battery-charging" data-bs-toggle="tooltip" title="ion-battery-charging"></i></li>
											<li><i className="ion-bluetooth" data-bs-toggle="tooltip" title="ion-bluetooth"></i></li>
											<li><i className="ion-calculator" data-bs-toggle="tooltip" title="ion-calculator"></i></li>
											<li><i className="ion-camera" data-bs-toggle="tooltip" title="ion-camera"></i></li>
											<li><i className="ion-eye" data-bs-toggle="tooltip" title="ion-eye"></i></li>
											<li><i className="ion-eye-disabled" data-bs-toggle="tooltip" title="ion-eye-disabled"></i></li>
											<li><i className="ion-flash" data-bs-toggle="tooltip" title="ion-flash"></i></li>
											<li><i className="ion-flash-off" data-bs-toggle="tooltip" title="ion-flash-off"></i></li>
											<li><i className="ion-qr-scanner" data-bs-toggle="tooltip" title="ion-qr-scanner"></i></li>
											<li><i className="ion-image" data-bs-toggle="tooltip" title="ion-image"></i></li>
											<li><i className="ion-images" data-bs-toggle="tooltip" title="ion-images"></i></li>
											<li><i className="ion-contrast" data-bs-toggle="tooltip" title="ion-contrast"></i></li>
											<li><i className="ion-wand" data-bs-toggle="tooltip" title="ion-wand"></i></li>
											<li><i className="ion-aperture" data-bs-toggle="tooltip" title="ion-aperture"></i></li>
											<li><i className="ion-monitor" data-bs-toggle="tooltip" title="ion-monitor"></i></li>
											<li><i className="ion-laptop" data-bs-toggle="tooltip" title="ion-laptop"></i></li>
											<li><i className="ion-ipad" data-bs-toggle="tooltip" title="ion-ipad"></i></li>
											<li><i className="ion-iphone" data-bs-toggle="tooltip" title="ion-iphone"></i></li>
											<li><i className="ion-ipod" data-bs-toggle="tooltip" title="ion-ipod"></i></li>
											<li><i className="ion-printer" data-bs-toggle="tooltip" title="ion-printer"></i></li>
											<li><i className="ion-usb" data-bs-toggle="tooltip" title="ion-usb"></i></li>
											<li><i className="ion-outlet" data-bs-toggle="tooltip" title="ion-outlet"></i></li>
											<li><i className="ion-bug" data-bs-toggle="tooltip" title="ion-bug"></i></li>
											<li><i className="ion-code" data-bs-toggle="tooltip" title="ion-code"></i></li>
											<li><i className="ion-code-working" data-bs-toggle="tooltip" title="ion-code-working"></i></li>
											<li><i className="ion-code-download" data-bs-toggle="tooltip" title="ion-code-download"></i></li>
											<li><i className="ion-fork-repo" data-bs-toggle="tooltip" title="ion-fork-repo"></i></li>
											<li><i className="ion-network" data-bs-toggle="tooltip" title="ion-network"></i></li>
											<li><i className="ion-pull-request" data-bs-toggle="tooltip" title="ion-pull-request"></i></li>
											<li><i className="ion-merge" data-bs-toggle="tooltip" title="ion-merge"></i></li>
											<li><i className="ion-game-controller-a" data-bs-toggle="tooltip" title="ion-game-controller-a"></i></li>
											<li><i className="ion-game-controller-b" data-bs-toggle="tooltip" title="ion-game-controller-b"></i></li>
											<li><i className="ion-xbox" data-bs-toggle="tooltip" title="ion-xbox"></i></li>
											<li><i className="ion-playstation" data-bs-toggle="tooltip" title="ion-playstation"></i></li>
											<li><i className="ion-steam" data-bs-toggle="tooltip" title="ion-steam"></i></li>
											<li><i className="ion-closed-captioning" data-bs-toggle="tooltip" title="ion-closed-captioning"></i></li>
											<li><i className="ion-videocamera" data-bs-toggle="tooltip" title="ion-videocamera"></i></li>
											<li><i className="ion-film-marker" data-bs-toggle="tooltip" title="ion-film-marker"></i></li>
											<li><i className="ion-disc" data-bs-toggle="tooltip" title="ion-disc"></i></li>
											<li><i className="ion-headphone" data-bs-toggle="tooltip" title="ion-headphone"></i></li>
											<li><i className="ion-music-note" data-bs-toggle="tooltip" title="ion-music-note"></i></li>
											<li><i className="ion-radio-waves" data-bs-toggle="tooltip" title="ion-radio-waves"></i></li>
											<li><i className="ion-speakerphone" data-bs-toggle="tooltip" title="ion-speakerphone"></i></li>
											<li><i className="ion-mic-a" data-bs-toggle="tooltip" title="ion-mic-a"></i></li>
											<li><i className="ion-mic-b" data-bs-toggle="tooltip" title="ion-mic-b"></i></li>
											<li><i className="ion-mic-c" data-bs-toggle="tooltip" title="ion-mic-c"></i></li>
											<li><i className="ion-volume-high" data-bs-toggle="tooltip" title="ion-volume-high"></i></li>
											<li><i className="ion-volume-medium" data-bs-toggle="tooltip" title="ion-volume-medium"></i></li>
											<li><i className="ion-volume-low" data-bs-toggle="tooltip" title="ion-volume-low"></i></li>
											<li><i className="ion-volume-mute" data-bs-toggle="tooltip" title="ion-volume-mute"></i></li>
											<li><i className="ion-levels" data-bs-toggle="tooltip" title="ion-levels"></i></li>
											<li><i className="ion-play" data-bs-toggle="tooltip" title="ion-play"></i></li>
											<li><i className="ion-pause" data-bs-toggle="tooltip" title="ion-pause"></i></li>
											<li><i className="ion-stop" data-bs-toggle="tooltip" title="ion-stop"></i></li>
											<li><i className="ion-record" data-bs-toggle="tooltip" title="ion-record"></i></li>
											<li><i className="ion-skip-forward" data-bs-toggle="tooltip" title="ion-skip-forward"></i></li>
											<li><i className="ion-skip-backward" data-bs-toggle="tooltip" title="ion-skip-backward"></i></li>
											<li><i className="ion-eject" data-bs-toggle="tooltip" title="ion-eject"></i></li>
											<li><i className="ion-bag" data-bs-toggle="tooltip" title="ion-bag"></i></li>
											<li><i className="ion-card" data-bs-toggle="tooltip" title="ion-card"></i></li>
											<li><i className="ion-cash" data-bs-toggle="tooltip" title="ion-cash"></i></li>
											<li><i className="ion-pricetag" data-bs-toggle="tooltip" title="ion-pricetag"></i></li>
											<li><i className="ion-pricetags" data-bs-toggle="tooltip" title="ion-pricetags"></i></li>
											<li><i className="ion-thumbsup" data-bs-toggle="tooltip" title="ion-thumbsup"></i></li>
											<li><i className="ion-thumbsdown" data-bs-toggle="tooltip" title="ion-thumbsdown"></i></li>
											<li><i className="ion-happy" data-bs-toggle="tooltip" title="ion-happy"></i></li>
											<li><i className="ion-sad" data-bs-toggle="tooltip" title="ion-sad"></i></li>
											<li><i className="ion-trophy" data-bs-toggle="tooltip" title="ion-trophy"></i></li>
											<li><i className="ion-podium" data-bs-toggle="tooltip" title="ion-podium"></i></li>
											<li><i className="ion-ribbon-a" data-bs-toggle="tooltip" title="ion-ribbon-a"></i></li>
											<li><i className="ion-ribbon-b" data-bs-toggle="tooltip" title="ion-ribbon-b"></i></li>
											<li><i className="ion-university" data-bs-toggle="tooltip" title="ion-university"></i></li>
											<li><i className="ion-magnet" data-bs-toggle="tooltip" title="ion-magnet"></i></li>
											<li><i className="ion-beaker" data-bs-toggle="tooltip" title="ion-beaker"></i></li>
											<li><i className="ion-flask" data-bs-toggle="tooltip" title="ion-flask"></i></li>
											<li><i className="ion-egg" data-bs-toggle="tooltip" title="ion-egg"></i></li>
											<li><i className="ion-earth" data-bs-toggle="tooltip" title="ion-earth"></i></li>
											<li><i className="ion-planet" data-bs-toggle="tooltip" title="ion-planet"></i></li>
											<li><i className="ion-lightbulb" data-bs-toggle="tooltip" title="ion-lightbulb"></i></li>
											<li><i className="ion-cube" data-bs-toggle="tooltip" title="ion-cube"></i></li>
											<li><i className="ion-leaf" data-bs-toggle="tooltip" title="ion-leaf"></i></li>
											<li><i className="ion-waterdrop" data-bs-toggle="tooltip" title="ion-waterdrop"></i></li>
											<li><i className="ion-flame" data-bs-toggle="tooltip" title="ion-flame"></i></li>
											<li><i className="ion-fireball" data-bs-toggle="tooltip" title="ion-fireball"></i></li>
											<li><i className="ion-bonfire" data-bs-toggle="tooltip" title="ion-bonfire"></i></li>
											<li><i className="ion-umbrella" data-bs-toggle="tooltip" title="ion-umbrella"></i></li>
											<li><i className="ion-nuclear" data-bs-toggle="tooltip" title="ion-nuclear"></i></li>
											<li><i className="ion-no-smoking" data-bs-toggle="tooltip" title="ion-no-smoking"></i></li>
											<li><i className="ion-thermometer" data-bs-toggle="tooltip" title="ion-thermometer"></i></li>
											<li><i className="ion-speedometer" data-bs-toggle="tooltip" title="ion-speedometer"></i></li>
											<li><i className="ion-plane" data-bs-toggle="tooltip" title="ion-plane"></i></li>
											<li><i className="ion-jet" data-bs-toggle="tooltip" title="ion-jet"></i></li>
											<li><i className="ion-load-a" data-bs-toggle="tooltip" title="ion-load-a"></i></li>
											<li><i className="ion-load-b" data-bs-toggle="tooltip" title="ion-load-b"></i></li>
											<li><i className="ion-load-c" data-bs-toggle="tooltip" title="ion-load-c"></i></li>
											<li><i className="ion-load-d" data-bs-toggle="tooltip" title="ion-load-d"></i></li>
											<li><i className="ion-ios7-ionic-outline" data-bs-toggle="tooltip" title="ion-ios7-ionic-outline"></i></li>
											<li><i className="ion-ios7-arrow-back" data-bs-toggle="tooltip" title="ion-ios7-arrow-back"></i></li>
											<li><i className="ion-ios7-arrow-forward" data-bs-toggle="tooltip" title="ion-ios7-arrow-forward"></i></li>
											<li><i className="ion-ios7-arrow-up" data-bs-toggle="tooltip" title="ion-ios7-arrow-up"></i></li>
											<li><i className="ion-ios7-arrow-right" data-bs-toggle="tooltip" title="ion-ios7-arrow-right"></i></li>
											<li><i className="ion-ios7-arrow-down" data-bs-toggle="tooltip" title="ion-ios7-arrow-down"></i></li>
											<li><i className="ion-ios7-arrow-left" data-bs-toggle="tooltip" title="ion-ios7-arrow-left"></i></li>
											<li><i className="ion-ios7-arrow-thin-up" data-bs-toggle="tooltip" title="ion-ios7-arrow-thin-up"></i></li>
											<li><i className="ion-ios7-arrow-thin-right" data-bs-toggle="tooltip" title="ion-ios7-arrow-thin-right"></i></li>
											<li><i className="ion-ios7-arrow-thin-down" data-bs-toggle="tooltip" title="ion-ios7-arrow-thin-down"></i></li>
											<li><i className="ion-ios7-arrow-thin-left" data-bs-toggle="tooltip" title="ion-ios7-arrow-thin-left"></i></li>
											<li><i className="ion-ios7-circle-filled" data-bs-toggle="tooltip" title="ion-ios7-circle-filled"></i></li>
											<li><i className="ion-ios7-circle-outline" data-bs-toggle="tooltip" title="ion-ios7-circle-outline"></i></li>
											<li><i className="ion-ios7-checkmark-empty" data-bs-toggle="tooltip" title="ion-ios7-checkmark-empty"></i></li>
											<li><i className="ion-ios7-checkmark-outline" data-bs-toggle="tooltip" title="ion-ios7-checkmark-outline"></i></li>
											<li><i className="ion-ios7-checkmark" data-bs-toggle="tooltip" title="ion-ios7-checkmark"></i></li>
											<li><i className="ion-ios7-plus-empty" data-bs-toggle="tooltip" title="ion-ios7-plus-empty"></i></li>
											<li><i className="ion-ios7-plus-outline" data-bs-toggle="tooltip" title="ion-ios7-plus-outline"></i></li>
											<li><i className="ion-ios7-plus" data-bs-toggle="tooltip" title="ion-ios7-plus"></i></li>
											<li><i className="ion-ios7-close-empty" data-bs-toggle="tooltip" title="ion-ios7-close-empty"></i></li>
											<li><i className="ion-ios7-close-outline" data-bs-toggle="tooltip" title="ion-ios7-close-outline"></i></li>
											<li><i className="ion-ios7-close" data-bs-toggle="tooltip" title="ion-ios7-close"></i></li>
											<li><i className="ion-ios7-minus-empty" data-bs-toggle="tooltip" title="ion-ios7-minus-empty"></i></li>
											<li><i className="ion-ios7-minus-outline" data-bs-toggle="tooltip" title="ion-ios7-minus-outline"></i></li>
											<li><i className="ion-ios7-minus" data-bs-toggle="tooltip" title="ion-ios7-minus"></i></li>
											<li><i className="ion-ios7-information-empty" data-bs-toggle="tooltip" title="ion-ios7-information-empty"></i></li>
											<li><i className="ion-ios7-information-outline" data-bs-toggle="tooltip" title="ion-ios7-information-outline"></i></li>
											<li><i className="ion-ios7-information" data-bs-toggle="tooltip" title="ion-ios7-information"></i></li>
											<li><i className="ion-ios7-help-empty" data-bs-toggle="tooltip" title="ion-ios7-help-empty"></i></li>
											<li><i className="ion-ios7-help-outline" data-bs-toggle="tooltip" title="ion-ios7-help-outline"></i></li>
											<li><i className="ion-ios7-help" data-bs-toggle="tooltip" title="ion-ios7-help"></i></li>
											<li><i className="ion-ios7-search" data-bs-toggle="tooltip" title="ion-ios7-search"></i></li>
											<li><i className="ion-ios7-search-strong" data-bs-toggle="tooltip" title="ion-ios7-search-strong"></i></li>
											<li><i className="ion-ios7-star" data-bs-toggle="tooltip" title="ion-ios7-star"></i></li>
											<li><i className="ion-ios7-star-half" data-bs-toggle="tooltip" title="ion-ios7-star-half"></i></li>
											<li><i className="ion-ios7-star-outline" data-bs-toggle="tooltip" title="ion-ios7-star-outline"></i></li>
											<li><i className="ion-ios7-heart" data-bs-toggle="tooltip" title="ion-ios7-heart"></i></li>
											<li><i className="ion-ios7-heart-outline" data-bs-toggle="tooltip" title="ion-ios7-heart-outline"></i></li>
											<li><i className="ion-ios7-more" data-bs-toggle="tooltip" title="ion-ios7-more"></i></li>
											<li><i className="ion-ios7-more-outline" data-bs-toggle="tooltip" title="ion-ios7-more-outline"></i></li>
											<li><i className="ion-ios7-home" data-bs-toggle="tooltip" title="ion-ios7-home"></i></li>
											<li><i className="ion-ios7-home-outline" data-bs-toggle="tooltip" title="ion-ios7-home-outline"></i></li>
											<li><i className="ion-ios7-cloud" data-bs-toggle="tooltip" title="ion-ios7-cloud"></i></li>
											<li><i className="ion-ios7-cloud-outline" data-bs-toggle="tooltip" title="ion-ios7-cloud-outline"></i></li>
											<li><i className="ion-ios7-cloud-upload" data-bs-toggle="tooltip" title="ion-ios7-cloud-upload"></i></li>
											<li><i className="ion-ios7-cloud-upload-outline" data-bs-toggle="tooltip" title="ion-ios7-cloud-upload-outline"></i></li>
											<li><i className="ion-ios7-cloud-download" data-bs-toggle="tooltip" title="ion-ios7-cloud-download"></i></li>
											<li><i className="ion-ios7-cloud-download-outline" data-bs-toggle="tooltip" title="ion-ios7-cloud-download-outline"></i></li>
											<li><i className="ion-ios7-upload" data-bs-toggle="tooltip" title="ion-ios7-upload"></i></li>
											<li><i className="ion-ios7-upload-outline" data-bs-toggle="tooltip" title="ion-ios7-upload-outline"></i></li>
											<li><i className="ion-ios7-download" data-bs-toggle="tooltip" title="ion-ios7-download"></i></li>
											<li><i className="ion-ios7-refresh" data-bs-toggle="tooltip" title="ion-ios7-refresh"></i></li>
											<li><i className="ion-ios7-refresh-outline" data-bs-toggle="tooltip" title="ion-ios7-refresh-outline"></i></li>
											<li><i className="ion-ios7-refresh-empty" data-bs-toggle="tooltip" title="ion-ios7-refresh-empty"></i></li>
											<li><i className="ion-ios7-reload" data-bs-toggle="tooltip" title="ion-ios7-reload"></i></li>
											<li><i className="ion-ios7-loop-strong" data-bs-toggle="tooltip" title="ion-ios7-loop-strong"></i></li>
											<li><i className="ion-ios7-loop" data-bs-toggle="tooltip" title="ion-ios7-loop"></i></li>
											<li><i className="ion-ios7-bookmarks" data-bs-toggle="tooltip" title="ion-ios7-bookmarks"></i></li>
											<li><i className="ion-ios7-bookmarks-outline" data-bs-toggle="tooltip" title="ion-ios7-bookmarks-outline"></i></li>

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

export default IconIonic