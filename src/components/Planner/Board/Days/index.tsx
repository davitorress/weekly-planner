import { useContext } from "react";

import { StyledLi, StyledUl } from "./styles";

import { TaskContext } from "../../../../store/taskContext";

const BoardDays = () => {
	const { days, filter, filterTasks } = useContext(TaskContext);

	return (
		<StyledUl>
			{days.map((day) => {
				return (
					<StyledLi
						key={day.toLowerCase()}
						day={day.toLowerCase()}
						className={filter === day.toLowerCase() ? "active" : ""}
						onClick={() => filterTasks(day.toLowerCase())}
					>
						{day}
					</StyledLi>
				);
			})}
		</StyledUl>
	);
};

export default BoardDays;
