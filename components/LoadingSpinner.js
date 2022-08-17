import { TailSpin } from "react-loader-spinner";

const LoadingSpinner = ({ color, size }) => (
	<TailSpin
		color={color !== undefined ? color : "var(--pristine-green)"}
		height={size !== undefined ? size : 50}
		width={size !== undefined ? size : 50}
	/>
);

export default LoadingSpinner;
