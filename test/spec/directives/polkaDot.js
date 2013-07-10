'use strict';

describe('Directive: polkaDot', function () {
  beforeEach(module('templateFailApp'));
  beforeEach(module('views/directives/polka-dot.html'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<polka-dot></polka-dot>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the polkaDot directive');
  }));
});
