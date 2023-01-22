import { useContext } from "react";
import styled from "styled-components";

import Button from "../UI/Button";
import { MeetingsContext } from "../../store/meetingsContext";

const StyledMeetings = styled.section`
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

const StyledTasks = styled.section`
	height: 85px;
	display: flex;
	gap: 1.5rem;
`;

const StyledTime = styled.aside`
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
	background-color: var(--${({ day }) => day}-color);

	&.invalid {
		color: #fff;
		font-weight: 400;
		background-color: var(--meeting-invalid);
	}
`;

const StyledCards = styled.section`
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

const StyledCard = styled.div`
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
	const { meetings, removeTask } = useContext(MeetingsContext);

	return (
		<StyledMeetings>
			<StyledTasks>
				<StyledTime>Time</StyledTime>
			</StyledTasks>

			{meetings.map(({ id, day, time, tasks }) => {
				const invalid = tasks.length > 1 ? "invalid" : "";

				return (
					<StyledTasks key={id}>
						<StyledTime day={day} className={invalid}>
							{time.split(":")[0]}h{time.split(":")[1]}m
						</StyledTime>
						<StyledCards className={invalid}>
							{tasks.map((text, index) => {
								return (
									<StyledCard key={`${id}-${index}`} day={day} className={invalid}>
										<p>{text}</p>
										<Button className="button__card" onClick={() => removeTask(`${id}-${index}`)}>
											Delete
										</Button>
									</StyledCard>
								);
							})}
						</StyledCards>
					</StyledTasks>
				);
			})}
		</StyledMeetings>
	);
};

export default BoardMeetings;
