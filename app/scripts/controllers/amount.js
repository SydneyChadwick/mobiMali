'use strict';

/**
 * @ngdoc function
 * @name me2uApp.controller:SendCtrl
 * @description
 * # SendCtrl
 * Controller of the me2uApp
 */
angular.module('me2uApp')
  .controller('AmountCtrl', function ($scope, $rootScope, $location) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $rootScope.moneys = "";
    $rootScope.sendNw = localStorage.network;

    //alert("Msisdn: " + $rootScope.msisdn + " NW: " + $rootScope.selectedNW);
    //alert("Msisdn: " + msisdn + " NW: " + network);

    if (angular.isUndefined ($rootScope.sendNw) || $rootScope.sendNw === ''){
      $rootScope.sendNw = "Network provider:";
    }

    $scope.updateAmount = function(amountIn) {
      $rootScope.amount = amountIn;
    }

    $scope.selectNW = function (network) {
      $rootScope.sendNw = network;
      //OrderBasket.BusinessUnit (unit);
    };

    $scope.payMoneh = function () {
      if($rootScope.targetNetwork !== $rootScope.sendNw.substring(0, 1)) {
        alert("Not supported!");
      } else {
        var ussdString = "*141*6328*" + $rootScope.targetMsisdn + "*" + $rootScope.amount + "#";
        alert(ussdString);
        window.open('tel:' + ussdString, '_system');

        $location.path ('/main');
      }
    }
  });
