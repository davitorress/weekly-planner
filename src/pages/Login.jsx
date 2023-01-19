import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import CompassWhite from "../assets/compass-white.svg";
import UserIcon from "../assets/icon-user.svg";
import LockIcon from "../assets/icon-password.svg";

import Form from "../components/UI/Form";
import InputGroup from "../components/UI/InputGroup";
import Button from "../components/UI/Button";

import useInput from "../hooks/useInput";
import { AuthContext } from "../store/authContext";

const StyledLogin = styled.main`
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
		max-width: 380px;

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

const Login = () => {
	const navigate = useNavigate();

	const [errorMessage, setErrorMessage] = useState();

	const authCtx = useContext(AuthContext);

	const userData = JSON.parse(localStorage.getItem("user"));

	const {
		value: usernameValue,
		isValid: usernameIsValid,
		hasError: usernameHasError,
		valueChangeHandler: usernameChange,
		inputFocusHandler: usernameFocus,
		reset: resetUsername,
	} = useInput((value) => {
		return value.trim().length !== 0;
	});

	const {
		value: passwordValue,
		isValid: passwordIsValid,
		hasError: passwordHasError,
		valueChangeHandler: passwordChange,
		inputFocusHandler: passwordFocus,
		reset: resetPassword,
	} = useInput((value) => {
		return value.trim().length >= 6;
	});

	let formIsValid = usernameIsValid || passwordIsValid;

	useEffect(() => {
		if (usernameHasError || passwordHasError) {
			setErrorMessage(<p className="error-message">Complete all the fields correctly!</p>);
		} else {
			setErrorMessage();
		}
	}, [usernameHasError, passwordHasError]);

	const submitError = (inputId, functionClass) => {
		const input = document.getElementById(inputId);

		if (functionClass === "add") {
			input.focus();
			input.classList.add("invalid");
			setErrorMessage(
				<p className="error-message">
					Wow, invalid username or password.
					<br />
					Please, try again!
				</p>
			);
		} else {
			input.classList.remove("invalid");
		}
	};

	const submitHandler = (event) => {
		event.preventDefault();

		if (!formIsValid) {
			[...document.querySelectorAll("input")].map((input) => input.classList.add("invalid"));
			setErrorMessage(
				<p className="error-message">
					Wow, invalid username or password.
					<br />
					Please, try again!
				</p>
			);
			return;
		} else {
			setErrorMessage();
		}

		if (usernameValue.trim() === userData.username || usernameValue === userData.email) {
			submitError("username", "remove");
		} else {
			submitError("username", "add");
			return;
		}

		if (passwordValue === userData.password) {
			submitError("password", "remove");
		} else {
			submitError("password", "add");
			return;
		}

		resetUsername();
		resetPassword();

		authCtx.login();
		navigate("/");
	};

	const registerHandler = () => {
		authCtx.logout();
		navigate("/register");
	};

	return (
		<StyledLogin>
			<section>
				<section className="container">
					<div>
						<h1>Welcome,</h1>
						<p>To continue browsing safely, log in to the network.</p>
					</div>

					<Form onSubmit={submitHandler} className="form__account">
						<section className="form__inputs">
							<h2 className="form__title">Login</h2>

							<InputGroup
								name="username"
								id="username"
								placeholder="user name"
								iconPath={UserIcon}
								className={`input__account ${usernameHasError ? "invalid" : ""} ${usernameValue ? "input__icon" : ""}`}
								value={usernameValue}
								onChange={usernameChange}
								onFocus={usernameFocus}
							/>
							<InputGroup
								type="password"
								name="password"
								id="password"
								placeholder="password"
								iconPath={LockIcon}
								className={`input__account ${passwordHasError ? "invalid" : ""} ${passwordValue ? "input__icon" : ""}`}
								value={passwordValue}
								onChange={passwordChange}
								onFocus={passwordFocus}
							/>

							{errorMessage}
						</section>

						<section>
							<Button type="submit" className="button__form" fontSize="3.2rem">
								Log in
							</Button>
							<div className="form__link">
								<p>Don't have an account?</p>
								<Button type="reset" className="button__link" onClick={registerHandler}>
									Sign up
								</Button>
							</div>
						</section>
					</Form>
				</section>
			</section>

			<section className="background-img">
				<img src={CompassWhite} alt="" />
			</section>
		</StyledLogin>
	);
};

export default Login;
