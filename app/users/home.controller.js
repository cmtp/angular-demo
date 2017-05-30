(function() {
'use strict';

    angular
        .module('app.users')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$log', 'UsersService'];
    function HomeController($log, UsersService) {
        var vm = this;
        // vm.users = users.data;

        activate();

        ////////////////

        function activate() {
            UsersService.getUsers().then(function (response) {
                vm.users = response.data;
                $log.log(vm.users);
            }).catch(function (err) {
                $log.error(err);
            })
        }
    }
})();