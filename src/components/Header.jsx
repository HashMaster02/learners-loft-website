import { Link } from 'react-router-dom'
import { useState } from 'react'
import logo from '../assets/icons/logo.png'
import { FaBars } from 'react-icons/fa'
import { FaX } from 'react-icons/fa6'

const Header = () => {

    const [showMenu, setShowMenu] = useState(false)

    const toggleHamburger = (e) => {
        if (e.target.id === 'hamburger') {
            setShowMenu(true)
        } else {
            setShowMenu(false)
        }
    }

    return (
        <>
            <header onClick={(e) => toggleHamburger(e)} className="navbar">
                <div className="logo">
                    <Link to="/"><img src={logo} alt="text logo" /></Link>
                </div>
                <ul className='nav-list'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/booknotes">Book Notes</Link></li>
                    {/* <li><Link to="/contact">Contact</Link></li> */}
                </ul>

                <button className='btn btn-hamburger'>
                    <FaBars size={32} className={`hamburger-icon ${!showMenu ? "" : "hide"}`} id='hamburger' />
                    <FaX size={32} className={`close-icon ${showMenu ? "" : "hide"}`} />
                </button>
            </header>

            <div className={`mobile-menu ${showMenu ? "is-active" : ""}`}>
                <ul>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/booknotes">Book Notes</Link></li>
                    {/* <li><Link to="/contact">Contact</Link></li> */}
                </ul>
            </div>
        </>
    )
}

export default Header