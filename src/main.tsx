import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { AuthProvider } from "./store/authContext";
import { UserProvider } from "./store/userContext";
import { TaskProvider } from "./store/taskContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<AuthProvider>
			<UserProvider>
				<TaskProvider>
					<App />
				</TaskProvider>
			</UserProvider>
		</AuthProvider>
	</React.StrictMode>
);
