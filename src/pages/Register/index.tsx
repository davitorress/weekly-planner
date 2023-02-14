import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

import CompassWhite from "../../assets/compass-white.svg";

import Form from "../../components/UI/Form";
import InputGroup from "../../components/UI/InputGroup";
import Button from "../../components/UI/Button";
import { StyledAccount } from "../../components/Styled";

import useInput from "../../hooks/useInput";
import notify from "../../utils/toastNotify";

const Register = () => {
	const navigate = useNavigate();
	const [errorMessage, setErrorMessage] = useState("");

	const {
		value: firstName,
		hasError: firstNameHasError,
		valueChangeHandler: firstNameChange,
		inputFocusHandler: firstNameFocus,
		reset: resetFirstName,
	} = useInput((value) => {
		return value.trim().length >= 3;
	});

	const {
		value: lastName,
		hasError: lastNameHasError,
		valueChangeHandler: lastNameChange,
		inputFocusHandler: lastNameFocus,
		reset: resetLastName,
	} = useInput((value) => {
		return value.trim().length >= 5;
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

	let formIsValid =
		firstNameHasError ||
		lastNameHasError ||
		birthDateHasError ||
		countryHasError ||
		cityHasError ||
		emailHasError ||
		passwordHasError ||
		confirmPasswordHasError;

	const registerUser = (user: {}) => {
		fetch("https://latam-challenge-2.deta.dev/api/v1/users/sign-up", {
			method: "POST",
			body: JSON.stringify(user),
			headers: {
				"Content-Type": "application/json; charset=UTF-8",
			},
		})
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				if (typeof data === "object") {
					if (data.message) {
						notify("error", data.message);
						setErrorMessage(data.message);
					} else {
						notify("success", "User created with success!");
						setTimeout(() => {
							navigate("/login");
						}, 2000);
					}
				} else {
					notify("error", data);
					setErrorMessage(data);
				}
			});
	};

	const submitHandler = (event: FormEvent) => {
		event.preventDefault();

		if (!formIsValid) {
			notify("error", "Complete all the fields correctly!");
			setErrorMessage("Complete all the fields correctly!");
			return;
		} else {
			setErrorMessage("");
		}

		const dateSplit = birthDate.split("/");

		const userData = {
			firstName,
			lastName,
			birthDate: `${dateSplit[2]}-${dateSplit[1]}-${dateSplit[0]}`,
			country: countryValue,
			city: cityValue,
			email: emailValue,
			password: passwordValue,
			confirmPassword: confirmPasswordValue,
		};

		registerUser(userData);

		resetFirstName();
		resetLastName();
		resetBirthDate();
		resetCountry();
		resetCity();
		resetEmail();
		resetPassword();
		resetConfirmPassword();
	};

	const loginHandler = () => {
		navigate("/login");
	};

	return (
		<>
			<StyledAccount maxWidth={480}>
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

								{errorMessage && <p className="error-message">{errorMessage}</p>}
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
			</StyledAccount>
		</>
	);
};

export default Register;
