// All api calls are initialized in this component for this application

//remove unwanted and credentials of other app
module.exports = Object.freeze({
  // BASE_URL: "https://sandbox.quickvee.net/",
  BASE_URL: "https://production.quickvee.net/",
  // BASE_URL: "https://www.quickvee.net/",
  // BASE_URL: "https://www.quickvee.net/",
  // Categories API calls
  ADD_CATOGRY: "CategoryReactapi/addnewcolln",
  UPDATE_CATOGRY: "CategoryReactapi/updateCategory",
  LIST_ALL_CATEGORIES: "CategoryReactapi/category_list",
  DELETE_SINGLE_CATEGORIE: "CategoryReactapi/delete_category",
  PRODUCT_LIST_BY_CATEGORY: "CategoryReactapi/product_list_by_category",
  CATEGORIE_STATUS: "CategoryReactapi/categoryapi_status",
  CATEGORIE_BANNER_REMOVE: "CategoryReactapi/delete_banner_image",
  EDIT_CATOGRY_DATA: "CategoryReactapi/category_data",
  SORT_CATOGRY_DATA: "CategoryReactapi/SaveSizeSorting",

  // DASHBOARD CHARTS
  REVENUE_CHART: "ReportingReactapi/revenue_data_api",
  SALES_COUNT_CHART: "NewDashboardReact/sales_count_api",
  CUSTOMER_COUNT_CHART: "ReportingReactapi/customer_count_api",
  DISCOUNT_CHART: "ReportingReactapi/discount_api",
  GROSS_PROFIT_CHART: "NewDashboardReact/gross_profit_api",
  PERCENTAGE_DISCOUNT_CHART: "NewDashboardReact/discount_in_per_api",
  AVG_SALE_VALUE: "DashboardReactApi/avg_sale_value",
  AVG_ITEM_SALE: "DashboardReactApi/avg_item_sale",

  // Defaults API Calls
  LIST_ALL_Defaults: "DefaultReactapi/Default_list",
  ADD_DEFAULTS: "DefaultReactapi/AddDefaultMenu",
  EDIT_DEFAULTS: "DefaultReactapi/updateDefaultMenu",
  DEFAULTDATA: "DefaultReactapi/DefaultData_list",
  DELETE_SINGLE_DEFAULTS: "DefaultReactapi/deleteMenu",
  DELETE_MULTI_DEFAULTS: "DefaultReactapi/deleteSelectedDefaults",

  //Attributes API Calls
  LIST_ALL_ATTRIBUTES: "Varient_react_api/varients_list",
  ADD_ATTRIBUTE: "Varient_react_api/add_varient",

  //Importdata API Calls
  IMPORT_DATA: "Import_data_api/import",

  // Mix and Match Pricing
  ADD_MIX_MAX_PRICING_DEAL: "React_max_purchase_api/add_mix_match_pricing",
  MIX_MAX_PRICING_DEALS_LIST: "React_max_purchase_api/mix_match_pricing_list",
  DELETE_MIX_MAX_PRICING_DEAL:
    "React_max_purchase_api/delete_mix_match_pricing",
  ENABLE_DISABLE_MIX_MAX_PRICING_DEAL:
    "React_max_purchase_api/enable_mix_match_pricing",

  //Loyalty Program
  LOYALTY_PROGRAM_LIST: "LoyaltyProgramReactAPI/loyalty_program_list",
  GET_LOYATY_DATA_COUNT: "LoyaltyProgramReactAPI/loyalty_program_count",

  // Order API Calls (Offline and Online)
  LIST_ALL_IN_STORE_ORDER: "api/orderoffline",
  LIST_ALL_ONLINE_STORE_ORDER: "api/newOrder",
  LIST_ALL_STORE_ORDER_LIST: "Order_list_api/all_order_list",
  CLOSE_ORDER_COLLECT_CASH: "Order_list_api/close_order_collectCash",

  //Storesettings API Calls

  EMPLOYEE_LIST: "Store_setting_react_api/employee_list",
  ADDEDIT_EMPLOYEE: "Store_setting_react_api/addEdit_employee",
  DELETE_EMPLOYEE: "Store_setting_react_api/delete_employee",

  // EMPLOYEE_LIST:"App/employee_list",

  EMPLOYEE_DATA: "Store_setting_react_api/getEmployeeByEmpid",
  PERMISSIONS_LIST: "Store_setting_react_api/permission_list",
  UPDATE_PERMISSION: "Store_setting_react_api/update_Employee_permission",

  // Store Setting - RegisterSettings api
  GET_REGISTER_SETTINGS_DATA: "ProfileReact_setup/inventory_register_setting",
  UPDATE_REGISTER_SETTINGS: "ProfileReact_setup/register_setting",

  // Store Setting options api
  GET_STORE_OPTIONS_DATA: "Store_setting_react_api/get_store_options_data",

  // Update Store Setting options api
  // UPDATE_STORE_OPTIONS_DATA: "Store_setting_api/update_store_options_data",
  UPDATE_STORE_OPTIONS_DATA: "Store_setting_react_api/update_store_option",
  UPDATE_STORE_INFO: "Store_setting_react_api/update_store_info",

  //Coupon API Calls
  COUPON_LIST: "CouponReactApi/get_coupon_details",
  COUPON_STATUS_UPDATE: "CouponReactApi/show_online",
  COUPON_DELETE: "CouponReactApi/delete_coupon",
  COUPON_TITLE_CHECK: "CouponReactApi/check_coupon_title",
  // COUPON_DETAILS_ID_CHECK: "Couponapi/get_edit_coupon_details",
  COUPON_DETAILS_ID_CHECK: "CouponReactApi/get_coupon_by_id",
  EDIT_COUPON: "CouponReactApi/edit_coupon",
  ADD_COUPON: "CouponReactApi/add_coupon",

  // System Access API Calls Listing and Update
  LIST_ALL_SYSTEM_ACCESS: "api/SettingsReact_api/system_access",
  UPDATE_SYSTEM_ACCESS: "api/SettingsReact_api/update_system_access",
  END_DAY_ACTUAL_AMT: "api/SettingsReact_api/day_end_actual_amt",
  CHECK_END_DAY: "api/SettingsReact_api/check_eod",

  //Inventory
  LIST_INVENTORY: "api/SettingsReact_api/inventory_list",
  // UPDATE_INVENTORY: "api/SettingsReact_api/update_inventory_info",
  UPDATE_INVENTORY: "StoreReact_setting_api1/update_inventory_info",

  // Store setup
  UPDATE_STORE_SETUP: "Store_setting_react_api/update_store_setup",

  // get Store Setting alerts list api
  GET_STORE_ALERTS_DATA: "Store_setting_react_api/store_alerts_list",

  // get Store Setting alerts list api
  UPDATE_STORE_ALERTS_DATA: "StoreReact_setting_api1/update_store_alerts",

  // Get Store Setting Receipt List and Update API
  GET_STORE_RECEIPT_DATA: "StoreReact_setting_api/get_receipt_list",
  UPDATE_RECEIPT_INFO_DATA: "StoreReact_setting_api/update_receipt_info_list",

  // Purchase Order API Calls
  LIST_ALL_PARCHASE: "Purchase_ordersReactApi/purchase_order_list",
  PURCHASE_ORDER_COUNT: "Purchase_ordersReactApi/purchase_order_count",
  SAVE_PO: "Purchase_ordersReactApi/save_po",
  AUTO_PO_LIST: "Purchase_ordersReactApi/auto_po_list",
  PURCHASE_ORDER_DETAILS_BY_ID: "Purchase_ordersReactApi/get_po_by_id",
  VOID_PO: "Purchase_ordersReactApi/void_po",
  RECEIVE_PURCHASE_ORDER_ITEMS: "Purchase_ordersReactApi/recieve_po",
  UPDATE_PO: "Purchase_ordersReactApi/update_po",
  EMAIL_PO: "Purchase_ordersReactApi/email_po",
  DELETE_PO_ITEM: "Purchase_ordersReactApi/delete_po_item",

  // Taxes API Calls
  ADD_TAXES: "Taxes_react_api/add_Tax",
  UPDATE_TAXES: "Taxes_react_api/update_Tax",
  LIST_ALL_TAXES: "Taxes_react_api/Taxes_list",
  DELETE_SINGLE_TAXE: "Taxes_react_api/delete_tax",
  TAXE_CATEGORY_LIST: "Taxes_react_api/Taxes_category_list",
  FETCH_DATA_TAXE: "Taxes_react_api/edit_taxes",

  // All Reports API
  CHECKID_VARIFICATION_REPORT_LIST:
    "ReportingReactapi/checkID_varification_report_list",

  // for daily Report
  LIST_DAILY_REPORT: "ReportingReactapi/daily_total_report",

  NEW_ITEM_CREATED_BETWEEN_LIST:
    "ReportingReactapi/new_item_created_between_list",

  TOP_SALLER_REPORT: "ReportingReactapi/top_seller_10",
  INSTANT_ACTIVITY_REPORT: "ReportingReactapi/instant_po_activity_report",

  //Employee List
  LIST_ALL_EMPLOYEE: "ReportingReactapi/employee_list",

  //INVENTORY_EXPORT
  INVENTORY_EXPORT: "ExportInventory_api/exportCSV",
  LIST_ALL_MERCHANTS: "ExportInventory_api/merchants_list",

  //INVENTORY_EXPORT
  INVENTORY_DUPLICATE: "Inventory_duplicate_api/duplicate_inventory",
  SETTINGS_DUPLICATE: "Inventory_duplicate_api/duplicate_setting",

  LIST_PAYMENT_METHOD_REPORT: "ReportingReactapi/credit_card_sales_report",

  // });

  // for item sales report
  GET_ITEMWISE_SALE_LIST: "ReportingReactapi/get_itemwise_sale_list",
  NEW_ITEMWISE_SALE_LIST: "ReportingReactapi/new_item_sale_report",
  PAY_IN_REPORT: "ReportingReactapi/pay_in_report",
  DROP_CASH_REPORT: "ReportingReactapi/drop_cash_report",
  EMPLOYEE_SALES_PER_CATEGORY_REPORT: "ReportingReactapi/emp_category_sale",

  //Order Type

  LIST_ALL_ORDER_TYPE: "ReportingReactapi/order_type",

  LIST_TAXES_REPORT: "ReportingReactapi/taxes_report",

  LIST_CURRENT_INVENTORY_REPORT: "ReportingReactapi/inventory_report",
  ITEM_SALES_PROFIT_REPORT: "ReportingReactapi/item_sale_profit_report",

  //Super Admin - Permission
  LIST_ALL_PERMISSION: "api/Create_permission_api/permission_list",
  ADD_UPDATE_PERMISSION: "api/Create_permission_api/save_sub_permission",
  DELETE_SINGLE_PERMISSION: "api/Create_permission_api/deleteperm",

  // Store Order List API
  GET_STORE_ORDER_DATA: "Store_order_api/get_store_order_data",
  GET_STORE_ORDER_DATA_COUNT: "Store_order_api/get_store_order_count",

  // Export Order Count Data
  EXPORT_ORDER_COUNT_DATA: "Store_order_api/export_order_count_data",

  // CATEGORY DUPLICATE
  LIST_ALL_CATEGORIES_MECHANT_ID: "Category_duplicate_api/get_category",
  CATEGORY_INVENTORY_DUPLICATE: "Category_duplicate_api/category_inventory",

  // PRODUCT DUPLICATE
  LIST_ALL_PRODUCTS: "Product_Duplicate_api/get_product",
  PRODUCT_INVENTORY_DUPLICATE:
    "Product_Duplicate_api/product_inventory_duplicate",

  // REPORT_BY_SALES_PERSON
  REPORT_BY_SALES_PERSON: "ReportingReactapi/report_by_sales_person",
  GIFT_CARD_REPORT: "ReportingReactapi/gift_card_report_api",

  DETAIL_CATEGORY_SALE_REPORT: "vendor_report_api/detailed_category_sale",

  //  Sales Report List API
  // SALES_REPORT_LIST: "vendor_report_api/sales_report",
  // SALES_REPORT_LIST: "ReportingReactapi/new_sale_overview",
  SALES_REPORT_LIST: "Sale_summary_api/new_sale_overview",
  // tip report list api
  TIP_REPORT_LIST: "ReportingReactapi/tip_report",
  //coupon report api

  COUPON_REPORT_LIST: "ReportingReactapi/coupon_report",

  // GET_ORDER_SUMMERY_DETAILS:'Orders/order_details',

  // -------------------------
  // ---------------------
  ADD_MERCHAN_EMPLOYEE: "UserController/add_admin",
  GET_MERCHAN_STATE: "UserController/add",
  GET_ADMIN_DATA: "UserController/get_user", // get merchant admin record
  ADMIN_CHECK_USER: "UserController/check_user", // check email pending
  CHECK_ADMIN_EMAIL: "UserController/check_user_type", //check admin email
  ADMIN_GET_CUSTOMER: "UserController/get_customer", // get customer data
  GET_CUSTOMER_COUNT: "UserController/get_customer_count", // get customer count
  // GET_EDIT_CUSTOMER:'UserController/edit_customer',
  // GET_EDIT_CUSTOMER:'UserController/edit_customer',
  GET_MANAGER_LISTING: "Manager_react/manager_list",
  GET_MANAGER_RECORD: "UserController/maneger_view", // manager view
  GET_MANAGER_RECORD_COUNT: "UserController/maneger_view_count", // manager view
  ADD_MANAGER: "Manager_react/add_update_manager", // manager view
  DELETE_MANAGER: "Manager_react/delete_manager",
  GET_ADMIN_RECORD: "UserController/admin_view", // admin view data
  GET_ADMIN_RECORD_COUNT: "UserController/admin_view_count", // admin records count
  GET_MANAGER_MERCHANT: "UserController/get_manager_merchant", // get manager merchant
  GET_ADMIN_MERCHANT: "UserController/get_merchant", // give admin merchant
  GET_EDIT_ADMIN: "UserController/edit_admin", // edit admin
  UPDATE_ADMIN_RECORD: "UserController/update_admin", //update admin
  GET_EDIT_CUSTOMER: "UserController/edit", // adit customer
  GET_UPDATE_CUSTOMER: "UserController/update", // update customer
  GET_VERIFIED_MERCHANT: "UserController/getUnverifiedMerchant", //get verified and unverified merchant
  GET_VERIFIED_MERCHANT_COUNT: "UserController/getUnverifiedMerchantCount", //get verified and unverified merchant count
  GET_ADD_ADMIN: "UserController/insert_admin", //add admin
  GET_UPDATE_MERCHANT: "UserController/merchant_update",
  GET_Edit_STORE_INFO: "UserController/store_info",
  // UPDATE_STORE_INFO: "UserController/createMenuLink",

  // vendor Report List API
  VENDORS_REPORT_LIST: "vendor_report_api/vendor_list",
  EDIT_VENDOR_DATA: "Vendor_api/edit_vendor",
  UPDATE_VENDOR_DATA: "Vendor_api/update_vendor",
  ADD_VENDOR_DATA: "Vendor_api/add_vendor",
  GET_VENDOR_DETAILS: "Vendor_api/vendor_details",
  DELETE_SINGLE_VENDOR_DATA: "Vendor_api/delete_vendor",
  GET_VENDORS_DATA_COUNT: "vendor_report_api/vendor_list_count",
  // Vendors Sales List API
  VENDORS_SALES_REPORT: "vendor_report_api/vendors_sales_report",

  // Vendors List for sales report API
  VENDORS_LIST: "vendor_report_api/get_vendor_list",

  // Order Refund Report
  ORDER_REFUND_REPORT: "vendor_report_api/order_refund_report",
  REFUND_REPORT: "ReportingReactapi/refund_report",

  // Vendors API calls
  LIST_ALL_VENDORS: "Vendor_api/vendor_list",

  // vendors status update

  STATUS_UPD_VENDORS: "Vendor_api/onlineAvail",

  // GET_ORDER_SUMMERY_DETAILS

  GET_ORDER_SUMMARY_DETAILS: "Orders/order_details",

  // NewsLetter List API
  NEWS_LETTER_LIIST: "vendor_report_api/newsletter",

  GET_REORDER_INVENTORY_LIST: "ReportingReactapi/get_reorder_inventory_list",

  // PRODUCTS
  PRODUCTS_LIST: "Product_api_react/Products_list",
  ALL_PRODUCTS_LIST: "Productapi/products_list",
  ALL_PRODUCTS_LIST_WITH_VARIANTS: "Productapi/variant_list",
  PRODUCT_DEFAULT_IMAGE: this.BASE_URL + "upload/products/MaskGroup4542.png",
  UPDATE_TYPE: "Product_api_react/update_type",
  MASS_INVENTORY_UPDATE: "Product_api_react/mass_update_inventory",
  ALL_PRODUCTS_WITH_VARIANTS_LIST: "ReportingReactapi/variant_list_data",

  //shiftsummary api

  GET_SHIFT_SUMMARY_LIST: "Reportingreactapi_pcr/shift_summary_report_list",

  //StoreSetup details  api

  GET_STORE_SETUP_LIST: "Settingapi/store_details",

  //All Orders API
  UPDATE_ORDER_STATUS: "Order_list_api/changeStatus_api",

  // working hrs api
  UPDATE_WORKING_HRS_STATUS: "report_api/employee_work_hours1",

  // Employee work hours API
  // EMPLOYEE_WORK_HOURS: "Report_api/employee_work_hours1",
  EMPLOYEE_WORK_HOURS: "Report_api/employee_work_hours1_api",

  LOGIN_AUTHENICATE_API: "LoginApiReact/chk_merchant",
  LOGIN_AUTHENICATE2_API: "LoginApiReact/send_otp_session", //
  LOGIN_OTP_AUTHENTICATION: "LoginApiReact/chk_otp", //
  LOGIN_OTP_SUBMIT_AUTHENTICATION: "LoginApiReact/create_session", //
  LOGIN_VIA_SUPERADMIN: "LoginApiReact/login_via_superadmin", //
  DASHBOARD_COUNT_STORE: "DashboardReactApi/all_orders_total_api", //
  DASHBOARD_TABLE_LIST: "DashboardReactApi/recent_online_orders_list",
  DELETE_SINGLE_STORE: "UserController/delete",
  GET_ORDER_SUMMERY_DETAILS: "Orders/order_details",
  UNAPPROVE_SINGLE_STORE: "UserController/unapprove",
  APPROVE_SINGLE_STORE: "UserController/approve",
  EXPORTCSV: "UserController/exportCSV",
  DISCOUNT_PER_PERSON: "Reportingreactapi_pcr/discount_per_sales_person_report",

  // For TimeSheet
  TIME_SHEET_LIST: "Timesheet_react_api/timesheet_list",
  TIME_SHEET_GETBREAKS: "Timesheet_react_api/getBreaks",
  ADD_TIME_SHEET: "Timesheet_react_api/addNewTimeclock",
  ADD_TIME_BREAK: "Timesheet_react_api/addBreak",
  DELETE_TIMESHEET: "Timesheet_react_api/delete_timeclock",
  DELETE_BREAK: "Timesheet_react_api/delete_breaks",

  CHANGE_PASSWORD_STORE: "Store_setting_react_api/change_password",
  INVENTORY_LIST: "ReportingReactapi/JsonDataproductnew1",
  EMAIL_VARIFICATION: "LoginApiReact/reset_password_send",

  GET_STOCKTAKE_LIST: "Stocktake_react_api/stocktake_list",
  CREATE_UPDATE_STOCKTAKE: "Stocktake_react_api/create_update_stocktake",

  VOID_STOCKTAKE: "Stocktake_react_api/void_stocktake",
  STOCKTAKE_LIST_COUNT: "Stocktake_react_api/stocktake_count",

  SYNC_DATA: "InventoryReact/syncOI",
  SEND_FOR_APPROVAL: "Product_api_react/send_approval",

  VENDOR_UPDATE_DETAILS: "vendor_api/update_details",
  CHECK_EXIST_STORENAME: "UserController/check_merchant",
  CHECK_EXISTING_PIN: "StoreReact_setting_api/check_pin",

  // Support Details
  SUPPORT_DETAILS_LIST: "Support_details_react_api/view_support_details",
  SUPPORT_DETAILS_EDIT: "Support_details_react_api/update_support_details",
  Dashboard_URL_REDIRECT: "Dashboard/login_via_superadmin",
  PURCHASE_ORDER_API: "Purchase_orders_api/po_list",

  ORDER_TYPE_ORDER_LIST: "Order_list_api/order_detailed_list",
  ORDER_TYPE_ORDER_LIST_COUNT: "Order_list_api/order_detailed_count",
  GET_ZIP_CODE_CITY: "https://api.zippopotam.us/US/",

  // Digital Marketing Tags
  DIGITALMAKRTING_LIST: "Store_setting_react_api/digital_marketing_tags_list",
  DIGITALMAKRTING_UPDATE: "Store_setting_react_api/add_digital_marketing_tags",
  DELETE_DIGITALMAKRTING:
    "Store_setting_react_api/delete_digital_marketing_tags",
  GET_BRAND_DATA_LIST: "Product_api_react/list_brand_tag",
  ADD_NEW_BRANDS_DATA: "Product_api_react/add_brand_tag",
  UPDATE_BRANDS_DATA: "Product_api_react/update_brand_tag",
  DELETE_BRAND_DATA: "Product_api_react/delete_brand_tag",

  // Order Retrieve
  SPLIT_LIST: "Order_list_api/get_split_records",
  ORDERRETRIEVE_SUBMIT: "Order_list_api/order_recover",
  STORE_CREDIT_REPORT: "ReportingReactapi/store_credit_report",
  GET_RELATED_PRODUCT: "Product_api_react/getRelatedProduct",
  DETAILED_LOYALTY_POINTS: "ReportingReactapi/loyalty_points_report",
  IMAGE_DUPLICATE: "Product_api_react/image_duplicate",
  GET_REFUND_EMAILS: "Order_list_api/get_refund_emails",
  GET_REFUND_EMAILS_COUNT: "Order_list_api/get_refund_emails_count",
  CATEGORY_SALES_SUMMERY_REPORT: "ReportingReactapi/category_sale_summary",
  SALES_BY_HOURS_REPORT: "ReportingReactapi/sale_per_hour",
  TRANSFER_INVENTORY: "Product_api_react/transfer_inventory",
  NEW_CUSTOMER_ADDED_REPORT: "ReportingReactapi/new_customer_added_report",
  REFUND_EMAIL_STATUS_CHANGE: "Order_list_api/refund_email_status_change",
  GET_REGISTER_CLOSURE_LIST:
    "Shift_summary_report_react/shift_summary_report_react",
  GET_SHIFT_SUMMARY_REPORT_ORDER_DETAILS:
    "Shift_summary_report_react/order_details",
  LOYALITY_PROGRAM_STORE_LIST: "LoyaltyProgramReactAPI/loyalty_program",
  SAVE_LOYALITY_PROGRAM: "LoyaltyProgramReactAPI/save_loyalty_program",
  ADD_LOYALITY_PROGRAM: "LoyaltyProgramReactAPI/add_bouns_point_promotions",
  DELETE_LOYALTY_PROGRAM: "LoyaltyProgramReactAPI/delete_loyalty_program",
  GET_LOTTERY_DATA_REPORT: "ReportingReactapi/lottery_payout_report",
  GET_ALL_COUPON_RECORD: "ReportingReactapi/coupon_report",
  GET_PAYMENT_REPORT_DATA: "Sale_summary_api/payment_report",

  NEW_CUSTOMER_REPORT: "NewSalesReportReactapi/customer_report",
});

