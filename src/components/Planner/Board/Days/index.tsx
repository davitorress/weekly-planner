import { useContext } from "react";

import { StyledLi, StyledUl } from "./styles";

import { EventContext } from "../../../../store/eventContext";

const BoardDays = () => {
	const { days, filter, filterEvents } = useContext(EventContext);

	return (
		<StyledUl>
			{days.map((day) => {
				return (
					<StyledLi key={day} day={day} className={filter === day ? "active" : ""} onClick={() => filterEvents(day)}>
						{day}
					</StyledLi>
				);
			})}
		</StyledUl>
	);
};

export default BoardDays;
