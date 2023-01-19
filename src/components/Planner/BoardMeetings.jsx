import styled from "styled-components";
import Button from "../UI/Button";

const StyledMeetings = styled.section`
	display: grid;
	grid-template-columns: 100px 1fr;
`;

const StyledTimes = styled.aside`
	ul {
		list-style: none;
		display: grid;
		row-gap: 1.5rem;
	}

	ul li {
		width: 85px;
		height: 85px;

		display: flex;
		align-items: center;
		justify-content: center;

		font-weight: 600;
		font-size: 1.6rem;

		border-radius: 10px;
		box-shadow: 0px 4px 24px rgba(168, 168, 168, 0.25);
	}

	ul li:first-child {
		color: var(--black-secondary);
		background-color: #fff;
	}
`;

const StyledTime = styled.li`
	color: #000;
	background-color: var(--${({ day }) => day}-color);

	&.invalid {
		color: #fff;
		font-weight: 400;
		background-color: var(--meeting-invalid);
	}
`;

const StyledCards = styled.section`
	display: flex;
	flex-direction: column;
	row-gap: 1.5rem;

	& div {
		display: flex;
		gap: 2rem;
	}
`;

const StyledCard = styled.div`
	width: 50rem;
	height: 85px;
	display: flex;

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

		background-color: var(--${({ day }) => day}-color);
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
		/* white-space: nowrap; */
		word-break: break-all;
		overflow: hidden;
		text-overflow: ellipsis;
	}
`;

const BoardMeetings = () => {
	return (
		<StyledMeetings>
			<StyledTimes>
				<ul>
					<li className="time">Time</li>
					<StyledTime day="monday">10h30m</StyledTime>
					<StyledTime day="monday" className="invalid">
						11h30m
					</StyledTime>
					<StyledTime day="monday">12h30m</StyledTime>
				</ul>
			</StyledTimes>
			<StyledCards>
				<StyledCard />
				<div>
					<StyledCard day="monday">
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing
						</p>
						<Button className="button__card">Delete</Button>
					</StyledCard>
				</div>
				<div>
					<StyledCard day="monday" className="invalid">
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing
						</p>
						<Button className="button__card">Delete</Button>
					</StyledCard>
					<StyledCard day="monday" className="invalid">
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing
						</p>
						<Button className="button__card">Delete</Button>
					</StyledCard>
				</div>
				<div>
					<StyledCard day="monday">
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing
						</p>
						<Button className="button__card">Delete</Button>
					</StyledCard>
				</div>
			</StyledCards>
		</StyledMeetings>
	);
};

export default BoardMeetings;
