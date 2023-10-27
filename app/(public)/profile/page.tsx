import styles from './page.module.css';
import download from "../../../public/assets/download.svg";
import Image from "next/image"; 

export default function LoginPage() {

  return (
    <div className={styles.aboutSection}>
      <section className={`${styles.container} + ${styles.about}`}>
        <div className={styles.mainTitle}>
          <h2>About <span>me</span><span className={styles.bgText}>my stats</span></h2>
        </div>

        <div className={styles.aboutContainer}>
          <div className={styles.leftAbout}>
            <h4>Information About me</h4>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Eveniet labore nihil obcaecati consequatur. Debitis error doloremque, 
              vero eos vel nemo eius voluptatem dicta tenetur modi. <br /> <br /> La musica
              delectus dolore fugiat exercitationem a, 
              ipsum quidem quo enim natus accusamus labore dolores nam. Unde.
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
              Harum non necessitatibus deleniti eum soluta.
            </p>

            <div className={styles.btnCv}>
              <a href="" className={styles.btnMain}>
                <span className={styles.btnText}>Download CV</span>
                <span className={styles.btnIcon}><i className={`${styles.fas} + ${styles.faDownload}`}><Image src={download} alt="download" loading="lazy" /></i></span>
              </a>
            </div>
          </div>

          <div className={styles.rightAbout}>
            <div className={styles.aboutItem}>
              <div className={styles.abtText}>
                <p className={styles.largeText}>640+</p>
                <p className={styles.smallText}>Projects <br /> Completed</p>
              </div>
            </div>
            <div className={styles.aboutItem}>
              <div className={styles.abtText}>
                <p className={styles.largeText}>640+</p>
                <p className={styles.smallText}>Projects <br /> Completed</p>
              </div>
            </div>
            <div className={styles.aboutItem}>
              <div className={styles.abtText}>
                <p className={styles.largeText}>640+</p>
                <p className={styles.smallText}>Projects <br /> Completed</p>
              </div>
            </div>
            <div className={styles.aboutItem}>
              <div className={styles.abtText}>
                <p className={styles.largeText}>640+</p>
                <p className={styles.smallText}>Projects <br /> Completed</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}