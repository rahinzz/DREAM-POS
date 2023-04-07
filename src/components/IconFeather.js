import React from 'react';
import { Link } from 'react-router-dom';

const IconFeather = () => {
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
				
					{/* Page Header  */}
					<div className="page-header">
						<div className="row">
							<div className="col-sm-12">
								<h3 className="page-title">Feather Icon</h3>
								<ul className="breadcrumb">
									<li className="breadcrumb-item"><Link to="/home">Dashboard</Link></li>
									<li className="breadcrumb-item active">Feather Icon</li>
								</ul>
							</div>
						</div>
					</div>	
					{/* /Page Header				 */}
					
					<div className="row">
					
						{/* Chart */}
						<div className="col-md-12">	
							<div className="card">
								<div className="card-header">
									<div className="card-title">Feather Icon</div>
								</div>
								<div className="card-body">
									<div className="icons-items">
										<ul className="icons-list">
											<li><i className="fe fe-activity" data-bs-toggle="tooltip" title="fe fe-activity"></i></li>
											<li><i className="fe fe-airplay" data-bs-toggle="tooltip" title="fe fe-airplay"></i></li>
											<li><i className="fe fe-alert-circle" data-bs-toggle="tooltip" title="fe fe-alert-circle"></i></li>
											<li><i className="fe fe-alert-octagon" data-bs-toggle="tooltip" title="fe fe-alert-octagon"></i></li>
											<li><i className="fe fe-alert-triangle" data-bs-toggle="tooltip" title="fe fe-alert-triangle"></i></li>
											<li><i className="fe fe-align-center" data-bs-toggle="tooltip" title="fe fe-align-center"></i></li>
											<li><i className="fe fe-align-justify" data-bs-toggle="tooltip" title="fe fe-align-justify"></i></li>
											<li><i className="fe fe-align-left" data-bs-toggle="tooltip" title="fe fe-align-left"></i></li>
											<li><i className="fe fe-align-right" data-bs-toggle="tooltip" title="fe fe-align-right"></i></li>
											<li><i className="fe fe-anchor" data-bs-toggle="tooltip" title="fe fe-anchor"></i></li>
											<li><i className="fe fe-aperture" data-bs-toggle="tooltip" title="fe fe-aperture"></i></li>
											<li><i className="fe fe-arrow-down" data-bs-toggle="tooltip" title="fe fe-arrow-down"></i></li>
											<li><i className="fe fe-arrow-down-circle" data-bs-toggle="tooltip" title="fe fe-arrow-down-circle"></i></li>
											<li><i className="fe fe-arrow-down-left" data-bs-toggle="tooltip" title="fe fe-arrow-down-left"></i></li>
											<li><i className="fe fe-arrow-down-right" data-bs-toggle="tooltip" title="fe fe-arrow-down-right"></i></li>
											<li><i className="fe fe-arrow-left" data-bs-toggle="tooltip" title="fe fe-arrow-left"></i></li>
											<li><i className="fe fe-arrow-left-circle" data-bs-toggle="tooltip" title="fe fe-arrow-left-circle"></i></li>
											<li><i className="fe fe-arrow-right" data-bs-toggle="tooltip" title="fe fe-arrow-right"></i></li>
											<li><i className="fe fe-arrow-right-circle" data-bs-toggle="tooltip" title="fe fe-arrow-right-circle"></i></li>
											<li><i className="fe fe-arrow-up" data-bs-toggle="tooltip" title="fe fe-arrow-up"></i></li>
											<li><i className="fe fe-arrow-up-circle" data-bs-toggle="tooltip" title="fe fe-arrow-up-circle"></i></li>
											<li><i className="fe fe-arrow-up-left" data-bs-toggle="tooltip" title="fe fe-arrow-up-left"></i></li>
											<li><i className="fe fe-arrow-up-right" data-bs-toggle="tooltip" title="fe fe-arrow-up-right"></i></li>
											<li><i className="fe fe-at-sign" data-bs-toggle="tooltip" title="fe fe-at-sign"></i></li>
											<li><i className="fe fe-award" data-bs-toggle="tooltip" title="fe fe-award"></i></li>
											<li><i className="fe fe-bar-chart" data-bs-toggle="tooltip" title="fe fe-bar-chart"></i></li>
											<li><i className="fe fe-bar-chart-2" data-bs-toggle="tooltip" title="fe fe-bar-chart-2"></i></li>
											<li><i className="fe fe-battery" data-bs-toggle="tooltip" title="fe fe-battery"></i></li>
											<li><i className="fe fe-battery-charging" data-bs-toggle="tooltip" title="fe fe-battery-charging"></i></li>
											<li><i className="fe fe-bell" data-bs-toggle="tooltip" title="fe fe-bell"></i></li>
											<li><i className="fe fe-bell-off" data-bs-toggle="tooltip" title="fe fe-bell-off"></i></li>
											<li><i className="fe fe-bluetooth" data-bs-toggle="tooltip" title="fe fe-bluetooth"></i></li>
											<li><i className="fe fe-bold" data-bs-toggle="tooltip" title="fe fe-bold"></i></li>
											<li><i className="fe fe-book" data-bs-toggle="tooltip" title="fe fe-book"></i></li>
											<li><i className="fe fe-book-open" data-bs-toggle="tooltip" title="fe fe-book-open"></i></li>
											<li><i className="fe fe-bookmark" data-bs-toggle="tooltip" title="fe fe-bookmark"></i></li>
											<li><i className="fe fe-box" data-bs-toggle="tooltip" title="fe fe-box"></i></li>
											<li><i className="fe fe-briefcase" data-bs-toggle="tooltip" title="fe fe-briefcase"></i></li>
											<li><i className="fe fe-calendar" data-bs-toggle="tooltip" title="fe fe-calendar"></i></li>
											<li><i className="fe fe-camera" data-bs-toggle="tooltip" title="fe fe-camera"></i></li>
											<li><i className="fe fe-camera-off" data-bs-toggle="tooltip" title="fe fe-camera-off"></i></li>
											<li><i className="fe fe-cast" data-bs-toggle="tooltip" title="fe fe-cast"></i></li>
											<li><i className="fe fe-check" data-bs-toggle="tooltip" title="fe fe-check"></i></li>
											<li><i className="fe fe-check-circle" data-bs-toggle="tooltip" title="fe fe-check-circle"></i></li>
											<li><i className="fe fe-check-square" data-bs-toggle="tooltip" title="fe fe-check-square"></i></li>
											<li><i className="fe fe-chevron-down" data-bs-toggle="tooltip" title="fe fe-chevron-down"></i></li>
											<li><i className="fe fe-chevron-left" data-bs-toggle="tooltip" title="fe fe-chevron-left"></i></li>
											<li><i className="fe fe-chevron-right" data-bs-toggle="tooltip" title="fe fe-chevron-right"></i></li>
											<li><i className="fe fe-chevron-up" data-bs-toggle="tooltip" title="fe fe-chevron-up"></i></li>
											<li><i className="fe fe-chevrons-down" data-bs-toggle="tooltip" title="fe fe-chevrons-down"></i></li>
											<li><i className="fe fe-chevrons-left" data-bs-toggle="tooltip" title="fe fe-chevrons-left"></i></li>
											<li><i className="fe fe-chevrons-right" data-bs-toggle="tooltip" title="fe fe-chevrons-right"></i></li>
											<li><i className="fe fe-chevrons-up" data-bs-toggle="tooltip" title="fe fe-chevrons-up"></i></li>
											<li><i className="fe fe-chrome" data-bs-toggle="tooltip" title="fe fe-chrome"></i></li>
											<li><i className="fe fe-circle" data-bs-toggle="tooltip" title="fe fe-circle"></i></li>
											<li><i className="fe fe-clipboard" data-bs-toggle="tooltip" title="fe fe-clipboard"></i></li>
											<li><i className="fe fe-clock" data-bs-toggle="tooltip" title="fe fe-clock"></i></li>
											<li><i className="fe fe-cloud" data-bs-toggle="tooltip" title="fe fe-cloud"></i></li>
											<li><i className="fe fe-cloud-drizzle" data-bs-toggle="tooltip" title="fe fe-cloud-drizzle"></i></li>
											<li><i className="fe fe-cloud-lightning" data-bs-toggle="tooltip" title="fe fe-cloud-lightning"></i></li>
											<li><i className="fe fe-cloud-off" data-bs-toggle="tooltip" title="fe fe-cloud-off"></i></li>
											<li><i className="fe fe-cloud-rain" data-bs-toggle="tooltip" title="fe fe-cloud-rain"></i></li>
											<li><i className="fe fe-cloud-snow" data-bs-toggle="tooltip" title="fe fe-cloud-snow"></i></li>
											<li><i className="fe fe-code" data-bs-toggle="tooltip" title="fe fe-code"></i></li>
											<li><i className="fe fe-codepen" data-bs-toggle="tooltip" title="fe fe-codepen"></i></li>
											<li><i className="fe fe-command" data-bs-toggle="tooltip" title="fe fe-command"></i></li>
											<li><i className="fe fe-compass" data-bs-toggle="tooltip" title="fe fe-compass"></i></li>
											<li><i className="fe fe-copy" data-bs-toggle="tooltip" title="fe fe-copy"></i></li>
											<li><i className="fe fe-corner-down-left" data-bs-toggle="tooltip" title="fe fe-corner-down-left"></i></li>
											<li><i className="fe fe-corner-down-right" data-bs-toggle="tooltip" title="fe fe-corner-down-right"></i></li>
											<li><i className="fe fe-corner-left-down" data-bs-toggle="tooltip" title="fe fe-corner-left-down"></i></li>
											<li><i className="fe fe-corner-left-up" data-bs-toggle="tooltip" title="fe fe-corner-left-up"></i></li>
											<li><i className="fe fe-corner-right-down" data-bs-toggle="tooltip" title="fe fe-corner-right-down"></i></li>
											<li><i className="fe fe-corner-right-up" data-bs-toggle="tooltip" title="fe fe-corner-right-up"></i></li>
											<li><i className="fe fe-corner-up-left" data-bs-toggle="tooltip" title="fe fe-corner-up-left"></i></li>
											<li><i className="fe fe-corner-up-right" data-bs-toggle="tooltip" title="fe fe-corner-up-right"></i></li>
											<li><i className="fe fe-cpu" data-bs-toggle="tooltip" title="fe fe-cpu"></i></li>
											<li><i className="fe fe-credit-card" data-bs-toggle="tooltip" title="fe fe-credit-card"></i></li>
											<li><i className="fe fe-crop" data-bs-toggle="tooltip" title="fe fe-crop"></i></li>
											<li><i className="fe fe-crosshair" data-bs-toggle="tooltip" title="fe fe-crosshair"></i></li>
											<li><i className="fe fe-database" data-bs-toggle="tooltip" title="fe fe-database"></i></li>
											<li><i className="fe fe-delete" data-bs-toggle="tooltip" title="fe fe-delete"></i></li>
											<li><i className="fe fe-disc" data-bs-toggle="tooltip" title="fe fe-disc"></i></li>
											<li><i className="fe fe-dollar-sign" data-bs-toggle="tooltip" title="fe fe-dollar-sign"></i></li>
											<li><i className="fe fe-download" data-bs-toggle="tooltip" title="fe fe-download"></i></li>
											<li><i className="fe fe-download-cloud" data-bs-toggle="tooltip" title="fe fe-download-cloud"></i></li>
											<li><i className="fe fe-droplet" data-bs-toggle="tooltip" title="fe fe-droplet"></i></li>
											<li><i className="fe fe-edit" data-bs-toggle="tooltip" title="fe fe-edit"></i></li>
											<li><i className="fe fe-edit-2" data-bs-toggle="tooltip" title="fe fe-edit-2"></i></li>
											<li><i className="fe fe-edit-3" data-bs-toggle="tooltip" title="fe fe-edit-3"></i></li>
											<li><i className="fe fe-external-link" data-bs-toggle="tooltip" title="fe fe-external-link"></i></li>
											<li><i className="fe fe-eye" data-bs-toggle="tooltip" title="fe fe-eye"></i></li>
											<li><i className="fe fe-eye-off" data-bs-toggle="tooltip" title="fe fe-eye-off"></i></li>
											<li><i className="fe fe-facebook" data-bs-toggle="tooltip" title="fe fe-facebook"></i></li>
											<li><i className="fe fe-fast-forward" data-bs-toggle="tooltip" title="fe fe-fast-forward"></i></li>
											<li><i className="fe fe-feather" data-bs-toggle="tooltip" title="fe fe-feather"></i></li>
											<li><i className="fe fe-file" data-bs-toggle="tooltip" title="fe fe-file"></i></li>
											<li><i className="fe fe-file-minus" data-bs-toggle="tooltip" title="fe fe-file-minus"></i></li>
											<li><i className="fe fe-file-plus" data-bs-toggle="tooltip" title="fe fe-file-plus"></i></li>
											<li><i className="fe fe-file-text" data-bs-toggle="tooltip" title="fe fe-file-text"></i></li>
											<li><i className="fe fe-film" data-bs-toggle="tooltip" title="fe fe-film"></i></li>
											<li><i className="fe fe-filter" data-bs-toggle="tooltip" title="fe fe-filter"></i></li>
											<li><i className="fe fe-flag" data-bs-toggle="tooltip" title="fe fe-flag"></i></li>
											<li><i className="fe fe-folder" data-bs-toggle="tooltip" title="fe fe-folder"></i></li>
											<li><i className="fe fe-folder-minus" data-bs-toggle="tooltip" title="fe fe-folder-minus"></i></li>
											<li><i className="fe fe-folder-plus" data-bs-toggle="tooltip" title="fe fe-folder-plus"></i></li>
											<li><i className="fe fe-git-branch" data-bs-toggle="tooltip" title="fe fe-git-branch"></i></li>
											<li><i className="fe fe-git-commit" data-bs-toggle="tooltip" title="fe fe-git-commit"></i></li>
											<li><i className="fe fe-git-merge" data-bs-toggle="tooltip" title="fe fe-git-merge"></i></li>
											<li><i className="fe fe-git-pull-request" data-bs-toggle="tooltip" title="fe fe-git-pull-request"></i></li>
											<li><i className="fe fe-github" data-bs-toggle="tooltip" title="fe fe-github"></i></li>
											<li><i className="fe fe-gitlab" data-bs-toggle="tooltip" title="fe fe-gitlab"></i></li>
											<li><i className="fe fe-globe" data-bs-toggle="tooltip" title="fe fe-globe"></i></li>
											<li><i className="fe fe-grid" data-bs-toggle="tooltip" title="fe fe-grid"></i></li>
											<li><i className="fe fe-hard-drive" data-bs-toggle="tooltip" title="fe fe-hard-drive"></i></li>
											<li><i className="fe fe-hash" data-bs-toggle="tooltip" title="fe fe-hash"></i></li>
											<li><i className="fe fe-headphones" data-bs-toggle="tooltip" title="fe fe-headphones"></i></li>
											<li><i className="fe fe-heart" data-bs-toggle="tooltip" title="fe fe-heart"></i></li>
											<li><i className="fe fe-help-circle" data-bs-toggle="tooltip" title="fe fe-help-circle"></i></li>
											<li><i className="fe fe-home" data-bs-toggle="tooltip" title="fe fe-home"></i></li>
											<li><i className="fe fe-image" data-bs-toggle="tooltip" title="fe fe-image"></i></li>
											<li><i className="fe fe-inbox" data-bs-toggle="tooltip" title="fe fe-inbox"></i></li>
											<li><i className="fe fe-info" data-bs-toggle="tooltip" title="fe fe-info"></i></li>
											<li><i className="fe fe-instagram" data-bs-toggle="tooltip" title="fe fe-instagram"></i></li>
											<li><i className="fe fe-italic" data-bs-toggle="tooltip" title="fe fe-italic"></i></li>
											<li><i className="fe fe-layers" data-bs-toggle="tooltip" title="fe fe-layers"></i></li>
											<li><i className="fe fe-layout" data-bs-toggle="tooltip" title="fe fe-layout"></i></li>
											<li><i className="fe fe-life-buoy" data-bs-toggle="tooltip" title="fe fe-life-buoy"></i></li>
											<li><i className="fe fe-link" data-bs-toggle="tooltip" title="fe fe-link"></i></li>
											<li><i className="fe fe-link-2" data-bs-toggle="tooltip" title="fe fe-link-2"></i></li>
											<li><i className="fe fe-linkedin" data-bs-toggle="tooltip" title="fe fe-linkedin"></i></li>
											<li><i className="fe fe-list" data-bs-toggle="tooltip" title="fe fe-list"></i></li>
											<li><i className="fe fe-loader" data-bs-toggle="tooltip" title="fe fe-loader"></i></li>
											<li><i className="fe fe-lock" data-bs-toggle="tooltip" title="fe fe-lock"></i></li>
											<li><i className="fe fe-log-in" data-bs-toggle="tooltip" title="fe fe-log-in"></i></li>
											<li><i className="fe fe-log-out" data-bs-toggle="tooltip" title="fe fe-log-out"></i></li>
											<li><i className="fe fe-mail" data-bs-toggle="tooltip" title="fe fe-mail"></i></li>
											<li><i className="fe fe-map" data-bs-toggle="tooltip" title="fe fe-map"></i></li>
											<li><i className="fe fe-map-pin" data-bs-toggle="tooltip" title="fe fe-map-pin"></i></li>
											<li><i className="fe fe-maximize" data-bs-toggle="tooltip" title="fe fe-maximize"></i></li>
											<li><i className="fe fe-maximize-2" data-bs-toggle="tooltip" title="fe fe-maximize-2"></i></li>
											<li><i className="fe fe-menu" data-bs-toggle="tooltip" title="fe fe-menu"></i></li>
											<li><i className="fe fe-message-circle" data-bs-toggle="tooltip" title="fe fe-message-circle"></i></li>
											<li><i className="fe fe-message-square" data-bs-toggle="tooltip" title="fe fe-message-square"></i></li>
											<li><i className="fe fe-mic" data-bs-toggle="tooltip" title="fe fe-mic"></i></li>
											<li><i className="fe fe-mic-off" data-bs-toggle="tooltip" title="fe fe-mic-off"></i></li>
											<li><i className="fe fe-minimize" data-bs-toggle="tooltip" title="fe fe-minimize"></i></li>
											<li><i className="fe fe-minimize-2" data-bs-toggle="tooltip" title="fe fe-minimize-2"></i></li>
											<li><i className="fe fe-minus" data-bs-toggle="tooltip" title="fe fe-minus"></i></li>
											<li><i className="fe fe-minus-circle" data-bs-toggle="tooltip" title="fe fe-minus-circle"></i></li>
											<li><i className="fe fe-minus-square" data-bs-toggle="tooltip" title="fe fe-minus-square"></i></li>
											<li><i className="fe fe-monitor" data-bs-toggle="tooltip" title="fe fe-monitor"></i></li>
											<li><i className="fe fe-moon" data-bs-toggle="tooltip" title="fe fe-moon"></i></li>
											<li><i className="fe fe-more-horizontal" data-bs-toggle="tooltip" title="fe fe-more-horizontal"></i></li>
											<li><i className="fe fe-more-vertical" data-bs-toggle="tooltip" title="fe fe-more-vertical"></i></li>
											<li><i className="fe fe-move" data-bs-toggle="tooltip" title="fe fe-move"></i></li>
											<li><i className="fe fe-music" data-bs-toggle="tooltip" title="fe fe-music"></i></li>
											<li><i className="fe fe-navigation" data-bs-toggle="tooltip" title="fe fe-navigation"></i></li>
											<li><i className="fe fe-navigation-2" data-bs-toggle="tooltip" title="fe fe-navigation-2"></i></li>
											<li><i className="fe fe-octagon" data-bs-toggle="tooltip" title="fe fe-octagon"></i></li>
											<li><i className="fe fe-package" data-bs-toggle="tooltip" title="fe fe-package"></i></li>
											<li><i className="fe fe-paperclip" data-bs-toggle="tooltip" title="fe fe-paperclip"></i></li>
											<li><i className="fe fe-pause" data-bs-toggle="tooltip" title="fe fe-pause"></i></li>
											<li><i className="fe fe-pause-circle" data-bs-toggle="tooltip" title="fe fe-pause-circle"></i></li>
											<li><i className="fe fe-percent" data-bs-toggle="tooltip" title="fe fe-percent"></i></li>
											<li><i className="fe fe-phone" data-bs-toggle="tooltip" title="fe fe-phone"></i></li>
											<li><i className="fe fe-phone-call" data-bs-toggle="tooltip" title="fe fe-phone-call"></i></li>
											<li><i className="fe fe-phone-forwarded" data-bs-toggle="tooltip" title="fe fe-phone-forwarded"></i></li>
											<li><i className="fe fe-phone-incoming" data-bs-toggle="tooltip" title="fe fe-phone-incoming"></i></li>
											<li><i className="fe fe-phone-missed" data-bs-toggle="tooltip" title="fe fe-phone-missed"></i></li>
											<li><i className="fe fe-phone-off" data-bs-toggle="tooltip" title="fe fe-phone-off"></i></li>
											<li><i className="fe fe-phone-outgoing" data-bs-toggle="tooltip" title="fe fe-phone-outgoing"></i></li>
											<li><i className="fe fe-pie-chart" data-bs-toggle="tooltip" title="fe fe-pie-chart"></i></li>
											<li><i className="fe fe-play" data-bs-toggle="tooltip" title="fe fe-play"></i></li>
											<li><i className="fe fe-play-circle" data-bs-toggle="tooltip" title="fe fe-play-circle"></i></li>
											<li><i className="fe fe-plus" data-bs-toggle="tooltip" title="fe fe-plus"></i></li>
											<li><i className="fe fe-plus-circle" data-bs-toggle="tooltip" title="fe fe-plus-circle"></i></li>
											<li><i className="fe fe-plus-square" data-bs-toggle="tooltip" title="fe fe-plus-square"></i></li>
											<li><i className="fe fe-pocket" data-bs-toggle="tooltip" title="fe fe-pocket"></i></li>
											<li><i className="fe fe-power" data-bs-toggle="tooltip" title="fe fe-power"></i></li>
											<li><i className="fe fe-printer" data-bs-toggle="tooltip" title="fe fe-printer"></i></li>
											<li><i className="fe fe-radio" data-bs-toggle="tooltip" title="fe fe-radio"></i></li>
											<li><i className="fe fe-refresh-ccw" data-bs-toggle="tooltip" title="fe fe-refresh-ccw"></i></li>
											<li><i className="fe fe-refresh-cw" data-bs-toggle="tooltip" title="fe fe-refresh-cw"></i></li>
											<li><i className="fe fe-repeat" data-bs-toggle="tooltip" title="fe fe-repeat"></i></li>
											<li><i className="fe fe-rewind" data-bs-toggle="tooltip" title="fe fe-rewind"></i></li>
											<li><i className="fe fe-rotate-ccw" data-bs-toggle="tooltip" title="fe fe-rotate-ccw"></i></li>
											<li><i className="fe fe-rotate-cw" data-bs-toggle="tooltip" title="fe fe-rotate-cw"></i></li>
											<li><i className="fe fe-rss" data-bs-toggle="tooltip" title="fe fe-rss"></i></li>
											<li><i className="fe fe-save" data-bs-toggle="tooltip" title="fe fe-save"></i></li>
											<li><i className="fe fe-scissors" data-bs-toggle="tooltip" title="fe fe-scissors"></i></li>
											<li><i className="fe fe-search" data-bs-toggle="tooltip" title="fe fe-search"></i></li>
											<li><i className="fe fe-send" data-bs-toggle="tooltip" title="fe fe-send"></i></li>
											<li><i className="fe fe-server" data-bs-toggle="tooltip" title="fe fe-server"></i></li>
											<li><i className="fe fe-settings" data-bs-toggle="tooltip" title="fe fe-settings"></i></li>
											<li><i className="fe fe-share" data-bs-toggle="tooltip" title="fe fe-share"></i></li>
											<li><i className="fe fe-share-2" data-bs-toggle="tooltip" title="fe fe-share-2"></i></li>
											<li><i className="fe fe-shield" data-bs-toggle="tooltip" title="fe fe-shield"></i></li>
											<li><i className="fe fe-shield-off" data-bs-toggle="tooltip" title="fe fe-shield-off"></i></li>
											<li><i className="fe fe-shopping-bag" data-bs-toggle="tooltip" title="fe fe-shopping-bag"></i></li>
											<li><i className="fe fe-shopping-cart" data-bs-toggle="tooltip" title="fe fe-shopping-cart"></i></li>
											<li><i className="fe fe-shuffle" data-bs-toggle="tooltip" title="fe fe-shuffle"></i></li>
											<li><i className="fe fe-sidebar" data-bs-toggle="tooltip" title="fe fe-sidebar"></i></li>
											<li><i className="fe fe-skip-back" data-bs-toggle="tooltip" title="fe fe-skip-back"></i></li>
											<li><i className="fe fe-skip-forward" data-bs-toggle="tooltip" title="fe fe-skip-forward"></i></li>
											<li><i className="fe fe-slack" data-bs-toggle="tooltip" title="fe fe-slack"></i></li>
											<li><i className="fe fe-slash" data-bs-toggle="tooltip" title="fe fe-slash"></i></li>
											<li><i className="fe fe-sliders" data-bs-toggle="tooltip" title="fe fe-sliders"></i></li>
											<li><i className="fe fe-smartphone" data-bs-toggle="tooltip" title="fe fe-smartphone"></i></li>
											<li><i className="fe fe-speaker" data-bs-toggle="tooltip" title="fe fe-speaker"></i></li>
											<li><i className="fe fe-square" data-bs-toggle="tooltip" title="fe fe-square"></i></li>
											<li><i className="fe fe-star" data-bs-toggle="tooltip" title="fe fe-star"></i></li>
											<li><i className="fe fe-stop-circle" data-bs-toggle="tooltip" title="fe fe-stop-circle"></i></li>
											<li><i className="fe fe-sun" data-bs-toggle="tooltip" title="fe fe-sun"></i></li>
											<li><i className="fe fe-sunrise" data-bs-toggle="tooltip" title="fe fe-sunrise"></i></li>
											<li><i className="fe fe-sunset" data-bs-toggle="tooltip" title="fe fe-sunset"></i></li>
											<li><i className="fe fe-tablet" data-bs-toggle="tooltip" title="fe fe-tablet"></i></li>
											<li><i className="fe fe-tag" data-bs-toggle="tooltip" title="fe fe-tag"></i></li>
											<li><i className="fe fe-target" data-bs-toggle="tooltip" title="fe fe-target"></i></li>
											<li><i className="fe fe-terminal" data-bs-toggle="tooltip" title="fe fe-terminal"></i></li>
											<li><i className="fe fe-thermometer" data-bs-toggle="tooltip" title="fe fe-thermometer"></i></li>
											<li><i className="fe fe-thumbs-down" data-bs-toggle="tooltip" title="fe fe-thumbs-down"></i></li>
											<li><i className="fe fe-thumbs-up" data-bs-toggle="tooltip" title="fe fe-thumbs-up"></i></li>
											<li><i className="fe fe-toggle-left" data-bs-toggle="tooltip" title="fe fe-toggle-left"></i></li>
											<li><i className="fe fe-toggle-right" data-bs-toggle="tooltip" title="fe fe-toggle-right"></i></li>
											<li><i className="fe fe-trash" data-bs-toggle="tooltip" title="fe fe-trash"></i></li>
											<li><i className="fe fe-trash-2" data-bs-toggle="tooltip" title="fe fe-trash-2"></i></li>
											<li><i className="fe fe-trending-down" data-bs-toggle="tooltip" title="fe fe-trending-down"></i></li>
											<li><i className="fe fe-trending-up" data-bs-toggle="tooltip" title="fe fe-trending-up"></i></li>
											<li><i className="fe fe-triangle" data-bs-toggle="tooltip" title="fe fe-triangle"></i></li>
											<li><i className="fe fe-truck" data-bs-toggle="tooltip" title="fe fe-truck"></i></li>
											<li><i className="fe fe-tv" data-bs-toggle="tooltip" title="fe fe-tv"></i></li>
											<li><i className="fe fe-twitter" data-bs-toggle="tooltip" title="fe fe-twitter"></i></li>
											<li><i className="fe fe-type" data-bs-toggle="tooltip" title="fe fe-type"></i></li>
											<li><i className="fe fe-umbrella" data-bs-toggle="tooltip" title="fe fe-umbrella"></i></li>
											<li><i className="fe fe-underline" data-bs-toggle="tooltip" title="fe fe-underline"></i></li>
											<li><i className="fe fe-unlock" data-bs-toggle="tooltip" title="fe fe-unlock"></i></li>
											<li><i className="fe fe-upload" data-bs-toggle="tooltip" title="fe fe-upload"></i></li>
											<li><i className="fe fe-upload-cloud" data-bs-toggle="tooltip" title="fe fe-upload-cloud"></i></li>
											<li><i className="fe fe-user" data-bs-toggle="tooltip" title="fe fe-user"></i></li>
											<li><i className="fe fe-user-check" data-bs-toggle="tooltip" title="fe fe-user-check"></i></li>
											<li><i className="fe fe-user-minus" data-bs-toggle="tooltip" title="fe fe-user-minus"></i></li>
											<li><i className="fe fe-user-plus" data-bs-toggle="tooltip" title="fe fe-user-plus"></i></li>
											<li><i className="fe fe-user-x" data-bs-toggle="tooltip" title="fe fe-user-x"></i></li>
											<li><i className="fe fe-users" data-bs-toggle="tooltip" title="fe fe-users"></i></li>
											<li><i className="fe fe-video" data-bs-toggle="tooltip" title="fe fe-video"></i></li>
											<li><i className="fe fe-video-off" data-bs-toggle="tooltip" title="fe fe-video-off"></i></li>
											<li><i className="fe fe-voicemail" data-bs-toggle="tooltip" title="fe fe-voicemail"></i></li>
											<li><i className="fe fe-volume" data-bs-toggle="tooltip" title="fe fe-volume"></i></li>
											<li><i className="fe fe-volume-1" data-bs-toggle="tooltip" title="fe fe-volume-1"></i></li>
											<li><i className="fe fe-volume-2" data-bs-toggle="tooltip" title="fe fe-volume-2"></i></li>
											<li><i className="fe fe-volume-x" data-bs-toggle="tooltip" title="fe fe-volume-x"></i></li>
											<li><i className="fe fe-watch" data-bs-toggle="tooltip" title="fe fe-watch"></i></li>
											<li><i className="fe fe-wifi" data-bs-toggle="tooltip" title="fe fe-wifi"></i></li>
											<li><i className="fe fe-wifi-off" data-bs-toggle="tooltip" title="fe fe-wifi-off"></i></li>
											<li><i className="fe fe-wind" data-bs-toggle="tooltip" title="fe fe-wind"></i></li>
											<li><i className="fe fe-x" data-bs-toggle="tooltip" title="fe fe-x"></i></li>
											<li><i className="fe fe-x-circle" data-bs-toggle="tooltip" title="fe fe-x-circle"></i></li>
											<li><i className="fe fe-x-square" data-bs-toggle="tooltip" title="fe fe-x-square"></i></li>
											<li><i className="fe fe-zap" data-bs-toggle="tooltip" title="fe fe-zap"></i></li>
											<li><i className="fe fe-zap-off" data-bs-toggle="tooltip" title="fe fe-zap-off"></i></li>
											<li><i className="fe fe-zoom-in" data-bs-toggle="tooltip" title="fe fe-zoom-in"></i></li>
											<li><i className="fe fe-zoom-out" data-bs-toggle="tooltip" title="fe fe-zoom-out"></i></li>
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

export default IconFeather