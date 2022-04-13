import type { GetStaticProps, NextPage } from "next";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import Layout from "../components/layout";
import styles from "../styles/age.module.scss";

const myDateOfBirth = 1036048800000;

const Age: NextPage = () => {
	const t = useTranslations("Age");

	const [currentValue, setCurrentValue] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			const miliseconds = (new Date().getTime()) - myDateOfBirth;
			setCurrentValue(miliseconds / 1000 / 60 / 60 / 24 / 365);
		}, 100);
		return () => clearInterval(interval);
	}, []);

	return (
		<Layout title={t("title")}>
			<div className={styles.container}>
				<h1>{t("text")}</h1>
				<h2>{currentValue}</h2>
			</div>
		</Layout>
	);
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
	return {
		props: {
			messages: (await import(`../../translations/${locale}.json`)).default,
		},
	};
};

export default Age;
