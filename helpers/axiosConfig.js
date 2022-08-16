const axiosConfig = (token) => {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};

	return config;
};

export default axiosConfig;
