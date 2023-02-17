import { ReactNode } from "react";
import ReactDOM from "react-dom";
import { IoIosClose } from "react-icons/io";
import { IoWarningOutline } from "react-icons/io5";

import { ActionsStyled, ModalStyled, SectionStyled } from "./styles";

import Button from "../Button";
import { BackdropStyled } from "../../Styled";

interface ModalProps {
	onCancel: () => void;
	onConfirm: () => void;
	children: ReactNode;
}

const portalElement = document.querySelector("#overlay")!;

const ModalOverlay = (props: ModalProps) => {
	return (
		<ModalStyled>
			<IoIosClose className="close-icon" onClick={props.onCancel} size={36} />
			<SectionStyled>
				<div className="warning-icon">
					<IoWarningOutline size={36} />
				</div>
				<div className="content">
					<h3>Are you sure?</h3>
					{props.children}
				</div>
			</SectionStyled>
			<ActionsStyled>
				<Button className="button__modal button__modal__cancel" onClick={props.onCancel}>
					No, cancel
				</Button>
				<Button className="button__modal button__modal__confirm" onClick={props.onConfirm}>
					Yes, confirm
				</Button>
			</ActionsStyled>
		</ModalStyled>
	);
};

const Modal = (props: ModalProps) => {
	return (
		<>
			{ReactDOM.createPortal(<BackdropStyled onClick={props.onCancel} />, portalElement)}
			{ReactDOM.createPortal(
				<ModalOverlay onCancel={props.onCancel} onConfirm={props.onConfirm}>
					{props.children}
				</ModalOverlay>,
				portalElement
			)}
		</>
	);
};

export default Modal;
