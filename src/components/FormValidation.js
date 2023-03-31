import React from 'react'

const FormValidation = () => {
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
								<h3 className="page-title">Form Validation</h3>
								<ul className="breadcrumb">
									<li className="breadcrumb-item"><a href="index.html">Dashboard</a></li>
									<li className="breadcrumb-item active">Form Validation</li>
								</ul>
							</div>
						</div>
					</div>
					{/* /Page Header */}
					
					{/* Row */}
					<div className="row">
						<div className="col-sm-12">
						
							{/* Custom Boostrap Validation */}
							<div className="card">
								<div className="card-header">
									<h5 className="card-title">Custom Bootstrap Form Validation</h5>
									<p className="card-text">For custom Bootstrap form validation messages, you’ll need to add the <code>novalidate</code> boolean attribute to your form. For server side validation <a href="https://getbootstrap.com/docs/4.1/components/forms/#server-side" target="_blank">read full documentation</a>.</p>
								</div>
								<div className="card-body">
									<div className="row">
										<div className="col-sm">
											<form className="needs-validation" novalidate>
												<div className="form-row row">
													<div className="col-md-4 mb-3">
														<label htmlFor="validationCustom01">First name</label>
														<input type="text" className="form-control" id="validationCustom01" placeholder="First name" value="Mark" required />
														<div className="valid-feedback">
															Looks good!
														</div>
													</div>
													<div className="col-md-4 mb-3">
														<label htmlFor="validationCustom02">Last name</label>
														<input type="text" className="form-control" id="validationCustom02" placeholder="Last name" value="Otto" required />
														<div className="valid-feedback">
															Looks good!
														</div>
													</div>
													<div className="col-md-4 mb-3">
														<label htmlFor="validationCustomUsername">Username</label>
														<div className="input-group">
															<span className="input-group-text" id="inputGroupPrepend">@</span>
															<input type="text" className="form-control" id="validationCustomUsername" placeholder="Username" aria-describedby="inputGroupPrepend" required />
															<div className="invalid-feedback">
																Please choose a username.
															</div>
														</div>
													</div>
												</div>
												<div className="form-row row">
													<div className="col-md-6 mb-3">
														<label htmlFor="validationCustom03">City</label>
														<input type="text" className="form-control" id="validationCustom03" placeholder="City" required />
														<div className="invalid-feedback">
															Please provide a valid city.
														</div>
													</div>
													<div className="col-md-3 mb-3">
														<label htmlFor="validationCustom04">State</label>
														<input type="text" className="form-control" id="validationCustom04" placeholder="State" required />
														<div className="invalid-feedback">
															Please provide a valid state.
														</div>
													</div>
													<div className="col-md-3 mb-3">
														<label htmlFor="validationCustom05">Zip</label>
														<input type="text" className="form-control" id="validationCustom05" placeholder="Zip" required />
														<div className="invalid-feedback">
															Please provide a valid zip.
														</div>
													</div>
												</div>
												<div className="form-group">
													<div className="form-check">
														<input className="form-check-input" type="checkbox" value="" id="invalidCheck" required />
														<label className="form-check-label" htmlFor="invalidCheck">
															Agree to terms and conditions
														</label>
														<div className="invalid-feedback">
															You must agree before submitting.
														</div>
													</div>
												</div>
												<button className="btn btn-primary" type="submit">Submit form</button>
											</form>
										</div>
									</div>
								</div>
							</div>
							{/* /Custom Boostrap Validation */}
							
							{/* Default Browser Validation */}
							<div className="card">
								<div className="card-header">
									<h5 className="card-title">Browser defaults</h5>
									<p className="card-text">Not interested in custom validation feedback messages or writing JavaScript to change form behaviors? All good, you can use the browser defaults. Try submitting the form below.</p>
								</div>
								<div className="card-body">
									<div className="row">
										<div className="col-sm">
											<form>
												<div className="form-row row">
													<div className="col-md-4 mb-3">
														<label htmlFor="validationDefault01">First name</label>
														<input type="text" className="form-control" id="validationDefault01" placeholder="First name" value="Mark" required />
													</div>
													<div className="col-md-4 mb-3">
														<label htmlFor="validationDefault02">Last name</label>
														<input type="text" className="form-control" id="validationDefault02" placeholder="Last name" value="Otto" required />
													</div>
													<div className="col-md-4 mb-3">
														<label htmlFor="validationDefaultUsername">Username</label>
														<div className="input-group">
															<span className="input-group-text" id="inputGroupPrepend2">@</span>
															<input type="text" className="form-control" id="validationDefaultUsername" placeholder="Username" aria-describedby="inputGroupPrepend2" required />
														</div>
													</div>
												</div>
												<div className="form-row row">
													<div className="col-md-6 mb-3">
														<label htmlFor="validationDefault03">City</label>
														<input type="text" className="form-control" id="validationDefault03" placeholder="City" required />
													</div>
													<div className="col-md-3 mb-3">
														<label htmlFor="validationDefault04">State</label>
														<input type="text" className="form-control" id="validationDefault04" placeholder="State" required />
													</div>
													<div className="col-md-3 mb-3">
														<label htmlFor="validationDefault05">Zip</label>
														<input type="text" className="form-control" id="validationDefault05" placeholder="Zip" required />
													</div>
												</div>
												<div className="form-group">
													<div className="form-check">
														<input className="form-check-input" type="checkbox" value="" id="invalidCheck2" required />
														<label className="form-check-label" htmlFor="invalidCheck2">
															Agree to terms and conditions
														</label>
													</div>
												</div>
												<button className="btn btn-primary" type="submit">Submit form</button>
											</form>
										</div>
									</div>
								</div>
							</div>
							{/* /Default Browser Validation */}

							{/* Server Side Validation */}
							<div className="card">
								<div className="card-header">
									<h5 className="card-title">Server side</h5>
									<p className="card-text">We recommend using client side validation, but in case you require server side, you can indicate invalid and valid form fields with <code>.is-invalid</code> and <code>.is-valid</code>. Note that <code>.invalid-feedback</code> is also supported with these classes.</p>
								</div>
								<div className="card-body">
									<form>
										<div className="form-row row">
											<div className="col-md-4 mb-3">
												<label htmlFor="validationServer01">First name</label>
												<input type="text" className="form-control is-valid" id="validationServer01" placeholder="First name" value="Mark" required />
												<div className="valid-feedback">
													Looks good!
												</div>
											</div>
											<div className="col-md-4 mb-3">
												<label htmlFor="validationServer02">Last name</label>
												<input type="text" className="form-control is-valid" id="validationServer02" placeholder="Last name" value="Otto" required />
												<div className="valid-feedback">
													Looks good!
												</div>
											</div>
											<div className="col-md-4 mb-3">
												<label htmlFor="validationServerUsername">Username</label>
												<div className="input-group input-grp">
													<span className="input-group-text" id="inputGroupPrepend3">@</span>
													<input type="text" className="form-control is-invalid" id="validationServerUsername" placeholder="Username" aria-describedby="inputGroupPrepend3" required />
													<div className="invalid-feedback">
														Please choose a username.
													</div>
												</div>
											</div>
										</div>
										<div className="form-row row">
											<div className="col-md-6 mb-3">
												<label htmlFor="validationServer03">City</label>
												<input type="text" className="form-control is-invalid" id="validationServer03" placeholder="City" required />
												<div className="invalid-feedback">
													Please provide a valid city.
												</div>
											</div>
											<div className="col-md-3 mb-3">
												<label htmlFor="validationServer04">State</label>
												<input type="text" className="form-control is-invalid" id="validationServer04" placeholder="State" required />
												<div className="invalid-feedback">
													Please provide a valid state.
												</div>
											</div>
											<div className="col-md-3 mb-3">
												<label htmlFor="validationServer05">Zip</label>
												<input type="text" className="form-control is-invalid" id="validationServer05" placeholder="Zip" required />
												<div className="invalid-feedback">
													Please provide a valid zip.
												</div>
											</div>
										</div>
										<div className="form-group">
											<div className="form-check">
												<input className="form-check-input is-invalid" type="checkbox" value="" id="invalidCheck3" required />
												<label className="form-check-label" htmlFor="invalidCheck3">
													Agree to terms and conditions
												</label>
												<div className="invalid-feedback">
													You must agree before submitting.
												</div>
											</div>
										</div>
										<button className="btn btn-primary" type="submit">Submit form</button>
									</form>
								</div>
							</div>
							{/* /Server Side Validation */}
							
							{/* Supported Elements */}
							<div className="card">
								<div className="card-header">
									<h5 className="card-title">Supported elements</h5>
									<p className="card-text">Form validation styles are also available for bootstrap custom form controls.</p>
								</div>
								<div className="card-body">
									<div className="row">
										<div className="col-sm">
											<form className="was-validated">
												<div className="mb-3">
												  	<label htmlFor="validationTextarea" className="form-label">Textarea</label>
												  	<textarea className="form-control is-invalid" id="validationTextarea" placeholder="Required example textarea" required></textarea>
												  	<div className="invalid-feedback">
													Please enter a message in the textarea.
												  </div>
												</div>
											  
												<div className="form-check mb-3">
												  	<input type="checkbox" className="form-check-input" id="validationFormCheck1" required />
												  	<label className="form-check-label" htmlFor="validationFormCheck1">Check this checkbox</label>
												  	<div className="invalid-feedback">Example invalid feedback text</div>
												</div>
											  
												<div className="form-check">
												  	<input type="radio" className="form-check-input" id="validationFormCheck2" name="radio-stacked" required />
												  	<label className="form-check-label" htmlFor="validationFormCheck2">Toggle this radio</label>
												</div>
												<div className="form-check mb-3">
												  	<input type="radio" className="form-check-input" id="validationFormCheck3" name="radio-stacked" required />
												  	<label className="form-check-label" htmlFor="validationFormCheck3">Or toggle this other radio</label>
												  	<div className="invalid-feedback">More example invalid feedback text</div>
												</div>
											  
												<div className="mb-3">
													<select className="form-select" required aria-label="select example">
														<option value="">Open this select menu</option>
														<option value="1">One</option>
														<option value="2">Two</option>
														<option value="3">Three</option>
													</select>
													<div className="invalid-feedback">Example invalid select feedback</div>
												</div>
											  
												<div className="mb-3">
												  	<input type="file" className="form-control" aria-label="file example" required />
												  	<div className="invalid-feedback">Example invalid form file feedback</div>
												</div>
											</form>
										</div>
									</div>
								</div>
							</div>
							{/* /Supported Elements */}
							
							{/* Validation Tooltips */}
							<div className="card">
								<div className="card-header">
									<h5 className="card-title">Tooltips</h5>
									<p className="card-text">You can swap the {<code>.valid|invalid-feedback</code>} classes for {<code>.valid|invalid-tooltip</code>} classes to display validation feedback in a styled tooltip.</p>
								</div>
								<div className="card-body">
									<form className="needs-validation" novalidate>
										<div className="form-row row">
											<div className="col-md-4 mb-3">
												<label htmlFor="validationTooltip01">First name</label>
												<input type="text" className="form-control" id="validationTooltip01" placeholder="First name" value="Mark" required />
												<div className="valid-tooltip">
													Looks good!
												</div>
											</div>
											<div className="col-md-4 mb-3">
												<label htmlFor="validationTooltip02">Last name</label>
												<input type="text" className="form-control" id="validationTooltip02" placeholder="Last name" value="Otto" required />
												<div className="valid-tooltip">
													Looks good!
												</div>
											</div>
											<div className="col-md-4 mb-3">
												<label htmlFor="validationTooltipUsername">Username</label>
												<input type="text" className="form-control" id="validationTooltipUsername" placeholder="Username" required />
												<div className="invalid-tooltip">
													Please choose a unique and valid username.
												</div>
											</div>
										</div>
										<div className="form-row row">
											<div className="col-md-6 mb-3">
												<label htmlFor="validationTooltip03">City</label>
												<input type="text" className="form-control" id="validationTooltip03" placeholder="City" required />
												<div className="invalid-tooltip">
													Please provide a valid city.
												</div>
											</div>
											<div className="col-md-3 mb-3">
												<label htmlFor="validationTooltip04">State</label>
												<input type="text" className="form-control" id="validationTooltip04" placeholder="State" required />
												<div className="invalid-tooltip">
													Please provide a valid state.
												</div>
											</div>
											<div className="col-md-3 mb-3">
												<label htmlFor="validationTooltip05">Zip</label>
												<input type="text" className="form-control" id="validationTooltip05" placeholder="Zip" required />
												<div className="invalid-tooltip">
													Please provide a valid zip.
												</div>
											</div>
										</div>
										<button className="btn btn-primary" type="submit">Submit form</button>
									</form>
								</div>
							</div>
							{/* /Validation Tooltips */}
							
						</div>
					</div>
					{/* /Row */}
				
				</div>			
            </div>
        </div>
        {/* /Main Wrapper */}
    </>
  )
}

export default FormValidation