import React from 'react'

import styles from "./waves.module.less"

import Fishes from '../components/fishes'

const Waves = ({ children }) => (
    <div id={styles.wave}>
        <Fishes />
    </div>
)

export default Waves
