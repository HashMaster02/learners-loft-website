import PropTypes from 'prop-types'
import BlogCard from "../BlogCard"

const BlogCardFrame = ({ blogList, button }) => {
    return (
        <>
            <div className="flex-frame">
                {blogList.map((blog) =>
                    <BlogCard
                        key={blog.id}
                        id={blog.id}
                        title={blog.title}
                        preview={blog.preview}
                        date={blog.date} />)}
            </div>
            {button}
        </>
    )
}

BlogCardFrame.propTypes = {
    blogList: PropTypes.array,
    button: PropTypes.element
}

export default BlogCardFrame