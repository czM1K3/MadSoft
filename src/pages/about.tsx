import type { GetStaticProps, NextPage } from "next";
import Layout from "../components/layout";
import { useTranslations } from "next-intl";
import Image from "next/image";
import ProfilePicture from "../assets/images/profile.jpeg";
import styles from "../styles/about.module.scss";
import Link from "next/link";

const About: NextPage = () => {
  const t = useTranslations("About");
  return (
    <Layout>
      <h1 className={styles.heading}>{t("title")}</h1>
      <div className={styles.profile}>
        <div>
          <Image src={ProfilePicture} layout="responsive" sizes="50vw" alt="Profile picture of Michal" />
        </div>
      </div>
      <p className={styles.text}>{t("text1")}</p>
      <Link href="/projects">
        <a className="btn indigo">{t("projects")}</a>
      </Link>
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

export default About;
