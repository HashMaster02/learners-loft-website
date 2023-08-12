import PageHero from '../components/container/PageHero'
import ContactForm from '../components/ContactForm'
import heroImage from '../assets/images/Himansh Ranpara - Unsplash.jpg'

const ContactPage = () => {
    return (

        <>
            <PageHero
                image={heroImage}
                heading='Contact'
                subheading='Have any questions, comments, or simply want to get in-touch? Feel free to reach out!'
            />

            <ContactForm />
        </>

    )
}
export default ContactPage