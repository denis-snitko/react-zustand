import { useCounter, decrement, increment, count } from "../store";

function Controls() {
	const useDecrement = useCounter(decrement);
	const useIncrement = useCounter(increment);

	return (
		<div className="card">
			<button style={{ marginRight: 8 }} onClick={() => useDecrement(count)}>
				Decrement (-1)
			</button>
			<button onClick={() => useIncrement(count)}>Increment (+1)</button>
		</div>
	);
}

export default Controls;
