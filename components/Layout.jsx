import Head from "next/head";

import Menu from "./Menu";
import styles from "./Layout.module.scss";

function Layout({ children }) {
  return (
    <div className={styles.app}>
      <Head>
        <title>Louie Navarro - A Fullstack Developer</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Louie Navarro, Full Stack Developer, Philippines" />
      </Head>
      <Menu />
      <div className={styles.container}>{children}</div>
    </div>
  );
}

export default Layout;
