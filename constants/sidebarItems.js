import {
	faCashRegister,
	faComment,
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
		url: "messages",
		icon: faComment,
		label: "Pesan / Komplain",
	},
];

export default sidebarItems;