// All api calls are initialized in this component for this application ADD_LOYALITY_PROGRAM BASE_URL
//remove unwanted and credentials of other app

// module.exports = Object.freeze({
//   BASE_URL: 'https://sandbox.quickvee.com/',

//   // Categories API calls
//   ADD_CATOGRY: "CategoryReactapi/addnewcolln",
//   UPDATE_CATOGRY: "CategoryReactapi/updateCategory",
//   LIST_ALL_CATEGORIES: "CategoryReactapi/category_list",
//   DELETE_SINGLE_CATEGORIE: "CategoryReactapi/delete_category",
//   PRODUCT_LIST_BY_CATEGORY: "CategoryReactapi/product_list_by_category",
//   CATEGORIE_STATUS: "CategoryReactapi/categoryapi_status",
//   CATEGORIE_BANNER_REMOVE: "CategoryReactapi/delete_banner_image",
//   EDIT_CATOGRY_DATA: "CategoryReactapi/category_data",

//   // Defaults API Calls
//   LIST_ALL_Defaults: "DefaultReactapi/Default_list",
//   ADD_DEFAULTS: "DefaultReactapi/AddDefaultMenu",
//   EDIT_DEFAULTS: "DefaultReactapi/updateDefaultMenu",
//   DEFAULTDATA: "DefaultReactapi/DefaultData_list",
//   DELETE_SINGLE_DEFAULTS: "DefaultReactapi/deleteMenu",
//   DELETE_MULTI_DEFAULTS: "DefaultReactapi/deleteSelectedDefaults",

