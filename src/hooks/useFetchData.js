import { useEffect, useState } from 'react';

const useFetchData = url => {
	const [data, setData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(url),
				result = await response.json();
			setData(result);
		};
		fetchData();
	}, []);
	return [data];
};

export default useFetchData;
