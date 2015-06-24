(function () {
	'use strict';


	angular
		.module('myApp')
		.factory('Wine', Wine)
		.factory('CrudService', CrudService);

	CrudService.$inject = ['Wine','$q'];
	function CrudService(Wine, $q) {
		var service = {};

		service.getList = getList;
		service.updateItem = updateItem;
		service.createItem = createItem;
		service.getItemById = getItemById;
		service.deleteItem = deleteItem;

		return service;

		function getList()
		{
			var deferred = $q.defer();

			Wine.query({},
				function( result )
				{
					deferred.resolve({ success: true, result : result });
				},
				function()
				{
					deferred.resolve({ success: false, message: 'Error recuperando el listado' });
				});

			return deferred.promise;
		}

		function updateItem( item )
		{
			var deferred = $q.defer();

			item.$update( { wineId : item.id},
				function( result )
				{
					deferred.resolve({ success: true, result : result });
				},
				function()
				{
					deferred.resolve({ success: false, message: 'Error' });
				});

			return deferred.promise;
		}

		function createItem( item )
		{
			var deferred = $q.defer();

			var newItem = new Wine();
			newItem.name = item.name;

			newItem.$save({},
				function( result )
				{
					deferred.resolve({ success: true, result : result });
				},
				function()
				{
					deferred.resolve({ success: false, message: 'Error' });
				});

			return deferred.promise;
		}

		function getItemById( id )
		{
			var deferred = $q.defer();

			Wine.get({wineId:id},
				function( result )
				{
					deferred.resolve({ success: true, result : result });
				},
				function()
				{
					deferred.resolve({ success: false, message: 'Error' });
				});

			return deferred.promise;
		}

		function deleteItem( item )
		{
			var deferred = $q.defer();

			item.$delete( {wineId:item.id},
				function( result )
				{
					deferred.resolve({ success: true, result : result });
				},
				function()
				{
					deferred.resolve({ success: false, message: 'Error' });
				});

			return deferred.promise;
		}



	}

	Wine.$inject = ['$resource'];
	function Wine($resource)
	{
		return $resource('http://localhost:8080/cellar/api/wines/:id', {wineId : '@id'},
		{
			update : { method : 'PUT', dataType: 'json', headers : { 'Content-Type' : 'application/json;charset=UTF-8'} }
		});
	}



})();


/*angular.module('services', ['ngResource'])
		
.factory('Wine', ['$resource', function($resource) 
{
	return $resource('http://localhost:8080/cellar/api/wines/:wineId', {wineId : '@id'},
	{
		update : { method : 'PUT', dataType: 'json', headers : { 'Content-Type' : 'application/json;charset=UTF-8'} }
	});
}])*/







