import styled from "styled-components";

import BoardDays from "./BoardDays";
import BoardMeetings from "./BoardMeetings";

const StyledBoard = styled.section`
	padding: 30px 0;
`;

const Board = () => {
	return (
		<StyledBoard>
			<BoardDays />
			<BoardMeetings />
		</StyledBoard>
	);
};

export default Board;
