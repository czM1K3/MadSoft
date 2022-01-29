import type { GetStaticProps, NextPage } from "next";
import Layout from "../components/layout";
import { useTranslations } from "next-intl";

const Projects: NextPage = () => {
  const t = useTranslations("Projects");
  return (
    <Layout>
      {t("title")}
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      messages: (await import (`../../translations/${locale}.json`)).default,
    },
  };
};

export default Projects;
