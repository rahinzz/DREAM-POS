import React from 'react';
import { Link } from 'react-router-dom';

const Pos = () => {
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
			
            <div className="page-wrapper ms-0">
				<div className="content">
					<div className="row">
						<div className="col-lg-8 col-sm-12 tabs_wrapper" >
							<div className="page-header ">
								<div className="page-title">
									<h4>Categories</h4>
									<h6>Manage your purchases</h6>
								</div>
							</div>
							<ul className=" tabs owl-carousel owl-theme owl-product  border-0 " >
								<li className="active" id="fruits">
									<div className="product-details " >
										<img src="assets/img/product/product62.png" alt="img" />
										<h6>Fruits</h6>
									</div>
								</li>
								<li id="headphone">
									<div className="product-details " >
										<img src="assets/img/product/product63.png" alt="img" />
										<h6>Headphones</h6>
									</div>
								</li>
								<li id="Accessories">
									<div className="product-details">
										<img src="assets/img/product/product64.png" alt="img" />
										<h6>Accessories</h6>
									</div>
								</li>
								<li id="Shoes">
									<Link className="product-details">
										<img src="assets/img/product/product65.png" alt="img" />
										<h6>Shoes</h6>
									</Link>
								</li>
								<li id="computer">
									<Link className="product-details">
										<img src="assets/img/product/product66.png" alt="img" />
										<h6>Computer</h6>
									</Link>
								</li>
								<li id="Snacks">
									<Link className="product-details">
										<img src="assets/img/product/product67.png" alt="img" />
										<h6>Snacks</h6>
									</Link>
								</li>
								<li id="watch">
									<Link className="product-details">
										<img src="assets/img/product/product68.png" alt="img" />
										<h6>Watches</h6>
									</Link>
								</li>
								<li id="cycle">
									<Link className="product-details">
										<img src="assets/img/product/product61.png" alt="img" />
										<h6>Cycles</h6>
									</Link>
								</li>	
								<li id="fruits1">
									<div className="product-details " >
										<img src="assets/img/product/product62.png" alt="img" />
										<h6>Fruits</h6>
									</div>
								</li>
								<li id="headphone1">
									<div className="product-details " >
										<img src="assets/img/product/product63.png" alt="img" />
										<h6>Headphones</h6>
									</div>
								</li>
							</ul>
							<div className="tabs_container" >
								<div  className="tab_content active" data-tab="fruits">
									<div className="row ">
										<div className="col-lg-3 col-sm-6 d-flex ">
											<div className="productset flex-fill active">
												<div className="productsetimg">
													<img src="assets/img/product/product29.jpg" alt="img" />
													<h6>Qty: 5.00</h6>
													<div className="check-product">
														<i className="fa fa-check"></i>
													</div>
												</div>
												<div className="productsetcontent">
													<h5>Fruits</h5>
													<h4>Orange</h4>
													<h6>150.00</h6>
												</div>
											</div>
										</div>
										<div className="col-lg-3 col-sm-6 d-flex ">
											<div className="productset flex-fill">
												<div className="productsetimg">
													<img src="assets/img/product/product31.jpg" alt="img" />
													<h6>Qty: 1.00</h6>
													<div className="check-product">
														<i className="fa fa-check"></i>
													</div>
												</div>
												<div className="productsetcontent">
													<h5>Fruits</h5>
													<h4>Strawberry</h4>
													<h6>15.00</h6>
												</div>
											</div>
										</div>
										
										<div className="col-lg-3 col-sm-6 d-flex ">
											<div className="productset flex-fill">
												<div className="productsetimg">
													<img src="assets/img/product/product35.jpg" alt="img" />
													<h6>Qty: 5.00</h6>
													<div className="check-product">
														<i className="fa fa-check"></i>
													</div>
												</div>
												<div className="productsetcontent">
													<h5>Fruits</h5>
													<h4>Banana</h4>
													<h6>150.00</h6>
												</div>
											</div>
										</div>
										<div className="col-lg-3 col-sm-6 d-flex ">
											<div className="productset flex-fill">
												<div className="productsetimg">
													<img src="assets/img/product/product37.jpg" alt="img" />
													<h6>Qty: 5.00</h6>
													<div className="check-product">
														<i className="fa fa-check"></i>
													</div>
												</div>
												<div className="productsetcontent">
													<h5>Fruits</h5>
													<h4>Limon</h4>
													<h6>1500.00</h6>
												</div>
											</div>
										</div>
										<div className="col-lg-3 col-sm-6 d-flex ">
											<div className="productset flex-fill">
												<div className="productsetimg">
													<img src="assets/img/product/product54.jpg" alt="img" />
													<h6>Qty: 5.00</h6>
													<div className="check-product">
														<i className="fa fa-check"></i>
													</div>
												</div>
												<div className="productsetcontent">
													<h5>Fruits</h5>
													<h4>Apple</h4>
													<h6>1500.00</h6>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="tab_content" data-tab="headphone">
									<div className="row ">
										<div className="col-lg-3 col-sm-6 d-flex ">
											<div className="productset flex-fill">
												<div className="productsetimg">
													<img src="assets/img/product/product44.jpg" alt="img" />
													<h6>Qty: 5.00</h6>
													<div className="check-product">
														<i className="fa fa-check"></i>
													</div>
												</div>
												<div className="productsetcontent">
													<h5>Headphones</h5>
													<h4>Earphones</h4>
													<h6>150.00</h6>
												</div>
											</div>
										</div>
										<div className="col-lg-3 col-sm-6 d-flex ">
											<div className="productset flex-fill">
												<div className="productsetimg">
													<img src="assets/img/product/product45.jpg" alt="img" />
													<h6>Qty: 5.00</h6>
													<div className="check-product">
														<i className="fa fa-check"></i>
													</div>
												</div>
												<div className="productsetcontent">
													<h5>Headphones</h5>
													<h4>Earphones</h4>
													<h6>150.00</h6>
												</div>
											</div>
										</div>
										<div className="col-lg-3 col-sm-6 d-flex ">
											<div className="productset flex-fill">
												<div className="productsetimg">
													<img src="assets/img/product/product36.jpg" alt="img" />
													<h6>Qty: 5.00</h6>
													<div className="check-product">
														<i className="fa fa-check"></i>
													</div>
												</div>
												<div className="productsetcontent">
													<h5>Headphones</h5>
													<h4>Earphones</h4>
													<h6>150.00</h6>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="tab_content" data-tab="Accessories">
									<div className="row">
										<div className="col-lg-3 col-sm-6 d-flex ">
											<div className="productset flex-fill">
												<div className="productsetimg">
													<img src="assets/img/product/product32.jpg" alt="img" />
													<h6>Qty: 1.00</h6>
													<div className="check-product">
														<i className="fa fa-check"></i>
													</div>
												</div>
												<div className="productsetcontent">
													<h5>Accessories</h5>
													<h4>Sunglasses</h4>
													<h6>15.00</h6>
												</div>
											</div>
										</div>
										<div className="col-lg-3 col-sm-6 d-flex ">
											<div className="productset flex-fill">
												<div className="productsetimg">
													<img src="assets/img/product/product46.jpg" alt="img" />
													<h6>Qty: 1.00</h6>
													<div className="check-product">
														<i className="fa fa-check"></i>
													</div>
												</div>
												<div className="productsetcontent">
													<h5>Accessories</h5>
													<h4>Pendrive</h4>
													<h6>150.00</h6>
												</div>
											</div>
										</div>
										<div className="col-lg-3 col-sm-6 d-flex ">
											<div className="productset flex-fill">
												<div className="productsetimg">
													<img src="assets/img/product/product55.jpg" alt="img" />
													<h6>Qty: 1.00</h6>
													<div className="check-product">
														<i className="fa fa-check"></i>
													</div>
												</div>
												<div className="productsetcontent">
													<h5>Accessories</h5>
													<h4>Mouse</h4>
													<h6>150.00</h6>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="tab_content" data-tab="Shoes">
									<div className="row">
										<div className="col-lg-3 col-sm-6 d-flex ">
											<div className="productset flex-fill">
												<div className="productsetimg">
													<img src="assets/img/product/product60.jpg" alt="img" />
													<h6>Qty: 1.00</h6>
													<div className="check-product">
														<i className="fa fa-check"></i>
													</div>
												</div>
												<div className="productsetcontent">
													<h5>Shoes</h5>
													<h4>Red nike</h4>
													<h6>1500.00</h6>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="tab_content" data-tab="computer">
									<div className="row">
										
										<div className="col-lg-3 col-sm-6 d-flex ">
											<div className="productset flex-fill">
												<div className="productsetimg">
													<img src="assets/img/product/product56.jpg" alt="img" />
													<h6>Qty: 1.00</h6>
													<div className="check-product">
														<i className="fa fa-check"></i>
													</div>
												</div>
												<div className="productsetcontent">
													<h5>Computers</h5>
													<h4>Desktop</h4>
													<h6>1500.00</h6>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="tab_content" data-tab="Snacks">
									<div className="row">
										<div className="col-lg-3 col-sm-6 d-flex ">
											<div className="productset flex-fill">
												<div className="productsetimg">
													<img src="assets/img/product/product47.jpg" alt="img" />
													<h6>Qty: 1.00</h6>
													<div className="check-product">
														<i className="fa fa-check"></i>
													</div>
												</div>
												<div className="productsetcontent">
													<h5>Snacks</h5>
													<h4>Duck Salad</h4>
													<h6>1500.00</h6>
												</div>
											</div>
										</div>
										<div className="col-lg-3 col-sm-6 d-flex ">
											<div className="productset flex-fill">
												<div className="productsetimg">
													<img src="assets/img/product/product48.png" alt="img" />
													<h6>Qty: 1.00</h6>
													<div className="check-product">
														<i className="fa fa-check"></i>
													</div>
												</div>
												<div className="productsetcontent">
													<h5>Snacks</h5>
													<h4>Breakfast board</h4>
													<h6>1500.00</h6>
												</div>
											</div>
										</div>
										<div className="col-lg-3 col-sm-6 d-flex ">
											<div className="productset flex-fill">
												<div className="productsetimg">
													<img src="assets/img/product/product57.jpg" alt="img" />
													<h6>Qty: 1.00</h6>
													<div className="check-product">
														<i className="fa fa-check"></i>
													</div>
												</div>
												<div className="productsetcontent">
													<h5>Snacks</h5>
													<h4>California roll</h4>
													<h6>1500.00</h6>
												</div>
											</div>
										</div>
										<div className="col-lg-3 col-sm-6 d-flex ">
											<div className="productset flex-fill">
												<div className="productsetimg">
													<img src="assets/img/product/product58.jpg" alt="img" />
													<h6>Qty: 1.00</h6>
													<div className="check-product">
														<i className="fa fa-check"></i>
													</div>
												</div>
												<div className="productsetcontent">
													<h5>Snacks</h5>
													<h4>Sashimi</h4>
													<h6>1500.00</h6>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="tab_content" data-tab="watch">
									<div className="row">
										<div className="col-lg-3 col-sm-6 d-flex ">
											<div className="productset flex-fill">
												<div className="productsetimg">
													<img src="assets/img/product/product49.jpg" alt="img" />
													<h6>Qty: 1.00</h6>
													<div className="check-product">
														<i className="fa fa-check"></i>
													</div>
												</div>
												<div className="productsetcontent">
													<h4>Watch</h4>
													<h5>Watch</h5>
													<h6>1500.00</h6>
												</div>
											</div>
										</div>
										<div className="col-lg-3 col-sm-6 d-flex ">
											<div className="productset flex-fill">
												<div className="productsetimg">
													<img src="assets/img/product/product51.jpg" alt="img" />
													<h6>Qty: 1.00</h6>
												</div>
												<div className="productsetcontent">
													<h4>Watch</h4>
													<h5>Watch</h5>
													<h6>1500.00</h6>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="tab_content" data-tab="cycle">
									<div className="row">
										<div className="col-lg-3 col-sm-6 d-flex ">
											<div className="productset flex-fill">
												<div className="productsetimg">
													<img src="assets/img/product/product52.jpg" alt="img" />
													<h6>Qty: 1.00</h6>
													<div className="check-product">
														<i className="fa fa-check"></i>
													</div>
												</div>
												<div className="productsetcontent">
													<h4>Cycle</h4>
													<h5>Cycle</h5>
													<h6>1500.00</h6>
												</div>
											</div>
										</div>
										<div className="col-lg-3 col-sm-6 d-flex ">
											<div className="productset flex-fill">
												<div className="productsetimg">
													<img src="assets/img/product/product53.jpg" alt="img" />
													<h6>Qty: 1.00</h6>
													<div className="check-product">
														<i className="fa fa-check"></i>
													</div>
												</div>
												<div className="productsetcontent">
													<h4>Cycle</h4>
													<h5>Cycle</h5>
													<h6>1500.00</h6>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div  className="tab_content" data-tab="fruits1">
									<div className="row ">
										
										<div className="col-lg-3 col-sm-6 d-flex ">
											<div className="productset flex-fill">
												<div className="productsetimg">
													<img src="assets/img/product/product29.jpg" alt="img" />
													<h6>Qty: 5.00</h6>
													<div className="check-product">
														<i className="fa fa-check"></i>
													</div>
												</div>
												<div className="productsetcontent">
													<h5>Fruits</h5>
													<h4>Orange</h4>
													<h6>150.00</h6>
												</div>
											</div>
										</div>
										<div className="col-lg-3 col-sm-6 d-flex ">
											<div className="productset flex-fill">
												<div className="productsetimg">
													<img src="assets/img/product/product31.jpg" alt="img" />
													<h6>Qty: 1.00</h6>
													<div className="check-product">
														<i className="fa fa-check"></i>
													</div>
												</div>
												<div className="productsetcontent">
													<h5>Fruits</h5>
													<h4>Strawberry</h4>
													<h6>15.00</h6>
												</div>
											</div>
										</div>
										
										<div className="col-lg-3 col-sm-6 d-flex ">
											<div className="productset flex-fill">
												<div className="productsetimg">
													<img src="assets/img/product/product35.jpg" alt="img" />
													<h6>Qty: 5.00</h6>
													<div className="check-product">
														<i className="fa fa-check"></i>
													</div>
												</div>
												<div className="productsetcontent">
													<h5>Fruits</h5>
													<h4>Banana</h4>
													<h6>150.00</h6>
												</div>
											</div>
										</div>
									
										<div className="col-lg-3 col-sm-6 d-flex ">
											<div className="productset flex-fill">
												<div className="productsetimg">
													<img src="assets/img/product/product37.jpg" alt="img" />
													<h6>Qty: 5.00</h6>
													<div className="check-product">
														<i className="fa fa-check"></i>
													</div>
												</div>
												<div className="productsetcontent">
													<h5>Fruits</h5>
													<h4>Limon</h4>
													<h6>1500.00</h6>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="tab_content" data-tab="headphone1">
									<div className="row ">
										<div className="col-lg-3 col-sm-6 d-flex ">
											<div className="productset flex-fill">
												<div className="productsetimg">
													<img src="assets/img/product/product44.jpg" alt="img" />
													<h6>Qty: 5.00</h6>
													<div className="check-product">
														<i className="fa fa-check"></i>
													</div>
												</div>
												<div className="productsetcontent">
													<h5>Headphones</h5>
													<h4>Earphones</h4>
													<h6>150.00</h6>
												</div>
											</div>
										</div>
										<div className="col-lg-3 col-sm-6 d-flex ">
											<div className="productset flex-fill">
												<div className="productsetimg">
													<img src="assets/img/product/product45.jpg" alt="img" />
													<h6>Qty: 5.00</h6>
													<div className="check-product">
														<i className="fa fa-check"></i>
													</div>
												</div>
												<div className="productsetcontent">
													<h5>Headphones</h5>
													<h4>Earphones</h4>
													<h6>150.00</h6>
												</div>
											</div>
										</div>
										<div className="col-lg-3 col-sm-6 d-flex ">
											<div className="productset flex-fill">
												<div className="productsetimg">
													<img src="assets/img/product/product36.jpg" alt="img" />
													<h6>Qty: 5.00</h6>
													<div className="check-product">
														<i className="fa fa-check"></i>
													</div>
												</div>
												<div className="productsetcontent">
													<h5>Headphones</h5>
													<h4>Earphones</h4>
													<h6>150.00</h6>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-sm-12 ">
							<div className="order-list">
								<div className="orderid">
									<h4>Order List</h4>
									<h5>Transaction id : #65565</h5>
								</div>
								<div className="actionproducts">
									<ul>
										<li>
											<Link to="javascript:void(0);" className="deletebg confirm-text"><img src="assets/img/icons/delete-2.svg" alt="img" /></Link>
										</li>
										<li>
											<Link to="javascript:void(0);" data-bs-toggle="dropdown" aria-expanded="false" className="dropset" >
												<img src="assets/img/icons/ellipise1.svg" alt="img" />
											</Link>
											<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton" data-popper-placement="bottom-end">
												<li>
													<Link to="#" className="dropdown-item">Action</Link>
												</li>
												<li>
													<Link to="#" className="dropdown-item">Another Action</Link>
												</li>
												<li>
													<Link to="#" className="dropdown-item">Something Elses</Link>
												</li>
											</ul>
										</li>
									</ul>
								</div>
							</div>
							<div className="card card-order">
								<div className="card-body">
									<div className="row">
										<div className="col-12">
											<Link to="javascript:void(0);" className="btn btn-adds" data-bs-toggle="modal" data-bs-target="#create"><i className="fa fa-plus me-2"></i>Add Customer</Link>
										</div>
										<div className="col-lg-12">
											<div className="select-split ">
												<div className="select-group w-100">
													<select className="select">
														<option>Walk-in Customer</option>
														<option>Chris Moris</option>
													</select>
												</div>
											</div>
										</div>
										<div className="col-lg-12">
											<div className="select-split">
												<div className="select-group w-100">
													<select className="select">
														<option>Product </option>
														<option>Barcode</option>
													</select>
												</div>
											</div>
										</div>
										<div className="col-12">
											<div className="text-end">
												<Link className="btn btn-scanner-set"><img src="assets/img/icons/scanner1.svg" alt="img" className="me-2" />Scan bardcode</Link>
											</div>
										</div>
									</div>
								</div>
								<div className="split-card">
								</div>
								<div className="card-body pt-0">
									<div className="totalitem">
										<h4>Total items : 4</h4>
										<Link to="javascript:void(0);">Clear all</Link>
									</div>
									<div className="product-table">
										<ul className="product-lists">
											<li>
												<div className="productimg">
													<div className="productimgs">
														<img src="assets/img/product/product30.jpg" alt="img" />
													</div>
													<div className="productcontet">
														<h4>Pineapple 
														<Link to="javascript:void(0);" className="ms-2" data-bs-toggle="modal" data-bs-target="#edit"><img src="assets/img/icons/edit-5.svg" alt="img" /></Link>
														</h4>
														<div className="productlinkset">
															<h5>PT001</h5>
														</div>
														<div className="increment-decrement">
															<div className="input-groups">
																<input type="button" value="-"  className="button-minus dec button" />
																<input type="text" name="child"  value="0" className="quantity-field" />
																<input type="button" value="+"  className="button-plus inc button " />
															</div>
														</div>
													</div>
												</div>
											</li>
											<li>3000.00	</li>
											<li><Link className="confirm-text" to="javascript:void(0);"><img src="assets/img/icons/delete-2.svg" alt="img" /></Link></li>
										</ul>
										<ul className="product-lists">
											<li>
												<div className="productimg">
													<div className="productimgs">
														<img src="assets/img/product/product34.jpg" alt="img" />
													</div>
													<div className="productcontet">
														<h4>Green Nike 
														<Link to="javascript:void(0);" className="ms-2" data-bs-toggle="modal" data-bs-target="#edit"><img src="assets/img/icons/edit-5.svg" alt="img" /></Link>
														</h4>
														<div className="productlinkset">
															<h5>PT001</h5>
														</div> 
														<div className="increment-decrement">
															<div className="input-groups">
																<input type="button" value="-"  className="button-minus dec button" />
																<input type="text" name="child"  value="0" className="quantity-field" />
																<input type="button" value="+"  className="button-plus inc button " />
															</div>
														</div>
													</div>
												</div>
											</li>
											<li>3000.00	</li>
											<li><Link className="confirm-text" to="javascript:void(0);"><img src="assets/img/icons/delete-2.svg" alt="img" /></Link></li>
										</ul>
										<ul className="product-lists">
											<li>
												<div className="productimg">
													<div className="productimgs">
														<img src="assets/img/product/product35.jpg" alt="img" />
													</div>
													<div className="productcontet">
														<h4>Banana
														<Link to="javascript:void(0);" className="ms-2" data-bs-toggle="modal" data-bs-target="#edit"><img src="assets/img/icons/edit-5.svg" alt="img" /></Link>
														</h4>
														<div className="productlinkset">
															<h5>PT001</h5>
														</div>
														<div className="increment-decrement">
															<div className="input-groups">
																<input type="button" value="-"  className="button-minus dec button" />
																<input type="text" name="child"  value="0" className="quantity-field" />
																<input type="button" value="+"  className="button-plus inc button " />
															</div>
														</div>
													</div>
												</div>
											</li>
											<li>3000.00	</li>
											<li><Link className="confirm-text" to="javascript:void(0);"><img src="assets/img/icons/delete-2.svg" alt="img" /></Link></li>
										</ul>
										<ul className="product-lists">
											<li>
												<div className="productimg">
													<div className="productimgs">
														<img src="assets/img/product/product31.jpg" alt="img" />
													</div>
													<div className="productcontet">
														<h4>Strawberry
														<Link to="javascript:void(0);" className="ms-2" data-bs-toggle="modal" data-bs-target="#edit"><img src="assets/img/icons/edit-5.svg" alt="img" /></Link>
														</h4>
														<div className="productlinkset">
															<h5>PT001</h5>
														</div>
														<div className="increment-decrement">
															<div className="input-groups">
																<input type="button" value="-"  className="button-minus dec button" />
																<input type="text" name="child"  value="0" className="quantity-field" />
																<input type="button" value="+"  className="button-plus inc button " />
															</div>
														</div>
													</div>
												</div>
											</li>
											<li>3000.00	</li>
											<li><Link className="confirm-text" to="javascript:void(0);"><img src="assets/img/icons/delete-2.svg" alt="img" /></Link></li>
										</ul>
									</div>
								</div>
								<div className="split-card">
								</div>
								<div className="card-body pt-0 pb-2">
									<div className="setvalue">
										<ul>
											<li>
												<h5>Subtotal </h5>
												<h6>55.00$</h6>
											</li>
											<li>
												<h5>Tax </h5>
												<h6>5.00$</h6>
											</li>
											<li className="total-value">
												<h5>Total  </h5>
												<h6>60.00$</h6>
											</li>
										</ul>
									</div>
									<div className="setvaluecash">
										<ul>
											<li>
												<Link to="javascript:void(0);" className="paymentmethod">
													<img src="assets/img/icons/cash.svg" alt="img" className="me-2" />
													Cash
												</Link>
											</li>
											<li>
												<Link to="javascript:void(0);" className="paymentmethod">
													<img src="assets/img/icons/debitcard.svg" alt="img" className="me-2" />
													Debit
												</Link>
											</li>
											<li>
												<Link to="javascript:void(0);" className="paymentmethod">
													<img src="assets/img/icons/scan.svg" alt="img" className="me-2" />
													Scan
												</Link>
											</li>
										</ul>
									</div>		
									<div className="btn-totallabel">
										<h5>Checkout</h5>
										<h6>60.00$</h6>
									</div>							
									<div className="btn-pos">
										<ul>
											<li>
												<Link className="btn"><img src="assets/img/icons/pause1.svg" alt="img" className="me-1" />Hold</Link>
											</li>
											<li>
												<Link className="btn"><img src="assets/img/icons/edit-6.svg" alt="img" className="me-1" />Quotation</Link>
											</li>
											<li>
												<Link className="btn"><img src="assets/img/icons/trash12.svg" alt="img" className="me-1" />Void</Link>
											</li>
											<li>
												<Link className="btn"><img src="assets/img/icons/wallet1.svg" alt="img" className="me-1" />Payment</Link>
											</li>
											<li>
												<Link className="btn"  data-bs-toggle="modal" data-bs-target="#recents"><img src="assets/img/icons/transcation.svg" alt="img" className="me-1" /> Transaction</Link>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div className="modal fade" id="calculator" tabindex="-1"   aria-hidden="true">
			<div className="modal-dialog modal-dialog-centered" role="document">
				<div className="modal-content">
					<div className="modal-header">
						 <h5 className="modal-title" >Define Quantity</h5>
						<button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">×</span>
						</button>
					</div>
					<div className="modal-body">
						<div className="calculator-set">
							<div className="calculatortotal">
								<h4>0</h4>
							</div>
							<ul>
								<li>
									<Link to="javascript:void(0);">1</Link>
								</li>
								<li>
									<Link to="javascript:void(0);">2</Link>
								</li>
								<li>
									<Link to="javascript:void(0);">3</Link>
								</li>
								<li>
									<Link to="javascript:void(0);">4</Link>
								</li>
								<li>
									<Link to="javascript:void(0);">5</Link>
								</li>
								<li>
									<Link to="javascript:void(0);">6</Link>
								</li>
								<li>
									<Link to="javascript:void(0);">7</Link>
								</li>
								<li>
									<Link to="javascript:void(0);">8</Link>
								</li>
								<li>
									<Link to="javascript:void(0);">9</Link>
								</li>
								<li>
									<Link to="javascript:void(0);" className="btn btn-closes"><img src="assets/img/icons/close-circle.svg" alt="img" /></Link>
								</li>
								<li>
									<Link to="javascript:void(0);">0</Link>
								</li>
								<li>
									<Link to="javascript:void(0);" className="btn btn-reverse"><img src="assets/img/icons/reverse.svg" alt="img" /></Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div className="modal fade" id="holdsales" tabindex="-1"    aria-hidden="true">
			<div className="modal-dialog modal-dialog-centered" role="document">
				<div className="modal-content">
					<div className="modal-header">
						 <h5 className="modal-title" >Hold order</h5>
						<button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">×</span>
						</button>
					</div>
					<div className="modal-body">
						<div className="hold-order">
							<h2>4500.00</h2>
						</div>
						<div className="form-group">
							<label>Order Reference</label>
							<input type="text" />
						</div>
						<div className="para-set">
							<p>The current order will be set on hold. You can retreive this order from the pending order button. Providing a reference to it might help you to identify the order more quickly.</p>
						</div>
						<div className="col-lg-12">
							<Link className="btn btn-submit me-2">Submit</Link>
							<Link className="btn btn-cancel" data-bs-dismiss="modal">Cancel</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div className="modal fade" id="edit" tabindex="-1"    aria-hidden="true">
			<div className="modal-dialog modal-lg modal-dialog-centered" role="document">
				<div className="modal-content">
					<div className="modal-header">
						 <h5 className="modal-title" >Edit Order</h5>
						<button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">×</span>
						</button>
					</div>
					<div className="modal-body">
						<div className="row">
							<div className="col-lg-6 col-sm-12 col-12">
								<div className="form-group">
									<label>Product Price</label>
									<input type="text" value="20" />
								</div>
							</div>
							<div className="col-lg-6 col-sm-12 col-12">
								<div className="form-group">
									<label>Product Price</label>
									<select className="select">
										<option>Exclusive</option>
										<option>Inclusive</option>
									</select>
								</div>
							</div>
							<div className="col-lg-6 col-sm-12 col-12">
								<div className="form-group">
									<label> Tax</label>
									<div className="input-group">
										<input type="text" />
										<Link className="scanner-set input-group-text">
											%
										</Link>
									</div>
								</div>
							</div>
							<div className="col-lg-6 col-sm-12 col-12">
								<div className="form-group">
									<label>Discount Type</label>
									<select className="select">
										<option>Fixed</option>
										<option>Percentage</option>
									</select>
								</div>
							</div>
							<div className="col-lg-6 col-sm-12 col-12">
								<div className="form-group">
									<label>Discount</label>
									<input type="text" value="20" />
								</div>
							</div>
							<div className="col-lg-6 col-sm-12 col-12">
								<div className="form-group">
									<label>Sales Unit</label>
									<select className="select">
										<option>Kilogram</option>
										<option>Grams</option>
									</select>
								</div>
							</div>
						</div>
						<div className="col-lg-12">
							<Link className="btn btn-submit me-2">Submit</Link>
							<Link className="btn btn-cancel" data-bs-dismiss="modal">Cancel</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div className="modal fade" id="create" tabindex="-1" aria-labelledby="create"  aria-hidden="true">
			<div className="modal-dialog modal-lg modal-dialog-centered" role="document">
				<div className="modal-content">
					<div className="modal-header">
						 <h5 className="modal-title" >Create</h5>
						<button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">×</span>
						</button>
					</div>
					<div className="modal-body">
						<div className="row">
							<div className="col-lg-6 col-sm-12 col-12">
								<div className="form-group">
									<label>Customer Name</label>
									<input type="text" />
								</div>
							</div>
							<div className="col-lg-6 col-sm-12 col-12">
								<div className="form-group">
									<label>Email</label>
									<input type="text" />
								</div>
							</div>
							<div className="col-lg-6 col-sm-12 col-12">
								<div className="form-group">
									<label>Phone</label>
									<input type="text" />
								</div>
							</div>
							<div className="col-lg-6 col-sm-12 col-12">
								<div className="form-group">
									<label>Country</label>
									<input type="text" />
								</div>
							</div>
							<div className="col-lg-6 col-sm-12 col-12">
								<div className="form-group">
									<label>City</label>
									<input type="text" />
								</div>
							</div>
							<div className="col-lg-6 col-sm-12 col-12">
								<div className="form-group">
									<label>Address</label>
									<input type="text" />
								</div>
							</div>
						</div>
						<div className="col-lg-12">
							<Link className="btn btn-submit me-2">Submit</Link>
							<Link className="btn btn-cancel" data-bs-dismiss="modal">Cancel</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div className="modal fade" id="delete" tabindex="-1"    aria-hidden="true">
			<div className="modal-dialog modal-dialog-centered" role="document">
				<div className="modal-content">
					<div className="modal-header">
						 <h5 className="modal-title" >Order Deletion</h5>
						<button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">×</span>
						</button>
					</div>
					<div className="modal-body">
						<div className="delete-order">
							<img src="assets/img/icons/close-circle1.svg" alt="img" />
						</div>
						<div className="para-set text-center">
							<p>The current order will be deleted as no payment has been <br /> made so far.</p>
						</div>
						<div className="col-lg-12 text-center">
							<Link className="btn btn-danger me-2">Yes</Link>
							<Link className="btn btn-cancel" data-bs-dismiss="modal">No</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div className="modal fade" id="recents" tabindex="-1"    aria-hidden="true">
			<div className="modal-dialog modal-lg modal-dialog-centered" role="document">
				<div className="modal-content">
					<div className="modal-header">
						 <h5 className="modal-title" >Recent Transactions</h5>
						<button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">×</span>
						</button>
					</div>
					<div className="modal-body">
						<div className="tabs-sets">
							<ul className="nav nav-tabs" id="myTabs" role="tablist">
								<li className="nav-item" role="presentation">
								  <button className="nav-link active" id="purchase-tab" data-bs-toggle="tab" data-bs-target="#purchase" type="button"   aria-controls="purchase" aria-selected="true" role="tab">Purchase</button>
								</li>
								<li className="nav-item" role="presentation">
								  <button className="nav-link" id="payment-tab" data-bs-toggle="tab" data-bs-target="#payment" type="button"   aria-controls="payment" aria-selected="false" role="tab">Payment</button>
								</li>
								<li className="nav-item" role="presentation">
								  <button className="nav-link" id="return-tab" data-bs-toggle="tab" data-bs-target="#return" type="button"   aria-controls="return" aria-selected="false" role="tab">Return</button>
								</li>
							  </ul>
							  <div className="tab-content" >
								<div className="tab-pane fade show active" id="purchase" role="tabpanel" aria-labelledby="purchase-tab">
									<div className="table-top">
										<div className="search-set">
											<div className="search-input">
												<Link className="btn btn-searchset"><img src="assets/img/icons/search-white.svg" alt="img" /></Link>
											</div>
										</div>
										<div className="wordset">
											<ul>
												<li>
													<Link data-bs-toggle="tooltip" data-bs-placement="top" title="pdf"><img src="assets/img/icons/pdf.svg" alt="img" /></Link>
												</li>
												<li>
													<Link data-bs-toggle="tooltip" data-bs-placement="top" title="excel"><img src="assets/img/icons/excel.svg" alt="img" /></Link>
												</li>
												<li>
													<Link data-bs-toggle="tooltip" data-bs-placement="top" title="print"><img src="assets/img/icons/printer.svg" alt="img" /></Link>
												</li>
											</ul>
										</div>
									</div>
									<div className="table-responsive">
										<table className="table datanew">
											<thead>
												<tr>
													<th>Date</th>
													<th>Reference</th>
													<th>Customer</th>
													<th>Amount	</th>
													<th className="text-end">Action</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>2022-03-07	</td>
													<td>INV/SL0101</td>
													<td>Walk-in Customer</td>
													<td>$ 1500.00</td>
													<td>
														<Link className="me-3" to="javascript:void(0);">
															<img src="assets/img/icons/eye.svg" alt="img" />
														</Link>
														<Link className="me-3" to="javascript:void(0);">
															<img src="assets/img/icons/edit.svg" alt="img" />
														</Link>
														<Link className="me-3 confirm-text" to="javascript:void(0);">
															<img src="assets/img/icons/delete.svg" alt="img" />
														</Link>
													</td>
												</tr>
												<tr>
													<td>2022-03-07	</td>
													<td>INV/SL0101</td>
													<td>Walk-in Customer</td>
													<td>$ 1500.00</td>
													<td>
														<Link className="me-3" to="javascript:void(0);">
															<img src="assets/img/icons/eye.svg" alt="img" />
														</Link>
														<Link className="me-3" to="javascript:void(0);">
															<img src="assets/img/icons/edit.svg" alt="img" />
														</Link>
														<Link className="me-3 confirm-text" to="javascript:void(0);">
															<img src="assets/img/icons/delete.svg" alt="img" />
														</Link>
													</td>
												</tr>
												<tr>
													<td>2022-03-07	</td>
													<td>INV/SL0101</td>
													<td>Walk-in Customer</td>
													<td>$ 1500.00</td>
													<td>
														<Link className="me-3" to="javascript:void(0);">
															<img src="assets/img/icons/eye.svg" alt="img" />
														</Link>
														<Link className="me-3" to="javascript:void(0);">
															<img src="assets/img/icons/edit.svg" alt="img" />
														</Link>
														<Link className="me-3 confirm-text" to="javascript:void(0);">
															<img src="assets/img/icons/delete.svg" alt="img" />
														</Link>
													</td>
												</tr>
												<tr>
													<td>2022-03-07	</td>
													<td>INV/SL0101</td>
													<td>Walk-in Customer</td>
													<td>$ 1500.00</td>
													<td>
														<Link className="me-3" to="javascript:void(0);">
															<img src="assets/img/icons/eye.svg" alt="img" />
														</Link>
														<Link className="me-3" to="javascript:void(0);">
															<img src="assets/img/icons/edit.svg" alt="img" />
														</Link>
														<Link className="me-3 confirm-text" to="javascript:void(0);">
															<img src="assets/img/icons/delete.svg" alt="img" />
														</Link>
													</td>
												</tr>
												<tr>
													<td>2022-03-07	</td>
													<td>INV/SL0101</td>
													<td>Walk-in Customer</td>
													<td>$ 1500.00</td>
													<td>
														<Link className="me-3" to="javascript:void(0);">
															<img src="assets/img/icons/eye.svg" alt="img" />
														</Link>
														<Link className="me-3" to="javascript:void(0);">
															<img src="assets/img/icons/edit.svg" alt="img" />
														</Link>
														<Link className="me-3 confirm-text" to="javascript:void(0);">
															<img src="assets/img/icons/delete.svg" alt="img" />
														</Link>
													</td>
												</tr>
												<tr>
													<td>2022-03-07	</td>
													<td>INV/SL0101</td>
													<td>Walk-in Customer</td>
													<td>$ 1500.00</td>
													<td>
														<Link className="me-3" to="javascript:void(0);">
															<img src="assets/img/icons/eye.svg" alt="img" />
														</Link>
														<Link className="me-3" to="javascript:void(0);">
															<img src="assets/img/icons/edit.svg" alt="img" />
														</Link>
														<Link className="me-3 confirm-text" to="javascript:void(0);">
															<img src="assets/img/icons/delete.svg" alt="img" />
														</Link>
													</td>
												</tr>
												<tr>
													<td>2022-03-07	</td>
													<td>INV/SL0101</td>
													<td>Walk-in Customer</td>
													<td>$ 1500.00</td>
													<td>
														<Link className="me-3" to="javascript:void(0);">
															<img src="assets/img/icons/eye.svg" alt="img" />
														</Link>
														<Link className="me-3" to="javascript:void(0);">
															<img src="assets/img/icons/edit.svg" alt="img" />
														</Link>
														<Link className="me-3 confirm-text" to="javascript:void(0);">
															<img src="assets/img/icons/delete.svg" alt="img" />
														</Link>
													</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
								<div className="tab-pane fade" id="payment" role="tabpanel" >
									<div className="table-top">
										<div className="search-set">
											<div className="search-input">
												<Link className="btn btn-searchset"><img src="assets/img/icons/search-white.svg" alt="img" /></Link>
											</div>
										</div>
										<div className="wordset">
											<ul>
												<li>
													<Link data-bs-toggle="tooltip" data-bs-placement="top" title="pdf"><img src="assets/img/icons/pdf.svg" alt="img" /></Link>
												</li>
												<li>
													<Link data-bs-toggle="tooltip" data-bs-placement="top" title="excel"><img src="assets/img/icons/excel.svg" alt="img" /></Link>
												</li>
												<li>
													<Link data-bs-toggle="tooltip" data-bs-placement="top" title="print"><img src="assets/img/icons/printer.svg" alt="img" /></Link>
												</li>
											</ul>
										</div>
									</div>
									<div className="table-responsive">
										<table className="table datanew">
											<thead>
												<tr>
													<th>Date</th>
													<th>Reference</th>
													<th>Customer</th>
													<th>Amount	</th>
													<th className="text-end">Action</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>2022-03-07	</td>
													<td>0101</td>
													<td>Walk-in Customer</td>
													<td>$ 1500.00</td>
													<td>
														<Link className="me-3" to="javascript:void(0);">
															<img src="assets/img/icons/eye.svg" alt="img" />
														</Link>
														<Link className="me-3" to="javascript:void(0);">
															<img src="assets/img/icons/edit.svg" alt="img" />
														</Link>
														<Link className="me-3 confirm-text" to="javascript:void(0);">
															<img src="assets/img/icons/delete.svg" alt="img" />
														</Link>
													</td>
												</tr>
												<tr>
													<td>2022-03-07	</td>
													<td>0102</td>
													<td>Walk-in Customer</td>
													<td>$ 1500.00</td>
													<td>
														<Link className="me-3" to="javascript:void(0);">
															<img src="assets/img/icons/eye.svg" alt="img" />
														</Link>
														<Link className="me-3" to="javascript:void(0);">
															<img src="assets/img/icons/edit.svg" alt="img" />
														</Link>
														<Link className="me-3 confirm-text" to="javascript:void(0);">
															<img src="assets/img/icons/delete.svg" alt="img" />
														</Link>
													</td>
												</tr>
												<tr>
													<td>2022-03-07	</td>
													<td>0103</td>
													<td>Walk-in Customer</td>
													<td>$ 1500.00</td>
													<td>
														<Link className="me-3" to="javascript:void(0);">
															<img src="assets/img/icons/eye.svg" alt="img" />
														</Link>
														<Link className="me-3" to="javascript:void(0);">
															<img src="assets/img/icons/edit.svg" alt="img" />
														</Link>
														<Link className="me-3 confirm-text" to="javascript:void(0);">
															<img src="assets/img/icons/delete.svg" alt="img" />
														</Link>
													</td>
												</tr>
												<tr>
													<td>2022-03-07	</td>
													<td>0104</td>
													<td>Walk-in Customer</td>
													<td>$ 1500.00</td>
													<td>
														<Link className="me-3" to="javascript:void(0);">
															<img src="assets/img/icons/eye.svg" alt="img" />
														</Link>
														<Link className="me-3" to="javascript:void(0);">
															<img src="assets/img/icons/edit.svg" alt="img" />
														</Link>
														<Link className="me-3 confirm-text" to="javascript:void(0);">
															<img src="assets/img/icons/delete.svg" alt="img" /> 
														</Link>
													</td>
												</tr>
												<tr>
													<td>2022-03-07	</td>
													<td>0105</td>
													<td>Walk-in Customer</td>
													<td>$ 1500.00</td>
													<td>
														<Link className="me-3" to="javascript:void(0);">
															<img src="assets/img/icons/eye.svg" alt="img" />
														</Link>
														<Link className="me-3" to="javascript:void(0);">
															<img src="assets/img/icons/edit.svg" alt="img" />
														</Link>
														<Link className="me-3 confirm-text" to="javascript:void(0);">
															<img src="assets/img/icons/delete.svg" alt="img" />
														</Link>
													</td>
												</tr>
												<tr>
													<td>2022-03-07	</td>
													<td>0106</td>
													<td>Walk-in Customer</td>
													<td>$ 1500.00</td>
													<td>
														<Link className="me-3" to="javascript:void(0);">
															<img src="assets/img/icons/eye.svg" alt="img" />
														</Link>
														<Link className="me-3" to="javascript:void(0);">
															<img src="assets/img/icons/edit.svg" alt="img" />
														</Link>
														<Link className="me-3 confirm-text" to="javascript:void(0);">
															<img src="assets/img/icons/delete.svg" alt="img" />
														</Link>
													</td>
												</tr>
												<tr>
													<td>2022-03-07	</td>
													<td>0107</td>
													<td>Walk-in Customer</td>
													<td>$ 1500.00</td>
													<td>
														<Link className="me-3" to="javascript:void(0);">
															<img src="assets/img/icons/eye.svg" alt="img" />
														</Link>
														<Link className="me-3" to="javascript:void(0);">
															<img src="assets/img/icons/edit.svg" alt="img" />
														</Link>
														<Link className="me-3 confirm-text" to="javascript:void(0);">
															<img src="assets/img/icons/delete.svg" alt="img" />
														</Link>
													</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
								<div className="tab-pane fade" id="return" role="tabpanel" >
									<div className="table-top">
										<div className="search-set">
											<div className="search-input">
												<Link className="btn btn-searchset"><img src="assets/img/icons/search-white.svg" alt="img" /></Link>
											</div>
										</div>
										<div className="wordset">
											<ul>
												<li>
													<Link data-bs-toggle="tooltip" data-bs-placement="top" title="pdf"><img src="assets/img/icons/pdf.svg" alt="img" /></Link>
												</li>
												<li>
													<Link data-bs-toggle="tooltip" data-bs-placement="top" title="excel"><img src="assets/img/icons/excel.svg" alt="img" /></Link>
												</li>
												<li>
													<Link data-bs-toggle="tooltip" data-bs-placement="top" title="print"><img src="assets/img/icons/printer.svg" alt="img" /></Link>
												</li>
											</ul>
										</div>
									</div>
									<div className="table-responsive">
										<table className="table datanew">
											<thead>
												<tr>
													<th>Date</th>
													<th>Reference</th>
													<th>Customer</th>
													<th>Amount	</th>
													<th className="text-end">Action</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>2022-03-07	</td>
													<td>0101</td>
													<td>Walk-in Customer</td>
													<td>$ 1500.00</td>
													<td>
														<Link className="me-3" to="javascript:void(0);">
															<img src="assets/img/icons/eye.svg" alt="img" />
														</Link>
														<Link className="me-3" to="javascript:void(0);">
															<img src="assets/img/icons/edit.svg" alt="img" />
														</Link>
														<Link className="me-3 confirm-text" to="javascript:void(0);">
															<img src="assets/img/icons/delete.svg" alt="img" />
														</Link>
													</td>
												</tr>
												<tr>
													<td>2022-03-07	</td>
													<td>0102</td>
													<td>Walk-in Customer</td>
													<td>$ 1500.00</td>
													<td>
														<Link className="me-3" to="javascript:void(0);">
															<img src="assets/img/icons/eye.svg" alt="img" />
														</Link>
														<Link className="me-3" to="javascript:void(0);">
															<img src="assets/img/icons/edit.svg" alt="img" />
														</Link>
														<Link className="me-3 confirm-text" to="javascript:void(0);">
															<img src="assets/img/icons/delete.svg" alt="img" />
														</Link>
													</td>
												</tr>
												<tr>
													<td>2022-03-07	</td>
													<td>0103</td>
													<td>Walk-in Customer</td>
													<td>$ 1500.00</td>
													<td>
														<Link className="me-3" to="javascript:void(0);">
															<img src="assets/img/icons/eye.svg" alt="img" />
														</Link>
														<Link className="me-3" to="javascript:void(0);">
															<img src="assets/img/icons/edit.svg" alt="img" />
														</Link>
														<Link className="me-3 confirm-text" to="javascript:void(0);">
															<img src="assets/img/icons/delete.svg" alt="img" />
														</Link>
													</td>
												</tr>
												<tr>
													<td>2022-03-07	</td>
													<td>0104</td>
													<td>Walk-in Customer</td>
													<td>$ 1500.00</td>
													<td>
														<Link className="me-3" to="javascript:void(0);">
															<img src="assets/img/icons/eye.svg" alt="img" />
														</Link>
														<Link className="me-3" to="javascript:void(0);">
															<img src="assets/img/icons/edit.svg" alt="img" />
														</Link>
														<Link className="me-3 confirm-text" to="javascript:void(0);">
															<img src="assets/img/icons/delete.svg" alt="img" />
														</Link>
													</td>
												</tr>
												<tr>
													<td>2022-03-07	</td>
													<td>0105</td>
													<td>Walk-in Customer</td>
													<td>$ 1500.00</td>
													<td>
														<Link className="me-3" to="javascript:void(0);">
															<img src="assets/img/icons/eye.svg" alt="img" />
														</Link>
														<Link className="me-3" to="javascript:void(0);">
															<img src="assets/img/icons/edit.svg" alt="img" />
														</Link>
														<Link className="me-3 confirm-text" to="javascript:void(0);">
															<img src="assets/img/icons/delete.svg" alt="img" />
														</Link>
													</td>
												</tr>
												<tr>
													<td>2022-03-07	</td>
													<td>0106</td>
													<td>Walk-in Customer</td>
													<td>$ 1500.00</td>
													<td>
														<Link className="me-3" to="javascript:void(0);">
															<img src="assets/img/icons/eye.svg" alt="img" />
														</Link>
														<Link className="me-3" to="javascript:void(0);">
															<img src="assets/img/icons/edit.svg" alt="img" />
														</Link>
														<Link className="me-3 confirm-text" to="javascript:void(0);">
															<img src="assets/img/icons/delete.svg" alt="img" />
														</Link>
													</td>
												</tr>
												<tr>
													<td>2022-03-07	</td>
													<td>0107</td>
													<td>Walk-in Customer</td>
													<td>$ 1500.00</td>
													<td>
														<Link className="me-3" to="javascript:void(0);">
															<img src="assets/img/icons/eye.svg" alt="img" />
														</Link>
														<Link className="me-3" to="javascript:void(0);">
															<img src="assets/img/icons/edit.svg" alt="img" />
														</Link>
														<Link className="me-3 confirm-text" to="javascript:void(0);">
															<img src="assets/img/icons/delete.svg" alt="img" />
														</Link>
													</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
							</div>	
						</div>
					</div>
				</div>
			</div>
		</div>

    </>
  )
}

export default Pos