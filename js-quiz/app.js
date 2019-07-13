const correctAnswers = ['B', 'B', 'B', 'B'];

const form = document.querySelector('.quiz-form');

const showScore = document.querySelector('.result');

form.addEventListener('submit', e => {
	e.preventDefault();

	let score = 0;

	const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];


	userAnswers.forEach((userAnswer , index) => {

		if(userAnswer === correctAnswers[index]){

				score += 25;
		}
	});	

	scrollTo(0,0) //scrollTo(x-cordinate, y-cordinate)

    showScore.classList.remove('d-none');
	
	let scoreCount = 0;

	const timer = setInterval(() => {

		showScore.querySelector('span').textContent = `${scoreCount}%`;

		if(scoreCount === score){
			clearInterval(timer);
		} else{
			scoreCount++;
		}

	}, 10);

	
});

