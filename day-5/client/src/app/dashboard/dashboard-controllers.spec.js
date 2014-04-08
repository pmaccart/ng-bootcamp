describe('Dashboard Controllers', function() {
  var controller, scope;

  beforeEach(module('dashboard.controllers'));

  describe('Dashboard Profile Controller', function () {
    beforeEach(inject(function ($controller, $rootScope) {
      scope = $rootScope.$new();

      controller = $controller('DashboardProfileCtrl', {
        $scope: scope
      });
    }));

    it('should populate the profile on the scope', function() {
      expect(scope.profile).toBeDefined();
    });
  });

  describe('Dashboard Contacts Controller', function () {
    beforeEach(inject(function ($controller, $rootScope) {
      scope = $rootScope.$new();

      controller = $controller('DashboardContactsCtrl', {
        $scope: scope
      });
    }));

    it('should populate the contacts on the scope', function() {
      expect(scope.contacts).toBeDefined();
    });
  });

  
});