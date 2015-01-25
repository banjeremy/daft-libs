'use strict';

angular.module('daftLibs')
.directive('jjGameInput', function(Game) {
  return {
    restrict: 'E',
    scope: {
      type: '@'
    },
    templateUrl: 'components/game-input/game-input.html',
    link: function(scope, element){
      scope.game = Game;

      scope.$watch('game.revealed', function(val){
        scope.revealed = val;
      });

      scope.$watch('game.resetCount', function(){
        scope.answer = '';
      });
    }
  };
});
