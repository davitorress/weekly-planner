import { ForwardedRef, InputHTMLAttributes, forwardRef } from "react";

import { StyledInput } from "./styles";

const Input = forwardRef((props: InputHTMLAttributes<HTMLInputElement>, ref: ForwardedRef<HTMLInputElement>) => {
	return <StyledInput ref={ref} {...props} type={props.type ? props.type : "text"} />;
});

export default Input;
