import styled from "styled-components";

const Icon = styled.i`
	width: 20px;
	height: 100%;

	background-position: center;
	background-repeat: no-repeat;
	background-image: url(${({ iconPath }) => iconPath});

	&.icon__input {
		right: 0;
		z-index: 10;
		position: absolute;

		transition: 1.5s ease-in-out;
		transform: translateX(200%);
	}

	&.icon__button {
		height: 20px;
		display: block;
	}
`;

export default Icon;
