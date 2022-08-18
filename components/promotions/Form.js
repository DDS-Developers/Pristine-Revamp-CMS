// Constants
import { promotion as promotionSchema } from "~/constants/validationSchemas";
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
import DatePicker from "react-datepicker";

function Form() {
	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(promotionSchema),
		defaultValues: {
			start_date: new Date(),
			end_date: new Date(),
			tnc: null,
			image: null,
			thumbnail: null,
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
							Periode Awal
						</label>
						<div className="col-lg-3">
							<Controller
								control={control}
								name="start_date"
								render={({
									field: { onChange, onBlur, value },
								}) => (
									<DatePicker
										selected={value}
										onChange={onChange}
										onBlur={onBlur}
										dateFormat="dd-MM-yyyy"
										className="form-control"
										onChangeRaw={(e) => {
											e.preventDefault();
										}}
									/>
								)}
							/>
							<div className="form-text text-danger mt-2">
								{errors.start_date?.message}
							</div>
						</div>
					</div>
					<div className="form-group row">
						<label className="col-lg-3 col-form-label">
							Periode Akhir
						</label>
						<div className="col-lg-3">
							<Controller
								control={control}
								name="end_date"
								render={({
									field: { onChange, onBlur, value },
								}) => (
									<DatePicker
										selected={value}
										onChange={onChange}
										onBlur={onBlur}
										dateFormat="dd-MM-yyyy"
										className="form-control"
										onChangeRaw={(e) => {
											e.preventDefault();
										}}
									/>
								)}
							/>
							<div className="form-text text-danger mt-2">
								{errors.end_date?.message}
							</div>
						</div>
					</div>
					<div className="form-group row">
						<label className="col-lg-3 col-form-label">
							Kode Promo
						</label>
						<div className="col-lg-3">
							<input
								type="text"
								className="form-control"
								{...register("code")}
							/>
							<div className="form-text text-danger mt-2">
								{errors.code?.message}
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
							Syarat dan Ketentuan
						</label>
						<div className="col-lg" style={{ zIndex: 0 }}>
							<Controller
								control={control}
								name="tnc"
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
								{errors.tnc?.message}
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
							<div className="form-text mt-2">
								Rekomendasi dimensi gambar adalah 367x338
								piksel.
							</div>
							<div className="form-text text-danger mt-2">
								{errors.image?.message}
							</div>
						</div>
					</div>
					<div className="form-group row">
						<label className="col-lg-3 col-form-label">
							Thumbnail
						</label>
						<div className="col-lg">
							<input
								type="file"
								className="form-control"
								accept="image/*"
								{...register("thumbnail")}
							/>
							<div className="form-text mt-2">
								Rekomendasi dimensi gambar adalah 350x200
								piksel.
							</div>
							<div className="form-text text-danger mt-2">
								{errors.thumbnail?.message}
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
