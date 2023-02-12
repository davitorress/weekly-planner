import { FormEvent, createRef, useContext } from "react";
import styled from "styled-components";

import Form from "../UI/Form";
import Input from "../UI/Input";
import Button from "../UI/Button";
import Select from "../UI/Select";

import { TaskContext } from "../../store/taskContext";

const StyledActions = styled.section`
	width: 100%;
	display: flex;
	padding: 30px 0;
`;

const Actions = () => {
	const taskRef = createRef<HTMLInputElement>();
	const dayRef = createRef<HTMLSelectElement>();
	const timeRef = createRef<HTMLInputElement>();

	const { filter } = useContext(TaskContext);
	const { addTask, deleteAllTasks } = useContext(TaskContext);

	const submitHandler = (event: FormEvent) => {
		event.preventDefault();

		if (
			dayRef.current!.value.trim() !== "" &&
			timeRef.current!.value.trim() !== "" &&
			taskRef.current!.value.trim() !== ""
		) {
			const newTask = {
				day: dayRef.current!.value,
				time: timeRef.current!.value,
				text: taskRef.current!.value,
			};

			addTask(newTask);
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
					<Button type="reset" className="button__action remove" onClick={() => deleteAllTasks(filter)} fontSize="2rem">
						&minus; Delete All
					</Button>
				</section>
			</Form>
		</StyledActions>
	);
};

export default Actions;
