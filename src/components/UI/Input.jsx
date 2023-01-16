import styled from "styled-components";

const StyledDiv = styled.div`
	display: grid;
	grid-template-columns: 1fr 380px;
	align-items: center;
	position: relative;

	${({ iconPath }) =>
		iconPath
			? `&::after {
		content: "";
		display: block;
		width: 20px;
		height: 100%;

		right: 0;
		z-index: 10;
		position: absolute;

		transition: 1.5s ease-in-out;
		transform: translateX(200%);

		background-position: center;
		background-repeat: no-repeat;
		background-image: url(${iconPath});
	}`
			: ""}

	&:has(input:focus) + &::after {
		transform: translateX(-150%);
	}
`;

const StyledInput = styled.input`
	padding: 18px;

	color: var(--white-secondary);
	font-size: 1.6rem;
	font-family: "Mulish", sans-serif;

	border-radius: 50px;
	border: 1px solid #fff;

	${({ label }) => (!label ? `grid-column: 2 span;` : "")}

	&::placeholder {
		font-size: 1.2rem;
	}
`;

const Input = ({ label, type, name, id, placeholder, iconPath }) => {
	return (
		<StyledDiv label={label} id={id} iconPath={iconPath}>
			{label && <label htmlFor={id}>{label}</label>}
			<StyledInput label={label} type={type ? type : "text"} name={name} id={id} placeholder={placeholder} />
		</StyledDiv>
	);
};

export default Input;
