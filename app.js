(function() {
  'use strict';

  angular.module('LunchChecker', [])

    .controller('LunchController', LunchController);

  LunchController.$inject = ['$scope'];

  function LunchController($scope) {
    $scope.lunch = "";
    $scope.message = "";

    $scope.checkLunch = function(lunchList) {
      if (lunchList === "") $scope.message = 'Please enter data first';
      else {
        var items = lunchList.split(',');
        items = items.filter(function(e) {
          return e != "";
        });
        $scope.message = (items.length > 3) ? 'Too much!' : 'Enjoy!';
      }

    };
  }

})();
