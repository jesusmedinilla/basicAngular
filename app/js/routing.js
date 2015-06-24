angular.module('routing', ['ngRoute'])

.config(['$routeProvider',function ($routeProvider) 
{
	$routeProvider
		.when('/login', {
			controller: 'LoginController',
			templateUrl: 'view/login/login.view.html',
			controllerAs: 'vm'
		})
		.when('/', {
			controller: 'WeddingListCtrl',
			controllerAs: "vm",
			templateUrl: 'view/wedding/weddingList.view.html'
		})
		.when('/weddings/add', {
			controller: 'WeddingDetailCtrl',
			controllerAs: "vm",
			templateUrl: 'view/wedding/weddingDetails.view.html'
		})
		.when('/weddings/:id', {
			controller: 'WeddingDetailCtrl',
			controllerAs: "vm",
			templateUrl: 'view/wedding/weddingDetails.view.html'
		})
		.when('/register', {
			controller: 'RegisterController',
			controllerAs: "vm",
			templateUrl: 'view/register/register.view.html'
		})
		
		.otherwise({ redirectTo: '/login' });
	
}]);
