sap.ui.define(
  ["sap/ui/core/mvc/Controller"],
  
  function (Controller) {
    "use strict";

    return Controller.extend("wizard.controller.Wizard", {
      onInit: function () {

      // set Finish Button text
      this.getView().byId("CreateProductWizard").setFinishButtonText("Send (setFinishButtonText)")
    },

    onDescriptionChange: function () {
      var bValue = !!this.getView().getModel("State").getProperty("/productDescription").length;

      // step number
      console.log(this.getView().byId("CreateProductWizard").getProgress());

      // go to next step
      this.getView().byId("CreateProductWizard").nextStep();

      // show next button
      this.getView().byId("Step2").setValidated(bValue);
    },

	  onCompleteStep2: function () {
		  console.log("Complete Step 2");
    },

	  onCompleteStep3: function () {
		  console.log("Complete Step 3");
    },

    // if finish button press
    onSendButtonPress: function () {
      console.log(this.getView().getModel("State").getProperty("/"));
    },
    });
  }
);
