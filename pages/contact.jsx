import React, { useState } from "react";
import { FaViber } from "react-icons/fa";
import { MdContentCopy } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Layout from '../components/Layout';

import styles from "./contact.module.scss"

const Contact = () => {
  const [showCopy, setShowCopy] = useState(false);
  const email = "louie.navarro@outlook.com";
  const mobile = "+639488888987";

  const handleCopy = () => {
    if (showCopy === false) {
      setShowCopy(true);
      setTimeout(() => setShowCopy(false), 1000);
    }
  };

  const contactItem = (text, url, icon) => {
    return (
      <div className={styles.contactItem}>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.contactLink} ${styles.hvrIconUp}`}
        >
          {icon}
          <span className={styles.contactLabel}>{text}</span>
        </a>
        <CopyToClipboard text={text} onCopy={() => handleCopy()}>
          <MdContentCopy className={styles.copyIcon} />
        </CopyToClipboard>
      </div>
    );
  };

  const copiedClass = () => {
    return showCopy ? styles.copied : styles.copiedHidden;
  };

  return (
    <Layout>
    <div className="contact wrapper">
      
      <div className={styles.contactContainer}>
        <div className={styles.contactGlow}>       </div>
        {contactItem(
          email,
          `mailto:${email}`,
          <AiOutlineMail className={styles.hvrIcon} />
        )}
        <img src="ph-flag.png" className={styles.phFlag} alt="Philippines"/>
        <div className={copiedClass()}>copied!</div>
      </div>

    </div>
    </Layout>
  );
};

export default Contact;
