'use strict';

/**
 * @ngdoc function
 * @name me2uApp.controller:ShowCtrl
 * @description
 * # ShowCtrl
 * Controller of the me2uApp
 */
angular.module('me2uApp')
  .controller('ShowCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.msisdn = localStorage.msisdn;
    $scope.network = localStorage.network;
    $scope.qrString = $scope.msisdn + "_" + $scope.network.substring(0,1);
  });
