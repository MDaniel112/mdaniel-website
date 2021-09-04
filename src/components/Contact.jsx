import React from "react";


function Contact() {
    return(
        <div className="contact-content">
            <h2>Want to get in touch with me?</h2>
            <p>Give me a message on LinkedIn or send me an email.</p>
            <a href="mailto:mocanu.testcont112@gmail.com"><i className="fas fa-envelope-open-text contact-icon"></i></a>
            <a href="https://www.linkedin.com/in/daniel-teodor-mocanu-17a861213/"><i className="fab fa-linkedin contact-icon"></i></a>
            <a href="https://github.com/MDaniel112"><i className="fab fa-github contact-icon"></i></a>
        </div>
    );
}

export default Contact;