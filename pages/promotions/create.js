// Layouts
import Admin from "~/layouts/Admin";

// Components
import Form from "~/components/promotions/Form";

// Constants
import { promotionCreate } from "~/constants/breadcrumbs";

function Create() {
	return (
		<Admin breadcrumbs={promotionCreate}>
			<Form />
		</Admin>
	);
}

export default Create;
