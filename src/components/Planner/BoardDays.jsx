import styled from "styled-components";

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

	border-radius: 9px 9px 0px 0px;
	background-color: var(--${({ day }) => day}-color);
	box-shadow: 0px 4px 24px rgba(168, 168, 168, 0.25);
`;

const BoardDays = () => {
	return (
		<StyledUl>
			<StyledLi day="monday">Monday</StyledLi>
			<StyledLi day="tuesday">Tuesday</StyledLi>
			<StyledLi day="wednesday">Wednesday</StyledLi>
			<StyledLi day="thursday">Thursday</StyledLi>
			<StyledLi day="friday">Friday</StyledLi>
			<StyledLi day="saturday">Saturday</StyledLi>
			<StyledLi day="sunday">Sunday</StyledLi>
		</StyledUl>
	);
};

export default BoardDays;
