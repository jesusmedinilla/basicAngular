define(['myApp'], function () {
        myApp.cpRegister('LoginController', LoginController);


//(function () {
//    'use strict';

        // LAZY LOAD
//    angular.module('myApp').cpRegister('LoginController', LoginController );


        LoginController.$inject = ['$location', 'AuthenticationService', 'FlashService'];
        function LoginController($location, AuthenticationService, FlashService) {
            var vm = this;

            vm.login = login;

            (function initController() {
                // reset login status
                AuthenticationService.ClearCredentials();
            })();

            function login() {
                vm.dataLoading = true;
                AuthenticationService.Login(vm.username, vm.password, function (response) {
                    if (response.success) {
                        AuthenticationService.SetCredentials(vm.username, vm.password);
                        $location.path('/');
                    } else {
                        FlashService.Error(response.message);
                        vm.dataLoading = false;
                        //alert(response.message)
                    }
                });
            };
        }
    }
)
//})();
