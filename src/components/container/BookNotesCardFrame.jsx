import PropTypes from 'prop-types'
import BookNotesCard from "../BookNotesCard"

const BookNotesCardFrame = ({ notesList, button }) => {
  return (
    <>
      <div className="flex-frame">
        {notesList.map((notes) => <BookNotesCard key={notes.id} cover={notes.cover} link={notes.link} />)}
      </div>
      {button}
    </>
  )
}

BookNotesCardFrame.propTypes = {
  notesList: PropTypes.array,
  button: PropTypes.element,
}
export default BookNotesCardFrame