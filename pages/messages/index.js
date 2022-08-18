// Layouts
import Admin from "~/layouts/Admin";

// Constants
import { messageColumns } from "~/constants/columns";
import { messageIndex } from "~/constants/breadcrumbs";

// Components
import DataTable from "~/components/DataTable";

// Thunks
import { getList } from "~/thunks/messageThunk";

// Dependencies
import { useMemo } from "react";
import { useSelector } from "react-redux";

function Index() {
	const message = useSelector((state) => state.message);

	const columns = useMemo(() => messageColumns, []);

	return (
		<Admin breadcrumbs={messageIndex} title="Daftar Pesan / Komplain">
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