//   //Attributes API Calls
//   LIST_ALL_ATTRIBUTES: "Varientsapi/varients_list",
//   ADD_ATTRIBUTE: "Varientsapi/add_varient",

//   //Importdata API Calls
//   IMPORT_DATA: "Import_data_api/import",

//   // Order API Calls (Offline and Online)
//   LIST_ALL_IN_STORE_ORDER: "api/orderoffline",
//   LIST_ALL_ONLINE_STORE_ORDER: 'api/newOrder',

//   //Storesettings API Calls

//   EMPLOYEE_LIST: "Store_setting_api/employee_list",
//   ADDEDIT_EMPLOYEE: "Store_setting_api/addEdit_employee",
//   DELETE_EMPLOYEE: "Store_setting_api/delete_employee",

//   // EMPLOYEE_LIST:"App/employee_list",

//   EMPLOYEE_DATA: "Store_setting_api/getEmployeeByEmpid",
//   PERMISSIONS_LIST: "Store_setting_api/permission_list",
//   UPDATE_PERMISSION: "Store_setting_api/update_Employee_permission",

//   // Store Setting - RegisterSettings api
//   GET_REGISTER_SETTINGS_DATA: "Profile_setup/inventory_register_setting",
//   UPDATE_REGISTER_SETTINGS: "Profile_setup/register_setting",

