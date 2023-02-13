import { StyledContent, StyledDashboard } from "./styles";

import Header from "../../components/Planner/Header";
import Actions from "../../components/Planner/Actions";
import Board from "../../components/Planner/Board";

const Dashboard = () => {
	return (
		<StyledDashboard>
			<Header />
			<StyledContent>
				<Actions />
				<Board />
			</StyledContent>
		</StyledDashboard>
	);
};

export default Dashboard;
