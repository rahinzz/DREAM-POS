// import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Signin from "./components/Signin";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import ForgetPassword from "./components/ForgetPassword";
import Signup from "./components/Signup";
import Profile from "./components/Profile";
import GeneralSettings from "./components/GeneralSettings";
import Activities from "./components/Activities";
import ProductList from "./components/ProductList";
import AddProduct from "./components/AddProduct";
import CategoryList from "./components/CategoryList";
import AddCategory from "./components/AddCategory";
import SubCategoryList from "./components/SubCategoryList";
import SubAddCategory from "./components/SubAddCategory";
import BrandList from "./components/BrandList";
import AddBrand from "./components/AddBrand";
import ImportProduct from "./components/ImportProduct";
import Barcode from "./components/Barcode";
import SalesList from "./components/SalesList";
import Pos from "./components/Pos";
import SalesReturnLists from "./components/SalesReturnLists";
import CreateSalesReturns from "./components/CreateSalesReturns";
import PurchaseList from "./components/PurchaseList";
import AddPurchase from "./components/AddPurchase";
import ImportPurchase from "./components/ImportPurchase";
import ExpenseList from "./components/ExpenseList";
import CreateExpense from "./components/CreateExpense";
import ExpenseCategory from "./components/ExpenseCategory";
import QuotationList from "./components/QuotationList";
import AddQuotation from "./components/AddQuotation";
import TransferList from "./components/TransferList";
import AddTransfer from "./components/AddTransfer";
import ImportTransfer from "./components/ImportTransfer";
import SalesReturnList from "./components/SalesReturnList";
import CreateSalesReturn from "./components/CreateSalesReturn";
import PurchaseReturnList from "./components/PurchaseReturnList";
import CreatePurchaseReturn from "./components/CreatePurchaseReturn";
import CustomerList from "./components/CustomerList";
import AddCustomer from "./components/AddCustomer";
import SupplierList from "./components/SupplierList";
import AddSupplier from "./components/AddSupplier";
import UserList from "./components/UserList";
import AddUser from "./components/AddUser";
import StoreList from "./components/StoreList";
import AddStore from "./components/AddStore";
import NewCountry from "./components/NewCountry";
import CountriesList from "./components/CountriesList";
import NewState from "./components/NewState";
import StateList from "./components/StateList";
import Components from "./components/Components";
import BlankPage from "./components/BlankPage";
import Error404 from "./components/Error404";
import Error500 from "./components/Error500";
import SweetAlerts from "./components/SweetAlerts";
import ToolTip from "./components/ToolTip";
import PopOver from "./components/PopOver";
import Ribbon from "./components/Ribbon";
import ClipBoard from "./components/ClipBoard";
import DragDrop from "./components/DragDrop";
import RangeSlider from "./components/RangeSlider";
import Rating from "./components/Rating";
import Toastr from "./components/Toastr";
import TextEditor from "./components/TextEditor";
import Counter from "./components/Counter";
import ScrollBar from "./components/ScrollBar";
import Spinner from "./components/Spinner";
import Notification from "./components/Notification";
import LightBox from "./components/LightBox";
import StickyNote from "./components/StickyNote";
import TimeLine from "./components/TimeLine";
import FormWizard from "./components/FormWizard";
import ChartApex from "./components/ChartApex";
import ChartJS from "./components/ChartJS";
import ChartMorris from "./components/ChartMorris";
import ChartFlot from "./components/ChartFlot";
import ChartPeity from "./components/ChartPeity";
import IconFontawesome from "./components/IconFontawesome";
import IconFeather from "./components/IconFeather";
import IconIonic from "./components/IconIonic";
import IconMaterial from "./components/IconMaterial";
import Iconpe7 from "./components/Iconpe7";
import IconSimpleline from "./components/IconSimpleline";
import IconThemify from "./components/IconThemify";
import IconWeather from "./components/IconWeather";
import IconTypicon from "./components/IconTypicon";
import IconFlag from "./components/IconFlag";
import FormBasicInputs from "./components/FormBasicInputs";
import FormInputGroups from "./components/FormInputGroups";
import FormHorizontal from "./components/FormHorizontal";
import FormVertical from "./components/FormVertical";
import FormMask from "./components/FormMask";
import FormValidation from "./components/FormValidation";
import FormSelect2 from "./components/FormSelect2";
import FormFileUpload from "./components/FormFileUpload";
import TablesBasic from "./components/TablesBasic";
import DataTables from "./components/DataTables";
import Chat from "./components/Chat";
import Calendar from "./components/Calendar";
import Email from "./components/Email";
import PurchaseOrderReport from "./components/PurchaseOrderReport";
import InventoryReport from "./components/InventoryReport";
import SalesReport from "./components/SalesReport";
import InvoiceReport from "./components/InvoiceReport";
import PurchaseReport from "./components/PurchaseReport";
import SupplierReport from "./components/SupplierReport";
import CustomerReport from "./components/CustomerReport";
import NewUser from "./components/NewUser";
import UserLists from "./components/UserLists";
import EmailSettings from "./components/EmailSettings";
import PaymentSettings from "./components/PaymentSettings";
import CurrencySettings from "./components/CurrencySettings";
import GroupPermissions from "./components/GroupPermissions";
import TaxRates from "./components/TaxRates";

