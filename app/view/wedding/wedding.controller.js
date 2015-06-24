(function () 
{
    'use strict';

//    angular
//        .module('myApp').cp.register
//        .controller('WineListCtrl', WineListCtrl)
//        .controller('WineDetailCtrl', WineDetailCtrl);

 // LAZY LOAD
    angular.module('myApp').cp.register('WeddingListCtrl', WeddingListCtrl );
    
    WeddingListCtrl.$inject = ['CrudFactory','FlashService'];
    function WeddingListCtrl( CrudFactory, FlashService )
    {
    	//this.weddings = CrudFactory.getList();
        var vm = this;
        vm.selectedView = 'default';
        vm.weddings = [];

        CrudFactory.getList().then(function (response) {
            if (response.success) {
                //FlashService.Success('Registration successful', true);
                vm.weddings = response.result;
            }
            else {
                FlashService.Error(response.message);
            }
        });


        this.addWedding = function()
    	{
    		window.location = "#/weddings/add";
    	}
    }   
})();