//   // Store Setting options api
//   GET_STORE_OPTIONS_DATA: "Store_setting_api/get_store_options_data",

//   // Update Store Setting options api
//   UPDATE_STORE_OPTIONS_DATA: "Store_setting_api/update_store_options_data",

//   //Coupon API Calls
//   COUPON_LIST: "Couponapi/get_coupon_details",
//   COUPON_STATUS_UPDATE: "Couponapi/show_online",
//   COUPON_DELETE: "Couponapi/delete_coupon",
//   COUPON_TITLE_CHECK: "Couponapi/check_coupon_title",

//   // System Access API Calls Listing and Update
//   LIST_ALL_SYSTEM_ACCESS: "api/Settings_api/system_access",
//   UPDATE_SYSTEM_ACCESS: "api/Settings_api/update_system_access",
//   END_DAY_ACTUAL_AMT: "api/Settings_api/day_end_actual_amt",

//   //Inventory
//   LIST_INVENTORY: 'api/Settings_api/inventory_list',
//   UPDATE_INVENTORY: 'api/Settings_api/update_inventory_info',

//   // get Store Setting alerts list api
//   GET_STORE_ALERTS_DATA: "Store_setting_api/store_alerts_list",

//   // get Store Setting alerts list api
//   UPDATE_STORE_ALERTS_DATA: "Store_setting_api/store_alerts_update",

