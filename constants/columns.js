// Dependencies
import { faStickyNote, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import dynamic from "next/dynamic";
import Link from "next/link";

const ReactTooltip = dynamic(() => import("react-tooltip"), {
	ssr: false,
});

export const purchaseColumns = [
	{
		name: "Order ID",
		selector: (row) => row.order_id,
		width: "200px",
	},
	{
		name: "Status",
		selector: (row) => row.status,
		width: "200px",
	},
	{
		name: "Nama",
		selector: (row) => row.nama,
		width: "200px",
	},
	{
		name: "Kota",
		selector: (row) => row.kota,
		width: "200px",
	},
	{
		name: "Email",
		selector: (row) => row.email,
		width: "200px",
	},
	{
		name: "Preferensi Bahasa",
		selector: (row) => row.bahasa,
		width: "200px",
	},
];

export const messageColumns = [
	{
		name: "Action(s)",
		width: "200px",
		cell: (row) => (
			<React.Fragment>
				<button className="btn btn-danger ms-2" data-tip="Hapus">
					<FontAwesomeIcon icon={faTrash} className="icons" />
				</button>
				<ReactTooltip />
			</React.Fragment>
		),
	},
	{
		name: "ID",
		selector: (row) => row.id,
		width: "200px",
	},
	{
		name: "Nama",
		selector: (row) => row.name,
		width: "200px",
	},
	{
		name: "Email",
		selector: (row) => row.email,
		width: "200px",
	},
	{
		name: "No. Handphone",
		selector: (row) => row.phone,
		width: "200px",
	},
	{
		name: "Pesan",
		selector: (row) => row.message,
		width: "200px",
	},
	{
		name: "Tanggal",
		selector: (row) => row.created_at,
		width: "200px",
	},
];

export const promotionColumns = [
	{
		name: "Action(s)",
		width: "200px",
		cell: (row) => (
			<React.Fragment>
				<Link href={`/promotions/update?id=${row.id}`}>
					<a className="btn btn-warning" data-tip="Perbarui">
						<FontAwesomeIcon
							icon={faStickyNote}
							className="icons"
						/>
					</a>
				</Link>
				<button className="btn btn-danger ms-2" data-tip="Hapus">
					<FontAwesomeIcon icon={faTrash} className="icons" />
				</button>
				<ReactTooltip />
			</React.Fragment>
		),
	},
	{
		name: "ID",
		selector: (row) => row.id,
		width: "200px",
	},
	{
		name: "Title",
		selector: (row) => row.title,
		width: "200px",
	},
	{
		name: "Kode",
		selector: (row) => row.code,
		width: "200px",
	},
	{
		name: "Status",
		selector: (row) => row.status,
		width: "200px",
	},
	{
		name: "Tanggal",
		selector: (row) => row.created_at,
		width: "200px",
	},
];
