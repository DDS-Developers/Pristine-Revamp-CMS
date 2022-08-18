// Constants
import { login as loginSchema } from "~/constants/validationSchemas";

// Dependencies
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { deleteCookie, getCookies, hasCookie, setCookie } from "cookies-next";
import { useEffect } from "react";

function Index() {
	const router = useRouter();

	const {
		register,
		handleSubmit,
		formState: { errors },
		setValue,
	} = useForm({
		resolver: yupResolver(loginSchema),
	});

	useEffect(() => {
		if (hasCookie("remember_me")) {
			const cookies = getCookies();
			const emailString = `${cookies.email_0}@${cookies.email_1}`;

			setValue("email", emailString);
			setValue("remember_me", cookies.remember_me);
		}
	}, []);

	const onSubmit = (data) => {
		if (data.remember_me) {
			const emailArray = data.email.split("@");

			setCookie("email_0", emailArray[0]);
			setCookie("email_1", emailArray[1]);
			setCookie("remember_me", data.remember_me);
		} else {
			deleteCookie("email_0");
			deleteCookie("email_1");
			deleteCookie("remember_me");
		}

		router.push("/purchases");
	};

	return (
		<main className="d-flex w-100 bg-pristine-green">
			<div className="container d-flex flex-column">
				<div className="row vh-100">
					<div className="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
						<div className="d-table-cell align-middle">
							<div className="card mb-0">
								<div className="card-body">
									<div className="m-sm-4">
										<div className="text-center mb-4">
											<h1 className="h2">
												Pristine 8.6+ CMS
											</h1>
										</div>
										<form onSubmit={handleSubmit(onSubmit)}>
											<div className="mb-3">
												<label className="form-label">
													Email
												</label>
												<input
													className="form-control form-control-lg"
													type="email"
													name="email"
													defaultValue=""
													{...register("email")}
												/>
												<div className="form-text text-danger mt-2">
													{errors.email?.message}
												</div>
											</div>
											<div className="mb-3">
												<label className="form-label">
													Password
												</label>
												<input
													className="form-control form-control-lg"
													type="password"
													name="password"
													defaultValue=""
													{...register("password")}
												/>
												<div className="form-text text-danger mt-2">
													{errors.password?.message}
												</div>
											</div>
											<div>
												<label className="form-check">
													<input
														className="form-check-input"
														type="checkbox"
														name="remember-me"
														defaultChecked={false}
														{...register(
															"remember_me"
														)}
													/>
													<span className="form-check-label">
														Remember Me
													</span>
												</label>
											</div>
											<div className="text-center mt-3">
												<button
													type="submit"
													className="btn btn-lg btn-primary"
												>
													Sign in
												</button>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}

export default Index;
