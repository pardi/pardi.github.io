import RandomWord from "./RandomWord"
import styles from '../styles/Home.module.scss'

const Home = ({ wordsList }) => {

    return (
        <>
        <div className={styles.home}>
            <h1>Hi!</h1>
            <h2>i am Tommaso Pardi</h2>
            <h3>a Robotics Engineer with a passion for <RandomWord wordsList={wordsList}/></h3>
        </div>
        </>
    )
}

export default Home;