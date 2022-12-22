import CreateQuiz from './CreateQuiz';
import QuizList from './QuizList';

const Home = () => {
	return (
		<div>
			<div className='flex my-8 mx-4'>
				<CreateQuiz />
				<QuizList />
			</div>
			<button className='bg-black text-white rounded w-100 p-2 block mx-auto hover:bg-blue-300'>
				Lets get Quizzical!
			</button>
		</div>
	);
};

export default Home;
