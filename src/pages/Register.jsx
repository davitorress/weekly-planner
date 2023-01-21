import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import CompassWhite from "../assets/compass-white.svg";

import Form from "../components/UI/Form";
import InputGroup from "../components/UI/InputGroup";
import Button from "../components/UI/Button";

import useInput from "../hooks/useInput";
import { UserContext } from "../store/userContext";

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

	const userCtx = useContext(UserContext);

	const {
		value: firstName,
		hasError: firstNameHasError,
		valueChangeHandler: firstNameChange,
		inputFocusHandler: firstNameFocus,
		reset: resetFirstName,
	} = useInput((value) => {
		return value.trim().length > 2;
	});

	const {
		value: lastName,
		hasError: lastNameHasError,
		valueChangeHandler: lastNameChange,
		inputFocusHandler: lastNameFocus,
		reset: resetLastName,
	} = useInput((value) => {
		return value.trim().length > 2;
	});

	const {
		value: birthDate,
		hasError: birthDateHasError,
		valueChangeHandler: birthDateChange,
		inputFocusHandler: birthDateFocus,
		reset: resetBirthDate,
	} = useInput((value) => {
		return value.trim().length === 10;
	}, "birth-date");

	const {
		value: countryValue,
		hasError: countryHasError,
		valueChangeHandler: countryChange,
		inputFocusHandler: countryFocus,
		reset: resetCountry,
	} = useInput((value) => {
		return value.trim().length !== 0;
	});

	const {
		value: cityValue,
		hasError: cityHasError,
		valueChangeHandler: cityChange,
		inputFocusHandler: cityFocus,
		reset: resetCity,
	} = useInput((value) => {
		return value.trim().length !== 0;
	});

	const {
		value: emailValue,
		hasError: emailHasError,
		valueChangeHandler: emailChange,
		inputFocusHandler: emailFocus,
		reset: resetEmail,
	} = useInput((value) => {
		return value.trim().length !== 0 && value.trim().includes("@");
	});

	const {
		value: passwordValue,
		hasError: passwordHasError,
		valueChangeHandler: passwordChange,
		inputFocusHandler: passwordFocus,
		reset: resetPassword,
	} = useInput((value) => {
		return value.trim().length >= 6;
	});

	const {
		value: confirmPasswordValue,
		hasError: confirmPasswordHasError,
		valueChangeHandler: confirmPasswordChange,
		inputFocusHandler: confirmPasswordFocus,
		reset: resetConfirmPassword,
	} = useInput((value) => {
		return value.trim().length >= 6;
	});

	let formIsInvalid =
		firstNameHasError ||
		lastNameHasError ||
		birthDateHasError ||
		countryHasError ||
		cityHasError ||
		emailHasError ||
		passwordHasError ||
		confirmPasswordHasError;
	let errorMessage = "Complete all the fields correctly!";

	const submitHandler = (event) => {
		event.preventDefault();

		if (formIsInvalid) {
			return;
		}

		const userData = {
			firstName,
			lastName,
			username: firstName + " " + lastName,
			birthDate,
			country: countryValue,
			city: cityValue,
			email: emailValue,
			password: passwordValue,
		};

		userCtx.register(userData);
		localStorage.setItem("user", JSON.stringify(userData));

		resetFirstName();
		resetLastName();
		resetBirthDate();
		resetCountry();
		resetCity();
		resetEmail();
		resetPassword();
		resetConfirmPassword();

		navigate("/login");
	};

	const loginHandler = () => {
		const userData = JSON.parse(localStorage.getItem("user"));

		if (!userData) {
			alert("There is no registered account saved. Please register an account.");
			return;
		}

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
								className={`input__account ${firstNameHasError ? "invalid" : ""}`}
								value={firstName}
								onChange={firstNameChange}
								onFocus={firstNameFocus}
							/>
							<InputGroup
								label="last name"
								name="last-name"
								id="last-name"
								placeholder="Your last name"
								className={`input__account ${lastNameHasError ? "invalid" : ""}`}
								value={lastName}
								onChange={lastNameChange}
								onFocus={lastNameFocus}
							/>
							<InputGroup
								label="birth date"
								type="birth-date"
								name="birth-date"
								id="birth-date"
								placeholder="MM/DD/YYYY"
								className={`input__account ${birthDateHasError ? "invalid" : ""}`}
								value={birthDate}
								onChange={birthDateChange}
								onFocus={birthDateFocus}
							/>
							<InputGroup
								label="Country"
								name="country"
								id="country"
								placeholder="Your Country"
								className={`input__account ${countryHasError ? "invalid" : ""}`}
								value={countryValue}
								onChange={countryChange}
								onFocus={countryFocus}
							/>
							<InputGroup
								label="City"
								name="city"
								id="city"
								placeholder="Your City"
								className={`input__account ${cityHasError ? "invalid" : ""}`}
								value={cityValue}
								onChange={cityChange}
								onFocus={cityFocus}
							/>
							<InputGroup
								label="email"
								type="email"
								name="email"
								id="email"
								placeholder="A valid e-mail here"
								className={`input__account ${emailHasError ? "invalid" : ""}`}
								value={emailValue}
								onChange={emailChange}
								onFocus={emailFocus}
							/>
							<InputGroup
								label="password"
								type="password"
								name="password"
								id="password"
								placeholder="Your password"
								className={`input__account ${passwordHasError ? "invalid" : ""}`}
								value={passwordValue}
								onChange={passwordChange}
								onFocus={passwordFocus}
							/>
							<InputGroup
								label="password"
								type="password"
								name="confirm-password"
								id="confirm-password"
								placeholder="Confirm your password"
								className={`input__account ${confirmPasswordHasError ? "invalid" : ""}`}
								value={confirmPasswordValue}
								onChange={confirmPasswordChange}
								onFocus={confirmPasswordFocus}
							/>

							{formIsInvalid && <p className="error-message">{errorMessage}</p>}
							{!passwordHasError && !confirmPasswordHasError && !(passwordValue === confirmPasswordValue) && (
								<p className="error-message">Passwords do not match!</p>
							)}
						</section>

						<section>
							<Button type="submit" className="button__form" fontSize="3.2rem">
								Register Now
							</Button>
							<div className="form__link">
								<p>Already have an account?</p>
								<Button type="reset" className="button__link" onClick={loginHandler}>
									Log in
								</Button>
							</div>
						</section>
					</Form>
				</section>
			</section>

			<section className="background-img">
				<a href="https://compass.uol/en/home/" target="_blank">
					<img src={CompassWhite} alt="Compass.uol logo" />
				</a>
			</section>
		</StyledRegister>
	);
};

export default Register;
