import React from 'react'

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
								<h3 className="page-title">Flag Icon</h3>
								<ul className="breadcrumb">
									<li className="breadcrumb-item"><a href="index.html">Dashboard</a></li>
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