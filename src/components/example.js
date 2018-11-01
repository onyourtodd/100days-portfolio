import React from 'react'
import posed from 'react-pose'

import styles from './example.module.less'

const Box = posed.div({
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
})

class Example extends React.Component {
  state = { isVisible: true }

  componentDidMount() {
    setInterval(() => {
      this.setState({ isVisible: !this.state.isVisible })
    }, 1000)
  }

  render() {
    const { isVisible } = this.state
    return (
      <Box className={styles.box} pose={isVisible ? 'visible' : 'hidden'} />
    )
  }
}

export default Example
