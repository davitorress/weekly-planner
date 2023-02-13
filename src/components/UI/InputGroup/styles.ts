import styled from "styled-components";

import { InputProps } from "./interface";

export const StyledDiv = styled.div`
	display: grid;
	grid-template-columns: 1fr 380px;
	align-items: center;
	position: relative;
`;

export const StyledInput = styled.input`
	padding: 18px;

	color: var(--white-secondary);
	font-size: 1.6rem;
	font-family: "Mulish", sans-serif;

	border-radius: 50px;
	border: 1px solid #fff;

	${({ label }: InputProps) => (!label ? `grid-column: 2 span;` : "")}

	&:-webkit-autofill,
	&:-webkit-autofill:hover,
	&:-webkit-autofill:focus {
		-webkit-text-fill-color: var(--white-secondary);
	}

	&:focus {
		outline: 2px solid #fff;
	}

	&.invalid {
		border: 1px solid var(--yellow-error);
	}
	&:focus.invalid {
		outline: 2px solid var(--yellow-error);
	}

	&:focus ~ i,
	&.input__icon ~ i {
		transform: translateX(-150%);
	}

	&::placeholder {
		font-size: 1.2rem;
	}

	&.input__account {
		background-color: #26292c;
	}

	&.input__account:-webkit-autofill,
	&.input__account:-webkit-autofill:hover,
	&.input__account:-webkit-autofill:focus {
		-webkit-box-shadow: 0 0 0 30px #26292c inset;
	}
`;
