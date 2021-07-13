$(document).ready(function() {
  console.log("We are connected to the js file and ready to use jQuery");
});

$("#tweet-text").on('blur', function() {
  console.log(this);
});