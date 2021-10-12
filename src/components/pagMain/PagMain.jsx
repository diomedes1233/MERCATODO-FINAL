import React from 'react'
import styles from './PagMain.module.css'

export function PagMain() {
  return (
    // <div className={styles.container1}>
    <div className={styles.container}>
      <div>
        <h2>Usuario</h2>
        <input class="login" type="tex" name="login" required></input>
      </div>
      <div>
        <h2>Contraseña</h2>
        <input class="login" type="tex" name="login" required></input>
      </div>
      <div>
        <h2>Rol</h2>
        <input class="login" type="tex" name="login" required></input>
      </div>
    </div>
    // </div>
  )
}
