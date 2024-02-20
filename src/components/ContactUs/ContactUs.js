import React, { useState } from "react";
import Image from "next/image";
import styles from "@/components/ContactUs/ContactUs.module.css"
import { ImFacebook2 } from "react-icons/im";
import { FiPhone } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";


function Contactus() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
        // You can send the form data to a server, perform validation, etc.
    };

    return (
        <section id="ContactUs">
            <div id="contactus" className={styles.contactusContainer}>
                <h1 className={styles.contactusHeadline}>GET IN TOUCH</h1>
                <div className={styles.contactusColumn1}>
                    <ImFacebook2 />
                    <p className="contact-type">Social</p>
                    <p className="contact-subtype">Facebook</p>
                    <p className="contact"><hyp>www.facebook.com</hyp></p>
                    <p className="contact-subtype">Twitter</p>
                    <p className="contact"><hyp>www.twitter.com</hyp></p>
                </div>

                <div className={styles.contactusColumn1}>
                    <FiPhone />
                    <h3 className="contact-type">Phone</h3>
                    <h4 className="contact-subtype">Rasara Thathsarana</h4>
                    <h5 className="contact"><hyp>0782881671</hyp></h5>
                    <h4 className="contact-subtype">Kiran Gunathilaka</h4>
                    <h5 className="contact"><hyp>0759874165</hyp></h5>
                    <h4 className="contact-subtype">Thimira Nawodya</h4>
                    <h5 className="contact"><hyp>0714556698</hyp></h5>
                </div>

                <div className={styles.contactusColumn3}>
                    <HiOutlineMail />
                    <h3 className="contact-type">Email</h3>
                    <h4 className="contact-subtype">Complain</h4>
                    <h5 className="contact"><hyp>rasarathathsarana@gmail.com</hyp></h5>
                    <h4 className="contact-subtype">Services</h4>
                    <h5 className="contact"><hyp>services@gmail.com</hyp></h5>
                </div>
            </div>

            <div className="massege-center">
                <h6 className="massege-center-h">Message Us</h6>
                <p>Some text..... hgcjjcjcjcjjcjjjjjjjcjcjcjbcjhchjshcscjs ixboic  icoi cich hbownd ni hk i  i b    h  njbjbcjjcb jcbjbjbcjbj bjb  jejjebcjec hiihih</p>
                <Image 
                src="/Contactus.png"
                alt = "Contact Us image"
                width = {700}
                height = {400}
                />

                <form className="massege-form" onSubmit={handleSubmit}>
                    <label className="name">Name</label>
                    <label className="first">First</label>
                    <input
                        className="first-entry inputFiled"
                        type="text"
                        id="first"
                        name="first"
                        value={formData.first}
                        onChange={handleChange}
                        required
                    />

                    <label className="last">Last</label>
                    <input
                        className="last-entry inputFiled"
                        type="text"
                        id="last"
                        name="last"
                        value={formData.last}
                        onChange={handleChange}
                        required
                    />

                    <label className="email">Email</label>
                    <input
                        className="email-entry inputFiled"
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />

                    <label className="message">Message</label>
                    <textarea
                        className="message-entry"
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="4"
                        cols="50"
                        required
                    />

                    <button className="message-button" type="submit">Submit</button>
                </form>
            </div>
        </section>
    )
}

export default Contactus;   