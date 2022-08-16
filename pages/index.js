// Dependencies
import { useRouter } from "next/router";
import { useEffect } from "react";

function Index() {
	const router = useRouter();

	useEffect(() => {
		router.push("/login");
	}, []);

	return <div>You will be redirected ...</div>;
}

export default Index;
