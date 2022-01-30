import type { GetStaticProps, NextPage } from "next";
import Layout from "../components/layout";
import { useTranslations } from "next-intl";
import Particles from "react-tsparticles";
import styles from "../styles/index.module.scss";
import Link from "next/link";
import Logo from "../assets/images/logo.png";
import Image from "next/image";

const Home: NextPage = () => {
  const t = useTranslations("Index");
  return (
    <Layout disableContainer>
      <div className={styles.middle}>
        <Image src={Logo} height={200} width={200} alt="Big logo of MadSoft" />
        <div>
          <Link href="/about">
            <a className="btn-floating btn-large waves-effect waves-light indigo"><i className="material-icons">arrow_forward</i></a>
          </Link>
        </div>
      </div>
      <Particles url="/particles.json" />
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
