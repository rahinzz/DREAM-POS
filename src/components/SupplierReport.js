import React from 'react'

const SupplierReport = () => {
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
						<div className="page-header">
							<div className="page-title">
								<h4>Supplier Report</h4>
								<h6>Manage your Supplier Report</h6>
							</div>
						</div>

						{/* /product list */}
						<div className="card">
							<div className="card-body">
								<div className="tabs-set">
									<ul className="nav nav-tabs" id="myTab" role="tablist">
										<li className="nav-item" role="presentation">
										  <button className="nav-link active" id="purchase-tab" data-bs-toggle="tab" data-bs-target="#purchase" type="button" role="tab" aria-controls="purchase" aria-selected="true">Purchase</button>
										</li>
										<li className="nav-item" role="presentation">
										  <button className="nav-link" id="payment-tab" data-bs-toggle="tab" data-bs-target="#payment" type="button" role="tab" aria-controls="payment" aria-selected="false">Payment</button>
										</li>
										<li className="nav-item" role="presentation">
										  <button className="nav-link" id="return-tab" data-bs-toggle="tab" data-bs-target="#return" type="button" role="tab" aria-controls="return" aria-selected="false">Return</button>
										</li>
									  </ul>
									  <div className="tab-content" id="myTabContent">
										<div className="tab-pane fade show active" id="purchase" role="tabpanel" aria-labelledby="purchase-tab">
											<div className="table-top">
												<div className="search-set">
													<div className="search-path">
														<a className="btn btn-filter" id="filter_search">
															<img src="assets/img/icons/filter.svg" alt="img" />
															<span><img src="assets/img/icons/closes.svg" alt="img" /></span>
														</a>
													</div>
													<div className="search-input">
														<a className="btn btn-searchset"><img src="assets/img/icons/search-white.svg" alt="img" /></a>
													</div>
												</div>
												<div className="wordset">
													<ul>
														<li>
															<a data-bs-toggle="tooltip" data-bs-placement="top" title="pdf"><img src="assets/img/icons/pdf.svg" alt="img" /></a>
														</li>
														<li>
															<a data-bs-toggle="tooltip" data-bs-placement="top" title="excel"><img src="assets/img/icons/excel.svg" alt="img" /></a>
														</li>
														<li>
															<a data-bs-toggle="tooltip" data-bs-placement="top" title="print"><img src="assets/img/icons/printer.svg" alt="img" /></a>
														</li>
													</ul>
												</div>
											</div>
											{/* /Filter */}
											<div className="card" id="filter_inputs">
												<div className="card-body pb-0">
													<div className="row">
														<div className="col-lg-2 col-sm-6 col-12">
															<div className="form-group">
																<div className="input-groupicon">
																	<input type="text" placeholder="From Date" className="datetimepicker" />
																	<div className="addonset">
																		<img src="assets/img/icons/calendars.svg" alt="img" />
																	</div>
																</div>
															</div>
														</div>
														<div className="col-lg-2 col-sm-6 col-12">
															<div className="form-group">
																<div className="input-groupicon">
																	<input type="text" placeholder="To Date" className="datetimepicker" />
																	<div className="addonset">
																		<img src="assets/img/icons/calendars.svg" alt="img" />
																	</div>
																</div>
															</div>
														</div>
														<div className="col-lg-1 col-sm-6 col-12 ms-auto">
															<div className="form-group">
																<a className="btn btn-filters ms-auto"><img src="assets/img/icons/search-whites.svg" alt="img" /></a>
															</div>
														</div>
													</div>
												</div>
											</div>
											{/* /Filter */}
											<div className="table-responsive">
												<table className="table datanew">
													<thead>
														<tr>
															<th>
																<label className="checkboxs">
																	<input type="checkbox" />
																	<span className="checkmarks"></span>
																</label>
															</th>
															<th>purchased Date</th>
															<th>pRODUCT nAME</th>
															<th>Purchased amount</th>
															<th>purchased QTY</th>
															<th>Paid</th>
															<th>balance</th>
															<th>Status</th>
														</tr>
													</thead>
													<tbody>
														<tr>
															<td>
																<label className="checkboxs">
																	<input type="checkbox" />
																	<span className="checkmarks"></span>
																</label>
															</td>
															<td>07/12/2021 06:58:25</td>
															<td className="productimgname">
																<a className="product-img">
																	<img src="assets/img/product/product1.jpg" alt="product" />
																</a>
																<a href="javascript:void(0);">Macbook pro</a>
															</td>
															<td>38698.00</td>
															<td>1248</td>
															<td>0.00</td>
															<td>38698.00</td>
															<td><span className="badges bg-lightgrey">Recieved</span></td>
														</tr>
														<tr>
															<td>
																<label className="checkboxs">
																	<input type="checkbox" />
																	<span className="checkmarks"></span>
																</label>
															</td>
															<td>07/12/2021 06:58:25</td>
															<td className="productimgname">
																<a className="product-img">
																	<img src="assets/img/product/product2.jpg" alt="product" />
																</a>
																<a href="javascript:void(0);">Orange</a>
															</td>
															<td>36080.00</td>
															<td>110</td>
															<td>0.00</td>
															<td>36080.00</td>
															<td><span className="badges bg-lightgrey">Recieved</span></td>
														</tr>
														<tr>
															<td>
																<label className="checkboxs">
																	<input type="checkbox" />
																	<span className="checkmarks"></span>
																</label>
															</td>
															<td>07/12/2021 06:58:25</td>
															<td className="productimgname">
																<a className="product-img">
																	<img src="assets/img/product/product3.jpg" alt="product" />
																</a>
																<a href="javascript:void(0);">Pineapple</a>
															</td>
															<td>21000.00</td>
															<td>106</td>
															<td>0.00</td>
															<td>21000.00</td>
															<td><span className="badges bg-lightgrey">Recieved</span></td>
														</tr>
														<tr>
															<td>
																<label className="checkboxs">
																	<input type="checkbox" />
																	<span className="checkmarks"></span>
																</label>
															</td>
															<td>07/12/2021 06:58:25</td>
															<td className="productimgname">
																<a className="product-img">
																	<img src="assets/img/product/product4.jpg" alt="product" />
																</a>
																<a href="javascript:void(0);">Strawberry</a>
															</td>
															<td>11000.00</td>
															<td>105</td>
															<td>0.00</td>
															<td>11000.00</td>
															<td><span className="badges bg-lightgrey">Recieved</span></td>
														</tr>
														<tr>
															<td>
																<label className="checkboxs">
																	<input type="checkbox" />
																	<span className="checkmarks"></span>
																</label>
															</td>
															<td>07/12/2021 06:58:25</td>
															<td className="productimgname">
																<a className="product-img">
																	<img src="assets/img/product/product5.jpg" alt="product" />
																</a>
																<a href="javascript:void(0);">Sunglasses</a>
															</td>
															<td>10100.00</td>
															<td>100</td>
															<td>0.00</td>
															<td>10600.00</td>
															<td><span className="badges bg-lightgrey">Recieved</span></td>
														</tr>
														<tr>
															<td>
																<label className="checkboxs">
																	<input type="checkbox" />
																	<span className="checkmarks"></span>
																</label>
															</td>
															<td>07/12/2021 06:58:25</td>
															<td className="productimgname">
																<a className="product-img">
																	<img src="assets/img/product/product6.jpg" alt="product" />
																</a>
																<a href="javascript:void(0);">Unpaired gray</a>
															</td>
															<td>1210.00</td>
															<td>105</td>
															<td>0.00</td>
															<td>12100.00</td>
															<td><span className="badges bg-lightgrey">Recieved</span></td>
														</tr>
														<tr>
															<td>
																<label className="checkboxs">
																	<input type="checkbox" />
																	<span className="checkmarks"></span>
																</label>
															</td>
															<td>07/12/2021 06:58:25</td>
															<td className="productimgname">
																<a className="product-img">
																	<img src="assets/img/product/product7.jpg" alt="product" />
																</a>
																<a href="javascript:void(0);">Avocat</a>
															</td>
															<td>4500.00</td>
															<td>41</td>
															<td>0.00</td>
															<td>4500.00</td>
															<td><span className="badges bg-lightgrey">Recieved</span></td>
														</tr>
														<tr>
															<td>
																<label className="checkboxs">
																	<input type="checkbox" />
																	<span className="checkmarks"></span>
																</label>
															</td>
															<td>07/12/2021 06:58:25</td>
															<td className="productimgname">
																<a className="product-img">
																	<img src="assets/img/product/product8.jpg" alt="product" />
																</a>
																<a href="javascript:void(0);">Banana</a>
															</td>
															<td>900.00</td>
															<td>28</td>
															<td>0.00</td>
															<td>900.00</td>
															<td><span className="badges bg-lightgrey">Recieved</span></td>
														</tr>
														<tr>
															<td>
																<label className="checkboxs">
																	<input type="checkbox" />
																	<span className="checkmarks"></span>
																</label>
															</td>
															<td>07/12/2021 06:58:25</td>
															<td className="productimgname">
																<a className="product-img">
																	<img src="assets/img/product/product9.jpg" alt="product" /> 
																</a>
																<a href="javascript:void(0);">Earphones</a>
															</td>
															<td>500.00</td>
															<td>28</td>
															<td>0.00</td>
															<td>500.00</td>
															<td><span className="badges bg-lightgrey">Recieved</span></td>
														</tr>
														<tr>
															<td>
																<label className="checkboxs">
																	<input type="checkbox" />
																	<span className="checkmarks"></span>
																</label>
															</td>
															<td>07/12/2021 06:58:25</td>
															<td className="productimgname">
																<a className="product-img">
																	<img src="assets/img/product/product10.jpg" alt="product" />
																</a>
																<a href="javascript:void(0);">Limon</a>
															</td>
															<td>1500.00</td>
															<td>28</td>
															<td>0.00</td>
															<td>500.00</td>
															<td><span className="badges bg-lightgrey">Recieved</span></td>
														</tr>
														<tr>
															<td>
																<label className="checkboxs">
																	<input type="checkbox" />
																	<span className="checkmarks"></span>
																</label>
															</td>
															<td>07/12/2021 06:58:25</td>
															<td className="productimgname">
																<a className="product-img">
																	<img src="assets/img/product/product8.jpg" alt="product" />
																</a>
																<a href="javascript:void(0);">Banana</a>
															</td>
															<td>900.00</td>
															<td>28</td>
															<td>0.00</td>
															<td>900.00</td>
															<td><span className="badges bg-lightgrey">Recieved</span></td>
														</tr>
														<tr>
															<td>
																<label className="checkboxs">
																	<input type="checkbox" />
																	<span className="checkmarks"></span>
																</label>
															</td>
															<td>07/12/2021 06:58:25</td>
															<td className="productimgname">
																<a className="product-img">
																	<img src="assets/img/product/product9.jpg" alt="product" />
																</a>
																<a href="javascript:void(0);">Earphones</a>
															</td>
															<td>500.00</td>
															<td>28</td>
															<td>0.00</td>
															<td>500.00</td>
															<td><span className="badges bg-lightgrey">Recieved</span></td>
														</tr>
														<tr>
															<td>
																<label className="checkboxs">
																	<input type="checkbox" />
																	<span className="checkmarks"></span>
																</label>
															</td>
															<td>07/12/2021 06:58:25</td>
															<td className="productimgname">
																<a className="product-img">
																	<img src="assets/img/product/product10.jpg" alt="product" /> 
																</a>
																<a href="javascript:void(0);">Limon</a>
															</td>
															<td>1500.00</td>
															<td>28</td>
															<td>0.00</td>
															<td>500.00</td>
															<td><span className="badges bg-lightgrey">Recieved</span></td>
														</tr>
													</tbody>
												</table>
											</div>
										</div>
										<div className="tab-pane fade" id="payment" role="tabpanel" >
											<div className="table-top">
												<div className="search-set">
													<div className="search-path">
														<a className="btn btn-filter" id="filter_search2">
															<img src="assets/img/icons/filter.svg" alt="img" />
															<span><img src="assets/img/icons/closes.svg" alt="img" /></span>
														</a>
													</div>
													<div className="search-input">
														<a className="btn btn-searchset"><img src="assets/img/icons/search-white.svg" alt="img" /></a>
													</div>
												</div>
												<div className="wordset">
													<ul>
														<li>
															<a data-bs-toggle="tooltip" data-bs-placement="top" title="pdf"><img src="assets/img/icons/pdf.svg" alt="img" /></a>
														</li>
														<li>
															<a data-bs-toggle="tooltip" data-bs-placement="top" title="excel"><img src="assets/img/icons/excel.svg" alt="img" /></a>
														</li>
														<li>
															<a data-bs-toggle="tooltip" data-bs-placement="top" title="print"><img src="assets/img/icons/printer.svg" alt="img" /></a>
														</li>
													</ul>
												</div>
											</div>
											{/* /Filter */}
											<div className="card" id="filter_inputs2">
												<div className="card-body pb-0">
													<div className="row">
														<div className="col-lg-2 col-sm-6 col-12">
															<div className="form-group">
																<div className="input-groupicon">
																	<input type="text" placeholder="From Date" className="datetimepicker" />
																	<div className="addonset">
																		<img src="assets/img/icons/calendars.svg" alt="img" />
																	</div>
																</div>
															</div>
														</div>
														<div className="col-lg-2 col-sm-6 col-12">
															<div className="form-group">
																<div className="input-groupicon">
																	<input type="text" placeholder="To Date" className="datetimepicker" />
																	<div className="addonset">
																		<img src="assets/img/icons/calendars.svg" alt="img" />
																	</div>
																</div>
															</div>
														</div>
														<div className="col-lg-1 col-sm-6 col-12 ms-auto">
															<div className="form-group">
																<a className="btn btn-filters ms-auto"><img src="assets/img/icons/search-whites.svg" alt="img" /></a>
															</div>
														</div>
													</div>
												</div>
											</div>
											{/* /Filter */}
											<div className="table-responsive">
												<table className="table datanew">
													<thead>
														<tr>
															<th>
																<label className="checkboxs">
																	<input type="checkbox" />
																	<span className="checkmarks"></span>
																</label>
															</th>
															<th>DATE</th>
															<th>Purchase</th>
															<th>Reference</th>
															<th>Supplier name </th>
															<th>Amount</th>
															<th>Paid</th>
															<th>paid by</th>
														</tr>
													</thead>
													<tbody>
														<tr>
															<td>
																<label className="checkboxs">
																	<input type="checkbox" />
																	<span className="checkmarks"></span>
																</label>
															</td>
															<td>2022-03-10	</td>
															<td>PR_1001</td>
															<td>INV/PR_1001</td>
															<td>Thomas21</td>
															<td>1500.00</td>
															<td>1500.00</td>
															<td>Cash</td>
														</tr>
														<tr>
															<td>
																<label className="checkboxs">
																	<input type="checkbox" />
																	<span className="checkmarks"></span>
																</label>
															</td>
															<td>2022-03-10	</td>
															<td>PR_1002</td>
															<td>INV/PR_1002</td>
															<td>504Benjamin</td>
															<td>10.00</td>
															<td>10.00</td>
															<td>Cash</td>
														</tr>
														<tr>
															<td>
																<label className="checkboxs">
																	<input type="checkbox" />
																	<span className="checkmarks"></span>
																</label>
															</td>
															<td>2022-03-10	</td>
															<td>PR_1003</td>
															<td>INV/PR_1003</td>
															<td>James 524</td>
															<td>10.00</td>
															<td>10.00</td>
															<td>Cash</td>
														</tr>
														<tr>
															<td>
																<label className="checkboxs">
																	<input type="checkbox" />
																	<span className="checkmarks"></span>
																</label>
															</td>
															<td>2022-03-10	</td>
															<td>PR_1004</td>
															<td>INV/PR_1004</td>
															<td>Bruklin2022 </td>
															<td>10.00</td>
															<td>10.00</td>
															<td>Cash</td>
														</tr>
														<tr>
															<td>
																<label className="checkboxs">
																	<input type="checkbox" />
																	<span className="checkmarks"></span>
																</label>
															</td>
															<td>2022-03-10	</td>
															<td>PR_1005</td>
															<td>INV/PR_1005</td>
															<td>BeverlyWIN25 </td>
															<td>150.00</td>
															<td>150.00</td>
															<td>Cash</td>
														</tr>
														<tr>
															<td>
																<label className="checkboxs">
																	<input type="checkbox" />
																	<span className="checkmarks"></span>
																</label>
															</td>
															<td>2022-03-10	</td>
															<td>PR_1006</td>
															<td>INV/PR_1006</td>
															<td>BHR256 </td>
															<td>100.00</td>
															<td>100.00</td>
															<td>Cash</td>
														</tr>
														<tr>
															<td>
																<label className="checkboxs">
																	<input type="checkbox" />
																	<span className="checkmarks"></span>
																</label>
															</td>
															<td>2022-03-10	</td>
															<td>PR_1007</td>
															<td>INV/PR_1007</td>
															<td>Alwin243 </td>
															<td>5.00</td>
															<td>5.00</td>
															<td>Cash</td>
														</tr>
														<tr>
															<td>
																<label className="checkboxs">
																	<input type="checkbox" />
																	<span className="checkmarks"></span>
																</label>
															</td>
															<td>2022-03-10	</td>
															<td>PR_1008</td>
															<td>INV/PR_1008</td>
															<td>FredJ25 </td>
															<td>10.00</td>
															<td>10.00</td>
															<td>Cash</td>
														</tr>
														<tr>
															<td>
																<label className="checkboxs">
																	<input type="checkbox" />
																	<span className="checkmarks"></span>
																</label>
															</td>
															<td>2022-03-10	</td>
															<td>PR_1009</td>
															<td>INV/PR_1009</td>
															<td>Cras56 </td>
															<td>15.00</td>
															<td>15.00</td>
															<td>Cash</td>
														</tr>
														<tr>
															<td>
																<label className="checkboxs">
																	<input type="checkbox" />
																	<span className="checkmarks"></span>
																</label>
															</td>
															<td>2022-03-10	</td>
															<td>PR_1010</td>
															<td>INV/PR_1010</td>
															<td>Cras56 </td>
															<td>15.00</td>
															<td>15.00</td>
															<td>Cash</td>
														</tr>
														<tr>
															<td>
																<label className="checkboxs">
																	<input type="checkbox" />
																	<span className="checkmarks"></span>
																</label>
															</td>
															<td>2022-03-10	</td>
															<td>PR_1011</td>
															<td>INV/PR_1011</td>
															<td>FredJ25 </td>
															<td>10.00</td>
															<td>10.00</td>
															<td>Cash</td>
														</tr>
														<tr>
															<td>
																<label className="checkboxs">
																	<input type="checkbox" />
																	<span className="checkmarks"></span>
																</label>
															</td>
															<td>2022-03-10	</td>
															<td>PR_1012</td>
															<td>INV/PR_1012</td>
															<td>Cras56 </td>
															<td>15.00</td>
															<td>15.00</td>
															<td>Cash</td>
														</tr>
														<tr>
															<td>
																<label className="checkboxs">
																	<input type="checkbox" />
																	<span className="checkmarks"></span>
																</label>
															</td>
															<td>2022-03-10	</td>
															<td>PR_1013</td>
															<td>INV/PR_1013</td>
															<td>Cras56 </td>
															<td>15.00</td>
															<td>15.00</td>
															<td>Cash</td>
														</tr>
													</tbody>
												</table>
											</div>
										</div>
										<div className="tab-pane fade" id="return" role="tabpanel" >
											<div className="table-top">
												<div className="search-set">
													<div className="search-path">
														<a className="btn btn-filter" id="filter_search1">
															<img src="assets/img/icons/filter.svg" alt="img" />
															<span><img src="assets/img/icons/closes.svg" alt="img" /></span>
														</a>
													</div>
													<div className="search-input">
														<a className="btn btn-searchset"><img src="assets/img/icons/search-white.svg" alt="img" /></a>
													</div>
												</div>
												<div className="wordset">
													<ul>
														<li>
															<a data-bs-toggle="tooltip" data-bs-placement="top" title="pdf"><img src="assets/img/icons/pdf.svg" alt="img" /></a>
														</li>
														<li>
															<a data-bs-toggle="tooltip" data-bs-placement="top" title="excel"><img src="assets/img/icons/excel.svg" alt="img" /></a>
														</li>
														<li>
															<a data-bs-toggle="tooltip" data-bs-placement="top" title="print"><img src="assets/img/icons/printer.svg" alt="img" /></a>
														</li>
													</ul>
												</div>
											</div>
											{/* /Filter */}
											<div className="card" id="filter_inputs1">
												<div className="card-body pb-0">
													<div className="row">
														<div className="col-lg-2 col-sm-6 col-12">
															<div className="form-group">
																<div className="input-groupicon">
																	<input type="text" placeholder="From Date" className="datetimepicker" />
																	<div className="addonset">
																		<img src="assets/img/icons/calendars.svg" alt="img" />
																	</div>
																</div>
															</div>
														</div>
														<div className="col-lg-2 col-sm-6 col-12">
															<div className="form-group">
																<div className="input-groupicon">
																	<input type="text" placeholder="To Date" className="datetimepicker" />
																	<div className="addonset">
																		<img src="assets/img/icons/calendars.svg" alt="img" />
																	</div>
																</div>
															</div>
														</div>
														<div className="col-lg-1 col-sm-6 col-12 ms-auto">
															<div className="form-group">
																<a className="btn btn-filters ms-auto"><img src="assets/img/icons/search-whites.svg" alt="img" /></a>
															</div>
														</div>
													</div>
												</div>
											</div>
											{/* /Filter */}
											<div className="table-responsive">
												<table className="table datanew">
													<thead>
														<tr>
															<th>
																<label className="checkboxs">
																	<input type="checkbox" />
																	<span className="checkmarks"></span>
																</label>
															</th>
															<th>Reference</th>
															<th>Supplier name </th>
															<th>Amount</th>
															<th>Paid</th>
															<th>Amount due</th>
															<th>Status</th>
															<th>Paument Status</th>
														</tr>
													</thead>
													<tbody>
														<tr>
															<td>
																<label className="checkboxs">
																	<input type="checkbox" />
																	<span className="checkmarks"></span>
																</label>
															</td>
															<td>RT_1001</td>
															<td>Thomas21</td>
															<td>1500.00</td>
															<td>1500.00</td>
															<td>1500.00</td>
															<td><span className="badges bg-lightgreen">Completed</span></td>
															<td><span className="badges bg-lightgreen">Paid</span></td>
														</tr>
														<tr>
															<td>
																<label className="checkboxs">
																	<input type="checkbox" />
																	<span className="checkmarks"></span>
																</label>
															</td>
															<td>RT_1002</td>
															<td>504Benjamin</td>
															<td>10.00</td>
															<td>10.00</td>
															<td>10.00</td>
															<td><span className="badges bg-lightgreen">Completed</span></td>
															<td><span className="badges bg-lightred">Overdue</span></td>
														</tr>
														<tr>
															<td>
																<label className="checkboxs">
																	<input type="checkbox" />
																	<span className="checkmarks"></span>
																</label>
															</td>
															<td>RT_1003</td>
															<td>James 524</td>
															<td>10.00</td>
															<td>10.00</td>
															<td>10.00</td>
															<td><span className="badges bg-lightgreen">Completed</span></td>
															<td><span className="badges bg-lightred">Overdue</span></td>
														</tr>
														<tr>
															<td>
																<label className="checkboxs">
																	<input type="checkbox" />
																	<span className="checkmarks"></span>
																</label>
															</td>
															<td>RT_1004</td>
															<td>Bruklin2022</td>
															<td>10.00</td>
															<td>10.00</td>
															<td>10.00</td>
															<td><span className="badges bg-lightgreen">Completed</span></td>
															<td><span className="badges bg-lightgreen">Paid</span></td>
														</tr>
														<tr>
															<td>
																<label className="checkboxs">
																	<input type="checkbox" />
																	<span className="checkmarks"></span>
																</label>
															</td>
															<td>RT_1005</td>
															<td>BeverlyWIN25</td>
															<td>150.00</td>
															<td>150.00</td>
															<td>150.00</td>
															<td><span className="badges bg-lightgreen">Completed</span></td>
															<td><span className="badges bg-lightred">Overdue</span></td>
														</tr>
														<tr>
															<td>
																<label className="checkboxs">
																	<input type="checkbox" />
																	<span className="checkmarks"></span>
																</label>
															</td>
															<td>RT_1006</td>
															<td>BHR256</td>
															<td>100.00</td>
															<td>100.00</td>
															<td>100.00</td>
															<td><span className="badges bg-lightgreen">Completed</span></td>
															<td><span className="badges bg-lightred">Overdue</span></td>
														</tr>
														<tr>
															<td>
																<label className="checkboxs">
																	<input type="checkbox" />
																	<span className="checkmarks"></span>
																</label>
															</td>
															<td>RT_1007</td>
															<td>Alwin243</td>
															<td>5.00</td>
															<td>5.00</td>
															<td>5.00</td>
															<td><span className="badges bg-lightgreen">Completed</span></td>
															<td><span className="badges bg-lightgreen">Paid</span></td>
														</tr>
														<tr>
															<td>
																<label className="checkboxs">
																	<input type="checkbox" />
																	<span className="checkmarks"></span>
																</label>
															</td>
															<td>RT_1008</td>
															<td>FredJ25</td>
															<td>10.00</td>
															<td>10.00</td>
															<td>10.00</td>
															<td><span className="badges bg-lightgreen">Completed</span></td>
															<td><span className="badges bg-lightgrey">Unpaid</span></td>
														</tr>
														<tr>
															<td>
																<label className="checkboxs">
																	<input type="checkbox" />
																	<span className="checkmarks"></span>
																</label>
															</td>
															<td>RT_1009</td>
															<td>FredJ25</td>
															<td>10.00</td>
															<td>10.00</td>
															<td>10.00</td>
															<td><span className="badges bg-lightgreen">Completed</span></td>
															<td><span className="badges bg-lightgrey">Unpaid</span></td>
														</tr>
														<tr>
															<td>
																<label className="checkboxs">
																	<input type="checkbox" />
																	<span className="checkmarks"></span>
																</label>
															</td>
															<td>RT_1010</td>
															<td>Cras56</td>
															<td>15.00</td>
															<td>15.00</td>
															<td>15.00</td>
															<td><span className="badges bg-lightgreen">Completed</span></td>
															<td><span className="badges bg-lightgrey">Unpaid</span></td>
														</tr>
														<tr>
															<td>
																<label className="checkboxs">
																	<input type="checkbox" />
																	<span className="checkmarks"></span>
																</label>
															</td>
															<td>RT_1010</td>
															<td>Grace2022</td>
															<td>15.00</td>
															<td>15.00</td>
															<td>15.00</td>
															<td><span className="badges bg-lightgreen">Completed</span></td>
															<td><span className="badges bg-lightgrey">Unpaid</span></td>
														</tr>
														<tr>
															<td>
																<label className="checkboxs">
																	<input type="checkbox" />
																	<span className="checkmarks"></span>
																</label>
															</td>
															<td>RT_1011</td>
															<td>Cras56</td>
															<td>15.00</td>
															<td>15.00</td>
															<td>15.00</td>
															<td><span className="badges bg-lightgreen">Completed</span></td>
															<td><span className="badges bg-lightgrey">Unpaid</span></td>
														</tr>
														<tr>
															<td>
																<label className="checkboxs">
																	<input type="checkbox" />
																	<span className="checkmarks"></span>
																</label>
															</td>
															<td>RT_1012</td>
															<td>Grace2022</td>
															<td>15.00</td>
															<td>15.00</td>
															<td>15.00</td>
															<td><span className="badges bg-lightgreen">Completed</span></td>
															<td><span className="badges bg-lightgrey">Unpaid</span></td>
														</tr>
													</tbody>
												</table>
											</div>
										</div>
									  </div>	
								</div>
							</div>
						</div>
						{/* /product list */}
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
			</div>
    </>
  )
}

export default SupplierReport