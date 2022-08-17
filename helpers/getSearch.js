const getSearch = (data, param) => {
	var x = 0;

	for (var key in data) {
		if (data[key] !== null && data[key] !== "") {
			param.append(`search_by[${x}]`, key);
			param.append(`keyword[${x}]`, data[key]);

			x++;
		}
	}

	return param.toString();
};

export default getSearch;
