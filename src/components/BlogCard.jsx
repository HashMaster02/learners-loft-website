import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const BlogCard = ({ id, title, preview, date }) => {
    return (
        <Link to={`/blog/${id}`} style={{ color: 'inherit' }} >
            <div className="blog-card" >
                <div className="text">
                    <h2 className="blog-title">{title}</h2>
                    <div className="divider"></div>
                    <div className="blog-preview">{preview}</div>
                </div>
                <p className="blog-date">{date}</p>
            </div>
        </Link>
    )
}

BlogCard.defaultProps = {
    title: 'Error!',
    preview: 'Error occured while loading blog.',
    date: 'XX/XX/XXXX',
}

BlogCard.propTypes = {
    title: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
}

export default BlogCard