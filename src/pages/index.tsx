import type { GetStaticProps, NextPage } from "next";
import Layout from "../components/layout";
import { useTranslations } from "next-intl";

const Home: NextPage = () => {
  const t = useTranslations("Index");
  return (
    <Layout>
      {t("hello")}
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

export default Home;
