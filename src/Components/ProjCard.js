import PropTypes from 'prop-types'

const ProjCard = ({ img, text, state }) => {
    return (
        <div className={"container-card " + state}>
            <img src={img} alt="" />
            <h3 className="text-box-card">
                {text}
            </h3>
        </div>
    )
}

ProjCard.propTypes = {
    img: PropTypes.string,
    text: PropTypes.string,
    state: PropTypes.string,
}


export default ProjCard