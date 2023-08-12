import { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate, useParams } from 'react-router-dom'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../firebase.config'
import Blog from '../components/Blog'
import PageSection from '../components/container/PageSection'
import BlogCardFrame from '../components/container/BlogCardFrame'
import BlogContext from '../contexts/BlogContext'
import "../styles/blogStyles.css"

const SingleBlogPage = () => {

    const { blogs, fetchBlogs } = useContext(BlogContext)
    const [blog, setBlog] = useState(null)
    const [loading, setLoading] = useState(true)

    const params = useParams()
    const navigate = useNavigate()

    useEffect(() => {

        // Fetches the blog
        const fetchBlog = async (id) => {
            const docRef = doc(db, "blogs", id)
            const docSnap = await getDoc(docRef)

            if (docSnap.exists()) {
                setBlog(docSnap.data())
            } else {
                navigate('/error')
            }
            setLoading(false)
        }

        fetchBlogs()
        fetchBlog(params.id)

    }, [params.id])

    // Fetch 3 different, random blogs for preview
    const fetchPreview = () => {
        const randomBlogs = blogs.filter(blog => blog.id !== params.id)
        const ret = randomBlogs.sort(() => .5 - Math.random()).slice(0, 3)
        return ret
    }

    if (loading) return <h3>Loading...</h3>

    return (
        <>
            <Blog title={blog.title} date={blog.date} body={blog.body} />

            <PageSection
                title={"Liked What You Read?"}
                subtitle={"You may enjoy these other blogs as well."}
                content={<BlogCardFrame blogList={fetchPreview()}
                    button={<Link to='/blog' className='btn btn-secondary'>view all</Link>}
                />}
            />
        </>
    )

}
export default SingleBlogPage