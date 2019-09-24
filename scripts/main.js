(function (window) {
  'use strict';
  var FORM_SELECTOR = '[data-coffee-order="form"]';
  var CHECKLIST_SELECTOR = '[data-coffee-order="checklist"]';
  var PAYMENT_SELECTOR = '[data-coffee-order="payment-form"]';

  var App = window.App;
  var Truck = App.Truck;
  var DataStore = App.DataStore;
  var FormHandler = App.FormHandler;
//  var CheckList = App.CheckList;

  var myTruck = new Truck('Serenity', new DataStore());
  window.myTruck = myTruck;

//  var checkList = new CheckList(CHECKLIST_SELECTOR);
//  checkList.addClickHandler(myTruck.deliverOrder.bind(myTruck));

//  var formHandler = new FormHandler(FORM_SELECTOR);
  var paymentHandler = new FormHandler(PAYMENT_SELECTOR);

  paymentHandler.addSubmitHandler();

  // formHandler.addSubmitHandler(function (data) {
  //   myTruck.createOrder.call(myTruck,data);
  //   checkList.addRow.call(checkList, data);
  // });
//  console.log(formHandler);
})(window);
