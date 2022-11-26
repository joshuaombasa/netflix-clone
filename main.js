const questions = document.querySelectorAll('.question')
const answers = document.querySelectorAll('.answer')

questions.forEach(question => {
    question.addEventListener('click', () => {
        let answer = question.nextElementSibling

        if (answer.style.display === 'none') {
            answers.forEach(answer => answer.style.display = 'none')
            questions.forEach(question => question.firstElementChild.textContent = '+')
            answer.style.display = 'block'
            question.firstElementChild.textContent = 'x'
        } else {
            answer.style.display = 'none'
            question.firstElementChild.textContent = '+'
        }

    })
})