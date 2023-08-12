import PropTypes from 'prop-types'

const TextCard = ({ title, body }) => {
    return (
        <div className="text-card">
            <h3>{title}</h3>
            <p>{body}</p>
        </div>
    )
}

TextCard.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.element.isRequired,
}

export default TextCard