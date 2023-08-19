import PageHero from '../components/container/PageHero'
import heroImage from '../assets/images/Tim Wildsmith - Unsplash.jpg'
import TextCardSection from '../components/container/TextCardSection'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const AboutPage = () => {

    const [about, setAbout] = useState(
        [{
            title: "What is Learners Loft?",
            body: "Learners Loft is your gateway to unlocking enhanced productivity and personal growth. At its core, it's an online haven dedicated to helping you become the best version of yourself. In a world brimming with information, I've taken it upon myself to curate and distill the most effective productivity-boosting techniques. As a fervent learner, I've delved into the pages of countless books, scoured articles, and absorbed insights from various media sources. Learners Loft is the culmination of this endeavor. Imagine having the power to supercharge your productivity without the overwhelming task of sifting through endless sources. Each blog post is crafted to serve you bite-sized nuggets of wisdom. No more endless scrolling or countless hours lost in research. Learners Loft empowers you to enhance your skills, streamline your routines, and maximize your potential, all within the confines of your busy schedule."
        },
        {
            title: "The Mission",
            body: "My mission is to transform the journey of learning into an engaging and enjoyable experience. I understand that in today's fast-paced world, the art of harnessing one's attention and energy is paramount. The primary goal is to empower individuals like you with the tools and techniques necessary to seize control of these invaluable resources. I believe that learning shouldn't be a mundane chore; it should be an adventure that fuels your curiosity and ignites your potential. In a digital era inundated with information, I hope to guide you through the noise and illuminate the path toward productivity and personal growth. I am not just about imparting theoretical knowledge. We're about arming you with the tools to master any skill you desire. My mission is grounded in the belief that with the right approach and the skills acquired here, you can accomplish anything you set your mind to. It's about bridging the gap between information and action, theory and practice. So, welcome to a realm where learning transcends its traditional boundaries. Welcome to a platform that believes in the power of knowledge, the magic of efficiency, and the limitless potential that resides within you. "
        },]
    )

    return (
        <>
            <PageHero
                image={heroImage}
                heading='About'
                subheading='Learn more about what Learners Loft is all about'
            />

            <TextCardSection
                textList={about}
                button={<Link to='/blog' className='btn btn-primary'>Start Learning</Link>}
            />

        </>
    )
}
export default AboutPage