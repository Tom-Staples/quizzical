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

	// Causes the quiz list to re render when a new quiz round is added
	const [roundAdded, setRoundAdded] = useState(false);

	return (
		<div>
			<div className='flex my-8 mx-4'>
				<CreateQuiz
					updateValues={updateValues}
					quizValues={quizValues}
					setRoundAdded={setRoundAdded}
					roundAdded={roundAdded}
				/>
				<QuizList roundAdded={roundAdded} />
			</div>
			<button className='bg-black text-white rounded w-100 p-2 block mx-auto hover:bg-blue-300'>
				Lets get Quizzical!
			</button>
		</div>
	);
};

export default Home;
