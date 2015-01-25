'use strict';

angular.module('daftLibs')
.directive('jjGame', function(Game) {
  return {
    restrict: 'E',
    scope: {

    },
    templateUrl: 'components/game/templates/zoo.html',
    link: function(scope, element){
      scope.reveal = function(){
        element.addClass('reveal');
        Game.reveal();
      };

      scope.reset = function(){
        element.removeClass('reveal');
        Game.reset();
      };
    }
  };
});
