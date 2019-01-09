//On click function to collect input from the form

$("#submit").on("click", function(event){
event.preventDefault();

//create variables to collect each value
var q1 = $('input[name=q1]:checked').val();
var q1Int = parseInt(q1);
var q2 = $('input[name=q2]:checked').val();
var q2Int = parseInt(q2);
var q3 = $('input[name=q3]:checked').val();
var q3Int = parseInt(q3);
var q4 = $('input[name=q4]:checked').val();
var q4Int = parseInt(q4);
var q5 = $('input[name=q5]:checked').val();
var q5Int = parseInt(q5);

var newFriend = (q1Int + q2Int + q3Int + q4Int + q5Int);
//do I need to create a whole object?

$.post("api/home", newFriend)
.then(function(data){
console.log(data);
})

});



