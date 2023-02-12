import { ChangeEvent, useState } from "react";

const useInput = (validateFunction: (value: string) => boolean, type?: string) => {
	const [enteredValue, setEnteredValue] = useState("");
	const [isTouched, setIsTouched] = useState(false);

	const valueIsValid = validateFunction(enteredValue);
	const hasError = !valueIsValid && isTouched;

	const dateHandler = (event: ChangeEvent<HTMLInputElement>) => {
		let value = event.target.value.replace(/\D/g, "");
		value = value.replace(/(\d{2})(\d)/, "$1/$2");
		value = value.replace(/(\d{2})(\d)/, "$1/$2");

		if (event.target.value.length <= 10) {
			event.target.value = value;
			setEnteredValue(value);
		}
	};

	const valueChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
		if (type === "birth-date") dateHandler(event);
		else setEnteredValue(event.target.value);
	};

	const inputFocusHandler = () => {
		setIsTouched(true);
	};

	const reset = () => {
		setEnteredValue("");
		setIsTouched(false);
	};

	return {
		value: enteredValue,
		isValid: valueIsValid,
		hasError,
		valueChangeHandler,
		inputFocusHandler,
		reset,
	};
};

export default useInput;
