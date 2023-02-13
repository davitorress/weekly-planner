import { FormHTMLAttributes } from "react";

import { StyledForm } from "./styles";

const Form = (props: FormHTMLAttributes<HTMLFormElement>) => {
	return <StyledForm {...props}>{props.children}</StyledForm>;
};

export default Form;
