import React, { useState } from "react";
import styles from '@/components/FAQ/FAQ.module.css';
import Image from 'next/image';

function Faq() {
    const [selectedOption, setSelectedOption] = useState('');

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <section id="FAQ">
            <div className={styles.faq}>
                <div className={styles.faqHead}>
                    <h1 className={styles.faqH}>FAQs</h1>
                    <p className={styles.faqP}>Have questions? Here you&apos;ll find the answers most valued by our partners, along with access to step-by-step instructions and support.</p>
                    <Image
                        className={styles.faqImg}
                        width={400}
                        height={400}
                        layout="responsive"
                        alt="FAQ image"
                        src="/FAQ.png" />
                </div>
            </div>

            <div className={styles.faqContain}>
                <ul>
                    <li><a>About us</a></li>
                    <li><a>Teacher account</a></li>
                    <li><a>Student account</a></li>
                    <li><a>Advertising</a></li>
                    <li><a>Payment</a></li>
                    <li><a>Contact</a></li>
                </ul>

                <div>
                    <h3>About us</h3>
                    <ul>
                        <li>
                            <select id="dropdown" value={selectedOption} onChange={handleSelectChange}>
                                <option value="">Choose an option</option>
                            </select>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Faq;