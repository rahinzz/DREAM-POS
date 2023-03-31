import React from 'react'

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
								<h3 className="page-title">Fontawesome Icon</h3>
								<ul className="breadcrumb">
									<li className="breadcrumb-item"><a href="index.html">Dashboard</a></li>
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
                    <a id="closesearch"><i className="fa fa-times-circle" aria-hidden="true"></i></a>
                </div>
                <div className="searchcontents">
                    <div className="searchparts">
                        <input type="text" placeholder="search here" />
                        <a className="btn btn-searchs" >Search</a>
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