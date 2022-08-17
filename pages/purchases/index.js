// Layouts
import Admin from "~/layouts/Admin";

// Constants
import { purchaseColumns } from "~/constants/columns";

// Components
import DataTable from "~/components/DataTable";

// Thunks
import { getList } from "~/thunks/purchaseThunk";

// Dependencies
import { useMemo } from "react";
import { useSelector } from "react-redux";

const breadcrumbs = [
	{
		current: true,
		name: "Pembelian",
		url: "#",
	},
];

function Index() {
	const purchase = useSelector((state) => state.purchase);

	const columns = useMemo(() => purchaseColumns, []);

	return (
		<Admin breadcrumbs={breadcrumbs} title="Daftar Pembelian">
			<div className="card">
				<DataTable
					columns={columns}
					state={purchase}
					getList={getList}
				/>
			</div>
		</Admin>
	);
}

export default Index;
