// Layouts
import Admin from "~/layouts/Admin";

// Constants
import { articleColumns } from "~/constants/columns";
import { articleIndex } from "~/constants/breadcrumbs";

// Components
import DataTable from "~/components/DataTable";

// Thunks
import { getList } from "~/thunks/articleThunk";

// Dependencies
import { useMemo } from "react";
import { useSelector } from "react-redux";

function Index() {
	const article = useSelector((state) => state.article);

	const columns = useMemo(() => articleColumns, []);

	return (
		<Admin breadcrumbs={articleIndex} title="Daftar Artikel">
			<div className="card">
				<DataTable
					columns={columns}
					state={article}
					getList={getList}
				/>
			</div>
		</Admin>
	);
}

export default Index;
