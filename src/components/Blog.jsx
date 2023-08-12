import { createElement } from "react"
import { Link } from "react-router-dom"
import { FaArrowLeft } from 'react-icons/fa6'

const Blog = ({ title, date, body }) => {

    // Returns React elements for rendering
    function renderBody(body) {

        const renderElement = (obj) => {

            if (obj.type === "img") {
                return createElement("img", obj.props, null)
            }

            if ((typeof obj.props.children) === "string") {
                return createElement(obj.type, obj.props, obj.props.children)
            } else {
                return createElement(obj.type, obj.props,
                    obj.props.children.map((child) => renderElement(child))
                )
            }
        }

        return body.props.children.map((element) => renderElement(element))

    }

    return (
        <div className="blog-section">
            <Link className="back-button" to='/blog'>
                <FaArrowLeft size={32} />
                <p>All Blogs</p>
            </Link>
            <div className="blog-info">
                <h1>{title}</h1>
                <small>{date}</small>
            </div>

            <div className="blog-body">
                {renderBody(body)}
            </div>
        </div>
    )
}

export default Blog