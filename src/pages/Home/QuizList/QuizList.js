import { useEffect, useState } from 'react';

const QuizList = props => {
	let rounds = JSON.parse(localStorage.getItem('rounds')) || [];
	const list = rounds.map((round, index) => {
		const { questions, category, difficulty, type } = round;
		return (
			<ul key={index}>
				<li>{questions}</li>
				<li>{category}</li>
				<li>{difficulty}</li>
				<li>{type}</li>
			</ul>
		);
	});
	return (
		<div className='flex flex-col items-center ml-2 w-1/2 bg-green-300 rounded p-4 shadow-xl'>
			<h2 className='text-2xl underline font-title'>Quiz List</h2>
			{list}
		</div>
	);
};

export default QuizList;
