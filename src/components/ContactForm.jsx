
const ContactForm = () => {
    return (
        <div className="form-container">
            <form name="Contact Form" action="#" className="contact-form" netlify>
                <div className="person-info">
                    <div className="form-field" id="fname-field">
                        <label htmlFor="fname">First Name</label>
                        <input type="text" id="fname" name="fname" required />
                    </div>
                    <div className="form-field" id="lname-field">
                        <label htmlFor="lname">Last Name</label>
                        <input type="text" id="lname" name="lname" />
                    </div>
                    <div className="form-field" id="email-field">
                        <label htmlFor="email">Email</label>
                        <input type="text" id="email" name="email" required />
                    </div>
                </div>
                <div className="form-field" id="message-field">
                    <label htmlFor="message">Message</label>
                    <textarea type="text" id="message" name="message" required />
                </div>
                <button className="btn btn-primary">Send</button>

            </form>
        </div>
    )
}
export default ContactForm