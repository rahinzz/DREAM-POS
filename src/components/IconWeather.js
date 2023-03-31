import React from 'react'

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
					<a href="index.html" className="logo logo-normal">
						<img src="assets/img/logo.png"  alt=""/>
					</a>
					<a href="index.html" className="logo logo-white">
						<img src="assets/img/logo-white.png"  alt="" />
					</a>
					<a href="index.html" className="logo-small">
						<img src="assets/img/logo-small.png"  alt="" />
					</a>
					<a id="toggle_btn" href="javascript:void(0);">
					</a>
                </div>
				{/* Logo  */}
				
				<a id="mobile_btn" className="mobile_btn" href="#sidebar">
					<span className="bar-icon">
						<span></span>
						<span></span>
						<span></span>
					</span>
				</a>
				
				{/* Header Menu */}
				<ul className="nav user-menu">
				
					{/* Search */}
					<li className="nav-item">
						<div className="top-nav-search">
							<a href="javascript:void(0);" className="responsive-search">
								<i className="fa fa-search"></i>
						   </a>
							<form action="#">
								 <div className="searchinputs">
										<input type="text" placeholder="Search Here ..." />
										<div className="search-addon">
											<span><img src="assets/img/icons/closes.svg" alt="img" /></span>
										</div>
									</div>
									<a className="btn"  id="searchdiv"><img src="assets/img/icons/search.svg" alt="img" /></a>
							</form>
						</div>
					</li>
					{/* Search  */}
				
					{/* Flag */}
					<li className="nav-item dropdown has-arrow flag-nav">
						<a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="javascript:void(0);" role="button">
							<img src="assets/img/flags/us1.png" alt="" height="20" />
						</a>
						<div className="dropdown-menu dropdown-menu-right">
							<a href="javascript:void(0);" className="dropdown-item">
								<img src="assets/img/flags/us.png" alt="" height="16" /> English
							</a>
							<a href="javascript:void(0);" className="dropdown-item">
								<img src="assets/img/flags/fr.png" alt="" height="16" /> French
							</a>
							<a href="javascript:void(0);" className="dropdown-item">
								<img src="assets/img/flags/es.png" alt="" height="16" /> Spanish
							</a>
							<a href="javascript:void(0);" className="dropdown-item">
								<img src="assets/img/flags/de.png" alt="" height="16" /> German
							</a>
						</div>
					</li>
					{/* Flag */}
				
					{/* Notifications */}
					<li className="nav-item dropdown">
						<a href="javascript:void(0);" className="dropdown-toggle nav-link" data-bs-toggle="dropdown">
							<img src="assets/img/icons/notification-bing.svg"   alt="img" /> <span className="badge rounded-pill">4</span>
						</a>
						<div className="dropdown-menu notifications">
							<div className="topnav-dropdown-header">
								<span className="notification-title">Notifications</span>
								<a href="javascript:void(0)" className="clear-noti"> Clear All </a>
							</div>
							<div className="noti-content">
								<ul className="notification-list">
									<li className="notification-message">
										<a href="activities.html">
											<div className="media d-flex">
												<span className="avatar flex-shrink-0">
													<img alt="" src="assets/img/profiles/avatar-02.jpg" />
												</span>
												<div className="media-body flex-grow-1">
													<p className="noti-details"><span className="noti-title">John Doe</span> added new task <span className="noti-title">Patient appointment booking</span></p>
													<p className="noti-time"><span className="notification-time">4 mins ago</span></p>
												</div>
											</div>
										</a>
									</li>
									<li className="notification-message">
										<a href="activities.html">
											<div className="media d-flex">
												<span className="avatar flex-shrink-0">
													<img alt="" src="assets/img/profiles/avatar-03.jpg" />
												</span>
												<div className="media-body flex-grow-1">
													<p className="noti-details"><span className="noti-title">Tarah Shropshire</span> changed the task name <span className="noti-title">Appointment booking with payment gateway</span></p>
													<p className="noti-time"><span className="notification-time">6 mins ago</span></p>
												</div>
											</div>
										</a>
									</li>
									<li className="notification-message">
										<a href="activities.html">
											<div className="media d-flex">
												<span className="avatar flex-shrink-0">
													<img alt="" src="assets/img/profiles/avatar-06.jpg" />
												</span>
												<div className="media-body flex-grow-1">
													<p className="noti-details"><span className="noti-title">Misty Tison</span> added <span className="noti-title">Domenic Houston</span> and <span className="noti-title">Claire Mapes</span> to project <span className="noti-title">Doctor available module</span></p>
													<p className="noti-time"><span className="notification-time">8 mins ago</span></p>
												</div>
											</div>
										</a>
									</li>
									<li className="notification-message">
										<a href="activities.html">
											<div className="media d-flex">
												<span className="avatar flex-shrink-0">
													<img alt="" src="assets/img/profiles/avatar-17.jpg" />
												</span>
												<div className="media-body flex-grow-1">
													<p className="noti-details"><span className="noti-title">Rolland Webber</span> completed task <span className="noti-title">Patient and Doctor video conferencing</span></p>
													<p className="noti-time"><span className="notification-time">12 mins ago</span></p>
												</div>
											</div>
										</a>
									</li>
									<li className="notification-message">
										<a href="activities.html">
											<div className="media d-flex">
												<span className="avatar flex-shrink-0">
													<img alt="" src="assets/img/profiles/avatar-13.jpg" />
												</span>
												<div className="media-body flex-grow-1">
													<p className="noti-details"><span className="noti-title">Bernardo Galaviz</span> added new task <span className="noti-title">Private chat module</span></p>
													<p className="noti-time"><span className="notification-time">2 days ago</span></p>
												</div>
											</div>
										</a>
									</li>
								</ul>
							</div>
							<div className="topnav-dropdown-footer">
								<a href="activities.html">View all Notifications</a>
							</div>
						</div>
					</li>
					{/* Notifications */}
					

					<li className="nav-item dropdown has-arrow main-drop">
						<a href="javascript:void(0);" className="dropdown-toggle nav-link userset" data-bs-toggle="dropdown">
                            <span className="user-img"><img src="assets/img/profiles/avator1.jpg" alt="" />
                            <span className="status online"></span></span>
						</a>
						<div className="dropdown-menu menu-drop-user">
							<div className="profilename">
								<div className="profileset">
									<span className="user-img"><img src="assets/img/profiles/avator1.jpg" alt="" />
									<span className="status online"></span></span>
									<div className="profilesets">
										<h6>John Doe</h6>
										<h5>Admin</h5>
									</div>
								</div>
								<hr className="m-0" />
								<a className="dropdown-item" href="profile.html"> <i className="me-2"  data-feather="user"></i> My Profile</a>
								<a className="dropdown-item" href="generalsettings.html"><i className="me-2" data-feather="settings"></i>Settings</a>
								<hr className="m-0" />
								<a className="dropdown-item logout pb-0" href="signin.html"><img src="assets/img/icons/log-out.svg" className="me-2" alt="img" />Logout</a>
							</div>
						</div>
					</li>
				</ul>
				{/* Header Menu */}
				
				{/* Mobile Menu  */}
				<div className="dropdown mobile-user-menu">
					<a href="javascript:void(0);" className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v"></i></a>
					<div className="dropdown-menu dropdown-menu-right">
						<a className="dropdown-item" href="profile.html">My Profile</a>
						<a className="dropdown-item" href="generalsettings.html">Settings</a>
						<a className="dropdown-item" href="signin.html">Logout</a>
					</div>
				</div>
				{/* Mobile Menu  */}
            </div>
			{/* Header */}
			
           {/* Sidebar */}
			<div className="sidebar" id="sidebar">
				<div className="sidebar-inner slimscroll">
					<div id="sidebar-menu" className="sidebar-menu">
						<ul>
							<li >
								<a href="index.html" ><img src="assets/img/icons/dashboard.svg" alt="img" /><span> Dashboard</span> </a>
							</li>
							<li className="submenu">
								<a href="javascript:void(0);"><img src="assets/img/icons/product.svg" alt="img" /><span> Product</span> <span className="menu-arrow"></span></a>
								<ul>
									<li><a href="productlist.html" >Product List</a></li>
									<li><a href="addproduct.html" >Add Product</a></li>
									<li><a href="categorylist.html" >Category List</a></li>
									<li><a href="addcategory.html" className="active">Add Category</a></li>
									<li><a href="subcategorylist.html">Sub Category List</a></li>
									<li><a href="subaddcategory.html">Add Sub Category</a></li>
									<li><a href="brandlist.html">Brand List</a></li>
									<li><a href="addbrand.html">Add Brand</a></li>
									<li><a href="importproduct.html">Import Products</a></li>
									<li><a href="barcode.html">Print Barcode</a></li>
								</ul>
							</li>
							<li className="submenu">
								<a href="javascript:void(0);"><img src="assets/img/icons/sales1.svg" alt="img" /><span> Sales</span> <span className="menu-arrow"></span></a>
								<ul>
									<li><a href="saleslist.html">Sales List</a></li>
									<li><a href="pos.html">POS</a></li>
									<li><a href="pos.html">New Sales</a></li>
									<li><a href="salesreturnlists.html">Sales Return List</a></li>
									<li><a href="createsalesreturns.html">New Sales Return</a></li>
								</ul>
							</li>
							<li className="submenu">
								<a href="javascript:void(0);"><img src="assets/img/icons/purchase1.svg" alt="img" /><span> Purchase</span> <span className="menu-arrow"></span></a>
								<ul>
									<li><a href="purchaselist.html">Purchase List</a></li>
									<li><a href="addpurchase.html">Add Purchase</a></li>
									<li><a href="importpurchase.html">Import Purchase</a></li>
								</ul>
							</li>
							<li className="submenu">
								<a href="javascript:void(0);"><img src="assets/img/icons/expense1.svg" alt="img" /><span> Expense</span> <span className="menu-arrow"></span></a>
								<ul>
									<li><a href="expenselist.html">Expense List</a></li>
									<li><a href="createexpense.html">Add Expense</a></li>
									<li><a href="expensecategory.html">Expense Category</a></li>
								</ul>
							</li>
							
							<li className="submenu">
								<a href="javascript:void(0);"><img src="assets/img/icons/quotation1.svg" alt="img" /><span> Quotation</span> <span className="menu-arrow"></span></a>
								<ul>
									<li><a href="quotationList.html">Quotation List</a></li>
									<li><a href="addquotation.html">Add Quotation</a></li>
								</ul>
							</li>
							<li className="submenu">
								<a href="javascript:void(0);"><img src="assets/img/icons/transfer1.svg" alt="img" /><span> Transfer</span> <span className="menu-arrow"></span></a>
								<ul>
									<li><a href="transferlist.html">Transfer  List</a></li>
									<li><a href="addtransfer.html">Add Transfer </a></li>
									<li><a href="importtransfer.html">Import Transfer </a></li>
								</ul>
							</li>
							<li className="submenu">
								<a href="javascript:void(0);"><img src="assets/img/icons/return1.svg" alt="img" /><span> Return</span> <span className="menu-arrow"></span></a>
								<ul>
									<li><a href="salesreturnlist.html">Sales Return List</a></li>
									<li><a href="createsalesreturn.html">Add Sales Return </a></li>
									<li><a href="purchasereturnlist.html">Purchase Return List</a></li>
									<li><a href="createpurchasereturn.html">Add Purchase Return </a></li>
								</ul>
							</li>
							<li className="submenu">
								<a href="javascript:void(0);"><img src="assets/img/icons/users1.svg" alt="img" /><span> People</span> <span className="menu-arrow"></span></a>
								<ul>
									<li><a href="customerlist.html">Customer List</a></li>
									<li><a href="addcustomer.html">Add Customer  </a></li>
									<li><a href="supplierlist.html">Supplier List</a></li>
									<li><a href="addsupplier.html">Add Supplier </a></li>
									<li><a href="userlist.html">User List</a></li>
									<li><a href="adduser.html">Add User</a></li>
									<li><a href="storelist.html">Store List</a></li>
									<li><a href="addstore.html">Add Store</a></li>
								</ul>
							</li>
							<li className="submenu">
								<a href="javascript:void(0);"><img src="assets/img/icons/places.svg" alt="img" /><span> Places</span> <span className="menu-arrow"></span></a>
								<ul>
									<li><a href="newcountry.html">New Country</a></li>
									<li><a href="countrieslist.html">Countries list</a></li>
									<li><a href="newstate.html">New State </a></li>
									<li><a href="statelist.html">State list</a></li>
								</ul>
							</li>
							<li>
								<a href="components.html" ><i data-feather="layers"></i><span> Components</span> </a>
							</li>
							<li>
								<a href="blankpage.html" ><i data-feather="file"></i><span> Blank Page</span> </a>
							</li>
							<li  className="submenu">
								<a href="javascript:void(0);"><i data-feather="alert-octagon"></i> <span> Error Pages  </span> <span className="menu-arrow"></span></a>
								<ul >
									<li><a href="error-404.html">404 Error </a></li>
									<li><a href="error-500.html">500 Error </a></li>
								</ul>
							</li>
							<li  className="submenu">
								<a href="javascript:void(0);"><i data-feather="box"></i> <span>Elements </span> <span className="menu-arrow"></span></a>
								<ul >
									<li><a href="sweetalerts.html">Sweet Alerts</a></li>
									<li><a href="tooltip.html">Tooltip</a></li>
									<li><a href="popover.html">Popover</a></li>
									<li><a href="ribbon.html">Ribbon</a></li>
									<li><a href="clipboard.html">Clipboard</a></li>
									<li><a href="drag-drop.html">Drag & Drop</a></li>
									<li><a href="rangeslider.html">Range Slider</a></li>
									<li><a href="rating.html">Rating</a></li>
									<li><a href="toastr.html">Toastr</a></li>
									<li><a href="text-editor.html">Text Editor</a></li>
									<li><a href="counter.html">Counter</a></li>
									<li><a href="scrollbar.html">Scrollbar</a></li>
									<li><a href="spinner.html">Spinner</a></li>
									<li><a href="notification.html">Notification</a></li>
									<li><a href="lightbox.html">Lightbox</a></li>
									<li><a href="stickynote.html">Sticky Note</a></li>
									<li><a href="timeline.html">Timeline</a></li>
									<li><a href="form-wizard.html">Form Wizard</a></li>
								</ul>
							</li>
							<li  className="submenu">
								<a href="javascript:void(0);"><i data-feather="bar-chart-2"></i> <span> Charts  </span> <span className="menu-arrow"></span></a>
								<ul >
									<li><a href="chart-apex.html">Apex Charts</a></li>
									<li><a href="chart-js.html">Chart Js</a></li>
									<li><a href="chart-morris.html">Morris Charts</a></li>
									<li><a href="chart-flot.html">Flot Charts</a></li>
									<li><a href="chart-peity.html">Peity Charts</a></li>
								</ul>
							</li>
							<li  className="submenu">
								<a href="javascript:void(0);"><i data-feather="award"></i><span> Icons  </span> <span className="menu-arrow"></span></a>
								<ul >
									<li><a href="icon-fontawesome.html">Fontawesome Icons</a></li>
									<li><a href="icon-feather.html">Feather Icons</a></li>
									<li><a href="icon-ionic.html">Ionic Icons</a></li>
									<li><a href="icon-material.html">Material Icons</a></li>
									<li><a href="icon-pe7.html">Pe7 Icons</a></li>
									<li><a href="icon-simpleline.html">Simpleline Icons</a></li>
									<li><a href="icon-themify.html">Themify Icons</a></li>
									<li><a href="icon-weather.html">Weather Icons</a></li>
									<li><a href="icon-typicon.html">Typicon Icons</a></li>
									<li><a href="icon-flag.html">Flag Icons</a></li>
								</ul>
							</li>
							<li  className="submenu">
								<a href="javascript:void(0);"><i data-feather="columns"></i> <span> Forms  </span> <span className="menu-arrow"></span></a>
								<ul >
									<li><a href="form-basic-inputs.html">Basic Inputs </a></li>
									<li><a href="form-input-groups.html">Input Groups </a></li>
									<li><a href="form-horizontal.html">Horizontal Form </a></li>
									<li><a href="form-vertical.html"> Vertical Form </a></li>
									<li><a href="form-mask.html">Form Mask </a></li>
									<li><a href="form-validation.html">Form Validation </a></li>
									<li><a href="form-select2.html">Form Select2 </a></li>
									<li><a href="form-fileupload.html">File Upload </a></li>
								</ul>
							</li>
							<li  className="submenu">
								<a href="javascript:void(0);"><i data-feather="layout"></i> <span> Table  </span> <span className="menu-arrow"></span></a>
								<ul >
									<li><a href="tables-basic.html" >Basic Tables </a></li>
									<li><a href="data-tables.html">Data Table </a></li>
								</ul>
							</li>
							<li className="submenu">
								<a href="javascript:void(0);"><img src="assets/img/icons/product.svg" alt="img" /><span> Application</span> <span className="menu-arrow"></span></a>
								<ul >
									<li><a href="chat.html">Chat</a></li>
									<li><a href="calendar.html">Calendar</a></li>
									<li><a href="email.html">Email</a></li>
								</ul>
							</li>
							<li className="submenu">
								<a href="javascript:void(0);"><img src="assets/img/icons/time.svg" alt="img" /><span> Report</span> <span className="menu-arrow"></span></a>
								<ul>
									<li><a href="purchaseorderreport.html">Purchase order report</a></li>
									<li><a href="inventoryreport.html">Inventory Report</a></li>
									<li><a href="salesreport.html">Sales Report</a></li>
									<li><a href="invoicereport.html">Invoice Report</a></li>
										<li><a href="purchasereport.html">Purchase Report</a></li>
										<li><a href="supplierreport.html">Supplier Report</a></li>
										<li><a href="customerreport.html">Customer Report</a></li>
								</ul>
							</li>
							<li className="submenu">
								<a href="javascript:void(0);"><img src="assets/img/icons/users1.svg" alt="img" /><span> Users</span> <span className="menu-arrow"></span></a>
								<ul>
									<li><a href="newuser.html">New User </a></li>
									<li><a href="userlists.html">Users List</a></li>
									  
								</ul>
							</li>
							<li className="submenu">
								<a href="javascript:void(0);"><img src="assets/img/icons/settings.svg" alt="img" /><span> Settings</span> <span className="menu-arrow"></span></a>
								<ul>
									<li><a href="generalsettings.html">General Settings</a></li>
									<li><a href="emailsettings.html">Email Settings</a></li>
									 
									<li><a href="paymentsettings.html">Payment Settings</a></li>
									<li><a href="currencysettings.html">Currency Settings</a></li>
									<li><a href="grouppermissions.html">Group Permissions</a></li>
									<li><a href="taxrates.html">Tax Rates</a></li>
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
									<li className="breadcrumb-item"><a href="index.html">Dashboard</a></li>
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