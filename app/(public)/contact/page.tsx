import styles from "./contact.module.css";
import Image from "next/image";

import Twitter from "../../../public/assets/iconsItemTech/contact/twitter.svg";
import GitHub from "../../../public/assets/iconsItemTech/contact/mdi_github.svg";
import Locate from "../../../public/assets/iconsItemTech/contact/locate.svg";
import Language from "../../../public/assets/iconsItemTech/contact/language.svg";
import Email from "../../../public/assets/iconsItemTech/contact/email.svg";
import Phone from "../../../public/assets/iconsItemTech/contact/phone.svg";

export default function LoginPage() {
  return (
    <section className={`${styles.container} + ${styles.contact}`}>
      <div className={styles.contactContainer}>
        <div className={styles.mainTitle}>
          <h2>
            Contact <span>Me</span>
            <span className={styles.bgText}>Contact</span>
          </h2>
          <div className={styles.contactContentCon}>
            <div className={styles.leftContact}>
              <h4>Contact me here</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In,
                laborum numquam? Quam excepturi perspiciatis quas quasi.
              </p>
              <div className={styles.contactInfo}>
                <div className={styles.contactItem}>
                  <div className={styles.icon}>
                    <Image src={Locate} alt="" />

                    <span>Localização</span>
                  </div>
                  <p>: Paraíba, João Pessoa</p>
                </div>
                <div className={styles.contactItem}>
                  <div className={styles.icon}>
                    <Image src={Email} alt="" />
                    <span>Email</span>
                  </div>
                  <p>: gustaf_alfredo@outlook.com</p>
                </div>
                <div className={styles.contactItem}>
                  <div className={styles.icon}>
                    <Image src={Phone} alt="" />
                    <span>Celular</span>
                  </div>
                  <p>: (83) 99338-6900 </p>
                </div>
                <div className={styles.contactItem}>
                  <div className={styles.icon}>
                    <Image src={Language} alt="" />
                    <span>Linguagens</span>
                  </div>
                  <p>: Português e Inglês</p>
                </div>
              </div>
              <div className={styles.contactIcons}>
                <div className={styles.contactIcon}>
                  <a href="">
                    <Image src={GitHub} alt="" />
                  </a>
                  <a href="">
                    <Image src={Twitter} alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.rightContact}>
              <form action="" className={styles.contactForm}>
                <div
                  className={`${styles.inputControl} + ${styles.inputControlFirst}`}
                >
                  <input type="text" required placeholder="YOUR NAME" />
                  <input type="email" required placeholder="YOUR EMAIL" />
                </div>
                <div className={styles.inputControl}>
                  <input type="text" required placeholder="ENTER SUBJECT" />
                </div>
                <div className={styles.inputControl}>
                  <textarea
                    name=""
                    id=""
                    cols={15}
                    rows={8}
                    placeholder="Message Here..."
                  ></textarea>
                </div>
                <div className={styles.submitBtn}>
                  <a href="#" className={styles.mainBtn}></a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
