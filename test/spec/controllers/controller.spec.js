
describe('Unit: MainController', function()
{
    beforeEach(module('myApp'));

    var $rootScope;


    var ctrl, scope;

    beforeEach(inject(function($controller, $rootScope, $injector, $controllerProvider)
    {
        scope = $rootScope.$new();
        myApp.config( $controllerProvider );

        $rootScope = $injector.get('$rootScope');

        ctrl = $controller('LoginController', {
            $scope: scope
        });
    }));


    it('should send a request to say hello', function ()
    {
        LoginController.login();

        $rootScope.$apply()
        //$httpBackend.flush();
        //expect(OriginalResource.saidHello).toBe(true);
    });



    /*it('fff',
        function() {
           expect("1").toEqual("2");
       });*/
})