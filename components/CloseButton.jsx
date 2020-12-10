import React from 'react'
import styles from "./CloseButton.module.scss";

const CloseButton = ({onClick}) => {
  return (
    <div className={styles.closeButton} onClick={onClick} ></div>
  )
}

export default CloseButton
