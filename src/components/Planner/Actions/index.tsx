import { FormEvent, createRef, useContext } from "react";

import { StyledActions } from "./styles";

import Form from "../../UI/Form";
import Input from "../../UI/Input";
import Button from "../../UI/Button";
import Select from "../../UI/Select";

import { DayOfWeeks } from "../../../types";

import notify from "../../../utils/toastNotify";

import { UserContext } from "../../../store/userContext";
import { EventContext } from "../../../store/eventContext";

const Actions = () => {
	const textRef = createRef<HTMLInputElement>();
	const dayRef = createRef<HTMLSelectElement>();
	// const timeRef = createRef<HTMLInputElement>();

	const { user } = useContext(UserContext);
	const { filter, filterEvents } = useContext(EventContext);

	const createEvent = (event: { dayOfWeek: DayOfWeeks; description: string }) => {
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
					filterEvents(event.dayOfWeek);
				}
			});
	};

	const deleteEvents = (day: DayOfWeeks) => {
		fetch(`https://latam-challenge-2.deta.dev/api/v1/events?dayOfWeek=${day}`, {
			method: "DELETE",
			headers: {
				accept: "application/json",
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
					notify("success", `${day} events was deleted!`);
					filterEvents(filter);
				}
			});
	};

	const submitHandler = (event: FormEvent) => {
		event.preventDefault();

		if (dayRef.current!.value.trim() !== "" && textRef.current!.value.trim() !== "") {
			const newEvent = {
				dayOfWeek: dayRef.current!.value as DayOfWeeks,
				description: textRef.current!.value,
			};

			createEvent(newEvent);
		} else {
			notify("warning", "Complete all the fields correctly!");
		}

		textRef.current!.value = "";
	};

	return (
		<StyledActions>
			<Form onSubmit={submitHandler} className="form__actions">
				<section className="actions__inputs">
					<Input
						ref={textRef}
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
					{/* <Input ref={timeRef} type="time" name="meeting_time" id="meeting_time" className="input__action" /> */}
				</section>

				<section className="actions__buttons">
					<Button type="submit" className="button__action add" fontSize="2rem">
						+ Add to calendar
					</Button>
					<Button type="reset" className="button__action remove" fontSize="2rem" onClick={() => deleteEvents(filter)}>
						&minus; Delete All
					</Button>
				</section>
			</Form>
		</StyledActions>
	);
};

export default Actions;
