import ProjCarousel from "./ProjCarousel"


export const Projects = ({ type, projList }) => {
    return (
        <>
            <div className="anchor-padding" id={"projects-padding"} />
            <div className={type==='even'? "section even" : "section odd"}>
            <ProjCarousel projList={projList} />
            </div> 
        </>
    )
}

export default Projects