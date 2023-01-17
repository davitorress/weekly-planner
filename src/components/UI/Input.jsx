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

const Input = ({ type, name, id, placeholder, className }) => {
	return (
		<StyledInput type={type ? type : "text"} name={name} id={id} placeholder={placeholder} className={className} />
	);
};

export default Input;
