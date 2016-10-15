'use strict';

describe('Controller: ReadCtrl', function () {

  // load the controller's module
  beforeEach(module('me2uApp'));

  var ReadCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ReadCtrl = $controller('ReadCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ReadCtrl.awesomeThings.length).toBe(3);
  });
});
