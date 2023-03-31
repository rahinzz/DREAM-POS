import React from 'react'

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
								<h3 className="page-title">Typicon Icon</h3>
								<ul className="breadcrumb">
									<li className="breadcrumb-item"><a href="index.html">Dashboard</a></li>
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