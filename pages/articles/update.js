// Layouts
import Admin from "~/layouts/Admin";

// Components
import Form from "~/components/articles/Form";

// Constants
import { articleUpdate } from "~/constants/breadcrumbs";

function Update() {
	return (
		<Admin breadcrumbs={articleUpdate}>
			<Form />
		</Admin>
	);
}

export default Update;
