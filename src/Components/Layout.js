import About from "./About";
import styles from '../styles/Global.module.scss'

export const Layout = ({ children }) => {
    return (
      <>
        <main>{children}</main>
        <div className={styles.sectionAnchor} id="about-anchor" />
        <footer id="about" className={styles.aboutEmpty}>
            <h1 className={styles.menuTitle}>ABOUT</h1>
            <About />
        </footer> 
      </>
    )
};

