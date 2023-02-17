import ReactDOM from "react-dom";

import { StyledBackdrop, StyledLoading } from "../../Styled";

const portalElement = document.querySelector("#overlay")!;

const Loading = () => {
	return (
		<>
			{ReactDOM.createPortal(<StyledBackdrop />, portalElement)}
			{ReactDOM.createPortal(<StyledLoading />, portalElement)}
		</>
	);
};

export default Loading;
