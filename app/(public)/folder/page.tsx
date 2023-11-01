import Image from "next/image";
import styles from "./folder.module.css";

import por1 from "../../../public/assets/port1.jpg";
import Github from "../../../public/assets/github.svg";

type ObjectFit = 'fill' | 'contain' | 'cover' | 'none' | 'scale-down';

const imageStyle: {
  width: string;
  height: string;
  borderRadius: string;
  objectFit: ObjectFit;
} = {
  width: '100%',
  height: '300px',
  borderRadius: '15px',
  objectFit: 'cover'
};

export default function LoginPage() {

    return (
      <div className={styles.content}>
        <section className={styles.container}>
          <div className={styles.mainTitle}>
            <h2>Port<span>folio</span><span className={styles.bgText}>Portfolio</span></h2>
          </div>

          <p className={styles.portText}> Here is some of my work that I've done in various programming languages.</p>

          <div className={styles.portfolios}>
            <div className={styles.portfolioItem}>
              <div className={styles.image}>
                <Image src={por1} alt="download" loading="lazy" style={imageStyle}/>
              </div>
              <div className={styles.hoverItems}>
                <h3>Project Source</h3>
                <div className={styles.icons}>
                  <a href="#" className={styles.icon}>
                    <Image src={Github} alt="" ></Image>
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.portfolioItem}>
              <div className={styles.image}>
                <Image src={por1} alt="download" loading="lazy" style={imageStyle}/>
              </div>
              <div className={styles.hoverItems}>
                <h3>Project Source</h3>
                <div className={styles.icons}>
                  <a href="#" className={styles.icon}>
                    <Image src={Github} alt="" ></Image>
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.portfolioItem}>
              <div className={styles.image}>
                <Image src={por1} alt="download" loading="lazy" style={imageStyle}/>
              </div>
              <div className={styles.hoverItems}>
                <h3>Project Source</h3>
                <div className={styles.icons}>
                  <a href="#" className={styles.icon}>
                    <Image src={Github} alt="" ></Image>
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.portfolioItem}>
              <div className={styles.image}>
                <Image src={por1} alt="download" loading="lazy" style={imageStyle}/>
              </div>
              <div className={styles.hoverItems}>
                <h3>Project Source</h3>
                <div className={styles.icons}>
                  <a href="#" className={styles.icon}>
                    <Image src={Github} alt="" ></Image>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }