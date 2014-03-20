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

describe('ParentController', function() {
  var controller, scope;
  beforeEach(function() {
    scope = {};
    controller = new ParentController(scope);
  });

  it('should set the parent name property on the scope', function() {
    expect(scope.parentName).toBe('Parent Controller');
  })
});

describe('ChildController', function() {
  var controller, scope;
  beforeEach(function() {
    scope = {};
    controller = new ChildController(scope);
  });

  it('should set the child name property on the scope', function() {
    expect(scope.childName).toBe('Child Controller');
  });
});

describe('RepeatAndFilterController', function() {
  var controller, scope;
  beforeEach(function() {
    scope = {};
    controller = new RepeatAndFilterController(scope);
  });

  it('should set the items property on the scope', function() {
    expect(scope.items).toBeDefined();
    expect(scope.items.length).toBe(8);
  })
});

describe('BindingsAndEventsController', function() {
  var controller, scope;
  beforeEach(function() {
    scope = {};
    controller = new BindingsAndEventsController(scope);
  });

  it('should initialize the counter to 0', function() {
    expect(scope.counter).toBe(0);
  });

  it('should increment the counter', function() {
    expect(scope.counter).toBe(0);

    scope.incrementCounter();
    expect(scope.counter).toBe(1);
  });
});
