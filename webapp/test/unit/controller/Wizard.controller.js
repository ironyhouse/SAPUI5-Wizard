/*global QUnit*/

sap.ui.define([
	"wizard/controller/Wizard.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Wizard Controller");

	QUnit.test("I should test the Wizard controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
