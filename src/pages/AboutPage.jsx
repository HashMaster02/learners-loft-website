import PageHero from '../components/container/PageHero'
import heroImage from '../assets/images/Tim Wildsmith - Unsplash.jpg'
import TextCardSection from '../components/container/TextCardSection'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const AboutPage = () => {

    const [about, setAbout] = useState(
        [{
            title: "What is Learners Loft?",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit dicta aperiam libero saepe. Odit voluptatibus quibusdam vero, voluptates quo enim, est repellendus, eum minus sapiente commodi nostrum reprehenderit? Eligendi hic, quos earum debitis ea, velit consequatur vel voluptatum mollitia esse, fugit temporibus. Repudiandae in possimus quis quia cum debitis et pariatur unde saepe dolor assumenda fugit error veritatis, nesciunt sapiente aut porro quasi impedit velit sequi alias reprehenderit aliquam. Cupiditate tempora a impedit fugit in inventore ipsa sapiente? Enim maxime aspernatur obcaecati quidem magni laborum omnis quod esse vero. Doloribus tenetur corrupti vero voluptas voluptates quas harum soluta sit, quaerat architecto ea deserunt, exercitationem ipsum debitis quidem, tempora recusandae provident laudantium explicabo hic ullam laboriosam eos expedita quo? Odit quos non quis, deserunt fugiat dicta repellendus animi tempore soluta eligendi enim culpa maxime nesciunt ad provident reiciendis corporis aliquam delectus! Doloribus quos ea, voluptates possimus voluptatibus fugiat voluptate illum tempora ducimus placeat laborum. Corrupti exercitationem, mollitia perspiciatis commodi earum facere accusantium illum tempora nostrum laboriosam illo voluptatem neque recusandae eum assumenda omnis! Quod provident, perspiciatis itaque nesciunt unde modi voluptates consectetur numquam cum omnis, nihil in architecto illo delectus culpa saepe! Tenetur nobis cum, ducimus eaque culpa quis exercitationem quae."
        },
        {
            title: "Who Am I?",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit dicta aperiam libero saepe. Odit voluptatibus quibusdam vero, voluptates quo enim, est repellendus, eum minus sapiente commodi nostrum reprehenderit? Eligendi hic, quos earum debitis ea, velit consequatur vel voluptatum mollitia esse, fugit temporibus. Repudiandae in possimus quis quia cum debitis et pariatur unde saepe dolor assumenda fugit error veritatis, nesciunt sapiente aut porro quasi impedit velit sequi alias reprehenderit aliquam. Cupiditate tempora a impedit fugit in inventore ipsa sapiente? Enim maxime aspernatur obcaecati quidem magni laborum omnis quod esse vero. Doloribus tenetur corrupti vero voluptas voluptates quas harum soluta sit, quaerat architecto ea deserunt, exercitationem ipsum debitis quidem, tempora recusandae provident laudantium explicabo hic ullam laboriosam eos expedita quo? Odit quos non quis, deserunt fugiat dicta repellendus animi tempore soluta eligendi enim culpa maxime nesciunt ad provident reiciendis corporis aliquam delectus! Doloribus quos ea, voluptates possimus voluptatibus fugiat voluptate illum tempora ducimus placeat laborum. Corrupti exercitationem, mollitia perspiciatis commodi earum facere accusantium illum tempora nostrum laboriosam illo voluptatem neque recusandae eum assumenda omnis! Quod provident, perspiciatis itaque nesciunt unde modi voluptates consectetur numquam cum omnis, nihil in architecto illo delectus culpa saepe! Tenetur nobis cum, ducimus eaque culpa quis exercitationem quae."
        },
        {
            title: "The Mission",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit dicta aperiam libero saepe. Odit voluptatibus quibusdam vero, voluptates quo enim, est repellendus, eum minus sapiente commodi nostrum reprehenderit? Eligendi hic, quos earum debitis ea, velit consequatur vel voluptatum mollitia esse, fugit temporibus. Repudiandae in possimus quis quia cum debitis et pariatur unde saepe dolor assumenda fugit error veritatis, nesciunt sapiente aut porro quasi impedit velit sequi alias reprehenderit aliquam. Cupiditate tempora a impedit fugit in inventore ipsa sapiente? Enim maxime aspernatur obcaecati quidem magni laborum omnis quod esse vero. Doloribus tenetur corrupti vero voluptas voluptates quas harum soluta sit, quaerat architecto ea deserunt, exercitationem ipsum debitis quidem, tempora recusandae provident laudantium explicabo hic ullam laboriosam eos expedita quo? Odit quos non quis, deserunt fugiat dicta repellendus animi tempore soluta eligendi enim culpa maxime nesciunt ad provident reiciendis corporis aliquam delectus! Doloribus quos ea, voluptates possimus voluptatibus fugiat voluptate illum tempora ducimus placeat laborum. Corrupti exercitationem, mollitia perspiciatis commodi earum facere accusantium illum tempora nostrum laboriosam illo voluptatem neque recusandae eum assumenda omnis! Quod provident, perspiciatis itaque nesciunt unde modi voluptates consectetur numquam cum omnis, nihil in architecto illo delectus culpa saepe! Tenetur nobis cum, ducimus eaque culpa quis exercitationem quae."
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