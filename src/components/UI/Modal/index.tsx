import { ReactNode } from "react";
import ReactDOM from "react-dom";
import { VscError } from "react-icons/vsc";
import { IoMegaphoneOutline } from "react-icons/io5";

import { BackdropStyled, ModalStyled } from "./styles";

interface ModalProps {
	onClose: () => void;
	children: ReactNode;
}

const portalElement = document.querySelector("#overlay")!;

const ModalOverlay = (props: { children: ReactNode; onClose: () => void }) => {
	return (
		<ModalStyled className="success">
			<VscError className="close-icon" onClick={props.onClose} />
			<IoMegaphoneOutline size={84} />
			{props.children}
		</ModalStyled>
	);
};

const Modal = (props: ModalProps) => {
	return (
		<>
			{ReactDOM.createPortal(<BackdropStyled onClick={props.onClose} />, portalElement)}
			{ReactDOM.createPortal(<ModalOverlay onClose={props.onClose}>{props.children}</ModalOverlay>, portalElement)}
		</>
	);
};

export default Modal;
