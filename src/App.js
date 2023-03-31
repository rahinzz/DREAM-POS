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

function App() {
  return (
    <>
      {/* <ForgetPassword /> */}
      {/* <Signin /> */}
      {/* <Profile /> */}
      {/* <GeneralSettings /> */}
      {/* <Activities /> */}
      {/* <ProductList /> */}
      {/* <AddProduct />  */}
      {/* <CategoryList /> */}
      {/* <AddCategory /> */}
      {/* <SubCategoryList /> */}
      {/* <SubAddCategory /> */}
      {/* <BrandList /> */}
      {/* <AddBrand /> */}
      {/* <ImportProduct /> */}
      {/* <Barcode /> */}
      {/* <SalesList /> */}
      {/* <Pos /> */}
      {/* <SalesReturnLists /> */}
      {/* <CreateSalesReturns /> */}
      {/* <PurchaseList /> */}
      {/* <AddPurchase /> */}
      {/* <ImportPurchase /> */}
      {/* <ExpenseList /> */}
      {/* <CreateExpense /> */}
      {/* <ExpenseCategory /> */}
      {/* <QuotationList /> */}
      {/* <AddQuotation /> */}
      {/* <TransferList /> */}
      {/* <AddTransfer /> */}
      {/* <ImportTransfer /> */}
      {/* <SalesReturnList /> */}
      {/* <CreateSalesReturn /> */}
      {/* <PurchaseReturnList /> */}
      {/* <CreatePurchaseReturn /> */}
      {/* <CustomerList /> */}
      {/* <AddCustomer /> */}
      {/* <SupplierList /> */}
      {/* <AddSupplier /> */}
      {/* <UserList /> */}
      {/* <AddUser /> */}
      {/* <StoreList /> */}
      {/* <AddStore /> */}
      {/* <NewCountry /> */}
      {/* <CountriesList /> */}
      {/* <NewState /> */}
      {/* <StateList /> */}
      {/* <Components /> */}
      {/* <BlankPage /> */}
      {/* <Error404 /> */}
      {/* <Error500 /> */}
      {/* <SweetAlerts /> */}
      {/* <ToolTip /> */}
      {/* <PopOver /> */}
      {/* <Ribbon /> */}
      {/* <ClipBoard /> */}
      {/* <DragDrop /> */}
      {/* <RangeSlider /> */}
      {/* <Rating /> */}
      {/* <Toastr /> */}
      {/* <TextEditor /> */}
      {/* <Counter /> */}
      {/* <ScrollBar /> */}
      {/* <Spinner /> */}
      {/* <Notification /> */}
      {/* <LightBox /> */}
      {/* <StickyNote /> */}
      {/* <TimeLine /> */}
      {/* <FormWizard /> */}
      {/* <ChartApex /> */}
      {/* <ChartJS /> */}
      {/* <ChartMorris /> */}
      {/* <ChartFlot /> */}
      {/* <ChartPeity /> */}
      {/* <IconFontawesome /> */}
      {/* <IconFeather /> */}
      {/* <IconIonic /> */}
      {/* <IconMaterial /> */}
      {/* <Iconpe7 /> */}
      {/* <IconSimpleline /> */}
      {/* <IconThemify /> */}
      {/* <IconWeather /> */}
      {/* <IconTypicon /> */}
      {/* <IconFlag /> */}
      {/* <FormBasicInputs /> */}
      {/* <FormInputGroups /> */}
      {/* <FormHorizontal /> */}
      {/* <FormVertical /> */}
      {/* <FormMask /> */}
      {/* <FormValidation /> */}
      {/* <FormSelect2 /> */}
      {/* <FormFileUpload /> */}

    </>
  );
}

export default App;


{/* <BrowserRouter>
  <Routes>
    <Route exact path="/" element={<Home />} />
    <Route exact path="/home" element={<Home />} />
    <Route exact path="/signin" element={<Signin />} />
  </Routes>
</BrowserRouter> */}
