(function() {
'use strict';

    angular
        .module('app.users')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$log', 'UsersService'];
    function HomeController($log, UsersService) {
        var vm = this;
        // functions
        vm.getUsersFrom = getUsersFrom;
        
        activate();

        ////////////////

        function activate() {
            UsersService.getUsers().then(function (response) {
                vm.users = response.data;
                $log.log(response);
            }).catch(function (err) {
                $log.error(err);
            });
        }

        function getUsersFrom(id) {
            $log.log(id);
            UsersService.getUsersFrom(id).then(function (response) {
                $log.log(response);
            }).catch(function (err) {
                $log.error(err);
            });
        }
    }
})();