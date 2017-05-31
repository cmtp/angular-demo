(function() {
'use strict';

    angular
        .module('app.users')
        .controller('ReposController', ReposController);

    ReposController.$inject = ['$stateParams', 'ReposService', 'UsersService'];
    function ReposController($stateParams, ReposService, UsersService) {
        var rvm = this;
        rvm.id = $stateParams.id;
        activate();

        ////////////////

        function activate() {
            console.log($stateParams.id);
            
            ReposService.getRepositories($stateParams.id).then(function (res) {
                rvm.repos = res.data;
                console.log(res);
            }).catch(function (err) {
                console.log(err);
            });
        }
    }
})();