import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import Cloud from "../../assets/cloud.svg";
import CompassBlack from "../../assets/compass-black.svg";
import Arrow from "../../assets/arrow-right-north.svg";

import Button from "../UI/Button";
import Icon from "../UI/Icon";
import { AuthContext } from "../../store/authContext";

const StyledHeader = styled.header`
	display: grid;
	align-items: center;
	grid-template-columns: 30% repeat(3, 1fr);

	color: var(--black-secondary);
	text-align: center;

	background-color: #fff;
	box-shadow: 0px 4px 24px rgba(168, 168, 168, 0.25);
`;

const StyledSection = styled.section`
	height: 65%;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;

	&.planner__name {
		padding: 24px 10px;

		color: var(--white-primary);
		text-align: left;

		background-color: #000;
		border-radius: 0px 14px 15px 0px;
	}
	&.planner__name h1 {
		font-weight: 700;
		font-size: 2.2rem;
	}
	&.planner__name p {
		font-weight: 400;
		font-size: 1.6rem;
	}

	&.planner__datetime h2 {
		font-weight: 700;
		font-size: 3rem;
	}
	&.planner__datetime p {
		font-weight: 400;
		font-size: 1.8rem;
	}

	&.planner__climate h2 {
		font-weight: 700;
		font-size: 4rem;
	}
	&.planner__climate p {
		font-weight: 400;
		font-size: 1.6rem;
	}
	&.planner__climate img {
		width: 34px;
		height: 34px;
	}

	&.planner__logout {
		padding: 0 20px;
		align-items: end;
	}
	&.planner__logout button {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	&.planner__logout p {
		color: #000;
		font-weight: 400;
		font-size: 1.8rem;
	}
`;

const Header = () => {
	const navigate = useNavigate();

	const authCtx = useContext(AuthContext);

	const logoutHandler = () => {
		authCtx.logout();
		navigate("/login");
	};

	return (
		<StyledHeader>
			<StyledSection className="planner__name">
				<h1>Weekly Planner</h1>
				<p>Use this planner to organize your daily issues.</p>
			</StyledSection>

			<StyledSection className="planner__datetime">
				<h2>10:58</h2>
				<p>November 22th, 2022</p>
			</StyledSection>

			<StyledSection className="planner__climate">
				<p>Asunción - Paraguay</p>
				<h2>
					<img src={Cloud} alt="cloud" />
					22°
				</h2>
			</StyledSection>

			<StyledSection className="planner__logout">
				<img src={CompassBlack} />
				<Button className="button__icon" onClick={logoutHandler}>
					<Icon iconPath={Arrow} className="icon__button" />
					<p>Logout</p>
				</Button>
			</StyledSection>
		</StyledHeader>
	);
};

export default Header;
