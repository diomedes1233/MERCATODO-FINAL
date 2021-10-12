import React from 'react'
import styles from './Header.module.css'

function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.containertitle}>
        <h1 className={styles.title1}>TODO</h1>
        <h2 className={styles.title2}>Merca</h2>
      </div>

      <p className={styles.parr}>
        TE OFRECEMOS LA MEJOR ATENCIÓN, CON LOS MEJORES PRODUCTOS PARA TI Y TODA
        TU FAMILIA, VEN PARA TENER EL GUSTO DE ATENDERTE
      </p>
    </div>
  )
}

export default Header
