import styled from "styled-components";

import CompassWhite from "../assets/compass-white.svg";
import UserIcon from "../assets/icon-user.svg";
import LockIcon from "../assets/icon-password.svg";

import Form from "../components/UI/Form";
import Input from "../components/UI/Input";
import Button from "../components/UI/Button";

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
	const submitHandler = (event) => {
		event.preventDefault();
	};

	return (
		<StyledLogin>
			<section>
				<section className="container">
					<div>
						<h1>Welcome,</h1>
						<p>To continue browsing safely, log in to the network.</p>
					</div>

					<Form onSubmit={submitHandler}>
						<section className="form__inputs">
							<h2 className="form__title">Login</h2>

							<Input name="first-name" id="first-name" placeholder="user name" iconPath={UserIcon} />
							<Input type="password" name="password" id="password" placeholder="password" iconPath={LockIcon} />
						</section>

						<section>
							<Button type="submit" className="button__form" fontSize="3.2rem">
								Log in
							</Button>
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
