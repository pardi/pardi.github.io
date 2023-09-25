const Section = ({ id, text, type }) => {
  return (
    <>
        <div className="anchor-padding" id={id + "-padding"}></div>
        <div id={id} className={type === 'even' ? "container even": "container odd"}>
            <h1> {text} </h1>
        </div>
    </>
  )
}

export default Section