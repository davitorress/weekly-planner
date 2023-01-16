import styled from "styled-components";

const StyledForm = styled.form`
	display: grid;
	row-gap: 5rem;

	color: var(--white-secondary);
	font-weight: 400;

	& .form__inputs {
		display: grid;
		row-gap: 18px;
	}
`;

const Form = ({ onSubmit, children }) => {
	return <StyledForm onSubmit={onSubmit}>{children}</StyledForm>;
};

export default Form;
