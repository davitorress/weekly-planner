import { useContext, useLayoutEffect } from "react";

import { StyledCard, StyledCards, StyledSection, StyledTasks, StyledTime } from "./styles";
import Button from "../../../UI/Button";

import getEvents from "../../../../utils/getEvents";

import { UserContext } from "../../../../store/userContext";
import { EventContext } from "../../../../store/eventContext";

const BoardTasks = () => {
	const { user } = useContext(UserContext);
	const { events, filter, addEvent, clearEvents } = useContext(EventContext);

	useLayoutEffect(() => {
		clearEvents();
		getEvents(filter, user.token, addEvent);
	}, []);

	return (
		<StyledSection>
			<StyledTasks>
				<StyledTime>Time</StyledTime>
			</StyledTasks>

			{events.map(({ id, dayOfWeek, createdAt, cards }) => {
				const invalid = cards.length > 1 ? "invalid" : "";

				return (
					<StyledTasks key={id}>
						<StyledTime day={dayOfWeek} className={invalid}>
							{createdAt.split(":")[0]}h{createdAt.split(":")[1]}m
						</StyledTime>
						<StyledCards className={invalid}>
							{cards.map(({ id, description }) => {
								return (
									<StyledCard key={id} day={dayOfWeek} className={invalid}>
										<p>{description}</p>
										<Button className="button__card">Delete</Button>
									</StyledCard>
								);
							})}
						</StyledCards>
					</StyledTasks>
				);
			})}
		</StyledSection>
	);
};

export default BoardTasks;
