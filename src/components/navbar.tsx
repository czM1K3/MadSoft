import React, { FC } from "react";
import { NavbarItem } from "../types/navbar";
import Link from "next/link";
import Image from "next/image";
import Logo from "../assets/images/logo.png";
import { useTranslations } from "next-intl";
import LanguageSwitch from "./language-switch";

const NavbarItems: NavbarItem[] = [
	{
		title: "index",
		url: "/",
	},
	{
		title: "about",
		url: "/about",
	},
	{
		title: "projects",
		url: "/projects",
	},
];

const Navbar: FC = () => {
	const t = useTranslations("Routing");
	return (
		<>
			<nav>
				<div className="nav-wrapper container">
					<Link href="/" passHref>
						<a className="brand-logo" style={{ padding: "5px" }}>
							<Image src={Logo} height={50} width={50} alt="Small MadSoft logo" />
						</a>
					</Link>
					<a href="#" data-target="mobile-demo" className="sidenav-trigger">
						<i className="material-icons">menu</i>
					</a>
					<ul className="right hide-on-med-and-down">
						{NavbarItems.map((item) => (
							<li key={item.url}>
								<Link href={item.url}>{t(item.title)}</Link>
							</li>
						))}
						<li>
							<LanguageSwitch />
						</li>
					</ul>
				</div>
			</nav>

			<ul className="sidenav" id="mobile-demo">
				{NavbarItems.map((item) => (
					<li key={item.url}>
						<Link href={item.url}>{t(item.title)}</Link>
					</li>
				))}
				<li>
					<LanguageSwitch />
				</li>
			</ul>
		</>
	);
};

export default Navbar;
