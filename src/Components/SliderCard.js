import PropTypes from 'prop-types'
import styles from '../styles/Slider.module.scss'

const SliderCard = ({ img, text, state, address }) => {

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
        <div className={styles.imgContainer}>
            <img className={styles.img} src={img} alt="" />
            <p className={styles.imgTitle}>{text}</p>
        </div>
    )
}




SliderCard.propTypes = {
    img: PropTypes.string,
    text: PropTypes.string,
    state: PropTypes.string,
    address: PropTypes.string,
}


export default SliderCard