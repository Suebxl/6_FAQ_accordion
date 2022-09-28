const questions = document.querySelectorAll(".question");

questions.forEach(question => {
  question.addEventListener("click", () => {
    if (question.nextElementSibling.classList.contains('hide')) {
      question.nextElementSibling.classList.remove('hide');
      question.classList.add('bold');
      question.classList.remove('border-bottom');
    }
    else {
      question.nextElementSibling.classList.add('hide');
      question.classList.add('border-bottom');
      question.classList.remove('bold')
    }


  })
})
