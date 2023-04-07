import React from 'react';
import { Link } from 'react-router-dom';

const IconFlag = () => {
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
								<h3 className="page-title">Flag Icon</h3>
								<ul className="breadcrumb">
									<li className="breadcrumb-item"><Link to="/home">Dashboard</Link></li>
									<li className="breadcrumb-item active">Flag Icon</li>
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
									<div className="card-title">Flag Icons</div>
								</div>
								<div className="card-body">
									<div className="icons-items">
										<ul className="icons-list">
											<li><i className="flag flag-ad" data-bs-toggle="tooltip" title="flag flag-ad"></i></li>
											<li><i className="flag flag-ae" data-bs-toggle="tooltip" title="flag flag-ae"></i></li>
											<li><i className="flag flag-af" data-bs-toggle="tooltip" title="flag flag-af"></i></li>
											<li><i className="flag flag-ag" data-bs-toggle="tooltip" title="flag flag-ag"></i></li>
											<li><i className="flag flag-ai" data-bs-toggle="tooltip" title="flag flag-ai"></i></li>
											<li><i className="flag flag-al" data-bs-toggle="tooltip" title="flag flag-al"></i></li>
											<li><i className="flag flag-am" data-bs-toggle="tooltip" title="flag flag-am"></i></li>
											<li><i className="flag flag-ao" data-bs-toggle="tooltip" title="flag flag-ao"></i></li>
											<li><i className="flag flag-ar" data-bs-toggle="tooltip" title="flag flag-ar"></i></li>
											<li><i className="flag flag-as" data-bs-toggle="tooltip" title="flag flag-as"></i></li>
											<li><i className="flag flag-at" data-bs-toggle="tooltip" title="flag flag-at"></i></li>
											<li><i className="flag flag-au" data-bs-toggle="tooltip" title="flag flag-au"></i></li>
											<li><i className="flag flag-aw" data-bs-toggle="tooltip" title="flag flag-aw"></i></li>
											<li><i className="flag flag-ax" data-bs-toggle="tooltip" title="flag flag-ax"></i></li>
											<li><i className="flag flag-az" data-bs-toggle="tooltip" title="flag flag-az"></i></li>
											<li><i className="flag flag-ba" data-bs-toggle="tooltip" title="flag flag-ba"></i></li>
											<li><i className="flag flag-bb" data-bs-toggle="tooltip" title="flag flag-bb"></i></li>
											<li><i className="flag flag-bd" data-bs-toggle="tooltip" title="flag flag-bd"></i></li>
											<li><i className="flag flag-be" data-bs-toggle="tooltip" title="flag flag-be"></i></li>
											<li><i className="flag flag-bf" data-bs-toggle="tooltip" title="flag flag-bf"></i></li>
											<li><i className="flag flag-bg" data-bs-toggle="tooltip" title="flag flag-bg"></i></li>
											<li><i className="flag flag-bh" data-bs-toggle="tooltip" title="flag flag-bh"></i></li>
											<li><i className="flag flag-bi" data-bs-toggle="tooltip" title="flag flag-bi"></i></li>
											<li><i className="flag flag-bj" data-bs-toggle="tooltip" title="flag flag-bj"></i></li>
											<li><i className="flag flag-bl" data-bs-toggle="tooltip" title="flag flag-bl"></i></li>
											<li><i className="flag flag-bm" data-bs-toggle="tooltip" title="flag flag-bm"></i></li>
											<li><i className="flag flag-bn" data-bs-toggle="tooltip" title="flag flag-bn"></i></li>
											<li><i className="flag flag-bo" data-bs-toggle="tooltip" title="flag flag-bo"></i></li>
											<li><i className="flag flag-bq" data-bs-toggle="tooltip" title="flag flag-bq"></i></li>
											<li><i className="flag flag-br" data-bs-toggle="tooltip" title="flag flag-br"></i></li>
											<li><i className="flag flag-bs" data-bs-toggle="tooltip" title="flag flag-bs"></i></li>
											<li><i className="flag flag-bt" data-bs-toggle="tooltip" title="flag flag-bt"></i></li>
											<li><i className="flag flag-bv" data-bs-toggle="tooltip" title="flag flag-bv"></i></li>
											<li><i className="flag flag-bw" data-bs-toggle="tooltip" title="flag flag-bw"></i></li>
											<li><i className="flag flag-by" data-bs-toggle="tooltip" title="flag flag-by"></i></li>
											<li><i className="flag flag-bz" data-bs-toggle="tooltip" title="flag flag-bz"></i></li>
											<li><i className="flag flag-ca" data-bs-toggle="tooltip" title="flag flag-ca"></i></li>
											<li><i className="flag flag-cc" data-bs-toggle="tooltip" title="flag flag-cc"></i></li>
											<li><i className="flag flag-cd" data-bs-toggle="tooltip" title="flag flag-cd"></i></li>
											<li><i className="flag flag-cf" data-bs-toggle="tooltip" title="flag flag-cf"></i></li>
											<li><i className="flag flag-cg" data-bs-toggle="tooltip" title="flag flag-cg"></i></li>
											<li><i className="flag flag-ch" data-bs-toggle="tooltip" title="flag flag-ch"></i></li>
											<li><i className="flag flag-ci" data-bs-toggle="tooltip" title="flag flag-ci"></i></li>
											<li><i className="flag flag-ck" data-bs-toggle="tooltip" title="flag flag-ck"></i></li>
											<li><i className="flag flag-cl" data-bs-toggle="tooltip" title="flag flag-cl"></i></li>
											<li><i className="flag flag-cm" data-bs-toggle="tooltip" title="flag flag-cm"></i></li>
											<li><i className="flag flag-cn" data-bs-toggle="tooltip" title="flag flag-cn"></i></li>
											<li><i className="flag flag-co" data-bs-toggle="tooltip" title="flag flag-co"></i></li>
											<li><i className="flag flag-cr" data-bs-toggle="tooltip" title="flag flag-cr"></i></li>
											<li><i className="flag flag-cu" data-bs-toggle="tooltip" title="flag flag-cu"></i></li>
											<li><i className="flag flag-cv" data-bs-toggle="tooltip" title="flag flag-cv"></i></li>
											<li><i className="flag flag-cw" data-bs-toggle="tooltip" title="flag flag-cw"></i></li>
											<li><i className="flag flag-cx" data-bs-toggle="tooltip" title="flag flag-cx"></i></li>
											<li><i className="flag flag-cy" data-bs-toggle="tooltip" title="flag flag-cy"></i></li>
											<li><i className="flag flag-cz" data-bs-toggle="tooltip" title="flag flag-cz"></i></li>
											<li><i className="flag flag-de" data-bs-toggle="tooltip" title="flag flag-de"></i></li>
											<li><i className="flag flag-dj" data-bs-toggle="tooltip" title="flag flag-dj"></i></li>
											<li><i className="flag flag-dk" data-bs-toggle="tooltip" title="flag flag-dk"></i></li>
											<li><i className="flag flag-dm" data-bs-toggle="tooltip" title="flag flag-dm"></i></li>
											<li><i className="flag flag-do" data-bs-toggle="tooltip" title="flag flag-do"></i></li>
											<li><i className="flag flag-dz" data-bs-toggle="tooltip" title="flag flag-dz"></i></li>
											<li><i className="flag flag-ec" data-bs-toggle="tooltip" title="flag flag-ec"></i></li>
											<li><i className="flag flag-ee" data-bs-toggle="tooltip" title="flag flag-ee"></i></li>
											<li><i className="flag flag-eg" data-bs-toggle="tooltip" title="flag flag-eg"></i></li>
											<li><i className="flag flag-er" data-bs-toggle="tooltip" title="flag flag-er"></i></li>
											<li><i className="flag flag-es" data-bs-toggle="tooltip" title="flag flag-es"></i></li>
											<li><i className="flag flag-et" data-bs-toggle="tooltip" title="flag flag-et"></i></li>
											<li><i className="flag flag-fi" data-bs-toggle="tooltip" title="flag flag-fi"></i></li>
											<li><i className="flag flag-fj" data-bs-toggle="tooltip" title="flag flag-fj"></i></li>
											<li><i className="flag flag-fk" data-bs-toggle="tooltip" title="flag flag-fk"></i></li>
											<li><i className="flag flag-fm" data-bs-toggle="tooltip" title="flag flag-fm"></i></li>
											<li><i className="flag flag-fo" data-bs-toggle="tooltip" title="flag flag-fo"></i></li>
											<li><i className="flag flag-fr" data-bs-toggle="tooltip" title="flag flag-fr"></i></li>
											<li><i className="flag flag-ga" data-bs-toggle="tooltip" title="flag flag-ga"></i></li>
											<li><i className="flag flag-gb" data-bs-toggle="tooltip" title="flag flag-gb"></i></li>
											<li><i className="flag flag-gd" data-bs-toggle="tooltip" title="flag flag-gd"></i></li>
											<li><i className="flag flag-ge" data-bs-toggle="tooltip" title="flag flag-ge"></i></li>
											<li><i className="flag flag-gf" data-bs-toggle="tooltip" title="flag flag-gf"></i></li>
											<li><i className="flag flag-gg" data-bs-toggle="tooltip" title="flag flag-gg"></i></li>
											<li><i className="flag flag-gh" data-bs-toggle="tooltip" title="flag flag-gh"></i></li>
											<li><i className="flag flag-gi" data-bs-toggle="tooltip" title="flag flag-gi"></i></li>
											<li><i className="flag flag-gl" data-bs-toggle="tooltip" title="flag flag-gl"></i></li>
											<li><i className="flag flag-gm" data-bs-toggle="tooltip" title="flag flag-gm"></i></li>
											<li><i className="flag flag-gn" data-bs-toggle="tooltip" title="flag flag-gn"></i></li>
											<li><i className="flag flag-gp" data-bs-toggle="tooltip" title="flag flag-gp"></i></li>
											<li><i className="flag flag-gq" data-bs-toggle="tooltip" title="flag flag-gq"></i></li>
											<li><i className="flag flag-gr" data-bs-toggle="tooltip" title="flag flag-gr"></i></li>
											<li><i className="flag flag-gs" data-bs-toggle="tooltip" title="flag flag-gs"></i></li>
											<li><i className="flag flag-gt" data-bs-toggle="tooltip" title="flag flag-gt"></i></li>
											<li><i className="flag flag-gu" data-bs-toggle="tooltip" title="flag flag-gu"></i></li>
											<li><i className="flag flag-gw" data-bs-toggle="tooltip" title="flag flag-gw"></i></li>
											<li><i className="flag flag-gy" data-bs-toggle="tooltip" title="flag flag-gy"></i></li>
											<li><i className="flag flag-hk" data-bs-toggle="tooltip" title="flag flag-hk"></i></li>
											<li><i className="flag flag-hn" data-bs-toggle="tooltip" title="flag flag-hn"></i></li>
											<li><i className="flag flag-hr" data-bs-toggle="tooltip" title="flag flag-hr"></i></li>
											<li><i className="flag flag-ht" data-bs-toggle="tooltip" title="flag flag-ht"></i></li>
											<li><i className="flag flag-hu" data-bs-toggle="tooltip" title="flag flag-hu"></i></li>
											<li><i className="flag flag-id" data-bs-toggle="tooltip" title="flag flag-id"></i></li>
											<li><i className="flag flag-ie" data-bs-toggle="tooltip" title="flag flag-ie"></i></li>
											<li><i className="flag flag-il" data-bs-toggle="tooltip" title="flag flag-il"></i></li>
											<li><i className="flag flag-im" data-bs-toggle="tooltip" title="flag flag-im"></i></li>
											<li><i className="flag flag-in" data-bs-toggle="tooltip" title="flag flag-in"></i></li>
											<li><i className="flag flag-io" data-bs-toggle="tooltip" title="flag flag-io"></i></li>
											<li><i className="flag flag-iq" data-bs-toggle="tooltip" title="flag flag-iq"></i></li>
											<li><i className="flag flag-ir" data-bs-toggle="tooltip" title="flag flag-ir"></i></li>
											<li><i className="flag flag-is" data-bs-toggle="tooltip" title="flag flag-is"></i></li>
											<li><i className="flag flag-it" data-bs-toggle="tooltip" title="flag flag-it"></i></li>
											<li><i className="flag flag-je" data-bs-toggle="tooltip" title="flag flag-je"></i></li>
											<li><i className="flag flag-jm" data-bs-toggle="tooltip" title="flag flag-jm"></i></li>
											<li><i className="flag flag-jo" data-bs-toggle="tooltip" title="flag flag-jo"></i></li>
											<li><i className="flag flag-jp" data-bs-toggle="tooltip" title="flag flag-jp"></i></li>
											<li><i className="flag flag-ke" data-bs-toggle="tooltip" title="flag flag-ke"></i></li>
											<li><i className="flag flag-kg" data-bs-toggle="tooltip" title="flag flag-kg"></i></li>
											<li><i className="flag flag-kh" data-bs-toggle="tooltip" title="flag flag-kh"></i></li>
											<li><i className="flag flag-ki" data-bs-toggle="tooltip" title="flag flag-ki"></i></li>
											<li><i className="flag flag-km" data-bs-toggle="tooltip" title="flag flag-km"></i></li>
											<li><i className="flag flag-kn" data-bs-toggle="tooltip" title="flag flag-kn"></i></li>
											<li><i className="flag flag-kp" data-bs-toggle="tooltip" title="flag flag-kp"></i></li>
											<li><i className="flag flag-kr" data-bs-toggle="tooltip" title="flag flag-kr"></i></li>
											<li><i className="flag flag-kw" data-bs-toggle="tooltip" title="flag flag-kw"></i></li>
											<li><i className="flag flag-ky" data-bs-toggle="tooltip" title="flag flag-ky"></i></li>
											<li><i className="flag flag-kz" data-bs-toggle="tooltip" title="flag flag-kz"></i></li>
											<li><i className="flag flag-la" data-bs-toggle="tooltip" title="flag flag-la"></i></li>
											<li><i className="flag flag-lb" data-bs-toggle="tooltip" title="flag flag-lb"></i></li>
											<li><i className="flag flag-lc" data-bs-toggle="tooltip" title="flag flag-lc"></i></li>
											<li><i className="flag flag-li" data-bs-toggle="tooltip" title="flag flag-li"></i></li>
											<li><i className="flag flag-lk" data-bs-toggle="tooltip" title="flag flag-lk"></i></li>
											<li><i className="flag flag-lr" data-bs-toggle="tooltip" title="flag flag-lr"></i></li>
											<li><i className="flag flag-ls" data-bs-toggle="tooltip" title="flag flag-ls"></i></li>
											<li><i className="flag flag-lt" data-bs-toggle="tooltip" title="flag flag-lt"></i></li>
											<li><i className="flag flag-lu" data-bs-toggle="tooltip" title="flag flag-lu"></i></li>
											<li><i className="flag flag-lv" data-bs-toggle="tooltip" title="flag flag-lv"></i></li>
											<li><i className="flag flag-ly" data-bs-toggle="tooltip" title="flag flag-ly"></i></li>
											<li><i className="flag flag-ma" data-bs-toggle="tooltip" title="flag flag-ma"></i></li>
											<li><i className="flag flag-mc" data-bs-toggle="tooltip" title="flag flag-mc"></i></li>
											<li><i className="flag flag-md" data-bs-toggle="tooltip" title="flag flag-md"></i></li>
											<li><i className="flag flag-me" data-bs-toggle="tooltip" title="flag flag-me"></i></li>
											<li><i className="flag flag-mg" data-bs-toggle="tooltip" title="flag flag-mg"></i></li>
											<li><i className="flag flag-mh" data-bs-toggle="tooltip" title="flag flag-mh"></i></li>
											<li><i className="flag flag-mk" data-bs-toggle="tooltip" title="flag flag-mk"></i></li>
											<li><i className="flag flag-ml" data-bs-toggle="tooltip" title="flag flag-ml"></i></li>
											<li><i className="flag flag-mm" data-bs-toggle="tooltip" title="flag flag-mm"></i></li>
											<li><i className="flag flag-mn" data-bs-toggle="tooltip" title="flag flag-mn"></i></li>
											<li><i className="flag flag-mo" data-bs-toggle="tooltip" title="flag flag-mo"></i></li>
											<li><i className="flag flag-mp" data-bs-toggle="tooltip" title="flag flag-mp"></i></li>
											<li><i className="flag flag-mq" data-bs-toggle="tooltip" title="flag flag-mq"></i></li>
											<li><i className="flag flag-mr" data-bs-toggle="tooltip" title="flag flag-mr"></i></li>
											<li><i className="flag flag-ms" data-bs-toggle="tooltip" title="flag flag-ms"></i></li>
											<li><i className="flag flag-mt" data-bs-toggle="tooltip" title="flag flag-mt"></i></li>
											<li><i className="flag flag-mu" data-bs-toggle="tooltip" title="flag flag-mu"></i></li>
											<li><i className="flag flag-mv" data-bs-toggle="tooltip" title="flag flag-mv"></i></li>
											<li><i className="flag flag-mw" data-bs-toggle="tooltip" title="flag flag-mw"></i></li>
											<li><i className="flag flag-mx" data-bs-toggle="tooltip" title="flag flag-mx"></i></li>
											<li><i className="flag flag-my" data-bs-toggle="tooltip" title="flag flag-my"></i></li>
											<li><i className="flag flag-mz" data-bs-toggle="tooltip" title="flag flag-mz"></i></li>
											<li><i className="flag flag-na" data-bs-toggle="tooltip" title="flag flag-na"></i></li>
											<li><i className="flag flag-nc" data-bs-toggle="tooltip" title="flag flag-nc"></i></li>
											<li><i className="flag flag-ne" data-bs-toggle="tooltip" title="flag flag-ne"></i></li>
											<li><i className="flag flag-nf" data-bs-toggle="tooltip" title="flag flag-nf"></i></li>
											<li><i className="flag flag-ng" data-bs-toggle="tooltip" title="flag flag-ng"></i></li>
											<li><i className="flag flag-ni" data-bs-toggle="tooltip" title="flag flag-ni"></i></li>
											<li><i className="flag flag-nl" data-bs-toggle="tooltip" title="flag flag-nl"></i></li>
											<li><i className="flag flag-no" data-bs-toggle="tooltip" title="flag flag-no"></i></li>
											<li><i className="flag flag-np" data-bs-toggle="tooltip" title="flag flag-np"></i></li>
											<li><i className="flag flag-nr" data-bs-toggle="tooltip" title="flag flag-nr"></i></li>
											<li><i className="flag flag-nu" data-bs-toggle="tooltip" title="flag flag-nu"></i></li>
											<li><i className="flag flag-nz" data-bs-toggle="tooltip" title="flag flag-nz"></i></li>
											<li><i className="flag flag-om" data-bs-toggle="tooltip" title="flag flag-om"></i></li>
											<li><i className="flag flag-pa" data-bs-toggle="tooltip" title="flag flag-pa"></i></li>
											<li><i className="flag flag-pe" data-bs-toggle="tooltip" title="flag flag-pe"></i></li>
											<li><i className="flag flag-pf" data-bs-toggle="tooltip" title="flag flag-pf"></i></li>
											<li><i className="flag flag-pg" data-bs-toggle="tooltip" title="flag flag-pg"></i></li>
											<li><i className="flag flag-ph" data-bs-toggle="tooltip" title="flag flag-ph"></i></li>
											<li><i className="flag flag-pk" data-bs-toggle="tooltip" title="flag flag-pk"></i></li>
											<li><i className="flag flag-pl" data-bs-toggle="tooltip" title="flag flag-pl"></i></li>
											<li><i className="flag flag-pm" data-bs-toggle="tooltip" title="flag flag-pm"></i></li>
											<li><i className="flag flag-pn" data-bs-toggle="tooltip" title="flag flag-pn"></i></li>
											<li><i className="flag flag-pr" data-bs-toggle="tooltip" title="flag flag-pr"></i></li>
											<li><i className="flag flag-ps" data-bs-toggle="tooltip" title="flag flag-ps"></i></li>
											<li><i className="flag flag-pt" data-bs-toggle="tooltip" title="flag flag-pt"></i></li>
											<li><i className="flag flag-pw" data-bs-toggle="tooltip" title="flag flag-pw"></i></li>
											<li><i className="flag flag-py" data-bs-toggle="tooltip" title="flag flag-py"></i></li>
											<li><i className="flag flag-qa" data-bs-toggle="tooltip" title="flag flag-qa"></i></li>
											<li><i className="flag flag-re" data-bs-toggle="tooltip" title="flag flag-re"></i></li>
											<li><i className="flag flag-ro" data-bs-toggle="tooltip" title="flag flag-ro"></i></li>
											<li><i className="flag flag-rs" data-bs-toggle="tooltip" title="flag flag-rs"></i></li>
											<li><i className="flag flag-ru" data-bs-toggle="tooltip" title="flag flag-ru"></i></li>
											<li><i className="flag flag-rw" data-bs-toggle="tooltip" title="flag flag-rw"></i></li>
											<li><i className="flag flag-sa" data-bs-toggle="tooltip" title="flag flag-sa"></i></li>
											<li><i className="flag flag-sb" data-bs-toggle="tooltip" title="flag flag-sb"></i></li>
											<li><i className="flag flag-sc" data-bs-toggle="tooltip" title="flag flag-sc"></i></li>
											<li><i className="flag flag-sd" data-bs-toggle="tooltip" title="flag flag-sd"></i></li>
											<li><i className="flag flag-se" data-bs-toggle="tooltip" title="flag flag-se"></i></li>
											<li><i className="flag flag-sg" data-bs-toggle="tooltip" title="flag flag-sg"></i></li>
											<li><i className="flag flag-sh" data-bs-toggle="tooltip" title="flag flag-sh"></i></li>
											<li><i className="flag flag-si" data-bs-toggle="tooltip" title="flag flag-si"></i></li>
											<li><i className="flag flag-sk" data-bs-toggle="tooltip" title="flag flag-sk"></i></li>
											<li><i className="flag flag-sl" data-bs-toggle="tooltip" title="flag flag-sl"></i></li>
											<li><i className="flag flag-sm" data-bs-toggle="tooltip" title="flag flag-sm"></i></li>
											<li><i className="flag flag-sn" data-bs-toggle="tooltip" title="flag flag-sn"></i></li>
											<li><i className="flag flag-so" data-bs-toggle="tooltip" title="flag flag-so"></i></li>
											<li><i className="flag flag-sr" data-bs-toggle="tooltip" title="flag flag-sr"></i></li>
											<li><i className="flag flag-ss" data-bs-toggle="tooltip" title="flag flag-ss"></i></li>
											<li><i className="flag flag-st" data-bs-toggle="tooltip" title="flag flag-st"></i></li>
											<li><i className="flag flag-sv" data-bs-toggle="tooltip" title="flag flag-sv"></i></li>
											<li><i className="flag flag-sx" data-bs-toggle="tooltip" title="flag flag-sx"></i></li>
											<li><i className="flag flag-sy" data-bs-toggle="tooltip" title="flag flag-sy"></i></li>
											<li><i className="flag flag-sz" data-bs-toggle="tooltip" title="flag flag-sz"></i></li>
											<li><i className="flag flag-tc" data-bs-toggle="tooltip" title="flag flag-tc"></i></li>
											<li><i className="flag flag-td" data-bs-toggle="tooltip" title="flag flag-td"></i></li>
											<li><i className="flag flag-tf" data-bs-toggle="tooltip" title="flag flag-tf"></i></li>
											<li><i className="flag flag-tg" data-bs-toggle="tooltip" title="flag flag-tg"></i></li>
											<li><i className="flag flag-th" data-bs-toggle="tooltip" title="flag flag-th"></i></li>
											<li><i className="flag flag-tj" data-bs-toggle="tooltip" title="flag flag-tj"></i></li>
											<li><i className="flag flag-tk" data-bs-toggle="tooltip" title="flag flag-tk"></i></li>
											<li><i className="flag flag-tl" data-bs-toggle="tooltip" title="flag flag-tl"></i></li>
											<li><i className="flag flag-tm" data-bs-toggle="tooltip" title="flag flag-tm"></i></li>
											<li><i className="flag flag-tn" data-bs-toggle="tooltip" title="flag flag-tn"></i></li>
											<li><i className="flag flag-to" data-bs-toggle="tooltip" title="flag flag-to"></i></li>
											<li><i className="flag flag-tr" data-bs-toggle="tooltip" title="flag flag-tr"></i></li>
											<li><i className="flag flag-tt" data-bs-toggle="tooltip" title="flag flag-tt"></i></li>
											<li><i className="flag flag-tv" data-bs-toggle="tooltip" title="flag flag-tv"></i></li>
											<li><i className="flag flag-tw" data-bs-toggle="tooltip" title="flag flag-tw"></i></li>
											<li><i className="flag flag-tz" data-bs-toggle="tooltip" title="flag flag-tz"></i></li>
											<li><i className="flag flag-ua" data-bs-toggle="tooltip" title="flag flag-ua"></i></li>
											<li><i className="flag flag-ug" data-bs-toggle="tooltip" title="flag flag-ug"></i></li>
											<li><i className="flag flag-um" data-bs-toggle="tooltip" title="flag flag-um"></i></li>
											<li><i className="flag flag-us" data-bs-toggle="tooltip" title="flag flag-us"></i></li>
											<li><i className="flag flag-uy" data-bs-toggle="tooltip" title="flag flag-uy"></i></li>
											<li><i className="flag flag-uz" data-bs-toggle="tooltip" title="flag flag-uz"></i></li>
											<li><i className="flag flag-va" data-bs-toggle="tooltip" title="flag flag-va"></i></li>
											<li><i className="flag flag-vc" data-bs-toggle="tooltip" title="flag flag-vc"></i></li>
											<li><i className="flag flag-ve" data-bs-toggle="tooltip" title="flag flag-ve"></i></li>
											<li><i className="flag flag-vg" data-bs-toggle="tooltip" title="flag flag-vg"></i></li>
											<li><i className="flag flag-vi" data-bs-toggle="tooltip" title="flag flag-vi"></i></li>
											<li><i className="flag flag-vn" data-bs-toggle="tooltip" title="flag flag-vn"></i></li>
											<li><i className="flag flag-vu" data-bs-toggle="tooltip" title="flag flag-vu"></i></li>
											<li><i className="flag flag-wf" data-bs-toggle="tooltip" title="flag flag-wf"></i></li>
											<li><i className="flag flag-ws" data-bs-toggle="tooltip" title="flag flag-ws"></i></li>
											<li><i className="flag flag-ye" data-bs-toggle="tooltip" title="flag flag-ye"></i></li>
											<li><i className="flag flag-yt" data-bs-toggle="tooltip" title="flag flag-yt"></i></li>
											<li><i className="flag flag-za" data-bs-toggle="tooltip" title="flag flag-za"></i></li>
											<li><i className="flag flag-zm" data-bs-toggle="tooltip" title="flag flag-zm"></i></li>
											<li><i className="flag flag-zw" data-bs-toggle="tooltip" title="flag flag-zw"></i></li>
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

export default IconFlag