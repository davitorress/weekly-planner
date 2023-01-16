import styled from "styled-components";

const StyledDiv = styled.div`
	display: grid;
	grid-template-columns: 1fr 380px;
	align-items: center;
`;

const StyledInput = styled.input`
	padding: 18px;

	color: var(--white-secondary);
	font-size: 1.6rem;
	font-family: "Mulish", sans-serif;

	border-radius: 50px;
	border: 1px solid #fff;

	&::placeholder {
		font-size: 1.2rem;
	}
`;

const Input = ({ label, type, name, id, placeholder }) => {
	return (
		<StyledDiv>
			{label && <label htmlFor={id}>{label}</label>}
			<StyledInput type={type ? type : "text"} name={name} id={id} placeholder={placeholder} />
		</StyledDiv>
	);
};

export default Input;
