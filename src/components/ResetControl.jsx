import {useCounter, reset, disabled } from "../store";

function ResetControl() {
	const isDisabled = useCounter(disabled);
	const useReset = useCounter(reset);

	return (
		<button style={{ marginTop: 8 }}
			onClick={() => useReset()}
			disabled={!!isDisabled}
		>
			Reset (0)
		</button>
	)
}

export default ResetControl;
