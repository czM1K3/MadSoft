import type { GetStaticProps, NextPage } from "next";
import Layout from "../../components/layout";
import useTranslation from "next-translate/useTranslation";
import type { PrivacyPolicy as PrivacyPolicyType } from "../../types/privacyPolicy";
import PrivacyPolicyPages from "../../data/privacyPolicy";
import Link from "next/link";

type PrivacyPolicyProps = {
	pages: PrivacyPolicyType[];
};

const PrivacyPolicy: NextPage<PrivacyPolicyProps> = ({ pages }) => {
	const { t } = useTranslation("privacy-policy");
	return (
		<Layout>
			<h1>{t("title")}</h1>
			<ul className="collection">
				{pages.map((page) => (
					<li className="collection-item" key={page.route}>
						<Link href={`/privacy-policy/${page.route}`}>{page.title}</Link>
					</li>
				))}
			</ul>
		</Layout>
	);
};

export const getStaticProps: GetStaticProps<PrivacyPolicyProps> = async ({
	locale,
}) => {
	return {
		props: {
			pages: PrivacyPolicyPages,
		},
	};
};

export default PrivacyPolicy;
