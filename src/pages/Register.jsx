import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import CompassWhite from "../assets/compass-white.svg";

import Form from "../components/UI/Form";
import InputGroup from "../components/UI/InputGroup";
import Button from "../components/UI/Button";

const StyledRegister = styled.main`
	display: grid;
	align-items: center;
	grid-template-columns: 50% 50%;
	text-align: center;
	background: var(--background-dark);

	& section:first-child {
		padding: 3rem 0;
	}

	.container {
		margin: 0 auto;
		max-width: 480px;

		display: grid;
		row-gap: 5rem;

		text-align: left;
		font-size: 1.6rem;
		color: var(--white-secondary);
	}

	.container h1 {
		font-weight: 400;
		font-size: 6rem;
	}

	.background-img {
		width: 100%;
		height: 100%;
		padding: 2rem;

		overflow: clip;
		background-size: cover;
		background-image: url("/src/assets/back.png");
	}
`;

const Register = () => {
	const navigate = useNavigate();

	const submitHandler = (event) => {
		event.preventDefault();
		navigate("/login");
	};

	return (
		<StyledRegister>
			<section>
				<section className="container">
					<div>
						<h1>Welcome,</h1>
						<p>Please, register to continue</p>
					</div>

					<Form onSubmit={submitHandler} className="form__account">
						<section className="form__inputs">
							<InputGroup
								label="first name"
								name="first-name"
								id="first-name"
								placeholder="Your first name"
								className="input__account"
							/>
							<InputGroup
								label="last name"
								name="last-name"
								id="last-name"
								placeholder="Your last name"
								className="input__account"
							/>
							<InputGroup
								label="birth date"
								name="birth-date"
								id="birth-date"
								placeholder="MM/DD/YYYY"
								className="input__account"
							/>
							<InputGroup
								label="Country"
								name="country"
								id="country"
								placeholder="Your Country"
								className="input__account"
							/>
							<InputGroup label="City" name="city" id="city" placeholder="Your City" className="input__account" />
							<InputGroup
								label="email"
								type="email"
								name="email"
								id="email"
								placeholder="A valid e-mail here"
								className="input__account"
							/>
							<InputGroup
								label="password"
								type="password"
								name="password"
								id="password"
								placeholder="Your password"
								className="input__account"
							/>
							<InputGroup
								label="password"
								type="password"
								name="confirm-password"
								id="confirm-password"
								placeholder="Confirm your password"
								className="input__account"
							/>
						</section>

						<section>
							<Button type="submit" className="button__form" fontSize="3.2rem">
								Register Now
							</Button>
						</section>
					</Form>
				</section>
			</section>

			<section className="background-img">
				<img src={CompassWhite} alt="" />
			</section>
		</StyledRegister>
	);
};

export default Register;
