import React from 'react'
import styles from './error.module.scss'

export function Error() {
  return (
    <main className={styles.mainErrorContainer}>
      <span>Oh no!! Something bad happened! Please refresh your page.</span>
    </main>
  )
}
