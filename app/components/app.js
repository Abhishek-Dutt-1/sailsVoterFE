'use strict';

/**
 * @ngdoc overview
 * @name sailsVoterFeApp
 * @description
 * # sailsVoterFeApp
 *
 * Main module of the application.
 */
var sailsVoterFeApp = angular.module('sailsVoterFeApp', [
    'ngRoute',
    'ngResource',
    'Api',
    'Authentication'
]);

sailsVoterFeApp.config(['$routeProvider', function ($routeProvider) {

    $routeProvider
        .when('/login', {
            templateUrl: 'components/authentication/login-view.html',
            controller: 'loginController',
        })
        .when('/signup', {
            templateUrl: 'components/authentication/registeration-view.html',
            controller: 'registerationController',
        })
        .when('/logout', {
            templateUrl: 'components/authentication/logout-view.html',
            controller: 'logout',
        })
        .otherwise({
            redirectTo: '/'
        });

}]);
