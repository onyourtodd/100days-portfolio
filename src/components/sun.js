import React from 'react'

import styled from 'styled-components'
import styles from "./sun.module.less"

const SunComponent = styled.div`
  background-color: ${props => props.theme.skyColor}
`;



const Sun = ({ children }) => (
  
    <div className={styles.sunGrid}>
    <SunComponent>
      <div className={styles.sunContainer}>
        <div className={styles.sun}></div>
        <div className={styles.sun1}></div>
        <div className={styles.sun2}></div>
        <div className={styles.sun3}></div>
        <div className={styles.sun4}></div>
      </div>
      </SunComponent>
    </div>
  
)

export default Sun
