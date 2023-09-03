import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import BlogsPage from './pages/BlogsPage'
import ContactPage from './pages/ContactPage'
import AboutPage from './pages/AboutPage'
import BookNotesPage from './pages/BookNotesPage'
import SingleBlogPage from './pages/SingleBlogPage'
import ErrorPage from './pages/ErrorPage'
import ScrollToTop from './components/utils/ScrollToTop'

import { QuotesProvider } from './contexts/QuotesContext'
import { BlogProvider } from './contexts/BlogContext'
import { BookNotesProvider } from './contexts/BookNotesContext'

const App = () => {
    return (
        <BlogProvider>
            <QuotesProvider>
                <BookNotesProvider>
                    <Router>
                        <ScrollToTop />
                        <Header />
                        <div className="container">

                            <Routes>

                                <Route exact path='/' element={<HomePage />} />
                                <Route exact path='/blog' element={<BlogsPage />} />
                                <Route exact path='/about' element={<AboutPage />} />
                                <Route exact path='/booknotes' element={<BookNotesPage />} />
                                {/* <Route exact path='/contact' element={<ContactPage />} /> */}
                                <Route exact path='/error' element={<ErrorPage />} />
                                <Route exact path='/blog/:id' element={<SingleBlogPage />} />


                            </Routes>

                        </div>
                    </Router>
                </BookNotesProvider>
            </QuotesProvider>
        </BlogProvider>
    )
}
export default App