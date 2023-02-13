import { ForwardedRef, SelectHTMLAttributes, forwardRef } from "react";

import { StyledSelect } from "./styles";

const Select = forwardRef((props: SelectHTMLAttributes<HTMLSelectElement>, ref: ForwardedRef<HTMLSelectElement>) => {
	return (
		<StyledSelect ref={ref} {...props}>
			{props.children}
		</StyledSelect>
	);
});

export default Select;
