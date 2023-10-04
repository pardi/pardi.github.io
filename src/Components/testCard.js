import PropTypes from 'prop-types'
import styles from '../styles/Cards.module.scss'

const CardS = ({ img, text, state}) => {

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
        <div className={styles.cntNA}>
            <img src={img} className={styles.containerImg} alt="" />
            <h3 className={styles.textBoxCard}>
                {text}
            </h3>
        </div>
    )
}

CardS.propTypes = {
    img: PropTypes.string,
    text: PropTypes.string,
    state: PropTypes.string,
}


export default CardS