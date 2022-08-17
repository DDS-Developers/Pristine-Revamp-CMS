import dynamic from "next/dynamic";

const SunEditor = dynamic(() => import("suneditor-react"), {
	ssr: false,
});

function CustomEditor({ onChange, onBlur, value }) {
	return (
		<SunEditor
			onChange={onChange}
			onBlur={onBlur}
			setContents={value}
			height="400px"
			setOptions={{
				buttonList: [
					["undo", "redo"],
					["fontSize", "formatBlock"],
					["blockquote"],
					[
						"bold",
						"underline",
						"italic",
						"strike",
						"subscript",
						"superscript",
					],
					["outdent", "indent"],
					["align", "list"],
					["link"],
				],
			}}
		/>
	);
}

export default CustomEditor;
