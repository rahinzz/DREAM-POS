import React from 'react';
import { Link } from 'react-router-dom';

const IconMaterial = () => {
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
								<h3 className="page-title">Material Icon</h3>
								<ul className="breadcrumb">
									<li className="breadcrumb-item"><Link to="/home">Dashboard</Link></li>
									<li className="breadcrumb-item active">Material Icon</li>
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
									<div className="card-title">Material Icons</div>
								</div>
								<div className="card-body">
									<div className="icons-items">
										<ul className="icons-list">
											<li><i className="mdi mdi-access-point" data-bs-toggle="tooltip" title="mdi-access-point"></i></li>
											<li><i className="mdi mdi-access-point-network" data-bs-toggle="tooltip" title="mdi-access-point-network"></i></li>
											<li><i className="mdi mdi-account" data-bs-toggle="tooltip" title="mdi-account"></i></li>
											<li><i className="mdi mdi-account-alert" data-bs-toggle="tooltip" title="mdi-account-alert"></i></li>
											<li><i className="mdi mdi-account-box" data-bs-toggle="tooltip" title="mdi-account-box"></i></li>
											<li><i className="mdi mdi-account-box-outline" data-bs-toggle="tooltip" title="mdi-account-box-outline"></i></li>
											<li><i className="mdi mdi-account-card-details" data-bs-toggle="tooltip" title="mdi-account-card-details"></i></li>
											<li><i className="mdi mdi-account-check" data-bs-toggle="tooltip" title="mdi-account-check"></i></li>
											<li><i className="mdi mdi-account-circle" data-bs-toggle="tooltip" title="mdi-account-circle"></i></li>
											<li><i className="mdi mdi-account-convert" data-bs-toggle="tooltip" title="mdi-account-convert"></i></li>
											<li><i className="mdi mdi-account-edit" data-bs-toggle="tooltip" title="mdi-account-edit"></i></li>
											<li><i className="mdi mdi-account-key" data-bs-toggle="tooltip" title="mdi-account-key"></i></li>
											<li><i className="mdi mdi-account-location" data-bs-toggle="tooltip" title="mdi-account-location"></i></li>
											<li><i className="mdi mdi-account-minus" data-bs-toggle="tooltip" title="mdi-account-minus"></i></li>
											<li><i className="mdi mdi-account-multiple" data-bs-toggle="tooltip" title="mdi-account-multiple"></i></li>
											<li><i className="mdi mdi-account-multiple-minus" data-bs-toggle="tooltip" title="mdi-account-multiple-minus"></i></li>
											<li><i className="mdi mdi-account-multiple-outline" data-bs-toggle="tooltip" title="mdi-account-multiple-outline"></i></li>
											<li><i className="mdi mdi-account-multiple-plus" data-bs-toggle="tooltip" title="mdi-account-multiple-plus"></i></li>
											<li><i className="mdi mdi-account-network" data-bs-toggle="tooltip" title="mdi-account-network"></i></li>
											<li><i className="mdi mdi-account-off" data-bs-toggle="tooltip" title="mdi-account-off"></i></li>
											<li><i className="mdi mdi-account-outline" data-bs-toggle="tooltip" title="mdi-account-outline"></i></li>
											<li><i className="mdi mdi-account-plus" data-bs-toggle="tooltip" title="mdi-account-plus"></i></li>
											<li><i className="mdi mdi-account-remove" data-bs-toggle="tooltip" title="mdi-account-remove"></i></li>
											<li><i className="mdi mdi-account-search" data-bs-toggle="tooltip" title="mdi-account-search"></i></li>
											<li><i className="mdi mdi-account-settings" data-bs-toggle="tooltip" title="mdi-account-settings"></i></li>
											<li><i className="mdi mdi-account-settings-variant" data-bs-toggle="tooltip" title="mdi-account-settings-variant"></i></li>
											<li><i className="mdi mdi-account-star" data-bs-toggle="tooltip" title="mdi-account-star"></i></li>
											<li><i className="mdi mdi-account-switch" data-bs-toggle="tooltip" title="mdi-account-switch"></i></li>
											<li><i className="mdi mdi-adjust" data-bs-toggle="tooltip" title="mdi-adjust"></i></li>
											<li><i className="mdi mdi-air-conditioner" data-bs-toggle="tooltip" title="mdi-air-conditioner"></i></li>
											<li><i className="mdi mdi-airballoon" data-bs-toggle="tooltip" title="mdi-airballoon"></i></li>
											<li><i className="mdi mdi-airplane" data-bs-toggle="tooltip" title="mdi-airplane"></i></li>
											<li><i className="mdi mdi-airplane-landing" data-bs-toggle="tooltip" title="mdi-airplane-landing"></i></li>
											<li><i className="mdi mdi-airplane-off" data-bs-toggle="tooltip" title="mdi-airplane-off"></i></li>
											<li><i className="mdi mdi-airplane-takeoff" data-bs-toggle="tooltip" title="mdi-airplane-takeoff"></i></li>
											<li><i className="mdi mdi-airplay" data-bs-toggle="tooltip" title="mdi-airplay"></i></li>
											<li><i className="mdi mdi-alarm" data-bs-toggle="tooltip" title="mdi-alarm"></i></li>
											<li><i className="mdi mdi-alarm-bell" data-bs-toggle="tooltip" title="mdi-alarm-bell"></i></li>
											<li><i className="mdi mdi-alarm-check" data-bs-toggle="tooltip" title="mdi-alarm-check"></i></li>
											<li><i className="mdi mdi-alarm-light" data-bs-toggle="tooltip" title="mdi-alarm-light"></i></li>
											<li><i className="mdi mdi-alarm-multiple" data-bs-toggle="tooltip" title="mdi-alarm-multiple"></i></li>
											<li><i className="mdi mdi-alarm-off" data-bs-toggle="tooltip" title="mdi-alarm-off"></i></li>
											<li><i className="mdi mdi-alarm-plus" data-bs-toggle="tooltip" title="mdi-alarm-plus"></i></li>
											<li><i className="mdi mdi-alarm-snooze" data-bs-toggle="tooltip" title="mdi-alarm-snooze"></i></li>
											<li><i className="mdi mdi-album" data-bs-toggle="tooltip" title="mdi-album"></i></li>
											<li><i className="mdi mdi-alert" data-bs-toggle="tooltip" title="mdi-alert"></i></li>
											<li><i className="mdi mdi-alert-box" data-bs-toggle="tooltip" title="mdi-alert-box"></i></li>
											<li><i className="mdi mdi-alert-circle" data-bs-toggle="tooltip" title="mdi-alert-circle"></i></li>
											<li><i className="mdi mdi-alert-circle-outline" data-bs-toggle="tooltip" title="mdi-alert-circle-outline"></i></li>
											<li><i className="mdi mdi-alert-decagram" data-bs-toggle="tooltip" title="mdi-alert-decagram"></i></li>
											<li><i className="mdi mdi-alert-octagon" data-bs-toggle="tooltip" title="mdi-alert-octagon"></i></li>
											<li><i className="mdi mdi-alert-octagram" data-bs-toggle="tooltip" title="mdi-alert-octagram"></i></li>
											<li><i className="mdi mdi-alert-outline" data-bs-toggle="tooltip" title="mdi-alert-outline"></i></li>
											<li><i className="mdi mdi-all-inclusive" data-bs-toggle="tooltip" title="mdi-all-inclusive"></i></li>
											<li><i className="mdi mdi-alpha" data-bs-toggle="tooltip" title="mdi-alpha"></i></li>
											<li><i className="mdi mdi-alphabetical" data-bs-toggle="tooltip" title="mdi-alphabetical"></i></li>
											<li><i className="mdi mdi-altimeter" data-bs-toggle="tooltip" title="mdi-altimeter"></i></li>
											<li><i className="mdi mdi-amazon" data-bs-toggle="tooltip" title="mdi-amazon"></i></li>
											<li><i className="mdi mdi-amazon-clouddrive" data-bs-toggle="tooltip" title="mdi-amazon-clouddrive"></i></li>
											<li><i className="mdi mdi-ambulance" data-bs-toggle="tooltip" title="mdi-ambulance"></i></li>
											<li><i className="mdi mdi-amplifier" data-bs-toggle="tooltip" title="mdi-amplifier"></i></li>
											<li><i className="mdi mdi-anchor" data-bs-toggle="tooltip" title="mdi-anchor"></i></li>
											<li><i className="mdi mdi-android" data-bs-toggle="tooltip" title="mdi-android"></i></li>
											<li><i className="mdi mdi-android-debug-bridge" data-bs-toggle="tooltip" title="mdi-android-debug-bridge"></i></li>
											<li><i className="mdi mdi-android-head" data-bs-toggle="tooltip" title="mdi-android-head"></i></li>
											<li><i className="mdi mdi-android-studio" data-bs-toggle="tooltip" title="mdi-android-studio"></i></li>
											<li><i className="mdi mdi-angular" data-bs-toggle="tooltip" title="mdi-angular"></i></li>
											<li><i className="mdi mdi-angularjs" data-bs-toggle="tooltip" title="mdi-angularjs"></i></li>
											<li><i className="mdi mdi-animation" data-bs-toggle="tooltip" title="mdi-animation"></i></li>
											<li><i className="mdi mdi-apple" data-bs-toggle="tooltip" title="mdi-apple"></i></li>
											<li><i className="mdi mdi-apple-finder" data-bs-toggle="tooltip" title="mdi-apple-finder"></i></li>
											<li><i className="mdi mdi-apple-ios" data-bs-toggle="tooltip" title="mdi-apple-ios"></i></li>
											<li><i className="mdi mdi-apple-keyboard-caps" data-bs-toggle="tooltip" title="mdi-apple-keyboard-caps"></i></li>
											<li><i className="mdi mdi-apple-keyboard-command" data-bs-toggle="tooltip" title="mdi-apple-keyboard-command"></i></li>
											<li><i className="mdi mdi-apple-keyboard-control" data-bs-toggle="tooltip" title="mdi-apple-keyboard-control"></i></li>
											<li><i className="mdi mdi-apple-keyboard-option" data-bs-toggle="tooltip" title="mdi-apple-keyboard-option"></i></li>
											<li><i className="mdi mdi-apple-keyboard-shift" data-bs-toggle="tooltip" title="mdi-apple-keyboard-shift"></i></li>
											<li><i className="mdi mdi-apple-mobileme" data-bs-toggle="tooltip" title="mdi-apple-mobileme"></i></li>
											<li><i className="mdi mdi-apple-safari" data-bs-toggle="tooltip" title="mdi-apple-safari"></i></li>
											<li><i className="mdi mdi-application" data-bs-toggle="tooltip" title="mdi-application"></i></li>
											<li><i className="mdi mdi-approval" data-bs-toggle="tooltip" title="mdi-approval"></i></li>
											<li><i className="mdi mdi-apps" data-bs-toggle="tooltip" title="mdi-apps"></i></li>
											<li><i className="mdi mdi-archive" data-bs-toggle="tooltip" title="mdi-archive"></i></li>
											<li><i className="mdi mdi-arrange-bring-forward" data-bs-toggle="tooltip" title="mdi-arrange-bring-forward"></i></li>
											<li><i className="mdi mdi-arrange-send-to-back" data-bs-toggle="tooltip" title="mdi-arrange-send-to-back"></i></li>
											<li><i className="mdi mdi-arrange-bring-to-front" data-bs-toggle="tooltip" title="mdi-arrange-bring-to-front"></i></li>
											<li><i className="mdi mdi-arrange-send-backward" data-bs-toggle="tooltip" title="mdi-arrange-send-backward"></i></li>
											<li><i className="mdi mdi-arrow-all" data-bs-toggle="tooltip" title="mdi-arrow-all"></i></li>
											<li><i className="mdi mdi-arrow-bottom-left" data-bs-toggle="tooltip" title="mdi-arrow-bottom-left"></i></li>
											<li><i className="mdi mdi-arrow-bottom-right" data-bs-toggle="tooltip" title="mdi-arrow-bottom-right"></i></li>
											<li><i className="mdi mdi-arrow-collapse" data-bs-toggle="tooltip" title="mdi-arrow-collapse"></i></li>
											<li><i className="mdi mdi-arrow-collapse-all" data-bs-toggle="tooltip" title="mdi-arrow-collapse-all"></i></li>
											<li><i className="mdi mdi-arrow-collapse-down" data-bs-toggle="tooltip" title="mdi-arrow-collapse-down"></i></li>
											<li><i className="mdi mdi-arrow-collapse-left" data-bs-toggle="tooltip" title="mdi-arrow-collapse-left"></i></li>
											<li><i className="mdi mdi-arrow-collapse-right" data-bs-toggle="tooltip" title="mdi-arrow-collapse-right"></i></li>
											<li><i className="mdi mdi-arrow-collapse-up" data-bs-toggle="tooltip" title="mdi-arrow-collapse-up"></i></li>
											<li><i className="mdi mdi-arrow-down" data-bs-toggle="tooltip" title="mdi-arrow-down"></i></li>
											<li><i className="mdi mdi-arrow-down-bold" data-bs-toggle="tooltip" title="mdi-arrow-down-bold"></i></li>
											<li><i className="mdi mdi-arrow-down-bold-box" data-bs-toggle="tooltip" title="mdi-arrow-down-bold-box"></i></li>
											<li><i className="mdi mdi-arrow-down-bold-box-outline" data-bs-toggle="tooltip" title="mdi-arrow-down-bold-box-outline"></i></li>
											<li><i className="mdi mdi-arrow-down-bold-circle" data-bs-toggle="tooltip" title="mdi-arrow-down-bold-circle"></i></li>
											<li><i className="mdi mdi-arrow-down-bold-circle-outline" data-bs-toggle="tooltip" title="mdi-arrow-down-bold-circle-outline"></i></li>
											<li><i className="mdi mdi-arrow-down-box" data-bs-toggle="tooltip" title="mdi-arrow-down-box"></i></li>
											<li><i className="mdi mdi-arrow-down-drop-circle" data-bs-toggle="tooltip" title="mdi-arrow-down-drop-circle"></i></li>
											<li><i className="mdi mdi-arrow-down-drop-circle-outline" data-bs-toggle="tooltip" title="mdi-arrow-down-drop-circle-outline"></i></li>
											<li><i className="mdi mdi-arrow-down-thick" data-bs-toggle="tooltip" title="mdi-arrow-down-thick"></i></li>
											<li><i className="mdi mdi-arrow-expand" data-bs-toggle="tooltip" title="mdi-arrow-expand"></i></li>
											<li><i className="mdi mdi-arrow-expand-all" data-bs-toggle="tooltip" title="mdi-arrow-expand-all"></i></li>
											<li><i className="mdi mdi-arrow-expand-down" data-bs-toggle="tooltip" title="mdi-arrow-expand-down"></i></li>
											<li><i className="mdi mdi-arrow-expand-left" data-bs-toggle="tooltip" title="mdi-arrow-expand-left"></i></li>
											<li><i className="mdi mdi-arrow-expand-right" data-bs-toggle="tooltip" title="mdi-arrow-expand-right"></i></li>
											<li><i className="mdi mdi-arrow-expand-up" data-bs-toggle="tooltip" title="mdi-arrow-expand-up"></i></li>
											<li><i className="mdi mdi-arrow-left" data-bs-toggle="tooltip" title="mdi-arrow-left"></i></li>
											<li><i className="mdi mdi-arrow-left-bold" data-bs-toggle="tooltip" title="mdi-arrow-left-bold"></i></li>
											<li><i className="mdi mdi-arrow-left-bold-box" data-bs-toggle="tooltip" title="mdi-arrow-left-bold-box"></i></li>
											<li><i className="mdi mdi-arrow-left-bold-box-outline" data-bs-toggle="tooltip" title="mdi-arrow-left-bold-box-outline"></i></li>
											<li><i className="mdi mdi-arrow-left-bold-circle" data-bs-toggle="tooltip" title="mdi-arrow-left-bold-circle"></i></li>
											<li><i className="mdi mdi-arrow-left-bold-circle-outline" data-bs-toggle="tooltip" title="mdi-arrow-left-bold-circle-outline"></i></li>
											<li><i className="mdi mdi-arrow-left-box" data-bs-toggle="tooltip" title="mdi-arrow-left-box"></i></li>
											<li><i className="mdi mdi-arrow-left-drop-circle" data-bs-toggle="tooltip" title="mdi-arrow-left-drop-circle"></i></li>
											<li><i className="mdi mdi-arrow-left-drop-circle-outline" data-bs-toggle="tooltip" title="mdi-arrow-left-drop-circle-outline"></i></li>
											<li><i className="mdi mdi-arrow-left-thick" data-bs-toggle="tooltip" title="mdi-arrow-left-thick"></i></li>
											<li><i className="mdi mdi-arrow-right" data-bs-toggle="tooltip" title="mdi-arrow-right"></i></li>
											<li><i className="mdi mdi-arrow-right-bold" data-bs-toggle="tooltip" title="mdi-arrow-right-bold"></i></li>
											<li><i className="mdi mdi-arrow-right-bold-box" data-bs-toggle="tooltip" title="mdi-arrow-right-bold-box"></i></li>
											<li><i className="mdi mdi-arrow-right-bold-box-outline" data-bs-toggle="tooltip" title="mdi-arrow-right-bold-box-outline"></i></li>
											<li><i className="mdi mdi-arrow-right-bold-circle" data-bs-toggle="tooltip" title="mdi-arrow-right-bold-circle"></i></li>
											<li><i className="mdi mdi-arrow-right-bold-circle-outline" data-bs-toggle="tooltip" title="mdi-arrow-right-bold-circle-outline"></i></li>
											<li><i className="mdi mdi-arrow-right-box" data-bs-toggle="tooltip" title="mdi-arrow-right-box"></i></li>
											<li><i className="mdi mdi-arrow-right-drop-circle" data-bs-toggle="tooltip" title="mdi-arrow-right-drop-circle"></i></li>
											<li><i className="mdi mdi-arrow-right-drop-circle-outline" data-bs-toggle="tooltip" title="mdi-arrow-right-drop-circle-outline"></i></li>
											<li><i className="mdi mdi-arrow-right-thick" data-bs-toggle="tooltip" title="mdi-arrow-right-thick"></i></li>
											<li><i className="mdi mdi-arrow-top-left" data-bs-toggle="tooltip" title="mdi-arrow-top-left"></i></li>
											<li><i className="mdi mdi-arrow-top-right" data-bs-toggle="tooltip" title="mdi-arrow-top-right"></i></li>
											<li><i className="mdi mdi-arrow-up" data-bs-toggle="tooltip" title="mdi-arrow-up"></i></li>
											<li><i className="mdi mdi-arrow-up-bold" data-bs-toggle="tooltip" title="mdi-arrow-up-bold"></i></li>
											<li><i className="mdi mdi-arrow-up-bold-box" data-bs-toggle="tooltip" title="mdi-arrow-up-bold-box"></i></li>
											<li><i className="mdi mdi-arrow-up-bold-box-outline" data-bs-toggle="tooltip" title="mdi-arrow-up-bold-box-outline"></i></li>
											<li><i className="mdi mdi-arrow-up-bold-circle" data-bs-toggle="tooltip" title="mdi-arrow-up-bold-circle"></i></li>
											<li><i className="mdi mdi-arrow-up-bold-circle-outline" data-bs-toggle="tooltip" title="mdi-arrow-up-bold-circle-outline"></i></li>
											<li><i className="mdi mdi-arrow-up-box" data-bs-toggle="tooltip" title="mdi-arrow-up-box"></i></li>
											<li><i className="mdi mdi-arrow-up-drop-circle" data-bs-toggle="tooltip" title="mdi-arrow-up-drop-circle"></i></li>
											<li><i className="mdi mdi-arrow-up-drop-circle-outline" data-bs-toggle="tooltip" title="mdi-arrow-up-drop-circle-outline"></i></li>
											<li><i className="mdi mdi-arrow-up-thick" data-bs-toggle="tooltip" title="mdi-arrow-up-thick"></i></li>
											<li><i className="mdi mdi-assistant" data-bs-toggle="tooltip" title="mdi-assistant"></i></li>
											<li><i className="mdi mdi-asterisk" data-bs-toggle="tooltip" title="mdi-asterisk"></i></li>
											<li><i className="mdi mdi-at" data-bs-toggle="tooltip" title="mdi-at"></i></li>
											<li><i className="mdi mdi-atom" data-bs-toggle="tooltip" title="mdi-atom"></i></li>
											<li><i className="mdi mdi-attachment" data-bs-toggle="tooltip" title="mdi-attachment"></i></li>
											<li><i className="mdi mdi-audiobook" data-bs-toggle="tooltip" title="mdi-audiobook"></i></li>
											<li><i className="mdi mdi-auto-fix" data-bs-toggle="tooltip" title="mdi-auto-fix"></i></li>
											<li><i className="mdi mdi-auto-upload" data-bs-toggle="tooltip" title="mdi-auto-upload"></i></li>
											<li><i className="mdi mdi-autorenew" data-bs-toggle="tooltip" title="mdi-autorenew"></i></li>
											<li><i className="mdi mdi-av-timer" data-bs-toggle="tooltip" title="mdi-av-timer"></i></li>
											<li><i className="mdi mdi-baby" data-bs-toggle="tooltip" title="mdi-baby"></i></li>
											<li><i className="mdi mdi-baby-buggy" data-bs-toggle="tooltip" title="mdi-baby-buggy"></i></li>
											<li><i className="mdi mdi-backburger" data-bs-toggle="tooltip" title="mdi-backburger"></i></li>
											<li><i className="mdi mdi-backspace" data-bs-toggle="tooltip" title="mdi-backspace"></i></li>
											<li><i className="mdi mdi-backup-restore" data-bs-toggle="tooltip" title="mdi-backup-restore"></i></li>
											<li><i className="mdi mdi-bandcamp" data-bs-toggle="tooltip" title="mdi-bandcamp"></i></li>
											<li><i className="mdi mdi-bank" data-bs-toggle="tooltip" title="mdi-bank"></i></li>
											<li><i className="mdi mdi-barcode" data-bs-toggle="tooltip" title="mdi-barcode"></i></li>
											<li><i className="mdi mdi-barcode-scan" data-bs-toggle="tooltip" title="mdi-barcode-scan"></i></li>
											<li><i className="mdi mdi-barley" data-bs-toggle="tooltip" title="mdi-barley"></i></li>
											<li><i className="mdi mdi-barrel" data-bs-toggle="tooltip" title="mdi-barrel"></i></li>
											<li><i className="mdi mdi-basecamp" data-bs-toggle="tooltip" title="mdi-basecamp"></i></li>
											<li><i className="mdi mdi-basket" data-bs-toggle="tooltip" title="mdi-basket"></i></li>
											<li><i className="mdi mdi-basket-fill" data-bs-toggle="tooltip" title="mdi-basket-fill"></i></li>
											<li><i className="mdi mdi-basket-unfill" data-bs-toggle="tooltip" title="mdi-basket-unfill"></i></li>
											<li><i className="mdi mdi-battery" data-bs-toggle="tooltip" title="mdi-battery"></i></li>
											<li><i className="mdi mdi-battery-10" data-bs-toggle="tooltip" title="mdi-battery-10"></i></li>
											<li><i className="mdi mdi-battery-20" data-bs-toggle="tooltip" title="mdi-battery-20"></i></li>
											<li><i className="mdi mdi-battery-30" data-bs-toggle="tooltip" title="mdi-battery-30"></i></li>
											<li><i className="mdi mdi-battery-40" data-bs-toggle="tooltip" title="mdi-battery-40"></i></li>
											<li><i className="mdi mdi-battery-50" data-bs-toggle="tooltip" title="mdi-battery-50"></i></li>
											<li><i className="mdi mdi-battery-60" data-bs-toggle="tooltip" title="mdi-battery-60"></i></li>
											<li><i className="mdi mdi-battery-70" data-bs-toggle="tooltip" title="mdi-battery-70"></i></li>
											<li><i className="mdi mdi-battery-80" data-bs-toggle="tooltip" title="mdi-battery-80"></i></li>
											<li><i className="mdi mdi-battery-90" data-bs-toggle="tooltip" title="mdi-battery-90"></i></li>
											<li><i className="mdi mdi-battery-alert" data-bs-toggle="tooltip" title="mdi-battery-alert"></i></li>
											<li><i className="mdi mdi-battery-charging" data-bs-toggle="tooltip" title="mdi-battery-charging"></i></li>
											<li><i className="mdi mdi-battery-charging-100" data-bs-toggle="tooltip" title="mdi-battery-charging-100"></i></li>
											<li><i className="mdi mdi-battery-charging-20" data-bs-toggle="tooltip" title="mdi-battery-charging-20"></i></li>
											<li><i className="mdi mdi-battery-charging-30" data-bs-toggle="tooltip" title="mdi-battery-charging-30"></i></li>
											<li><i className="mdi mdi-battery-charging-40" data-bs-toggle="tooltip" title="mdi-battery-charging-40"></i></li>
											<li><i className="mdi mdi-battery-charging-60" data-bs-toggle="tooltip" title="mdi-battery-charging-60"></i></li>
											<li><i className="mdi mdi-battery-charging-80" data-bs-toggle="tooltip" title="mdi-battery-charging-80"></i></li>
											<li><i className="mdi mdi-battery-charging-90" data-bs-toggle="tooltip" title="mdi-battery-charging-90"></i></li>
											<li><i className="mdi mdi-battery-minus" data-bs-toggle="tooltip" title="mdi-battery-minus"></i></li>
											<li><i className="mdi mdi-battery-negative" data-bs-toggle="tooltip" title="mdi-battery-negative"></i></li>
											<li><i className="mdi mdi-battery-outline" data-bs-toggle="tooltip" title="mdi-battery-outline"></i></li>
											<li><i className="mdi mdi-battery-plus" data-bs-toggle="tooltip" title="mdi-battery-plus"></i></li>
											<li><i className="mdi mdi-battery-unknown" data-bs-toggle="tooltip" title="mdi-battery-unknown"></i></li>
											<li><i className="mdi mdi-beach" data-bs-toggle="tooltip" title="mdi-beach"></i></li>
											<li><i className="mdi mdi-zip-box" data-bs-toggle="tooltip" title="mdi-zip-box"></i></li>
											<li><i className="mdi mdi-youtube-play" data-bs-toggle="tooltip" title="mdi-youtube-play"></i></li>
											<li><i className="mdi mdi-yin-yang" data-bs-toggle="tooltip" title="mdi-yin-yang"></i></li>
											<li><i className="mdi mdi-yelp" data-bs-toggle="tooltip" title="mdi-yelp"></i></li>
											<li><i className="mdi mdi-yammer" data-bs-toggle="tooltip" title="mdi-yammer"></i></li>
											<li><i className="mdi mdi-xmpp" data-bs-toggle="tooltip" title="mdi-xmpp"></i></li>
											<li><i className="mdi mdi-xml" data-bs-toggle="tooltip" title="mdi-xml"></i></li>
											<li><i className="mdi mdi-wrench" data-bs-toggle="tooltip" title="mdi-wrench"></i></li>
											<li><i className="mdi mdi-wrap" data-bs-toggle="tooltip" title="mdi-wrap"></i></li>
											<li><i className="mdi mdi-wunderlist" data-bs-toggle="tooltip" title="mdi-wunderlist"></i></li>
											<li><i className="mdi mdi-wrench" data-bs-toggle="tooltip" title="mdi-wrench"></i></li>
											<li><i className="mdi mdi-vpn" data-bs-toggle="tooltip" title="mdi-vpn"></i></li>
											<li><i className="mdi mdi-volume-off" data-bs-toggle="tooltip" title="mdi-volume-off"></i></li>
											<li><i className="mdi mdi-volume-mute" data-bs-toggle="tooltip" title="mdi-volume-mute"></i></li>
											<li><i className="mdi mdi-vlc" data-bs-toggle="tooltip" title="mdi-vlc"></i></li>
											<li><i className="mdi mdi-video" data-bs-toggle="tooltip" title="mdi-video"></i></li>
											<li><i className="mdi mdi-usb" data-bs-toggle="tooltip" title="mdi-usb"></i></li>
											<li><i className="mdi mdi-upload-network" data-bs-toggle="tooltip" title="mdi-upload-network"></i></li>
											<li><i className="mdi mdi-update" data-bs-toggle="tooltip" title="mdi-update"></i></li>
											<li><i className="mdi mdi-unity" data-bs-toggle="tooltip" title="mdi-unity"></i></li>
											<li><i className="mdi mdi-undo" data-bs-toggle="tooltip" title="mdi-undo"></i></li>
											<li><i className="mdi mdi-ubuntu" data-bs-toggle="tooltip" title="mdi-ubuntu"></i></li>
											<li><i className="mdi mdi-tune" data-bs-toggle="tooltip" title="mdi-tune"></i></li>
											<li><i className="mdi mdi-truck-trailer" data-bs-toggle="tooltip" title="mdi-truck-trailer"></i></li>
											<li><i className="mdi mdi-truck" data-bs-toggle="tooltip" title="mdi-truck"></i></li>
											<li><i className="mdi mdi-svg" data-bs-toggle="tooltip" title="mdi-svg"></i></li>
											<li><i className="mdi mdi-subway" data-bs-toggle="tooltip" title="mdi-subway"></i></li>
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

export default IconMaterial