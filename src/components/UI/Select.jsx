import { forwardRef } from "react";
import styled from "styled-components";

const StyledSelect = styled.select`
	font-size: 1.6rem;
	font-family: "Mulish", sans-serif;

	&.select__action {
		width: 180px;
		padding: 12px 8px;

		color: var(--black-placeholder);

		border-radius: 10px;
		border: 1px solid var(--yellow-action-border);
	}
	&:focus.select__action {
		outline: 2px solid var(--yellow-action-border);
	}
`;

const Select = forwardRef(({ children, defaultValue, className }, ref) => {
	return (
		<StyledSelect ref={ref} defaultValue={defaultValue} className={className}>
			{children}
		</StyledSelect>
	);
});

export default Select;
