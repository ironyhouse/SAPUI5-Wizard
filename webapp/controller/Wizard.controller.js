sap.ui.define(
  ["sap/ui/core/mvc/Controller"],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (Controller) {
    "use strict";

    return Controller.extend("wizard.controller.Wizard", {
      onInit: function () {
        console.log(this.getView().getModel("device"));
      },
    });
  }
);
