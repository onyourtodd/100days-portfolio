import React from 'react'

import styles from "./waves.module.less"

import Fishes from '../components/fishes'

const Waves = ({ children }) => (
    <div className={styles.wavesGrid}>
        <div id={styles.wave}>
            <Fishes />
            <div className={styles.bubbles}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </div>
)

export default Waves
