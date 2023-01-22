import styled from "styled-components";

import Icon from "./Icon";

const StyledDiv = styled.div`
	display: grid;
	grid-template-columns: 1fr 380px;
	align-items: center;
	position: relative;
`;

const StyledInput = styled.input`
	padding: 18px;

	color: var(--white-secondary);
	font-size: 1.6rem;
	font-family: "Mulish", sans-serif;

	border-radius: 50px;
	border: 1px solid #fff;

	${({ label }) => (!label ? `grid-column: 2 span;` : "")}

	&:-webkit-autofill,
	&:-webkit-autofill:hover,
	&:-webkit-autofill:focus {
		-webkit-text-fill-color: var(--white-secondary);
	}

	&:focus {
		outline: 2px solid #fff;
	}

	&.invalid {
		border: 1px solid var(--yellow-error);
	}
	&:focus.invalid {
		outline: 2px solid var(--yellow-error);
	}

	&:focus ~ i,
	&.input__icon ~ i {
		transform: translateX(-150%);
	}

	&::placeholder {
		font-size: 1.2rem;
	}

	&.input__account {
		background-color: #26292c;
	}

	&.input__account:-webkit-autofill,
	&.input__account:-webkit-autofill:hover,
	&.input__account:-webkit-autofill:focus {
		-webkit-box-shadow: 0 0 0 30px #26292c inset;
	}
`;

const InputGroup = ({ label, type, name, id, placeholder, className, iconPath, value, onChange, onFocus }) => {
	return (
		<StyledDiv label={label}>
			{label && <label htmlFor={id}>{label}</label>}
			<StyledInput
				label={label}
				type={type ? type : "text"}
				name={name}
				id={id}
				placeholder={placeholder}
				className={className}
				value={value}
				onChange={onChange}
				onFocus={onFocus}
			/>
			<Icon className="icon__input" iconPath={iconPath} />
		</StyledDiv>
	);
};

export default InputGroup;
