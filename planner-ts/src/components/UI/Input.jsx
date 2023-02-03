import { forwardRef } from "react";
import styled from "styled-components";

const StyledInput = styled.input`
	padding: 18px;

	font-size: 1.6rem;
	font-family: "Mulish", sans-serif;

	&::placeholder {
		font-size: 1.2rem;
	}

	&.input__action {
		color: var(--black-secondary);
		border-radius: 10px;
		border: 1px solid var(--yellow-action-border);
	}
	&:focus.input__action {
		outline: 2px solid var(--yellow-action-border);
	}

	&.input__action:-webkit-autofill,
	&.input__action:-webkit-autofill:hover,
	&.input__action:-webkit-autofill:focus {
		-webkit-text-fill-color: var(--black-secondary);
		-webkit-box-shadow: 0 0 0 30px #fff inset;
	}
`;

const Input = forwardRef((props, ref) => {
	return <StyledInput ref={ref} {...props} type={props.type ? props.type : "text"} />;
});

export default Input;
