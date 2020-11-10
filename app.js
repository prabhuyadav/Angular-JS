(function() {

'use strict';

angular.module('shoppingListCheckOffApp', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('CheckOffService', CheckOffService);

ToBuyController.$inject = ['CheckOffService'];

function ToBuyController (CheckOffService){
  var showList = this;

  showList.items = CheckOffService.getItems();

  showList.buyItem = function(index){
    CheckOffService.buyItem(index);
  }

}

AlreadyBoughtController.$inject = ['CheckOffService'];

function AlreadyBoughtController (CheckOffService){
  var bought = this;

  bought.items = CheckOffService.getBoughtItems();

}


function CheckOffService() {
  var service = this;

  var boughtItems = [];

  var items = [
    {
      name : 'cookies',
      quantity : 10
    },
    {
      name : 'bananas',
      quantity : 5
    },
    {
      name : 'apples',
      quantity : 7
    },
    {
      name : 'oranges',
      quantity : 9
    },
    {
      name : 'snickers',
      quantity : 100
    },
    {
      name : 'drinks',
      quantity : 10
    }
  ];

  service.buyItem = function(index){
    boughtItems.push(items[index]);
    items.splice(index, 1);
  };

  service.getItems = function(){
    return items;
  };

  service.getBoughtItems = function(){
    return boughtItems;
  };
}



})();