//   // Get Store Setting Receipt List and Update API
//   GET_STORE_RECEIPT_DATA: "Store_setting_api/get_receipt_list",
//   UPDATE_RECEIPT_INFO_DATA: "Store_setting_api/update_receipt_info_list",

//   // Purchase API Calls
//   LIST_ALL_PARCHASE: "Purchase_ordersReactApi/purchase_order_list",

//   // Taxes API Calls
//   ADD_TAXES: "Taxesapi/add_Tax",
//   UPDATE_TAXES: "Taxesapi/update_Tax",
//   LIST_ALL_TAXES: "Taxesapi/Taxes_list",
//   DELETE_SINGLE_TAXE: "Taxesapi/delete_tax",
//   TAXE_CATEGORY_LIST: "Taxesapi/Taxes_category_list",

//   // All Reports API
//   CHECKID_VARIFICATION_REPORT_LIST: "ReportingReactapi/checkID_varification_report_list",

//   // for daily Report
//   LIST_DAILY_REPORT: "ReportingReactapi/daily_total_report",

//   NEW_ITEM_CREATED_BETWEEN_LIST: "ReportingReactapi/new_item_created_between_list",

//   TOP_SALLER_REPORT: "ReportingReactapi/top_seller_10",
//   INSTANT_ACTIVITY_REPORT: "ReportingReactapi/instant_po_activity_report",

