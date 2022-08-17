import {
	faAddressBook,
	faCashRegister,
	faNewspaper,
	faPercent,
} from "@fortawesome/free-solid-svg-icons";

const sidebarItems = [
	{
		url: "purchases",
		icon: faCashRegister,
		label: "Pembelian",
	},
	{
		url: "promotions",
		icon: faPercent,
		label: "Promosi",
	},
	{
		url: "articles",
		icon: faNewspaper,
		label: "Artikel",
	},
	{
		url: "contacts",
		icon: faAddressBook,
		label: "Kontak",
	},
];

export default sidebarItems;
