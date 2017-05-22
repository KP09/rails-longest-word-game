// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap-sprockets
//= require rails-ujs
//= require turbolinks
//= require_tree .

$(document).ready(function(){
  var grid = new Object();

  // Build Object with frequencies of letters in grid
  $('#grid span').each(function(i, item){
    var letter = $(this).text().toLowerCase();
    if (grid[letter] == null) {
      grid[letter] = 0;
      grid[letter] += 1;
    } else {
      grid[letter] += 1;
    }
  });

  console.log("GRID")
  console.log(grid);
  console.log("****************");

  // Build object with frequencies of letters in attempt
  $(document).on("keyup", function(){
    var attemptString = $('#attempt').val();
    var attemptArray = attemptString.split("");
    var attempt = new Object();
    attemptArray.forEach(function(letter){
      if (attempt[letter] == null) {
      attempt[letter] = 0;
      attempt[letter] += 1;
      } else {
      attempt[letter] += 1;
      }
    });
  });
});
