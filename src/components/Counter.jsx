import { useCounter, count } from '../store';

function Counter() {
	const counterValue = useCounter(count);

	return (
		<>
			<h2>{counterValue}</h2>
		</>
	);
}

export default Counter;
