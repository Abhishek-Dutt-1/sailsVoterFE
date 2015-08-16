'use strict';

/**
 * @ngdoc function
 * @name sailsVoterFeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sailsVoterFeApp
 */

Authentication.controller('registerationController', ['$scope', 'ApiService', 'AuthenticationService', function($scope, ApiService, AuthenticationService) {

    $scope.signupFormProcessing = false;
    $scope.serverErrors = false;

    $scope.signupNewUser = function(newUser) {
        console.log(newUser);
        $scope.serverErrors = false;
        $scope.signupFormProcessing = true;
        if($scope.signupForm.$valid) {
            ApiService.Auth.createUser(newUser, function(msg) {
                $scope.registerFormProcessing = false;
                // Registration successfull, log in the user directly
                AuthenticationService.logInUser(msg.user);
                // TODO: Redirect to reffering url, which would be query string in the url
                // $location(previous)
                console.log(msg);
            }, function(err) {
                $scope.serverErrors = err.data;
                $scope.registerFormProcessing = false;
                console.log(err.data);
            });
        } else {
            $scope.registerFormProcessing = false;
        }

    };

}]);
