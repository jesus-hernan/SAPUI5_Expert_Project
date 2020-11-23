sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"../model/formatterCustomer",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
	], function(Controller, JSONModel, formatterCustomer, Filter, FilterOperator){
		return Controller.extend("logaligroup.SAPUI5.controller.CustomerList", {

			onInit: function(){
				var oViewModel = new JSONModel({
					currency: "USD"
				});
				this.getView().setModel(oViewModel, "view");
			},
				onFilterCustomers: function(oEvent) {
				//build filter array
				var aFilter = [];
	 			var sQuery = oEvent.getParameter("query"); 
	 			if (sQuery) { 
	 				aFilter.push(new Filter("ContactName", FilterOperator.Contains, sQuery)); 
	 			} 
	
	 			//filter binding 
	 			var oList = this.byId("customerList"); 
	 			var oBinding = oList.getBinding("items"); 
	 			oBinding.filter(aFilter); 
	 		} 
		});
	});