// Layouts
import Admin from "~/layouts/Admin";

// Components
import Form from "~/components/promotions/Form";

const breadcrumbs = [
	{
		current: false,
		name: "Promosi",
		url: "/promotions",
	},
	{
		current: true,
		name: "Perbarui",
		url: "#",
	},
];

function Update() {
	return (
		<Admin breadcrumbs={breadcrumbs}>
			<Form />
		</Admin>
	);
}

export default Update;
