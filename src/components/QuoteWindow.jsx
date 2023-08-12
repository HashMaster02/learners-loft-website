import { useContext, useEffect } from 'react'
import QuotesContext from '../contexts/QuotesContext'

const QuoteWindow = () => {

    const { getRandomQuote, singleQuote, isLoading } = useContext(QuotesContext)

    useEffect(() => {
        if (!isLoading) {
            getRandomQuote()
        }
    }, [isLoading])

    return (
        <>
            <div className="quote-window">
                <p>{singleQuote.body}</p>
                <p className='quote-author'>~{singleQuote.source}</p>
            </div>
            <button onClick={() => getRandomQuote()} className='btn btn-secondary'>generate</button>
        </>
    )
}

export default QuoteWindow