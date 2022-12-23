const CreateQuiz = props => {
	const inputStyle = 'rounded w-full pl-2 block mb-4';
	const handleSubmit = e => {
		e.preventDefault();
		let currentRounds = localStorage.getItem('rounds'),
			round;
		if (!currentRounds) {
			round = JSON.stringify([props.quizValues]);
			localStorage.setItem('rounds', round);
		} else {
			round = JSON.parse(currentRounds);
			round.push(props.quizValues);
			round = JSON.stringify(round);
			localStorage.setItem('rounds', round);
		}
		props.setRounds(round);
	};
	return (
		<div className='flex flex-col  items-center mr-2 w-1/2 bg-green-300 rounded p-4 shadow-xl'>
			<h2 className='text-2xl underline font-title'>Create Quiz</h2>
			<p className='mt-8'>
				The form below allows you to define the questions for each round of your
				quiz. You can have as many rounds as you want with a maximum of 50
				questions per round. Once you have completed your quiz creation, click
				the "Lets get Quizzical" button to proceed with the quiz!
			</p>
			<form className='mt-8' onSubmit={handleSubmit}>
				<label>Number of questions</label>
				<input
					type='number'
					name='questions'
					min='1'
					max='50'
					className={inputStyle}
					value={props.quizValues.questions}
					onChange={props.updateValues}
				/>
				<label>Select category</label>
				<select
					name='category'
					value={props.quizValues.category}
					onChange={props.updateValues}
					className={inputStyle}
				>
					<option>Any Category</option>
				</select>
				<label>Select difficulty</label>
				<select
					name='difficulty'
					value={props.quizValues.difficulty}
					onChange={props.updateValues}
					className={inputStyle}
				>
					<option>Any Difficulty</option>
					<option>Easy</option>
					<option>Medium</option>
					<option>Hard</option>
				</select>
				<label>Select type</label>
				<select
					name='type'
					value={props.quizValues.type}
					onChange={props.updateValues}
					className={inputStyle}
				>
					<option>Any Type</option>
					<option>Multiple Choice</option>
					<option>True / False</option>
				</select>
				<button className='bg-black text-white rounded w-full hover:bg-blue-300'>
					Add Round
				</button>
			</form>
		</div>
	);
};

export default CreateQuiz;
