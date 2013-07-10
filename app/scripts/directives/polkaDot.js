'use strict';

angular.module('templateFailApp')
  .directive('polkaDot', function () {
    return {
      templateUrl: 'views/directives/polka-dot.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the polkaDot directive');
      }
    };
  });
