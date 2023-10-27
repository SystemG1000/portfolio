import Image from "next/image";
import photo from "../../public/assets/PhotoProfille.png";
import download from "../../public/assets/download.svg";

import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
        <div className={`${styles.profileContainer} + ${styles.active}`}>

          <div className={styles.profileLeft}>
            <div className={styles.profileDetail}></div>
            <div className={styles.profilePhotoBG}>
              <Image src={photo} className={styles.photoProfile} alt="Descrição da imagem" loading="lazy"  />
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
                <span className={styles.btnIcon}><i className={`${styles.fas} + ${styles.faDownload}`}><Image src={download} alt="download" loading="lazy" /></i></span>
              </a>
            </div>
          </div>
          

          {/* <div className={styles.controls}>
            <div className={`${styles.control} + ${styles.active}`}>
              <Image src={home} alt="home" />
            </div>
            <div className={styles.control}>
              <Image src={profile} alt="profile" />
            </div>
            <div className={styles.control}>
              <Image src={folder} alt="folder" />
            </div>
            <div className={styles.control}>
              <Image src={book} alt="book" />
            </div>
            <div className={styles.control}>
              <Image src={email} alt="email" />
            </div>
          </div> */}
        </div>
    </main>
  );
}
