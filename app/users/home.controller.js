(function() {
'use strict';

    angular
        .module('app.users')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$log', 'UsersService'];
    function HomeController($log, UsersService) {
        var hvm = this;
        hvm.last = 0;
        // functions
        hvm.getUsersFrom = getUsersFrom;
        
        activate();

        ////////////////

        function activate() {
            UsersService.getUsers().then(function (response) {
                hvm.users = response.data;
            }).catch(function (err) {
                $log.error(err);
            });
            // activate jquery tooltip
            $(document).ready(function(){
                $('.tooltipped').tooltip({delay: 50});
            });
        }

        function getUsersFrom(id) {
            $log.log(id);
            UsersService.getUsersFrom(id).then(function (response) {
                $log.log(response);
                hvm.users = response.data;
            }).catch(function (err) {
                $log.error(err);
            });
        }
    }
})();