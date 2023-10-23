import Image from "next/image";
import photo from "../public/assets/PhotoProfille.png";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.profileContainer}>

        <div className={styles.profileLeft}>
          <div className={styles.profileDetail}></div>
          <div className={styles.profilePhotoBG}>
            <Image src={photo} className={styles.photoProfile} alt="Descrição da imagem" />
          </div>
        </div>

        <div className={styles.profileRight}>
          <h1 className={styles.name}>
            Hi, I'm <span>Gustavo Alfredo.</span> A Web Developer.
          </h1>
          <p>
          Sou desenvolvimento web, utilizando TypeScript, React e Vue no front-end, e Java Spring e 
          NodeJS no back-end. Possuo habilidade em prototipagem utilizando o Figma, além de 
          conhecimento na utilização de bancos de dados 
          como PostgreSQL e MySQL. 
          </p>
          <div className={styles.btnCv}>
            <a href="" className={styles.btnMain}>
              <span className={styles.btnText}>Download CV</span>
              <span className={styles.btnIcon}><i className={`${styles.fas} + ${styles.faDownload}`}></i></span>
            </a>
          </div>


          <div className="controls">
        <div className="control active-btn" data-id="home" >
            <i className="fas fa-home"></i>
        </div>
        <div className="control" data-id="about">
            <i className="fas fa-user"></i>
        </div>
        <div className="control" data-id="portfolio">
            <i className="fas fa-briefcase"></i>
        </div>
        <div className="control" data-id="blogs">
            <i className="far fa-newspaper"></i>
        </div>
        <div className="control" data-id="contact">
            <i className="fas fa-envelope-open"></i>
        </div>
    </div>
        </div>
      </div>
    </main>
  );
}
