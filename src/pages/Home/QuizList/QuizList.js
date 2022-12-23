const QuizList = props => {
	const listStyle = 'w-1/4';
	const headingStyle = 'w-1/4 underline text-xl';
	let list = props.rounds;
	if (list.length) {
		list = JSON.parse(props.rounds).map((round, index) => {
			const { questions, category, difficulty, type } = round;
			return (
				<li
					key={index}
					className='flex justify-between rounded bg-black text-white mb-2 pl-2'
				>
					<p className={listStyle}>{questions}</p>
					<p className={listStyle}>{category}</p>
					<p className={listStyle}>{difficulty}</p>
					<p className={listStyle}>{type}</p>
					<p className='material-symbols-outlined'>delete</p>
				</li>
			);
		});
	}

	return (
		<div className='flex flex-col items-center ml-2 w-1/2 bg-green-300 rounded p-4 shadow-xl'>
			<h2 className='text-2xl underline font-title'>Quiz List</h2>
			<ul className='flex flex-col w-full mt-4'>
				<li className='flex justify-between pl-2'>
					<h3 className={headingStyle}>Questions</h3>
					<h3 className={headingStyle}>Category</h3>
					<h3 className={headingStyle}>Difficulty</h3>
					<h3 className={headingStyle}>Type</h3>
				</li>
				{list}
			</ul>
		</div>
	);
};

export default QuizList;
