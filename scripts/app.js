'use strict';

/**
 * @ngdoc overview
 * @name cSpireGamingWebApp
 * @description
 * # cSpireGamingWebApp
 *
 * Main module of the application.
 */
angular.module('cSpireGamingWebApp', ['ngAnimate', 'ngCookies', 'ngResource', 'ngRoute', 'ngSanitize', 'ngTouch']).config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl',
            controllerAs: 'main'
        })
        .otherwise({
            redirectTo: '/'
        });
});
