import { FormEvent, createRef, useContext } from "react";

import { StyledActions } from "./styles";

import Form from "../../UI/Form";
import Input from "../../UI/Input";
import Button from "../../UI/Button";
import Select from "../../UI/Select";

import notify from "../../../utils/toastNotify";
import getEvents from "../../../utils/getEvents";

import { UserContext } from "../../../store/userContext";
import { EventContext } from "../../../store/eventContext";

const Actions = () => {
	const taskRef = createRef<HTMLInputElement>();
	const dayRef = createRef<HTMLSelectElement>();
	const timeRef = createRef<HTMLInputElement>();

	const { user } = useContext(UserContext);
	const { addEvent } = useContext(EventContext);

	const createEvent = (event: {}) => {
		fetch("https://latam-challenge-2.deta.dev/api/v1/events", {
			method: "POST",
			body: JSON.stringify(event),
			headers: {
				"Content-Type": "application/json; charset=UTF-8",
				Authorization: `Bearer ${user.token}`,
			},
		})
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				if (data.message) notify("error", data.message);
				else {
					notify("success", "Event created with success!");
					getEvents(data.events.dayOfWeek, user.token, addEvent);
				}
			});
	};

	const submitHandler = (event: FormEvent) => {
		event.preventDefault();

		if (dayRef.current!.value.trim() !== "" && taskRef.current!.value.trim() !== "") {
			const newEvent = {
				dayOfWeek: dayRef.current!.value,
				description: taskRef.current!.value,
			};

			createEvent(newEvent);
		} else {
			notify("warning", "Complete all the fields correctly!");
		}
	};

	return (
		<StyledActions>
			<Form onSubmit={submitHandler} className="form__actions">
				<section className="actions__inputs">
					<Input
						ref={taskRef}
						name="task_description"
						id="task_description"
						placeholder="Task or issue"
						className="input__action"
					/>
					<Select ref={dayRef} defaultValue="monday" className="select__action">
						<option value="monday">Monday</option>
						<option value="tuesday">Tuesday</option>
						<option value="wednesday">Wednesday</option>
						<option value="thursday">Thursday</option>
						<option value="friday">Friday</option>
						<option value="saturday">Saturday</option>
						<option value="sunday">Sunday</option>
					</Select>
					<Input ref={timeRef} type="time" name="meeting_time" id="meeting_time" className="input__action" />
				</section>

				<section className="actions__buttons">
					<Button type="submit" className="button__action add" fontSize="2rem">
						+ Add to calendar
					</Button>
					<Button type="reset" className="button__action remove" fontSize="2rem">
						&minus; Delete All
					</Button>
				</section>
			</Form>
		</StyledActions>
	);
};

export default Actions;
