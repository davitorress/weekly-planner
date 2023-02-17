import { useContext, useLayoutEffect, useState } from "react";

import { StyledCard, StyledCards, StyledSection, StyledTasks, StyledTime } from "./styles";
import Modal from "../../../UI/Modal";
import Button from "../../../UI/Button";

import notify from "../../../../utils/toastNotify";
import getEvents from "../../../../utils/getEvents";

import { UserContext } from "../../../../store/userContext";
import { EventContext } from "../../../../store/eventContext";

const BoardTasks = () => {
	const { user } = useContext(UserContext);
	const { events, filter, addEvent, clearEvents, filterEvents } = useContext(EventContext);

	const [eventId, setEventId] = useState("");
	const [showModal, setShowModal] = useState(false);
	const [modalContent, setModalContent] = useState("");

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

	const deleteHandler = (id: string, event: string) => {
		setEventId(id);
		setModalContent(event);
		setShowModal(true);
	};

	const modalCancel = () => {
		setShowModal(false);
		setModalContent("");
	};

	const modalConfirm = () => {
		deleteEvent(eventId);
		modalCancel();
	};

	return (
		<>
			{showModal && (
				<Modal
					onCancel={modalCancel}
					onConfirm={modalConfirm}
					children={<p>This action will delete the event ({modalContent}) permanently!</p>}
				/>
			)}

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
											<Button className="button__card" onClick={() => deleteHandler(id, description)}>
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
		</>
	);
};

export default BoardTasks;
