$(document).ready(function(){

 $('.mainsquare').on('mouseover', function() {
    $('.mainsquare').css({
      'background-color':'white'
    });
  });
/*  $('#red').click( function() {
    $('.mainsquare').css({
      'background-color':'red'
    });
  });
  $('#blue').click( function() {
    $('.mainsquare').css({
      'background-color':'blue'
    });
  });
  $('#yellow').click( function() {
    $('.mainsquare').css({
      'background-color':'yellow'
    });
  });*/
  $('.selectorsquare').on('mouseover', function() {
    var squareSelector = "#"+this.id;
    var squareColor = this.id;

      $('.mainsquare').css({
        'background-color':squareColor
      });
  });
  $('.selectorsquare').on('click', function() {
    var squareSelector = "#"+this.id;
    var squareColor = this.id;

      $('.mainsquare').css({
        'background-color':squareColor
      });
  });
});
