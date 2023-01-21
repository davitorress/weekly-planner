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
`;

const Input = forwardRef(({ type, name, id, placeholder, className }, ref) => {
	return (
		<StyledInput
			ref={ref}
			type={type ? type : "text"}
			name={name}
			id={id}
			placeholder={placeholder}
			className={className}
		/>
	);
});

export default Input;
