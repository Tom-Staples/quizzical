const deleteQuizListItem = (e, stateUpdate) => {
	let { children } = e.target.parentElement,
		rounds = JSON.parse(localStorage.getItem('rounds')),
		roundParams = [].map.call(children, ({ textContent }) => textContent);
	roundParams.pop();
	rounds = rounds.filter(
		({ questions, category, difficulty, type }) =>
			questions !== parseInt(roundParams[0]) ||
			category !== roundParams[1] ||
			difficulty !== roundParams[2] ||
			type !== roundParams[3]
	);
	let temp = JSON.stringify(rounds);
	if (!rounds.length) {
		temp = [];
	}
	localStorage.setItem('rounds', JSON.stringify(rounds));
	stateUpdate(temp);
};

export default deleteQuizListItem;
