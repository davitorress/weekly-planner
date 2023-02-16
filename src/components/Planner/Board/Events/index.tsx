import { useContext, useLayoutEffect } from "react";

import { StyledCard, StyledCards, StyledSection, StyledTasks, StyledTime } from "./styles";
import Button from "../../../UI/Button";

import notify from "../../../../utils/toastNotify";
import getEvents from "../../../../utils/getEvents";

import { UserContext } from "../../../../store/userContext";
import { EventContext } from "../../../../store/eventContext";

const BoardTasks = () => {
	const { user } = useContext(UserContext);
	const { events, filter, addEvent, clearEvents, filterEvents } = useContext(EventContext);

	useLayoutEffect(() => {
		clearEvents();
		getEvents(filter, user.token, addEvent);
	}, []);

	const deleteEvent = (id: string) => {
		fetch(`https://latam-challenge-2.deta.dev/api/v1/events/${id}`, {
			method: "DELETE",
			headers: {
				Authorization: `Bearer ${user.token}`,
			},
		})
			.then((res) => {
				if (!res.ok) {
					return res.json();
				}
			})
			.then((data) => {
				if (data) {
					notify("error", data.message);
				} else {
					notify("success", `Event was deleted!`);
					filterEvents(filter);
				}
			});
	};

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
										<Button className="button__card" onClick={() => deleteEvent(id)}>
											Delete
										</Button>
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
