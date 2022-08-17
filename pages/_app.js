// Styles
import "~/styles/globals.css";
import "~/styles/dds.scss";
import "~/styles/adminkit.css";
import "simplebar/dist/simplebar.min.css";
import "react-datepicker/dist/react-datepicker.css";
import "suneditor/dist/css/suneditor.min.css";

// Scripts
import store from "~/store";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }) {
	return (
		<Provider store={store}>
			<Component {...pageProps} />
		</Provider>
	);
}

export default MyApp;
