import styled from "styled-components";

import BoardDays from "./BoardDays";
import BoardMeetings from "./BoardMeetings";

const StyledBoard = styled.section`
	padding-top: 20px;
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
