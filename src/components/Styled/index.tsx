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
		max-width: ${({ maxWidth }: { maxWidth: number }) => maxWidth}px;

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
	background-image: url(${({ iconPath }: { iconPath?: string }) => iconPath});

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

export const StyledBackdrop = styled.div`
	top: 0;
	left: 0;
	z-index: 20;
	position: fixed;

	width: 100%;
	height: 100vh;

	cursor: pointer;

	background-color: rgba(0, 0, 0, 0.7);
`;

export const StyledLoading = styled.div`
	top: calc((100% - 150px) / 2);
	left: calc((100% - 150px) / 2);
	z-index: 30;
	position: fixed;

	width: 150px;
	height: 150px;

	border-radius: 50%;
	border: 15px solid var(--background-light);
	border-top-color: var(--button-add);

	animation: isRotating 1s infinite;

	@keyframes isRotating {
		to {
			transform: rotate(1turn);
		}
	}
`;
