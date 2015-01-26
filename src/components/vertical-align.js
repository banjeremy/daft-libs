'use strict';
$(window).resize(function(){
  console.log('resize');
  $('.fill-viewport').height($(window).height());
});
