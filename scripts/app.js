'use strict';

/**
 * @ngdoc overview
 * @name cSpireGamingWebApp
 * @description
 * # cSpireGamingWebApp
 *
 * Main module of the application.
 */
angular.module('cSpireGamingWebApp', ['ngAnimate', 'ngCookies', 'ngResource', 'ngRoute', 'ngSanitize', 'ngTouch']).config(function ($routeProvider, $sceDelegateProvider, $locationProvider) {
    
    $locationProvider.hashPrefix('');

    if (window.history && window.history.pushState) {
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: true,
            rewriteLinks: false
        });
    }
    else {
        $locationProvider.html5Mode(false);
    }
    
    $routeProvider
        .when('/', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl',
            controllerAs: 'main'
        })
        .otherwise({
            redirectTo: '/'
        });

    $sceDelegateProvider.resourceUrlWhitelist([
    // Allow same origin resource loads.
    'self',
    // Allow loading from our assets domain.  Notice the difference between * and **.
    'https://www.google.com/**'
  ]);
});

//angular.module('cSpireGamingWebApp').config(['$locationProvider', function ($locationProvider) {
//
//
//}]);
