// Layouts
import Admin from "~/layouts/Admin";

// Constants
import { promotionColumns } from "~/constants/columns";
import { promotionIndex } from "~/constants/breadcrumbs";

// Components
import DataTable from "~/components/DataTable";

// Thunks
import { getList } from "~/thunks/promotionThunk";

// Dependencies
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

function Index() {
	const promotion = useSelector((state) => state.promotion);

	const columns = useMemo(() => promotionColumns, []);

	return (
		<Admin breadcrumbs={promotionIndex} title="Daftar Promosi">
			<div className="card">
				<div className="card-header">
					<div className="row justify-content-end">
						<div className="col-lg-2 d-grid">
							<Link href="/promotions/create">
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
					state={promotion}
					getList={getList}
				/>
			</div>
		</Admin>
	);
}

export default Index;
