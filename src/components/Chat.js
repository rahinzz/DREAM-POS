import React from 'react'

const Chat = () => {
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

            <div className="page-wrapper">
                <div className="content">
                    <div className="col-lg-12">
					
						<div className="row chat-window">
						
							{/* Chat User List */}
							<div className="col-lg-5 col-xl-4 chat-cont-left">
								<div className="card mb-sm-3 mb-md-0 contacts_card flex-fill">
									<div className="card-header chat-search">
										<div className="input-group">
											<div className="input-group-prepend">
												<span className="search_btn"><i className="fas fa-search"></i></span>
											</div>
											<input type="text" placeholder="Search" className="form-control search-chat rounded-pill" />
										</div>
									</div>
									<div className="card-body contacts_body chat-users-list chat-scroll">
										<a href="javascript:void(0);" className="media d-flex active">
											<div className="media-img-wrap flex-shrink-0">
												<div className="avatar avatar-away">
													<img src="assets/img/customer/customer1.jpg" alt="User Image" className="avatar-img rounded-circle" />
												</div>
											</div>
											<div className="media-body flex-grow-1">
												<div>
													<div className="user-name">Jeffrey Akridge</div>
													<div className="user-last-chat">Hey, How are you?</div>
												</div>
												<div>
													<div className="last-chat-time">2 min</div>
													<div className="badge badge-success badge-pill">15</div>
												</div>
											</div>
										</a>
										<a href="javascript:void(0);" className="media d-flex read-chat">
											<div className="media-img-wrap flex-shrink-0">
												<div className="avatar avatar-online">
													<img src="assets/img/customer/customer2.jpg" alt="User Image" className="avatar-img rounded-circle" />
												</div>
											</div>
											<div className="media-body flex-grow-1">
												<div>
													<div className="user-name">Nancy Olson</div>
													<div className="user-last-chat">I'll call you later </div>
												</div>
												<div>
													<div className="last-chat-time">8:01 PM</div>
												</div>
											</div>
										</a>
										<a href="javascript:void(0);" className="media d-flex">
											<div className="media-img-wrap flex-shrink-0">
												<div className="avatar avatar-away">
													<img src="assets/img/customer/customer3.jpg" alt="User Image" className="avatar-img rounded-circle" />
												</div>
											</div>
											<div className="media-body flex-grow-1">
												<div>
													<div className="user-name">Ramona Kingsley</div>
													<div className="user-last-chat">Give me a full explanation about our project</div>
												</div>
												<div>
													<div className="last-chat-time">7:30 PM</div>
													<div className="badge badge-success badge-pill">3</div>
												</div>
											</div>
										</a>
										<a href="javascript:void(0);" className="media read-chat d-flex">
											<div className="media-img-wrap flex-shrink-0">
												<div className="avatar avatar-online">
													<img src="assets/img/customer/customer4.jpg" alt="User Image" className="avatar-img rounded-circle" />
												</div>
											</div>
											<div className="media-body flex-grow-1">
												<div>
													<div className="user-name">Ricardo Lung</div>
													<div className="user-last-chat">That's very good UI design</div>
												</div>
												<div>
													<div className="last-chat-time">6:59 PM</div>
												</div>
											</div>
										</a>
										<a href="javascript:void(0);" className="media read-chat d-flex">
											<div className="media-img-wrap flex-shrink-0">
												<div className="avatar avatar-offline">
													<img src="assets/img/customer/customer5.jpg" alt="User Image" className="avatar-img rounded-circle" />
												</div>
											</div>
											<div className="media-body flex-grow-1">
												<div>
													<div className="user-name">Annette Silva</div>
													<div className="user-last-chat">Yesterday i completed the task</div>
												</div>
												<div>
													<div className="last-chat-time">11:21 AM</div>
												</div>
											</div>
										</a>
										<a href="javascript:void(0);" className="media read-chat d-flex">
											<div className="media-img-wrap flex-shrink-0">
												<div className="avatar avatar-online">
													<img src="assets/img/customer/customer6.jpg" alt="User Image" className="avatar-img rounded-circle" />
												</div>
											</div>
											<div className="media-body flex-grow-1">
												<div>
													<div className="user-name">Stephen Wilson</div>
													<div className="user-last-chat">What is the major functionality?</div>
												</div>
												<div>
													<div className="last-chat-time">10:05 AM</div>
												</div>
											</div>
										</a>
										<a href="javascript:void(0);" className="media read-chat d-flex">
											<div className="media-img-wrap flex-shrink-0">
												<div className="avatar avatar-away">
													<img src="assets/img/customer/customer7.jpg" alt="User Image" className="avatar-img rounded-circle" />
												</div>
											</div>
											<div className="media-body flex-grow-1">
												<div>
													<div className="user-name">Ryan Rodriguez</div>
													<div className="user-last-chat">This has allowed me to showcase not only my technical skills</div>
												</div>
												<div>
													<div className="last-chat-time">Yesterday</div>
												</div>
											</div>
										</a>
										<a href="javascript:void(0);" className="media read-chat d-flex">
											<div className="media-img-wrap flex-shrink-0">
												<div className="avatar avatar-offline">
													<img src="assets/img/customer/customer8.jpg" alt="User Image" className="avatar-img rounded-circle" />
												</div>
											</div>
											<div className="media-body flex-grow-1">
												<div>
													<div className="user-name">Lucile Devera</div>
													<div className="user-last-chat">Let's talk briefly in the evening. </div>
												</div>
												<div>
													<div className="last-chat-time">Sunday</div>
												</div>
											</div>
										</a>
										<a href="javascript:void(0);" className="media read-chat d-flex">
											<div className="media-img-wrap flex-shrink-0">
												<div className="avatar avatar-online">
													<img src="assets/img/customer/customer1.jpg" alt="User Image" className="avatar-img rounded-circle" />
												</div>
											</div>
											<div className="media-body flex-grow-1">
												<div>
													<div className="user-name">Roland Storey</div>
													<div className="user-last-chat">Do you have any collections? If so, what of?</div>
												</div>
												<div>
													<div className="last-chat-time">Saturday</div>
												</div>
											</div>
										</a>
										<a href="javascript:void(0);" className="media read-chat d-flex">
											<div className="media-img-wrap flex-shrink-0">
												<div className="avatar avatar-away">
													<img src="assets/img/customer/customer2.jpg" alt="User Image" className="avatar-img rounded-circle" />
												</div>
											</div>
											<div className="media-body flex-grow-1">
												<div>
													<div className="user-name">Lindsey Parmley</div>
													<div className="user-last-chat">Connect the two modules with in 1 day.</div>
												</div>
												<div>
													<div className="last-chat-time">Friday</div>
												</div>
											</div>
										</a>
									</div>
								</div>
							</div>
							{/* Chat User List */}
							
							{/* Chat Content */}
							<div className="col-lg-7 col-xl-8 chat-cont-right">
							
								{/* Chat History */}
								<div className="card mb-0">

									<div className="card-header msg_head">
										<div className="d-flex bd-highlight">
											<a id="back_user_list" href="javascript:void(0)" className="back-user-list">
												<i className="fas fa-chevron-left"></i>
											</a>
											<div className="img_cont">
												<img className="rounded-circle user_img" src="assets/img/customer/profile2.jpg" alt="" />
											</div>
											<div className="user_info">
												<span><strong id="receiver_name">Jeffrey Akridge</strong></span>
												<p className="mb-0">Messages</p>
											</div>
										</div>
									</div>

									<div className="card-body msg_card_body chat-scroll">
										<ul className="list-unstyled">
											<li className="media sent d-flex">
												<div className="avatar flex-shrink-0">
													<img src="assets/img/customer/customer5.jpg" alt="User Image" className="avatar-img rounded-circle" />
												</div>
												<div className="media-body flex-grow-1">
													<div className="msg-box">
														<div>
															<p>Hello. What can I do for you?</p>
															<ul className="chat-msg-info">
																<li>
																	<div className="chat-time">
																		<span>8:30 AM</span>
																	</div>
																</li>
															</ul>
														</div>
													</div>
												</div>
											</li>
											<li className="media received d-flex">
												<div className="avatar flex-shrink-0">
													<img src="assets/img/customer/profile2.jpg" alt="User Image" className="avatar-img rounded-circle" />
												</div>
												<div className="media-body flex-grow-1">
													<div className="msg-box">
														<div>
															<p>I'm just looking around.</p>
															<p>Will you tell me something about yourself?</p>
															<ul className="chat-msg-info">
																<li>
																	<div className="chat-time">
																		<span>8:35 AM</span>
																	</div>
																</li>
															</ul>
														</div>
													</div>
													<div className="msg-box">
														<div>
															<p>Are you there? That time!</p>
															<ul className="chat-msg-info">
																<li>
																	<div className="chat-time">
																		<span>8:40 AM</span>
																	</div>
																</li>
															</ul>
														</div>
													</div>
													<div className="msg-box">
														<div>
															<div className="chat-msg-attachments">
																<div className="chat-attachment">
																	<img src="assets/img/product/product12.jpg" alt="Attachment" />
																	<a href="" className="chat-attach-download">
																		<i className="fas fa-download"></i>
																	</a>
																</div>
																<div className="chat-attachment">
																	<img src="assets/img/product/product13.jpg" alt="Attachment" />
																	<a href="" className="chat-attach-download">
																		<i className="fas fa-download"></i>
																	</a>
																</div>
															</div>
															<ul className="chat-msg-info">
																<li>
																	<div className="chat-time">
																		<span>8:41 AM</span>
																	</div>
																</li>
															</ul>
														</div>
													</div>
												</div>
											</li>
											<li className="media sent d-flex">
												<div className="avatar flex-shrink-0">
													<img src="assets/img/customer/customer5.jpg" alt="User Image" className="avatar-img rounded-circle" />
												</div>
												<div className="media-body flex-grow-1">
													<div className="msg-box">
														<div>
															<p>Where?</p>
															<ul className="chat-msg-info">
																<li>
																	<div className="chat-time">
																		<span>8:42 AM</span>
																	</div>
																</li>
															</ul>
														</div>
													</div>
													<div className="msg-box">
														<div>
															<p>OK, my name is Limingqiang. I like singing, playing basketballand so on.</p>
															<ul className="chat-msg-info">
																<li>
																	<div className="chat-time">
																		<span>8:42 AM</span>
																	</div>
																</li>
															</ul>
														</div>
													</div>
													<div className="msg-box">
														<div>
															<div className="chat-msg-attachments">
																<div className="chat-attachment">
																	<img src="assets/img/product/product15.jpg" alt="Attachment" />
																	<a href="" className="chat-attach-download">
																		<i className="fas fa-download"></i>
																	</a>
																</div>
															</div>
															<ul className="chat-msg-info">
																<li>
																	<div className="chat-time">
																		<span>8:50 AM</span>
																	</div>
																</li>
															</ul>
														</div>
													</div>
												</div>
											</li>
											<li className="media received d-flex">
												<div className="avatar flex-shrink-0">
													<img src="assets/img/customer/profile2.jpg" alt="User Image" className="avatar-img rounded-circle" />
												</div>
												<div className="media-body flex-grow-1">
													<div className="msg-box">
														<div>
															<p>You wait for notice.</p>
															<p>Consectetuorem ipsum dolor sit?</p>
															<p>Ok?</p>
															<ul className="chat-msg-info">
																<li>
																	<div className="chat-time">
																		<span>8:55 PM</span>
																	</div>
																</li>
															</ul>
														</div>
													</div>
												</div>
											</li>
											<li className="chat-date">Today</li>
											<li className="media received d-flex">
												<div className="avatar flex-shrink-0">
													<img src="assets/img/customer/profile2.jpg" alt="User Image" className="avatar-img rounded-circle" />
												</div>
												<div className="media-body flex-grow-1">
													<div className="msg-box">
														<div>
															<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
															<ul className="chat-msg-info">
																<li>
																	<div className="chat-time">
																		<span>10:17 AM</span>
																	</div>
																</li>
																<li><a href="javascript:void(0);">Edit</a></li>
															</ul>
														</div>
													</div>
												</div>
											</li>
											<li className="media sent d-flex">
												<div className="avatar flex-shrink-0">
													<img src="assets/img/customer/profile2.jpg" alt="User Image" className="avatar-img rounded-circle" />
												</div>
												<div className="media-body flex-grow-1">
													<div className="msg-box">
														<div>
															<p>Lorem ipsum dollar sit</p>
															<div className="chat-msg-actions dropdown">
																<a href="javascript:void(0);" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
																	<i className="fe fe-elipsis-v"></i>
																</a>
																<div className="dropdown-menu dropdown-menu-right">
																	<a className="dropdown-item" href="javascript:void(0);">Delete</a>
																</div>
															</div>
															<ul className="chat-msg-info">
																<li>
																	<div className="chat-time">
																		<span>10:19 AM</span>
																	</div>
																</li>
																<li><a href="javascript:void(0);">Edit</a></li>
															</ul>
														</div>
													</div>
												</div>
											</li>
											<li className="media received d-flex">
												<div className="avatar flex-shrink-0">
													<img src="assets/img/customer/profile2.jpg" alt="User Image" className="avatar-img rounded-circle" />
												</div>
												<div className="media-body flex-grow-1">
													<div className="msg-box">
														<div>
															<div className="msg-typing">
																<span></span>
																<span></span>
																<span></span>
															</div>
														</div>
													</div>
												</div>
											</li>
										</ul>
									
									</div>
									
									<div className="card-footer">
										<div className="input-group">
											<input className="form-control type_msg mh-auto empty_check" placeholder="Type your message..." />
											<button className="btn btn-primary btn_send"><i className="fa fa-paper-plane" aria-hidden="true"></i></button>
										</div>
									</div>
									
								</div>

							</div>
							{/* Chat Content */}
							
						</div>

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

export default Chat