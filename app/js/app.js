var myApp = 
	angular
	        .module('myApp', ['ngResource','routing', 'ngCookies', 'ui.bootstrap', 'ngAnimate']) //'services'
	        .config(config)
	        .run(run)
	        .run(startParse);


// Guardamos el controllerProvider para poder hacer el lazy load de los controllers
run.$inject = ['$controllerProvider'];
function config($controllerProvider) 
{
	myApp.cp = $controllerProvider;
	myApp.cpRegister = $controllerProvider.register; // Necesario para el testeo
}

run.$inject = ['$rootScope', '$location', '$cookieStore', '$http'];
function run($rootScope, $location, $cookieStore, $http) 
{
    // keep user logged in after page refresh
    $rootScope.globals = $cookieStore.get('globals') || {};
    if ($rootScope.globals.currentUser) {
        $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
    }

    $rootScope.$on('$locationChangeStart', function (event, next, current) {
        // redirect to login page if not logged in and trying to access a restricted page
        var restrictedPage = $.inArray($location.path(), ['/login', '/register']) === -1;
        var loggedIn = $rootScope.globals.currentUser;
        if (restrictedPage && !loggedIn) {
            $location.path('/login');
        }
    });
}

function startParse()
{
	Parse.initialize("atGimMnC7AN88LEtBepThZqhTGTSS7zLCkutq54z", "eMXl6flzsyT48vya1L6smLLRvVf0aGIUeXn4tHTv");
	
	var TestObject = Parse.Object.extend("TestObject");
	var testObject = new TestObject();
	  testObject.save({foo: "bar"}, {
	  success: function(object) {
	    $(".success").show();
	  },
	  error: function(model, error) {
	    $(".error").show();
	  }
	})
}

