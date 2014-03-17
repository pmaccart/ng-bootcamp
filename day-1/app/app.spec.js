// app.spec.js
describe('MyController', function() {
  var controller, scope;
  beforeEach(function() {
    scope = {};
    controller = new MyController(scope);
  })

  it('should set the name property on the scope', function() {
    expect(scope.name).toBe('Phil');
  });
});