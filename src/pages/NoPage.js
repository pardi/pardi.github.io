import Header from "../Components/Header";
import styles from '../styles/Global.module.scss'

export const NoPage = ({ menu }) => {
    return (
      <>
      <Header menu={menu}/>
      <div className={styles.bodyContainer}>
        <h1>Error 404</h1>
        <p>This page doesn't exist</p>
      </div>
      </>
    )
  }
  