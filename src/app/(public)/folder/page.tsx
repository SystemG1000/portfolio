import Image from "next/image";
import styles from "./folder.module.css";
import Cardapio from "../../../../public/assets/cardapio.png";
import Github from "../../../../public/assets/github.svg";
import Xadrez from "../../../../public/assets/xadrez.png";
import WorkInProgress from "../../../../public/assets/workInProgress.jpg";
import Title from "../../../components/title/Title";

type ObjectFit = "fill" | "contain" | "cover" | "none" | "scale-down";

const imageStyle: {
  width: string;
  height: string;
  borderRadius: string;
  objectFit: ObjectFit;
} = {
  width: "100%",
  height: "300px",
  borderRadius: "15px",
  objectFit: "cover",
};

export default function LoginPage() {
  return (
    <div className={`${styles.content} bg-[#2A2E35`}>
      <section className={styles.container}>
      <Title text="Port" textSpan="folio" span="Portfolio" />

        <p className={styles.portText}>
          {" "}
          Here is some of my work that Ive done in various programming
          languages.
        </p>

        <div className={styles.portfolios}>
          <div className={styles.portfolioItem}>
            <div className={styles.image}>
              <Image
                src={Cardapio}
                alt="download"
                loading="lazy"
                style={imageStyle}
              />
            </div>
            <div className={styles.hoverItems}>
              <h3>Project Source</h3>
              <div className={styles.icons}>
                <a href="#" className={styles.icon}>
                  <Image src={Github} alt=""></Image>
                </a>
              </div>
            </div>
          </div>
          <div className={styles.portfolioItem}>
            <div className={styles.image}>
              <Image
                src={Xadrez}
                alt="download"
                loading="lazy"
                style={imageStyle}
              />
            </div>
            <div className={styles.hoverItems}>
              <h3>Project Source</h3>
              <div className={styles.icons}>
                <a href="#" className={styles.icon}>
                  <Image src={Github} alt=""></Image>
                </a>
              </div>
            </div>
          </div>
          <div className={styles.portfolioItem}>
            <div className={styles.image}>
              <Image
                src={WorkInProgress}
                alt="download"
                loading="lazy"
                style={imageStyle}
              />
            </div>
          </div>
          <div className={styles.portfolioItem}>
            <div className={styles.image}>
              <Image
                src={WorkInProgress}
                alt="download"
                loading="lazy"
                style={imageStyle}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
