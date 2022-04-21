import type { GetStaticProps, NextPage } from "next";
import Layout from "../components/layout";
import { useTranslations } from "next-intl";
import Image from "next/image";
import ProfilePicture from "../assets/images/profile.jpeg";
import styles from "../styles/about.module.scss";
import Link from "next/link";
import Icon from "../components/icon";
import { Icon as IconType } from "../types/icon";
import Contacts from "../data/contacts";
import Technologies from "../data/technologies";
import { orderByName } from "../utils/order";

type AboutProps = {
	messages: any;
	contacts: IconType[];
};

const About: NextPage<AboutProps> = () => {
	const t = useTranslations("About");
	return (
		<Layout>
			<h1 className={styles.heading}>{t("title")}</h1>
			<div className={styles.profile}>
				<div>
					<Image
						src={ProfilePicture}
						layout="responsive"
						sizes="50vw"
						alt="Profile picture of Michal"
						placeholder="blur"
					/>
				</div>
			</div>
			<p className={styles.text}>
				{t("text1")}
				{` `}
				{t("age")}
				{` `}
				<Link href="/age">{t("here")}</Link>
				{`.`}
			</p>

			<h2 className={styles.heading}>{t("technologies")}</h2>
			<div className={styles.center}>
				<p className={styles.text}>{t("text2")}</p>
			</div>
			<div className={styles.centerIcons}>
				{Technologies.sort((a, b) => orderByName(a.icon, b.icon)).map((contact) => (
					<Icon url={contact.url} image={contact.icon} key={contact.url} />
				))}
			</div>

			<div className={styles.centerPadding}>
				<Link href="/projects">
					<a className="btn indigo">{t("projects")}</a>
				</Link>
			</div>

			<h2 className={styles.heading}>{t("contact")}</h2>
			<div className={styles.centerIcons}>
				{Contacts.map((contact) => (
					<Icon url={contact.url} image={contact.icon} key={contact.url} />
				))}
			</div>
		</Layout>
	);
};

export const getStaticProps: GetStaticProps<AboutProps> = async ({
	locale,
}) => {
	return {
		props: {
			messages: (await import(`../../translations/${locale}.json`)).default,
			contacts: Contacts,
		},
	};
};

export default About;
