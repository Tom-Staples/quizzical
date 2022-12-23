const checkExisitingRounds = quizValues => {
	let rounds = localStorage.getItem('rounds'),
		quizQuestions = quizValues.questions,
		quizCategory = quizValues.category,
		quizDifficulty = quizValues.difficulty,
		quizType = quizValues.type;
	if (!rounds) {
		return false;
	}

	rounds = JSON.parse(rounds);

	return !!rounds.find(
		({ questions, category, difficulty, type }) =>
			questions === quizQuestions &&
			category === quizCategory &&
			difficulty === quizDifficulty &&
			type === quizType
	);
};

export default checkExisitingRounds;
