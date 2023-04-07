import React from 'react';
import { Link } from 'react-router-dom';

const IconSimpleline = () => {
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
								<h3 className="page-title">Simpleline Icon</h3>
								<ul className="breadcrumb">
									<li className="breadcrumb-item"><Link to="/home">Dashboard</Link></li>
									<li className="breadcrumb-item active">Simpleline Icon</li>
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
									<div className="card-title">Simpleline Icons</div>
								</div>
								<div className="card-body">
									<div className="icons-items">
										<ul className="icons-list">
											<li><i className="si si-user" data-bs-toggle="tooltip" title="si-user"></i></li>
											<li><i className="si si-people" data-bs-toggle="tooltip" title="si-people"></i></li>
											<li><i className="si si-user-female" data-bs-toggle="tooltip" title="si-user-female"></i></li>
											<li><i className="si si-user-follow" data-bs-toggle="tooltip" title="si-user-follow"></i></li>
											<li><i className="si si-user-following" data-bs-toggle="tooltip" title="si-user-following"></i></li>
											<li><i className="si si-user-unfollow" data-bs-toggle="tooltip" title="si-user-unfollow"></i></li>
											<li><i className="si si-login" data-bs-toggle="tooltip" title="si-login"></i></li>
											<li><i className="si si-logout" data-bs-toggle="tooltip" title="si-logout"></i></li>
											<li><i className="si si-emotsmile" data-bs-toggle="tooltip" title="si-emotsmile"></i></li>
											<li><i className="si si-phone" data-bs-toggle="tooltip" title="si-phone"></i></li>
											<li><i className="si si-call-end" data-bs-toggle="tooltip" title="si-call-end"></i></li>
											<li><i className="si si-call-in" data-bs-toggle="tooltip" title="si-call-in"></i></li>
											<li><i className="si si-call-out" data-bs-toggle="tooltip" title="si-call-out"></i></li>
											<li><i className="si si-map" data-bs-toggle="tooltip" title="si-map"></i></li>
											<li><i className="si si-location-pin" data-bs-toggle="tooltip" title="si-location-pin"></i></li>
											<li><i className="si si-direction" data-bs-toggle="tooltip" title="si-direction"></i></li>
											<li><i className="si si-directions" data-bs-toggle="tooltip" title="si-directions"></i></li>
											<li><i className="si si-compass" data-bs-toggle="tooltip" title="si-compass"></i></li>
											<li><i className="si si-layers" data-bs-toggle="tooltip" title="si-layers"></i></li>
											<li><i className="si si-menu" data-bs-toggle="tooltip" title="si-menu"></i></li>
											<li><i className="si si-list" data-bs-toggle="tooltip" title="si-list"></i></li>
											<li><i className="si si-options-vertical" data-bs-toggle="tooltip" title="si-options-vertical"></i></li>
											<li><i className="si si-options" data-bs-toggle="tooltip" title="si-options"></i></li>
											<li><i className="si si-arrow-down" data-bs-toggle="tooltip" title="si-arrow-down"></i></li>
											<li><i className="si si-arrow-left" data-bs-toggle="tooltip" title="si-arrow-left"></i></li>
											<li><i className="si si-arrow-right" data-bs-toggle="tooltip" title="si-arrow-right"></i></li>
											<li><i className="si si-arrow-up" data-bs-toggle="tooltip" title="si-arrow-up"></i></li>
											<li><i className="si si-arrow-up-circle" data-bs-toggle="tooltip" title="si-arrow-up-circle"></i></li>
											<li><i className="si si-arrow-left-circle" data-bs-toggle="tooltip" title="si-arrow-left-circle"></i></li>
											<li><i className="si si-arrow-right-circle" data-bs-toggle="tooltip" title="si-arrow-right-circle"></i></li>
											<li><i className="si si-arrow-down-circle" data-bs-toggle="tooltip" title="si-arrow-down-circle"></i></li>
											<li><i className="si si-check" data-bs-toggle="tooltip" title="si-check"></i></li>
											<li><i className="si si-clock" data-bs-toggle="tooltip" title="si-clock"></i></li>
											<li><i className="si si-plus" data-bs-toggle="tooltip" title="si-plus"></i></li>
											<li><i className="si si-minus" data-bs-toggle="tooltip" title="si-minus"></i></li>
											<li><i className="si si-close" data-bs-toggle="tooltip" title="si-close"></i></li>
											<li><i className="si si-event" data-bs-toggle="tooltip" title="si-event"></i></li>
											<li><i className="si si-exclamation" data-bs-toggle="tooltip" title="si-exclamation"></i></li>
											<li><i className="si si-organization" data-bs-toggle="tooltip" title="si-organization"></i></li>
											<li><i className="si si-trophy" data-bs-toggle="tooltip" title="si-trophy"></i></li>
											<li><i className="si si-screen-smartphone" data-bs-toggle="tooltip" title="si-screen-smartphone"></i></li>
											<li><i className="si si-screen-desktop" data-bs-toggle="tooltip" title="si-screen-desktop"></i></li>
											<li><i className="si si-plane" data-bs-toggle="tooltip" title="si-plane"></i></li>
											<li><i className="si si-notebook" data-bs-toggle="tooltip" title="si-notebook"></i></li>
											<li><i className="si si-mustache" data-bs-toggle="tooltip" title="si-mustache"></i></li>
											<li><i className="si si-mouse" data-bs-toggle="tooltip" title="si-mouse"></i></li>
											<li><i className="si si-magnet" data-bs-toggle="tooltip" title="si-magnet"></i></li>
											<li><i className="si si-energy" data-bs-toggle="tooltip" title="si-energy"></i></li>
											<li><i className="si si-disc" data-bs-toggle="tooltip" title="si-disc"></i></li>
											<li><i className="si si-cursor" data-bs-toggle="tooltip" title="si-cursor"></i></li>
											<li><i className="si si-cursor-move" data-bs-toggle="tooltip" title="si-cursor-move"></i></li>
											<li><i className="si si-crop" data-bs-toggle="tooltip" title="si-crop"></i></li>
											<li><i className="si si-chemistry" data-bs-toggle="tooltip" title="si-chemistry"></i></li>
											<li><i className="si si-speedometer" data-bs-toggle="tooltip" title="si-speedometer"></i></li>
											<li><i className="si si-shield" data-bs-toggle="tooltip" title="si-shield"></i></li>
											<li><i className="si si-screen-tablet" data-bs-toggle="tooltip" title="si-screen-tablet"></i></li>
											<li><i className="si si-magic-wand" data-bs-toggle="tooltip" title="si-magic-wand"></i></li>
											<li><i className="si si-hourglass" data-bs-toggle="tooltip" title="si-hourglass"></i></li>
											<li><i className="si si-graduation" data-bs-toggle="tooltip" title="si-graduation"></i></li>
											<li><i className="si si-ghost" data-bs-toggle="tooltip" title="si-ghost"></i></li>
											<li><i className="si si-game-controller" data-bs-toggle="tooltip" title="si-game-controller"></i></li>
											<li><i className="si si-fire" data-bs-toggle="tooltip" title="si-fire"></i></li>
											<li><i className="si si-eyeglass" data-bs-toggle="tooltip" title="si-eyeglass"></i></li>
											<li><i className="si si-envelope-open" data-bs-toggle="tooltip" title="si-envelope-open"></i></li>
											<li><i className="si si-envelope-letter" data-bs-toggle="tooltip" title="si-envelope-letter"></i></li>
											<li><i className="si si-bell" data-bs-toggle="tooltip" title="si-bell"></i></li>
											<li><i className="si si-badge" data-bs-toggle="tooltip" title="si-badge"></i></li>
											<li><i className="si si-anchor" data-bs-toggle="tooltip" title="si-anchor"></i></li>
											<li><i className="si si-wallet" data-bs-toggle="tooltip" title="si-wallet"></i></li>
											<li><i className="si si-vector" data-bs-toggle="tooltip" title="si-vector"></i></li>
											<li><i className="si si-speech" data-bs-toggle="tooltip" title="si-speech"></i></li>
											<li><i className="si si-puzzle" data-bs-toggle="tooltip" title="si-puzzle"></i></li>
											<li><i className="si si-printer" data-bs-toggle="tooltip" title="si-printer"></i></li>
											<li><i className="si si-present" data-bs-toggle="tooltip" title="si-present"></i></li>
											<li><i className="si si-playlist" data-bs-toggle="tooltip" title="si-playlist"></i></li>
											<li><i className="si si-pin" data-bs-toggle="tooltip" title="si-pin"></i></li>
											<li><i className="si si-picture" data-bs-toggle="tooltip" title="si-picture"></i></li>
											<li><i className="si si-handbag" data-bs-toggle="tooltip" title="si-handbag"></i></li>
											<li><i className="si si-globe-alt" data-bs-toggle="tooltip" title="si-globe-alt"></i></li>
											<li><i className="si si-globe" data-bs-toggle="tooltip" title="si-globe"></i></li>
											<li><i className="si si-folder-alt" data-bs-toggle="tooltip" title="si-folder-alt"></i></li>
											<li><i className="si si-folder" data-bs-toggle="tooltip" title="si-folder"></i></li>
											<li><i className="si si-film" data-bs-toggle="tooltip" title="si-film"></i></li>
											<li><i className="si si-feed" data-bs-toggle="tooltip" title="si-feed"></i></li>
											<li><i className="si si-drop" data-bs-toggle="tooltip" title="si-drop"></i></li>
											<li><i className="si si-drawer" data-bs-toggle="tooltip" title="si-drawer"></i></li>
											<li><i className="si si-docs" data-bs-toggle="tooltip" title="si-docs"></i></li>
											<li><i className="si si-doc" data-bs-toggle="tooltip" title="si-doc"></i></li>
											<li><i className="si si-diamond" data-bs-toggle="tooltip" title="si-diamond"></i></li>
											<li><i className="si si-cup" data-bs-toggle="tooltip" title="si-cup"></i></li>
											<li><i className="si si-calculator" data-bs-toggle="tooltip" title="si-calculator"></i></li>
											<li><i className="si si-bubbles" data-bs-toggle="tooltip" title="si-bubbles"></i></li>
											<li><i className="si si-briefcase" data-bs-toggle="tooltip" title="si-briefcase"></i></li>
											<li><i className="si si-book-open" data-bs-toggle="tooltip" title="si-book-open"></i></li>
											<li><i className="si si-basket-loaded" data-bs-toggle="tooltip" title="si-basket-loaded"></i></li>
											<li><i className="si si-basket" data-bs-toggle="tooltip" title="si-basket"></i></li>
											<li><i className="si si-bag" data-bs-toggle="tooltip" title="si-bag"></i></li>
											<li><i className="si si-action-undo" data-bs-toggle="tooltip" title="si-action-undo"></i></li>
											<li><i className="si si-action-redo" data-bs-toggle="tooltip" title="si-action-redo"></i></li>
											<li><i className="si si-wrench" data-bs-toggle="tooltip" title="si-wrench"></i></li>
											<li><i className="si si-umbrella" data-bs-toggle="tooltip" title="si-umbrella"></i></li>
											<li><i className="si si-trash" data-bs-toggle="tooltip" title="si-trash"></i></li>
											<li><i className="si si-tag" data-bs-toggle="tooltip" title="si-tag"></i></li>
											<li><i className="si si-support" data-bs-toggle="tooltip" title="si-support"></i></li>
											<li><i className="si si-frame" data-bs-toggle="tooltip" title="si-frame"></i></li>
											<li><i className="si si-size-fullscreen" data-bs-toggle="tooltip" title="si-size-fullscreen"></i></li>
											<li><i className="si si-size-actual" data-bs-toggle="tooltip" title="si-size-actual"></i></li>
											<li><i className="si si-shuffle" data-bs-toggle="tooltip" title="si-shuffle"></i></li>
											<li><i className="si si-share-alt" data-bs-toggle="tooltip" title="si-share-alt"></i></li>
											<li><i className="si si-share" data-bs-toggle="tooltip" title="si-share"></i></li>
											<li><i className="si si-rocket" data-bs-toggle="tooltip" title="si-rocket"></i></li>
											<li><i className="si si-question" data-bs-toggle="tooltip" title="si-question"></i></li>
											<li><i className="si si-pie-chart" data-bs-toggle="tooltip" title="si-pie-chart"></i></li>
											<li><i className="si si-pencil" data-bs-toggle="tooltip" title="si-pencil"></i></li>
											<li><i className="si si-note" data-bs-toggle="tooltip" title="si-note"></i></li>
											<li><i className="si si-loop" data-bs-toggle="tooltip" title="si-loop"></i></li>
											<li><i className="si si-home" data-bs-toggle="tooltip" title="si-home"></i></li>
											<li><i className="si si-grid" data-bs-toggle="tooltip" title="si-grid"></i></li>
											<li><i className="si si-graph" data-bs-toggle="tooltip" title="si-graph"></i></li>
											<li><i className="si si-microphone" data-bs-toggle="tooltip" title="si-microphone"></i></li>
											<li><i className="si si-music-tone-alt" data-bs-toggle="tooltip" title="si-music-tone-alt"></i></li>
											<li><i className="si si-music-tone" data-bs-toggle="tooltip" title="si-music-tone"></i></li>
											<li><i className="si si-earphones-alt" data-bs-toggle="tooltip" title="si-earphones-alt"></i></li>
											<li><i className="si si-earphones" data-bs-toggle="tooltip" title="si-earphones"></i></li>
											<li><i className="si si-equalizer" data-bs-toggle="tooltip" title="si-equalizer"></i></li>
											<li><i className="si si-like" data-bs-toggle="tooltip" title="si-like"></i></li>
											<li><i className="si si-dislike" data-bs-toggle="tooltip" title="si-dislike"></i></li>
											<li><i className="si si-control-start" data-bs-toggle="tooltip" title="si-control-start"></i></li>
											<li><i className="si si-control-rewind" data-bs-toggle="tooltip" title="si-control-rewind"></i></li>
											<li><i className="si si-control-play" data-bs-toggle="tooltip" title="si-control-play"></i></li>
											<li><i className="si si-control-pause" data-bs-toggle="tooltip" title="si-control-pause"></i></li>
											<li><i className="si si-control-forward" data-bs-toggle="tooltip" title="si-control-forward"></i></li>
											<li><i className="si si-control-end" data-bs-toggle="tooltip" title="si-control-end"></i></li>
											<li><i className="si si-volume-1" data-bs-toggle="tooltip" title="si-volume-1"></i></li>
											<li><i className="si si-volume-2" data-bs-toggle="tooltip" title="si-volume-2"></i></li>
											<li><i className="si si-volume-off" data-bs-toggle="tooltip" title="si-volume-off"></i></li>
											<li><i className="si si-calendar" data-bs-toggle="tooltip" title="si-calendar"></i></li>
											<li><i className="si si-bulb" data-bs-toggle="tooltip" title="si-bulb"></i></li>
											<li><i className="si si-chart" data-bs-toggle="tooltip" title="si-chart"></i></li>
											<li><i className="si si-ban" data-bs-toggle="tooltip" title="si-ban"></i></li>
											<li><i className="si si-bubble" data-bs-toggle="tooltip" title="si-bubble"></i></li>
											<li><i className="si si-camrecorder" data-bs-toggle="tooltip" title="si-camrecorder"></i></li>
											<li><i className="si si-camera" data-bs-toggle="tooltip" title="si-camera"></i></li>
											<li><i className="si si-cloud-download" data-bs-toggle="tooltip" title="si-cloud-download"></i></li>
											<li><i className="si si-cloud-upload" data-bs-toggle="tooltip" title="si-cloud-upload"></i></li>
											<li><i className="si si-envelope" data-bs-toggle="tooltip" title="si-envelope"></i></li>
											<li><i className="si si-eye" data-bs-toggle="tooltip" title="si-eye"></i></li>
											<li><i className="si si-flag" data-bs-toggle="tooltip" title="si-flag"></i></li>
											<li><i className="si si-heart" data-bs-toggle="tooltip" title="si-heart"></i></li>
											<li><i className="si si-info" data-bs-toggle="tooltip" title="si-info"></i></li>
											<li><i className="si si-key" data-bs-toggle="tooltip" title="si-key"></i></li>
											<li><i className="si si-link" data-bs-toggle="tooltip" title="si-link"></i></li>
											<li><i className="si si-lock" data-bs-toggle="tooltip" title="si-lock"></i></li>
											<li><i className="si si-lock-open" data-bs-toggle="tooltip" title="si-lock-open"></i></li>
											<li><i className="si si-magnifier" data-bs-toggle="tooltip" title="si-magnifier"></i></li>
											<li><i className="si si-magnifier-add" data-bs-toggle="tooltip" title="si-magnifier-add"></i></li>
											<li><i className="si si-magnifier-remove" data-bs-toggle="tooltip" title="si-magnifier-remove"></i></li>
											<li><i className="si si-paper-clip" data-bs-toggle="tooltip" title="si-paper-clip"></i></li>
											<li><i className="si si-paper-plane" data-bs-toggle="tooltip" title="si-paper-plane"></i></li>
											<li><i className="si si-power" data-bs-toggle="tooltip" title="si-power"></i></li>
											<li><i className="si si-refresh" data-bs-toggle="tooltip" title="si-refresh"></i></li>
											<li><i className="si si-reload" data-bs-toggle="tooltip" title="si-reload"></i></li>
											<li><i className="si si-settings" data-bs-toggle="tooltip" title="si-settings"></i></li>
											<li><i className="si si-star" data-bs-toggle="tooltip" title="si-star"></i></li>
											<li><i className="si si-symbol-female" data-bs-toggle="tooltip" title="si-symbol-female"></i></li>
											<li><i className="si si-symbol-male" data-bs-toggle="tooltip" title="si-symbol-male"></i></li>
											<li><i className="si si-target" data-bs-toggle="tooltip" title="si-target"></i></li>
											<li><i className="si si-credit-card" data-bs-toggle="tooltip" title="si-credit-card"></i></li>
											<li><i className="si si-paypal" data-bs-toggle="tooltip" title="si-paypal"></i></li>
											<li><i className="si si-social-tumblr" data-bs-toggle="tooltip" title="si-social-tumblr"></i></li>
											<li><i className="si si-social-twitter" data-bs-toggle="tooltip" title="si-social-twitter"></i></li>
											<li><i className="si si-social-facebook" data-bs-toggle="tooltip" title="si-social-facebook"></i></li>
											<li><i className="si si-social-instagram" data-bs-toggle="tooltip" title="si-social-instagram"></i></li>
											<li><i className="si si-social-linkedin" data-bs-toggle="tooltip" title="si-social-linkedin"></i></li>
											<li><i className="si si-social-pinterest" data-bs-toggle="tooltip" title="si-social-pinterest"></i></li>
											<li><i className="si si-social-github" data-bs-toggle="tooltip" title="si-social-github"></i></li>
											<li><i className="si si-social-google" data-bs-toggle="tooltip" title="si-social-google"></i></li>
											<li><i className="si si-social-reddit" data-bs-toggle="tooltip" title="si-social-reddit"></i></li>
											<li><i className="si si-social-skype" data-bs-toggle="tooltip" title="si-social-skype"></i></li>
											<li><i className="si si-social-dribbble" data-bs-toggle="tooltip" title="si-social-dribbble"></i></li>
											<li><i className="si si-social-behance" data-bs-toggle="tooltip" title="si-social-behance"></i></li>
											<li><i className="si si-social-foursqare" data-bs-toggle="tooltip" title="si-social-foursqare"></i></li>
											<li><i className="si si-social-soundcloud" data-bs-toggle="tooltip" title="si-social-soundcloud"></i></li>
											<li><i className="si si-social-spotify" data-bs-toggle="tooltip" title="si-social-spotify"></i></li>
											<li><i className="si si-social-stumbleupon" data-bs-toggle="tooltip" title="si-social-stumbleupon"></i></li>
											<li><i className="si si-social-youtube" data-bs-toggle="tooltip" title="si-social-youtube"></i></li>
											<li><i className="si si-social-dropbox" data-bs-toggle="tooltip" title="si-social-dropbox"></i></li>
											<li><i className="si si-social-vkontakte" data-bs-toggle="tooltip" title="si-social-vkontakte"></i></li>
											<li><i className="si si-social-steam" data-bs-toggle="tooltip" title="si-social-steam"></i></li>
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

export default IconSimpleline