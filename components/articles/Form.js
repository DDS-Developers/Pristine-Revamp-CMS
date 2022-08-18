// Constants
import { article as articleSchema } from "~/constants/validationSchemas";
import CustomEditor from "~/components/CustomEditor";

// Dependencies
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faInfoCircle,
	faSave,
	faUndo,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

function Form() {
	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(articleSchema),
		defaultValues: {
			content: null,
			image: null,
		},
	});

	const onSubmit = (data) => {
		console.log(data);
	};

	return (
		<div className="card mb-0">
			<div className="card-header d-flex align-items-center">
				<FontAwesomeIcon icon={faInfoCircle} className="icons" />
				<span className="ms-2">Informasi Promosi</span>
			</div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="card-body d-grid gap-3">
					<div className="form-group row">
						<label className="col-lg-3 col-form-label">Judul</label>
						<div className="col-lg">
							<input
								type="text"
								className="form-control"
								{...register("title")}
							/>
							<div className="form-text text-danger mt-2">
								{errors.title?.message}
							</div>
						</div>
					</div>
					<div className="form-group row">
						<label className="col-lg-3 col-form-label">
							Kata Kunci (SEO)
						</label>
						<div className="col-lg">
							<input
								type="text"
								className="form-control"
								{...register("meta_keyword")}
							/>
							<div className="form-text text-danger mt-2">
								{errors.meta_keyword?.message}
							</div>
						</div>
					</div>
					<div className="form-group row">
						<label className="col-lg-3 col-form-label">
							Deskripsi (SEO)
						</label>
						<div className="col-lg">
							<input
								type="text"
								className="form-control"
								{...register("meta_description")}
							/>
							<div className="form-text text-danger mt-2">
								{errors.meta_description?.message}
							</div>
						</div>
					</div>
					<div className="form-group row align-items-center">
						<label className="col-lg-3 col-form-label">
							Status
						</label>
						<div className="col-lg-3">
							<div className="form-check">
								<input
									className="form-check-input"
									type="radio"
									id="status-radio-0"
									value="draft"
									defaultChecked
									{...register("status")}
								/>
								<label
									className="form-check-label"
									htmlFor="status-radio-0"
								>
									Draft
								</label>
							</div>
							<div className="form-check">
								<input
									className="form-check-input"
									type="radio"
									id="status-radio-1"
									value="published"
									{...register("status")}
								/>
								<label
									className="form-check-label"
									htmlFor="status-radio-1"
								>
									Published
								</label>
							</div>
							<div className="form-text text-danger mt-2">
								{errors.status?.message}
							</div>
						</div>
					</div>
					<div className="form-group row">
						<label className="col-lg-3 col-form-label">
							Konten
						</label>
						<div className="col-lg" style={{ zIndex: 0 }}>
							<Controller
								control={control}
								name="content"
								render={({
									field: { onChange, onBlur, value },
								}) => (
									<CustomEditor
										onChange={onChange}
										onBlur={onBlur}
										value={value}
									/>
								)}
							/>
							<div className="form-text text-danger mt-2">
								{errors.content?.message}
							</div>
						</div>
					</div>
					<div className="form-group row">
						<label className="col-lg-3 col-form-label">
							Gambar
						</label>
						<div className="col-lg">
							<input
								type="file"
								className="form-control"
								accept="image/*"
								{...register("image")}
							/>
							<div className="form-text text-danger mt-2">
								{errors.image?.message}
							</div>
						</div>
					</div>
				</div>
				<div className="card-footer">
					<div className="row justify-content-end">
						<div className="col-lg-2 d-grid">
							<Link href="/promotions">
								<a className="btn btn-secondary">
									<FontAwesomeIcon
										icon={faUndo}
										className="icons"
									/>
									<span className="ms-2">Kembali</span>
								</a>
							</Link>
						</div>
						<div className="col-lg-2 d-grid">
							<button type="submit" className="btn btn-success">
								<FontAwesomeIcon
									icon={faSave}
									className="icons"
								/>
								<span className="ms-2">Simpan</span>
							</button>
						</div>
					</div>
				</div>
			</form>
		</div>
	);
}

export default Form;
