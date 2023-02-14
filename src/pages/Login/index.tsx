import { FormEvent, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import CompassWhite from "../../assets/compass-white.svg";
import UserIcon from "../../assets/icon-user.svg";
import LockIcon from "../../assets/icon-password.svg";

import Form from "../../components/UI/Form";
import InputGroup from "../../components/UI/InputGroup";
import Button from "../../components/UI/Button";
import { StyledAccount } from "../../components/Styled";

import useInput from "../../hooks/useInput";
import notify from "../../utils/toastNotify";
import { UserContext } from "../../store/userContext";

const Login = () => {
	const navigate = useNavigate();
	const { saveInfo } = useContext(UserContext);

	const [errorMessage, setErrorMessage] = useState<JSX.Element | string>(<></>);

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
			setErrorMessage("Complete all the fields correctly!");
		} else {
			setErrorMessage("");
		}
	}, [usernameHasError, passwordHasError]);

	const loginUser = (user: {}) => {
		fetch("https://latam-challenge-2.deta.dev/api/v1/users/sign-in", {
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
						notify("success", `Welcome, ${data.user.firstName}!`);
						saveInfo({
							id: data.user._id,
							city: data.user.city,
						});
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
			[...document.querySelectorAll("input")].map((input) => input.classList.add("invalid"));
			notify("warning", "Complete all the fields correctly!");
			setErrorMessage(
				<>
					Wow, invalid username or password.
					<br />
					Please, try again!
				</>
			);
			return;
		} else {
			setErrorMessage("");
		}

		const userData = {
			email: usernameValue,
			password: passwordValue,
		};

		loginUser(userData);

		resetUsername();
		resetPassword();
	};

	const registerHandler = () => {
		navigate("/register");
	};

	return (
		<StyledAccount maxWidth={380}>
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

							{errorMessage && <p className="error-message">{errorMessage}</p>}
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
				<a href="https://compass.uol/en/home/" target="_blank">
					<img src={CompassWhite} alt="Compass.uol logo" />
				</a>
			</section>
		</StyledAccount>
	);
};

export default Login;
