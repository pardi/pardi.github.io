import PropTypes from 'prop-types'
import styles from '../styles/Slider.module.scss'

const SliderCard = ({ img, text, state, address }) => {

    const getStyle = (state) => {
        if (state === "active"){
            return styles.imgContainerActive;
        }
        if (state === "left"){
            return styles.imgContainerLeft;
        }
        if (state === "right"){
            return styles.imgContainerRight;
        }
        if (state === "hidden"){
            return styles.imgContainerHidden;
        }
    }

    return (
        <div className={getStyle(state)}>
            <a href={address}>
                <img className={styles.img} src={img} alt="" />
                <p className={styles.imgTitle}>{text}</p>
            </a>
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