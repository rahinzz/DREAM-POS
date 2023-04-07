import React from 'react';
import { Link } from 'react-router-dom';

const IconThemify = () => {
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
								<h3 className="page-title">Themify Icon</h3>
								<ul className="breadcrumb">
									<li className="breadcrumb-item"><Link to="/home">Dashboard</Link></li>
									<li className="breadcrumb-item active">Themify Icon</li>
								</ul>
							</div>
						</div>
					</div>	
					{/* /Page Header		 */}
					
					<div className="row">
					
						{/* Chart */}
						<div className="col-md-12">	
							<div className="card">
								<div className="card-header">
									<div className="card-title">Themify Icon</div>
								</div>
								<div className="card-body">
									<div className="icons-items">
										<ul className="icons-list">
											<li><i className="ti-arrow-up" data-bs-toggle="tooltip" title="ti-arrow-up"></i></li>
											<li><i className="ti-arrow-right" data-bs-toggle="tooltip" title="ti-arrow-right"></i></li>
											<li><i className="ti-arrow-left" data-bs-toggle="tooltip" title="ti-arrow-left"></i></li>
											<li><i className="ti-arrow-down" data-bs-toggle="tooltip" title="ti-arrow-down"></i></li>
											<li><i className="ti-arrows-vertical" data-bs-toggle="tooltip" title="ti-arrows-vertical"></i></li>
											<li><i className="ti-arrows-horizontal" data-bs-toggle="tooltip" title="ti-arrows-horizontal"></i></li>
											<li><i className="ti-angle-up" data-bs-toggle="tooltip" title="ti-angle-up"></i></li>
											<li><i className="ti-angle-right" data-bs-toggle="tooltip" title="ti-angle-right"></i></li>
											<li><i className="ti-angle-left" data-bs-toggle="tooltip" title="ti-angle-left"></i></li>
											<li><i className="ti-angle-down" data-bs-toggle="tooltip" title="ti-angle-down"></i></li>
											<li><i className="ti-angle-double-up" data-bs-toggle="tooltip" title="ti-angle-double-up"></i></li>
											<li><i className="ti-angle-double-right" data-bs-toggle="tooltip" title="ti-angle-double-right"></i></li>
											<li><i className="ti-angle-double-left" data-bs-toggle="tooltip" title="ti-angle-double-left"></i></li>
											<li><i className="ti-angle-double-down" data-bs-toggle="tooltip" title="ti-angle-double-down"></i></li>
											<li><i className="ti-move" data-bs-toggle="tooltip" title="ti-move"></i></li>
											<li><i className="ti-fullscreen" data-bs-toggle="tooltip" title="ti-fullscreen"></i></li>
											<li><i className="ti-arrow-top-right" data-bs-toggle="tooltip" title="ti-arrow-top-right"></i></li>
											<li><i className="ti-arrow-top-left" data-bs-toggle="tooltip" title="ti-arrow-top-left"></i></li>
											<li><i className="ti-arrow-circle-up" data-bs-toggle="tooltip" title="ti-arrow-circle-up"></i></li>
											<li><i className="ti-arrow-circle-right" data-bs-toggle="tooltip" title="ti-arrow-circle-right"></i></li>
											<li><i className="ti-arrow-circle-left" data-bs-toggle="tooltip" title="ti-arrow-circle-left"></i></li>
											<li><i className="ti-arrow-circle-down" data-bs-toggle="tooltip" title="ti-arrow-circle-down"></i></li>
											<li><i className="ti-arrows-corner" data-bs-toggle="tooltip" title="ti-arrows-corner"></i></li>
											<li><i className="ti-split-v" data-bs-toggle="tooltip" title="ti-split-v"></i></li>
											<li><i className="ti-split-v-alt" data-bs-toggle="tooltip" title="ti-split-v-alt"></i></li>
											<li><i className="ti-split-h" data-bs-toggle="tooltip" title="ti-split-h"></i></li>
											<li><i className="ti-hand-point-up" data-bs-toggle="tooltip" title="ti-hand-point-up"></i></li>
											<li><i className="ti-hand-point-right" data-bs-toggle="tooltip" title="ti-hand-point-right"></i></li>
											<li><i className="ti-hand-point-left" data-bs-toggle="tooltip" title="ti-hand-point-left"></i></li>
											<li><i className="ti-hand-point-down" data-bs-toggle="tooltip" title="ti-hand-point-down"></i></li>
											<li><i className="ti-back-right" data-bs-toggle="tooltip" title="ti-back-right"></i></li>
											<li><i className="ti-back-left" data-bs-toggle="tooltip" title="ti-back-left"></i></li>
											<li><i className="ti-exchange-vertical" data-bs-toggle="tooltip" title="ti-exchange-vertical"></i></li>
											<li><i className="ti-wand" data-bs-toggle="tooltip" title="ti-wand"></i></li>
											<li><i className="ti-save" data-bs-toggle="tooltip" title="ti-save"></i></li>
											<li><i className="ti-save-alt" data-bs-toggle="tooltip" title="ti-save-alt"></i></li>
											<li><i className="ti-direction" data-bs-toggle="tooltip" title="ti-direction"></i></li>
											<li><i className="ti-direction-alt" data-bs-toggle="tooltip" title="ti-direction-alt"></i></li>
											<li><i className="ti-user" data-bs-toggle="tooltip" title="ti-user"></i></li>
											<li><i className="ti-link" data-bs-toggle="tooltip" title="ti-link"></i></li>
											<li><i className="ti-unlink" data-bs-toggle="tooltip" title="ti-unlink"></i></li>
											<li><i className="ti-trash" data-bs-toggle="tooltip" title="ti-trash"></i></li>
											<li><i className="ti-target" data-bs-toggle="tooltip" title="ti-target"></i></li>
											<li><i className="ti-tag" data-bs-toggle="tooltip" title="ti-tag"></i></li>
											<li><i className="ti-desktop" data-bs-toggle="tooltip" title="ti-desktop"></i></li>
											<li><i className="ti-tablet" data-bs-toggle="tooltip" title="ti-tablet"></i></li>
											<li><i className="ti-mobile" data-bs-toggle="tooltip" title="ti-mobile"></i></li>
											<li><i className="ti-email" data-bs-toggle="tooltip" title="ti-email"></i></li>
											<li><i className="ti-star" data-bs-toggle="tooltip" title="ti-star"></i></li>
											<li><i className="ti-spray" data-bs-toggle="tooltip" title="ti-spray"></i></li>
											<li><i className="ti-signal" data-bs-toggle="tooltip" title="ti-signal"></i></li>
											<li><i className="ti-shopping-cart" data-bs-toggle="tooltip" title="ti-shopping-cart"></i></li>
											<li><i className="ti-shopping-cart-full" data-bs-toggle="tooltip" title="ti-shopping-cart-full"></i></li>
											<li><i className="ti-settings" data-bs-toggle="tooltip" title="ti-settings"></i></li>
											<li><i className="ti-search" data-bs-toggle="tooltip" title="ti-search"></i></li>
											<li><i className="ti-zoom-in" data-bs-toggle="tooltip" title="ti-zoom-in"></i></li>
											<li><i className="ti-zoom-out" data-bs-toggle="tooltip" title="ti-zoom-out"></i></li>
											<li><i className="ti-cut" data-bs-toggle="tooltip" title="ti-cut"></i></li>
											<li><i className="ti-ruler" data-bs-toggle="tooltip" title="ti-ruler"></i></li>
											<li><i className="ti-ruler-alt-2" data-bs-toggle="tooltip" title="ti-ruler-alt-2"></i></li>
											<li><i className="ti-ruler-pencil" data-bs-toggle="tooltip" title="ti-ruler-pencil"></i></li>
											<li><i className="ti-ruler-alt" data-bs-toggle="tooltip" title="ti-ruler-alt"></i></li>
											<li><i className="ti-bookmark" data-bs-toggle="tooltip" title="ti-bookmark"></i></li>
											<li><i className="ti-bookmark-alt" data-bs-toggle="tooltip" title="ti-bookmark-alt"></i></li>
											<li><i className="ti-reload" data-bs-toggle="tooltip" title="ti-reload"></i></li>
											<li><i className="ti-plus" data-bs-toggle="tooltip" title="ti-plus"></i></li>
											<li><i className="ti-minus" data-bs-toggle="tooltip" title="ti-minus"></i></li>
											<li><i className="ti-close" data-bs-toggle="tooltip" title="ti-close"></i></li>
											<li><i className="ti-pin" data-bs-toggle="tooltip" title="ti-pin"></i></li>
											<li><i className="ti-pencil" data-bs-toggle="tooltip" title="ti-pencil"></i></li>
											<li><i className="ti-pencil-alt" data-bs-toggle="tooltip" title="ti-pencil-alt"></i></li>
											<li><i className="ti-paint-roller" data-bs-toggle="tooltip" title="ti-paint-roller"></i></li>
											<li><i className="ti-paint-bucket" data-bs-toggle="tooltip" title="ti-paint-bucket"></i></li>
											<li><i className="ti-na" data-bs-toggle="tooltip" title="ti-na"></i></li>
											<li><i className="ti-medall" data-bs-toggle="tooltip" title="ti-medall"></i></li>
											<li><i className="ti-medall-alt" data-bs-toggle="tooltip" title="ti-medall-alt"></i></li>
											<li><i className="ti-marker" data-bs-toggle="tooltip" title="ti-marker"></i></li>
											<li><i className="ti-marker-alt" data-bs-toggle="tooltip" title="ti-marker-alt"></i></li>
											<li><i className="ti-lock" data-bs-toggle="tooltip" title="ti-lock"></i></li>
											<li><i className="ti-unlock" data-bs-toggle="tooltip" title="ti-unlock"></i></li>
											<li><i className="ti-location-arrow" data-bs-toggle="tooltip" title="ti-location-arrow"></i></li>
											<li><i className="ti-layout" data-bs-toggle="tooltip" title="ti-layout"></i></li>
											<li><i className="ti-layers" data-bs-toggle="tooltip" title="ti-layers"></i></li>
											<li><i className="ti-layers-alt" data-bs-toggle="tooltip" title="ti-layers-alt"></i></li>
											<li><i className="ti-key" data-bs-toggle="tooltip" title="ti-key"></i></li>
											<li><i className="ti-image" data-bs-toggle="tooltip" title="ti-image"></i></li>
											<li><i className="ti-heart" data-bs-toggle="tooltip" title="ti-heart"></i></li>
											<li><i className="ti-heart-broken" data-bs-toggle="tooltip" title="ti-heart-broken"></i></li>
											<li><i className="ti-hand-stop" data-bs-toggle="tooltip" title="ti-hand-stop"></i></li>
											<li><i className="ti-hand-open" data-bs-toggle="tooltip" title="ti-hand-open"></i></li>
											<li><i className="ti-hand-drag" data-bs-toggle="tooltip" title="ti-hand-drag"></i></li>
											<li><i className="ti-flag" data-bs-toggle="tooltip" title="ti-flag"></i></li>
											<li><i className="ti-flag-alt" data-bs-toggle="tooltip" title="ti-flag-alt"></i></li>
											<li><i className="ti-flag-alt-2" data-bs-toggle="tooltip" title="ti-flag-alt-2"></i></li>
											<li><i className="ti-eye" data-bs-toggle="tooltip" title="ti-eye"></i></li>
											<li><i className="ti-import" data-bs-toggle="tooltip" title="ti-import"></i></li>
											<li><i className="ti-export" data-bs-toggle="tooltip" title="ti-export"></i></li>
											<li><i className="ti-cup" data-bs-toggle="tooltip" title="ti-cup"></i></li>
											<li><i className="ti-crown" data-bs-toggle="tooltip" title="ti-crown"></i></li>
											<li><i className="ti-comments" data-bs-toggle="tooltip" title="ti-comments"></i></li>
											<li><i className="ti-comment" data-bs-toggle="tooltip" title="ti-comment"></i></li>
											<li><i className="ti-comment-alt" data-bs-toggle="tooltip" title="ti-comment-alt"></i></li>
											<li><i className="ti-thought" data-bs-toggle="tooltip" title="ti-thought"></i></li>
											<li><i className="ti-clip" data-bs-toggle="tooltip" title="ti-clip"></i></li>
											<li><i className="ti-check" data-bs-toggle="tooltip" title="ti-check"></i></li>
											<li><i className="ti-check-box" data-bs-toggle="tooltip" title="ti-check-box"></i></li>
											<li><i className="ti-camera" data-bs-toggle="tooltip" title="ti-camera"></i></li>
											<li><i className="ti-announcement" data-bs-toggle="tooltip" title="ti-announcement"></i></li>
											<li><i className="ti-brush" data-bs-toggle="tooltip" title="ti-brush"></i></li>
											<li><i className="ti-brush-alt" data-bs-toggle="tooltip" title="ti-brush-alt"></i></li>
											<li><i className="ti-palette" data-bs-toggle="tooltip" title="ti-palette"></i></li>
											<li><i className="ti-briefcase" data-bs-toggle="tooltip" title="ti-briefcase"></i></li>
											<li><i className="ti-bolt" data-bs-toggle="tooltip" title="ti-bolt"></i></li>
											<li><i className="ti-bolt-alt" data-bs-toggle="tooltip" title="ti-bolt-alt"></i></li>
											<li><i className="ti-blackboard" data-bs-toggle="tooltip" title="ti-blackboard"></i></li>
											<li><i className="ti-bag" data-bs-toggle="tooltip" title="ti-bag"></i></li>
											<li><i className="ti-world" data-bs-toggle="tooltip" title="ti-world"></i></li>
											<li><i className="ti-wheelchair" data-bs-toggle="tooltip" title="ti-wheelchair"></i></li>
											<li><i className="ti-car" data-bs-toggle="tooltip" title="ti-car"></i></li>
											<li><i className="ti-truck" data-bs-toggle="tooltip" title="ti-truck"></i></li>
											<li><i className="ti-timer" data-bs-toggle="tooltip" title="ti-timer"></i></li>
											<li><i className="ti-ticket" data-bs-toggle="tooltip" title="ti-ticket"></i></li>
											<li><i className="ti-thumb-up" data-bs-toggle="tooltip" title="ti-thumb-up"></i></li>
											<li><i className="ti-thumb-down" data-bs-toggle="tooltip" title="ti-thumb-down"></i></li>
											<li><i className="ti-stats-up" data-bs-toggle="tooltip" title="ti-stats-up"></i></li>
											<li><i className="ti-stats-down" data-bs-toggle="tooltip" title="ti-stats-down"></i></li>
											<li><i className="ti-shine" data-bs-toggle="tooltip" title="ti-shine"></i></li>
											<li><i className="ti-shift-right" data-bs-toggle="tooltip" title="ti-shift-right"></i></li>
											<li><i className="ti-shift-left" data-bs-toggle="tooltip" title="ti-shift-left"></i></li>
											<li><i className="ti-shift-right-alt" data-bs-toggle="tooltip" title="ti-shift-right-alt"></i></li>
											<li><i className="ti-shift-left-alt" data-bs-toggle="tooltip" title="ti-shift-left-alt"></i></li>
											<li><i className="ti-shield" data-bs-toggle="tooltip" title="ti-shield"></i></li>
											<li><i className="ti-notepad" data-bs-toggle="tooltip" title="ti-notepad"></i></li>
											<li><i className="ti-server" data-bs-toggle="tooltip" title="ti-server"></i></li>
											<li><i className="ti-pulse" data-bs-toggle="tooltip" title="ti-pulse"></i></li>
											<li><i className="ti-printer" data-bs-toggle="tooltip" title="ti-printer"></i></li>
											<li><i className="ti-power-off" data-bs-toggle="tooltip" title="ti-power-off"></i></li>
											<li><i className="ti-plug" data-bs-toggle="tooltip" title="ti-plug"></i></li>
											<li><i className="ti-pie-chart" data-bs-toggle="tooltip" title="ti-pie-chart"></i></li>
											<li><i className="ti-panel" data-bs-toggle="tooltip" title="ti-panel"></i></li>
											<li><i className="ti-package" data-bs-toggle="tooltip" title="ti-package"></i></li>
											<li><i className="ti-music" data-bs-toggle="tooltip" title="ti-music"></i></li>
											<li><i className="ti-music-alt" data-bs-toggle="tooltip" title="ti-music-alt"></i></li>
											<li><i className="ti-mouse" data-bs-toggle="tooltip" title="ti-mouse"></i></li>
											<li><i className="ti-mouse-alt" data-bs-toggle="tooltip" title="ti-mouse-alt"></i></li>
											<li><i className="ti-money" data-bs-toggle="tooltip" title="ti-money"></i></li>
											<li><i className="ti-microphone" data-bs-toggle="tooltip" title="ti-microphone"></i></li>
											<li><i className="ti-menu" data-bs-toggle="tooltip" title="ti-menu"></i></li>
											<li><i className="ti-menu-alt" data-bs-toggle="tooltip" title="ti-menu-alt"></i></li>
											<li><i className="ti-map" data-bs-toggle="tooltip" title="ti-map"></i></li>
											<li><i className="ti-map-alt" data-bs-toggle="tooltip" title="ti-map-alt"></i></li>
											<li><i className="ti-location-pin" data-bs-toggle="tooltip" title="ti-location-pin"></i></li>
											<li><i className="ti-light-bulb" data-bs-toggle="tooltip" title="ti-light-bulb"></i></li>
											<li><i className="ti-info" data-bs-toggle="tooltip" title="ti-info"></i></li>
											<li><i className="ti-infinite" data-bs-toggle="tooltip" title="ti-infinite"></i></li>
											<li><i className="ti-id-badge" data-bs-toggle="tooltip" title="ti-id-badge"></i></li>
											<li><i className="ti-hummer" data-bs-toggle="tooltip" title="ti-hummer"></i></li>
											<li><i className="ti-home" data-bs-toggle="tooltip" title="ti-home"></i></li>
											<li><i className="ti-help" data-bs-toggle="tooltip" title="ti-help"></i></li>
											<li><i className="ti-headphone" data-bs-toggle="tooltip" title="ti-headphone"></i></li>
											<li><i className="ti-harddrives" data-bs-toggle="tooltip" title="ti-harddrives"></i></li>
											<li><i className="ti-harddrive" data-bs-toggle="tooltip" title="ti-harddrive"></i></li>
											<li><i className="ti-gift" data-bs-toggle="tooltip" title="ti-gift"></i></li>
											<li><i className="ti-game" data-bs-toggle="tooltip" title="ti-game"></i></li>
											<li><i className="ti-filter" data-bs-toggle="tooltip" title="ti-filter"></i></li>
											<li><i className="ti-files" data-bs-toggle="tooltip" title="ti-files"></i></li>
											<li><i className="ti-file" data-bs-toggle="tooltip" title="ti-file"></i></li>
											<li><i className="ti-zip" data-bs-toggle="tooltip" title="ti-zip"></i></li>
											<li><i className="ti-folder" data-bs-toggle="tooltip" title="ti-folder"></i></li>
											<li><i className="ti-envelope" data-bs-toggle="tooltip" title="ti-envelope"></i></li>
											<li><i className="ti-dashboard" data-bs-toggle="tooltip" title="ti-dashboard"></i></li>
											<li><i className="ti-cloud" data-bs-toggle="tooltip" title="ti-cloud"></i></li>
											<li><i className="ti-cloud-up" data-bs-toggle="tooltip" title="ti-cloud-up"></i></li>
											<li><i className="ti-cloud-down" data-bs-toggle="tooltip" title="ti-cloud-down"></i></li>
											<li><i className="ti-clipboard" data-bs-toggle="tooltip" title="ti-clipboard"></i></li>
											<li><i className="ti-calendar" data-bs-toggle="tooltip" title="ti-calendar"></i></li>
											<li><i className="ti-book" data-bs-toggle="tooltip" title="ti-book"></i></li>
											<li><i className="ti-bell" data-bs-toggle="tooltip" title="ti-bell"></i></li>
											<li><i className="ti-basketball" data-bs-toggle="tooltip" title="ti-basketball"></i></li>
											<li><i className="ti-bar-chart" data-bs-toggle="tooltip" title="ti-bar-chart"></i></li>
											<li><i className="ti-bar-chart-alt" data-bs-toggle="tooltip" title="ti-bar-chart-alt"></i></li>
											<li><i className="ti-archive" data-bs-toggle="tooltip" title="ti-archive"></i></li>
											<li><i className="ti-anchor" data-bs-toggle="tooltip" title="ti-anchor"></i></li>
											<li><i className="ti-alert" data-bs-toggle="tooltip" title="ti-alert"></i></li>
											<li><i className="ti-alarm-clock" data-bs-toggle="tooltip" title="ti-alarm-clock"></i></li>
											<li><i className="ti-agenda" data-bs-toggle="tooltip" title="ti-agenda"></i></li>
											<li><i className="ti-write" data-bs-toggle="tooltip" title="ti-write"></i></li>
											<li><i className="ti-wallet" data-bs-toggle="tooltip" title="ti-wallet"></i></li>
											<li><i className="ti-video-clapper" data-bs-toggle="tooltip" title="ti-video-clapper"></i></li>
											<li><i className="ti-video-camera" data-bs-toggle="tooltip" title="ti-video-camera"></i></li>
											<li><i className="ti-vector" data-bs-toggle="tooltip" title="ti-vector"></i></li>
											<li><i className="ti-support" data-bs-toggle="tooltip" title="ti-support"></i></li>
											<li><i className="ti-stamp" data-bs-toggle="tooltip" title="ti-stamp"></i></li>
											<li><i className="ti-slice" data-bs-toggle="tooltip" title="ti-slice"></i></li>
											<li><i className="ti-shortcode" data-bs-toggle="tooltip" title="ti-shortcode"></i></li>
											<li><i className="ti-receipt" data-bs-toggle="tooltip" title="ti-receipt"></i></li>
											<li><i className="ti-pin2" data-bs-toggle="tooltip" title="ti-pin2"></i></li>
											<li><i className="ti-pin-alt" data-bs-toggle="tooltip" title="ti-pin-alt"></i></li>
											<li><i className="ti-pencil-alt2" data-bs-toggle="tooltip" title="ti-pencil-alt2"></i></li>
											<li><i className="ti-eraser" data-bs-toggle="tooltip" title="ti-eraser"></i></li>
											<li><i className="ti-more" data-bs-toggle="tooltip" title="ti-more"></i></li>
											<li><i className="ti-more-alt" data-bs-toggle="tooltip" title="ti-more-alt"></i></li>
											<li><i className="ti-microphone-alt" data-bs-toggle="tooltip" title="ti-microphone-alt"></i></li>
											<li><i className="ti-magnet" data-bs-toggle="tooltip" title="ti-magnet"></i></li>
											<li><i className="ti-line-double" data-bs-toggle="tooltip" title="ti-line-double"></i></li>
											<li><i className="ti-line-dotted" data-bs-toggle="tooltip" title="ti-line-dotted"></i></li>
											<li><i className="ti-line-dashed" data-bs-toggle="tooltip" title="ti-line-dashed"></i></li>
											<li><i className="ti-ink-pen" data-bs-toggle="tooltip" title="ti-ink-pen"></i></li>
											<li><i className="ti-info-alt" data-bs-toggle="tooltip" title="ti-info-alt"></i></li>
											<li><i className="ti-help-alt" data-bs-toggle="tooltip" title="ti-help-alt"></i></li>
											<li><i className="ti-headphone-alt" data-bs-toggle="tooltip" title="ti-headphone-alt"></i></li>
											<li><i className="ti-gallery" data-bs-toggle="tooltip" title="ti-gallery"></i></li>
											<li><i className="ti-face-smile" data-bs-toggle="tooltip" title="ti-face-smile"></i></li>
											<li><i className="ti-face-sad" data-bs-toggle="tooltip" title="ti-face-sad"></i></li>
											<li><i className="ti-credit-card" data-bs-toggle="tooltip" title="ti-credit-card"></i></li>
											<li><i className="ti-comments-smiley" data-bs-toggle="tooltip" title="ti-comments-smiley"></i></li>
											<li><i className="ti-time" data-bs-toggle="tooltip" title="ti-time"></i></li>
											<li><i className="ti-share" data-bs-toggle="tooltip" title="ti-share"></i></li>
											<li><i className="ti-share-alt" data-bs-toggle="tooltip" title="ti-share-alt"></i></li>
											<li><i className="ti-rocket" data-bs-toggle="tooltip" title="ti-rocket"></i></li>
											<li><i className="ti-new-window" data-bs-toggle="tooltip" title="ti-new-window"></i></li>
											<li><i className="ti-rss" data-bs-toggle="tooltip" title="ti-rss"></i></li>
											<li><i className="ti-rss-alt" data-bs-toggle="tooltip" title="ti-rss-alt"></i></li>
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

export default IconThemify