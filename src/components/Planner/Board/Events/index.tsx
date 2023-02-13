import { useContext } from "react";

import { StyledCard, StyledCards, StyledSection, StyledTasks, StyledTime } from "./styles";
import Button from "../../../UI/Button";

import { TaskContext } from "../../../../store/taskContext";

const BoardTasks = () => {
	const { tasks, removeTask } = useContext(TaskContext);

	return (
		<StyledSection>
			<StyledTasks>
				<StyledTime>Time</StyledTime>
			</StyledTasks>

			{tasks.map(({ id, day, time, cards }) => {
				const invalid = cards.length > 1 ? "invalid" : "";

				return (
					<StyledTasks key={id}>
						<StyledTime day={day} className={invalid}>
							{time.split(":")[0]}h{time.split(":")[1]}m
						</StyledTime>
						<StyledCards className={invalid}>
							{cards.map((text, index) => {
								return (
									<StyledCard key={`${id}-${index}`} day={day} className={invalid}>
										<p>{text}</p>
										<Button className="button__card" onClick={() => removeTask(id, index)}>
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
