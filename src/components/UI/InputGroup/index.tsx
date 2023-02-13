import { StyledDiv, StyledInput } from "./styles";
import { InputProps } from "./interface";

import { Icon } from "../../Styled";

const InputGroup = (props: InputProps) => {
	return (
		<StyledDiv>
			{props.label && <label htmlFor={props.id}>{props.label}</label>}
			<StyledInput {...props} label={props.label} type={props.type ? props.type : "text"} />
			<Icon className="icon__input" iconPath={props.iconPath} />
		</StyledDiv>
	);
};

export default InputGroup;
