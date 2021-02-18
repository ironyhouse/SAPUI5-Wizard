sap.ui.define(
  ["sap/ui/core/mvc/Controller"],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (Controller) {
    "use strict";

    return Controller.extend("wizard.controller.Wizard", {
      onInit: function () {

		// Finish Button text
		this.getView().byId("CreateProductWizard").setFinishButtonText("Send (setFinishButtonText)")
      },

	  onSendButtonPress: function () {
		console.log(this.getView().getModel("State").getProperty("/"));
      },

	  onCompleteStep2: function () {
		console.log("Complete Step 2");
      },

	  onCompleteStep3: function () {
		console.log("Complete Step 3");
      },
    });
  }
);
