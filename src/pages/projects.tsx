import type { GetStaticProps, NextPage } from "next";
import Layout from "../components/layout";
import { useTranslations } from "next-intl";
import { Project as ProjectType } from "../types/project";
import ProjectList from "../data/projects";
import Project from "../components/project";
import styles from "../styles/projects.module.scss";
import { orderByName } from "../utils/order";
import { getPlaiceholder } from "plaiceholder";

type ProjectsProps = {
	messages: any;
	projects: (ProjectType & { blurHash: string })[];
};

const Projects: NextPage<ProjectsProps> = ({ projects }) => {
	const t = useTranslations("Projects");
	return (
		<Layout>
			<h1 className={styles.heading}>{t("title")}</h1>
			<div className={styles.flex}>
				{projects
					.sort((a, b) => orderByName(t(a.title), t(b.title)))
					.map((project) => (
						<div className={styles.item} key={project.title}>
							<Project
								description={project.description}
								image={project.image}
								imageHash={project.blurHash}
								title={project.title}
								url={project.url}
								download={project.download}
								git={project.git}
							/>
						</div>
					))}
			</div>
		</Layout>
	);
};

export const getStaticProps: GetStaticProps<ProjectsProps> = async ({
	locale,
}) => {
	const projects = await Promise.all(
		ProjectList.map(async (project) => ({
			...project,
			blurHash: (await getPlaiceholder(project.image, { size: 10 })).base64,
		}))
	);
	return {
		props: {
			messages: (await import(`../../translations/${locale}.json`)).default,
			projects,
		},
	};
};

export default Projects;
