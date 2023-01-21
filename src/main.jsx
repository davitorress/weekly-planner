import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { AuthProvider } from "./store/authContext";
import { UserProvider } from "./store/userContext";
import { MeetingsProvider } from "./store/meetingsContext";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<AuthProvider>
			<UserProvider>
				<MeetingsProvider>
					<App />
				</MeetingsProvider>
			</UserProvider>
		</AuthProvider>
	</React.StrictMode>
);

