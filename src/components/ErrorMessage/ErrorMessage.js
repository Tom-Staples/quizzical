const ErrorMessage = props => {
	return (
		<p className={props.styling}>
			<span className='material-symbols-outlined relative top-2'>warning</span>
			<span>{props.message}</span>
		</p>
	);
};

export default ErrorMessage;
