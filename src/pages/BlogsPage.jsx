import PageHero from '../components/container/PageHero'
import PageSection from '../components/container/PageSection'
import BlogCardFrame from '../components/container/BlogCardFrame'
import heroImage from '../assets/images/Prophsee Journals - Unsplash.jpg'
import { useContext, useEffect } from 'react'
import BlogContext from '../contexts/BlogContext'

const BlogsPage = () => {
    const { blogs, fetchBlogs } = useContext(BlogContext)

    useEffect(() => {
        fetchBlogs()
    }, [])

    return (
        <>
            <PageHero
                image={heroImage}
                heading='The Blog'
                subheading='The heart of the website, where I share my thoughts and ideas about productivity, learning and more'
            />

            <PageSection
                title='All Blogs'
                subtitle='Unleash your true potential with the following selection of blog posts!'
                content={<BlogCardFrame blogList={blogs} />}

            />

        </>
    )
}
export default BlogsPage