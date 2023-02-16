import useTranslation from "next-translate/useTranslation";
import React, { FC } from "react";
import { Project } from "../types/project";
import styles from "../styles/projects.module.scss";
import Image from "next/image";

type ProjectProps = Project & { imageHash: string };

const Project: FC<ProjectProps> = ({
	description,
	image,
	title,
	url,
	download,
	git,
	imageHash,
}) => {
	const { t } = useTranslation("projects");
	return (
		<div className="card">
			<div className="card-image">
				<Image
					src={image}
					layout="responsive"
					sizes="30vw"
					width="500px"
					height="500px"
					alt={t(title)}
					className={styles.image}
					placeholder="blur"
					blurDataURL={imageHash}
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
