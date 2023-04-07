import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      {/* <div id="global-loader" >
			  <div className="whirly-loader"> </div>
		  </div> */}

      {/* Main Wrapper */}
      <div className="main-wrapper">

        {/* Sidebar */}
        <div className="sidebar" id="sidebar">
          <div className="sidebar-inner slimscroll">
            <div id="sidebar-menu" className="sidebar-menu">
              <ul>
                <li>
                  <Link to="/home">
                    <img src="assets/img/icons/dashboard.svg" alt="img" />
                    <span> Dashboard</span>{" "}
                  </Link>
                </li>
                <li className="submenu">
                  <Link to="javascript:void(0);">
                    <img src="assets/img/icons/product.svg" alt="img" />
                    <span> Product</span> <span className="menu-arrow"></span>
                  </Link>
                  <ul>
                    <li>
                      <Link to="/productlist">Product List</Link>
                    </li>
                    <li>
                      <Link to="/addproduct">Add Product</Link>
                    </li>
                    <li>
                      <Link to="/categorylist">Category List</Link>
                    </li>
                    <li>
                      <Link to="/addcategory">Add Category</Link>
                    </li>
                    <li>
                      <Link to="/subcategorylist">Sub Category List</Link>
                    </li>
                    <li>
                      <Link to="/subaddcategory">Add Sub Category</Link>
                    </li>
                    <li>
                      <Link to="/brandlist">Brand List</Link>
                    </li>
                    <li>
                      <Link to="/addbrand">Add Brand</Link>
                    </li>
                    <li>
                      <Link to="/importproduct">Import Products</Link>
                    </li>
                    <li>
                      <Link to="/barcode">Print Barcode</Link>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <Link to="javascript:void(0);">
                    <img src="assets/img/icons/sales1.svg" alt="img" />
                    <span> Sales</span> <span className="menu-arrow"></span>
                  </Link>
                  <ul>
                    <li>
                      <Link to="/saleslist">Sales List</Link>
                    </li>
                    <li>
                      <Link to="/pos">POS</Link>
                    </li>
                    <li>
                      <Link to="/pos">New Sales</Link>
                    </li>
                    <li>
                      <Link to="/salesreturnlists">Sales Return List</Link>
                    </li>
                    <li>
                      <Link to="/createsalesreturns">New Sales Return</Link>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <Link to="javascript:void(0);">
                    <img src="assets/img/icons/purchase1.svg" alt="img" />
                    <span> Purchase</span> <span className="menu-arrow"></span>
                  </Link>
                  <ul>
                    <li>
                      <Link to="/purchaselist">Purchase List</Link>
                    </li>
                    <li>
                      <Link to="/addpurchase">Add Purchase</Link>
                    </li>
                    <li>
                      <Link to="/importpurchase">Import Purchase</Link>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <Link to="javascript:void(0);">
                    <img src="assets/img/icons/expense1.svg" alt="img" />
                    <span> Expense</span> <span className="menu-arrow"></span>
                  </Link>
                  <ul>
                    <li>
                      <Link to="/expenselist">Expense List</Link>
                    </li>
                    <li>
                      <Link to="/createexpense">Add Expense</Link>
                    </li>
                    <li>
                      <Link to="/expensecategory">Expense Category</Link>
                    </li>
                  </ul>
                </li>

                <li className="submenu">
                  <Link to="javascript:void(0);">
                    <img src="assets/img/icons/quotation1.svg" alt="img" />
                    <span> Quotation</span> <span className="menu-arrow"></span>
                  </Link>
                  <ul>
                    <li>
                      <Link to="/quotationlist">Quotation List</Link>
                    </li>
                    <li>
                      <Link to="/addquotation">Add Quotation</Link>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <Link to="javascript:void(0);">
                    <img src="assets/img/icons/transfer1.svg" alt="img" />
                    <span> Transfer</span> <span className="menu-arrow"></span>
                  </Link>
                  <ul>
                    <li>
                      <Link to="/transferlist">Transfer List</Link>
                    </li>
                    <li>
                      <Link to="/addtransfer">Add Transfer </Link>
                    </li>
                    <li>
                      <Link to="/importtransfer">Import Transfer </Link>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <Link to="javascript:void(0);">
                    <img src="assets/img/icons/return1.svg" alt="img" />
                    <span> Return</span> <span className="menu-arrow"></span>
                  </Link>
                  <ul>
                    <li>
                      <Link to="/salesreturnlist">Sales Return List</Link>
                    </li>
                    <li>
                      <Link to="/createsalesreturn">Add Sales Return </Link>
                    </li>
                    <li>
                      <Link to="/purchasereturnlist">Purchase Return List</Link>
                    </li>
                    <li>
                      <Link to="/createpurchasereturn">
                        Add Purchase Return{" "}
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <Link to="javascript:void(0);">
                    <img src="assets/img/icons/users1.svg" alt="img" />
                    <span> People</span> <span className="menu-arrow"></span>
                  </Link>
                  <ul>
                    <li>
                      <Link to="/customerlist">Customer List</Link>
                    </li>
                    <li>
                      <Link to="/addcustomer">Add Customer </Link>
                    </li>
                    <li>
                      <Link to="/supplierlist">Supplier List</Link>
                    </li>
                    <li>
                      <Link to="/addsupplier">Add Supplier </Link>
                    </li>
                    <li>
                      <Link to="/userlist">User List</Link>
                    </li>
                    <li>
                      <Link to="/adduser">Add User</Link>
                    </li>
                    <li>
                      <Link to="/storelist">Store List</Link>
                    </li>
                    <li>
                      <Link to="/addstore">Add Store</Link>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <Link to="javascript:void(0);">
                    <img src="assets/img/icons/places.svg" alt="img" />
                    <span> Places</span> <span className="menu-arrow"></span>
                  </Link>
                  <ul>
                    <li>
                      <Link to="/newcountry">New Country</Link>
                    </li>
                    <li>
                      <Link to="/countrieslist">Countries list</Link>
                    </li>
                    <li>
                      <Link to="/newstate">New State </Link>
                    </li>
                    <li>
                      <Link to="/statelist">State list</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/components">
                    <i data-feather="layers"></i>
                    <span> Components</span>{" "}
                  </Link>
                </li>
                <li>
                  <Link to="/blankpage">
                    <i data-feather="file"></i>
                    <span> Blank Page</span>{" "}
                  </Link>
                </li>
                <li className="submenu">
                  <Link to="javascript:void(0);">
                    <i data-feather="alert-octagon"></i>{" "}
                    <span> Error Pages </span>{" "}
                    <span className="menu-arrow"></span>
                  </Link>
                  <ul>
                    <li>
                      <Link to="/error-404">404 Error </Link>
                    </li>
                    <li>
                      <Link to="/error-500">500 Error </Link>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <Link to="javascript:void(0);">
                    <i data-feather="box"></i> <span>Elements </span>{" "}
                    <span className="menu-arrow"></span>
                  </Link>
                  <ul>
                    <li>
                      <Link to="/sweetalerts">Sweet Alerts</Link>
                    </li>
                    <li>
                      <Link to="/tooltip">Tooltip</Link>
                    </li>
                    <li>
                      <Link to="/popover">Popover</Link>
                    </li>
                    <li>
                      <Link to="/ribbon">Ribbon</Link>
                    </li>
                    <li>
                      <Link to="/clipboard">Clipboard</Link>
                    </li>
                    <li>
                      <Link to="drag-drop">Drag & Drop</Link>
                    </li>
                    <li>
                      <Link to="rangeslider.html">Range Slider</Link>
                    </li>
                    <li>
                      <Link to="/rating">Rating</Link>
                    </li>
                    <li>
                      <Link to="/toastr">Toastr</Link>
                    </li>
                    <li>
                      <Link to="/text-editor">Text Editor</Link>
                    </li>
                    <li>
                      <Link to="/counter">Counter</Link>
                    </li>
                    <li>
                      <Link to="/scrollbar">Scrollbar</Link>
                    </li>
                    <li>
                      <Link to="/spinner">Spinner</Link>
                    </li>
                    <li>
                      <Link to="/notification">Notification</Link>
                    </li>
                    <li>
                      <Link to="/lightbox">Lightbox</Link>
                    </li>
                    <li>
                      <Link to="/stickynote">Sticky Note</Link>
                    </li>
                    <li>
                      <Link to="/timeline">Timeline</Link>
                    </li>
                    <li>
                      <Link to="/form-wizard">Form Wizard</Link>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <Link to="javascript:void(0);">
                    <i data-feather="bar-chart-2"></i> <span> Charts </span>{" "}
                    <span className="menu-arrow"></span>
                  </Link>
                  <ul>
                    <li>
                      <Link to="/chart-apex">Apex Charts</Link>
                    </li>
                    <li>
                      <Link to="/chart-js">Chart Js</Link>
                    </li>
                    <li>
                      <Link to="/chart-morris">Morris Charts</Link>
                    </li>
                    <li>
                      <Link to="/chart-flot">Flot Charts</Link>
                    </li>
                    <li>
                      <Link to="/chart-peity">Peity Charts</Link>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <Link to="javascript:void(0);">
                    <i data-feather="award"></i>
                    <span> Icons </span> <span className="menu-arrow"></span>
                  </Link>
                  <ul>
                    <li>
                      <Link to="/icon-fontawesome">Fontawesome Icons</Link>
                    </li>
                    <li>
                      <Link to="/icon-feather">Feather Icons</Link>
                    </li>
                    <li>
                      <Link to="/icon-ionic">Ionic Icons</Link>
                    </li>
                    <li>
                      <Link to="/icon-material">Material Icons</Link>
                    </li>
                    <li>
                      <Link to="/icon-pe7">Pe7 Icons</Link>
                    </li>
                    <li>
                      <Link to="/icon-simpleline">Simpleline Icons</Link>
                    </li>
                    <li>
                      <Link to="/icon-themify">Themify Icons</Link>
                    </li>
                    <li>
                      <Link to="/icon-weather">Weather Icons</Link>
                    </li>
                    <li>
                      <Link to="/icon-typicon">Typicon Icons</Link>
                    </li>
                    <li>
                      <Link to="/icon-flag">Flag Icons</Link>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <Link to="javascript:void(0);">
                    <i data-feather="columns"></i> <span> Forms </span>{" "}
                    <span className="menu-arrow"></span>
                  </Link>
                  <ul>
                    <li>
                      <Link to="/form-basicinputs">Basic Inputs </Link>
                    </li>
                    <li>
                      <Link to="/form-inputgroups">Input Groups </Link>
                    </li>
                    <li>
                      <Link to="/form-horizontal">Horizontal Form </Link>
                    </li>
                    <li>
                      <Link to="/form-vertical"> Vertical Form </Link>
                    </li>
                    <li>
                      <Link to="/form-mask">Form Mask </Link>
                    </li>
                    <li>
                      <Link to="/form-validation">Form Validation </Link>
                    </li>
                    <li>
                      <Link to="/form-select2">Form Select2 </Link>
                    </li>
                    <li>
                      <Link to="/form-fileupload">File Upload </Link>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <Link to="javascript:void(0);">
                    <i data-feather="layout"></i> <span> Table </span>{" "}
                    <span className="menu-arrow"></span>
                  </Link>
                  <ul>
                    <li>
                      <Link to="/tables-basic">Basic Tables </Link>
                    </li>
                    <li>
                      <Link to="/datatables">Data Table </Link>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <Link to="javascript:void(0);">
                    <img src="assets/img/icons/product.svg" alt="img" />
                    <span> Application</span>{" "}
                    <span className="menu-arrow"></span>
                  </Link>
                  <ul>
                    <li>
                      <Link to="/chat">Chat</Link>
                    </li>
                    <li>
                      <Link to="/calendar">Calendar</Link>
                    </li>
                    <li>
                      <Link to="/email">Email</Link>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <Link to="javascript:void(0);">
                    <img src="assets/img/icons/time.svg" alt="img" />
                    <span> Report</span> <span className="menu-arrow"></span>
                  </Link>
                  <ul>
                    <li>
                      <Link to="/purchaseorderreport">
                        Purchase order report
                      </Link>
                    </li>
                    <li>
                      <Link to="/inventoryreport">Inventory Report</Link>
                    </li>
                    <li>
                      <Link to="/salesreport">Sales Report</Link>
                    </li>
                    <li>
                      <Link to="/invoicereport">Invoice Report</Link>
                    </li>
                    <li>
                      <Link to="/purchasereport">Purchase Report</Link>
                    </li>
                    <li>
                      <Link to="/supplierreport">Supplier Report</Link>
                    </li>
                    <li>
                      <Link to="/customerreport">Customer Report</Link>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <Link to="javascript:void(0);">
                    <img src="assets/img/icons/users1.svg" alt="img" />
                    <span> Users</span> <span className="menu-arrow"></span>
                  </Link>
                  <ul>
                    <li>
                      <Link to="/newuser">New User </Link>
                    </li>
                    <li>
                      <Link to="/userlists">Users List</Link>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <Link to="javascript:void(0);">
                    <img src="assets/img/icons/settings.svg" alt="img" />
                    <span> Settings</span> <span className="menu-arrow"></span>
                  </Link>
                  <ul>
                    <li>
                      <Link to="/generalsettings" className="active">
                        General Settings
                      </Link>
                    </li>
                    <li>
                      <Link to="/emailsettings">Email Settings</Link>
                    </li>

                    <li>
                      <Link to="/paymentsettings">Payment Settings</Link>
                    </li>
                    <li>
                      <Link to="/currencysettings">Currency Settings</Link>
                    </li>
                    <li>
                      <Link to="/grouppermissions">Group Permissions</Link>
                    </li>
                    <li>
                      <Link to="/taxrates">Tax Rates</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      {/* Sidebar */}
      </div>
      {/* /Main-Wrapper */}
    </>
  );
};

export default Sidebar;
