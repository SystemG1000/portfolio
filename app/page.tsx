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
            TESTE
          </h1>
        </div>
      </div>
    </main>
  );
}
