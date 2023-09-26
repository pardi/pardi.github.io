import React from 'react'
import PropTypes from 'prop-types'
import styles from '../styles/Header.module.scss'

const Header = ({ menu }) => {
  return (
    <>
    <div className={styles.headerShadow} /> 
    <div className={styles.header}>
        <p className={styles.left}>
            Tommaso Pardi 
        </p>
        <nav className={styles.right}>
            {
              menu.map((entry) => {
                return <a key={entry} href={"#" + entry + "-anchor"}>{entry}</a>
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