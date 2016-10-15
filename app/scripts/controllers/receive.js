'use strict';

/**
 * @ngdoc function
 * @name me2uApp.controller:ReceiveCtrl
 * @description
 * # ReceiveCtrl
 * Controller of the me2uApp
 */
angular.module('me2uApp')
  .controller('ReceiveCtrl', function ($rootScope, $scope, $location) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $rootScope.selectedNW = 'Network provider:';
    $rootScope.msisdn;

    $scope.selectNW = function (network) {
      $rootScope.selectedNW = network;
      //OrderBasket.BusinessUnit (unit);
    };

    $scope.createQR = function () {
      localStorage.msisdn = $rootScope.msisdn;
      localStorage.network = $rootScope.selectedNW;

      //alert("Msisdn: " + $rootScope.msisdn + " NW: " + $rootScope.selectedNW);
      $location.path ('/show');
    }

    $scope.updateMsisdn = function(msisdnIn) {
      $rootScope.msisdn = msisdnIn;
    }

  });
