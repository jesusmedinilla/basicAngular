(function () 
{
    'use strict';

//    angular
//        .module('myApp').cp.register
//        .controller('WineListCtrl', WineListCtrl)
//        .controller('WineDetailCtrl', WineDetailCtrl);

 // LAZY LOAD
    angular.module('myApp').cp.register('WeddingDetailCtrl', WeddingDetailCtrl );
    
    WeddingDetailCtrl.$inject = [ 'CrudFactory', '$routeParams', 'FlashService' ];
    function WeddingDetailCtrl( CrudFactory, $routeParams, FlashService )
    {
		var vm = this;
		vm.wedding = {};
		vm.dataLoading = false;
		vm.loadedId = $routeParams.id;

		if( vm.loadedId !== undefined ) {
			vm.dataLoading = true;
			CrudFactory.getItemById($routeParams.id).then(function (response) {
				if (response.success) {
					//FlashService.Success('Registration successful', true);
					vm.wedding = response.result;
					vm.dataLoading = false;
				}
				else {
					FlashService.Error(response.message);
					vm.dataLoading = false;
				}
			});
		}

    	this.saveWedding = function() 
    	{
			vm.dataLoading = true;

			if (this.wedding.id !== undefined ) {
				CrudFactory.updateItem(this.wedding).then(function (response) {
					if (response.success) {
						vm.dataLoading = false;
						FlashService.Success('Boda actualizada correctamente', true);
						window.location = "#/";
					}
					else {
						vm.dataLoading = false;
						FlashService.Error(response.message);
					}
				});
			}
			else {
					CrudFactory.createItem(this.wedding).then(function (response) {
						if (response.success) {
							vm.dataLoading = false;
							FlashService.Success('Boda creada correctamente', true);
							window.location = "#/";
						}
						else {
							vm.dataLoading = false;
							FlashService.Error(response.message);
						}
					});
			}
    	}
    	
    	this.deleteWedding = function() 
    	{
			vm.dataLoading = true;
			vm.loadedId = undefined;

			CrudFactory.deleteItem( this.wedding ).then(function (response) {
				if (response.success) {
					FlashService.Success('Boda eliminada correctamente', true);
					window.location = "#/";
					vm.dataLoading = false;
				}
				else {
					FlashService.Error(response.message);
					vm.dataLoading = false;
				}
			});
    	}
    }
    
    
})();