import ProductDetails from "./components/ProductDetails";
import EditProduct from "./components/EditProduct";
import EditCategory from "./components/EditCategory";
import EditSubCategory from "./components/EditSubCategory";
import EditBrand from "./components/EditBrand";
import AddSales from "./components/AddSales";
import SalesDetails from "./components/SalesDetails";
import EditSales from "./components/EditSales";
import EditPurchase from "./components/EditPurchase";
import EditSalesReturns from "./components/EditSalesReturns";
import EditExpense from "./components/EditExpense";
import EditQuotation from "./components/EditQuotation";
import EditTransfer from "./components/EditTransfer";
import EditSalesReturn from "./components/EditSalesReturn";
import EditPurchaseReturn from "./components/EditPurchaseReturn";
import EditCustomer from "./components/EditCustomer";
import EditSupplier from "./components/EditSupplier";
import EditUser from "./components/EditUser";
import EditStore from "./components/EditStore";
import EditCountry from "./components/EditCountry";
import EditState from "./components/EditState";
import NewUserEdit from "./components/NewUserEdit";
import CreatePermission from "./components/CreatePermission";
import EditPermission from "./components/EditPermission";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/signin" element={<Signin />} />
          <Route exact path="/forgetpassword" element={<ForgetPassword />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/generalsettings" element={<GeneralSettings />} />
          <Route exact path="/activities" element={<Activities />} />
          <Route exact path="/productlist" element={<ProductList />} />
          <Route exact path="/addproduct" element={<AddProduct />} />
          <Route exact path="/categorylist" element={<CategoryList />} />
          <Route exact path="/addcategory" element={<AddCategory />} />
          <Route exact path="/subcategorylist" element={<SubCategoryList />} />
          <Route exact path="/subaddcategory" element={<SubAddCategory />} />
          <Route exact path="/brandlist" element={<BrandList />} />
          <Route exact path="/addbrand" element={<AddBrand />} />
          <Route exact path="/importproduct" element={<ImportProduct />} />
          <Route exact path="/barcode" element={<Barcode />} />
          <Route exact path="/saleslist" element={<SalesList />} />
          <Route exact path="/pos" element={<Pos />} />
          <Route exact path="/salesreturnlists" element={<SalesReturnLists />} />
          <Route exact path="/createsalesreturns" element={<CreateSalesReturns />} />
          <Route exact path="/purchaselist" element={<PurchaseList />} />
          <Route exact path="/addpurchase" element={<AddPurchase />} />
          <Route exact path="/importpurchase" element={<ImportPurchase />} />
          <Route exact path="/expenselist" element={<ExpenseList />} />
          <Route exact path="/createexpense" element={<CreateExpense />} />
          <Route exact path="/expensecategory" element={<ExpenseCategory />} />
          <Route exact path="/quotationlist" element={<QuotationList />} />
          <Route exact path="/addquotation" element={<AddQuotation />} />
          <Route exact path="/transferlist" element={<TransferList />} />
          <Route exact path="/addtransfer" element={<AddTransfer />} />
          <Route exact path="/importtransfer" element={<ImportTransfer />} />
          <Route exact path="/salesreturnlist" element={<SalesReturnList />} />
          <Route exact path="/createsalesreturn" element={<CreateSalesReturn />} />
          <Route exact path="/purchasereturnlist" element={<PurchaseReturnList />} />
          <Route exact path="/createpurchasereturn" element={<CreatePurchaseReturn />} />
          <Route exact path="/customerlist" element={<CustomerList />} />
          <Route exact path="/addcustomer" element={<AddCustomer />} />
          <Route exact path="/supplierlist" element={<SupplierList />} />
          <Route exact path="/addsupplier" element={<AddSupplier />} />
          <Route exact path="/userlist" element={<UserList />} />
          <Route exact path="/adduser" element={<AddUser />} />
          <Route exact path="/storelist" element={<StoreList />} />
          <Route exact path="/addstore" element={<AddStore />} />
          <Route exact path="/newcountry" element={<NewCountry />} />
          <Route exact path="/countrieslist" element={<CountriesList />} />
          <Route exact path="/newstate" element={<NewState />} />
          <Route exact path="/statelist" element={<StateList />} />
          <Route exact path="/components" element={<Components />} />
          <Route exact path="/blankpage" element={<BlankPage />} />
          <Route exact path="/error-404" element={<Error404 />} />
          <Route exact path="/error-500" element={<Error500 />} />
          <Route exact path="/sweetalerts" element={<SweetAlerts />} />
          <Route exact path="/tooltip" element={<ToolTip />} />
          <Route exact path="/popover" element={<PopOver />} />
          <Route exact path="/ribbon" element={<Ribbon />} />
          <Route exact path="/clipboard" element={<ClipBoard />} />
          <Route exact path="/drag-drop" element={<DragDrop />} />
          <Route exact path="/rangeslider" element={<RangeSlider />} />
          <Route exact path="/rating" element={<Rating />} />
          <Route exact path="/toastr" element={<Toastr />} />
          <Route exact path="/text-editor" element={<TextEditor />} />
          <Route exact path="/counter" element={<Counter />} />
          <Route exact path="/scrollbar" element={<ScrollBar />} />
          <Route exact path="/spinner" element={<Spinner />} />
          <Route exact path="/notification" element={<Notification />} />
          <Route exact path="/lightbox" element={<LightBox />} />
          <Route exact path="/stickynote" element={<StickyNote />} />
          <Route exact path="/timeline" element={<TimeLine />} />
          <Route exact path="/formwizard" element={<FormWizard />} />
          <Route exact path="/chart-apex" element={<ChartApex />} />
          <Route exact path="/chart-js" element={<ChartJS />} />
          <Route exact path="/chart-morris" element={<ChartMorris />} />
          <Route exact path="/chart-flot" element={<ChartFlot />} />
          <Route exact path="/chart-peity" element={<ChartPeity />} />
          <Route exact path="/icon-font-awesome" element={<IconFontawesome />} />
          <Route exact path="/icon-feather" element={<IconFeather />} />
          <Route exact path="/icon-ionic" element={<IconIonic />} />
          <Route exact path="/icon-material" element={<IconMaterial />} />
          <Route exact path="/icon-pe7" element={<Iconpe7 />} />
          <Route exact path="/icon-simpleline" element={<IconSimpleline />} />
          <Route exact path="/icon-themify" element={<IconThemify />} />
          <Route exact path="/icon-weather" element={<IconWeather />} />
          <Route exact path="/icon-typicon" element={<IconTypicon />} />
          <Route exact path="/icon-flag" element={<IconFlag />} />
          <Route exact path="/form-basicinputs" element={<FormBasicInputs />} />
          <Route exact path="/form-inputgroups" element={<FormInputGroups />} />
          <Route exact path="/form-horizontal" element={<FormHorizontal />} />
          <Route exact path="/form-vertical" element={<FormVertical />} />
          <Route exact path="/form-mask" element={<FormMask />} />
          <Route exact path="/form-validation" element={<FormValidation />} />
          <Route exact path="/form-select2" element={<FormSelect2 />} />
          <Route exact path="/form-fileupload" element={<FormFileUpload />} />
          <Route exact path="/tables-basic" element={<TablesBasic />} />
          <Route exact path="/datatables" element={<DataTables />} />
          <Route exact path="/chat" element={<Chat />} />
          <Route exact path="/calendar" element={<Calendar />} />
          <Route exact path="/email" element={<Email />} />
          <Route exact path="/purchaseorderreport" element={<PurchaseOrderReport />} />
          <Route exact path="/inventoryreport" element={<InventoryReport />} />
          <Route exact path="/salesreport" element={<SalesReport />} />
          <Route exact path="/invoicereport" element={<InvoiceReport />} />
          <Route exact path="/purchasereport" element={<PurchaseReport />} />
          <Route exact path="/supplierreport" element={<SupplierReport />} />
          <Route exact path="/customerreport" element={<CustomerReport />} />
          <Route exact path="/newuser" element={<NewUser />} />
          <Route exact path="/userlists" element={<UserLists />} />
          <Route exact path="/generalsettings" element={<GeneralSettings />} />
          <Route exact path="/emailsettings" element={<EmailSettings />} />
          <Route exact path="/paymentsettings" element={<PaymentSettings />} />
          <Route exact path="/currencysettings" element={<CurrencySettings />} />
          <Route exact path="/grouppermissions" element={<GroupPermissions />} />
          <Route exact path="/taxrates" element={<TaxRates />} />


          <Route exact path="/product-details" element={<ProductDetails />} />
          <Route exact path="/editproduct" element={<EditProduct />} />
          <Route exact path="/editcategory" element={<EditCategory />} />
          <Route exact path="/editsubcategory" element={<EditSubCategory />} />
          <Route exact path="/editbrand" element={<EditBrand />} />
          <Route exact path="/add-sales" element={<AddSales />} />
          <Route exact path="/sales-details" element={<SalesDetails />} />
          <Route exact path="/edit-sales" element={<EditSales />} />
          <Route exact path="/editpurchase" element={<EditPurchase />} />
          <Route exact path="/editsalesreturns" element={<EditSalesReturns />} />
          <Route exact path="/editexpense" element={<EditExpense />} />
          <Route exact path="/editquotation" element={<EditQuotation />} />
          <Route exact path="/edittransfer" element={<EditTransfer />} />
          <Route exact path="/editsalesreturn" element={<EditSalesReturn />} />
          <Route exact path="/editpurchasereturn" element={<EditPurchaseReturn />} />
          <Route exact path="/editcustomer" element={<EditCustomer />} />
          <Route exact path="/editsupplier" element={<EditSupplier />} />
          <Route exact path="/edituser" element={<EditUser />} />
          <Route exact path="/editstore" element={<EditStore />} />
          <Route exact path="/editcountry" element={<EditCountry />} />
          <Route exact path="/editstate" element={<EditState />} />
          <Route exact path="/newuseredit" element={<NewUserEdit />} />
          <Route exact path="/createpermission" element={<CreatePermission />} />
          <Route exact path="/editpermission" element={<EditPermission />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
