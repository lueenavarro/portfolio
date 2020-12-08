import React, { useState } from "react";
import "./Contact.scss";
import { FaViber } from "react-icons/fa";
import { MdContentCopy } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import { CopyToClipboard } from "react-copy-to-clipboard";

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
      <div className="contact-item">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link hvr-icon-up"
        >
          {icon}
          <span className="contact-label">{text}</span>
        </a>
        <CopyToClipboard text={text} onCopy={() => handleCopy()}>
          <MdContentCopy className="copy-icon" />
        </CopyToClipboard>
      </div>
    );
  };

  const copiedClass = () => {
    const className = "copied";
    return showCopy ? className : `${className}--hidden`;
  };

  return (
    <div className="contact wrapper">
      
      <div className="contact-container">
        <div className="contact-glow">       </div>
        {contactItem(
          mobile,
          `viber://chat?number=${encodeURI(mobile)}`,
          <FaViber className="hvr-icon" />
        )}
        {contactItem(
          email,
          `mailto:${email}`,
          <AiOutlineMail className="hvr-icon" />
        )}
        <div>🇵🇭</div>
        <div className={copiedClass()}>copied!</div>
      </div>

    </div>
  );
};

export default Contact;
