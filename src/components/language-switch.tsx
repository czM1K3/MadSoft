import React, { FC } from "react";
import US from "../assets/images/us.png";
import CZ from "../assets/images/cs.png";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/language-switch.module.scss";

const LanguageSwitch: FC = () => {
	const router = useRouter();

	if (router.locale === "en") return <Button isEn={false} pathname={router.pathname} />;
	return <Button isEn={true} pathname={router.pathname} />
};

type ButtonProps = {
	isEn: boolean;
	pathname: string;
};

const Button: FC<ButtonProps> = ({ isEn, pathname }) => (
	<Link href={pathname} locale={isEn ? "en":"cs"} passHref>
		<a className={styles.link}>
			<Image src={isEn ? US : CZ} height={30} width={30} />
		</a>
	</Link>
);

export default LanguageSwitch;
