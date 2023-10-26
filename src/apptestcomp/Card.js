import PropTypes from 'prop-types'
import styles from '../apptestcomp/Card.module.scss'
const slide = document.querySelector('.carousel-slide');

const Card = () => {

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

    return (<>
        <div class={styles.carouselContainer}>
            <div class={styles.carouselSlide}>
                <img src="yadq400.png" alt="Image 5" class={styles.carouselImage} />
                <img src="fabrik400.png" alt="Image 1" class={styles.carouselImage} />
                <img src="fabrik400.png" alt="Image 2" class={styles.carouselImage} />
                <img src="fabrik400.png" alt="Image 3" class={styles.carouselImage} />
                <img src="fabrik400.png" alt="Image 4" class={styles.carouselImage} />
                <img src="yadq400.png" alt="Image 5" class={styles.carouselImage} />
                <img src="fabrik400.png" alt="Image 1" class={styles.carouselImage} />
            </div>
        </div>

        <button id="prevBtn">Prev</button>
        <button id="nextBtn">Next</button>
    </>
);
}

Card.propTypes = {
    img: PropTypes.string,
    text: PropTypes.string,
    state: PropTypes.string,
    address: PropTypes.string,
}


export default Card