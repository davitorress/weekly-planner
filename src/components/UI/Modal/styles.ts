import styled from "styled-components";

export const BackdropStyled = styled.div`
	top: 0;
	left: 0;
	z-index: 20;
	position: fixed;

	width: 100%;
	height: 100vh;

	cursor: pointer;

	background-color: rgba(0, 0, 0, 0.75);
`;

export const ModalStyled = styled.section`
	top: 20vh;
	left: 30%;
	z-index: 30;
	position: fixed;

	display: flex;
	align-items: center;
	justify-content: space-evenly;
	flex-direction: column;

	padding: 1rem;
	width: 40%;
	height: 60vh;

	font-size: 3rem;
	font-family: "Mulish", sans-serif;

	border-radius: 14px;
	background-color: var(--background-light);
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);

	animation: slide-down 300ms ease-out forwards;

	&.success {
		color: green;
	}

	.close-icon {
		top: 20px;
		right: 30px;
		position: absolute;

		cursor: pointer;
	}

	@keyframes slide-down {
		from {
			opacity: 0;
			transform: translateY(-3rem);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
`;
