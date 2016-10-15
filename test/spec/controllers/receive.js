'use strict';

describe('Controller: ReceiveCtrl', function () {

  // load the controller's module
  beforeEach(module('me2uApp'));

  var ReceiveCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ReceiveCtrl = $controller('ReceiveCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ReceiveCtrl.awesomeThings.length).toBe(3);
  });
});
