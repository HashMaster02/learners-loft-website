import PageHero from '../components/container/PageHero'
import PageSection from '../components/container/PageSection'
import BlogCardFrame from '../components/container/BlogCardFrame'
import QuoteGenerator from '../components/QuoteWindow'
import heroImage from '../assets/images/RachelStrong_Unsplash.jpg'
import { useContext, useEffect } from 'react'
import BlogContext from '../contexts/BlogContext'
import { Link } from 'react-router-dom'


const HomePage = () => {

    const { blogs, fetchBlogs } = useContext(BlogContext)

    useEffect(() => {
        fetchBlogs()
    }, [])

    return (
        <>
            <PageHero
                image={heroImage}
                heading='For the Learner Within'
                subheading='The hub for tips, tricks and techniques to supercharge your productivity'
                button={<Link to='/blog' className='btn btn-primary'>Start Here</Link>}
                leftAlign={true}
            />

            <PageSection
                title='Latest Blogs'
                subtitle='Here are my latest insights on productivity and learning.'
                content={<BlogCardFrame
                    blogList={blogs.slice(0, 3)}
                    button={<Link to='/blog' className='btn btn-secondary'>read more</Link>} />}
                classes='item-container'
            />

            <PageSection
                title='Quote Generator'
                subtitle='Fuel your day with inspirational quotes from successful people across different backgrounds.'
                content={<QuoteGenerator />}
                classes='item-container'
            />

        </>

    )
}
export default HomePage