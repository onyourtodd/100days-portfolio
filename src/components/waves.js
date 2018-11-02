import React from 'react'

import styles from "./waves.module.less"

import Fishes from '../components/fishes'

const Waves = ({ children }) => (
    <div className={styles.wavesGrid}>
        <div id={styles.wave}>
            <Fishes />
        </div>
    </div>
)

export default Waves
