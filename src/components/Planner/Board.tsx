import styled from "styled-components";

import BoardDays from "./BoardDays";
import BoardTasks from "./BoardTasks";

const StyledBoard = styled.section`
	padding-top: 20px;
`;

const Board = () => {
	return (
		<StyledBoard>
			<BoardDays />
			<BoardTasks />
		</StyledBoard>
	);
};

export default Board;
