import styled from "styled-components";

import Form from "../UI/Form";
import Input from "../UI/Input";
import Button from "../UI/Button";
import Select from "../UI/Select";

const StyledActions = styled.section`
	width: 100%;
	display: flex;
	padding: 30px 0;
`;

const Actions = () => {
	const submitHandler = (event) => {
		event.preventDefault();
	};

	return (
		<StyledActions>
			<Form onSubmit={submitHandler} className="form__actions">
				<section className="actions__inputs">
					<Input name="task_description" id="task_description" placeholder="Task or issue" className="input__action" />
					<Select defaultValue="monday" className="select__action">
						<option value="monday">Monday</option>
						<option value="tuesday">Tuesday</option>
						<option value="wednesday">Wednesday</option>
						<option value="thursday">Thursday</option>
						<option value="friday">Friday</option>
						<option value="saturday">Saturday</option>
						<option value="sunday">Sunday</option>
					</Select>
					<Input type="time" name="meeting_time" id="meeting_time" className="input__action" />
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
