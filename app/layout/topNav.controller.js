(function() {
    'use strict';

    angular
        .module('app.layout')
        .controller('TopNavController', TopNavController);

    TopNavController.$inject = ['$stateParams', 'UsersService'];
    function TopNavController($stateParams, UsersService) {
        var vm = this;
        vm.id = $stateParams.id;

        activate();

        ////////////////

        function activate() {
            UsersService.getUser(vm.id).then(function (res) {
                console.log(res);
                if( undefined !== $stateParams.id ) {
                    vm.user = res.data;
                }
            }).catch(function (err) {
                console.log(err);
            });
        }
    }
})();