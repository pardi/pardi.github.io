import { useState, useEffect, useRef } from "react"
import PropTypes from 'prop-types'
import SliderCard from "../Components/SliderCard"
import styles from '../styles/Slider.module.scss'


const Slider = ({ projList }) => {

    const [idxLeft, setIdxLeft] = useState(0);
    const [idxActive, setIdxActive] = useState(1);
    const [idxRight, setIdxRight] = useState(2);
    const [autoPlay, setAutoPlay] = useState(false);

    const idxLeftRef = useRef();
    idxLeftRef.current = idxLeft;
    const idxRightRef = useRef();
    idxRightRef.current = idxRight;
    const idxActiveRef = useRef();
    idxActiveRef.current = idxActive;
    const autoPlayRef = useRef();
    autoPlayRef.current = autoPlay;

    const loopTimeMs = 3000.0; 

    useEffect(() => {
        const interval = setInterval(() => {
            if (autoPlayRef.current){
                shiftLeft();
            }
        }, loopTimeMs);  

        return () => clearInterval(interval);  // Clean up when component unmounts
    }, [])


    const shiftLeft = () => {
        setIdxActive(idxRightRef.current)
        setIdxLeft((idxLeftRef.current + 1) % projList.length)
        setIdxRight((idxRightRef.current + 1) % projList.length)
    }

    const shiftRight = () => {
        setIdxActive(idxLeftRef.current)
        setIdxLeft((idxLeftRef.current - 1 + projList.length) % projList.length)
        setIdxRight((idxRightRef.current - 1 + projList.length ) % projList.length)
    }
    return (
		<div className={styles.slider}  onMouseEnter={() => setAutoPlay(false)} onMouseLeave={() => setAutoPlay(false)}>

            <div className={styles.btnLeftDiv}>
                <button className={styles.btnLeft} onClick={shiftLeft} />
            </div>
            
            {/* <div className={styles.sliderWrapper}>
                <div className={styles.imgContainer}>
                    <img className={styles.img} src={projList[0].img} alt="" />
                    <p className={styles.imgTitle}>pasdfsdf</p>
                </div>
            </div> */}

            <div className={styles.sliderWrapper}>
                {
                    projList.map((proj, index) => {
                        return <SliderCard img={proj.img} text={proj.text} address={proj.address} state={idxActive === index? "active": idxLeft === index? "left": idxRight === index? "right": "hidden"} />
                    })
                }
            </div>

            <div className={styles.btnRightDiv}>
                <button className={styles.btnRight} onClick={shiftLeft} />
            </div>
		</div>
    )
}

// <div className={styles.imgContainer}>
// <img className={styles.img} src={projList[0].img} alt="" />
// <p className={styles.imgTitle}>pasdfsdf</p>
// </div>


Slider.propTypes = {
    projList: PropTypes.array,
}


export default Slider