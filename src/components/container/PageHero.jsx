import PropTypes from 'prop-types'

const PageHero = ({image, heading, subheading, button, leftAlign}) => {
    return (
        <div className="section hero-container">
            <div className="hero-image">
                <img src={image} alt="hero" />
            </div>

            <div className={`hero-text ${leftAlign ? "left-align" : ""}`}>
                <h1>{heading}</h1>
                <h2 className={!button ? "no-margin" : ""}>{subheading}</h2>
                {button}
            </div>
        </div>
    )
}

PageHero.defaultProps = {
    heading: "New Hero",
    subheading: "Section Intro",
    leftAlign: false,
}

PageHero.propTypes = {
    heading: PropTypes.string.isRequired,
    subheading: PropTypes.string.isRequired,
    button: PropTypes.element,
    leftAlign: PropTypes.bool,
}

export default PageHero