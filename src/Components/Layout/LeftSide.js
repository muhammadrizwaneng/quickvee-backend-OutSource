import React, { useEffect, lazy, Suspense } from "react";
import MainMixAndMatch from "../MixAndMatch/MainMixAndMatch";
import AddMixAndMatchDeal from "../MixAndMatch/AddMixAndMatchDeal";
import UpdateMixAndMatchDeal from "../MixAndMatch/UpdateMixAndMatchDeal";
import MainSalesReport from "../Reporting/SalesReport/MainSalesReport";
import NewSalesReportMain from "../SalesReport/NewSalesReportMain";
const DropCashMain = lazy(() => import("../Reporting/DropCash/DropCashMain"));
const PayInMain = lazy(() => import("../Reporting/PayIn/PayInMain"));
const MainEmployeeSalesPerCategory = lazy(
  () =>
    import("../Reporting/EmployeeSalesPerCategory/MainEmployeeSalesPerCategory")
);
const MainGiftCard = lazy(() => import("../Reporting/GiftCard/MainGiftCard"));
const InventoryMerge = lazy(() => import("../Products/InventoryMerge"));

const DashboardMain = lazy(() => import("../Dashboard/NewDashboardMain"));
const MainOrder = lazy(() => import("./../Orders/MainOrder"));
const MainPurchase = lazy(() => import("../PurchaseOrders/MainPurchase"));
const MainAttributes = lazy(() => import("../Attributes/MainAttributes"));
const MainCategory = lazy(() => import("../Category/MainCategory"));
const MainCoupon = lazy(() => import("../Coupons/MainCoupon"));
const ProductEdit = lazy(() => import("../Products/ProductEdit"));
const MainVendors = lazy(() => import("../Vendors/MainVendors"));
const MainTimesheet = lazy(() => import("../Timesheet/MainTimesheet"));
const MainImportData = lazy(() => import("../ImportData/MainImportData"));
const MainProducts = lazy(() => import("../Products/MainProducts"));
const MainStoreOption = lazy(
  () => import("../StoreSetting/StoreOption/MainStoreOption")
);
const EditCategory = lazy(() => import("../Category/EditCategory"));
const TopTenders = lazy(() => import("../Dashboard/TopTenders"));
const Info = lazy(() => import("../StoreSetting/Info"));
const Setup = lazy(() => import("../StoreSetting/MainSetup/Setup"));
const MainStoreAlters = lazy(
  () => import("../StoreSetting/StoreAlters/MainStoreAlters")
);
const MainTaxes = lazy(() => import("../StoreSetting/Taxes/MainTaxes"));
const MainInventory = lazy(
  () => import("../StoreSetting/Inventory/MainInventory")
);
const MainResigtersetting = lazy(
  () => import("../StoreSetting/ResigterSetting/MainResigtersetting")
);
const MainSyastemAccess = lazy(
  () => import("../StoreSetting/SystemAccess/MainSystemAccess")
);
const DailyTtlReport = lazy(
  () => import("../Reporting/DailyReport/DailyTtlReport")
);
const MainCatedetails = lazy(
  () => import("../Reporting/CategoryDetails/MainCatedetails")
);
const MainSalesPerson = lazy(
  () => import("../Reporting/SalesByPerson/MainSalesPerson")
);
const CheckIDVerifyMain = lazy(
  () => import("../Reporting/CheckIDVerify/CheckIDVerifyMain")
);
const InstantActvity = lazy(
  () => import("../Reporting/InstantPo/InstantActvity")
);
const TopSallerReport = lazy(
  () => import("../Reporting/TopSaller/TopSallerReport")
);
const EmployeeWorking = lazy(
  () => import("../Reporting/EmployeeWorkingHours/EmployeeWorking")
);
const MainSiftSummary = lazy(
  () => import("../Reporting/SiftSummary/MainSiftSummary")
);
const PaymentMethodReport = lazy(
  () => import("../Reporting/PaymentMehodDetail/PaymentMethodReport")
);
const MainItem = lazy(() => import("../Reporting/ItemType/MainItem"));
const MainTaxesReport = lazy(
  () => import("../Reporting/Taxes/MainTaxesReport")
);
const NewMainTaxesReport = lazy(
  () => import("../Reporting/NewTaxesReport/MainTaxesReport")
);
const CurrentInventoryValue = lazy(
  () => import("../Reporting/CurrentInventoryValue/CurrentInventoryValue")
);
const MainAddEmployee = lazy(
  () => import("../StoreSetting/AddEmployee/MainAddEmployee")
);
const ReceiptMainpage = lazy(
  () => import("../StoreSetting/Receipt/ReceiptMainpage")
);
const MainItemSales = lazy(
  () => import("../Reporting/ItemSales/MainItemSales")
);
const NewMainItemSales = lazy(
  () => import("../Reporting/NewItemsales/NewMainItemSales")
);
const NewItemCreatedBetweenMain = lazy(
  () => import("../Reporting/NewItemCreatedBetween/NewItemCreatedBetweenMain")
);
const InventoryPerformance = lazy(
  () => import("../Reporting/InventoryPerformance/InventoryPerformanceMain")
);
const Permission = lazy(() => import("../StoreSetting/AddEmployee/Permission"));
const OrderSummaryDetails = lazy(
  () =>
    import(
      "../Reporting/SalesByPerson/MainOrderSumaaryDetails/OrderSummaryDetails"
    )
);
const VendorListMain = lazy(
  () => import("../Reporting/VendorList/VendorListMain")
);
const VendorSalesReportMain = lazy(
  () => import("../Reporting/VendorSalesReport/VendorSalesReportMain")
);
const OrderRefundReportMain = lazy(
  () => import("../Reporting/OrderRefundReport/OrderRefundReportMain")
);
const ReorderInventoryMain = lazy(
  () => import("../Reporting/ReorderInventory/ReorderInventoryMain")
);
const EditVendors = lazy(() => import("../Vendors/EditVendors"));
const SingleVendorsDetail = lazy(
  () => import("../Vendors/SingleVendorsDetail")
);
const AddProducts = lazy(() => import("../Products/AddProducts"));
const MainLoayalty = lazy(() => import("../LoyaltyProgram/MainLoayalty"));
const MainEmployeelist = lazy(
  () => import("../Reporting/Employelist/MainEmployeelist")
);
const AddPo = lazy(() => import("../PurchaseOrders/AddPo"));
const EditCoupon = lazy(() => import("../Coupons/EditCoupon"));
const StorePage = lazy(() => import("../Store/MerchantStore"));
const ManagerStore = lazy(() => import("../Store/ManagerStore"));
const ProductSalesReport = lazy(() => import("../Products/ProductSalesReport"));
const TipReportMain = lazy(
  () => import("../Reporting/TipReport/TipReportMain")
);
const CouponReportMain = lazy(
  () => import("../Reporting/CouponReport/CouponReportMain")
);
const SalesReportMain = lazy(
  () => import("../Reporting/SalesReport/SalesReportMain")
);
const Discount_Per_Sales = lazy(
  () => import("../Reporting/Discount_Per_Sales/discount_per_sales")
);
const Items_sales_profit_record = lazy(
  () => import("../Reporting/itemSalesProfitRecord/items_sales_profit_record")
);
const RefundSummary = lazy(
  () => import("../Reporting/RefundSummary/RefundSummary")
);
const ReceivePurchaseOrderItems = lazy(
  () => import("../PurchaseOrders/ReceivePurchaseOrderItems")
);
const ModifyPurchaseOrder = lazy(
  () => import("../PurchaseOrders/ModifyPurchaseOrder")
);
const InventoryList = lazy(
  () => import("../Reporting/inventoryList/inventoryList")
);
const ProfitMarginReport = lazy(
  () => import("../Reporting/ProfitMarginReport/profitMarginReport")
);
const MainStocktake = lazy(() => import("../Stocktake/MainStocktake"));
const AddNewStocktake = lazy(() => import("../Stocktake/AddNewStocktake"));
const StocktakeList = lazy(() => import("../Stocktake/StocktakeList"));
const StocktakeReport = lazy(() => import("../Stocktake/StocktakeReport"));
const AddCategory = lazy(() => import("../Category/AddCategory"));
const AddCoupon = lazy(() => import("../Coupons/AddCoupon"));
const AddVendors = lazy(() => import("../Vendors/AddVendors"));
const NeedHelp = lazy(() => import("../NeedHelp/NeedHelp"));
const Brands = lazy(() => import("../Brands/MainBrand"));
const Tags = lazy(() => import("../Tags/MainTags"));
const CategorySalesSummeryReport = lazy(
  () =>
    import("../Reporting/CategorySalesSummeryReport/categorySalesSummeryMain")
);
const SalesByHoursReport = lazy(
  () => import("../Reporting/SalesByHourReport/SalesByHourMain")
);
const MainDigitalMarketing = lazy(
  () => import("../StoreSetting/DigitalMarketing/MainDigitalMarketing")
);
const StoreCreditReportMain = lazy(
  () => import("../Reporting/StoreCreditReport/StoreCreditReportMain")
);
const DetailedLoyaltyPointReportMain = lazy(
  () =>
    import(
      "../Reporting/DetailedLoyaltyPointReport/DetailedLoyaltyPointReportMain"
    )
);
const NewCustomersAddedReportMain = lazy(
  () =>
    import("../Reporting/NewCustomerAddedReport/NewCustomersAddedReportMain")
);
const RegisterClosuresMain = lazy(
  () => import("../Reporting/RegisterClosures/RegisterClosuresMain")
);
const RegisterClosuresSummery = lazy(
  () => import("../Reporting/RegisterClosures/RegisterClosureSummery")
);

