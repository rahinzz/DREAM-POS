import React from 'react'

const IconIonic = () => {
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
								<h3 className="page-title">Ionic Icon</h3>
								<ul className="breadcrumb">
									<li className="breadcrumb-item"><a href="index.html">Dashboard</a></li>
									<li className="breadcrumb-item active">Ionic Icon</li>
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
									<div className="card-title">Ionic Icon</div>
								</div>
								<div className="card-body">
									<div className="icons-items">
										<ul className="icons-list">
											<li><i className="ion-ionic" data-bs-toggle="tooltip" title="ion-ionic"></i></li>
											<li><i className="ion-arrow-up-a" data-bs-toggle="tooltip" title="ion-arrow-up-a"></i></li>
											<li><i className="ion-arrow-right-a" data-bs-toggle="tooltip" title="ion-arrow-right-a"></i></li>
											<li><i className="ion-arrow-down-a" data-bs-toggle="tooltip" title="ion-arrow-down-a"></i></li>
											<li><i className="ion-arrow-left-a" data-bs-toggle="tooltip" title="ion-arrow-left-a"></i></li>
											<li><i className="ion-arrow-up-b" data-bs-toggle="tooltip" title="ion-arrow-up-b"></i></li>
											<li><i className="ion-arrow-right-b" data-bs-toggle="tooltip" title="ion-arrow-right-b"></i></li>
											<li><i className="ion-arrow-down-b" data-bs-toggle="tooltip" title="ion-arrow-down-b"></i></li>
											<li><i className="ion-arrow-left-b" data-bs-toggle="tooltip" title="ion-arrow-left-b"></i></li>
											<li><i className="ion-arrow-up-c" data-bs-toggle="tooltip" title="ion-arrow-up-c"></i></li>
											<li><i className="ion-arrow-right-c" data-bs-toggle="tooltip" title="ion-arrow-right-c"></i></li>
											<li><i className="ion-arrow-down-c" data-bs-toggle="tooltip" title="ion-arrow-down-c"></i></li>
											<li><i className="ion-arrow-left-c" data-bs-toggle="tooltip" title="ion-arrow-left-c"></i></li>
											<li><i className="ion-arrow-return-right" data-bs-toggle="tooltip" title="ion-arrow-return-right"></i></li>
											<li><i className="ion-arrow-return-left" data-bs-toggle="tooltip" title="ion-arrow-return-left"></i></li>
											<li><i className="ion-arrow-swap" data-bs-toggle="tooltip" title="ion-arrow-swap"></i></li>
											<li><i className="ion-arrow-shrink" data-bs-toggle="tooltip" title="ion-arrow-shrink"></i></li>
											<li><i className="ion-arrow-expand" data-bs-toggle="tooltip" title="ion-arrow-expand"></i></li>
											<li><i className="ion-arrow-move" data-bs-toggle="tooltip" title="ion-arrow-move"></i></li>
											<li><i className="ion-arrow-resize" data-bs-toggle="tooltip" title="ion-arrow-resize"></i></li>
											<li><i className="ion-chevron-up" data-bs-toggle="tooltip" title="ion-chevron-up"></i></li>
											<li><i className="ion-chevron-right" data-bs-toggle="tooltip" title="ion-chevron-right"></i></li>
											<li><i className="ion-chevron-down" data-bs-toggle="tooltip" title="ion-chevron-down"></i></li>
											<li><i className="ion-chevron-left" data-bs-toggle="tooltip" title="ion-chevron-left"></i></li>
											<li><i className="ion-navicon-round" data-bs-toggle="tooltip" title="ion-navicon-round"></i></li>
											<li><i className="ion-navicon" data-bs-toggle="tooltip" title="ion-navicon"></i></li>
											<li><i className="ion-drag" data-bs-toggle="tooltip" title="ion-drag"></i></li>
											<li><i className="ion-log-in" data-bs-toggle="tooltip" title="ion-log-in"></i></li>
											<li><i className="ion-log-out" data-bs-toggle="tooltip" title="ion-log-out"></i></li>
											<li><i className="ion-checkmark-round" data-bs-toggle="tooltip" title="ion-checkmark-round"></i></li>
											<li><i className="ion-checkmark" data-bs-toggle="tooltip" title="ion-checkmark"></i></li>
											<li><i className="ion-checkmark-circled" data-bs-toggle="tooltip" title="ion-checkmark-circled"></i></li>
											<li><i className="ion-close-round" data-bs-toggle="tooltip" title="ion-close-round"></i></li>
											<li><i className="ion-close" data-bs-toggle="tooltip" title="ion-close"></i></li>
											<li><i className="ion-close-circled" data-bs-toggle="tooltip" title="ion-close-circled"></i></li>
											<li><i className="ion-plus-round" data-bs-toggle="tooltip" title="ion-plus-round"></i></li>
											<li><i className="ion-plus" data-bs-toggle="tooltip" title="ion-plus"></i></li>
											<li><i className="ion-plus-circled" data-bs-toggle="tooltip" title="ion-plus-circled"></i></li>
											<li><i className="ion-minus-round" data-bs-toggle="tooltip" title="ion-minus-round"></i></li>
											<li><i className="ion-minus" data-bs-toggle="tooltip" title="ion-minus"></i></li>
											<li><i className="ion-minus-circled" data-bs-toggle="tooltip" title="ion-minus-circled"></i></li>
											<li><i className="ion-information" data-bs-toggle="tooltip" title="ion-information"></i></li>
											<li><i className="ion-information-circled" data-bs-toggle="tooltip" title="ion-information-circled"></i></li>
											<li><i className="ion-help" data-bs-toggle="tooltip" title="ion-help"></i></li>
											<li><i className="ion-help-circled" data-bs-toggle="tooltip" title="ion-help-circled"></i></li>
											<li><i className="ion-help-buoy" data-bs-toggle="tooltip" title="ion-help-buoy"></i></li>
											<li><i className="ion-asterisk" data-bs-toggle="tooltip" title="ion-asterisk"></i></li>
											<li><i className="ion-alert" data-bs-toggle="tooltip" title="ion-alert"></i></li>
											<li><i className="ion-alert-circled" data-bs-toggle="tooltip" title="ion-alert-circled"></i></li>
											<li><i className="ion-refresh" data-bs-toggle="tooltip" title="ion-refresh"></i></li>
											<li><i className="ion-loop" data-bs-toggle="tooltip" title="ion-loop"></i></li>
											<li><i className="ion-shuffle" data-bs-toggle="tooltip" title="ion-shuffle"></i></li>
											<li><i className="ion-home" data-bs-toggle="tooltip" title="ion-home"></i></li>
											<li><i className="ion-search" data-bs-toggle="tooltip" title="ion-search"></i></li>
											<li><i className="ion-flag" data-bs-toggle="tooltip" title="ion-flag"></i></li>
											<li><i className="ion-star" data-bs-toggle="tooltip" title="ion-star"></i></li>
											<li><i className="ion-heart" data-bs-toggle="tooltip" title="ion-heart"></i></li>
											<li><i className="ion-heart-broken" data-bs-toggle="tooltip" title="ion-heart-broken"></i></li>
											<li><i className="ion-gear-a" data-bs-toggle="tooltip" title="ion-gear-a"></i></li>
											<li><i className="ion-gear-b" data-bs-toggle="tooltip" title="ion-gear-b"></i></li>
											<li><i className="ion-toggle-filled" data-bs-toggle="tooltip" title="ion-toggle-filled"></i></li>
											<li><i className="ion-toggle" data-bs-toggle="tooltip" title="ion-toggle"></i></li>
											<li><i className="ion-settings" data-bs-toggle="tooltip" title="ion-settings"></i></li>
											<li><i className="ion-wrench" data-bs-toggle="tooltip" title="ion-wrench"></i></li>
											<li><i className="ion-folder" data-bs-toggle="tooltip" title="ion-folder"></i></li>
											<li><i className="ion-hammer" data-bs-toggle="tooltip" title="ion-hammer"></i></li>
											<li><i className="ion-edit" data-bs-toggle="tooltip" title="ion-edit"></i></li>
											<li><i className="ion-trash-a" data-bs-toggle="tooltip" title="ion-trash-a"></i></li>
											<li><i className="ion-trash-b" data-bs-toggle="tooltip" title="ion-trash-b"></i></li>
											<li><i className="ion-document" data-bs-toggle="tooltip" title="ion-document"></i></li>
											<li><i className="ion-document-text" data-bs-toggle="tooltip" title="ion-document-text"></i></li>
											<li><i className="ion-clipboard" data-bs-toggle="tooltip" title="ion-clipboard"></i></li>
											<li><i className="ion-scissors" data-bs-toggle="tooltip" title="ion-scissors"></i></li>
											<li><i className="ion-funnel" data-bs-toggle="tooltip" title="ion-funnel"></i></li>
											<li><i className="ion-bookmark" data-bs-toggle="tooltip" title="ion-bookmark"></i></li>
											<li><i className="ion-email" data-bs-toggle="tooltip" title="ion-email"></i></li>
											<li><i className="ion-folder" data-bs-toggle="tooltip" title="ion-folder"></i></li>
											<li><i className="ion-filing" data-bs-toggle="tooltip" title="ion-filing"></i></li>
											<li><i className="ion-archive" data-bs-toggle="tooltip" title="ion-archive"></i></li>
											<li><i className="ion-reply" data-bs-toggle="tooltip" title="ion-reply"></i></li>
											<li><i className="ion-reply-all" data-bs-toggle="tooltip" title="ion-reply-all"></i></li>
											<li><i className="ion-forward" data-bs-toggle="tooltip" title="ion-forward"></i></li>
											<li><i className="ion-share" data-bs-toggle="tooltip" title="ion-share"></i></li>
											<li><i className="ion-paper-airplane" data-bs-toggle="tooltip" title="ion-paper-airplane"></i></li>
											<li><i className="ion-link" data-bs-toggle="tooltip" title="ion-link"></i></li>
											<li><i className="ion-paperclip" data-bs-toggle="tooltip" title="ion-paperclip"></i></li>
											<li><i className="ion-compose" data-bs-toggle="tooltip" title="ion-compose"></i></li>
											<li><i className="ion-briefcase" data-bs-toggle="tooltip" title="ion-briefcase"></i></li>
											<li><i className="ion-medkit" data-bs-toggle="tooltip" title="ion-medkit"></i></li>
											<li><i className="ion-at" data-bs-toggle="tooltip" title="ion-at"></i></li>
											<li><i className="ion-pound" data-bs-toggle="tooltip" title="ion-pound"></i></li>
											<li><i className="ion-quote" data-bs-toggle="tooltip" title="ion-quote"></i></li>
											<li><i className="ion-cloud" data-bs-toggle="tooltip" title="ion-cloud"></i></li>
											<li><i className="ion-upload" data-bs-toggle="tooltip" title="ion-upload"></i></li>
											<li><i className="ion-more" data-bs-toggle="tooltip" title="ion-more"></i></li>
											<li><i className="ion-grid" data-bs-toggle="tooltip" title="ion-grid"></i></li>
											<li><i className="ion-calendar" data-bs-toggle="tooltip" title="ion-calendar"></i></li>
											<li><i className="ion-clock" data-bs-toggle="tooltip" title="ion-clock"></i></li>
											<li><i className="ion-compass" data-bs-toggle="tooltip" title="ion-compass"></i></li>
											<li><i className="ion-pinpoint" data-bs-toggle="tooltip" title="ion-pinpoint"></i></li>
											<li><i className="ion-pin" data-bs-toggle="tooltip" title="ion-pin"></i></li>
											<li><i className="ion-navigate" data-bs-toggle="tooltip" title="ion-navigate"></i></li>
											<li><i className="ion-location" data-bs-toggle="tooltip" title="ion-location"></i></li>
											<li><i className="ion-map" data-bs-toggle="tooltip" title="ion-map"></i></li>
											<li><i className="ion-model-s" data-bs-toggle="tooltip" title="ion-model-s"></i></li>
											<li><i className="ion-locked" data-bs-toggle="tooltip" title="ion-locked"></i></li>
											<li><i className="ion-unlocked" data-bs-toggle="tooltip" title="ion-unlocked"></i></li>
											<li><i className="ion-key" data-bs-toggle="tooltip" title="ion-key"></i></li>
											<li><i className="ion-arrow-graph-up-right" data-bs-toggle="tooltip" title="ion-arrow-graph-up-right"></i></li>
											<li><i className="ion-arrow-graph-down-right" data-bs-toggle="tooltip" title="ion-arrow-graph-down-right"></i></li>
											<li><i className="ion-arrow-graph-down-left" data-bs-toggle="tooltip" title="ion-arrow-graph-down-left"></i></li>
											<li><i className="ion-stats-bars" data-bs-toggle="tooltip" title="ion-stats-bars"></i></li>
											<li><i className="ion-connection-bars" data-bs-toggle="tooltip" title="ion-connection-bars"></i></li>
											<li><i className="ion-pie-graph" data-bs-toggle="tooltip" title="ion-pie-graph"></i></li>
											<li><i className="ion-chatbubble" data-bs-toggle="tooltip" title="ion-chatbubble"></i></li>
											<li><i className="ion-chatbubble-working" data-bs-toggle="tooltip" title="ion-chatbubble-working"></i></li>
											<li><i className="ion-chatbubbles" data-bs-toggle="tooltip" title="ion-chatbubbles"></i></li>
											<li><i className="ion-chatbox" data-bs-toggle="tooltip" title="ion-chatbox"></i></li>
											<li><i className="ion-chatbox-working" data-bs-toggle="tooltip" title="ion-chatbox-working"></i></li>
											<li><i className="ion-chatboxes" data-bs-toggle="tooltip" title="ion-chatboxes"></i></li>
											<li><i className="ion-person" data-bs-toggle="tooltip" title="ion-person"></i></li>
											<li><i className="ion-person-add" data-bs-toggle="tooltip" title="ion-person-add"></i></li>
											<li><i className="ion-person-stalker" data-bs-toggle="tooltip" title="ion-person-stalker"></i></li>
											<li><i className="ion-woman" data-bs-toggle="tooltip" title="ion-woman"></i></li>
											<li><i className="ion-man" data-bs-toggle="tooltip" title="ion-man"></i></li>
											<li><i className="ion-female" data-bs-toggle="tooltip" title="ion-female"></i></li>
											<li><i className="ion-male" data-bs-toggle="tooltip" title="ion-male"></i></li>
											<li><i className="ion-fork" data-bs-toggle="tooltip" title="ion-fork"></i></li>
											<li><i className="ion-knife" data-bs-toggle="tooltip" title="ion-knife"></i></li>
											<li><i className="ion-spoon" data-bs-toggle="tooltip" title="ion-spoon"></i></li>
											<li><i className="ion-beer" data-bs-toggle="tooltip" title="ion-beer"></i></li>
											<li><i className="ion-wineglass" data-bs-toggle="tooltip" title="ion-wineglass"></i></li>
											<li><i className="ion-coffee" data-bs-toggle="tooltip" title="ion-coffee"></i></li>
											<li><i className="ion-icecream" data-bs-toggle="tooltip" title="ion-icecream"></i></li>
											<li><i className="ion-pizza" data-bs-toggle="tooltip" title="ion-pizza"></i></li>
											<li><i className="ion-power" data-bs-toggle="tooltip" title="ion-power"></i></li>
											<li><i className="ion-mouse" data-bs-toggle="tooltip" title="ion-mouse"></i></li>
											<li><i className="ion-battery-full" data-bs-toggle="tooltip" title="ion-battery-full"></i></li>
											<li><i className="ion-battery-half" data-bs-toggle="tooltip" title="ion-battery-half"></i></li>
											<li><i className="ion-battery-low" data-bs-toggle="tooltip" title="ion-battery-low"></i></li>
											<li><i className="ion-battery-empty" data-bs-toggle="tooltip" title="ion-battery-empty"></i></li>
											<li><i className="ion-battery-charging" data-bs-toggle="tooltip" title="ion-battery-charging"></i></li>
											<li><i className="ion-bluetooth" data-bs-toggle="tooltip" title="ion-bluetooth"></i></li>
											<li><i className="ion-calculator" data-bs-toggle="tooltip" title="ion-calculator"></i></li>
											<li><i className="ion-camera" data-bs-toggle="tooltip" title="ion-camera"></i></li>
											<li><i className="ion-eye" data-bs-toggle="tooltip" title="ion-eye"></i></li>
											<li><i className="ion-eye-disabled" data-bs-toggle="tooltip" title="ion-eye-disabled"></i></li>
											<li><i className="ion-flash" data-bs-toggle="tooltip" title="ion-flash"></i></li>
											<li><i className="ion-flash-off" data-bs-toggle="tooltip" title="ion-flash-off"></i></li>
											<li><i className="ion-qr-scanner" data-bs-toggle="tooltip" title="ion-qr-scanner"></i></li>
											<li><i className="ion-image" data-bs-toggle="tooltip" title="ion-image"></i></li>
											<li><i className="ion-images" data-bs-toggle="tooltip" title="ion-images"></i></li>
											<li><i className="ion-contrast" data-bs-toggle="tooltip" title="ion-contrast"></i></li>
											<li><i className="ion-wand" data-bs-toggle="tooltip" title="ion-wand"></i></li>
											<li><i className="ion-aperture" data-bs-toggle="tooltip" title="ion-aperture"></i></li>
											<li><i className="ion-monitor" data-bs-toggle="tooltip" title="ion-monitor"></i></li>
											<li><i className="ion-laptop" data-bs-toggle="tooltip" title="ion-laptop"></i></li>
											<li><i className="ion-ipad" data-bs-toggle="tooltip" title="ion-ipad"></i></li>
											<li><i className="ion-iphone" data-bs-toggle="tooltip" title="ion-iphone"></i></li>
											<li><i className="ion-ipod" data-bs-toggle="tooltip" title="ion-ipod"></i></li>
											<li><i className="ion-printer" data-bs-toggle="tooltip" title="ion-printer"></i></li>
											<li><i className="ion-usb" data-bs-toggle="tooltip" title="ion-usb"></i></li>
											<li><i className="ion-outlet" data-bs-toggle="tooltip" title="ion-outlet"></i></li>
											<li><i className="ion-bug" data-bs-toggle="tooltip" title="ion-bug"></i></li>
											<li><i className="ion-code" data-bs-toggle="tooltip" title="ion-code"></i></li>
											<li><i className="ion-code-working" data-bs-toggle="tooltip" title="ion-code-working"></i></li>
											<li><i className="ion-code-download" data-bs-toggle="tooltip" title="ion-code-download"></i></li>
											<li><i className="ion-fork-repo" data-bs-toggle="tooltip" title="ion-fork-repo"></i></li>
											<li><i className="ion-network" data-bs-toggle="tooltip" title="ion-network"></i></li>
											<li><i className="ion-pull-request" data-bs-toggle="tooltip" title="ion-pull-request"></i></li>
											<li><i className="ion-merge" data-bs-toggle="tooltip" title="ion-merge"></i></li>
											<li><i className="ion-game-controller-a" data-bs-toggle="tooltip" title="ion-game-controller-a"></i></li>
											<li><i className="ion-game-controller-b" data-bs-toggle="tooltip" title="ion-game-controller-b"></i></li>
											<li><i className="ion-xbox" data-bs-toggle="tooltip" title="ion-xbox"></i></li>
											<li><i className="ion-playstation" data-bs-toggle="tooltip" title="ion-playstation"></i></li>
											<li><i className="ion-steam" data-bs-toggle="tooltip" title="ion-steam"></i></li>
											<li><i className="ion-closed-captioning" data-bs-toggle="tooltip" title="ion-closed-captioning"></i></li>
											<li><i className="ion-videocamera" data-bs-toggle="tooltip" title="ion-videocamera"></i></li>
											<li><i className="ion-film-marker" data-bs-toggle="tooltip" title="ion-film-marker"></i></li>
											<li><i className="ion-disc" data-bs-toggle="tooltip" title="ion-disc"></i></li>
											<li><i className="ion-headphone" data-bs-toggle="tooltip" title="ion-headphone"></i></li>
											<li><i className="ion-music-note" data-bs-toggle="tooltip" title="ion-music-note"></i></li>
											<li><i className="ion-radio-waves" data-bs-toggle="tooltip" title="ion-radio-waves"></i></li>
											<li><i className="ion-speakerphone" data-bs-toggle="tooltip" title="ion-speakerphone"></i></li>
											<li><i className="ion-mic-a" data-bs-toggle="tooltip" title="ion-mic-a"></i></li>
											<li><i className="ion-mic-b" data-bs-toggle="tooltip" title="ion-mic-b"></i></li>
											<li><i className="ion-mic-c" data-bs-toggle="tooltip" title="ion-mic-c"></i></li>
											<li><i className="ion-volume-high" data-bs-toggle="tooltip" title="ion-volume-high"></i></li>
											<li><i className="ion-volume-medium" data-bs-toggle="tooltip" title="ion-volume-medium"></i></li>
											<li><i className="ion-volume-low" data-bs-toggle="tooltip" title="ion-volume-low"></i></li>
											<li><i className="ion-volume-mute" data-bs-toggle="tooltip" title="ion-volume-mute"></i></li>
											<li><i className="ion-levels" data-bs-toggle="tooltip" title="ion-levels"></i></li>
											<li><i className="ion-play" data-bs-toggle="tooltip" title="ion-play"></i></li>
											<li><i className="ion-pause" data-bs-toggle="tooltip" title="ion-pause"></i></li>
											<li><i className="ion-stop" data-bs-toggle="tooltip" title="ion-stop"></i></li>
											<li><i className="ion-record" data-bs-toggle="tooltip" title="ion-record"></i></li>
											<li><i className="ion-skip-forward" data-bs-toggle="tooltip" title="ion-skip-forward"></i></li>
											<li><i className="ion-skip-backward" data-bs-toggle="tooltip" title="ion-skip-backward"></i></li>
											<li><i className="ion-eject" data-bs-toggle="tooltip" title="ion-eject"></i></li>
											<li><i className="ion-bag" data-bs-toggle="tooltip" title="ion-bag"></i></li>
											<li><i className="ion-card" data-bs-toggle="tooltip" title="ion-card"></i></li>
											<li><i className="ion-cash" data-bs-toggle="tooltip" title="ion-cash"></i></li>
											<li><i className="ion-pricetag" data-bs-toggle="tooltip" title="ion-pricetag"></i></li>
											<li><i className="ion-pricetags" data-bs-toggle="tooltip" title="ion-pricetags"></i></li>
											<li><i className="ion-thumbsup" data-bs-toggle="tooltip" title="ion-thumbsup"></i></li>
											<li><i className="ion-thumbsdown" data-bs-toggle="tooltip" title="ion-thumbsdown"></i></li>
											<li><i className="ion-happy" data-bs-toggle="tooltip" title="ion-happy"></i></li>
											<li><i className="ion-sad" data-bs-toggle="tooltip" title="ion-sad"></i></li>
											<li><i className="ion-trophy" data-bs-toggle="tooltip" title="ion-trophy"></i></li>
											<li><i className="ion-podium" data-bs-toggle="tooltip" title="ion-podium"></i></li>
											<li><i className="ion-ribbon-a" data-bs-toggle="tooltip" title="ion-ribbon-a"></i></li>
											<li><i className="ion-ribbon-b" data-bs-toggle="tooltip" title="ion-ribbon-b"></i></li>
											<li><i className="ion-university" data-bs-toggle="tooltip" title="ion-university"></i></li>
											<li><i className="ion-magnet" data-bs-toggle="tooltip" title="ion-magnet"></i></li>
											<li><i className="ion-beaker" data-bs-toggle="tooltip" title="ion-beaker"></i></li>
											<li><i className="ion-flask" data-bs-toggle="tooltip" title="ion-flask"></i></li>
											<li><i className="ion-egg" data-bs-toggle="tooltip" title="ion-egg"></i></li>
											<li><i className="ion-earth" data-bs-toggle="tooltip" title="ion-earth"></i></li>
											<li><i className="ion-planet" data-bs-toggle="tooltip" title="ion-planet"></i></li>
											<li><i className="ion-lightbulb" data-bs-toggle="tooltip" title="ion-lightbulb"></i></li>
											<li><i className="ion-cube" data-bs-toggle="tooltip" title="ion-cube"></i></li>
											<li><i className="ion-leaf" data-bs-toggle="tooltip" title="ion-leaf"></i></li>
											<li><i className="ion-waterdrop" data-bs-toggle="tooltip" title="ion-waterdrop"></i></li>
											<li><i className="ion-flame" data-bs-toggle="tooltip" title="ion-flame"></i></li>
											<li><i className="ion-fireball" data-bs-toggle="tooltip" title="ion-fireball"></i></li>
											<li><i className="ion-bonfire" data-bs-toggle="tooltip" title="ion-bonfire"></i></li>
											<li><i className="ion-umbrella" data-bs-toggle="tooltip" title="ion-umbrella"></i></li>
											<li><i className="ion-nuclear" data-bs-toggle="tooltip" title="ion-nuclear"></i></li>
											<li><i className="ion-no-smoking" data-bs-toggle="tooltip" title="ion-no-smoking"></i></li>
											<li><i className="ion-thermometer" data-bs-toggle="tooltip" title="ion-thermometer"></i></li>
											<li><i className="ion-speedometer" data-bs-toggle="tooltip" title="ion-speedometer"></i></li>
											<li><i className="ion-plane" data-bs-toggle="tooltip" title="ion-plane"></i></li>
											<li><i className="ion-jet" data-bs-toggle="tooltip" title="ion-jet"></i></li>
											<li><i className="ion-load-a" data-bs-toggle="tooltip" title="ion-load-a"></i></li>
											<li><i className="ion-load-b" data-bs-toggle="tooltip" title="ion-load-b"></i></li>
											<li><i className="ion-load-c" data-bs-toggle="tooltip" title="ion-load-c"></i></li>
											<li><i className="ion-load-d" data-bs-toggle="tooltip" title="ion-load-d"></i></li>
											<li><i className="ion-ios7-ionic-outline" data-bs-toggle="tooltip" title="ion-ios7-ionic-outline"></i></li>
											<li><i className="ion-ios7-arrow-back" data-bs-toggle="tooltip" title="ion-ios7-arrow-back"></i></li>
											<li><i className="ion-ios7-arrow-forward" data-bs-toggle="tooltip" title="ion-ios7-arrow-forward"></i></li>
											<li><i className="ion-ios7-arrow-up" data-bs-toggle="tooltip" title="ion-ios7-arrow-up"></i></li>
											<li><i className="ion-ios7-arrow-right" data-bs-toggle="tooltip" title="ion-ios7-arrow-right"></i></li>
											<li><i className="ion-ios7-arrow-down" data-bs-toggle="tooltip" title="ion-ios7-arrow-down"></i></li>
											<li><i className="ion-ios7-arrow-left" data-bs-toggle="tooltip" title="ion-ios7-arrow-left"></i></li>
											<li><i className="ion-ios7-arrow-thin-up" data-bs-toggle="tooltip" title="ion-ios7-arrow-thin-up"></i></li>
											<li><i className="ion-ios7-arrow-thin-right" data-bs-toggle="tooltip" title="ion-ios7-arrow-thin-right"></i></li>
											<li><i className="ion-ios7-arrow-thin-down" data-bs-toggle="tooltip" title="ion-ios7-arrow-thin-down"></i></li>
											<li><i className="ion-ios7-arrow-thin-left" data-bs-toggle="tooltip" title="ion-ios7-arrow-thin-left"></i></li>
											<li><i className="ion-ios7-circle-filled" data-bs-toggle="tooltip" title="ion-ios7-circle-filled"></i></li>
											<li><i className="ion-ios7-circle-outline" data-bs-toggle="tooltip" title="ion-ios7-circle-outline"></i></li>
											<li><i className="ion-ios7-checkmark-empty" data-bs-toggle="tooltip" title="ion-ios7-checkmark-empty"></i></li>
											<li><i className="ion-ios7-checkmark-outline" data-bs-toggle="tooltip" title="ion-ios7-checkmark-outline"></i></li>
											<li><i className="ion-ios7-checkmark" data-bs-toggle="tooltip" title="ion-ios7-checkmark"></i></li>
											<li><i className="ion-ios7-plus-empty" data-bs-toggle="tooltip" title="ion-ios7-plus-empty"></i></li>
											<li><i className="ion-ios7-plus-outline" data-bs-toggle="tooltip" title="ion-ios7-plus-outline"></i></li>
											<li><i className="ion-ios7-plus" data-bs-toggle="tooltip" title="ion-ios7-plus"></i></li>
											<li><i className="ion-ios7-close-empty" data-bs-toggle="tooltip" title="ion-ios7-close-empty"></i></li>
											<li><i className="ion-ios7-close-outline" data-bs-toggle="tooltip" title="ion-ios7-close-outline"></i></li>
											<li><i className="ion-ios7-close" data-bs-toggle="tooltip" title="ion-ios7-close"></i></li>
											<li><i className="ion-ios7-minus-empty" data-bs-toggle="tooltip" title="ion-ios7-minus-empty"></i></li>
											<li><i className="ion-ios7-minus-outline" data-bs-toggle="tooltip" title="ion-ios7-minus-outline"></i></li>
											<li><i className="ion-ios7-minus" data-bs-toggle="tooltip" title="ion-ios7-minus"></i></li>
											<li><i className="ion-ios7-information-empty" data-bs-toggle="tooltip" title="ion-ios7-information-empty"></i></li>
											<li><i className="ion-ios7-information-outline" data-bs-toggle="tooltip" title="ion-ios7-information-outline"></i></li>
											<li><i className="ion-ios7-information" data-bs-toggle="tooltip" title="ion-ios7-information"></i></li>
											<li><i className="ion-ios7-help-empty" data-bs-toggle="tooltip" title="ion-ios7-help-empty"></i></li>
											<li><i className="ion-ios7-help-outline" data-bs-toggle="tooltip" title="ion-ios7-help-outline"></i></li>
											<li><i className="ion-ios7-help" data-bs-toggle="tooltip" title="ion-ios7-help"></i></li>
											<li><i className="ion-ios7-search" data-bs-toggle="tooltip" title="ion-ios7-search"></i></li>
											<li><i className="ion-ios7-search-strong" data-bs-toggle="tooltip" title="ion-ios7-search-strong"></i></li>
											<li><i className="ion-ios7-star" data-bs-toggle="tooltip" title="ion-ios7-star"></i></li>
											<li><i className="ion-ios7-star-half" data-bs-toggle="tooltip" title="ion-ios7-star-half"></i></li>
											<li><i className="ion-ios7-star-outline" data-bs-toggle="tooltip" title="ion-ios7-star-outline"></i></li>
											<li><i className="ion-ios7-heart" data-bs-toggle="tooltip" title="ion-ios7-heart"></i></li>
											<li><i className="ion-ios7-heart-outline" data-bs-toggle="tooltip" title="ion-ios7-heart-outline"></i></li>
											<li><i className="ion-ios7-more" data-bs-toggle="tooltip" title="ion-ios7-more"></i></li>
											<li><i className="ion-ios7-more-outline" data-bs-toggle="tooltip" title="ion-ios7-more-outline"></i></li>
											<li><i className="ion-ios7-home" data-bs-toggle="tooltip" title="ion-ios7-home"></i></li>
											<li><i className="ion-ios7-home-outline" data-bs-toggle="tooltip" title="ion-ios7-home-outline"></i></li>
											<li><i className="ion-ios7-cloud" data-bs-toggle="tooltip" title="ion-ios7-cloud"></i></li>
											<li><i className="ion-ios7-cloud-outline" data-bs-toggle="tooltip" title="ion-ios7-cloud-outline"></i></li>
											<li><i className="ion-ios7-cloud-upload" data-bs-toggle="tooltip" title="ion-ios7-cloud-upload"></i></li>
											<li><i className="ion-ios7-cloud-upload-outline" data-bs-toggle="tooltip" title="ion-ios7-cloud-upload-outline"></i></li>
											<li><i className="ion-ios7-cloud-download" data-bs-toggle="tooltip" title="ion-ios7-cloud-download"></i></li>
											<li><i className="ion-ios7-cloud-download-outline" data-bs-toggle="tooltip" title="ion-ios7-cloud-download-outline"></i></li>
											<li><i className="ion-ios7-upload" data-bs-toggle="tooltip" title="ion-ios7-upload"></i></li>
											<li><i className="ion-ios7-upload-outline" data-bs-toggle="tooltip" title="ion-ios7-upload-outline"></i></li>
											<li><i className="ion-ios7-download" data-bs-toggle="tooltip" title="ion-ios7-download"></i></li>
											<li><i className="ion-ios7-refresh" data-bs-toggle="tooltip" title="ion-ios7-refresh"></i></li>
											<li><i className="ion-ios7-refresh-outline" data-bs-toggle="tooltip" title="ion-ios7-refresh-outline"></i></li>
											<li><i className="ion-ios7-refresh-empty" data-bs-toggle="tooltip" title="ion-ios7-refresh-empty"></i></li>
											<li><i className="ion-ios7-reload" data-bs-toggle="tooltip" title="ion-ios7-reload"></i></li>
											<li><i className="ion-ios7-loop-strong" data-bs-toggle="tooltip" title="ion-ios7-loop-strong"></i></li>
											<li><i className="ion-ios7-loop" data-bs-toggle="tooltip" title="ion-ios7-loop"></i></li>
											<li><i className="ion-ios7-bookmarks" data-bs-toggle="tooltip" title="ion-ios7-bookmarks"></i></li>
											<li><i className="ion-ios7-bookmarks-outline" data-bs-toggle="tooltip" title="ion-ios7-bookmarks-outline"></i></li>

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

export default IconIonic