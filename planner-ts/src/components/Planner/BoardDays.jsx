import { useContext } from "react";
import styled from "styled-components";

import { TaskContext } from "../../store/taskContext";

const StyledUl = styled.ul`
	display: flex;
	list-style: none;
	justify-content: end;
	gap: 5px;
`;

const StyledLi = styled.li`
	padding: 5px;
	width: 170px;

	color: #000000e5;
	font-weight: 600;
	font-size: 2rem;

	cursor: pointer;

	border-radius: 9px 9px 0px 0px;
	background-color: var(--${({ day }) => day}-color);
	box-shadow: 0px 4px 24px rgba(168, 168, 168, 0.25);

	&.active {
		flex-grow: 1;
		box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 24px rgba(168, 168, 168, 0.25);
	}
`;

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