//   //Employee List
//   LIST_ALL_EMPLOYEE: "ReportingReactapi/employee_list",

//   //INVENTORY_EXPORT
//   INVENTORY_EXPORT: "ExportInventory_api/exportCSV",
//   LIST_ALL_MERCHANTS: "ExportInventory_api/merchants_list",

//   //INVENTORY_EXPORT
//   INVENTORY_DUPLICATE: "Inventory_duplicate_api/duplicate_inventory",
//   SETTINGS_DUPLICATE: "Inventory_duplicate_api/duplicate_setting",

//   LIST_PAYMENT_METHOD_REPORT: "ReportingReactapi/credit_card_sales_report",

//   // });

//   // for item sales report
//   GET_ITEMWISE_SALE_LIST: "ReportingReactapi/get_itemwise_sale_list",

//   //Order Type

//   LIST_ALL_ORDER_TYPE: "ReportingReactapi/order_type",

//   LIST_TAXES_REPORT: "ReportingReactapi/taxes_report",

//   LIST_CURRENT_INVENTORY_REPORT: "ReportingReactapi/inventory_report",

//   //Super Admin - Permission
//   LIST_ALL_PERMISSION: "api/Create_permission_api/permission_list",
//   ADD_UPDATE_PERMISSION: "api/Create_permission_api/save_sub_permission",
//   DELETE_SINGLE_PERMISSION: "api/Create_permission_api/deleteperm",

//   // Store Order List API
//   GET_STORE_ORDER_DATA: "Store_order_api/get_store_order_data",

//   // Export Order Count Data
//   EXPORT_ORDER_COUNT_DATA: "Store_order_api/export_order_count_data",

//   // CATEGORY DUPLICATE
//   LIST_ALL_CATEGORIES_MECHANT_ID: "Category_duplicate_api/get_category",
//   CATEGORY_INVENTORY_DUPLICATE: "Category_duplicate_api/category_inventory",

//   // PRODUCT DUPLICATE
//   LIST_ALL_PRODUCTS: "Product_Duplicate_api/get_product",
//   PRODUCT_INVENTORY_DUPLICATE: "Product_Duplicate_api/product_inventory_duplicate",

//   // REPORT_BY_SALES_PERSON
//   REPORT_BY_SALES_PERSON: "ReportingReactapi/report_by_sales_person",

//   // GET_ORDER_SUMMERY_DETAILS:'Orders/order_details',

//   // -------------------------
//   // ---------------------
//   ADD_MERCHAN_EMPLOYEE:'UserController/add_admin',
//       GET_MERCHAN_STATE:'UserController/add',
//       GET_ADMIN_DATA:'UserController/get_user',// get merchant admin record
//       ADMIN_CHECK_USER:'UserController/check_user',// check email pending
//       CHECK_ADMIN_EMAIL:'UserController/check_user_type',//check admin email
//       ADMIN_GET_CUSTOMER:'UserController/get_customer',// get customer data
//       // GET_EDIT_CUSTOMER:'UserController/edit_customer',
//       // GET_EDIT_CUSTOMER:'UserController/edit_customer',
//       GET_MANAGER_RECORD:'UserController/maneger_view',// manager view
//       GET_ADMIN_RECORD:'UserController/admin_view',// admin view data
//       GET_MANAGER_MERCHANT:'UserController/get_manager_merchant',// get manager merchant
//       GET_ADMIN_MERCHANT:'UserController/get_merchant',// give admin merchant
//       GET_EDIT_ADMIN:'UserController/edit_admin',// edit admin
//       UPDATE_ADMIN_RECORD:'UserController/update_admin',//update admin
//       GET_EDIT_CUSTOMER:'UserController/edit',// adit customer
//       GET_UPDATE_CUSTOMER:'UserController/update',// update customer
//       GET_VERIFIED_MERCHANT:'UserController/getUnverifiedMerchant',//get verified and unverified merchant
//       GET_ADD_ADMIN:'UserController/insert_admin',//add admin
//       GET_UPDATE_MERCHANT:'UserController/merchant_update',
//       GET_Edit_STORE_INFO:'UserController/store_info',
//       UPDATE_STORE_INFO:'UserController/createMenuLink',

//   // vendor Report List API
//   VENDORS_REPORT_LIST: "vendor_report_api/vendor_list",

//   // Vendors Sales List API
//   VENDORS_SALES_REPORT: "vendor_report_api/vendors_sales_report",

//   // Vendors List for sales report API
//   VENDORS_LIST: "vendor_report_api/get_vendor_list",

//   // Order Refund Report
//   ORDER_REFUND_REPORT: "vendor_report_api/refund_report",

