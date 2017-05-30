(function() {
'use strict';

    angular
        .module('app.users')
        .factory('UsersService', UsersService);

    UsersService.$inject = ['$http', 'URL_SERVICE'];
    function UsersService($http, URL_SERVICE) {
        var service = {
            getUsers:getUsers,
            getUsersFrom: getUsersFrom
        };
        
        return service;

        ////////////////
        function getUsers() {
            var global = $http({
                url: URL_SERVICE.APPLICATION + '/users',
                method: 'GET'
            });

            return global;
        }

        function getUsersFrom( last ) {
            var global = $http({
                url: URL_SERVICE.APPLICATION + '/users?since=' + last,
                method: 'GET'
            });
            return global;
        }
    }
})();