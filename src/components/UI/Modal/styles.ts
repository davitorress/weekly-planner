import styled from "styled-components";

export const ModalStyled = styled.section`
	top: calc((100% - 250px) / 2);
	left: calc((100% - 720px) / 2);
	z-index: 30;
	position: fixed;

	display: flex;
	align-items: center;
	justify-content: space-evenly;
	flex-direction: column;

	padding: 4rem;

	width: 720px;
	height: 250px;

	font-size: 3rem;
	font-family: "Mulish", sans-serif;

	border-radius: 14px;
	background-color: #fff;
	box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 20px 20px rgba(0, 0, 0, 0.08);

	animation: slide-down 300ms ease-out forwards;

	.close-icon {
		top: 20px;
		right: 30px;
		position: absolute;

		padding: 0.5rem;
		cursor: pointer;

		border-radius: 50%;
		background-color: #e5e5e5;
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

export const SectionStyled = styled.section`
	display: flex;
	gap: 2rem;

	width: 100%;
	height: 100%;

	.warning-icon {
		width: 96px;
		height: 84px;

		display: flex;
		align-items: center;
		justify-content: center;

		color: #fff;

		border-radius: 14px;
		background-color: var(--button-remove);
	}

	.content {
		width: 100%;
		height: 84px;

		display: flex;
		justify-content: center;
		flex-direction: column;
		gap: 1rem;
	}

	.content h3 {
		color: #54595e;
		font-size: 3rem;
	}

	.content p {
		color: #54595e99;
		font-size: 1.8rem;
	}
`;

export const ActionsStyled = styled.section`
	width: 100%;
	height: fit-content;

	display: flex;
	gap: 5%;
`;
