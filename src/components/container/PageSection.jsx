import PropTypes from 'prop-types'

const PageSection = ({ title, subtitle, content, classes }) => {
    return (
        <div className={`section ${classes}`}>
            <div className="section-text">
                <h3>{title}</h3>
                <p>{subtitle}</p>
            </div>
            {content}
        </div>
    )
}

PageSection.defaultProps = {
    title: "New Section",
    subtitle: "Section description",
    classes: "item-container"
}

PageSection.propsTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    content: PropTypes.object.isRequired,
    classes: PropTypes.string,
}

export default PageSection