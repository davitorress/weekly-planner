import styled from "styled-components";

const StyledButton = styled.button`
	color: #fff;
	font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : 700)};
	font-size: ${({ fontSize }) => (fontSize ? fontSize : "")};
	font-family: "Mulish", sans-serif;
	cursor: pointer;

	&.button__form {
		width: 100%;
		padding: 14px 0;

		border: none;
		border-radius: 50px;
		background: var(--button-login);
		box-shadow: var(--button-login-shadow);
	}
`;

const Button = ({ children, type, className, fontWeight, fontSize }) => {
	return (
		<StyledButton type={type ? type : "button"} className={className} fontWeight={fontWeight} fontSize={fontSize}>
			{children}
		</StyledButton>
	);
};

export default Button;
