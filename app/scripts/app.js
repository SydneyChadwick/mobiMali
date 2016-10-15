'use strict';

/**
 * @ngdoc overview
 * @name me2uApp
 * @description
 * # me2uApp
 *
 * Main module of the application.
 */
angular
  .module('me2uApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'monospaced.qrcode',
    'qrScanner'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/send', {
        templateUrl: 'views/send.html',
        controller: 'SendCtrl',
        controllerAs: 'send'
      })
      .when('/receive', {
        templateUrl: 'views/receive.html',
        controller: 'ReceiveCtrl',
        controllerAs: 'receive'
      })
      .when('/show', {
        templateUrl: 'views/show.html',
        controller: 'ShowCtrl',
        controllerAs: 'show'
      })
      .when('/amount', {
        templateUrl: 'views/amount.html',
        controller: 'AmountCtrl',
        controllerAs: 'amount'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
