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
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function Index() {
	const article = useSelector((state) => state.article);

	const columns = useMemo(() => articleColumns, []);

	return (
		<Admin breadcrumbs={articleIndex} title="Daftar Artikel">
			<div className="card">
				<div className="card-header">
					<div className="row justify-content-end">
						<div className="col-lg-2 d-grid">
							<Link href="/articles/create">
								<a className="btn btn-success">
									<FontAwesomeIcon
										icon={faPlus}
										className="icons"
									/>
									<span className="ms-2">Tambah</span>
								</a>
							</Link>
						</div>
					</div>
				</div>
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
