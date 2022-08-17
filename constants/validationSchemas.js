// Dependencies
import * as yup from "yup";

export const login = yup.object().shape({
	email: yup
		.string()
		.email("Silakan masukkan email yang valid.")
		.required("Silakan masukkan email anda."),
	password: yup.string().required("Silakan isi password anda."),
});

export const promotion = yup.object().shape({
	title: yup.string().required("Silakan isi judul promo."),
	start_date: yup.date().required("Silakan isi periode mulai."),
	end_date: yup.date().required("Silakan isi periode akhir."),
	code: yup.string().required("Silakan isi kode promo."),
	status: yup.string().required("Silakan isi status.").nullable(),
	tnc: yup.string().required("Silakan isi ketentuan promo.").nullable(),
	image: yup.mixed().required("Silakan isi gambar promo."),
	thumbnail: yup.mixed().required("Silakan isi thumbnail promo."),
});
