import { createContext, useEffect, useState } from "react"
import { collection, doc, getDoc, getDocs, orderBy, query } from "firebase/firestore"
import { db } from "../firebase.config"

const BlogContext = createContext()

export const BlogProvider = ({ children }) => {

    const [blogs, setBlogs] = useState([])

    // Fetch all blogs
    const fetchBlogs = async () => {
        try {
            const blogData = []

            const blogsRef = collection(db, 'blogs')
            const q = query(blogsRef, orderBy("timestamp", "desc"))
            const blogsSnapshot = await getDocs(q)

            blogsSnapshot.forEach((doc) => {
                return blogData.push(doc.data())
            })

            setBlogs(blogData)

        } catch (error) {
            console.log("Error fetching blogs collection")
        }
    }

    return <BlogContext.Provider value={{
        blogs,
        fetchBlogs
    }}>
        {children}
    </BlogContext.Provider>
}

export default BlogContext