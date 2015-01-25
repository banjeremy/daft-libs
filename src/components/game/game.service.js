'use strict';

angular.module('daftLibs')
.factory('Game', function () {
  return {
    revealed: false,
    resetCount: 0,
    reset: function(){
      this.revealed = false;
      this.resetCount++;
    },
    reveal: function(){
      this.revealed = true;
    }
  };
});
