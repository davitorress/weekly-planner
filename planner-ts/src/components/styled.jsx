import styled from "styled-components";

export const StyledAccount = styled.main`
	display: grid;
	align-items: center;
	grid-template-columns: 50% 50%;
	text-align: center;
	background: var(--background-dark);

	& section:first-child {
		padding: 3rem 0;
	}

	.container {
		margin: 0 auto;
		max-width: ${({ maxWidth }) => maxWidth}px;

		display: grid;
		row-gap: 5rem;

		text-align: left;
		font-size: 1.6rem;
		color: var(--white-secondary);
	}

	.container h1 {
		font-weight: 400;
		font-size: 6rem;
	}

	.background-img {
		width: 100%;
		height: 100%;
		padding: 2rem;

		overflow: clip;
		background-size: cover;
		background-image: url("/src/assets/back.png");
	}
`;

export const Icon = styled.i`
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
