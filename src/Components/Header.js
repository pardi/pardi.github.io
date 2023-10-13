import React from 'react'
import PropTypes from 'prop-types'
import styles from '../styles/Header.module.scss'

const Header = ({ menu }) => {
  return (
    <>
    <div className={styles.headerShadow} /> 
    <div className={styles.header}>
        <div className={styles.left}>
          <img className={styles.avatar} src="tommaso_artface.png" alt="tommaso avatar"/>
          <p>
              Tommaso Pardi 
          </p>
        </div>
        <nav className={styles.right}>
            {
              menu.map((entry) => {
                return <a key={entry.name} href={entry.address}>{entry.name}</a>
              })
            }
        </nav>
    </div>
    </>
  )
}

Header.propTypes = {
  menu: PropTypes.array
}

export default Header