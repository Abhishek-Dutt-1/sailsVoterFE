'use strict';

/**
 * @ngdoc function
 * @name sailsVoterFeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sailsVoterFeApp
 */

Authentication.controller('registerationController', ['$scope', 'ApiService', function($scope, ApiService) {

    $scope.signupFormProcessing = false;
    $scope.serverErrors = false;

    $scope.signupNewUser = function(newUser) {
        console.log(newUser);
        $scope.serverErrors = false;
        //$scope.signupFormProcessing = true;
        if($scope.signupForm.$valid) {
            ApiService.Auth.createUser(newUser, function(msg) {
                $scope.registerFormProcessing = false;
                console.log(msg);
            }, function(err) {
                $scope.registerFormProcessing = false;
                console.log(err.data);
                $scope.serverErrors = err.data;
            });
        } else {
            $scope.registerFormProcessing = false;
        }

    };

}]);
