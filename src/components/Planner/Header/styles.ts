import styled from "styled-components";

export const StyledHeader = styled.header`
	display: grid;
	align-items: center;
	grid-template-columns: 30% repeat(3, 1fr);

	color: var(--black-secondary);
	text-align: center;

	background-color: #fff;
	box-shadow: 0px 4px 24px rgba(168, 168, 168, 0.25);
`;

export const StyledSection = styled.section`
	height: 65%;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;

	&.planner__name {
		padding: 24px 10px;

		color: var(--white-primary);
		text-align: left;

		background-color: #000;
		border-radius: 0px 14px 15px 0px;
	}
	&.planner__name h1 {
		font-weight: 700;
		font-size: 2.2rem;
	}
	&.planner__name p {
		font-weight: 400;
		font-size: 1.6rem;
	}

	&.planner__datetime h2 {
		font-weight: 700;
		font-size: 3rem;
	}
	&.planner__datetime p {
		font-weight: 400;
		font-size: 1.8rem;
	}

	&.planner__climate h2 {
		font-weight: 700;
		font-size: 4rem;
	}
	&.planner__climate p {
		font-weight: 400;
		font-size: 1.6rem;
	}
	&.planner__climate img {
		width: 34px;
		height: 34px;
	}

	&.planner__logout {
		padding: 0 20px;
		align-items: end;
	}
	&.planner__logout button {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	&.planner__logout p {
		color: #000;
		font-weight: 400;
		font-size: 1.8rem;
	}
`;
