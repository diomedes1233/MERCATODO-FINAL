import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.foot}>
      <footer>
        <div className={styles.tex1}>
          <p>
            Mercatodo <br />
            NIT <br />
            PBX
          </p>
        </div>
        <div className={styles.tex2}>
          <p>
            Soporte: <br />
            soporte@mercatodo.com <br />
            018000654897
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Footer
