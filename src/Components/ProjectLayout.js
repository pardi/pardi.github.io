import styles from '../styles/ProjectLayout.module.scss'

const ProjectLayout = ({ firstDiv_children, secondDiv_children }) => {
  return (
    <div className={styles.project}> 
        <div className={styles.image}>
            {firstDiv_children}
        </div>
        <div className={styles.textContainer}>
            {secondDiv_children}
        </div>
    </div>
  )
}

export default ProjectLayout