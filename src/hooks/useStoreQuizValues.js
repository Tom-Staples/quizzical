import { useState } from 'react';

const useStoreQuizValues = initalState => {
	const [quizValues, setQuizValues] = useState(initalState);

	const updateValues = e => {
		const { name, value } = e.target;
		setQuizValues({
			...quizValues,
			[name]: value
		});
	};
	return [quizValues, updateValues];
};

export default useStoreQuizValues;
