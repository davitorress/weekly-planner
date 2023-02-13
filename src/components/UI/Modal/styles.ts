import styled from "styled-components";

export const BackdropStyled = styled.div`
	top: 0;
	left: 0;
	z-index: 20;
	position: fixed;

	width: 100%;
	height: 100vh;

	background-color: rgba(0, 0, 0, 0.75);
`;

export const ModalStyled = styled.section`
	top: 20vh;
	left: 5%;
	z-index: 30;
	position: fixed;

	padding: 1rem;
	width: 90%;

	border-radius: 14px;
	background-color: white;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);

	animation: slide-down 300ms ease-out forwards;

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
