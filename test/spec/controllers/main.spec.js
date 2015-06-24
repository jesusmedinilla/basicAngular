
describe('Unit: MainController', function()
{
    //beforeEach(module('myApp'));

    /*var ctrl, scope;
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        ctrl = $controller('LoginController', {
            $scope: scope
        });
    }));*/

    describe('service: original resource', function () {
        //var $httpBackend;
        var $rootScope;

        beforeEach(module('myApp'));

        beforeEach(inject(function ($injector) {
            //$httpBackend = $injector.get('$httpBackend');
            $rootScope = $injector.get('$rootScope');
            UserService = $injector.get('UserService');
        }));

        it('should send a request to say hello', function () {
            //$httpBackend.expect('GET', '/say-hello').respond(200, 'success');

            handleResult = function( result )
            {
                expect("1").toEqual("2");
            }

            $rootScope.$apply(
            UserService.login('jesus','0000',handleResult));

            $rootScope.$apply()
            //$httpBackend.flush();
            //expect(OriginalResource.saidHello).toBe(true);
        });

    });

    /*it('fff',
        function() {
           expect("1").toEqual("2");
       });*/
})