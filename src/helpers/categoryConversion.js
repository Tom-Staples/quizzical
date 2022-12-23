const categoryConversion = (category, categories) => {
	const value = categories.trivia_categories.find(
		({ name }) => name === category
	);
	return value.id;
};
export default categoryConversion;
