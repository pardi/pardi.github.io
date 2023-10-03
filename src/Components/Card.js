import PropTypes from 'prop-types'
import styles from '../styles/Carousel.module.scss'

const Card = ({ img, text, state }) => {

    const getStyle = (state) => {
        if (state === "active"){
            return styles.containerCardActive;
        }
        if (state === "left"){
            return styles.containerCardLeft;
        }
        if (state === "right"){
            return styles.containerCardRight;
        }
        if (state === "hidden"){
            return styles.containerCardHidden;
        }
    }

    return (
        <div className={getStyle(state)}>
            <img src={img} className={styles.containerImg} />
            <h3 className={styles.textBoxCard}>
                {text}
            </h3>
        </div>
    )
}

Card.propTypes = {
    img: PropTypes.string,
    text: PropTypes.string,
    state: PropTypes.string,
}


export default Card