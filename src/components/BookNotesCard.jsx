import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


// Will take a link to Notion notes
const BookNotesCard = ({ cover, link }) => {
  return (
    <div className="book-cover">
      <a href={link} target='_blank' rel='noreferrer'>
        <div className="background"></div>
        <img src={cover} alt="book cover" />
      </a >
    </div >
  )
}

BookNotesCard.propTypes = {
  cover: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
}

export default BookNotesCard