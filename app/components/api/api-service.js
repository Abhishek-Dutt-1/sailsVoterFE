'use strict'

Api.service('ApiService', ['$resource', function($resource) {

    var serverAddress = 'http://localhost:1337';

    this.Auth = $resource(serverAddress+'', null, {
        'createUser': { method: 'POST', url: serverAddress+'/thing/createstuff/user' }  // aka register
    });

}]);
