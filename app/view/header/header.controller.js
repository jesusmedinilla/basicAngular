(function () {
    'use strict';

    // Normal LOAD
    
//    angular
//        .module('myApp')
//        .controller('HeaderCtrl', HeaderCtrl);

    // LAZY LOAD
    angular.module('myApp').cp //Acceso al controller Provider para cargarlo
    		.register('HeaderCtrl', HeaderCtrl );
    
    
    HeaderCtrl.$inject = ['$rootScope','$scope', '$location'];
    function HeaderCtrl($rootScope, $scope, $location) 
    {
    	$scope.isLogged = false;

    	$rootScope.$watch( 
    			function(rootScope) 
    			{ 
    				return $rootScope.globals.currentUser;
    			},
                function(newValue, oldValue) 
                {
					$scope.isLogged = newValue !== undefined;
    				if( $scope.isLogged )
    					$scope.welcomeMessage = "Bienvenido, " + $rootScope.globals.currentUser.username;
                }
               );
    	
    }
})();

