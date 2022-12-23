import categoryConversion from './categoryConversion';

const convertStorageToAPICall = categories => {
	const rounds = JSON.parse(localStorage.getItem('rounds')),
		apiCalls = rounds.map(({ questions, category, difficulty, type }) => {
			let q = `amount=${questions}`,
				c = `&category=${category.toLowerCase()}`,
				d = `&difficulty=${difficulty.toLowerCase()}`,
				t = `&type=${type.toLowerCase()}`;

			// convert "any" selections
			if (difficulty === 'Any Difficulty') {
				d = '';
			}
			if (type === 'Any Type') {
				t = '';
			}

			// Convert category to appropriate index
			if (category === 'Any Category') {
				c = '';
			} else {
				c = '&category=' + categoryConversion(category, categories);
			}

			// Convert type
			if (type === 'Multiple Choice') {
				t = '&type=multiple';
			}
			if (type === 'True / False') {
				t = '&type=boolean';
			}

			return `https://opentdb.com/api.php?${q}${c}${d}${t}`;
		});
	localStorage.setItem('apiCalls', JSON.stringify(apiCalls));
};

export default convertStorageToAPICall;
