import React from 'react'

import styles from "./logo.module.less"

const Logo = ({ children }) => (

  <div className={styles.logoGrid}>
    <svg viewBox="0 0 132 132" className={`${styles.bounce} ${styles.logo}`}>
      <rect className={styles.cls1} width="132" height="132" rx="10" ry="10" />
      <text id="t" className={styles.cls2} x="19.602" y="113.992">t</text>
      <text id="f" className={styles.cls2} x="55.227" y="123.809">f</text>
    </svg>
  </div>
)

export default Logo
