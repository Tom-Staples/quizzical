import { useEffect, useState } from 'react';

const useFetchData = (url, dependencies = []) => {
	const [data, setData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(url),
				result = await response.json();
			setData(result);
		};
		fetchData();
	}, dependencies);
	return [data];
};

export default useFetchData;
