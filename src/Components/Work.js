import { useState } from "react"
import PropTypes from 'prop-types'

export const Work = ({ cvItems }) => {

    const [activeCard, setActiveCard] = useState(-1)

    return (
        <>
        <div className="anchor-padding" id={"work-padding"}></div>
        <div className="timeline">
            <ul className="timeline-container">
                {
                    cvItems.map( (item, index) => {
                        return (<>
                        <li key={index} className={"text-box" + (activeCard === index? ' active': '')} onMouseEnter={()=>setActiveCard(index)} onMouseLeave={()=> setActiveCard(-1)}>
                            <h2>{item.role}</h2>
                            <h3><small>{item.period}</small> - {item.company}</h3>
                            <p>{item.description}</p>
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
    cvItems: PropTypes.arrayOf(PropTypes.string),
}



  export default Work