//       // Vendors API calls
//       LIST_ALL_VENDORS:"Vendor_api/vendor_list",

//       // vendors status update

//       STATUS_UPD_VENDORS:"Vendor_api/onlineAvail",

//   // NewsLetter List API
//   NEWS_LETTER_LIIST: "vendor_report_api/newsletter",

//   GET_REORDER_INVENTORY_LIST: "ReportingReactapi/get_reorder_inventory_list",

// });

// // All api calls are initialized in this component for this application
// //remove unwanted and credentials of other app

// module.exports = Object.freeze({
//   BASE_URL: 'https://sandbox.quickvee.com/',

//   // Categories API calls
//   ADD_CATOGRY: "CategoryReactapi/addnewcolln",
//   UPDATE_CATOGRY: "CategoryReactapi/updateCategory",
//   LIST_ALL_CATEGORIES: "CategoryReactapi/category_list",
//   DELETE_SINGLE_CATEGORIE: "CategoryReactapi/delete_category",
//   PRODUCT_LIST_BY_CATEGORY: "CategoryReactapi/product_list_by_category",
//   CATEGORIE_STATUS: "CategoryReactapi/categoryapi_status",
//   CATEGORIE_BANNER_REMOVE: "CategoryReactapi/delete_banner_image",
//   EDIT_CATOGRY_DATA: "CategoryReactapi/category_data",

//   // Defaults API Calls
//   LIST_ALL_Defaults: "DefaultReactapi/Default_list",
//   ADD_DEFAULTS: "DefaultReactapi/AddDefaultMenu",
//   EDIT_DEFAULTS: "DefaultReactapi/updateDefaultMenu",
//   DEFAULTDATA: "DefaultReactapi/DefaultData_list",
//   DELETE_SINGLE_DEFAULTS: "DefaultReactapi/deleteMenu",
//   DELETE_MULTI_DEFAULTS: "DefaultReactapi/deleteSelectedDefaults",

//   //Attributes API Calls
//   LIST_ALL_ATTRIBUTES: "Varientsapi/varients_list",
//   ADD_ATTRIBUTE: "Varientsapi/add_varient",

//   //Importdata API Calls
//   IMPORT_DATA: "Import_data_api/import",

//   //Loyalty Program
//   LOYALTY_PROGRAM_LIST: "LoyaltyProgramReactAPI/loyalty_program_list",

//   // Order API Calls (Offline and Online)
//   LIST_ALL_IN_STORE_ORDER: "api/orderoffline",
//   LIST_ALL_ONLINE_STORE_ORDER: 'api/newOrder',

//   //Storesettings API Calls

//   EMPLOYEE_LIST: "Store_setting_api/employee_list",
//   ADDEDIT_EMPLOYEE: "Store_setting_api/addEdit_employee",
//   DELETE_EMPLOYEE: "Store_setting_api/delete_employee",

//   // EMPLOYEE_LIST:"App/employee_list",

//   EMPLOYEE_DATA: "Store_setting_api/getEmployeeByEmpid",
//   PERMISSIONS_LIST: "Store_setting_api/permission_list",
//   UPDATE_PERMISSION: "Store_setting_api/update_Employee_permission",

//   // Store Setting - RegisterSettings api
//   GET_REGISTER_SETTINGS_DATA: "Profile_setup/inventory_register_setting",
//   UPDATE_REGISTER_SETTINGS: "Profile_setup/register_setting",

//   // Store Setting options api
//   GET_STORE_OPTIONS_DATA: "Store_setting_api/get_store_options_data",

//   // Update Store Setting options api
//   UPDATE_STORE_OPTIONS_DATA: "Store_setting_api/update_store_options_data",

//   //Coupon API Calls
//   COUPON_LIST: "Couponapi/get_coupon_details",
//   COUPON_STATUS_UPDATE: "Couponapi/show_online",
//   COUPON_DELETE: "Couponapi/delete_coupon",
//   COUPON_TITLE_CHECK: "Couponapi/check_coupon_title",

//   // System Access API Calls Listing and Update
//   LIST_ALL_SYSTEM_ACCESS: "api/Settings_api/system_access",
//   UPDATE_SYSTEM_ACCESS: "api/Settings_api/update_system_access",
//   END_DAY_ACTUAL_AMT: "api/Settings_api/day_end_actual_amt",

//   //Inventory
//   LIST_INVENTORY: 'api/Settings_api/inventory_list',
//   UPDATE_INVENTORY: 'api/Settings_api/update_inventory_info',

//   // get Store Setting alerts list api
//   GET_STORE_ALERTS_DATA: "Store_setting_api/store_alerts_list",

//   // get Store Setting alerts list api
//   UPDATE_STORE_ALERTS_DATA: "Store_setting_api/store_alerts_update",

//   // Get Store Setting Receipt List and Update API
//   GET_STORE_RECEIPT_DATA: "Store_setting_api/get_receipt_list",
//   UPDATE_RECEIPT_INFO_DATA: "Store_setting_api/update_receipt_info_list",

//   // Purchase API Calls
//   LIST_ALL_PARCHASE: "Purchase_ordersReactApi/purchase_order_list",

//   // Taxes API Calls
//   ADD_TAXES: "Taxesapi/add_Tax",
//   UPDATE_TAXES: "Taxesapi/update_Tax",
//   LIST_ALL_TAXES: "Taxesapi/Taxes_list",
//   DELETE_SINGLE_TAXE: "Taxesapi/delete_tax",
//   TAXE_CATEGORY_LIST: "Taxesapi/Taxes_category_list",

//   // All Reports API
//   CHECKID_VARIFICATION_REPORT_LIST: "ReportingReactapi/checkID_varification_report_list",

