import React from 'react'

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
								<h3 className="page-title">Simpleline Icon</h3>
								<ul className="breadcrumb">
									<li className="breadcrumb-item"><a href="index.html">Dashboard</a></li>
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