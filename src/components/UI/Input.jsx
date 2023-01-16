import styled from "styled-components";

const StyledDiv = styled.div`
	display: grid;
	grid-template-columns: 1fr 380px;
	align-items: center;
	position: relative;
`;

const StyledInput = styled.input`
	padding: 18px;

	color: var(--white-secondary);
	font-size: 1.6rem;
	font-family: "Mulish", sans-serif;

	border-radius: 50px;
	border: 1px solid #fff;

	${({ label }) => (!label ? `grid-column: 2 span;` : "")}

	&:focus ~ i,
	&.input__icon ~ i {
		transform: translateX(-150%);
	}

	&::placeholder {
		font-size: 1.2rem;
	}
`;

const StyledIcon = styled.i`
	width: 20px;
	height: 100%;

	right: 0;
	z-index: 10;
	position: absolute;

	transition: 1.5s ease-in-out;
	transform: translateX(200%);

	background-position: center;
	background-repeat: no-repeat;
	background-image: url(${({ iconPath }) => iconPath});
`;

const Input = ({ label, type, name, id, placeholder, className, iconPath }) => {
	return (
		<StyledDiv label={label}>
			{label && <label htmlFor={id}>{label}</label>}
			<StyledInput
				label={label}
				type={type ? type : "text"}
				name={name}
				id={id}
				placeholder={placeholder}
				className={className}
			/>
			<StyledIcon iconPath={iconPath} />
		</StyledDiv>
	);
};

export default Input;
