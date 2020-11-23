sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
	// "logaligroup/SAPUI5/model/models",
	// "sap/ui/model/resource/ResourceModel"
	//], function (Controller, MessageToast, models, ResourceModel) {
], function (Controller, MessageToast) {
	"use strict";

	return Controller.extend("logaligroup.SAPUI5.controller.App", {

		onInit: function () {

		},

		onOpenHeader: function () {
			this.getOwnerComponent().openHelloDialog();
		}
	});
});