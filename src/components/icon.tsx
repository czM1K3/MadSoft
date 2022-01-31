import React, { FC } from "react";
import Image from "next/image";
import styles from "../styles/about.module.scss";

type IconProps = {
	image: string;
	url: string;
};

const Icon: FC<IconProps> = ({ image, url }) => (
	<a href={url} className={styles.hover}>
		<Image src={`/icons/${image}`} width="32px" height="32px" alt={image} />
	</a>
);

export default Icon;
