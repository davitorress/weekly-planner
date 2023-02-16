import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { UserProvider } from "./store/userContext";
import { EventProvider } from "./store/eventContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<UserProvider>
		<EventProvider>
			<App />
		</EventProvider>
	</UserProvider>
);
