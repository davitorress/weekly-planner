import { toast } from "react-toastify";

type ToastType = "info" | "success" | "warning" | "error";

const notify = (alertType: ToastType, alertMessage: string) => {
	toast[`${alertType}`](alertMessage, {
		position: "top-right",
		autoClose: 5000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
		theme: "colored",
		style: {
			fontWeight: 600,
			fontSize: "1.4rem",
			fontFamily: "Mulish",
		},
	});
};

export default notify;