//   // for daily Report
//   LIST_DAILY_REPORT: "ReportingReactapi/daily_total_report",

//   NEW_ITEM_CREATED_BETWEEN_LIST: "ReportingReactapi/new_item_created_between_list",

//   TOP_SALLER_REPORT: "ReportingReactapi/top_seller_10",
//   INSTANT_ACTIVITY_REPORT: "ReportingReactapi/instant_po_activity_report",

//   //Employee List
//   LIST_ALL_EMPLOYEE: "ReportingReactapi/employee_list",

//   //INVENTORY_EXPORT
//   INVENTORY_EXPORT: "ExportInventory_api/exportCSV",
//   LIST_ALL_MERCHANTS: "ExportInventory_api/merchants_list",

//   //INVENTORY_EXPORT
//   INVENTORY_DUPLICATE: "Inventory_duplicate_api/duplicate_inventory",
//   SETTINGS_DUPLICATE: "Inventory_duplicate_api/duplicate_setting",

//   LIST_PAYMENT_METHOD_REPORT: "ReportingReactapi/credit_card_sales_report",

//   // });

//   // for item sales report
//   GET_ITEMWISE_SALE_LIST: "ReportingReactapi/get_itemwise_sale_list",

//   //Order Type

//   LIST_ALL_ORDER_TYPE: "ReportingReactapi/order_type",

//   LIST_TAXES_REPORT: "ReportingReactapi/taxes_report",

//   LIST_CURRENT_INVENTORY_REPORT: "ReportingReactapi/inventory_report",

//   //Super Admin - Permission
//   LIST_ALL_PERMISSION: "api/Create_permission_api/permission_list",
//   ADD_UPDATE_PERMISSION: "api/Create_permission_api/save_sub_permission",
//   DELETE_SINGLE_PERMISSION: "api/Create_permission_api/deleteperm",

//   // Store Order List API
//   GET_STORE_ORDER_DATA: "Store_order_api/get_store_order_data",

//   // Export Order Count Data
//   EXPORT_ORDER_COUNT_DATA: "Store_order_api/export_order_count_data",

//   // CATEGORY DUPLICATE
//   LIST_ALL_CATEGORIES_MECHANT_ID: "Category_duplicate_api/get_category",
//   CATEGORY_INVENTORY_DUPLICATE: "Category_duplicate_api/category_inventory",

//   // PRODUCT DUPLICATE
//   LIST_ALL_PRODUCTS: "Product_Duplicate_api/get_product",
//   PRODUCT_INVENTORY_DUPLICATE: "Product_Duplicate_api/product_inventory_duplicate",

//   // REPORT_BY_SALES_PERSON
//   REPORT_BY_SALES_PERSON: "ReportingReactapi/report_by_sales_person",

//   // GET_ORDER_SUMMERY_DETAILS:'Orders/order_details',

//   // -------------------------
//   // ---------------------
//   ADD_MERCHAN_EMPLOYEE:'UserController/add_admin',
//       GET_MERCHAN_STATE:'UserController/add',
//       GET_ADMIN_DATA:'UserController/get_user',// get merchant admin record
//       ADMIN_CHECK_USER:'UserController/check_user',// check email pending
//       CHECK_ADMIN_EMAIL:'UserController/check_user_type',//check admin email
//       ADMIN_GET_CUSTOMER:'UserController/get_customer',// get customer data
//       // GET_EDIT_CUSTOMER:'UserController/edit_customer',
//       // GET_EDIT_CUSTOMER:'UserController/edit_customer',
//       GET_MANAGER_RECORD:'UserController/maneger_view',// manager view
//       GET_ADMIN_RECORD:'UserController/admin_view',// admin view data
//       GET_MANAGER_MERCHANT:'UserController/get_manager_merchant',// get manager merchant
//       GET_ADMIN_MERCHANT:'UserController/get_merchant',// give admin merchant
//       GET_EDIT_ADMIN:'UserController/edit_admin',// edit admin
//       UPDATE_ADMIN_RECORD:'UserController/update_admin',//update admin
//       GET_EDIT_CUSTOMER:'UserController/edit',// adit customer
//       GET_UPDATE_CUSTOMER:'UserController/update',// update customer
//       GET_VERIFIED_MERCHANT:'UserController/getUnverifiedMerchant',//get verified and unverified merchant
//       GET_ADD_ADMIN:'UserController/insert_admin',//add admin
//       GET_UPDATE_MERCHANT:'UserController/merchant_update',

//   // vendor Report List API
//   VENDORS_REPORT_LIST: "vendor_report_api/vendor_list",
//   EDIT_VENDOR_DATA:"Vendor_api/edit_vendor",
//   UPDATE_VENDOR_DATA:"Vendor_api/update_vendor",
//   ADD_VENDOR_DATA:"Vendor_api/add_vendor",

//   // Vendors Sales List API
//   VENDORS_SALES_REPORT: "vendor_report_api/vendors_sales_report",

//   // Vendors List for sales report API
//   VENDORS_LIST: "vendor_report_api/get_vendor_list",

//   // Order Refund Report
//   ORDER_REFUND_REPORT: "vendor_report_api/refund_report",

//       // Vendors API calls
//       LIST_ALL_VENDORS:"Vendor_api/vendor_list",

//       // vendors status update

//       STATUS_UPD_VENDORS:"Vendor_api/onlineAvail",

//  // GET_ORDER_SUMMERY_DETAILS

//     GET_ORDER_SUMMARY_DETAILS:"Orders/order_details",

//   // NewsLetter List API
//   NEWS_LETTER_LIIST: "vendor_report_api/newsletter",

//   GET_REORDER_INVENTORY_LIST: "ReportingReactapi/get_reorder_inventory_list",

// });
