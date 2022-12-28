(function(){
    const titleQuestions = [...document.querySelectorAll('.questions_title')];

    titleQuestions.forEach(question =>{
        question.addEventListener('click',()=>{
            let height = 0;
            let answer = question.nextElementSibling;
            let addpadding = question.parentElement.parentElement;

            addpadding.classList.toggle('questions_padding--add');
            question.children[0].classList.toggle('questions_arrow--rotate');

            if(answer.clientHeight === 0){
                height = answer.scrollHeight;
            }

            answer.style.height = `${height}px`
        })
    });
})();