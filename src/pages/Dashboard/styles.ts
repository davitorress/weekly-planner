import styled from "styled-components";

import CompassBackground from "../../assets/logo-background.svg";

export const StyledDashboard = styled.main`
	display: grid;
	grid-template-rows: 120px 1fr;

	background-color: var(--background-light);
`;

export const StyledContent = styled.section`
	min-height: 100%;
	display: grid;
	grid-template-rows: 105px 1fr;

	padding: 0 20px;

	background-size: 30%;
	background-repeat: no-repeat;
	background-position: right bottom;
	background-image: url(${CompassBackground});
`;
