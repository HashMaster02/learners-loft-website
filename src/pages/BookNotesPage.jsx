import PageHero from '../components/container/PageHero'
import heroImage from '../assets/images/Julia Joppien Unsplash.jpg'
import BookNotesCardFrame from '../components/container/BookNotesCardFrame'
import PageSection from '../components/container/PageSection'
import { useContext, useEffect } from 'react'
import BookNotesContext from '../contexts/BookNotesContext'

const BookNotesPage = () => {

  const { notes, getNotes } = useContext(BookNotesContext)

  useEffect(() => {
    getNotes()
  }, [])

  return (
    <>
      <PageHero
        image={heroImage}
        heading='Book Notes'
        subheading="Gain insights into the content within different books through my personal Notion notes"
      />

      <PageSection
        title='All Notes'
        subtitle="This is a non-exhaustive collection of notes I've taken on different books I have read back to front. I urge you to read any that strike your interest."
        content={<BookNotesCardFrame
          notesList={notes} />}
      />

    </>
  )
}
export default BookNotesPage