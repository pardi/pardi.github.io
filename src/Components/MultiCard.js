import styles from '../styles/Multicard.module.scss'

const MultiCard = ({ }) => {

    return (
        <div className={styles.cardContainer}>
            <img src="fabrik400.png" alt="desc1" className='card img-1' />
            <img src="fabrik400.png" alt="desc3" className={styles.card} />
        </div>
    )
}

export default MultiCard;