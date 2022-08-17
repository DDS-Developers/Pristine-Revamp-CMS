// Layouts
import Admin from "~/layouts/Admin";

// Constants
import { messageColumns } from "~/constants/columns";

// Components
import DataTable from "~/components/DataTable";

// Thunks
import { getList } from "~/thunks/messageThunk";

// Dependencies
import { useMemo } from "react";
import { useSelector } from "react-redux";

const breadcrumbs = [
	{
		current: true,
		name: "Pesan / Komplain",
		url: "#",
	},
];

function Index() {
	const message = useSelector((state) => state.message);

	const columns = useMemo(() => messageColumns, []);

	return (
		<Admin breadcrumbs={breadcrumbs} title="Daftar Pesan / Komplain">
			<div className="card">
				<DataTable
					columns={columns}
					state={message}
					getList={getList}
				/>
			</div>
		</Admin>
	);
}

export default Index;
