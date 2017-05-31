(function() {
'use strict';

    angular
        .module('app.users')
        .factory('ReposService', ReposService);

    ReposService.$inject = ['$http', 'URL_SERVICE'];
    function ReposService($http, URL_SERVICE) {
        var service = {
            getRepositories:getRepositories
        };
        
        return service;

        ////////////////
        function getRepositories(id) {
            var $global = $http({
                url: URL_SERVICE.APPLICATION + '/users/' + id + '/repos',
                method: 'GET'
            });
            return $global;
        }
    }
})();