// Constants
import sidebarItems from "~/constants/sidebarItems";

// Dependencies
import Head from "next/head";
import Script from "next/script";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog, faSignOutAlt, faUser } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
import { useRouter } from "next/router";
import Simplebar from "simplebar-react";
import Link from "next/link";

const split = require("voca/split");

function Admin({ children, breadcrumbs, title }) {
	const [collapsed, setCollapsed] = useState(false);
	const [urlPath, setUrlPath] = useState("");

	const { asPath } = useRouter();
	const router = useRouter();

	useEffect(() => {
		const path = split(asPath, "/");
		path.shift();

		setUrlPath(path[0]);
	}, []);

	const handleSidebarToggle = () => {
		setCollapsed(!collapsed);
	};
	const handleLogoutClick = () => {
		router.push("/login");
	};

	return (
		<React.Fragment>
			<Head>
				<title>Pristine 8.6+ CMS</title>
				<meta name="description" content="Pristine 8.6+ CMS" />
				<link rel="icon" href="/img/pristine-favicon.png" />
			</Head>
			<Script src="/js/adminkit.js" />
			<div className="wrapper">
				<nav
					id="sidebar"
					className={classNames(
						{
							collapsed: collapsed,
						},
						"sidebar js-sidebar"
					)}
				>
					<Simplebar className="sidebar-content js-simplebar">
						<a className="sidebar-brand" href="index.html">
							<span className="align-middle">
								Pristine 8.6+ CMS
							</span>
						</a>
						<ul className="sidebar-nav">
							{sidebarItems.map((row, i) => (
								<li
									className={classNames(
										{
											active: urlPath === row.url,
										},
										"sidebar-item"
									)}
									key={i}
								>
									<Link href={`/${row.url}`}>
										<a className="sidebar-link">
											<FontAwesomeIcon
												className="icons"
												icon={row.icon}
											/>{" "}
											<span className="align-middle">
												{row.label}
											</span>
										</a>
									</Link>
								</li>
							))}
						</ul>
					</Simplebar>
				</nav>
				<div className="main">
					<nav className="navbar navbar-expand navbar-light navbar-bg">
						<a
							className="sidebar-toggle js-sidebar-toggle"
							onClick={handleSidebarToggle}
						>
							<i className="hamburger align-self-center"></i>
						</a>
						<div className="navbar-collapse collapse">
							<ul className="navbar-nav navbar-align">
								<li className="nav-item dropdown">
									<a
										className="nav-icon dropdown-toggle d-inline-block d-sm-none"
										href="#"
										data-bs-toggle="dropdown"
									>
										<FontAwesomeIcon
											className="icons"
											icon={faCog}
										/>
									</a>
									<a
										className="nav-link dropdown-toggle d-none d-sm-inline-block"
										href="#"
										data-bs-toggle="dropdown"
									>
										<img
											src="https://via.placeholder.com/40"
											className="avatar img-fluid rounded me-1"
											alt="Charles Hall"
										/>{" "}
										<span className="text-dark">
											Charles Hall
										</span>
									</a>
									<div className="dropdown-menu dropdown-menu-end">
										<a
											className="dropdown-item"
											href="pages-profile.html"
										>
											<FontAwesomeIcon
												icon={faUser}
												className="icons"
											/>
											<span className="ms-2">
												Profile
											</span>
										</a>
										<div className="dropdown-divider"></div>
										<a
											className="dropdown-item"
											href="#"
											onClick={handleLogoutClick}
										>
											<FontAwesomeIcon
												icon={faSignOutAlt}
												className="icons"
											/>
											<span className="ms-2">Logout</span>
										</a>
									</div>
								</li>
							</ul>
						</div>
					</nav>
					<main className="content">
						<div className="container-fluid p-0">
							<nav aria-label="breadcrumb">
								<ol className="breadcrumb">
									{breadcrumbs.map((row, i) => (
										<li
											className={classNames(
												{
													active: row.current,
												},
												"breadcrumb-item"
											)}
											key={i}
										>
											{row.current ? (
												row.name
											) : (
												<a href="#">{row.name}</a>
											)}
										</li>
									))}
								</ol>
							</nav>
							<h1 className="h3 mb-3">{title}</h1>
							{children}
						</div>
					</main>
					<footer className="footer">
						<div className="container-fluid">
							<div className="row text-muted">
								<div className="col-6 text-start">
									<p className="mb-0">
										<a
											className="text-muted"
											href="https://adminkit.io/"
											target="_blank"
										>
											<strong>Pristine</strong>
										</a>{" "}
										&copy; 2022
									</p>
								</div>
							</div>
						</div>
					</footer>
				</div>
			</div>
		</React.Fragment>
	);
}

export default Admin;
