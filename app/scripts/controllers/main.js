'use strict';

/**
 * @ngdoc function
 * @name me2uApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the me2uApp
 */
angular.module('me2uApp')
  .controller('MainCtrl', function ($scope, $location, $rootScope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.receive = function () {

      var  msisdn = localStorage.msisdn,
      network = localStorage.network,
      me = this;

      //alert("Msisdn: " + $rootScope.msisdn + " NW: " + $rootScope.selectedNW);
      //alert("Msisdn: " + msisdn + " NW: " + network);

      if (angular.isUndefined (msisdn) || angular.isUndefined (network) || msisdn === '' || network === ''){
        $location.path ('/receive');
      } else {
        $location.path ('/show');
      }
    };

    $scope.send = function () {
      $('#scan').show();

      $location.path ('/send');
    }
  });
