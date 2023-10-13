import Header from "../Components/Header";
import ProjectLayout from "../Components/ProjectLayout";
import styles from '../styles/Global.module.scss'


export const YadqPage = ({ menu }) => {

  const description = (
    <> 
      <h1>Description</h1>
      <p>
      YADQPage
      </p>
      <a href='https://github.com/pardi'>github code</a>            
    </>);
  
    return (
      <>
        <Header menu={menu}/>
        <div className={styles.bodyContainer}>
          <ProjectLayout firstDiv_children={<img src="fabrik400.png" alt="" />} secondDiv_children={description} />
        </div>
      </>
    )
}
