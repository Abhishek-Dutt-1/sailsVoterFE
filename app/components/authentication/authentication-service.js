'use strict';

Authentication.service('AuthenticationService', ['$http', 'ApiService', function($http, ApiService) { 

    this.currentUserLoggedIn = false;
    //var ANONYMOUS_USER = { firstname: 'Guest User', lastname: '', userroles: [{name: 'Anonymous'}] };
    //this.currentUser = ANONYMOUS_USER;
    this.currentUser = {};
	
    this.logInUser = function(user) {
        this.currentUserLoggedIn = true;
        this.currentUser = user;
        if(user.token) {
            // Add header to all $http requests now onwards
            $http.defaults.headers.common.Authorization = 'Bearer ' + user.token;
        };
    };

    this.logOutUser = function() {
        if(this.currentUser.token) {
            // Clear Token from $http headers
            delete $http.defaults.headers.common.Authorization;
        };
        this.currentUserLoggedIn = false;
        //this.currentUser = ANONYMOUS_USER;
    };

    this.isCurrentUserLoggedIn = function() {
        return this.currentUserLoggedIn;
    };

    this.getCurrentUser = function() {
		return this.currentUser;
    };

}]);
