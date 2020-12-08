import Head from "next/head";

import Menu from "./Menu";
import styles from "./Layout.module.scss";

function Layout({ children, title: componentTitle }) {
  const title = () => {
    const baseTitle = "Louie";
    if (componentTitle) {
      return `${baseTitle} - ${componentTitle}`;
    }
    return baseTitle;
  };

  return (
    <div className={styles.app}>
      <Head>
        <title>{title()}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Menu />
      <div className={styles.container}>{children}</div>
    </div>
  );
}

export default Layout;
