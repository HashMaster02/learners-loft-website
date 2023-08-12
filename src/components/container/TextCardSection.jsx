import PropTypes from 'prop-types'
import TextCard from "../TextCard"

const TextCardSection = ({ textList, button }) => {
    return (
        <div className="section text-card-frame">
            {textList.map((text) => <TextCard title={text.title} body={text.body} />)}
            {textList.length ? button : ''}
        </div>
    )
}

TextCardSection.propTypes = {
    textList: PropTypes.array,
    button: PropTypes.element
}

export default TextCardSection