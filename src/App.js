// React modules
import { useState } from 'react';

//Components
import Header from './components/Header';
import Home from './pages/Home';
import Quiz from './pages/Quiz';

const App = () => {
	// Create mode is for quiz design
	// Quiz mode is when questions are answered
	const [mode, setMode] = useState('create');
	return (
		<div className='text-lg font-main'>
			<Header />
			{mode === 'create' ? <Home mode={mode} setMode={setMode} /> : <Quiz />}
		</div>
	);
};

export default App;
