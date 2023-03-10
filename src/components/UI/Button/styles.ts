import styled from "styled-components";

import { ButtonProps } from "./interface";

export const StyledButton = styled.button`
	color: #fff;
	font-weight: ${({ fontWeight }: ButtonProps) => (fontWeight ? fontWeight : 700)};
	font-size: ${({ fontSize }: ButtonProps) => (fontSize ? fontSize : "")};
	font-family: "Mulish", sans-serif;
	cursor: pointer;

	border: none;
	background: none;

	&.button__form {
		width: 100%;
		padding: 14px 0;

		border-radius: 50px;
		background: var(--button-login);
		box-shadow: var(--button-login-shadow);
	}

	&.button__icon {
		display: block;
		color: var(--black-secondary);
	}

	&.button__action {
		width: 20rem;
		padding: 12px;

		display: flex;
		align-items: center;
		justify-content: center;

		border-radius: 10px;
	}
	&.button__action.add {
		background-color: var(--button-add);
	}
	&.button__action.remove {
		background-color: var(--button-remove);
	}

	&.button__card {
		margin: 5px;
		padding: 0 5px;
		height: 25px;

		font-size: 1.4rem;

		border-radius: 4px;
		background-color: var(--button-remove);
	}

	&.button__link {
		color: var(--button-remove);
		font-size: 1.8rem;
		text-decoration: underline;
	}

	&.button__modal {
		width: 100%;
		padding: 14px 0;

		font-weight: 500;
		font-size: 1.6rem;

		border-radius: 8px;
		border: 1px solid #4f4f4f;
	}
	&.button__modal__cancel {
		color: #4f4f4f;
	}
	&.button__modal__confirm {
		color: #fff;
		background-color: var(--button-remove);
		border: 1px solid var(--button-remove);
	}
`;
