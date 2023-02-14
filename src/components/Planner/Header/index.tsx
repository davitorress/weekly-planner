import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { StyledHeader, StyledSection } from "./styles";

import Cloud from "../../../assets/cloud.svg";
import CompassBlack from "../../../assets/compass-black.svg";
import Arrow from "../../../assets/arrow-right-north.svg";

import Button from "../../UI/Button";
import { Icon } from "../../Styled";

import notify from "../../../utils/toastNotify";
import { UserContext } from "../../../store/userContext";

interface WeatherProps {
	location: {
		name: string;
		country: string;
	};
	current: {
		temp_c: number;
	};
}

const Header = () => {
	const navigate = useNavigate();

	const { user, clearInfo } = useContext(UserContext);

	const [weather, setWeather] = useState<WeatherProps>();
	const [isLoading, setIsLoading] = useState(true);
	const [weatherError, setWeatherError] = useState("");

	let currentTime = new Date().toLocaleTimeString([], {
		hour: "2-digit",
		minute: "2-digit",
	});
	const [time, setTime] = useState(currentTime);

	let currentDate = new Date().toLocaleDateString(["en-US"], { dateStyle: "long" }).split(",");
	const dateMessage = currentDate[0].concat("th,").concat(currentDate[1]);

	useEffect(() => {
		const interval = setInterval(() => {
			currentTime = new Date().toLocaleTimeString([], {
				hour: "2-digit",
				minute: "2-digit",
			});

			setTime(currentTime);
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	}, []);

	const weatherHandler = (city: string) => {
		fetch(`http://api.weatherapi.com/v1/current.json?key=ccbce4371b3c4f7b8c8142923232001&q=${city}&lang=en`)
			.then((res) => {
				if (res.ok) return res.json();
				else {
					notify("error", "Location not found!");
					setWeatherError("Location not found!");
				}
			})
			.then((data) => {
				setWeather(data);
				setIsLoading(false);
			});
	};

	useEffect(() => {
		weatherHandler(user.city);

		return () => {};
	}, []);

	const logoutHandler = () => {
		clearInfo();
		navigate("/login");
	};

	return (
		<StyledHeader>
			<StyledSection className="planner__name">
				<h1>Weekly Planner</h1>
				<p>Use this planner to organize your daily issues.</p>
			</StyledSection>

			<StyledSection className="planner__datetime">
				<h2>{time}</h2>
				<p>{dateMessage}</p>
			</StyledSection>

			<StyledSection className="planner__climate">
				{isLoading ? (
					<h2>
						<img src={Cloud} alt="cloud" />
						Loading...
					</h2>
				) : (
					<>
						{weatherError ? (
							<>
								<p>{weatherError}</p>
								<h2>
									<img src={Cloud} alt="cloud" />
								</h2>
							</>
						) : (
							<>
								<p>
									{weather!.location.name} - {weather!.location.country}
								</p>
								<h2>
									<img src={Cloud} alt="cloud" />
									{weather!.current.temp_c}°
								</h2>
							</>
						)}
					</>
				)}
			</StyledSection>

			<StyledSection className="planner__logout">
				<a href="https://compass.uol/en/home/" target="_blank">
					<img src={CompassBlack} alt="Compass.uol logo" />
				</a>
				<Button className="button__icon" onClick={logoutHandler}>
					<Icon iconPath={Arrow} className="icon__button" />
					<p>Logout</p>
				</Button>
			</StyledSection>
		</StyledHeader>
	);
};

export default Header;
