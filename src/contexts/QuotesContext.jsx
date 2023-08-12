import { createContext, useState, useEffect } from "react"
import { collection, getDocs } from "firebase/firestore"
import { db } from "../firebase.config"

const QuotesContext = createContext()

export const QuotesProvider = ({ children }) => {

    const [quotes, setQuotes] = useState([])
    const [singleQuote, setSingleQuote] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetchQuotes()
    }, [])

    // Fetch quotes
    const fetchQuotes = async () => {
        const querySnapshot = await getDocs(collection(db, "quotes"))
        const data = querySnapshot.docs.map(doc => doc.data())
        setQuotes(data)
        setIsLoading(false)
    }

    // Select a random quote from array
    const getRandomQuote = () => {
        const item = quotes[Math.floor(Math.random() * quotes.length)]
        setSingleQuote(item)
    }

    return <QuotesContext.Provider value={{
        singleQuote,
        getRandomQuote,
        isLoading
    }}>
        {children}
    </QuotesContext.Provider>
}

export default QuotesContext