$(function() {
    $("#navbarLogin").load("login.html");
});

$(document).ready( function () {
    var i=0;
    var numOfQuestions=0;
    var numOfAnswer=0;
    $("#addAnswer").click(function () {
        numOfAnswer++;
        i++;
        
        $("#answer").append("<input type='text' class='form-control w-100 mt-1' placeholder='Type your answer' aria-label='Recipient's username' aria-describedby='basic-addon2'>");
        
    });

});