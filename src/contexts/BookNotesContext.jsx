import { createContext, useState } from "react"
import { collection, getDocs } from "firebase/firestore"
import { db } from "../firebase.config"

const BookNotesContext = createContext()

export const BookNotesProvider = ({ children }) => {

    const [notes, setNotes] = useState([])

    // Get notes data from database
    const getNotes = async () => {
        const querySnapshot = await getDocs(collection(db, "book-notes"))
        const data = querySnapshot.docs.map(doc => doc.data())
        setNotes(data)
    }

    return <BookNotesContext.Provider value={{
        notes,
        getNotes
    }}>
        {children}
    </BookNotesContext.Provider>
}

export default BookNotesContext