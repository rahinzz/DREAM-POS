import React from 'react';
import { Link } from 'react-router-dom'; 

const IconTypicon = () => {
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
								<h3 className="page-title">Typicon Icon</h3>
								<ul className="breadcrumb">
									<li className="breadcrumb-item"><Link to="/home">Dashboard</Link></li>
									<li className="breadcrumb-item active">Typicon Icon</li>
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
									<div className="card-title">Typicon Icon</div>
								</div>
								<div className="card-body">
									<div className="icons-items">
										<ul className="icons-list">
											<li className="icons-list-item"><i className="typcn typcn-chart-pie-outline" data-bs-toggle="tooltip" title="typcn typcn-chart-pie-outline"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-chart-pie" data-bs-toggle="tooltip" title="typcn typcn-chart-pie"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-chevron-left-outline" data-bs-toggle="tooltip" title="typcn typcn-chevron-left-outline"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-chevron-left" data-bs-toggle="tooltip" title="typcn typcn-chevron-left"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-chevron-right-outline" data-bs-toggle="tooltip" title="typcn typcn-chevron-right-outline"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-chevron-right" data-bs-toggle="tooltip" title="typcn typcn-chevron-right"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-clipboard" data-bs-toggle="tooltip" title="typcn typcn-clipboard"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-cloud-storage" data-bs-toggle="tooltip" title="typcn typcn-cloud-storage"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-cloud-storage-outline" data-bs-toggle="tooltip" title="typcn typcn-cloud-storage-outline"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-code-outline" data-bs-toggle="tooltip" title="typcn typcn-code-outline"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-code" data-bs-toggle="tooltip" title="typcn typcn-code"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-coffee" data-bs-toggle="tooltip" title="typcn typcn-coffee"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-cog-outline" data-bs-toggle="tooltip" title="typcn typcn-cog-outline"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-cog" data-bs-toggle="tooltip" title="typcn typcn-cog"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-compass" data-bs-toggle="tooltip" title="typcn typcn-compass"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-contacts" data-bs-toggle="tooltip" title="typcn typcn-contacts"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-credit-card" data-bs-toggle="tooltip" title="typcn typcn-credit-card"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-css3" data-bs-toggle="tooltip" title="typcn typcn-css3"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-database" data-bs-toggle="tooltip" title="typcn typcn-database"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-delete-outline" data-bs-toggle="tooltip" title="typcn typcn-delete-outline"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-delete" data-bs-toggle="tooltip" title="typcn typcn-delete"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-device-desktop" data-bs-toggle="tooltip" title="typcn typcn-device-desktop"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-device-laptop" data-bs-toggle="tooltip" title="typcn typcn-device-laptop"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-device-phone" data-bs-toggle="tooltip" title="typcn typcn-device-phone"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-device-tablet" data-bs-toggle="tooltip" title="typcn typcn-device-tablet"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-directions" data-bs-toggle="tooltip" title="typcn typcn-directions"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-divide-outline" data-bs-toggle="tooltip" title="typcn typcn-divide-outline"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-divide" data-bs-toggle="tooltip" title="typcn typcn-divide"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-document-add" data-bs-toggle="tooltip" title="typcn typcn-document-add"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-document-delete" data-bs-toggle="tooltip" title="typcn typcn-document-delete"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-document-text" data-bs-toggle="tooltip" title="typcn typcn-document-text"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-document" data-bs-toggle="tooltip" title="typcn typcn-document"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-download-outline" data-bs-toggle="tooltip" title="typcn typcn-download-outline"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-download" data-bs-toggle="tooltip" title="typcn typcn-download"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-dropbox" data-bs-toggle="tooltip" title="typcn typcn-dropbox"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-edit" data-bs-toggle="tooltip" title="typcn typcn-edit"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-eject-outline" data-bs-toggle="tooltip" title="typcn typcn-eject-outline"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-eject" data-bs-toggle="tooltip" title="typcn typcn-eject"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-equals-outline" data-bs-toggle="tooltip" title="typcn typcn-equals-outline"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-equals" data-bs-toggle="tooltip" title="typcn typcn-equals"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-export-outline" data-bs-toggle="tooltip" title="typcn typcn-export-outline"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-export" data-bs-toggle="tooltip" title="typcn typcn-export"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-eye-outline" data-bs-toggle="tooltip" title="typcn typcn-eye-outline"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-eye" data-bs-toggle="tooltip" title="typcn typcn-eye"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-feather" data-bs-toggle="tooltip" title="typcn typcn-feather"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-film" data-bs-toggle="tooltip" title="typcn typcn-film"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-filter" data-bs-toggle="tooltip" title="typcn typcn-filter"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-flag-outline" data-bs-toggle="tooltip" title="typcn typcn-flag-outline"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-flag" data-bs-toggle="tooltip" title="typcn typcn-flag"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-flash-outline" data-bs-toggle="tooltip" title="typcn typcn-flash-outline"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-flash" data-bs-toggle="tooltip" title="typcn typcn-flash"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-flow-children" data-bs-toggle="tooltip" title="typcn typcn-flow-children"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-flow-merge" data-bs-toggle="tooltip" title="typcn typcn-flow-merge"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-flow-parallel" data-bs-toggle="tooltip" title="typcn typcn-flow-parallel"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-flow-switch" data-bs-toggle="tooltip" title="typcn typcn-flow-switch"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-folder-add" data-bs-toggle="tooltip" title="typcn typcn-folder-add"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-folder-delete" data-bs-toggle="tooltip" title="typcn typcn-folder-delete"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-folder-open" data-bs-toggle="tooltip" title="typcn typcn-folder-open"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-folder" data-bs-toggle="tooltip" title="typcn typcn-folder"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-gift" data-bs-toggle="tooltip" title="typcn typcn-gift"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-globe-outline" data-bs-toggle="tooltip" title="typcn typcn-globe-outline"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-globe" data-bs-toggle="tooltip" title="typcn typcn-globe"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-group-outline" data-bs-toggle="tooltip" title="typcn typcn-group-outline"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-group" data-bs-toggle="tooltip" title="typcn typcn-group"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-headphones" data-bs-toggle="tooltip" title="typcn typcn-headphones"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-heart-full-outline" data-bs-toggle="tooltip" title="typcn typcn-heart-full-outline"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-heart-half-outline" data-bs-toggle="tooltip" title="typcn typcn-heart-half-outline"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-heart-outline" data-bs-toggle="tooltip" title="typcn typcn-heart-outline"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-heart" data-bs-toggle="tooltip" title="typcn typcn-heart"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-home-outline" data-bs-toggle="tooltip" title="typcn typcn-home-outline"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-home" data-bs-toggle="tooltip" title="typcn typcn-home"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-html5" data-bs-toggle="tooltip" title="typcn typcn-html5"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-image-outline" data-bs-toggle="tooltip" title="typcn typcn-image-outline"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-image" data-bs-toggle="tooltip" title="typcn typcn-image"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-infinity-outline" data-bs-toggle="tooltip" title="typcn typcn-infinity-outline"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-info-large-outline" data-bs-toggle="tooltip" title="typcn typcn-info-large-outline"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-info-large" data-bs-toggle="tooltip" title="typcn typcn-info-large"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-info-outline" data-bs-toggle="tooltip" title="typcn typcn-info-outline"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-info" data-bs-toggle="tooltip" title="typcn typcn-info"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-input-checked-outline" data-bs-toggle="tooltip" title="typcn typcn-input-checked-outline"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-input-checked" data-bs-toggle="tooltip" title="typcn typcn-input-checked"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-key-outline" data-bs-toggle="tooltip" title="typcn typcn-key-outline"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-key" data-bs-toggle="tooltip" title="typcn typcn-key"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-keyboard" data-bs-toggle="tooltip" title="typcn typcn-keyboard"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-leaf" data-bs-toggle="tooltip" title="typcn typcn-leaf"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-lightbulb" data-bs-toggle="tooltip" title="typcn typcn-lightbulb"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-link-outline" data-bs-toggle="tooltip" title="typcn typcn-link-outline"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-link" data-bs-toggle="tooltip" title="typcn typcn-link"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-location-arrow-outline" data-bs-toggle="tooltip" title="typcn typcn-location-arrow-outline"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-location-arrow" data-bs-toggle="tooltip" title="typcn typcn-location-arrow"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-location-outline" data-bs-toggle="tooltip" title="typcn typcn-location-outline"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-location" data-bs-toggle="tooltip" title="typcn typcn-location"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-lock-closed-outline" data-bs-toggle="tooltip" title="typcn typcn-lock-closed-outline"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-lock-closed" data-bs-toggle="tooltip" title="typcn typcn-lock-closed"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-lock-open-outline" data-bs-toggle="tooltip" title="typcn typcn-lock-open-outline"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-lock-open" data-bs-toggle="tooltip" title="typcn typcn-lock-open"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-mail" data-bs-toggle="tooltip" title="typcn typcn-mail"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-map" data-bs-toggle="tooltip" title="typcn typcn-map"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-media-eject-outline" data-bs-toggle="tooltip" title="typcn typcn-media-eject-outline"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-media-eject" data-bs-toggle="tooltip" title="typcn typcn-media-eject"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-media-fast-forward-outline" data-bs-toggle="tooltip" title="typcn typcn-media-fast-forward-outline"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-media-fast-forward" data-bs-toggle="tooltip" title="typcn typcn-media-fast-forward"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-media-pause-outline" data-bs-toggle="tooltip" title="typcn typcn-media-pause-outline"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-media-pause" data-bs-toggle="tooltip" title="typcn typcn-media-pause"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-media-play-outline" data-bs-toggle="tooltip" title="typcn typcn-media-play-outline"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-media-play-reverse-outline" data-bs-toggle="tooltip" title="typcn typcn-media-play-reverse-outline"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-media-play-reverse" data-bs-toggle="tooltip" title="typcn typcn-media-play-reverse"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-media-play" data-bs-toggle="tooltip" title="typcn typcn-media-play"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-media-record-outline" data-bs-toggle="tooltip" title="typcn typcn-media-record-outline"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-media-record" data-bs-toggle="tooltip" title="typcn typcn-media-record"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-media-rewind-outline" data-bs-toggle="tooltip" title="typcn typcn-media-rewind-outline"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-media-rewind" data-bs-toggle="tooltip" title="typcn typcn-media-rewind"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-media-stop-outline" data-bs-toggle="tooltip" title="typcn typcn-media-stop-outline"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-media-stop" data-bs-toggle="tooltip" title="typcn typcn-media-stop"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-message-typing" data-bs-toggle="tooltip" title="typcn typcn-message-typing"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-message" data-bs-toggle="tooltip" title="typcn typcn-message"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-messages" data-bs-toggle="tooltip" title="typcn typcn-messages"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-microphone-outline" data-bs-toggle="tooltip" title="typcn typcn-microphone-outline"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-microphone" data-bs-toggle="tooltip" title="typcn typcn-microphone"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-minus-outline" data-bs-toggle="tooltip" title="typcn typcn-minus-outline"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-minus" data-bs-toggle="tooltip" title="typcn typcn-minus"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-mortar-board" data-bs-toggle="tooltip" title="typcn typcn-mortar-board"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-news" data-bs-toggle="tooltip" title="typcn typcn-news"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-notes-outline" data-bs-toggle="tooltip" title="typcn typcn-notes-outline"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-notes" data-bs-toggle="tooltip" title="typcn typcn-notes"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-pen" data-bs-toggle="tooltip" title="typcn typcn-pen"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-pencil" data-bs-toggle="tooltip" title="typcn typcn-pencil"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-phone-outline" data-bs-toggle="tooltip" title="typcn typcn-phone-outline"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-phone" data-bs-toggle="tooltip" title="typcn typcn-phone"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-pi-outline" data-bs-toggle="tooltip" title="typcn typcn-pi-outline"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-pi" data-bs-toggle="tooltip" title="typcn typcn-pi"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-pin-outline" data-bs-toggle="tooltip" title="typcn typcn-pin-outline"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-pin" data-bs-toggle="tooltip" title="typcn typcn-pin"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-pipette" data-bs-toggle="tooltip" title="typcn typcn-pipette"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-plane-outline" data-bs-toggle="tooltip" title="typcn typcn-plane-outline"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-plane" data-bs-toggle="tooltip" title="typcn typcn-plane"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-plug" data-bs-toggle="tooltip" title="typcn typcn-plug"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-plus-outline" data-bs-toggle="tooltip" title="typcn typcn-plus-outline"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-plus" data-bs-toggle="tooltip" title="typcn typcn-plus"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-point-of-interest-outline" data-bs-toggle="tooltip" title="typcn typcn-point-of-interest-outline"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-point-of-interest" data-bs-toggle="tooltip" title="typcn typcn-point-of-interest"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-power-outline" data-bs-toggle="tooltip" title="typcn typcn-power-outline"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-power" data-bs-toggle="tooltip" title="typcn typcn-power"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-printer" data-bs-toggle="tooltip" title="typcn typcn-printer"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-puzzle-outline" data-bs-toggle="tooltip" title="typcn typcn-puzzle-outline"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-puzzle" data-bs-toggle="tooltip" title="typcn typcn-puzzle"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-radar-outline" data-bs-toggle="tooltip" title="typcn typcn-radar-outline"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-radar" data-bs-toggle="tooltip" title="typcn typcn-radar"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-refresh-outline" data-bs-toggle="tooltip" title="typcn typcn-refresh-outline"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-refresh" data-bs-toggle="tooltip" title="typcn typcn-refresh"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-rss-outline" data-bs-toggle="tooltip" title="typcn typcn-rss-outline"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-rss" data-bs-toggle="tooltip" title="typcn typcn-rss"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-scissors-outline" data-bs-toggle="tooltip" title="typcn typcn-scissors-outline"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-scissors" data-bs-toggle="tooltip" title="typcn typcn-scissors"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-shopping-bag" data-bs-toggle="tooltip" title="typcn typcn-shopping-bag"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-shopping-cart" data-bs-toggle="tooltip" title="typcn typcn-shopping-cart"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-social-at-circular" data-bs-toggle="tooltip" title="typcn typcn-social-at-circular"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-social-dribbble-circular" data-bs-toggle="tooltip" title="typcn typcn-social-dribbble-circular"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-social-dribbble" data-bs-toggle="tooltip" title="typcn typcn-social-dribbble"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-social-facebook-circular" data-bs-toggle="tooltip" title="typcn typcn-social-facebook-circular"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-social-facebook" data-bs-toggle="tooltip" title="typcn typcn-social-facebook"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-social-flickr-circular" data-bs-toggle="tooltip" title="typcn typcn-social-flickr-circular"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-social-flickr" data-bs-toggle="tooltip" title="typcn typcn-social-flickr"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-social-github-circular" data-bs-toggle="tooltip" title="typcn typcn-social-github-circular"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-social-github" data-bs-toggle="tooltip" title="typcn typcn-social-github"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-social-google-plus-circular" data-bs-toggle="tooltip" title="typcn typcn-social-google-plus-circular"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-social-google-plus" data-bs-toggle="tooltip" title="typcn typcn-social-google-plus"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-social-instagram-circular" data-bs-toggle="tooltip" title="typcn typcn-social-instagram-circular"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-social-instagram" data-bs-toggle="tooltip" title="typcn typcn-social-instagram"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-social-last-fm-circular" data-bs-toggle="tooltip" title="typcn typcn-social-last-fm-circular"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-social-last-fm" data-bs-toggle="tooltip" title="typcn typcn-social-last-fm"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-social-linkedin-circular" data-bs-toggle="tooltip" title="typcn typcn-social-linkedin-circular"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-social-linkedin" data-bs-toggle="tooltip" title="typcn typcn-social-linkedin"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-social-pinterest-circular" data-bs-toggle="tooltip" title="typcn typcn-social-pinterest-circular"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-social-pinterest" data-bs-toggle="tooltip" title="typcn typcn-social-pinterest"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-social-skype-outline" data-bs-toggle="tooltip" title="typcn typcn-social-skype-outline"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-social-skype" data-bs-toggle="tooltip" title="typcn typcn-social-skype"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-social-tumbler-circular" data-bs-toggle="tooltip" title="typcn typcn-social-tumbler-circular"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-social-tumbler" data-bs-toggle="tooltip" title="typcn typcn-social-tumbler"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-social-twitter-circular" data-bs-toggle="tooltip" title="typcn typcn-social-twitter-circular"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-social-twitter" data-bs-toggle="tooltip" title="typcn typcn-social-twitter"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-social-vimeo-circular" data-bs-toggle="tooltip" title="typcn typcn-social-vimeo-circular"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-social-vimeo" data-bs-toggle="tooltip" title="typcn typcn-social-vimeo"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-social-youtube-circular" data-bs-toggle="tooltip" title="typcn typcn-social-youtube-circular"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-social-youtube" data-bs-toggle="tooltip" title="typcn typcn-social-youtube"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-sort-alphabetically-outline" data-bs-toggle="tooltip" title="typcn typcn-sort-alphabetically-outline"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-sort-alphabetically" data-bs-toggle="tooltip" title="typcn typcn-sort-alphabetically"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-sort-numerically-outline" data-bs-toggle="tooltip" title="typcn typcn-sort-numerically-outline"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-sort-numerically" data-bs-toggle="tooltip" title="typcn typcn-sort-numerically"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-spanner-outline" data-bs-toggle="tooltip" title="typcn typcn-spanner-outline"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-spanner" data-bs-toggle="tooltip" title="typcn typcn-spanner"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-spiral" data-bs-toggle="tooltip" title="typcn typcn-spiral"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-star-full-outline" data-bs-toggle="tooltip" title="typcn typcn-star-full-outline"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-star-half-outline" data-bs-toggle="tooltip" title="typcn typcn-star-half-outline"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-star-half" data-bs-toggle="tooltip" title="typcn typcn-star-half"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-star-outline" data-bs-toggle="tooltip" title="typcn typcn-star-outline"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-star" data-bs-toggle="tooltip" title="typcn typcn-star"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-starburst-outline" data-bs-toggle="tooltip" title="typcn typcn-starburst-outline"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-starburst" data-bs-toggle="tooltip" title="typcn typcn-starburst"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-stopwatch" data-bs-toggle="tooltip" title="typcn typcn-stopwatch"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-support" data-bs-toggle="tooltip" title="typcn typcn-support"></i></li>
											<li className="icons-list-item"><i className="typcn typcn-tabs-outline" data-bs-toggle="tooltip" title="typcn typcn-tabs-outline"></i></li>
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

export default IconTypicon