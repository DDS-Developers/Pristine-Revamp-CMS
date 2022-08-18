// Layouts
import Admin from "~/layouts/Admin";

// Components
import Form from "~/components/articles/Form";

// Constants
import { articleCreate } from "~/constants/breadcrumbs";

function Create() {
	return (
		<Admin breadcrumbs={articleCreate}>
			<Form />
		</Admin>
	);
}

export default Create;
