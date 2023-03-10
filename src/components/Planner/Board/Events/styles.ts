import { HTMLAttributes } from "react";
import styled from "styled-components";

export interface ElementsProps extends HTMLAttributes<HTMLElement> {
	day?: string;
}

export const StyledSection = styled.section`
	width: 97vw;
	height: 55vh;

	padding: 1rem 0;
	display: flex;
	flex-direction: column;
	row-gap: 1.5rem;

	overflow-x: scroll;
	overflow-y: scroll;

	&::-webkit-scrollbar {
		width: 16px;
		background: #ffffff;
		border-radius: 22px;
	}
	&::-webkit-scrollbar-thumb {
		background: #dcdfe3;
		border-radius: 8px;
	}
	&::-webkit-scrollbar-corner {
		visibility: hidden;
	}
`;

export const StyledTasks = styled.section`
	height: 85px;
	display: flex;
	gap: 1.5rem;
`;

export const StyledTime = styled.aside`
	width: 85px;
	height: 85px;

	padding: 1rem;
	display: flex;
	align-items: center;
	justify-content: center;

	font-weight: 600;
	font-size: 1.6rem;

	border-radius: 10px;
	box-shadow: 0px 4px 24px rgba(168, 168, 168, 0.25);

	color: #000;
	background-color: var(--${({ day }: ElementsProps) => day}-color);

	&.invalid {
		color: #fff;
		font-weight: 400;
		background-color: var(--meeting-invalid);
	}
`;

export const StyledCards = styled.section`
	display: flex;
	gap: 1.5rem;
	position: relative;

	&.invalid::before {
		content: "";
		width: 25px;
		height: 25px;

		top: 36.66%;
		left: 0%;
		z-index: 10;
		position: absolute;

		transform: translateX(-50%);

		border-radius: 50%;
		background-color: var(--meeting-invalid);
	}
	&.invalid::after {
		content: "";
		width: 100%;
		height: 5px;

		top: 50%;
		left: 0;
		z-index: 10;
		position: absolute;

		background-color: var(--meeting-invalid);
	}
`;

export const StyledCard = styled.div`
	width: 50rem;
	height: 85px;
	display: flex;
	gap: 2rem;

	overflow: hidden;
	border-radius: 15px;

	&:not(:first-child) {
		border: 1px solid #ffffff;
		backdrop-filter: blur(10.5px);
		box-shadow: 0px 2px 5.5px rgba(0, 0, 0, 0.02);
		background: linear-gradient(112.83deg, rgba(228, 240, 248, 0.42) 0%, rgba(255, 255, 255, 0.336) 110.84%);
	}

	&::before {
		content: "";
		width: 15px;
		height: 100%;
		display: block;

		background-color: var(--${({ day }: ElementsProps) => day}-color);
	}

	&.invalid::before {
		background-color: var(--meeting-invalid);
	}

	p {
		padding: 12px;
		width: calc(100% - 70px);
		height: 100%;

		color: #333;
		font-size: 1.6rem;

		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;

		overflow: hidden;
		text-overflow: ellipsis;
	}
`;
