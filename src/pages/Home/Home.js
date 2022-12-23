import CreateQuiz from './CreateQuiz';
import QuizList from './QuizList';
import useStoreQuizValues from '../../hooks/useStoreQuizValues';
import { useState } from 'react';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';

const Home = () => {
	// State
	const [quizValues, updateValues] = useStoreQuizValues({
		questions: 1,
		category: 'Any Category',
		difficulty: 'Any Difficulty',
		type: 'Any Type'
	});
	const [rounds, setRounds] = useState(localStorage.getItem('rounds') || []);

	// Styling
	const buttonStyle = rounds.length
		? 'bg-black text-white hover:bg-blue-300'
		: 'bg-gray-400';

	return (
		<div>
			<div className='flex mt-8 mb-16 mx-4'>
				<CreateQuiz
					updateValues={updateValues}
					quizValues={quizValues}
					setRounds={setRounds}
					rounds={rounds}
				/>
				<QuizList rounds={rounds} setRounds={setRounds} />
			</div>
			<button className={`rounded w-100 p-2 block mx-auto ${buttonStyle}`}>
				Lets get Quizzical!
			</button>
			{!rounds.length && (
				<ErrorMessage
					message="You need to add rounds to get quizzin'"
					styling='text-xs text-center mt-2 text-red-600'
				/>
			)}
		</div>
	);
};

export default Home;
