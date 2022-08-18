// Layouts
import Admin from "~/layouts/Admin";

// Components
import Form from "~/components/promotions/Form";

// Constants
import { promotionUpdate } from "~/constants/breadcrumbs";

function Update() {
	return (
		<Admin breadcrumbs={promotionUpdate}>
			<Form />
		</Admin>
	);
}

export default Update;
