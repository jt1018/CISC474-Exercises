$( document ).ready(function() {
console.log( "ready!" );
});
/*this just very quickly flashes the text*/
function jumbodisplay() {

  $("#jumbotron").text(document.getElementById("fname").value + " " + document.getElementById("lname").value);
  return false;
}
