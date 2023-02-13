import { FormHTMLAttributes } from "react";
import styled from "styled-components";

const StyledForm = styled.form`
	&.form__account {
		display: grid;
		row-gap: 3rem;

		color: var(--white-secondary);
		font-weight: 400;
	}
	&.form__account .form__title {
		font-weight: 400;
		font-size: 3rem;
	}
	&.form__account .form__inputs {
		display: grid;
		row-gap: 18px;
	}

	&.form__actions {
		width: 100%;
		display: flex;
		justify-content: space-between;
	}
	&.form__actions .actions__inputs {
		display: flex;
		gap: 0.5rem;
	}
	&.form__actions .actions__buttons {
		display: flex;
		gap: 1rem;
	}

	.form__link {
		display: flex;
		gap: 1rem;
		padding: 2rem 0;
		font-size: 1.8rem;
	}

	p.error-message {
		margin-top: 2rem;

		color: var(--yellow-error);
		font-weight: 700;
		font-size: 1.8rem;
		text-align: center;
	}
`;

const Form = (props: FormHTMLAttributes<HTMLFormElement>) => {
	return <StyledForm {...props}>{props.children}</StyledForm>;
};

export default Form;
