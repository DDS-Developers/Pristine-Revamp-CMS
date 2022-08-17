// Helpers
import getSearch from "~/helpers/getSearch";

// Components
import LoadingSpinner from "~/components/LoadingSpinner";

// Dependencies
import DataTable from "react-data-table-component";
import { useDispatch } from "react-redux";

function DataTableComponent({ state, getList, columns }) {
	const dispatch = useDispatch();

	const handlePageChange = (page) => {
		const param = new URLSearchParams({
			page: page,
			per_page: state.per_page,
		});
		const search = getSearch(state.search, param);

		dispatch(getList(search));
	};
	const handlePerRowsChange = (perPage, page) => {
		const param = new URLSearchParams({
			page: page,
			per_page: perPage,
		});
		const search = getSearch(state.search, param);

		dispatch(getList(search));
	};

	return (
		<DataTable
			noDataComponent={
				<div style={{ padding: "24px" }}>Tidak ada data tersedia.</div>
			}
			columns={columns}
			data={state.data}
			progressPending={state.loading}
			progressComponent={
				<div className="d-flex justify-content-center">
					<LoadingSpinner />
				</div>
			}
			pagination
			paginationServer
			paginationTotalRows={state.total}
			onChangeRowsPerPage={handlePerRowsChange}
			onChangePage={handlePageChange}
		/>
	);
}

export default DataTableComponent;
