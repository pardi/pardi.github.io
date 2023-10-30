import { useState } from "react"
import PropTypes from 'prop-types'
import styles from '../styles/Work.module.scss'

export const Work = ({ cvItems }) => {

    const [activeCard, setActiveCard] = useState(-1)

    return (
        <>
        <div className={styles.timeline}>
            <ul className={styles.timelineContainer}>
                {
                    cvItems.map( (item, index) => {
                        return (<>
                        <li key={"cvIt" + index} className={(activeCard === index? styles.textBoxActive: styles.textBox)} onMouseEnter={()=>setActiveCard(index)} onMouseLeave={()=> setActiveCard(-1)}>
                            <h2>{item.role}</h2>
                            <h3><small>{item.period}</small> - {item.company}</h3>
                            <p>{item.description}</p>
                            <div>
                                {
                                    item.desc_items.map( (descItem) => {
                                        return <p>{"* " + descItem}</p>;
                                    })
                                }
                            </div>
                            <div className={styles.containerVideo}>
                                <iframe title={"video" + index} src={item.videos + "?autoplay=0&mute=1&loop=1&control=0"} />
                            </div>
                        </li></>
                        )}
                    )
                }
            </ul>
        </div>
    </>
    )
  }
  
Work.propTypes = {
    cvItems: PropTypes.array,
}



  export default Work