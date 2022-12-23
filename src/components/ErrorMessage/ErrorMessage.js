const ErrorMessage = props => {
	return (
		<p className={props.styling}>
			<span className='material-symbols-outlined'>warning</span>
			<span className='align-top'>{props.message}</span>
		</p>
	);
};

export default ErrorMessage;
