import CreateQuiz from './CreateQuiz';
import QuizList from './QuizList';
import useStoreQuizValues from '../../hooks/useStoreQuizValues';
import { useState } from 'react';

const Home = () => {
	const [quizValues, updateValues] = useStoreQuizValues({
		questions: 1,
		category: 'Any Category',
		difficulty: 'Any Difficulty',
		type: 'Any Type'
	});
	const [rounds, setRounds] = useState([]);

	return (
		<div>
			<div className='flex mt-8 mb-16 mx-4'>
				<CreateQuiz
					updateValues={updateValues}
					quizValues={quizValues}
					setRounds={setRounds}
				/>
				<QuizList rounds={rounds} />
			</div>
			<button className='bg-black text-white rounded w-100 p-2 block mx-auto hover:bg-blue-300'>
				Lets get Quizzical!
			</button>
		</div>
	);
};

export default Home;
