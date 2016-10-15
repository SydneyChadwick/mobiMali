'use strict';

/**
 * @ngdoc function
 * @name me2uApp.controller:SendCtrl
 * @description
 * # SendCtrl
 * Controller of the me2uApp
 */
angular.module('me2uApp')
  .controller('SendCtrl', function ($scope, $rootScope, $location) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $rootScope.targetMsisdn = '';
    $rootScope.targetNetwork = '';


    $scope.onSuccess = function(data) {
        console.log(data);
        //Format: 0728092083_V
        var arr = data.split("_");
        $rootScope.targetMsisdn = arr[0];
        $rootScope.targetNetwork = arr[1];

        $('#scan').hide();
        $location.path ('/amount');
    };

    $scope.onError = function(error) {
        console.log(error);
    };

    $scope.onVideoError = function(error) {
        console.log(error);
    };
  });
