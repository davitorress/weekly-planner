import { ButtonProps } from "./interface";
import { StyledButton } from "./styles";

const Button = (props: ButtonProps) => {
	return (
		<StyledButton {...props} type={props.type ? props.type : "button"}>
			{props.children}
		</StyledButton>
	);
};

export default Button;
