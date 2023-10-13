import Robot from '../Components/Robot'
import Header from "../Components/Header";
import styles from '../styles/Global.module.scss'

export const FabrikPage = ({ menu }) => {
  return (
    <>
      <Header menu={menu}/>
      <div className={styles.bodyContainer}>
        <h1>Fabrik</h1>
        <p>FabrikFabrikFabrikFabrik</p>
        <Robot />
      </div>
    </>
  )
}
