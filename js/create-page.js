$(function() {
    $("#navbarLogin").load("login.html");
});

$(document).ready( function () {
    var i=0;
    var numOfAnswer=0;
    $("#addAnswer").click(function () {
        numOfAnswer++;
        i++;
        $("#answer").append("<input type='text' class='form-control w-100 mb-1' placeholder='Type your answer' aria-label='Recipient's username' aria-describedby='basic-addon2'>");
    });
});

const addButton = document.getElementById('#addQuestion');
const questionsContainer = document.getElementById('.create-form');
const retainButton = document.querySelector('.anyQuestion');

addButton.addEventListener('click', () => {
  // Kiểm tra xem nút Add question có nằm trong form hay không
  if (addButton.parentElement.classList.contains('.create-form')) {
    const newQuestionForm = questionsContainer.cloneNode(true);
    retainButton.parentElement.insertBefore(newQuestionForm, retainButton);
  } else {
    const newQuestionForm = questionsContainer.cloneNode(true);
    document.querySelector('.create-form').insertBefore(newQuestionForm, retainButton);
  }
});