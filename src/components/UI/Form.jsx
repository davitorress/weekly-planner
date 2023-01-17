import styled from "styled-components";

const StyledForm = styled.form`
	&.form__account {
		display: grid;
		row-gap: 5rem;

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
`;

const Form = ({ onSubmit, children, className }) => {
	return (
		<StyledForm onSubmit={onSubmit} className={className}>
			{children}
		</StyledForm>
	);
};

export default Form;
