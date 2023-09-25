import { useState, useEffect, useRef } from "react"
import PropTypes from 'prop-types'
import ProjCard from "./ProjCard"


const ProjCarousel = ({ projList }) => {

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

    const loopTimeMs = 3000; 

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
		<div className="carousel"  onMouseEnter={() => setAutoPlay(false)} onMouseLeave={() => setAutoPlay(false)}>
            <button className="btn left" onClick={shiftLeft} />
            <div className="carousel-wrapper">
                {
                    projList.map((proj, index) => {
                        return <ProjCard img={proj.img} text={proj.text} state={idxActive === index? 'active': idxLeft === index? 'left': idxRight === index? 'right': 'hidden'} />
                    })
                }
            </div>
            <button className="btn right" onClick={shiftRight} />
		</div>
    )
}

ProjCarousel.propTypes = {
    projList: PropTypes.string,
}


export default ProjCarousel