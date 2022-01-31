import { useTranslations } from "next-intl";
import React, { FC } from "react";
import { Project } from "../types/project";
import styles from "../styles/projects.module.scss";
import Image from "next/image";

type ProjectProps = Project;

const Project: FC<ProjectProps> = ({
	description,
	image,
	title,
	url,
	download,
	git,
}) => {
	const t = useTranslations("Projects");
	return (
		<div className="card">
			<div className="card-image">
				<Image
					src={image}
					layout="responsive"
					sizes="30vw"
					width="10%"
					height="10%"
					alt={t(title)}
					className={styles.image}
				/>
				<span className={"card-title " + styles.shadow}>{t(title)}</span>
			</div>
			<div className={"card-content " + styles.description}>
				<p>{t(description)}</p>
			</div>
			<div className="card-action">
				{download && <a href={download}>{t("download")}</a>}
				{url && <a href={url}>{t("link")}</a>}
				{git && <a href={git}>{t("git")}</a>}
			</div>
		</div>
	);
};

export default Project;
