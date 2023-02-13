import { ReactNode } from "react";
import ReactDOM from "react-dom";

import { BackdropStyled, ModalStyled } from "./styles";

interface ModalProps {
	onClose: () => void;
	children: ReactNode;
}

const portalElement = document.querySelector("#overlay")!;

const ModalOverlay = (props: { children: ReactNode }) => {
	return (
		<ModalStyled>
			<div>{props.children}</div>
		</ModalStyled>
	);
};

const Modal = (props: ModalProps) => {
	return (
		<>
			{ReactDOM.createPortal(<BackdropStyled onClick={props.onClose} />, portalElement)}
			{ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
		</>
	);
};

export default Modal;
