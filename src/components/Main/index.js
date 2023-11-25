import React from 'react'
import styles from './Main.module.scss'

const Main = ({ children }) => {
  return (
    <main className={styles.element}>
      {children}
    </main>
  )
}

export default Main
