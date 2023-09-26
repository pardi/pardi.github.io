import PropTypes from 'prop-types'
import styles from '../styles/Sections.module.scss'

const Section = ({ name, type, body }) => {

  console.log(styles.section)
  return (
    <>
        <div className="anchor" id={name + "-anchor"}></div>
        <div id={name} className={styles.aboutEmpty}>
            {body}
        </div>
    </>
  );
}

Section.propTypes = {
  name: PropTypes.string,
  type: PropTypes.oneOf(["empty", "full"]).isRequired
}

export default Section