const RegisterClosuresTransactions = lazy(
  () => import("../Reporting/RegisterClosures/RegisterClosureTransactions")
);

const MainLoyaltyProgramPage = lazy(
  () => import("../StoreSetting/LoyaltyProgram/MainLoyaltyProgram")
);
const MainLotteryReport = lazy(
  () => import("../Reporting/LotteryPayoutReport/LotteryPayoutMain")
);
const LotteryMain = lazy(() => import("../Lottery/LotteryMain"));
const AddLottery = lazy(() => import("../Lottery/AddLottery"));
const DashboardChartViewReports = lazy(
  () => import("../Dashboard/DashboardChartViewReports")
);
const PaymentViewReports = lazy(
  () => import("../Reporting/PaymentReport/PaymentReportMain")
);
// add inventory report layout 
const MainInventoryReport = lazy(
  () => import("../Reporting/InventoryReport/MainInventoryReport")
);
const LeftSide = ({ visible }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [visible]);

  const renderComponent = () => {
    switch (visible) {
      case "dashboard":
        return <DashboardMain />;

      case "dashboard-chart-view-reports":
        return <DashboardChartViewReports />;

      case "order":
        return <MainOrder />;
      case "category":
        return <MainCategory />;
      case "add-category":
        return <AddCategory />;
      case "purchase-data":
        return <MainPurchase />;
      case "stocktake":
        return <StocktakeList />;
      case "stocktake-updateStocktake":
      case "stocktake-AddStocktake":
        return <AddNewStocktake />;
      case "stocktake-void":
      case "stocktake-completed":
        return <StocktakeReport />;
      case "add-purchase-data":
        return <AddPo />;
      case "edit-purchase-data":
        return <ReceivePurchaseOrderItems />;
      case "modify-purchase-order":
        return <ModifyPurchaseOrder />;
      case "attributes":
        return <MainAttributes />;
      case "products":
        return <MainProducts />;
      case "store":
        return <StorePage />;
      case "manager":
        return <ManagerStore />;
      case "coupons":
        return <MainCoupon />;
      case "add-coupons":
        return <AddCoupon />;
      case "coupons-edit-cop":
        return <EditCoupon />;
      case "mix-and-match":
        return <MainMixAndMatch />;
      case "add-mix-and-match":
        return <AddMixAndMatchDeal />;
      case "update-mix-and-match":
        return <UpdateMixAndMatchDeal />;
      case "vendors":
        return <MainVendors />;
      case "add-vendors":
        return <AddVendors />;
      case "timesheet":
        return <MainTimesheet />;
      case "import-data":
        return <MainImportData />;
      case "Digital-marketing-tags":
        return <MainDigitalMarketing />;
      case "store-setting":
        return <MainStoreOption />;
      case "category-edit-cat":
        return <EditCategory />;
      case "toptraders":
        return <TopTenders />;
      case "productedit":
      case "product-edit":
      case "edit-varient":
        return <AddProducts />;
      case "product-add":
        return <AddProducts />;
      case "product-sales":
        return <ProductSalesReport />;
      case "info":
        return <Info />;
      case "need_help":
        return <NeedHelp />;
      case "setup":
        return <Setup />;
      case "Alters":
        return <MainStoreAlters />;
      case "options":
        return <MainStoreOption />;
      case "taxes":
        return <MainTaxes />;
      case "inventory":
        return <MainInventory />;
      case "register":
        return <MainResigtersetting />;
      case "system-access":
        return <MainSyastemAccess />;
      case "StoreSettingloyalty-program":
        return <MainLoyaltyProgramPage />;
      case "daily-total-report":
        return <DailyTtlReport />;
      case "Details-category":
        return <MainCatedetails />;
      case "report-sales-person":
        return <MainSalesPerson />;
      case "id-verification":
        return <CheckIDVerifyMain />;
      case "inventory-list":
        return <InventoryList />;
      case "profit-Margin":
        return <ProfitMarginReport />;
      case "instant-activity":
        return <InstantActvity />;
      case "overall-top":
        return <TopSallerReport />;
      case "employee-working-hours":
        return <EmployeeWorking />;
      case "shift-summary":
        return <MainSiftSummary />;
      case "payment-method-details":
        return <PaymentMethodReport />;
      case "order-type":
        return <MainItem />;
      case "taxes-report":
        return <MainTaxesReport />;
      case "new-taxes-report":
        return <NewMainTaxesReport />;
      case "current-inventory-value":
        return <CurrentInventoryValue />;
      case "discount-per-sales-person":
        return <Discount_Per_Sales />;
      case "item-sales-profit-report":
        return <Items_sales_profit_record />;
      case "addemployee":
        return <MainAddEmployee />;
      case "employee-list":
        return <MainEmployeelist />;
      case "receipt":
        return <ReceiptMainpage />;
      case "item-sales":
        return <MainItemSales />;
      case "new-item-sales-report":
        return <NewMainItemSales />;
      case "item-create-between":
        return <NewItemCreatedBetweenMain />;
      case "inventory-performance":
          return <InventoryPerformance />;
      case "permission":
        return <Permission />;
      case "order-summary":
        return <OrderSummaryDetails />;
      case "vendors-list":
        return <VendorListMain />;
      case "edit-vendor":
        return <EditVendors />;
      case "vendor-details":
        return <SingleVendorsDetail />;
      case "loyalty-program":
        return <MainLoayalty />;
      case "recorder-inventory":
        return <ReorderInventoryMain />;
      case "vendors-sales-reports":
        return <VendorSalesReportMain />;
      case "order-refund-report":
        return <OrderRefundReportMain />;
      case "refund-report":
        return <RefundSummary />;
      case "tip-report":
        return <TipReportMain />;
      case "coupon-report":
        return <CouponReportMain />;
      case "register-closures":
        return <RegisterClosuresMain />;
      case "register-closures-summery":
        return <RegisterClosuresSummery />;
      case "register-closures-transactions":
        return <RegisterClosuresTransactions />;
      case "drop-cash-report":
        return <DropCashMain />;
       // add case for inventory report url
      case "inventory-report":
        return <MainInventoryReport />;
      
      case "pay-in-report":
        return <PayInMain />;
      case "sales-report":
        return <SalesReportMain />;
      case "new-sales-report":
        return <MainSalesReport />;
      case "lottery-payout-report":
        return <MainLotteryReport />;
      case "brands":
        return <Brands />;
      case "tags":
        return <Tags />;
      case "lottery":
        return <LotteryMain />;
      case "add-lottery":
      case "update-lottery":
        return <AddLottery />;
      case "category-sales-summery-report":
        return <CategorySalesSummeryReport />;
      case "sales-by-hour-report":
        return <SalesByHoursReport />;
      case "store-credit-report":
        return <StoreCreditReportMain />;
      case "detailed-loyalty-points-report":
        return <DetailedLoyaltyPointReportMain />;
      case "gift-card-report":
        return <MainGiftCard />;
      case "payment-report":
        return <PaymentViewReports />;
      case "employee-sales-per-category-report":
        return <MainEmployeeSalesPerCategory />;
      case "inventory-merge":
        return <InventoryMerge />;
      case "new-customers-added-report":
        return <NewCustomersAddedReportMain />;
      case "new-sale-report":
        return <NewSalesReportMain />;
      default:
        return <DashboardMain />;
    }
  };

  return <Suspense fallback={<div></div>}>{renderComponent()}</Suspense>;
};

export default LeftSide;
